import React, { useState } from 'react';
import { CURRENT_INTERESTS } from '../data/portfolioData';
import { ArrowUpRight, Compass } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="interests" className="py-24 bg-[#08080C] border-t border-[#302238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-10 border-b border-[#302238] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
              <span className="text-[#E11D48]">04</span>
              <span className="text-[#8B5CF6]">/</span>
              <span className="text-[#A78BFA]">EXPLORING</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#F5F3FF] tracking-wide">
              WHAT I'M EXPLORING
            </h2>
            <p className="font-heading text-sm sm:text-base text-[#AAA5B8] mt-2 font-light max-w-xl">
              Emerging technical domains, hardware architectures, and algorithmic methods currently under active study and prototyping.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#AAA5B8]">
            <Compass className="w-4 h-4 text-[#8B5CF6]" />
            <span>Active Research & Learning</span>
          </div>
        </div>

        {/* Compact Editorial List with Crimson Index Numbers and Violet Hover */}
        <div className="divide-y divide-[#302238] border-y border-[#302238]">
          {CURRENT_INTERESTS.map((interest, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={interest.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-6 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#111019] transition-all duration-200 cursor-default rounded-xl"
              >
                <div className="flex items-start md:items-center gap-4 sm:gap-8">
                  <span className="font-bebas text-2xl sm:text-3xl text-[#E11D48] group-hover:text-[#FF304F] transition-colors tracking-wider w-8">
                    {interest.number}
                  </span>
                  
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F3FF] group-hover:text-white transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAA5B8] mt-1 font-light max-w-2xl">
                      {interest.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                  <span className="font-mono text-[10px] text-[#A78BFA] uppercase tracking-widest group-hover:text-white transition-colors">
                    EXPLORING
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#302238] group-hover:border-[#8B5CF6] flex items-center justify-center text-[#AAA5B8] group-hover:text-[#A78BFA] transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-[#AAA5B8]/60">
            Note: These areas represent ongoing learning curricula and experimental development rather than completed commercial certifications.
          </p>
        </div>
      </div>
    </section>
  );
};
