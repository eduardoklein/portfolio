import { Award, Globe, GraduationCap, ShieldCheck } from 'lucide-react';

interface CredentialsSectionProps {
  lang: 'en' | 'pt';
}

export default function CredentialsSection({ lang }: CredentialsSectionProps) {
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
      title: "Claude Code in Action",
      issuer: "Anthropic",
      date: "2026",
      tags: ["Agentic Coding", "AI Systems", "LLMs"],
      badge: "AI Engineering"
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

                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {cert.title}
                  </h4>
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
