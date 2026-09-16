import { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  lang: 'en' | 'pt';
}

export default function Contact({ lang }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = "eduardo.klein@live.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'en' ? 'Get In Touch' : 'Contato Direto'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === 'en' ? "Let's Build Something Great" : "Vamos Construir Algo Excepcional"}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Available for engineering opportunities, technical consulting, and high-impact software projects.'
              : 'Aberto para oportunidades de engenharia de software, consultoria técnica e projetos de alto impacto.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-7 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {lang === 'en' ? 'Direct Channels' : 'Canais Diretos'}
              </h3>
              
              <div className="space-y-3">
                {/* Email Box with Copy */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">
                        Email
                      </span>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs sm:text-sm text-white font-mono hover:underline truncate block"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer"
                    title={lang === 'pt' ? 'Copiar email' : 'Copy email'}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/eduardo-klein-c/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">
                        LinkedIn
                      </span>
                      <span className="text-xs sm:text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">
                        /in/eduardo-klein-c
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-mono">
                    ↗
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/eduardoklein"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">
                        GitHub
                      </span>
                      <span className="text-xs sm:text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">
                        github.com/eduardoklein
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-mono">
                    ↗
                  </span>
                </a>
              </div>

              {/* Location badge */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Recife, PE — Brasil (UTC-3)</span>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-7 sm:p-8">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                {lang === 'en' ? 'Send a Message' : 'Enviar Mensagem'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {lang === 'en'
                  ? 'Feel free to send a note directly or reach out via email.'
                  : 'Fique à vontade para deixar uma mensagem direta ou me contatar pelo LinkedIn.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      {lang === 'en' ? 'Name' : 'Nome'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'Your name' : 'Seu nome'}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-400/60 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-400/60 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    {lang === 'en' ? 'Message' : 'Mensagem'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      lang === 'en'
                        ? 'Tell me about your project or opportunity...'
                        : 'Conte um pouco sobre seu projeto ou oportunidade...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-400/60 placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'Response within 24 hours' : 'Retorno em até 24h'}
                  </span>

                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className="px-6 py-2.5 rounded-full bg-white text-slate-950 hover:bg-slate-200 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm shadow-white/10 disabled:opacity-50"
                  >
                    {submitted ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{lang === 'en' ? 'Sent!' : 'Enviado!'}</span>
                      </>
                    ) : (
                      <>
                        <span>{lang === 'en' ? 'Send Message' : 'Enviar Mensagem'}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
