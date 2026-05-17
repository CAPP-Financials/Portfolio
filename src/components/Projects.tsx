import { Section } from './Section';
import { resumeData } from '../data/resume';
import { Github, Lock } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects" title="Selected Works">
      <div className="grid grid-cols-1 gap-12">
        {resumeData.projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative border border-white/10 rounded-2xl p-6 md:p-10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {project.isPublic ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      <Github size={12} />
                      Public Repository
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-slate-400 border border-white/10">
                      <Lock size={12} />
                      Private Project
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {project.isPublic && project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                
                <p className="text-slate-400 mt-2 font-mono text-sm max-w-xl">
                  {project.context}
                </p>
              </div>
              
              {project.isPublic && project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center shrink-0 justify-center w-10 h-10 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              )}
            </div>

            <ul className="space-y-2 mt-6">
              {project.details.map((detail, i) => (
                <li key={i} className="text-slate-300 text-[15px] font-light leading-relaxed flex items-start">
                  <span className="text-blue-500/50 mr-3 select-none mt-2">—</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
