import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PhilosophyPanel: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Spacious Deep-Purple-to-Crimson Feature Quote Panel */}
      <div className="relative rounded-[2rem] sm:rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#4C1D95]/95 via-[#6D28D9]/90 via-50% to-[#9F1239]/90 border border-[#8B5CF6]/40 shadow-2xl">
        
        {/* Ambient violet and crimson glow overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#E11D48]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Quote mark symbol */}
          <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#A78BFA] leading-none select-none block mb-2 opacity-95">
            “
          </span>

          {/* Core Philosophy Quote */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F3FF] leading-tight tracking-tight mb-6">
            "{PERSONAL_INFO.quote}"
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#F5F3FF]/90 font-light leading-relaxed max-w-2xl mb-8">
            "{PERSONAL_INFO.quoteParagraph}"
          </p>

          {/* Author Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#111019]/80 border border-[#8B5CF6]/50 backdrop-blur-md shadow-lg">
            <span className="font-bebas text-lg tracking-wider text-white">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
            <span className="font-mono text-xs text-[#A78BFA] uppercase tracking-wider font-semibold">
              ENGINEERING PHILOSOPHY
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
