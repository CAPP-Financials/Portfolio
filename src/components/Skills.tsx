import { Section } from './Section';
import { resumeData } from '../data/resume';

export function Skills() {
  return (
    <Section id="capabilities" title="Capabilities & Tech">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {resumeData.skills.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-3">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-blue-500/10 text-blue-100 text-sm font-mono rounded select-none border border-blue-500/20 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
