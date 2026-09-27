import { useState, useEffect } from 'react';
import { Award, Globe, GraduationCap, ShieldCheck, ExternalLink, Check, Copy, Sparkles } from 'lucide-react';

interface CredentialsSectionProps {
  lang: 'en' | 'pt';
}

export default function CredentialsSection({ lang }: CredentialsSectionProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const validationNumber = "18085eb551044056aa69c74c388be1d5";

  const handleCopyValidation = () => {
    navigator.clipboard.writeText(validationNumber);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  useEffect(() => {
    const scriptId = 'credly-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
      document.body.appendChild(script);
    }
  }, []);

  const languages = lang === 'pt'
    ? [
        {
          name: "Inglês",
          level: "Fluente / Avançado (Nível C2 — CEFR)",
          badge: "C2 Proficient",
          description: "Certificado internacional EF SET (79/100) e TOEIC. Capacidade plena de comunicação técnica, documentação, tradução de sistemas e trabalho em times globais.",
          score: "EF SET: 79/100 (C2)"
        },
        {
          name: "Português",
          level: "Nativo",
          badge: "Nativo",
          description: "Comunicação verbal e escrita de alta precisão técnica e estrutural, com background na prática jurídica e documentação de software.",
          score: null
        },
        {
          name: "Alemão",
          level: "Básico",
          badge: "Básico (A1/A2)",
          description: "Conhecimento básico para leitura de vocabulário e expressões cotidianas.",
          score: null
        }
      ]
    : [
        {
          name: "English",
          level: "Fluent / Advanced (C2 Level — CEFR)",
          badge: "C2 Proficient",
          description: "EF SET International Certificate (79/100) and TOEIC. Full professional proficiency for technical communication, system localization, and global distributed teams.",
          score: "EF SET: 79/100 (C2)"
        },
        {
          name: "Portuguese",
          level: "Native",
          badge: "Native",
          description: "High-precision verbal and written communication, backed by formal legal training and software engineering documentation.",
          score: null
        },
        {
          name: "German",
          level: "Elementary",
          badge: "Basic (A1/A2)",
          description: "Basic vocabulary and fundamental conversational awareness.",
          score: null
        }
      ];

  const certifications = [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2026 — 2029",
      tags: ["Generative AI", "LLMs", "Machine Learning", "AWS Cloud", "Credly Verified"],
      badge: "AWS Certified",
      url: "https://www.credly.com/badges/f4199abb-5b31-4e6e-9689-4337b3e1e932"
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      date: "2026",
      tags: ["Agentic Coding", "AI Systems", "LLMs"],
      badge: "AI Engineering",
      url: null
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      date: "2026",
      tags: ["Prompting", "AI Architectures"],
      badge: "AI Foundations"
    },
    {
      title: "PHP Language Fundamentals",
      issuer: "Trybe",
      date: "2026",
      tags: ["PHP", "Backend", "Modern PHP"],
      badge: "Backend"
    },
    {
      title: "Certificação Eletiva em Python",
      issuer: "Trybe",
      date: "2024",
      tags: ["Python", "Algorithms", "Data"],
      badge: "Computer Science"
    },
    {
      title: "EF SET English Certificate (C2)",
      issuer: "EF Standard English Test",
      date: "Score: 79/100",
      tags: ["C2 CEFR", "International Proficiency"],
      badge: "English C2"
    },
    {
      title: "TOEIC Link",
      issuer: "ETS (Educational Testing Service)",
      date: "Proficiency",
      tags: ["Business English", "ETS"],
      badge: "English"
    }
  ];

  const education = lang === 'pt'
    ? [
        {
          degree: "Bacharelado em Ciência da Computação",
          institution: "UNINTER",
          period: "2025 — 2029",
          status: "Em andamento",
          focus: "Arquitetura de computadores, algoritmos avançados, compiladores, sistemas distribuídos e bancos de dados."
        },
        {
          degree: "Formação em Desenvolvimento Web Full Stack",
          institution: "Trybe",
          period: "2023 — 2024",
          status: "Concluído",
          focus: "1.500+ horas de imersão prática: React, Node.js, TypeScript, Docker, SQL e metodologias ágeis."
        },
        {
          degree: "Bacharelado em Direito (LL.B.)",
          institution: "UNIFACOL",
          period: "2017 — 2022",
          status: "Concluído",
          focus: "Raciocínio lógico analítico, interpretação de regras complexas, resolução de problemas e redação técnica."
        },
        {
          degree: "Curso Técnico em Tecnologia da Informação",
          institution: "UNINASSAU",
          period: "2014 — 2015",
          status: "Concluído",
          focus: "Fundamentos de redes, infraestrutura corporativa, sistemas operacionais e hardware."
        }
      ]
    : [
        {
          degree: "B.S. in Computer Science",
          institution: "UNINTER",
          period: "2025 — 2029",
          status: "In Progress",
          focus: "Computer systems architecture, advanced algorithms, distributed systems, and scalable databases."
        },
        {
          degree: "Full Stack Web Development Program",
          institution: "Trybe",
          period: "2023 — 2024",
          status: "Completed",
          focus: "1,500+ hours of practical immersion: React, Node.js, TypeScript, Docker, SQL, and agile methodologies."
        },
        {
          degree: "Bachelor of Laws (LL.B.)",
          institution: "UNIFACOL",
          period: "2017 — 2022",
          status: "Completed",
          focus: "Analytical logical reasoning, interpretation of edge cases, structured problem solving, and technical writing."
        },
        {
          degree: "Associate / Technical Degree in IT",
          institution: "UNINASSAU",
          period: "2014 — 2015",
          status: "Completed",
          focus: "Corporate networking fundamentals, operating systems, hardware diagnostics, and IT support."
        }
      ];

  return (
    <section id="credenciais" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'pt' ? 'Qualificação Global' : 'Global Qualifications'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === 'pt' ? 'Idiomas, Certificações & Educação' : 'Languages, Certifications & Education'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'pt'
              ? 'Fluência comprovada para atuação em times internacionais, certificações oficiais e formação acadêmica contínua.'
              : 'Proven English fluency for international collaboration, accredited industry certifications, and continuous academic background.'}
          </p>
        </div>

        {/* 1. Languages Showcase */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-4 h-4 text-indigo-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Proficiência em Idiomas' : 'Language Proficiency'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {languages.map((langItem, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg font-bold text-white">
                      {langItem.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {langItem.badge}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-300 mb-2">
                    {langItem.level}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {langItem.description}
                  </p>
                </div>

                {langItem.score && (
                  <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center gap-2 text-xs text-emerald-400 font-mono">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{langItem.score}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Official Certifications */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-indigo-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Certificações & Credenciais' : 'Certifications & Accreditations'}
            </h3>
          </div>

          {/* Featured Spotlight: AWS Certified AI Practitioner & Credly Badge */}
          <div className="mb-8 rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-amber-500/[0.03] border border-white/[0.1] hover:border-amber-500/30 p-6 sm:p-8 transition-all relative overflow-hidden group">
            {/* Ambient atmospheric glow */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 left-1/4 w-60 h-60 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-between">
              {/* Info Column */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Credencial em Destaque' : 'Featured Credential'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Credly Verified</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AWS Certified AI Practitioner
                </h3>
                <p className="text-sm font-medium text-amber-300/90 mt-1">
                  Amazon Web Services (AWS) Training and Certification
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {lang === 'pt'
                    ? 'Certificação oficial da AWS comprovando proficiência em Inteligência Artificial Generativa, Large Language Models (LLMs), Machine Learning na nuvem, segurança, conformidade e arquitetura de soluções com os serviços de IA da AWS.'
                    : 'Official AWS certification validating proficiency in Generative AI, Large Language Models (LLMs), Cloud Machine Learning, AI security, compliance, and solution architecture using AWS AI services.'}
                </p>

                {/* Validation Info Box */}
                <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {lang === 'pt' ? 'Período de Validade' : 'Validity Period'}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-slate-200">
                      {lang === 'pt' ? '26 de Setembro de 2026 — 2029' : 'September 26, 2026 — 2029'}
                    </span>
                    <span className="block text-[11px] text-emerald-400 font-mono mt-0.5">
                      {lang === 'pt' ? '● Status: Ativo & Autenticado' : '● Status: Active & Authenticated'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {lang === 'pt' ? 'Número de Validação AWS' : 'AWS Validation Number'}
                    </span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-amber-200 bg-black/40 px-2.5 py-1 rounded border border-white/[0.08]">
                        {validationNumber}
                      </code>
                      <button
                        onClick={handleCopyValidation}
                        className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all text-xs cursor-pointer border border-white/[0.08]"
                        title={lang === 'pt' ? "Copiar código de validação" : "Copy validation code"}
                        aria-label="Copy validation code"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.credly.com/badges/f4199abb-5b31-4e6e-9689-4337b3e1e932"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs hover:bg-slate-200 transition-all shadow-md"
                  >
                    <span>{lang === 'pt' ? 'Verificar Badge no Credly' : 'Verify Badge on Credly'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://aws.amazon.com/verification"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] font-medium text-xs transition-all"
                  >
                    <span>{lang === 'pt' ? 'Validar na AWS' : 'Validate at AWS'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Credly Embed Badge Container */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-2xl backdrop-blur-md">
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id="f4199abb-5b31-4e6e-9689-4337b3e1e932"
                  data-share-badge-host="https://www.credly.com"
                >
                  <iframe
                    name="acclaim-badge"
                    allowTransparency={true}
                    frameBorder="0"
                    id="embedded-badge-f4199abb-5b31-4e6e-9689-4337b3e1e932"
                    scrolling="no"
                    src="https://www.credly.com/embedded_badge/f4199abb-5b31-4e6e-9689-4337b3e1e932"
                    style={{ width: '150px', height: '270px' }}
                    title="View my verified achievement on Credly."
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] p-5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {cert.title}
                    </h4>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-amber-300 transition-colors p-0.5"
                        title={lang === 'pt' ? 'Ver credencial' : 'View credential'}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Higher Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Formação Acadêmica' : 'Academic Background'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] p-6 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-indigo-300">
                    {edu.institution}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight mb-2">
                  {edu.degree}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
