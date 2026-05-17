import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';
import { resumeData } from '../data/resume';

export function Hero() {
  const { personal } = resumeData;

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-[85vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 text-blue-400 mb-6 font-mono text-xs uppercase tracking-widest">
          <MapPin size={14} />
          <span>{personal.location.split('|')[0].trim()}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
          {personal.name.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h1>

        <div className="w-16 h-[2px] bg-blue-500 my-8"></div>

        <p className="text-xl md:text-2xl text-slate-300 font-sans font-light max-w-2xl leading-relaxed mb-10">
          {personal.role}
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-6 py-3 text-slate-200 hover:bg-white hover:text-[#071327] hover:border-white transition-all duration-300"
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-transparent px-6 py-3 text-slate-400 hover:text-white transition-colors duration-300 underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
