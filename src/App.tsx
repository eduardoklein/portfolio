import { useState } from 'react';
import Navbar from './components/Navbar';
import BentoPortfolio from './components/BentoPortfolio';

function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] flex flex-col selection:bg-emerald-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Bento Grid Portfolio */}
      <main className="flex-grow">
        <BentoPortfolio lang={lang} />
      </main>

      {/* Footer */}
      <footer className="bg-[#010409] border-t border-[#30363d] py-8 text-center text-[#8b949e] text-xs font-mono">
        <div className="max-w-6xl mx-auto px-4 space-y-3">
          <p>
            {lang === 'en'
              ? `© ${currentYear} Eduardo Klein Carvalho. All rights reserved.`
              : `© ${currentYear} Eduardo Klein Carvalho. Todos os direitos reservados.`}
          </p>
          <p>
            {lang === 'en' ? 'Built with' : 'Construído com'}{' '}
            <span className="text-emerald-400">React</span>,{' '}
            <span className="text-emerald-400">TypeScript</span>{' '}{lang === 'en' ? 'and' : 'e'}{' '}
            <span className="text-[#8b949e]">Tailwind CSS v4</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
