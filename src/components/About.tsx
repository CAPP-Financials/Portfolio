import { Section } from './Section';
import { resumeData } from '../data/resume';

export function About() {
  return (
    <Section id="about" className="bg-white/5">
      <div className="max-w-3xl">
        <h2 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-6">Profile</h2>
        <p className="text-xl md:text-2xl leading-relaxed text-slate-200 font-light font-serif">
          {resumeData.personal.summary}
        </p>
      </div>
    </Section>
  );
}
