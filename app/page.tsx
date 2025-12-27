'use client';

import Link from 'next/link';
import { availableTests } from '@/lib/testData';
import { DocumentIcon, TargetIcon, BookIcon, SeedlingIcon, GameIcon } from '@/components/Icons';

export default function Home() {
  const getTestIcon = (testId: string) => {
    if (testId.includes('a2') || testId.includes('b1')) {
      return <SeedlingIcon className="w-6 h-6" style={{ color: '#5A7863' }} />;
    }
    return <BookIcon className="w-6 h-6" style={{ color: '#5A7863' }} />;
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#EBF4DD' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#90AB8B' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#5A7863' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#90AB8B' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full opacity-10" style={{ backgroundColor: '#5A7863' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-10 mt-2 sm:mt-4">
          <div className="mb-4 animate-bounce-in">
            <div className="inline-block mb-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-30" style={{ backgroundColor: '#90AB8B' }}></div>
                <div className="relative bg-white rounded-2xl px-6 sm:px-8 py-4 sm:py-6 shadow-lg border-2" style={{ borderColor: '#90AB8B' }}>
                  <h1 className="text-3xl sm:text-5xl font-bold mb-2" style={{ color: '#3B4953' }}>
                    Practice Yeah
                  </h1>
                  <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#90AB8B' }}></div>
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-lg px-2 font-medium mt-3" style={{ color: '#3B4953' }}>
              All in one english quiz preparation platform students christmas bye bye
            </p>
          </div>

          {/* Game Button */}
          <div className="flex justify-center mt-4">
            <Link
              href="/game"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-md transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#90AB8B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
            >
              <GameIcon className="w-5 h-5" />
              Game
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mb-6 grid grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border" style={{ borderColor: '#90AB8B' }}>
            <div className="text-2xl font-bold mb-1" style={{ color: '#5A7863' }}>{availableTests.length}</div>
            <div className="text-xs font-medium" style={{ color: '#3B4953' }}>Tests</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border" style={{ borderColor: '#90AB8B' }}>
            <div className="text-2xl font-bold mb-1" style={{ color: '#5A7863' }}>
              {availableTests.reduce((sum, test) => sum + test.questions.length, 0)}
            </div>
            <div className="text-xs font-medium" style={{ color: '#3B4953' }}>Questions</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border" style={{ borderColor: '#90AB8B' }}>
            <div className="text-2xl font-bold mb-1" style={{ color: '#5A7863' }}>
              {availableTests.reduce((sum, test) => sum + test.totalPoints, 0)}
            </div>
            <div className="text-xs font-medium" style={{ color: '#3B4953' }}>Total Points</div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="space-y-4">
          {availableTests.map((test, index) => (
            <Link
              key={test.id}
              href={`/test/${test.id}`}
              className="block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-2 transition-all duration-300 touch-manipulation active:scale-[0.98] relative overflow-hidden group-hover:shadow-lg"
                style={{ borderColor: '#90AB8B' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#5A7863';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#90AB8B';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#90AB8B' }}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#EBF4DD' }}>
                        {getTestIcon(test.id)}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-bold mb-1 group-hover:opacity-80 transition-opacity" style={{ color: '#3B4953' }}>
                          {test.title}
                        </h2>
                        <p className="text-sm opacity-80" style={{ color: '#3B4953' }}>
                          {test.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full shadow-sm" style={{ backgroundColor: '#90AB8B' }}>
                        <span className="text-white font-bold text-sm">{test.totalPoints} pts</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#EBF4DD' }}>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: '#EBF4DD', color: '#3B4953' }}>
                        <DocumentIcon className="w-4 h-4" />
                        {test.questions.length} questions
                      </span>

                    </div>
                    <span
                      className="text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 group-hover:scale-105"
                      style={{ backgroundColor: '#90AB8B' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7863'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#90AB8B'}
                    >
                      Shalguulah
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {availableTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400">
              No tests available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
