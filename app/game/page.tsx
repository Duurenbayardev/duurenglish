'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GameIcon } from '@/components/Icons';

const WORDS = [
    'HANERDENE', 'DOCUMENT', 'MISHEEL', 'IHBAYAR', 'HATANERDENE', 'NANDINBOLOR', 'ANAND',
    'ENGLISH', 'STUPID', 'COOKING', 'FUNCTION', 'CHRISTMAS',
    'PART', 'SCREEN', 'DATA STORAGE', 'CONNECTION', 'PROTECTION',
    'STUDY', 'PRACTICE', 'RULES', 'ARRIVE', 'CHECKING', 'ICECREAM', 'MONSTER', 'CONSISTENT', 'MOTIVATION',
    'UNDERWEAR', 'UNDERWORLD', 'PUNISHMENT'
];

const NAMES = ['HAN ERDENE', 'MISHEEL', 'IHBAYAR', 'HATANERDENE'];

const WORD_TRANSLATIONS: Record<string, string> = {
    'DOCUMENT': 'Баримт бичиг',
    'ENGLISH': 'Англи хэл',
    'STUPID': 'Тэнэг',
    'COOKING': 'Хоол хийх',
    'FUNCTION': 'Функц',
    'CHRISTMAS': 'Зул сар',
    'PART': 'Хэсэг',
    'SCREEN': 'Дэлгэц',
    'KILLER': 'Алуурчин',
    'CONNECTION': 'Холболт',
    'PROTECTION': 'Хамгаалалт',
    'STUDY': 'Сургалт',
    'PRACTICE': 'Дасгал',
    'RULES': 'Дүрэм',
    'ARRIVE': 'Ирэх',
    'CHECKING': 'Шалгах',
    'ICECREAM': 'Зайрмаг',
    'MONSTER': 'Мангас ',
    'CONSISTENT': 'Тууштай',
    'MOTIVATION': 'Урам зориг',
    'UNDERWEAR': 'Дотуур хувцас',
    'UNDERWORLD ': 'Газар Доорх',
    'PUNISHMENT ': 'Шийтгэл',

};

const MAX_WRONG_GUESSES = 6;

const HANGMAN_PARTS = [
    <g key="head"><circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2" /></g>,
    <g key="body"><line x1="50" y1="40" x2="50" y2="70" stroke="currentColor" strokeWidth="2" /></g>,
    <g key="left-arm"><line x1="50" y1="50" x2="35" y2="60" stroke="currentColor" strokeWidth="2" /></g>,
    <g key="right-arm"><line x1="50" y1="50" x2="65" y2="60" stroke="currentColor" strokeWidth="2" /></g>,
    <g key="left-leg"><line x1="50" y1="70" x2="35" y2="85" stroke="currentColor" strokeWidth="2" /></g>,
    <g key="right-leg"><line x1="50" y1="70" x2="65" y2="85" stroke="currentColor" strokeWidth="2" /></g>,
];

export default function HangmanGame() {
    const [word, setWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

    const startNewGame = () => {
        const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        setWord(randomWord);
        setGuessedLetters(new Set());
        setWrongGuesses(0);
        setGameStatus('playing');
    };

    useEffect(() => {
        startNewGame();
    }, []);

    const handleLetterClick = (letter: string) => {
        if (gameStatus !== 'playing' || guessedLetters.has(letter)) return;

        const newGuessedLetters = new Set(guessedLetters);
        newGuessedLetters.add(letter);
        setGuessedLetters(newGuessedLetters);

        if (!word.includes(letter)) {
            const newWrongGuesses = wrongGuesses + 1;
            setWrongGuesses(newWrongGuesses);

            if (newWrongGuesses >= MAX_WRONG_GUESSES) {
                setGameStatus('lost');
            }
        } else {
            // Check if all letters are guessed
            const allLettersGuessed = word.split('').every(char => newGuessedLetters.has(char));
            if (allLettersGuessed) {
                setGameStatus('won');
            }
        }
    };

    const displayWord = word.split('').map(letter =>
        guessedLetters.has(letter) ? letter : '_'
    ).join(' ');

    const getHint = () => {
        if (NAMES.includes(word)) {
            return 'Хүний нэр';
        }
        return WORD_TRANSLATIONS[word] || '';
    };

    const showHint = wrongGuesses === MAX_WRONG_GUESSES - 1 && gameStatus === 'playing';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#EBF4DD' }}>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#90AB8B' }}></div>
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#5A7863' }}></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#90AB8B' }}></div>
                <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full opacity-10" style={{ backgroundColor: '#5A7863' }}></div>
            </div>

            <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-4xl relative z-10">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-lg font-medium text-white transition-colors"
                        style={{ backgroundColor: '#90AB8B' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
                    >
                        ← Back
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#3B4953' }}>
                        Hangman Game
                    </h1>
                    <button
                        onClick={startNewGame}
                        className="px-4 py-2 rounded-lg font-medium text-white transition-colors"
                        style={{ backgroundColor: '#90AB8B' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
                    >
                        New Game
                    </button>
                </div>

                {/* Game Area */}
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2" style={{ borderColor: '#90AB8B' }}>
                    {/* Hangman Drawing */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            {/* Gallows */}
                            <svg width="100" height="100" className="mb-4" style={{ color: '#5A7863' }}>
                                <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="3" />
                                <line x1="20" y1="90" x2="20" y2="10" stroke="currentColor" strokeWidth="3" />
                                <line x1="20" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="3" />
                                <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="3" />

                                {/* Hangman parts */}
                                {HANGMAN_PARTS.slice(0, wrongGuesses).map((part, index) => (
                                    <g key={index} style={{ color: '#3B4953' }}>
                                        {part}
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>

                    {/* Word Display */}
                    <div className="text-center mb-8">
                        <div className="text-3xl sm:text-4xl font-bold tracking-wider mb-4" style={{ color: '#3B4953', fontFamily: 'monospace' }}>
                            {displayWord}
                        </div>
                        <div className="text-sm font-medium" style={{ color: '#5A7863' }}>
                            Wrong guesses: {wrongGuesses} / {MAX_WRONG_GUESSES}
                        </div>
                    </div>

                    {/* Hint Display */}
                    {showHint && (
                        <div className="text-center mb-6 p-4 rounded-lg border-2 animate-pulse" style={{ backgroundColor: '#EBF4DD', borderColor: '#90AB8B' }}>
                            <div className="text-sm font-semibold mb-1" style={{ color: '#5A7863' }}>💡 Hint (1 life left):</div>
                            <div className="text-lg font-bold" style={{ color: '#3B4953' }}>{getHint()}</div>
                        </div>
                    )}

                    {/* Game Status Messages */}
                    {gameStatus === 'won' && (
                        <div className="text-center mb-6 p-4 rounded-lg" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-2xl font-bold mb-2" style={{ color: '#5A7863' }}>🎉 Congratulations! You won! 🎉</div>
                            <div className="text-sm" style={{ color: '#3B4953' }}>The word was: <strong>{word}</strong></div>
                        </div>
                    )}

                    {gameStatus === 'lost' && (
                        <div className="text-center mb-6 p-4 rounded-lg" style={{ backgroundColor: '#EBF4DD' }}>
                            <div className="text-2xl font-bold mb-2" style={{ color: '#5A7863' }}>😢 Game Over!</div>
                            <div className="text-sm" style={{ color: '#3B4953' }}>The word was: <strong>{word}</strong></div>
                        </div>
                    )}

                    {/* Alphabet Buttons */}
                    <div className="grid grid-cols-6 sm:grid-cols-9 gap-2 mb-6">
                        {alphabet.map(letter => {
                            const isGuessed = guessedLetters.has(letter);
                            const isWrong = isGuessed && !word.includes(letter);
                            const isCorrect = isGuessed && word.includes(letter);
                            const isDisabled = gameStatus !== 'playing' || isGuessed;

                            return (
                                <button
                                    key={letter}
                                    onClick={() => handleLetterClick(letter)}
                                    disabled={isDisabled}
                                    className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all touch-manipulation active:scale-95 ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                                        }`}
                                    style={{
                                        backgroundColor: isCorrect
                                            ? '#90AB8B'
                                            : isWrong
                                                ? '#ef4444'
                                                : '#EBF4DD',
                                        color: isCorrect || isWrong ? 'white' : '#3B4953',
                                        border: `2px solid ${isCorrect ? '#5A7863' : isWrong ? '#dc2626' : '#90AB8B'}`,
                                    }}
                                >
                                    {letter}
                                </button>
                            );
                        })}
                    </div>

                    {/* Instructions */}
                    <div className="text-center text-sm" style={{ color: '#3B4953' }}>
                        <p>Guess the word by clicking on the letters!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

