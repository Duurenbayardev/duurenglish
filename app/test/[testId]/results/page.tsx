'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { availableTests } from '@/lib/testData';
import type { Question } from '@/lib/testData';

export default function ResultsPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const testId = params.testId as string;
    const test = availableTests.find((t) => t.id === testId);

    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [timeTaken, setTimeTaken] = useState(0);
    const [score, setScore] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [results, setResults] = useState<
        Array<{
            question: Question;
            userAnswer: number | undefined;
            correctAnswer: number;
            isCorrect: boolean;
            points: number;
        }>
    >([]);
    const [showOnlyMissed, setShowOnlyMissed] = useState(false);

    useEffect(() => {
        if (!test) {
            router.push('/');
            return;
        }

        const answersParam = searchParams.get('answers');
        const timeParam = searchParams.get('time');

        if (answersParam) {
            try {
                const parsedAnswers = JSON.parse(answersParam);
                setAnswers(parsedAnswers);
                calculateResults(test, parsedAnswers);
            } catch (e) {
                console.error('Error parsing answers:', e);
                router.push(`/test/${testId}`);
            }
        } else {
            // If no answers, redirect back to test
            router.push(`/test/${testId}`);
        }

        if (timeParam) {
            setTimeTaken(parseInt(timeParam, 10));
        }
    }, [test, searchParams, router, testId]);

    const calculateResults = (
        testData: typeof test,
        userAnswers: Record<number, number>
    ) => {
        if (!testData) return;

        const calculatedResults = testData.questions.map((question) => {
            const userAnswer = userAnswers[question.id];
            const correctAnswer =
                typeof question.correctAnswer === 'number'
                    ? question.correctAnswer
                    : parseInt(question.correctAnswer.toString(), 10);
            const isCorrect = userAnswer === correctAnswer;
            const points = isCorrect ? question.points : 0;

            return {
                question,
                userAnswer,
                correctAnswer,
                isCorrect,
                points,
            };
        });

        setResults(calculatedResults);

        const totalScore = calculatedResults.reduce((sum, r) => sum + r.points, 0);
        const maxPoints = testData.questions.reduce(
            (sum, q) => sum + q.points,
            0
        );

        setScore(totalScore);
        setTotalPoints(maxPoints);
    };

    if (!test) {
        return null;
    }

    const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0;
    const correctCount = results.filter((r) => r.isCorrect).length;

    // Calculate score out of 800
    // 0% = 200, 80% = 700, 92%+ = 800
    const calculateScore800 = (percent: number): number => {
        if (percent >= 92) {
            return 800;
        } else if (percent >= 80) {
            // Linear interpolation from 80% (700) to 92% (800)
            return Math.round(700 + ((percent - 80) / 12) * 100);
        } else {
            // Linear interpolation from 0% (200) to 80% (700)
            return Math.round(200 + (percent / 80) * 500);
        }
    };

    const score800 = calculateScore800(percentage);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#EBF4DD' }}>
            <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-4xl">
                {/* Score Card */}
                <div className="bg-white rounded-xl p-5 sm:p-8 mb-4 sm:mb-6 shadow-sm border text-center" style={{ borderColor: '#90AB8B' }}>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#3B4953' }}>
                        Test Results
                    </h1>
                    <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: '#3B4953' }}>
                        {test.title}
                    </p>

                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                            <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 128 128">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                    style={{ color: '#EBF4DD' }}
                                />
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 56}`}
                                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)
                                        }`}
                                    style={{
                                        color: percentage >= 80
                                            ? '#5A7863'
                                            : percentage >= 60
                                                ? '#90AB8B'
                                                : '#90AB8B'
                                    }}
                                    className="transition-all duration-1000"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div
                                        className="text-xl sm:text-2xl font-bold"
                                        style={{
                                            color: percentage >= 80
                                                ? '#5A7863'
                                                : percentage >= 60
                                                    ? '#90AB8B'
                                                    : '#90AB8B'
                                        }}
                                    >
                                        {percentage.toFixed(1)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-5">
                        <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-xl sm:text-2xl font-bold" style={{ color: '#3B4953' }}>
                                {score800}
                            </div>
                            <div className="text-xs sm:text-sm" style={{ color: '#3B4953' }}>
                                ЭЕШ Оноо
                            </div>
                        </div>
                        <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-xl sm:text-2xl font-bold" style={{ color: '#3B4953' }}>
                                {percentage.toFixed(1)}%
                            </div>
                            <div className="text-xs sm:text-sm" style={{ color: '#3B4953' }}>
                                Анхны оноо
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-5">
                        <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-lg sm:text-xl font-bold" style={{ color: '#5A7863' }}>
                                {correctCount}
                            </div>
                            <div className="text-xs" style={{ color: '#3B4953' }}>
                                Correct
                            </div>
                        </div>
                        <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-lg sm:text-xl font-bold" style={{ color: '#90AB8B' }}>
                                {results.length - correctCount}
                            </div>
                            <div className="text-xs" style={{ color: '#3B4953' }}>
                                Incorrect
                            </div>
                        </div>
                        <div className="rounded-xl p-3 sm:p-4" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-lg sm:text-xl font-bold text-xs sm:text-base" style={{ color: '#3B4953' }}>
                                {formatTime(timeTaken)}
                            </div>
                            <div className="text-xs" style={{ color: '#3B4953' }}>
                                Time Taken
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-3.5 sm:py-3 rounded-xl font-medium text-white transition-all duration-200 shadow-sm touch-manipulation active:scale-95 w-full sm:w-auto"
                        style={{ backgroundColor: '#90AB8B' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
                    >
                        Back to Tests
                    </button>
                </div>

                {/* Detailed Results */}
                <div className="bg-white rounded-xl p-3 sm:p-5 shadow-sm border" style={{ borderColor: '#90AB8B' }}>
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                        <h2 className="text-lg sm:text-xl font-semibold" style={{ color: '#3B4953' }}>
                            Question Review
                        </h2>
                        <button
                            onClick={() => setShowOnlyMissed(!showOnlyMissed)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all touch-manipulation active:scale-95"
                            style={{
                                backgroundColor: showOnlyMissed ? '#5A7863' : '#EBF4DD',
                                color: showOnlyMissed ? '#FFFFFF' : '#3B4953',
                            }}
                            onMouseEnter={(e) => {
                                if (!showOnlyMissed) {
                                    e.currentTarget.style.backgroundColor = '#90AB8B';
                                    e.currentTarget.style.color = '#FFFFFF';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!showOnlyMissed) {
                                    e.currentTarget.style.backgroundColor = '#EBF4DD';
                                    e.currentTarget.style.color = '#3B4953';
                                }
                            }}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                />
                            </svg>
                            {showOnlyMissed ? 'Show All' : 'Show Only Missed'}
                        </button>
                    </div>

                    <div className="space-y-3 sm:space-y-5">
                        {showOnlyMissed && results.filter(r => !r.isCorrect).length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-base font-medium" style={{ color: '#3B4953' }}>
                                    Great job! You didn't miss any questions.
                                </p>
                            </div>
                        ) : (
                            (showOnlyMissed ? results.filter(r => !r.isCorrect) : results).map((result, index) => {
                                const originalIndex = results.findIndex(r => r.question.id === result.question.id);
                                return (
                                    <div
                                        key={result.question.id}
                                        className="p-3 sm:p-4 rounded-xl border-2"
                                        style={result.isCorrect
                                            ? { borderColor: '#5A7863', backgroundColor: '#EBF4DD' }
                                            : { borderColor: '#90AB8B', backgroundColor: '#EBF4DD' }
                                        }
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-semibold" style={{ color: '#3B4953' }}>
                                                    Q{originalIndex + 1}
                                                </span>
                                                {result.question.task && (
                                                    <span className="text-xs font-medium" style={{ color: '#5A7863' }}>
                                                        {result.question.task}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {result.isCorrect ? (
                                                    <span className="font-semibold" style={{ color: '#5A7863' }}>
                                                        +{result.points} pts
                                                    </span>
                                                ) : (
                                                    <span className="font-semibold" style={{ color: '#90AB8B' }}>
                                                        0 pts
                                                    </span>
                                                )}
                                                {result.isCorrect ? (
                                                    <svg
                                                        className="w-5 h-5"
                                                        style={{ color: '#5A7863' }}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        className="w-5 h-5"
                                                        style={{ color: '#90AB8B' }}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>

                                        <p className="mb-3" style={{ color: '#3B4953' }}>
                                            {result.question.question}
                                        </p>

                                        <div className="space-y-2">
                                            {result.question.options?.map((option, optIndex) => {
                                                const isUserAnswer = result.userAnswer === optIndex;
                                                const isCorrectAnswer = result.correctAnswer === optIndex;

                                                return (
                                                    <div
                                                        key={optIndex}
                                                        className="p-3 rounded-lg border-2"
                                                        style={isCorrectAnswer
                                                            ? { borderColor: '#5A7863', backgroundColor: '#EBF4DD' }
                                                            : isUserAnswer && !result.isCorrect
                                                                ? { borderColor: '#90AB8B', backgroundColor: '#EBF4DD' }
                                                                : { borderColor: '#90AB8B', backgroundColor: 'white' }
                                                        }
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            {isCorrectAnswer && (
                                                                <svg
                                                                    className="w-4 h-4 shrink-0"
                                                                    style={{ color: '#5A7863' }}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            )}
                                                            {isUserAnswer && !result.isCorrect && (
                                                                <svg
                                                                    className="w-4 h-4 shrink-0"
                                                                    style={{ color: '#90AB8B' }}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            )}
                                                            <span
                                                                className={`text-sm ${isCorrectAnswer || (isUserAnswer && !result.isCorrect) ? 'font-medium' : ''}`}
                                                                style={{ color: '#3B4953' }}
                                                            >
                                                                {option}
                                                                {isCorrectAnswer && ' (Correct)'}
                                                                {isUserAnswer && !result.isCorrect && ' (Your Answer)'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

