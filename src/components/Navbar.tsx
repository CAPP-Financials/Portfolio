import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Works', href: '#projects' },
  { name: 'Capabilities', href: '#capabilities' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#0C1A30]/80 backdrop-blur-md border-b border-white/10 shadow-sm' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif font-bold text-xl tracking-tight text-white">
          PK<span className="text-blue-500">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-mono text-slate-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu could be implemented here, but keeping it minimal for now */}
        <div className="md:hidden">
           <span className="text-slate-400 font-mono text-sm uppercase tracking-widest">Menu</span>
        </div>
      </div>
    </motion.header>
  );
}
