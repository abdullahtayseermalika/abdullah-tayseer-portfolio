import React, { useState } from 'react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';
import { Search, Compass, PenTool, Code, CheckCircle } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    <Search className="w-5 h-5" key="search" />,
    <Compass className="w-5 h-5" key="compass" />,
    <PenTool className="w-5 h-5" key="pentool" />,
    <Code className="w-5 h-5" key="code" />,
    <CheckCircle className="w-5 h-5" key="check" />,
  ];

  return (
    <section id="process" className="py-24 bg-[#08080C] border-t border-[#302238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#302238]">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
            <span className="text-[#E11D48]">03</span>
            <span className="text-[#8B5CF6]">/</span>
            <span className="text-[#A78BFA]">HOW I BUILD</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#F5F3FF] tracking-wide">
            FROM CONCEPT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#E11D48]">
              TO PROTOTYPE.
            </span>
          </h2>
          <p className="font-heading text-sm sm:text-base text-[#AAA5B8] mt-2 font-light max-w-xl">
            A structured engineering workflow that turns conceptual models into robust, tested hardware and software prototypes.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Connecting Vertical Line with Purple-to-Crimson Gradient */}
          <div
            aria-hidden="true"
            className="absolute left-6 sm:left-8 top-8 bottom-8 w-[2px] bg-[#211a2e]"
          >
            <div
              className="w-full bg-gradient-to-b from-[#8B5CF6] via-[#A78BFA] to-[#E11D48] transition-all duration-500 rounded-full"
              style={{
                height: `${((activeStep + 1) / WORK_PROCESS_STEPS.length) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {WORK_PROCESS_STEPS.map((stage, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-start gap-4 sm:gap-8 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#171420] border-[#8B5CF6]/60 shadow-lg shadow-[#6D28D9]/15'
                      : 'bg-[#111019] border-[#302238] hover:border-[#8B5CF6]/40'
                  }`}
                >
                  {/* Circular Step Badge with Minimal Line Icon */}
                  <div
                    className={`shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'border-[#E11D48] bg-[#221223] text-[#FF304F] shadow-md shadow-[#E11D48]/30'
                        : 'border-[#302238] bg-[#171420] text-[#AAA5B8]'
                    }`}
                  >
                    {stepIcons[idx]}
                  </div>

                  {/* Stage Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bebas text-2xl sm:text-3xl text-[#E11D48] tracking-wider">
                          {stage.step}
                        </span>
                        <span className="text-[#302238]">—</span>
                        <h3 className="font-bebas text-2xl sm:text-3xl text-[#F5F3FF] tracking-wide">
                          {stage.title}
                        </h3>
                      </div>

                      <span className="font-mono text-[10px] text-[#A78BFA] uppercase tracking-widest hidden sm:inline">
                        STAGE {stage.step}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#AAA5B8] font-normal leading-relaxed mb-3">
                      {stage.description}
                    </p>

                    {/* Deliverables / Details */}
                    <div className="pt-2 border-t border-[#302238] flex flex-wrap gap-2">
                      {stage.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#111019] border border-[#302238] text-[#AAA5B8]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
