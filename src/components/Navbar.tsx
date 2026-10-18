import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#08080C]/90 backdrop-blur-md border-[#302238] py-3.5 shadow-xl shadow-black/50'
          : 'bg-transparent border-[#302238]/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded"
        >
          <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-[#F5F3FF] group-hover:text-[#A78BFA] transition-colors leading-none">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#AAA5B8] uppercase mt-0.5">
            {PERSONAL_INFO.roleSubtitle}
          </span>
        </a>

        {/* Right: Desktop Navigation + Rounded LET'S CONNECT CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B5CF6] ${
                    isActive
                      ? 'text-[#F5F3FF] font-semibold'
                      : 'text-[#AAA5B8] hover:text-[#F5F3FF]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Availability Indicator (Red Action Highlight) */}
          <div className="flex items-center gap-2 pl-4 border-l border-[#302238]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-[#AAA5B8] font-medium">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Rounded Action button with purple-to-red gradient */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-mono text-white bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] hover:from-[#7c3aed] hover:to-[#be123c] shadow-md shadow-[#8B5CF6]/20 hover:shadow-[#E11D48]/30 transition-all duration-300 rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#AAA5B8] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111019] border-b border-[#302238] px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-mono text-sm tracking-wider flex items-center justify-between py-2 border-b border-[#1f1a29] ${
                    isActive ? 'text-[#A78BFA] font-semibold' : 'text-[#AAA5B8]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />}
                </a>
              );
            })}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#AAA5B8]">
                <span className="h-2 w-2 rounded-full bg-[#E11D48]" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] text-white font-mono text-xs uppercase tracking-wider rounded-full font-medium"
              >
                LET'S CONNECT ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
