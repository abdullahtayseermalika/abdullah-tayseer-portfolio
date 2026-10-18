import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';
import { GraduationCap, Wrench, MapPin, ArrowRight, Sparkles, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const scrollToEducation = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('education-skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-[#08080C] border-t border-[#302238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EDITORIAL BANNER: BEHIND THE BUILDS */}
        <div className="rounded-3xl bg-[#111019] border border-[#302238] p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle violet ambient glow on one side, crimson on the other */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#6D28D9]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Side: Small purple label + Large condensed heading */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs text-[#A78BFA] uppercase tracking-widest font-bold block mb-3">
                {PERSONAL_INFO.about.label}
              </span>
              <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#F5F3FF] tracking-normal leading-[0.92]">
                ENGINEERING
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#E11D48]">
                  IDEAS INTO
                </span>
                <br />
                REALITY.
              </h2>
            </div>

            {/* Right Side: Paragraph & Journey CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-base sm:text-lg text-[#AAA5B8] font-light leading-relaxed">
                "{PERSONAL_INFO.about.paragraph}"
              </p>

              <div>
                <a
                  href="#education-skills"
                  onClick={scrollToEducation}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#F5F3FF] hover:text-[#A78BFA] transition-colors py-2 border-b border-[#E11D48] pb-1 cursor-pointer font-semibold"
                >
                  <span>MORE ABOUT MY JOURNEY</span>
                  <ArrowRight className="w-4 h-4 text-[#E11D48] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION & TECHNICAL SKILLS GRID */}
        <div id="education-skills" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* EDUCATION CARD (5 Columns) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#171420] border border-[#302238] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 text-[#E11D48] font-mono text-xs font-semibold uppercase tracking-wider mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION & BACKGROUND</span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#AAA5B8] tracking-widest">DEGREE</span>
                  <h3 className="font-heading text-xl font-bold text-[#F5F3FF] mt-1">
                    {PERSONAL_INFO.degree}
                  </h3>
                  <p className="font-heading text-sm text-[#A78BFA] font-semibold mt-0.5">
                    {PERSONAL_INFO.branch}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#302238]">
                  <span className="font-mono text-[10px] uppercase text-[#AAA5B8] tracking-widest">INSTITUTION</span>
                  <h4 className="font-heading text-base font-semibold text-[#F5F3FF] mt-1">
                    {PERSONAL_INFO.institution}
                  </h4>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#AAA5B8] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>{PERSONAL_INFO.institutionLocation}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#302238] grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#AAA5B8] tracking-widest">ACADEMIC YEAR</span>
                    <p className="font-mono text-xs text-[#F5F3FF] font-medium mt-1">
                      {PERSONAL_INFO.academicYear}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#AAA5B8] tracking-widest">GRADUATION</span>
                    <p className="font-mono text-xs text-[#AAA5B8] mt-1">
                      {PERSONAL_INFO.expectedGraduation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#302238]">
              <p className="text-xs sm:text-sm text-[#AAA5B8] leading-relaxed font-light italic">
                "Connecting circuit theory and silicon architecture with computer vision and autonomous robotics."
              </p>
            </div>
          </div>

          {/* TECHNICAL SKILLS CARD (7 Columns) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#171420] border border-[#302238] p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[#8B5CF6] font-mono text-xs font-semibold uppercase tracking-wider">
                  <Wrench className="w-4 h-4" />
                  <span>TOOLS OF THE TRADE</span>
                </div>
                <span className="font-mono text-[10px] text-[#AAA5B8]">HANDS-ON TOOLCHAINS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-3.5 rounded-2xl bg-[#111019] border border-[#302238]/70">
                    <span className="font-mono text-[10px] tracking-widest text-[#A78BFA] font-semibold uppercase block mb-2">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-mono bg-[#1c1827] text-[#F5F3FF] border border-[#302238] rounded-lg hover:border-[#8B5CF6]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#302238] flex items-center justify-between text-[11px] font-mono text-[#AAA5B8]/80">
              <span>Verified through functional breadboard & software prototypes</span>
              <span className="text-[#E11D48] font-semibold">NO STATIC BENCHMARKS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
