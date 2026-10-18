import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  AlertCircle,
  X,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  getStoredPortraitPhoto,
  savePortraitPhoto,
  clearPortraitPhoto,
} from '../utils/photoStorage';

const DEFAULT_PORTRAIT_URL = '/images/abdullah-tayseer.jpg';

export const HeroSection: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isPhotoUpdated, setIsPhotoUpdated] = useState<boolean>(false);
  const [isDefaultImageMissing, setIsDefaultImageMissing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persisted photo on initial mount and auto-sync to project asset on dev server
  useEffect(() => {
    let isMounted = true;
    async function loadPersistedPhoto() {
      try {
        const stored = await getStoredPortraitPhoto();
        if (stored && isMounted) {
          setPhotoUrl(stored.dataUrl);
          setIsPhotoUpdated(true);

          // Automatically sync client-side stored photo to public/images/abdullah-tayseer.jpg on server
          try {
            fetch('/api/save-portrait', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ dataUrl: stored.dataUrl }),
            }).catch(() => {});
          } catch {
            // Ignore if endpoint is not available
          }
        }
      } catch (err) {
        console.warn('Could not load stored photo:', err);
      }
    }
    loadPersistedPhoto();
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-dismiss error message after 6 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const triggerFileInput = () => {
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate mime type
    const validMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validMimeTypes.includes(file.type)) {
      setErrorMessage('Invalid file format. Please upload a JPEG, PNG, or WebP photo.');
      return;
    }

    // Validate size (5 MB limit)
    const maxSizeBytes = 5 * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      setErrorMessage(`File is too large (${sizeMB} MB). Maximum allowed size is 5 MB.`);
      return;
    }

    // Read file as base64 DataURL for instant preview and IndexedDB persistence
    const reader = new FileReader();
    reader.onload = async (event) => {
      const resultDataUrl = event.target?.result as string;
      if (resultDataUrl) {
        setPhotoUrl(resultDataUrl);
        setIsPhotoUpdated(true);
        setErrorMessage(null);
        setIsSuccessToastVisible(true);

        setIsDefaultImageMissing(false);

        try {
          await savePortraitPhoto(resultDataUrl, file.name, file.type, file.size);
        } catch (saveErr) {
          console.warn('Failed to persist photo to storage:', saveErr);
        }

        // Also save directly to server's public/images/abdullah-tayseer.jpg
        try {
          fetch('/api/save-portrait', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl: resultDataUrl }),
          }).catch(() => {});
        } catch {
          // ignore
        }

        setTimeout(() => {
          setIsSuccessToastVisible(false);
        }, 4000);
      }
    };

    reader.onerror = () => {
      setErrorMessage('Error reading file. Please try another image.');
    };

    reader.readAsDataURL(file);
  };

  const handleResetPhoto = async () => {
    try {
      await clearPortraitPhoto();
      setPhotoUrl(null);
      setIsPhotoUpdated(false);
      setErrorMessage(null);
      setIsSuccessToastVisible(false);
    } catch (err) {
      console.warn('Error resetting photo:', err);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technicalLabels = [
    { number: '01', title: 'EMBEDDED SYSTEMS' },
    { number: '02', title: 'AI & COMPUTER VISION' },
    { number: '03', title: 'ROBOTICS & IOT' },
    { number: '04', title: 'SOFTWARE DEVELOPMENT' },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Hidden File Input for Native File Picker */}
      <input
        ref={fileInputRef}
        type="file"
        id="hero-portrait-upload"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileSelect}
        className="sr-only"
        aria-label="Upload personal portrait photo"
      />

      {/* Main Architectural Hero Stage */}
      <div className="relative rounded-3xl lg:rounded-[2.5rem] bg-[#08080C] border border-[#302238] shadow-2xl overflow-hidden min-h-[640px] xl:min-h-[720px] flex flex-col justify-between">
        
        {/* ============================================================== */}
        {/* ARCHITECTURAL BACKGROUND GEOMETRY (Inspired by Reference)      */}
        {/* ============================================================== */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Main Diagonal Charcoal Cut (Rhomboid / Angular Facet) */}
          <div
            className="absolute top-0 right-0 w-[82%] h-full bg-[#15131A] opacity-95"
            style={{
              clipPath: 'polygon(32% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          />

          {/* Secondary Deeper Charcoal Wedge */}
          <div
            className="absolute bottom-0 left-0 w-[55%] h-[68%] bg-[#110F18] opacity-80 hidden lg:block"
            style={{
              clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            }}
          />

          {/* Crimson & Violet Geometric Accent Line along the diagonal seam */}
          <div
            className="absolute top-0 right-0 w-[82%] h-full pointer-events-none hidden md:block"
            style={{
              clipPath: 'polygon(32% 0%, 32.35% 0%, 0.35% 100%, 0% 100%)',
              background: 'linear-gradient(180deg, #E11D48 0%, #8B5CF6 55%, transparent 100%)',
              opacity: 0.9,
            }}
          />

          {/* Deep Purple Radial Glow behind the portrait on the left */}
          <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-[#542080]/35 rounded-full filter blur-[130px]" />
          
          {/* Subtle Crimson Ambient Glow on right */}
          <div className="absolute bottom-12 right-12 w-96 h-96 bg-[#E11D48]/15 rounded-full filter blur-[110px]" />

          {/* Subtle Technical Grid Lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />

          {/* Giant Background Architectural Word: "ENGINEER" */}
          <div className="absolute inset-x-0 bottom-4 text-center select-none overflow-hidden opacity-[0.035]">
            <span className="font-bebas text-[18vw] text-white tracking-widest leading-none block transform scale-y-110">
              ENGINEER
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FOREGROUND CONTENT: TWO-COLUMN ASYMMETRICAL EDITORIAL GRID    */}
        {/* ============================================================== */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 flex-1 flex flex-col justify-between">
          
          {/* Top Status & Error Notifications */}
          <div className="w-full flex justify-end mb-2 min-h-[32px]">
            {errorMessage && (
              <div
                role="alert"
                className="p-2.5 px-4 rounded-xl bg-[#171018]/95 border border-[#E11D48]/70 text-[#FF304F] text-xs font-mono flex items-center gap-2 shadow-xl backdrop-blur-md animate-in fade-in duration-200"
              >
                <AlertCircle className="w-4 h-4 shrink-0 text-[#E11D48]" />
                <span>{errorMessage}</span>
                <button
                  type="button"
                  onClick={() => setErrorMessage(null)}
                  className="p-1 hover:bg-[#2b1822] rounded text-[#AAA5B8] hover:text-white"
                  aria-label="Dismiss error"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {isSuccessToastVisible && (
              <div
                role="status"
                className="p-2.5 px-4 rounded-xl bg-[#121815]/95 border border-emerald-500/50 text-emerald-400 text-xs font-mono flex items-center gap-2 shadow-xl backdrop-blur-md animate-in fade-in duration-200"
              >
                <Check className="w-4 h-4 shrink-0" />
                <span>Portrait saved locally in browser.</span>
                <button
                  type="button"
                  onClick={() => setIsSuccessToastVisible(false)}
                  className="p-1 hover:bg-emerald-950/40 rounded text-[#AAA5B8] hover:text-white"
                  aria-label="Dismiss message"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Main 2-Column Architectural Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
            
            {/* ---------------------------------------------------------- */}
            {/* LEFT COLUMN: ARCHITECTURAL ASYMMETRICAL PORTRAIT (45-50%)   */}
            {/* Inspired directly by the Francisco Costa reference spread  */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start w-full">
              
              {/* Architectural Container with Layered Panels and Diagonal Mask */}
              <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[460px] xl:max-w-[490px]">
                
                {/* Layer 1: Charcoal Background Silhouette Panel (Rhomboid with Diagonal Cuts) */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-full h-full bg-[#15131A] border border-[#542080]/60 pointer-events-none shadow-2xl transition-transform duration-700 ease-out"
                  style={{
                    clipPath: 'polygon(0% 0%, 94% 0%, 100% 7%, 100% 86%, 16% 100%, 0% 92%)',
                  }}
                />

                {/* Layer 2: Secondary Violet & Crimson Geometric Accent Trace */}
                <div
                  aria-hidden="true"
                  className="absolute -top-1.5 -left-1.5 w-full h-full pointer-events-none opacity-80"
                  style={{
                    clipPath: 'polygon(0% 0%, 94% 0%, 100% 7%, 100% 86%, 16% 100%, 0% 92%)',
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.6) 0%, transparent 40%, rgba(225,29,72,0.7) 100%)',
                  }}
                />

                {/* Layer 3: Main Architectural Portrait Silhouette Mask */}
                <div
                  className="relative w-full overflow-hidden bg-[#0a0812] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 86%, 14% 100%, 0% 92%)',
                  }}
                >
                  {/* Subtle Violet Ambient Glow within the mask */}
                  <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#542080]/40 rounded-full filter blur-3xl pointer-events-none" />

                  {/* Top-Right Architectural Corner Accent Line */}
                  <div className="absolute top-0 right-0 w-24 h-[2px] bg-gradient-to-l from-[#E11D48] to-transparent z-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-[2px] h-24 bg-gradient-to-b from-[#E11D48] to-transparent z-20 pointer-events-none" />

                  {/* Top Left Technical Coordinate Overlay */}
                  <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-[#A78BFA] tracking-widest uppercase flex items-center gap-1.5 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                    <span>PORTFOLIO // 2026.ECE</span>
                  </div>

                  {/* Portrait Media Area (Large, dominant, face 100% unobstructed) */}
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#08080C]">
                    {(photoUrl || (!isDefaultImageMissing ? DEFAULT_PORTRAIT_URL : null)) ? (
                      /* Real Deployed Portrait Photo:
                         Uses /images/abdullah-tayseer.jpg by default, or user-selected photo override
                      */
                      <img
                        src={photoUrl || DEFAULT_PORTRAIT_URL}
                        alt="Abdullah Tayseer"
                        onError={() => {
                          if (!photoUrl) {
                            setIsDefaultImageMissing(true);
                          }
                        }}
                        className="w-full h-full object-cover object-[center_15%] filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                      />
                    ) : (
                      /* Default Cinematic Engineering Silhouette (fallback when static image is awaiting upload) */
                      <div
                        onClick={triggerFileInput}
                        className="relative w-full h-full flex flex-col items-center justify-end bg-gradient-to-b from-[#171420]/60 via-[#0e0c14]/90 to-[#08080C] cursor-pointer"
                        title="Click to select portrait photo"
                      >
                        {/* Crimson Rim Light Back Illumination */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-52 h-60 bg-radial from-[#E11D48]/45 via-transparent to-transparent filter blur-2xl" />

                        {/* Engineering Silhouette SVG */}
                        <svg
                          viewBox="0 0 300 380"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                        >
                          <defs>
                            <linearGradient id="silhouetteDarkArch" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1e1829" />
                              <stop offset="70%" stopColor="#110e19" />
                              <stop offset="100%" stopColor="#08080C" />
                            </linearGradient>
                            <linearGradient id="rimLightArch" x1="0%" y1="0%" x2="100%" y2="0%">
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

                          {/* Silhouette Profile Outline */}
                          <path
                            d="M 150 90 C 120 90 95 115 95 145 C 95 170 110 195 130 205 C 100 220 60 250 45 350 L 255 350 C 240 250 200 220 170 205 C 190 195 205 170 205 145 C 205 115 180 90 150 90 Z"
                            stroke="url(#rimLightArch)"
                            strokeWidth="3.5"
                            fill="url(#silhouetteDarkArch)"
                          />

                          {/* Sensor band trace */}
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

                    {/* Architectural Bottom Fade: Merges smoothly into dark background along selected edges */}
                    <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#08080C] via-[#08080C]/70 to-transparent pointer-events-none" />

                    {/* Fine Crimson Rim Accent along the diagonal cut */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1 pointer-events-none bg-gradient-to-r from-[#E11D48] via-[#8B5CF6] to-transparent opacity-80"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------------- */}
            {/* RIGHT COLUMN: EDITORIAL INTRODUCTION TYPOGRAPHY            */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center lg:pl-2">
              
              {/* Small Label: HELLO, I'M */}
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="font-mono text-xs sm:text-sm text-[#A78BFA] uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                  HELLO, I'M
                </span>
                <span className="h-[1px] w-12 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48]" />
              </div>

              {/* Large Headline: ABDULLAH TAYSEER (Oversized Bold Architectural Typography) */}
              <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-[#F5F3FF] tracking-tight leading-[0.85] mb-4">
                ABDULLAH
                <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3FF] via-[#E2D9F3] to-[#A78BFA]">
                  TAYSEER
                  {/* Subtle Underline Accent */}
                  <span className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-[#E11D48] via-[#8B5CF6] to-transparent rounded-full" />
                </span>
              </h1>

              {/* Role: ELECTRONICS & COMMUNICATION ENGINEERING STUDENT */}
              <div className="mb-3">
                <h2 className="font-heading font-bold text-base sm:text-lg md:text-xl text-[#F5F3FF] tracking-wider uppercase leading-snug">
                  ELECTRONICS &amp; COMMUNICATION
                  <br className="hidden sm:inline" /> ENGINEERING STUDENT
                </h2>
              </div>

              {/* Specialization: EMBEDDED SYSTEMS · AI · ROBOTICS */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="font-mono text-xs sm:text-sm text-[#A78BFA] uppercase tracking-widest font-semibold bg-[#15131A] px-3 py-1 rounded-md border border-[#8B5CF6]/40">
                  <span className="text-[#E11D48] mr-1.5 font-bold">›</span>
                  EMBEDDED SYSTEMS · AI · ROBOTICS
                </span>
              </div>

              {/* Supporting Introduction */}
              <p className="font-heading text-base sm:text-lg text-[#F5F3FF] font-medium leading-relaxed max-w-xl mb-3">
                "I build intelligent systems at the intersection of electronics, software, AI, and robotics."
              </p>

              {/* Secondary Paragraph */}
              <p className="text-sm sm:text-base text-[#AAA5B8] leading-relaxed max-w-lg mb-8 font-light">
                From computer vision prototypes to embedded systems and geospatial technology, I explore how engineering can solve meaningful real-world problems.
              </p>

              {/* Calls to Action */}
              <div className="flex flex-wrap items-center gap-4">
                {/* PRIMARY: EXPLORE MY PROJECTS ↗ */}
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#E11D48] via-[#8B5CF6] to-[#542080] hover:from-[#be123c] hover:to-[#431766] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full border border-white/20 transition-all duration-300 shadow-xl shadow-[#E11D48]/25 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>EXPLORE MY PROJECTS</span>
                  <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* SECONDARY: ABOUT ME → */}
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#15131A]/90 hover:bg-[#201d28] text-[#F5F3FF] font-mono text-xs sm:text-sm uppercase tracking-wider font-medium rounded-full border border-[#8B5CF6]/50 hover:border-[#A78BFA] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <span>ABOUT ME</span>
                  <ArrowRight className="w-4 h-4 text-[#A78BFA] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>

          {/* ============================================================== */}
          {/* FLOATING TECHNICAL METADATA STRIP (01 - 04)                     */}
          {/* Dedicated editorial placement, never overlapping the portrait  */}
          {/* ============================================================== */}
          <div className="mt-10 pt-6 border-t border-[#302238]/80 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {technicalLabels.map((label) => (
                <div
                  key={label.number}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-[#15131A]/85 border border-[#302238] hover:border-[#8B5CF6]/60 transition-all group backdrop-blur-sm"
                >
                  <span className="font-mono text-xs sm:text-sm text-[#E11D48] font-bold shrink-0">
                    {label.number} /
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-[#F5F3FF] tracking-wider uppercase group-hover:text-white transition-colors">
                    {label.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
