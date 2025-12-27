'use client';

import { useEffect, useState } from 'react';
import { TrophyIcon, FireIcon, SparklesIcon } from './Icons';

interface CelebrationProps {
    show: boolean;
    message?: string;
    type?: 'correct' | 'milestone' | 'complete' | 'incorrect';
}

export default function Celebration({ show, message, type = 'correct' }: CelebrationProps) {
    const [visible, setVisible] = useState(false);
    const [confetti, setConfetti] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
            if (type === 'milestone' || type === 'complete') {
                setConfetti(true);
                setTimeout(() => setConfetti(false), 2000);
            }
            const timer = setTimeout(() => setVisible(false), 2000);
            return () => clearTimeout(timer);
        } else {
            // Immediately hide when show becomes false
            setVisible(false);
            setConfetti(false);
        }
    }, [show, type]);

    if (!visible) return null;

    const messages = {
        correct: ['Аймар!', 'Daamnn!', 'Good shit!', 'Fire!', 'Awesome!', 'Brilliant!'],
        milestone: ['Craazyyy!', 'Goy ywjishu!', 'Galiig asaaj baina shu!', 'Aimar shuu!'],
        complete: ['Test complete!', 'Congratulations!', 'You did it!'],
        incorrect: ['Za baragdaa\ngehde buruu', 'Nahh bro', 'Arai bishde']
    };

    const displayMessage = message || messages[type][Math.floor(Math.random() * messages[type].length)];

    return (
        <>
            {confetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-confetti"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-10px',
                                backgroundColor: ['#90AB8B', '#5A7863', '#EBF4DD', '#3B4953', '#90AB8B', '#5A7863'][Math.floor(Math.random() * 6)],
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            )}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40">
                <div
                    className={`transform transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                >
                    <div className="bg-white rounded-xl p-6 shadow-xl border animate-bounce-in" style={{ borderColor: '#90AB8B' }}>
                        <div className="text-center">
                            <div className="flex justify-center mb-3 animate-bounce">
                                {type === 'correct' ? (
                                    <div style={{ color: '#90AB8B' }}>
                                        <SparklesIcon className="w-16 h-16" />
                                    </div>
                                ) : type === 'milestone' ? (
                                    <div style={{ color: '#5A7863' }}>
                                        <FireIcon className="w-16 h-16" />
                                    </div>
                                ) : type === 'incorrect' ? (
                                    <div style={{ color: '#90AB8B' }}>
                                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div style={{ color: '#90AB8B' }}>
                                        <TrophyIcon className="w-16 h-16" />
                                    </div>
                                )}
                            </div>
                            <div className="text-2xl font-bold" style={{ color: '#5A7863' }}>
                                {displayMessage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

