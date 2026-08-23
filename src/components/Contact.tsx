import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
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

interface ContactProps {
  lang: 'en' | 'pt';
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-[#080f21] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'Contact' : 'Contato'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            {lang === 'en'
              ? "Liked my profile? Let's talk about projects, opportunities, or technology."
              : 'Gostou do meu perfil? Vamos conversar sobre projetos, oportunidades ou tecnologia.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                {lang === 'en' ? 'Contact Information' : 'Informações de Contato'}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {lang === 'en'
                  ? 'Feel free to get in touch directly. I will get back to you as soon as possible!'
                  : 'Sinta-se à vontade para entrar em contato diretamente. Responderei o mais rápido possível!'}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:eduardo.klein@live.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/20 group transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">E-mail</div>
                  <div className="text-sm md:text-base text-slate-200 group-hover:text-white font-medium">
                    eduardo.klein@live.com
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/eduardo-klein-c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/20 group transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">LinkedIn</div>
                  <div className="text-sm md:text-base text-slate-200 group-hover:text-white font-medium">
                    linkedin.com/in/eduardo-klein-c
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/eduardoklein"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/20 group transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">GitHub</div>
                  <div className="text-sm md:text-base text-slate-200 group-hover:text-white font-medium">
                    github.com/eduardoklein
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                {lang === 'en' ? 'Send a message' : 'Envie uma mensagem'}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                  <h4 className="text-lg font-bold text-white">
                    {lang === 'en' ? 'Message Sent!' : 'Mensagem Enviada!'}
                  </h4>
                  <p className="text-slate-400 text-sm mt-2 max-w-sm">
                    {lang === 'en'
                      ? 'Thank you for getting in touch. I will get back to you soon!'
                      : 'Obrigado por entrar em contato. Retornarei em breve no seu e-mail!'}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        {lang === 'en' ? 'Name' : 'Nome'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder={lang === 'en' ? 'Your name' : 'Seu nome'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        {lang === 'en' ? 'E-mail' : 'E-mail'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      {lang === 'en' ? 'Subject' : 'Assunto'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder={lang === 'en' ? 'e.g. Job Opportunity' : 'Ex: Oportunidade de Trabalho'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      {lang === 'en' ? 'Message' : 'Mensagem'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      placeholder={lang === 'en' ? 'Your message...' : 'Sua mensagem...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        {lang === 'en' ? 'Send Message' : 'Enviar Mensagem'}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
