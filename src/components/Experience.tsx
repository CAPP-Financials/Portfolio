import { Section } from './Section';
import { resumeData } from '../data/resume';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-16">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 md:gap-12 group">
            <div className="text-slate-400 font-mono text-sm mt-1 shrink-0">
              {exp.period}
            </div>
            
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-slate-300 transition-colors">
                  {exp.company}
                </h3>
                <div className="text-slate-400 font-medium">
                  {exp.role} &middot; <span className="font-light">{exp.location}</span>
                </div>
              </div>
              
              {exp.context && (
                <div className="text-sm text-slate-400 italic mb-4 border-l-2 border-slate-700 pl-4 py-1">
                  {exp.context}
                </div>
              )}

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-300 leading-relaxed font-light text-[15px] flex items-start">
                    <span className="text-slate-600 mr-3 select-none mt-1.5 min-w-[6px] h-[6px] rounded-full bg-slate-600"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
