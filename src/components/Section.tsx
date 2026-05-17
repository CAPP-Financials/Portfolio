import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`py-16 md:py-24 border-b border-white/5 last:border-0 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white group">
              <span className="text-blue-500/50 mr-4 text-2xl select-none hidden sm:inline-block">/</span>
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
