import { Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface HeroProps {
  lang: 'en' | 'pt';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132247] via-[#0b1329] to-[#050814]"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 ring-1 ring-inset ring-cyan-400/20 mb-6">
            {lang === 'en' ? 'Available for new opportunities' : 'Disponível para novos desafios'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6"
        >
          Eduardo Klein
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl font-mono text-cyan-400 mb-8"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {lang === 'en' ? (
            <>
              Specialized in the <span className="text-white font-semibold">JavaScript/TypeScript (React, Node.js)</span> and <span className="text-white font-semibold">PHP/Laravel</span> ecosystem. I build and maintain high-traffic ticketing platforms at <span className="text-white font-semibold">Evenyx</span>, serving millions of customers with high performance, security, and biometric validation.
            </>
          ) : (
            <>
              Especializado no ecossistema <span className="text-white font-semibold">JavaScript/TypeScript (React, Node.js)</span> e <span className="text-white font-semibold">PHP/Laravel</span>. Desenvolvo e otimizo plataformas de venda de ingressos de alto tráfego na <span className="text-white font-semibold">Evenyx</span>, servindo milhões de clientes com performance, segurança e validação biométrica.
            </>
          )}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projetos"
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            {lang === 'en' ? 'View Projects' : 'Ver Projetos'}
          </a>
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold rounded-lg transition-all border border-slate-700 hover:border-slate-600 hover:-translate-y-0.5"
          >
            {lang === 'en' ? 'Get In Touch' : 'Fale Comigo'}
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href="https://github.com/eduardoklein"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/eduardo-klein-c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:eduardo.klein@live.com"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center cursor-pointer"
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6 text-slate-500 hover:text-cyan-400 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
