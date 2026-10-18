import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';

export const QuickStats: React.FC = () => {
  return (
    <section id="stats" className="border-y border-[#302238] bg-[#111019] py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#302238]">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.number}
              className={`flex flex-col justify-between py-6 md:py-2 ${
                idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
              }`}
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-bebas text-3xl sm:text-4xl text-[#E11D48] tracking-wider">
                  {stat.number}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#A78BFA] uppercase font-semibold">
                  {stat.label}
                </span>
              </div>

              <div className="mt-1">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F3FF] leading-snug">
                  {stat.value}
                </h3>
                <p className="font-mono text-xs text-[#AAA5B8] mt-1.5 font-light">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
