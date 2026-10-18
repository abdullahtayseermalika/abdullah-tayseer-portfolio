import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesStrip } from './components/CapabilitiesStrip';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkProcess } from './components/WorkProcess';
import { PhilosophyPanel } from './components/PhilosophyPanel';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'process', 'interests', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080C] text-[#F5F3FF] font-sans selection:bg-[#E11D48] selection:text-white flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        {/* Section 4: Cinematic Orange-to-Red Rounded Hero */}
        <HeroSection />

        {/* Section 5: Trust / Capabilities Strip (AREAS I WORK IN) */}
        <CapabilitiesStrip />

        {/* Section 6 & 8: About (BEHIND THE BUILDS) + Education & Technical Skills */}
        <AboutSection />

        {/* Section 7: Selected Projects (BUILT TO EXPLORE. DESIGNED TO SOLVE.) */}
        <ProjectsSection />

        {/* Section 9: Engineering Workflow (HOW I BUILD) */}
        <WorkProcess />

        {/* Section 10: Quote / Personal Philosophy Feature Panel */}
        <PhilosophyPanel />

        {/* Section: Current Interests */}
        <InterestsSection />

        {/* Section 11: Contact / Let's Connect + Laptop Mockup + Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
