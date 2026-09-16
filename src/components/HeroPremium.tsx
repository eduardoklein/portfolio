import { motion } from 'framer-motion';
import { ArrowDown, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { portfolioContent } from '../data/experienceProjects';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroPremiumProps {
  lang: 'en' | 'pt';
}

export default function HeroPremium({ lang }: HeroPremiumProps) {
  const content = portfolioContent[lang].hero;
  const [copied, setCopied] = useState(false);
  const email = "eduardo.klein@live.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-slate-300 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium tracking-wide">{content.badge}</span>
          </motion.div>

          {/* Main Title & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1]"
          >
            {content.title}
          </motion.h1>

          {/* Bio / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed"
          >
            {content.description}
          </motion.p>

          {/* CTA & Social Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          >
            <a
              href="#experiencia"
              className="px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/5"
            >
              <span>{content.actions.projects}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.1] font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">{lang === 'pt' ? 'E-mail copiado!' : 'Email copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{email}</span>
                </>
              )}
            </button>

            {/* Social Buttons */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2">
              <a
                href="https://github.com/eduardoklein"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-klein-c/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Key Metrics Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 sm:mt-20 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {content.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5 flex flex-col items-center justify-center transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
