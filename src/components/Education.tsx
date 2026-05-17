import { Section } from './Section';
import { resumeData } from '../data/resume';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-white/20 transition-colors backdrop-blur-sm">
            <div className="text-blue-400 font-mono text-sm mb-3">
              {edu.year}
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {edu.degree}
            </h3>
            <div className="text-slate-300 mb-4">
              {edu.institution}
            </div>
            {edu.details && (
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
