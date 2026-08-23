import { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Clock, Copy, Check, Sparkles, 
  ExternalLink, Send, CheckCircle2, ShieldCheck, 
  Code2, Layers, ArrowUpRight,
  TrendingUp, Users, Activity, Scan
} from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Brands SVGs
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

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function BentoCard({ children, className = '', id }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl bg-[#161b22] border border-[#30363d] p-6 sm:p-7 overflow-hidden transition-all duration-200 hover:border-[#8b949e]/60 shadow-sm ${className}`}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 80%)`
            : 'none',
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

interface BentoPortfolioProps {
  lang: 'en' | 'pt';
}

export default function BentoPortfolio({ lang }: BentoPortfolioProps) {
  // Live Recife Clock
  const [recifeTime, setRecifeTime] = useState<string>('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Recife',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setRecifeTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Copy Email State
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('eduardo.klein@live.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Facial Recognition Interactive Simulator State
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [scanLatency, setScanLatency] = useState<number>(3.2);

  const runBiometricScan = () => {
    if (scanState === 'scanning') return;
    setScanState('scanning');
    const randomLatency = +(Math.random() * (4.2 - 2.8) + 2.8).toFixed(2);
    setScanLatency(randomLatency);
    setTimeout(() => {
      setScanState('success');
      setTimeout(() => {
        setScanState('idle');
      }, 4000);
    }, 1800);
  };

  // Tech Stack Filter State
  const [activeStack, setActiveStack] = useState<'all' | 'frontend' | 'backend' | 'infra'>('all');

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div id="inicio" className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-sans selection:bg-emerald-500/30 selection:text-white pt-24 pb-16">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= BENTO GRID CONTAINER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(180px,auto)]">

          {/* 1. HERO BENTO CARD (Span 8 cols) */}
          <BentoCard className="md:col-span-8 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{lang === 'en' ? 'Available for new opportunities' : 'Disponível para novos desafios'}</span>
                </div>
                <span className="text-xs font-mono text-[#8b949e]">
                  Full Stack Engineer
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Eduardo Klein
              </h1>

              <p className="text-[#c9d1d9] text-base sm:text-lg leading-relaxed max-w-2xl">
                {lang === 'en' ? (
                  <>
                    Building high-traffic ticketing platforms, offline biometric validation systems, and scalable web architectures at <strong className="text-white font-semibold">Evenyx</strong>. Combining the analytical rigor of a <span className="text-emerald-400 font-semibold">Law background</span> with modern <span className="text-emerald-400 font-semibold">Computer Science & Full-Stack</span> engineering.
                  </>
                ) : (
                  <>
                    Desenvolvendo plataformas de venda de ingressos de alto tráfego, sistemas de validação biométrica facial offline e arquiteturas web robustas na <strong className="text-white font-semibold">Evenyx</strong>. Unindo a precisão analítica do <span className="text-emerald-400 font-semibold">Direito</span> à engenharia moderna <span className="text-emerald-400 font-semibold">Full Stack</span>.
                  </>
                )}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#30363d] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#projetos"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all shadow-sm shadow-emerald-500/20 cursor-pointer"
                >
                  {lang === 'en' ? 'View Projects' : 'Ver Projetos'}
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border border-[#30363d] rounded-xl text-sm font-mono flex items-center gap-2 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'en' ? 'Copied!' : 'Copiado!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8b949e]" />
                      <span>eduardo.klein@live.com</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/eduardoklein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border border-[#30363d] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/eduardo-klein-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border border-[#30363d] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </BentoCard>

          {/* 2. LIVE TIME & LOCATION CARD (Span 4 cols) */}
          <BentoCard className="md:col-span-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-[#8b949e] uppercase tracking-wider">
                {lang === 'en' ? 'Current Time & Location' : 'Horário & Localização'}
              </span>
              <MapPin className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="my-4">
              <div className="text-3xl font-mono font-bold text-white flex items-center gap-2">
                <Clock className="w-6 h-6 text-emerald-400" />
                <span>{recifeTime || '--:--:--'}</span>
              </div>
              <div className="text-xs font-mono text-[#8b949e] mt-1">
                Recife, PE, Brazil (BRT / UTC-3)
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8b949e]">{lang === 'en' ? 'Current Role:' : 'Cargo Atual:'}</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Full Stack @ Evenyx
              </span>
            </div>
          </BentoCard>

          {/* 3. KEY METRICS BENTO CARD (Span 4 cols) */}
          <BentoCard className="md:col-span-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-medium text-[#8b949e] uppercase tracking-wider">
                {lang === 'en' ? 'Key Metrics' : 'Métricas de Impacto'}
              </span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">2.5M+</div>
                <div className="text-xs text-[#8b949e] mt-1">{lang === 'en' ? 'Customers served' : 'Clientes atendidos'}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">32+</div>
                <div className="text-xs text-[#8b949e] mt-1">{lang === 'en' ? 'GitHub Repos' : 'Projetos no GitHub'}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="text-2xl font-extrabold text-white font-mono">4,000</div>
                <div className="text-xs text-[#8b949e] mt-1">{lang === 'en' ? 'Racers/Event' : 'Atletas/Edição'}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0d1117] border border-[#30363d]">
                <div className="text-2xl font-extrabold text-amber-400 font-mono">7d &gt; 3d</div>
                <div className="text-xs text-[#8b949e] mt-1">{lang === 'en' ? 'Kit speedup' : 'Tempo de entrega'}</div>
              </div>
            </div>
          </BentoCard>

          {/* 4. INTERACTIVE WIDGET: FACIAL BIOMETRIC SCANNER (Span 6 cols) */}
          <BentoCard className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Scan className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Production Highlight' : 'Destaque de Produção'}
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Offline/Online Biometrics
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {lang === 'en' ? 'Offline Biometric Check-in Engine' : 'Motor de Validação Biométrica Facial'}
              </h3>
              
              <p className="text-sm text-[#c9d1d9] leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Engineered to validate registered attendees in 3–5 seconds, including offline operation at race entrances. Test the interactive simulation below:'
                  : 'Projetado para validar participantes em 3 a 5 segundos, inclusive em locais de corrida sem acesso à internet. Teste a simulação abaixo:'}
              </p>
            </div>

            {/* Interactive Scanner Box */}
            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d] relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center relative">
                    <Users className="w-6 h-6 text-[#8b949e]" />
                    {scanState === 'scanning' && (
                      <motion.div 
                        initial={{ top: 0 }}
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_8px_#10b981]"
                      />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white">
                      {scanState === 'idle' && (lang === 'en' ? 'System Ready' : 'Sistema Pronto')}
                      {scanState === 'scanning' && (
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 animate-spin" />
                          {lang === 'en' ? 'Scanning face mesh...' : 'Validando face...'}
                        </span>
                      )}
                      {scanState === 'success' && (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4" />
                          {lang === 'en' ? 'Attendee Validated!' : 'Participante Validado!'}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-[#8b949e] mt-0.5">
                      {scanState === 'success' 
                        ? `${lang === 'en' ? 'Response Time' : 'Tempo de Resposta'}: ${scanLatency}s (${lang === 'en' ? 'Verified in Offline Cache' : 'Cache Offline'})`
                        : `${lang === 'en' ? 'Avg Speed' : 'Velocidade'}: 3.0s - 5.0s per attendee`}
                    </div>
                  </div>
                </div>

                <button
                  onClick={runBiometricScan}
                  disabled={scanState === 'scanning'}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-all disabled:opacity-50 cursor-pointer shadow-sm shadow-emerald-500/20"
                >
                  {scanState === 'scanning' 
                    ? (lang === 'en' ? 'Validating...' : 'Validando...') 
                    : (lang === 'en' ? 'Simulate Scan' : 'Simular Validação')}
                </button>
              </div>
            </div>
          </BentoCard>

          {/* 5. TECH STACK INTERACTIVE RADAR (Span 6 cols) */}
          <BentoCard id="habilidades" className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Tech Stack & Skills' : 'Habilidades & Tecnologias'}
                  </span>
                </div>
                
                {/* Stack Filter Buttons */}
                <div className="flex gap-1 bg-[#0d1117] p-1 rounded-lg border border-[#30363d] text-xs font-mono">
                  {(['all', 'frontend', 'backend', 'infra'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveStack(filter)}
                      className={`px-2.5 py-0.5 rounded-md capitalize transition-colors cursor-pointer ${
                        activeStack === filter 
                          ? 'bg-emerald-600 text-white font-bold' 
                          : 'text-[#8b949e] hover:text-[#e6edf3]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {lang === 'en' ? 'Languages, Frameworks & Tools' : 'Linguagens, Frameworks & Ferramentas'}
              </h3>
            </div>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { name: 'React', cat: 'frontend' },
                { name: 'TypeScript', cat: 'frontend' },
                { name: 'JavaScript (ES6+)', cat: 'frontend' },
                { name: 'Tailwind CSS', cat: 'frontend' },
                { name: 'Node.js', cat: 'backend' },
                { name: 'Express.js', cat: 'backend' },
                { name: 'PHP', cat: 'backend' },
                { name: 'Laravel', cat: 'backend' },
                { name: 'REST APIs', cat: 'backend' },
                { name: 'SQL / PostgreSQL / MySQL', cat: 'infra' },
                { name: 'Docker & Compose', cat: 'infra' },
                { name: 'Automated Testing', cat: 'infra' },
                { name: 'Python', cat: 'backend' },
              ].map((tech, idx) => {
                const isSelected = activeStack === 'all' || activeStack === tech.cat;
                return (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#21262d] border border-[#8b949e]/60 text-white shadow-sm'
                        : 'bg-[#0d1117] border border-[#21262d] text-[#8b949e] opacity-40'
                    }`}
                  >
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </BentoCard>

          {/* 6. CAREER NARRATIVE (LAW TO TECH) (Span 12 cols) */}
          <BentoCard id="sobre" className="md:col-span-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="lg:max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Unique Background' : 'Diferencial Único'}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {lang === 'en' ? 'From Legal Analysis to High-Scale Engineering' : 'Do Raciocínio Jurídico à Engenharia de Alta Escala'}
                </h3>
                <p className="text-sm text-[#c9d1d9] leading-relaxed">
                  {lang === 'en'
                    ? 'My background in Law (UNIFACOL + 2,000+ judicial orders drafted at TJPE) structured my mind for high-level analytical precision, rule-based thinking, and meticulous documentation — traits that directly elevate system design and code quality.'
                    : 'Minha formação em Direito e estágio no TJPE (redigindo mais de 2.000 peças e despachos) estruturaram minha mente para precisão analítica e raciocínio lógico metódico, o que se reflete diretamente em código limpo, APIs bem projetadas e aprendizado ágil.'}
                </p>
              </div>

              {/* Stepper Timeline */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  {
                    period: '2014 - 2016',
                    title: lang === 'en' ? 'First Contact' : 'Início em TI',
                    desc: lang === 'en' ? 'IT support & dev at SUAPE and Effetive' : 'Estágios em TI (SUAPE & Effetive)',
                  },
                  {
                    period: '2017 - 2022',
                    title: lang === 'en' ? 'Law & TJPE' : 'Direito & TJPE',
                    desc: lang === 'en' ? 'Law Degree & 2,000+ court decisions' : 'Bacharel em Direito e gabinete TJPE',
                  },
                  {
                    period: '2023 - 2024',
                    title: lang === 'en' ? 'Full Stack Trybe' : 'Formação Trybe',
                    desc: lang === 'en' ? '1-year web development program' : '1 ano intensivo de desenvolvimento web',
                  },
                  {
                    period: '2025 - Present',
                    title: lang === 'en' ? 'Evenyx & CS' : 'Evenyx & CS',
                    desc: lang === 'en' ? 'Ticketing platforms + B.S. in CS' : 'Plataforma Evenyx + Ciência da Comp.',
                  },
                ].map((step, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#0d1117] border border-[#30363d] flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-semibold text-emerald-400">{step.period}</span>
                      <h4 className="text-sm font-bold text-white mt-1.5">{step.title}</h4>
                      <p className="text-xs text-[#8b949e] mt-1 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* 7. FEATURED PROJECTS BENTO SECTION (Span 12 cols) */}
          <div className="md:col-span-12 pt-6" id="projetos">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-6 h-6 text-emerald-400" />
                  {lang === 'en' ? 'Featured Projects & Repositories' : 'Projetos & Repositórios em Destaque'}
                </h2>
                <p className="text-[#8b949e] text-sm mt-1">
                  {lang === 'en' ? 'Production systems at Evenyx & open-source code' : 'Sistemas em produção na Evenyx e projetos de código aberto'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Project 1: Evenyx Kit */}
              <BentoCard className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                      Evenyx // Production
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {lang === 'en' ? 'Race-Kit Distribution Platform' : 'Sistema de Entrega de Kits de Corrida'}
                  </h4>
                  <p className="text-xs text-[#c9d1d9] mt-2 leading-relaxed">
                    {lang === 'en'
                      ? 'Automated race-kit logistics (e.g. Mix Mateus Run), cutting manual Excel operations from 7+ to 3 days for up to 4,000 runners.'
                      : 'Automação da entrega de kits esportivos, reduzindo o tempo de operação de 7 dias para 3 dias em eventos de até 4.000 inscritos.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#30363d] flex flex-wrap gap-1.5">
                  <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">React</span>
                  <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">PHP Laravel</span>
                  <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">SQL</span>
                </div>
              </BentoCard>

              {/* Project 2: FutebolClube (GitHub) */}
              <BentoCard className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                      GitHub // Open Source
                    </span>
                    <a
                      href="https://github.com/eduardoklein/FutebolClube"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-white"
                      aria-label="GitHub Repository"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    FutebolClube (TFC Backend)
                  </h4>
                  <p className="text-xs text-[#c9d1d9] mt-2 leading-relaxed">
                    {lang === 'en'
                      ? 'Full REST API for real-time football leaderboard management with JWT token security and Mocha/Chai test suites.'
                      : 'API REST para classificar campeonato de futebol em tempo real, com autenticação JWT e testes automatizados.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#30363d] flex justify-between items-center">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">TypeScript</span>
                    <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">Docker</span>
                  </div>
                  <a
                    href="https://github.com/eduardoklein/FutebolClube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Code <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </BentoCard>

              {/* Project 3: BlogsAPI (GitHub) */}
              <BentoCard className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                      GitHub // Open Source
                    </span>
                    <a
                      href="https://github.com/eduardoklein/BlogsAPI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-white"
                      aria-label="GitHub Repository"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    BlogsAPI (Node.js & Sequelize)
                  </h4>
                  <p className="text-xs text-[#c9d1d9] mt-2 leading-relaxed">
                    {lang === 'en'
                      ? 'Production-ready blog backend with posts, users and category relationships powered by PostgreSQL and Sequelize ORM.'
                      : 'Backend de blog com CRUD de posts/usuários e associações relacionais SQL estruturadas com Sequelize ORM.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#30363d] flex justify-between items-center">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">Node.js</span>
                    <span className="text-xs font-mono bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-2 py-0.5 rounded">PostgreSQL</span>
                  </div>
                  <a
                    href="https://github.com/eduardoklein/BlogsAPI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Code <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </BentoCard>
            </div>
          </div>

          {/* 8. CONTACT & INVITATION BENTO (Span 12 cols) */}
          <BentoCard className="md:col-span-12 mt-4" id="contato">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Get in Touch' : 'Fale Comigo'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {lang === 'en' ? "Let's build something great together." : 'Vamos construir algo excelente juntos.'}
                </h3>
                <p className="text-[#c9d1d9] text-sm leading-relaxed">
                  {lang === 'en'
                    ? 'Whether you have a software engineering role, a platform to scale, or simply want to connect, feel free to send a message.'
                    : 'Se você tem uma oportunidade, projeto de alta escala ou quer trocar uma ideia sobre tecnologia, sinta-se à vontade para entrar em contato.'}
                </p>
                <div className="pt-2 flex flex-col gap-2 font-mono text-xs text-[#c9d1d9]">
                  <div>E-mail: <strong className="text-emerald-400">eduardo.klein@live.com</strong></div>
                  <div>LinkedIn: <strong className="text-emerald-400">/in/eduardo-klein-c</strong></div>
                  <div>GitHub: <strong className="text-emerald-400">/eduardoklein</strong></div>
                </div>
              </div>

              <div className="lg:col-span-7">
                {isSubmitted ? (
                  <div className="bg-[#0d1117] p-8 rounded-xl border border-[#30363d] text-center flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3" />
                    <h4 className="text-base font-bold text-white">
                      {lang === 'en' ? 'Message Sent!' : 'Mensagem Enviada!'}
                    </h4>
                    <p className="text-[#8b949e] text-xs mt-1">
                      {lang === 'en' ? 'I will get back to you shortly.' : 'Responderei em breve no seu e-mail.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="bg-[#0d1117] p-6 rounded-xl border border-[#30363d] space-y-3.5 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-medium text-[#c9d1d9] mb-1">
                          {lang === 'en' ? 'Name' : 'Nome'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder={lang === 'en' ? 'Your name' : 'Seu nome'}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#c9d1d9] mb-1">
                          {lang === 'en' ? 'E-mail' : 'E-mail'}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#c9d1d9] mb-1">
                        {lang === 'en' ? 'Message' : 'Mensagem'}
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                        placeholder={lang === 'en' ? 'How can I help you?' : 'Como posso te ajudar?'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-sm shadow-emerald-500/20"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          {lang === 'en' ? 'Send Message' : 'Enviar Mensagem'}
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </BentoCard>

        </div>

      </div>
    </div>
  );
}
