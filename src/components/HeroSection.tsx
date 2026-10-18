import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Upload, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomPhotoUrl(event.target?.result as string);
        setIsPhotoModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setCustomPhotoUrl(inputUrl.trim());
      setIsPhotoModalOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Large Rounded Rectangular Hero Panel with Purple-to-Crimson Gradient */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-[#8B5CF6]/35 bg-[#0a0714] shadow-2xl min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
        
        {/* Sophisticated Purple-to-Crimson Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4C1D95]/95 via-[#6D28D9]/85 via-40% to-[#9F1239]/90 pointer-events-none" />
        
        {/* Deep Violet Shadows & Crimson Highlights fading into black at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,_rgba(139,92,246,0.45)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,_rgba(225,29,72,0.45)_0%,_transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/40 to-[#08080C]/35 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Soft Violet Glow Behind Main Heading */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/30 rounded-full blur-[110px] pointer-events-none" />

        {/* Huge Oversized "PORTFOLIO" Background Title Layered Behind */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-6 sm:top-10 text-center select-none pointer-events-none z-0 overflow-hidden"
        >
          <span className="font-bebas text-[20vw] sm:text-[18vw] lg:text-[16vw] text-black/25 tracking-tight leading-none block transform scale-y-110">
            PORTFOLIO
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center flex-1 my-auto">
          
          {/* LEFT SIDE: Personal Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label: HELLO, I'M */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-[#171420]/80 border border-[#8B5CF6]/40 text-[#A78BFA] font-mono text-[11px] sm:text-xs tracking-widest uppercase font-semibold backdrop-blur-md shadow-sm">
                HELLO, I'M
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48]" />
            </div>

            {/* Main Heading: ABDULLAH TAYSEER (Razor sharp readability in soft white) */}
            <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F5F3FF] tracking-normal leading-[0.88] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] mb-3">
              ABDULLAH
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F3FF] to-[#E2D9F3]">
                TAYSEER
              </span>
            </h1>

            {/* Role: ECE STUDENT & DEVELOPER */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="font-mono text-xs sm:text-sm tracking-widest text-[#F5F3FF] font-semibold uppercase bg-[#171420]/80 px-3.5 py-1.5 rounded-lg border border-[#8B5CF6]/50 backdrop-blur-sm shadow-md">
                <span className="text-[#A78BFA] mr-1.5">●</span>
                {PERSONAL_INFO.title}
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-[#AAA5B8] uppercase tracking-wider hidden sm:inline ml-1">
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Description Statement */}
            <p className="text-lg sm:text-xl font-heading text-[#F5F3FF] font-medium leading-snug max-w-xl drop-shadow mb-3">
              "{PERSONAL_INFO.shortBrandStatement}"
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#AAA5B8] leading-relaxed max-w-lg mb-8 font-light drop-shadow-sm">
              {PERSONAL_INFO.secondaryStatement}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#E11D48] to-[#FF304F] hover:from-[#be123c] hover:to-[#e11d48] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full border border-white/20 transition-all duration-300 shadow-xl shadow-[#E11D48]/30 cursor-pointer"
              >
                <span>EXPLORE MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#171420]/80 hover:bg-[#231d30] text-[#F5F3FF] font-mono text-xs sm:text-sm uppercase tracking-wider font-medium rounded-full border border-[#8B5CF6]/50 hover:border-[#A78BFA] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>ABOUT ME</span>
                <ArrowUpRight className="w-4 h-4 text-[#A78BFA] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Hero Visual / Portrait Area */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            {/* Ambient purple and crimson glow backing the portrait */}
            <div className="absolute inset-0 bg-radial from-[#8B5CF6]/40 via-[#E11D48]/20 to-transparent rounded-full filter blur-3xl transform scale-95" />

            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#8B5CF6]/40 bg-[#111019]/80 backdrop-blur-md shadow-2xl group">
              {customPhotoUrl ? (
                <img
                  src={customPhotoUrl}
                  alt="Abdullah Tayseer"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
              ) : (
                /* Intentional Dark Abstract Technical Silhouette Placeholder with Subtle Red Rim Light & Violet Ambience */
                <div className="relative w-full h-full flex flex-col items-center justify-end bg-gradient-to-b from-[#171420]/50 via-[#0e0c14]/90 to-[#08080C]">
                  {/* Subtle red rim light back illumination */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-56 bg-radial from-[#E11D48]/45 via-transparent to-transparent filter blur-2xl" />

                  {/* Top technical coordinates */}
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-[#A78BFA] tracking-wider">
                    DEV // ECE.2026
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-[#FF304F] tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                    ONLINE
                  </div>

                  {/* SVG Engineering Silhouette with Dramatic Crimson Rim Light and Violet Accents */}
                  <svg
                    viewBox="0 0 300 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(225,29,72,0.4)]"
                  >
                    <defs>
                      <linearGradient id="silhouetteDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e1829" />
                        <stop offset="70%" stopColor="#110e19" />
                        <stop offset="100%" stopColor="#08080C" />
                      </linearGradient>
                      <linearGradient id="rimPurpleCrimsonLight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.95" />
                        <stop offset="25%" stopColor="#A78BFA" stopOpacity="0.75" />
                        <stop offset="75%" stopColor="#E11D48" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#FF304F" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>

                    {/* Circuit laser trace lines */}
                    <line x1="30" y1="110" x2="110" y2="110" stroke="#8B5CF6" strokeOpacity="0.6" strokeDasharray="4 4" />
                    <line x1="110" y1="110" x2="140" y2="140" stroke="#E11D48" strokeOpacity="0.7" />
                    <circle cx="140" cy="140" r="3" fill="#E11D48" />

                    {/* Silhouette Profile Outline with Subtle Red Rim Light */}
                    <path
                      d="M 150 90 C 120 90 95 115 95 145 C 95 170 110 195 130 205 C 100 220 60 250 45 350 L 255 350 C 240 250 200 220 170 205 C 190 195 205 170 205 145 C 205 115 180 90 150 90 Z"
                      stroke="url(#rimPurpleCrimsonLight)"
                      strokeWidth="3.5"
                      fill="url(#silhouetteDark)"
                    />

                    {/* Headset / Sensor band trace */}
                    <path
                      d="M 125 145 C 125 130 138 120 150 120 C 162 120 175 130 175 145"
                      stroke="#8B5CF6"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 130 205 L 150 240 L 170 205"
                      stroke="#E11D48"
                      strokeOpacity="0.6"
                      strokeWidth="1.5"
                    />
                    <line x1="150" y1="240" x2="150" y2="350" stroke="#302238" strokeWidth="1.5" />
                  </svg>
                </div>
              )}

              {/* Bottom Vignette Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#08080C] via-[#08080C]/80 to-transparent pointer-events-none" />

              {/* Replace / Custom Photo Trigger */}
              <div className="absolute bottom-3 inset-x-3 p-2.5 bg-[#171420]/80 backdrop-blur-md border border-[#302238] rounded-xl flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#AAA5B8] uppercase">PORTRAIT VISUAL</span>
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="flex items-center gap-1 font-mono text-[9px] text-[#A78BFA] hover:text-[#F5F3FF] transition-colors cursor-pointer"
                >
                  <Upload className="w-2.5 h-2.5" />
                  <span>UPLOAD REAL PHOTO</span>
                </button>
              </div>
            </div>

            {/* Floating Technical Metadata Labels (01 - 04) around portrait */}
            <div className="hidden sm:block absolute -top-3 -right-2 z-20 px-3.5 py-1 rounded-full bg-[#171420]/90 border border-[#8B5CF6]/40 backdrop-blur-md shadow-lg">
              <span className="font-mono text-[10px] text-[#E11D48] font-bold mr-1.5">01 /</span>
              <span className="font-mono text-[10px] text-[#F5F3FF] tracking-wider">EMBEDDED SYSTEMS</span>
            </div>

            <div className="hidden sm:block absolute top-1/3 -left-6 -translate-y-1/2 z-20 px-3.5 py-1 rounded-full bg-[#171420]/90 border border-[#8B5CF6]/40 backdrop-blur-md shadow-lg">
              <span className="font-mono text-[10px] text-[#E11D48] font-bold mr-1.5">02 /</span>
              <span className="font-mono text-[10px] text-[#F5F3FF] tracking-wider">AI & COMPUTER VISION</span>
            </div>

            <div className="hidden sm:block absolute bottom-14 -left-4 z-20 px-3.5 py-1 rounded-full bg-[#171420]/90 border border-[#8B5CF6]/40 backdrop-blur-md shadow-lg">
              <span className="font-mono text-[10px] text-[#E11D48] font-bold mr-1.5">03 /</span>
              <span className="font-mono text-[10px] text-[#F5F3FF] tracking-wider">ROBOTICS & IOT</span>
            </div>

            <div className="hidden sm:block absolute -bottom-3 -right-2 z-20 px-3.5 py-1 rounded-full bg-[#171420]/90 border border-[#8B5CF6]/40 backdrop-blur-md shadow-lg">
              <span className="font-mono text-[10px] text-[#E11D48] font-bold mr-1.5">04 /</span>
              <span className="font-mono text-[10px] text-[#F5F3FF] tracking-wider">SOFTWARE DEV</span>
            </div>
          </div>

        </div>

        {/* Supporting Phrase Footer Inside Hero Panel */}
        <div className="relative z-10 pt-6 mt-6 border-t border-[#8B5CF6]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-heading text-sm text-[#F5F3FF] font-medium tracking-wide">
            "{PERSONAL_INFO.heroPhrase}"
          </p>

          <div className="flex items-center gap-2 font-mono text-xs text-[#AAA5B8]">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>ELECTRONICS × COMPUTATION × AI</span>
          </div>
        </div>

      </div>

      {/* Modal for uploading Abdullah's real portrait */}
      {isPhotoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div className="bg-[#171420] border border-[#302238] rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <h3 className="font-heading text-lg font-bold text-[#F5F3FF] mb-2">
              Update Portrait Photo
            </h3>
            <p className="text-xs text-[#AAA5B8] mb-4">
              Upload your photo or paste an image URL. It will instantly update the hero portrait.
            </p>

            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#AAA5B8] mb-1">IMAGE URL</label>
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-[#08080C] border border-[#302238] rounded text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-[#AAA5B8]">OR UPLOAD FILE</span>
                <label className="px-4 py-2 bg-[#211c2e] hover:bg-[#2b253b] text-xs font-mono text-white rounded cursor-pointer border border-[#302238]">
                  Browse image...
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {customPhotoUrl && (
                <button
                  type="button"
                  onClick={() => {
                    setCustomPhotoUrl(null);
                    setIsPhotoModalOpen(false);
                  }}
                  className="w-full text-center py-2 text-xs font-mono text-[#E11D48] hover:underline"
                >
                  Reset to Abstract Silhouette
                </button>
              )}

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#302238]">
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="px-4 py-2 text-xs font-mono text-[#AAA5B8] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] text-white text-xs font-mono rounded-full font-semibold"
                >
                  Apply Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
