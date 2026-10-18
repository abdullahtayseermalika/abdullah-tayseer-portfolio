import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Cpu, Eye, Radio, Code2 } from 'lucide-react';

export const CapabilitiesStrip: React.FC = () => {
  const icons = [
    <Cpu className="w-4 h-4 text-[#8B5CF6]" key="cpu" />,
    <Eye className="w-4 h-4 text-[#E11D48]" key="eye" />,
    <Radio className="w-4 h-4 text-[#A78BFA]" key="radio" />,
    <Code2 className="w-4 h-4 text-[#FF304F]" key="code" />,
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-4">
      {/* Dark Rounded Strip with Purple-Red Accents */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#111019] border border-[#302238] px-6 sm:px-10 py-6 sm:py-7 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
        
        {/* Strip Header */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F5F3FF] font-semibold whitespace-nowrap">
            AREAS I WORK IN
          </span>
          <div className="hidden lg:block h-6 w-[1px] bg-[#302238] ml-4" />
        </div>

        {/* 4 Capability Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full flex-1 justify-items-center sm:justify-items-stretch">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.number}
              className="flex items-center gap-3 group text-left"
            >
              <div className="p-2 rounded-xl bg-[#171420] border border-[#302238] group-hover:border-[#8B5CF6]/50 transition-colors shrink-0 shadow-sm">
                {icons[idx]}
              </div>
              <div className="flex flex-col">
                <span className="font-bebas text-lg sm:text-xl text-[#F5F3FF] group-hover:text-[#A78BFA] tracking-wider transition-colors leading-none">
                  {cap.title}
                </span>
                <span className="font-mono text-[9px] text-[#AAA5B8] mt-0.5 line-clamp-1">
                  {cap.description}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
