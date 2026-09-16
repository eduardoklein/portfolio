import { Code2, Server, Database, Cpu, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsProps {
  lang: 'en' | 'pt';
}

export default function Skills({ lang }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      items: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "HTML5 & CSS3", "State Management"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      items: ["PHP", "Laravel", "Node.js", "Express.js", "RESTful APIs", "MVC & Layered Arch", "Sequelize ORM"]
    },
    {
      title: lang === 'en' ? "Database & Infra" : "Banco de Dados & Infra",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      items: ["SQL", "MySQL", "PostgreSQL", "Docker", "Docker Compose", "Linux / Bash", "Offline Cache"]
    },
    {
      title: lang === 'en' ? "Architecture & QA" : "Arquitetura & Qualidade",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      items: ["Microservices", "Git & GitHub Flows", "Automated Testing", "Jest", "Mocha & Chai", "Agile / Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'en' ? 'Technical Stack' : 'Domínio Técnico'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === 'en' ? 'Skills & Core Competencies' : 'Habilidades & Tecnologias'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Technologies and tools applied across high-performance web systems and production applications.'
              : 'Tecnologias aplicadas no desenvolvimento de sistemas de alta demanda, estabilidade e automação.'}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-4">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous learning card */}
        <div className="mt-10 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {lang === 'en' ? (
              <>
                <span className="text-white font-medium">Continuous Evolution:</span> In addition to full-stack web engineering, constantly deepening system architecture, distributed patterns, and scalable database design in my Computer Science degree.
              </>
            ) : (
              <>
                <span className="text-white font-medium">Evolução Contínua:</span> Além do ecossistema full-stack web, constante aprofundamento em arquitetura de sistemas distribuídos, modelagem relacional avançada e engenharia de software na graduação em Ciência da Computação.
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
