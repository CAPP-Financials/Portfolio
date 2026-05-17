import { resumeData } from '../data/resume';

export function Footer() {
  return (
    <footer className="py-12 bg-[#071327] text-slate-500 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-mono">
          &copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-mono">
          <a href={`mailto:${resumeData.personal.email}`} className="hover:text-white transition-colors">
            Email
          </a>
          <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
