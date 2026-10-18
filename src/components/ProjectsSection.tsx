import React, { useState } from 'react';
import { Project, PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterCategories = [
    { label: 'ALL', value: 'ALL' },
    { label: 'AI & VISION', value: 'AI / COMPUTER VISION' },
    { label: 'EMBEDDED & IOT', value: 'EMBEDDED' },
    { label: 'GEOSPATIAL', value: 'GEOSPATIAL' },
    { label: 'WEB & CLOUD', value: 'WEB DEVELOPMENT / CLOUD' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'EMBEDDED') {
      return (
        project.category.includes('EMBEDDED') ||
        project.category.includes('IOT')
      );
    }
    if (activeFilter === 'GEOSPATIAL') {
      return project.category.includes('FLOOD') || project.category.includes('GEOSPATIAL');
    }
    return project.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#302238]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest font-semibold">
              <span className="text-[#E11D48]">02</span>
              <span className="text-[#8B5CF6]">/</span>
              <span className="text-[#A78BFA]">SELECTED PROJECTS</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#F5F3FF] tracking-wide leading-none">
              BUILT TO EXPLORE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#E11D48]">
                DESIGNED TO SOLVE.
              </span>
            </h2>
            <p className="font-heading text-sm sm:text-base text-[#AAA5B8] mt-3 max-w-xl font-light">
              Projects that connect engineering fundamentals with practical technology.
            </p>
          </div>

          {/* Right link and interactive filter controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#111019] border border-[#302238] rounded-full shadow-inner">
              {filterCategories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-4 py-1 text-[11px] font-mono tracking-wider transition-all rounded-full cursor-pointer whitespace-nowrap ${
                    activeFilter === cat.value
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#E11D48] text-white font-medium shadow-md shadow-[#8B5CF6]/25'
                      : 'text-[#AAA5B8] hover:text-white hover:bg-[#1a1726]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase text-[#F5F3FF] hover:text-[#A78BFA] transition-colors py-1 shrink-0"
            >
              <span>VIEW ALL ON GITHUB</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E11D48]" />
            </a>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Footnote note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-[#AAA5B8]/70">
            Click any project card to inspect complete architecture schematics, hardware pinouts, and system pipelines.
          </p>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
