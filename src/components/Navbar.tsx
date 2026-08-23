import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'pt';
  setLang: (lang: 'en' | 'pt') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Brand / Logo */}
          <a href="#inicio" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              eduardoklein<span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Right Controls: Language Switcher & Quick Contact */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-lg p-0.5 font-mono text-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-[#8b949e] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  lang === 'pt'
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-[#8b949e] hover:text-white'
                }`}
              >
                PT
              </button>
            </div>

            {/* Quick Contact Action */}
            <a
              href="#contato"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all shadow-sm shadow-emerald-500/20"
            >
              {lang === 'en' ? 'Contact' : 'Contato'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
