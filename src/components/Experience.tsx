import { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  lang: 'en' | 'pt';
}

export default function Experience({ lang }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = lang === 'en' 
    ? [
        {
          company: "Evenyx",
          companyShort: "Evenyx",
          role: "Junior Full Stack Developer",
          period: "Nov 2025 - Present",
          location: "Recife, PE, Brazil (Hybrid)",
          bullets: [
            "Sole developer responsible for the participant administration and race-kit exchange system, serving street-running events with up to 4,000 registrants (Mix Mateus Run, Novo Atacarejo Run).",
            "Automated the race-kit exchange process (previously run on manual Excel spreadsheets), cutting operation time from over a week to an average of 3 days.",
            "Improved, in collaboration with the team, the online/offline facial recognition system for participants, validating registered attendees in 3 to 5 seconds.",
            "Developed 5 ticket-sales landing pages in React connected directly to live production purchase flows and Laravel backend.",
            "Worked in an agile team maintaining and evolving platforms powering large national events like Carnatal (800K attendees and R$ 30M+ in ticket sales) and Fenearte.",
            "Technologies: React, PHP, Laravel, Node.js, TypeScript, REST APIs, SQL, Docker."
          ]
        },
        {
          company: "TJPE",
          companyShort: "TJPE",
          role: "Law Intern",
          period: "Nov 2019 - Oct 2021",
          location: "Vitória de Santo Antão, PE, Brazil",
          bullets: [
            "Drafted judicial orders, decisions, and civil sentences in the 1st Civil Court, maintaining an average of 5 drafts/decisions per day (2,000+ pieces over 2 years).",
            "Conducted case-law and legal doctrine research supporting complex judicial decisions.",
            "Reviewed case files and tracked proceedings, improving internal chamber organization and throughput."
          ]
        },
        {
          company: "Effetive Sistemas",
          companyShort: "Effetive",
          role: "Software Developer (Intern)",
          period: "Aug 2016 - Nov 2016",
          location: "Recife, PE, Brazil",
          bullets: [
            "Developed and maintained features of a corporate system used by Michelin across Latin American operations, focused on performance and usability.",
            "Translated and adapted technical content of the system from English to Portuguese, enabling local adoption.",
            "Delivered features in agile cycles using Git for version control."
          ]
        },
        {
          company: "SUAPE - Port Industrial Complex",
          companyShort: "SUAPE",
          role: "IT Intern",
          period: "Oct 2014 - Jul 2016",
          location: "Cabo de Santo Agostinho, PE, Brazil",
          bullets: [
            "Provided on-site and remote technical support to 100+ users across administrative departments (averaging 6 resolved tickets per day).",
            "Performed preventive and corrective maintenance of computers, printers, and corporate network.",
            "Supported the maintenance and configuration of the administrative TOTVS ERP."
          ]
        }
      ]
    : [
        {
          company: "Evenyx",
          companyShort: "Evenyx",
          role: "Desenvolvedor Full Stack Júnior",
          period: "Nov 2025 - Presente",
          location: "Recife, PE (Híbrido)",
          bullets: [
            "Desenvolvedor único responsável pelo sistema de administração de participantes e entrega de kits de corrida, atendendo eventos com até 4.000 inscritos (Mix Mateus Run, Novo Atacarejo Run).",
            "Automatizei o processo de entrega de kits de corrida (antes em planilhas manuais no Excel), reduzindo o tempo de operação de mais de uma semana para uma média de 3 dias.",
            "Otimizei, em colaboração com o time, o sistema de reconhecimento facial offline/online de participantes, validando inscritos em 3 a 5 segundos por pessoa.",
            "Desenvolvi 5 landing pages de venda de ingressos conectadas diretamente aos fluxos de compra em produção no backend Laravel.",
            "Atuação em time ágil na manutenção e evolução de plataformas que sustentam grandes eventos nacionais como Carnatal (800 mil pessoas e R$ 30M+ em ingressos) e Fenearte.",
            "Tecnologias: React, PHP, Laravel, Node.js, TypeScript, REST APIs, SQL, Docker."
          ]
        },
        {
          company: "TJPE",
          companyShort: "TJPE",
          role: "Estagiário de Direito",
          period: "Nov 2019 - Out 2021",
          location: "Vitória de Santo Antão, PE",
          bullets: [
            "Elaboração de minutas de despachos, decisões e sentenças cíveis na 1ª Vara Cível, mantendo uma média de 5 despachos/decisões por dia (2.000+ peças em 2 anos).",
            "Pesquisa de jurisprudência e doutrina especializada para fundamentação de decisões judiciais complexas.",
            "Análise de processos judiciais e acompanhamento de trâmites, aprimorando a organização interna do gabinete."
          ]
        },
        {
          company: "Effetive Sistemas",
          companyShort: "Effetive",
          role: "Desenvolvedor de Software (Estágio)",
          period: "Ago 2016 - Nov 2016",
          location: "Recife, PE",
          bullets: [
            "Desenvolvimento e manutenção de funcionalidades de sistema corporativo utilizado pela Michelin nas operações da América Latina, com foco em performance e usabilidade.",
            "Tradução e localização de conteúdos técnicos do sistema do inglês para o português, facilitando a adoção pelas equipes brasileiras.",
            "Entregas em ciclos ágeis de desenvolvimento utilizando Git para controle de versão."
          ]
        },
        {
          company: "SUAPE - Complexo Industrial",
          companyShort: "SUAPE",
          role: "Estagiário de TI",
          period: "Out 2014 - Jul 2016",
          location: "Cabo de Santo Agostinho, PE",
          bullets: [
            "Suporte técnico presencial e remoto a mais de 100 usuários internos das áreas administrativas do complexo industrial (média de 6 chamados resolvidos por dia).",
            "Manutenção corretiva e preventiva de computadores, impressoras e redes corporativas.",
            "Apoio na manutenção e configuração do ERP TOTVS de uso da administração."
          ]
        }
      ];

  return (
    <section id="experiencia" className="py-24 bg-[#0b1329] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'Work Experience' : 'Experiência Profissional'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            {lang === 'en' 
              ? 'My career path and contributions in technology and process analysis.'
              : 'Meu percurso e contribuições em tecnologia e análise de processos.'}
          </p>
        </div>

        {/* Tab Selection Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Menu */}
          <div className="md:col-span-3 flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-800 pb-2 md:pb-0 scrollbar-thin">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 md:text-left px-5 py-3 md:py-4 text-sm font-mono border-b-2 md:border-b-0 md:border-l-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === index
                    ? 'text-cyan-400 border-cyan-400 bg-cyan-400/5 font-semibold'
                    : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                {job.companyShort}
              </button>
            ))}
          </div>

          {/* Job Details Panel */}
          <div className="md:col-span-9 bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 md:p-8 min-h-[400px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                  <span>{jobs[activeTab].role}</span>
                  <span className="text-cyan-400 font-mono text-lg font-medium">
                    @ {jobs[activeTab].company}
                  </span>
                </h3>
                
                <div className="flex flex-wrap gap-4 mt-3 text-slate-400 text-sm font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    {jobs[activeTab].period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    {jobs[activeTab].location}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-800/60 my-4"></div>

              <ul className="space-y-3.5">
                {jobs[activeTab].bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
