import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  lang: 'en' | 'pt';
}

export default function About({ lang }: AboutProps) {
  const trajectory = lang === 'en'
    ? [
        {
          period: "2014 — 2016",
          title: "Early Systems Foundation & Technical Degree",
          institution: "SUAPE, Effetive Sistemas & UNINASSAU",
          description: "Technical Degree in IT, early immersion in corporate IT environments, ERP systems, and internal modules for Michelin Latin America."
        },
        {
          period: "2017 — 2022",
          title: "Bachelor of Laws (LL.B.) & TJPE",
          institution: "UNIFACOL & Pernambuco Court of Justice",
          description: "Formed high-precision logical reasoning, complex procedural modeling, and exhaustive documentation discipline."
        },
        {
          period: "2023 — 2024",
          title: "Full Stack Web Development Specialization",
          institution: "Trybe Full Stack",
          description: "Over 28 production-grade projects completed with rigorous focus on JavaScript, TypeScript, Docker, SQL, and automated test coverage."
        },
        {
          period: "2025 — 2029",
          title: "B.S. in Computer Science & Production Engineering",
          institution: "UNINTER & Evenyx",
          description: "Core full-stack engineering powering high-demand ticketing platforms (Carnatal, Fenearte), biometrics, and operational automation."
        }
      ]
    : [
        {
          period: "2014 — 2016",
          title: "Primeiros Passos em Sistemas & Curso Técnico",
          institution: "SUAPE, Effetive Sistemas & UNINASSAU",
          description: "Formação técnica em TI, imersão em ambientes corporativos, suporte ao ERP TOTVS e desenvolvimento de módulos para Michelin LatAm."
        },
        {
          period: "2017 — 2022",
          title: "Bacharelado em Direito & TJPE",
          institution: "UNIFACOL & Tribunal de Justiça de PE",
          description: "Desenvolvimento de raciocínio lógico de alta precisão, análise estrutural complexa e disciplina rigorosa de documentação."
        },
        {
          period: "2023 — 2024",
          title: "Formação Full Stack Intensiva",
          institution: "Trybe Full Stack",
          description: "Mais de 28 projetos práticos entregues com foco profundo em TypeScript, Node.js, testes automatizados e Docker."
        },
        {
          period: "2025 — 2029",
          title: "Ciência da Computação & Atuação em Produção",
          institution: "UNINTER & Evenyx",
          description: "Engenharia full stack sustentando plataformas de bilhetagem de grande porte (Carnatal, Fenearte), validação facial e automação operacional."
        }
      ];

  return (
    <section id="sobre" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'en' ? 'Background & DNA' : 'Origem & Trajetória'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === 'en' ? 'Engineering with Structural Rigor' : 'Engenharia com Rigor Estrutural'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Combining the structural and analytical discipline of legal training with the precision of computer science.'
              : 'A confluência entre a análise lógica minuciosa da formação jurídica e o rigor técnico da Ciência da Computação.'}
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5 rounded-3xl bg-white/[0.02] border border-white/[0.08] p-7 space-y-5">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {lang === 'en' ? 'From Analysis to High-Impact Code' : 'Da Análise ao Código de Alto Impacto'}
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {lang === 'en'
                ? "My background in Law was not a detour — it is my competitive advantage. It trained me to dissect complex edge cases, document architectures transparently, and approach problems with extreme attention to detail."
                : "Minha passagem pelo Direito estruturou minha mente para dissecar cenários complexos, lidar com casos de borda e documentar processos de ponta a ponta com clareza absoluta."}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {lang === 'en'
                ? "At Evenyx and in my daily engineering practice, I focus on solving real operational bottlenecks: replacing slow manual workflows with fast, resilient systems, eliminating latency, and delivering reliable software under real-world event pressure."
                : "No dia a dia na Evenyx, meu foco é resolver gargalos operacionais reais: transformar tarefas manuais em automações escaláveis, otimizar fluxos de validação biométrica e construir código limpo e resiliente sob pressão de eventos nacionais."}
            </p>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3 text-xs text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>{lang === 'en' ? 'Recife, PE, Brazil • UTC-3' : 'Recife, PE • Fuso UTC-3'}</span>
            </div>
          </div>

          {/* Timeline Milestones Column */}
          <div className="lg:col-span-7 space-y-4">
            {trajectory.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] p-5 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h4>
                  <span className="text-xs font-mono text-indigo-400">
                    {step.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-2">
                  {step.institution}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
