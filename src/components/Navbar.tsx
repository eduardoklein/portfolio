import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'pt';
  setLang: (lang: 'en' | 'pt') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: lang === 'pt' ? 'Sobre' : 'About' },
    { href: '#experiencia', label: lang === 'pt' ? 'Empresas & Projetos' : 'Projects' },
    { href: '#skills', label: lang === 'pt' ? 'Stack' : 'Stack' },
    { href: '#credenciais', label: lang === 'pt' ? 'Credenciais & Idiomas' : 'Credentials' },
    { href: '#contato', label: lang === 'pt' ? 'Contato' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4 flex justify-center`}
    >
      <div
        className={`w-full max-w-5xl mx-auto flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0f17]/85 backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/60'
            : 'bg-[#0b0f17]/60 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500/20 via-white/10 to-indigo-500/30 border border-white/15 flex items-center justify-center font-bold text-xs tracking-wider text-white group-hover:border-indigo-400/50 transition-all">
            EK
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold text-slate-100 tracking-tight group-hover:text-white transition-colors">
              Eduardo Klein
            </span>
            <span className="text-[10px] text-slate-400 -mt-0.5 hidden sm:block">
              Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Lang Switcher & Contact Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch */}
          <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 text-[11px] font-medium">
            <button
              onClick={() => setLang('pt')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'pt'
                  ? 'bg-white/15 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white/15 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Action CTA */}
          <a
            href="#contato"
            className="flex items-center gap-1.5 bg-white text-slate-950 hover:bg-slate-200 text-xs font-semibold px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm shadow-white/10"
          >
            <span>{lang === 'pt' ? 'Falar Comigo' : "Let's Talk"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
