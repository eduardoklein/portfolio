import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroPremium from './components/HeroPremium';
import CompanyProjectsSection from './components/CompanyProjectsSection';
import About from './components/About';
import Skills from './components/Skills';
import CredentialsSection from './components/CredentialsSection';
import Contact from './components/Contact';

function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('pt');
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#080b11] text-[#e2e8f0] flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroPremium lang={lang} />

        {/* Primary Showcase: Projects by Company */}
        <CompanyProjectsSection lang={lang} />

        {/* Technical Stack */}
        <Skills lang={lang} />

        {/* Background, Rigor & Journey */}
        <About lang={lang} />

        {/* Credentials, Languages & Higher Education */}
        <CredentialsSection lang={lang} />

        {/* Contact & Inquiries */}
        <Contact lang={lang} />
      </main>

      {/* Minimalist Premium Footer */}
      <footer className="border-t border-white/[0.06] py-10 text-center text-slate-500 text-xs font-mono">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-2">
          <p>
            {lang === 'en'
              ? `© ${currentYear} Eduardo Klein Carvalho. All rights reserved.`
              : `© ${currentYear} Eduardo Klein Carvalho. Todos os direitos reservados.`}
          </p>
          <p className="text-[11px] text-slate-600">
            {lang === 'en' ? 'Engineered with' : 'Desenvolvido com'}{' '}
            <span className="text-slate-400">React</span>,{' '}
            <span className="text-slate-400">TypeScript</span> &{' '}
            <span className="text-slate-400">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
