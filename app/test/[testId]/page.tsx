'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { availableTests, readingText } from '@/lib/testData';
import type { Question } from '@/lib/testData';
import Celebration from '@/components/Celebration';
import { CheckIcon, TargetIcon } from '@/components/Icons';

export default function TestPage() {
    const params = useParams();
    const router = useRouter();
    const testId = params.testId as string;
    const test = availableTests.find((t) => t.id === testId);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showReadingText, setShowReadingText] = useState(false);
    const [timeStarted] = useState(Date.now());
    const [showCelebration, setShowCelebration] = useState(false);
    const [celebrationType, setCelebrationType] = useState<'correct' | 'milestone' | 'complete' | 'incorrect'>('correct');
    const [questionKey, setQuestionKey] = useState(0);
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!test) {
            router.push('/');
            return;
        }

        // Show reading text if there are reading questions
        const hasReadingQuestions = test.questions.some(
            (q) => q.id >= 22 && q.id <= 34
        );
        if (hasReadingQuestions) {
            setShowReadingText(true);
        }
    }, [test, router]);

    // Cleanup auto-advance timer on unmount
    useEffect(() => {
        return () => {
            if (autoAdvanceTimerRef.current) {
                clearTimeout(autoAdvanceTimerRef.current);
                autoAdvanceTimerRef.current = null;
            }
        };
    }, []);

    // Clear timer when question index changes
    useEffect(() => {
        if (autoAdvanceTimerRef.current) {
            clearTimeout(autoAdvanceTimerRef.current);
            autoAdvanceTimerRef.current = null;
        }
    }, [currentQuestionIndex]);

    if (!test) {
        return null;
    }

    const currentQuestion = test.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === test.questions.length - 1;
    const isFirstQuestion = currentQuestionIndex === 0;
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = test.questions.length;

    const handleAnswerSelect = (optionIndex: number) => {
        // Prevent changing answer if already answered
        if (currentAnswer !== undefined) {
            return;
        }

        setAnswers((prev) => {
            const newAnswers = {
                ...prev,
                [currentQuestion.id]: optionIndex,
            };

            // Check if answer is correct
            const isCorrect = optionIndex === currentQuestion.correctAnswer;

            if (isCorrect) {
                // Show celebration
                const answeredCount = Object.keys(newAnswers).length;
                if (answeredCount % 5 === 0 && answeredCount > 0) {
                    setCelebrationType('milestone');
                } else {
                    setCelebrationType('correct');
                }
                setShowCelebration(true);
            } else {
                // Show incorrect message
                setCelebrationType('incorrect');
                setShowCelebration(true);
            }

            // Clear any existing timer before setting a new one
            if (autoAdvanceTimerRef.current) {
                clearTimeout(autoAdvanceTimerRef.current);
                autoAdvanceTimerRef.current = null;
            }

            // Auto-advance after showing message (2 seconds)
            const timer = setTimeout(() => {
                setShowCelebration(false);
                setQuestionKey((k) => k + 1);
                setCurrentQuestionIndex((prev) => {
                    // Check if we're at the last question before advancing
                    const nextIndex = prev + 1;
                    if (nextIndex < test.questions.length) {
                        return nextIndex;
                    }
                    return prev;
                });
                autoAdvanceTimerRef.current = null; // Clear timer after it fires
            }, 2000);
            autoAdvanceTimerRef.current = timer;

            return newAnswers;
        });
    };

    const handleNext = () => {
        // Clear auto-advance timer if user manually clicks next
        if (autoAdvanceTimerRef.current) {
            clearTimeout(autoAdvanceTimerRef.current);
            autoAdvanceTimerRef.current = null;
        }
        setShowCelebration(false);
        setQuestionKey((k) => k + 1);
        setCurrentQuestionIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex < test.questions.length) {
                return nextIndex;
            }
            return prev;
        });
    };

    const handlePrevious = () => {
        if (!isFirstQuestion) {
            setShowCelebration(false);
            setQuestionKey((k) => k + 1);
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        const answersString = JSON.stringify(answers);
        const timeTaken = Math.floor((Date.now() - timeStarted) / 1000);
        router.push(
            `/test/${testId}/results?answers=${encodeURIComponent(
                answersString
            )}&time=${timeTaken}`
        );
    };

    const handleExit = () => {
        setShowExitConfirm(true);
    };

    const confirmExit = () => {
        router.push('/');
    };

    const cancelExit = () => {
        setShowExitConfirm(false);
    };

    const goToQuestion = (index: number) => {
        // Clear auto-advance timer if user manually navigates
        if (autoAdvanceTimerRef.current) {
            clearTimeout(autoAdvanceTimerRef.current);
            autoAdvanceTimerRef.current = null;
        }
        setShowCelebration(false);
        setQuestionKey((k) => k + 1);
        setCurrentQuestionIndex(index);
    };

    const currentAnswer = answers[currentQuestion.id];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#EBF4DD' }}>
            <Celebration show={showCelebration} type={celebrationType} />

            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl animate-bounce-in border" style={{ borderColor: '#90AB8B' }}>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#3B4953' }}>
                            Exit Test?
                        </h3>
                        <p className="mb-6" style={{ color: '#3B4953' }}>
                            Ийм амархан бууж өгөх юм уу? Арайчдээ. Ямар ч хадгалагдах нтр юм бхгүшү хөгжүүлэгч нь гэж таг залхуу гаая байсын.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={cancelExit}
                                className="flex-1 px-4 py-3 rounded-xl font-medium transition-all"
                                style={{ backgroundColor: '#EBF4DD', color: '#3B4953' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EBF4DD'}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmExit}
                                className="flex-1 px-4 py-3 rounded-xl font-medium text-white transition-colors shadow-sm"
                                style={{ backgroundColor: '#5A7863' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3B4953'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                            >
                                Exit Test
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-5 max-w-4xl">
                {/* Header */}
                <div className="rounded-xl p-3 sm:p-4 mb-3 sm:mb-5 shadow-sm border" style={{ backgroundColor: '#90AB8B', borderColor: '#5A7863' }}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center justify-between sm:justify-start gap-3">
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                                    {test.title}
                                </h1>
                                <div className="text-sm font-medium" style={{ color: '#EBF4DD' }}>
                                    Question {currentQuestionIndex + 1} of {totalQuestions}
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleExit}
                            className="px-4 py-2 rounded-lg font-medium bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-colors touch-manipulation active:scale-95"
                        >
                            Exit
                        </button>
                    </div>
                    <div className="w-full rounded-full h-2 overflow-hidden" style={{ backgroundColor: '#5A7863' }}>
                        <div
                            className="h-2 rounded-full transition-all duration-500 ease-out"
                            style={{
                                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                                backgroundColor: '#EBF4DD'
                            }}
                        />
                    </div>
                    <div className="mt-2 text-xs" style={{ color: '#EBF4DD' }}>
                        {answeredQuestions} of {totalQuestions} answered
                    </div>
                </div>

                {/* Reading Text Toggle */}
                {currentQuestion.id >= 22 && currentQuestion.id <= 34 && (
                    <div className="bg-white rounded-xl p-3 sm:p-5 mb-3 sm:mb-5 shadow-sm border" style={{ borderColor: '#90AB8B' }}>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <h2 className="text-base sm:text-lg font-semibold" style={{ color: '#3B4953' }}>
                                Reading Text
                            </h2>
                            <button
                                onClick={() => setShowReadingText(!showReadingText)}
                                className="text-sm hover:underline touch-manipulation px-2 py-1 rounded transition-colors"
                                style={{ color: '#5A7863' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#90AB8B'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#5A7863'}
                            >
                                {showReadingText ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {showReadingText && (
                            <div className="prose prose-sm max-w-none whitespace-pre-line text-sm sm:text-base leading-relaxed" style={{ color: '#3B4953' }}>
                                {readingText}
                            </div>
                        )}
                    </div>
                )}

                {/* Question Card */}
                <div
                    key={questionKey}
                    className="bg-white rounded-xl p-3 sm:p-5 mb-3 sm:mb-5 shadow-sm border question-enter"
                    style={{ borderColor: '#90AB8B' }}
                >
                    {currentQuestion.task && (
                        <div className="mb-2 sm:mb-3 inline-block px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#90AB8B' }}>
                            {currentQuestion.task}
                        </div>
                    )}
                    <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 leading-relaxed" style={{ color: '#3B4953' }}>
                        {currentQuestion.question}
                    </h2>

                    <div className="space-y-2">
                        {currentQuestion.options?.map((option, index) => {
                            const isSelected = currentAnswer === index;
                            const isCorrect = index === currentQuestion.correctAnswer;
                            const showCorrect = isSelected && isCorrect;
                            const isAnswered = currentAnswer !== undefined;
                            const showIncorrect = isSelected && !isCorrect;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(index)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-3 sm:p-4 py-3 rounded-lg border-2 transition-all duration-200 touch-manipulation transform ${showCorrect
                                        ? 'shadow-sm'
                                        : isSelected
                                            ? 'shadow-sm'
                                            : isAnswered
                                                ? 'opacity-60 cursor-not-allowed'
                                                : 'bg-white hover:border-opacity-60'
                                        } ${isAnswered ? '' : 'active:scale-[0.98]'}`}
                                    style={showCorrect
                                        ? { borderColor: '#5A7863', backgroundColor: '#EBF4DD' }
                                        : showIncorrect
                                            ? { borderColor: '#90AB8B', backgroundColor: '#EBF4DD' }
                                            : isSelected
                                                ? { borderColor: '#90AB8B', backgroundColor: '#EBF4DD' }
                                                : { borderColor: '#90AB8B' }
                                    }
                                    onMouseEnter={(e) => {
                                        if (!isAnswered && !showCorrect && !isSelected) {
                                            e.currentTarget.style.borderColor = '#5A7863';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isAnswered && !showCorrect && !isSelected) {
                                            e.currentTarget.style.borderColor = '#90AB8B';
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        {showCorrect && (
                                            <CheckIcon className="w-6 h-6 animate-bounce-in" style={{ color: '#5A7863' }} />
                                        )}
                                        {showIncorrect && (
                                            <svg className="w-6 h-6 animate-bounce-in" style={{ color: '#90AB8B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                        {isCorrect && isAnswered && !isSelected && (
                                            <CheckIcon className="w-6 h-6" style={{ color: '#5A7863' }} />
                                        )}
                                        <span
                                            className="font-medium text-base sm:text-sm flex-1"
                                            style={{ color: '#3B4953' }}
                                        >
                                            {option}
                                            {isCorrect && isAnswered && !isSelected && ' (Correct)'}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-2">
                        {currentAnswer !== undefined && (
                            <div className="flex items-center gap-2 text-xs font-semibold animate-wiggle" style={{ color: '#5A7863' }}>
                                <CheckIcon className="w-4 h-4" />
                                <span>Answer selected</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Question Numbers Grid - Mobile Optimized */}
                <div className="bg-white rounded-xl p-3 mb-4 shadow-sm border" style={{ borderColor: '#90AB8B' }}>
                    <h3 className="text-sm font-semibold mb-2 text-center flex items-center justify-center gap-2" style={{ color: '#3B4953' }}>
                        <TargetIcon className="w-5 h-5" />
                        Jump to Question
                    </h3>
                    <div className="overflow-x-auto -mx-2 px-2">
                        <div className="flex gap-2 justify-center min-w-max pb-2">
                            {test.questions.map((_, index) => {
                                const isAnswered = answers[test.questions[index].id] !== undefined;
                                const isCorrect = isAnswered && answers[test.questions[index].id] === test.questions[index].correctAnswer;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => goToQuestion(index)}
                                        className={`min-w-[48px] h-12 sm:min-w-[44px] sm:h-11 rounded-lg text-base sm:text-sm font-semibold transition-all duration-200 touch-manipulation active:scale-95 ${index === currentQuestionIndex
                                            ? 'text-white shadow-md scale-105 ring-2'
                                            : isCorrect
                                                ? 'text-white border-2'
                                                : isAnswered
                                                    ? 'border-2'
                                                    : 'border-2 border-transparent'
                                            }`}
                                        style={index === currentQuestionIndex
                                            ? { backgroundColor: '#5A7863', boxShadow: '0 0 0 2px #90AB8B' }
                                            : isCorrect
                                                ? { backgroundColor: '#5A7863', borderColor: '#90AB8B' }
                                                : isAnswered
                                                    ? { backgroundColor: '#EBF4DD', color: '#3B4953', borderColor: '#90AB8B' }
                                                    : { backgroundColor: '#EBF4DD', color: '#3B4953' }
                                        }
                                        onMouseEnter={(e) => {
                                            if (index !== currentQuestionIndex && !isCorrect && !isAnswered) {
                                                e.currentTarget.style.backgroundColor = '#90AB8B';
                                                e.currentTarget.style.color = 'white';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (index !== currentQuestionIndex && !isCorrect && !isAnswered) {
                                                e.currentTarget.style.backgroundColor = '#EBF4DD';
                                                e.currentTarget.style.color = '#3B4953';
                                            }
                                        }}
                                    >
                                        {isCorrect ? (
                                            <CheckIcon className="w-5 h-5 mx-auto" />
                                        ) : (
                                            index + 1
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                    <button
                        onClick={handlePrevious}
                        disabled={isFirstQuestion}
                        className={`flex-1 sm:flex-none px-6 py-3.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 touch-manipulation active:scale-95 border shadow-sm ${isFirstQuestion
                            ? 'cursor-not-allowed opacity-50'
                            : ''
                            }`}
                        style={isFirstQuestion
                            ? { backgroundColor: '#EBF4DD', color: '#90AB8B', borderColor: '#90AB8B' }
                            : { backgroundColor: 'white', color: '#3B4953', borderColor: '#90AB8B' }
                        }
                        onMouseEnter={(e) => {
                            if (!isFirstQuestion) {
                                e.currentTarget.style.backgroundColor = '#EBF4DD';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isFirstQuestion) {
                                e.currentTarget.style.backgroundColor = 'white';
                            }
                        }}
                    >
                        ← Previous
                    </button>

                    {isLastQuestion ? (
                        <button
                            onClick={handleSubmit}
                            className="flex-1 sm:flex-none px-6 py-3.5 sm:py-3 rounded-lg font-semibold text-white transition-colors shadow-sm touch-manipulation active:scale-95"
                            style={{ backgroundColor: '#5A7863' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3B4953'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                        >
                            Submit Test
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="flex-1 sm:flex-none px-6 py-3.5 sm:py-3 rounded-lg font-semibold text-white transition-colors shadow-sm touch-manipulation active:scale-95"
                            style={{ backgroundColor: '#90AB8B' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
                        >
                            Next →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

