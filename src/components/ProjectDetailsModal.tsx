import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { X, ExternalLink, Github, Cpu, CheckCircle2, Terminal } from 'lucide-react';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#171420] border border-[#302238] rounded-3xl overflow-hidden shadow-2xl my-auto text-[#F5F3FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#302238] bg-[#111019]">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-2xl text-[#E11D48] tracking-wider">
              {project.number}
            </span>
            <div className="h-4 w-[1px] bg-[#302238]" />
            <span className="font-mono text-xs uppercase text-[#A78BFA] tracking-widest font-semibold">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#AAA5B8] hover:text-white hover:bg-[#251f33] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Visual Showcase Banner */}
          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#302238]">
            <ProjectVisual project={project} interactive={true} />
          </div>

          {/* Title & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div>
              <h2
                id="modal-project-title"
                className="font-bebas text-3xl sm:text-4xl text-[#F5F3FF] tracking-wide"
              >
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[#111019] border border-[#302238] text-[#A78BFA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E11D48] animate-pulse" />
              <span className="font-mono text-xs text-[#AAA5B8]">
                {project.status}
              </span>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-[#E11D48] uppercase tracking-widest font-semibold">
              PROJECT OVERVIEW
            </h3>
            <p className="text-sm sm:text-base text-[#AAA5B8] leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-[#8B5CF6] uppercase tracking-widest font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
              <span>KEY CAPABILITIES & HIGHLIGHTS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#111019] border border-[#302238] rounded-xl flex items-start gap-2.5 text-xs text-[#F5F3FF] leading-relaxed"
                >
                  <span className="font-mono text-[#E11D48] font-bold mt-0.5">›</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & Software Stacks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.hardware && (
              <div className="p-4 bg-[#111019] border border-[#302238] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#E11D48] font-mono text-xs font-semibold uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>HARDWARE & SENSORS</span>
                </div>
                <ul className="space-y-1 font-mono text-xs text-[#AAA5B8]">
                  {project.hardware.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#E11D48]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 bg-[#111019] border border-[#302238] rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-[#8B5CF6] font-mono text-xs font-semibold uppercase">
                <Terminal className="w-4 h-4" />
                <span>SOFTWARE & LIBRARIES</span>
              </div>
              <ul className="space-y-1 font-mono text-xs text-[#AAA5B8]">
                {project.software.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#302238]">
            <div className="font-mono text-xs text-[#AAA5B8]">
              Author: <span className="text-white">Abdullah Tayseer</span> · ECE Department
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111019] hover:bg-[#201b2e] text-xs font-mono text-white rounded-full border border-[#302238] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <Github className="w-4 h-4 text-[#A78BFA]" />
                  <span>VIEW REPOSITORY</span>
                  <ExternalLink className="w-3 h-3 text-[#AAA5B8]" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] hover:from-[#7c3aed] hover:to-[#be123c] text-white text-xs font-mono font-semibold rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-md shadow-[#8B5CF6]/20"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
