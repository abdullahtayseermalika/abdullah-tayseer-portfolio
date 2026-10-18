import React from 'react';
import { Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article
      onClick={() => onOpenDetails(project)}
      className="group relative flex flex-col bg-[#171420] border border-[#302238] hover:border-[#8B5CF6]/70 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#6D28D9]/20 cursor-pointer"
    >
      {/* Visual Thumbnail Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#302238]">
        <ProjectVisual project={project} />

        {/* Hover Purple-Crimson Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171420] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Top-Right Quick Expand Icon */}
        <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#171420]/80 border border-[#302238] text-[#AAA5B8] group-hover:text-white group-hover:border-[#E11D48] transition-all backdrop-blur-md shadow-md">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Number & Category Strip */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="font-bebas text-3xl sm:text-4xl text-[#E11D48] group-hover:text-[#FF304F] tracking-wider leading-none transition-colors">
                {project.number}
              </span>
              <div className="h-3 w-[1px] bg-[#302238]" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A78BFA] font-semibold">
                {project.category}
              </span>
            </div>

            <span className="font-mono text-xs text-[#AAA5B8] group-hover:text-[#E11D48] transition-colors flex items-center gap-1.5 font-medium">
              <span className="hidden sm:inline text-[11px]">VIEW DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-bebas text-2xl sm:text-3xl text-[#F5F3FF] tracking-wide group-hover:text-white transition-colors mb-2">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#AAA5B8] line-clamp-2 leading-relaxed mb-5 font-light">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="pt-4 border-t border-[#302238] flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[10px] sm:text-[11px] font-mono text-[#AAA5B8]/80">
          {project.tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="group-hover:text-[#F5F3FF] transition-colors">{tag}</span>
              {idx < project.tags.length - 1 && <span className="text-[#8B5CF6]/60">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};
