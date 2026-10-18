import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Mail, Linkedin, ArrowUpRight, Copy, Check, ArrowUp } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [emailValue, setEmailValue] = useState(PERSONAL_INFO.links.email);
  const [linkedinValue, setLinkedinValue] = useState(PERSONAL_INFO.links.linkedin);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleConnectClick = () => {
    if (emailValue && !emailValue.includes('example.com')) {
      window.location.href = `mailto:${emailValue}?subject=Engineering%20Inquiry%20-%20Abdullah%20Tayseer`;
    } else {
      setIsEditingContact(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-[#08080C] border-t border-[#302238] relative overflow-hidden">
      {/* Subtle Violet Glow on one side, Crimson Glow on the other */}
      <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] bg-[#6D28D9]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-[#E11D48]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, Contact Links & CTAs */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest font-semibold">
              <span className="text-[#E11D48]">05</span>
              <span className="text-[#8B5CF6]">/</span>
              <span className="text-[#A78BFA]">GET IN TOUCH</span>
            </div>

            {/* Large Bold Condensed Heading */}
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F3FF] tracking-normal leading-[0.9] mb-6">
              LET'S BUILD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#E11D48]">
                SOMETHING
              </span>
              <br />
              MEANINGFUL.
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#AAA5B8] font-light leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.contactSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={handleConnectClick}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] hover:from-[#7c3aed] hover:to-[#be123c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#171420] hover:bg-[#231d30] text-[#F5F3FF] font-mono text-xs sm:text-sm uppercase tracking-wider font-medium rounded-full border border-[#8B5CF6]/50 hover:border-[#A78BFA] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
              >
                <Github className="w-4 h-4 text-[#A78BFA] group-hover:text-white" />
                <span>EXPLORE GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA5B8]" />
              </a>
            </div>

            {/* Detailed Contact List */}
            <div className="space-y-3 pt-6 border-t border-[#302238]">
              <div className="flex items-center justify-between pb-1">
                <span className="font-mono text-[10px] text-[#A78BFA] uppercase tracking-widest font-semibold">
                  COMMUNICATION CHANNELS
                </span>
                <button
                  onClick={() => setIsEditingContact(!isEditingContact)}
                  className="font-mono text-[10px] text-[#E11D48] hover:text-[#FF304F] hover:underline cursor-pointer"
                >
                  {isEditingContact ? 'CLOSE EDITOR' : 'EDIT PLACEHOLDERS'}
                </button>
              </div>

              {/* GitHub Link */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111019] border border-[#302238]">
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#A78BFA]" />
                  <div>
                    <span className="font-mono text-[10px] text-[#AAA5B8] block">GITHUB PROFILE</span>
                    <a
                      href={PERSONAL_INFO.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#F5F3FF] hover:text-[#A78BFA] transition-colors"
                    >
                      {PERSONAL_INFO.links.github.replace('https://', '')}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.links.github, 'github')}
                  className="p-1.5 text-[#AAA5B8] hover:text-white transition-colors cursor-pointer"
                  title="Copy link"
                >
                  {copiedField === 'github' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Professional Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111019] border border-[#302238]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#E11D48]" />
                  <div>
                    <span className="font-mono text-[10px] text-[#AAA5B8] block">PROFESSIONAL EMAIL</span>
                    <span className="font-mono text-xs text-[#F5F3FF]">
                      {emailValue}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(emailValue, 'email')}
                    className="p-1.5 text-[#AAA5B8] hover:text-white transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111019] border border-[#302238]">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#8B5CF6]" />
                  <div>
                    <span className="font-mono text-[10px] text-[#AAA5B8] block">LINKEDIN PROFILE</span>
                    <span className="font-mono text-xs text-[#F5F3FF]">
                      {linkedinValue}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(linkedinValue, 'linkedin')}
                  className="p-1.5 text-[#AAA5B8] hover:text-white transition-colors cursor-pointer"
                  title="Copy link"
                >
                  {copiedField === 'linkedin' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Editable Fields Box if toggled */}
              {isEditingContact && (
                <div className="p-4 bg-[#171420] border border-[#8B5CF6]/50 rounded-2xl space-y-3 mt-3 shadow-lg">
                  <span className="font-mono text-xs text-[#A78BFA] font-semibold block">
                    UPDATE YOUR REAL DETAILS (SAVES IN LOCAL SESSION)
                  </span>
                  <div>
                    <label className="block font-mono text-[10px] text-[#AAA5B8] mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      placeholder="abdullah.tayseer@example.com"
                      className="w-full px-3 py-1.5 bg-[#08080C] border border-[#302238] rounded-lg text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#AAA5B8] mb-1">
                      LINKEDIN URL
                    </label>
                    <input
                      type="url"
                      value={linkedinValue}
                      onChange={(e) => setLinkedinValue(e.target.value)}
                      placeholder="https://linkedin.com/in/abdullah-tayseer"
                      className="w-full px-3 py-1.5 bg-[#08080C] border border-[#302238] rounded-lg text-xs text-white focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                  <button
                    onClick={() => setIsEditingContact(false)}
                    className="px-5 py-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] text-white font-mono text-xs rounded-full font-semibold hover:from-[#7c3aed] hover:to-[#be123c]"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Tasteful Laptop Visual with Violet and Crimson Ambient Elements */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Realistic CSS Laptop Mockup */}
            <div className="w-full max-w-[460px] relative select-none">
              
              {/* Laptop Screen Bezel */}
              <div className="relative rounded-t-2xl bg-[#171420] p-3 pb-2 border-t-2 border-x-2 border-[#302238] shadow-2xl">
                {/* Webcam dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#2a2436] mx-auto mb-2 border border-[#443b56]" />

                {/* Inner Display Screen */}
                <div className="aspect-[16/10] bg-[#0c0a13] rounded-xl border border-[#261f33] p-3 overflow-hidden flex flex-col justify-between shadow-inner relative">
                  
                  {/* Subtle purple and crimson display bloom */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E11D48]/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#211a2d]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                      <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="font-mono text-[9px] text-[#AAA5B8]">
                      tayseer@embedded-dev:~/portfolio
                    </span>
                    <span className="font-mono text-[9px] text-[#A78BFA]">
                      v2026.1
                    </span>
                  </div>

                  {/* Screen Content - Abstract Portfolio Representation */}
                  <div className="space-y-2 py-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bebas text-lg text-white tracking-wider">
                        ABDULLAH TAYSEER
                      </span>
                      <span className="font-mono text-[8px] px-2 py-0.5 rounded-full bg-[#E11D48]/20 text-[#FF304F] border border-[#E11D48]/40">
                        OPEN TO WORK
                      </span>
                    </div>

                    <div className="p-2 bg-[#08080C] rounded-lg border border-[#261f33] font-mono text-[8px] text-[#AAA5B8] space-y-1">
                      <div className="text-[#A78BFA]">$ ros2 run sentrix_cv face_tracker --realtime</div>
                      <div className="text-[#AAA5B8]">[INFO] Connected to ESP32 on /dev/ttyUSB0 (115200 baud)</div>
                      <div className="text-[#E11D48]">[PERCEPTION] EAR Index: 0.34 · Alert: OPTIMAL</div>
                    </div>

                    {/* Mini project cards strip */}
                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      <div className="p-1.5 bg-[#171420] rounded-lg border border-[#302238] text-center">
                        <span className="font-mono text-[7px] text-[#E11D48] block">01 SENTRIX</span>
                        <span className="font-mono text-[6px] text-[#AAA5B8]">Vision / ESP32</span>
                      </div>
                      <div className="p-1.5 bg-[#171420] rounded-lg border border-[#302238] text-center">
                        <span className="font-mono text-[7px] text-[#A78BFA] block">02 IOT CLASS</span>
                        <span className="font-mono text-[6px] text-[#AAA5B8]">ESP32-CAM</span>
                      </div>
                      <div className="p-1.5 bg-[#171420] rounded-lg border border-[#302238] text-center">
                        <span className="font-mono text-[7px] text-[#8B5CF6] block">03 FLOODTRACE</span>
                        <span className="font-mono text-[6px] text-[#AAA5B8]">SAR / Geospatial</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom line */}
                  <div className="pt-1 border-t border-[#211a2d] flex items-center justify-between font-mono text-[8px] text-[#7d758f]">
                    <span>STATUS: ALL SENSORS NOMINAL</span>
                    <span className="text-[#A78BFA]">INDIA // 2026</span>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base & Hinge */}
              <div className="relative">
                {/* Hinge recess */}
                <div className="h-2 bg-[#171420] mx-8 rounded-b-sm border-x border-[#302238]" />
                {/* Base Top Surface */}
                <div className="h-3 bg-gradient-to-b from-[#251f33] via-[#1a1626] to-[#120f1c] rounded-b-xl border-b border-[#302238] shadow-xl flex items-center justify-center">
                  {/* Trackpad notch */}
                  <div className="w-16 h-1 bg-[#0c0a13] rounded-full opacity-60" />
                </div>
              </div>

              {/* Ambient Glow under laptop */}
              <div className="w-3/4 h-3 bg-gradient-to-r from-[#8B5CF6]/30 to-[#E11D48]/30 mx-auto blur-md rounded-full mt-1" />
            </div>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="mt-24 pt-8 border-t border-[#302238] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bebas text-lg text-white tracking-wider block">
              {PERSONAL_INFO.name.toUpperCase()} © 2026
            </span>
            <span className="font-mono text-[10px] text-[#AAA5B8] uppercase tracking-widest">
              {PERSONAL_INFO.footerTagline}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#AAA5B8] hover:text-[#A78BFA] transition-colors"
            >
              GITHUB
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111019] border border-[#302238] hover:border-[#8B5CF6] text-xs font-mono text-[#AAA5B8] hover:text-white transition-colors cursor-pointer group shadow-sm"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E11D48] transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
