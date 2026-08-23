import { Code2, Server, Database, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsProps {
  lang: 'en' | 'pt';
}

export default function Skills({ lang }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      items: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Context API"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      items: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs", "Sequelize ORM", "MVC Architecture"]
    },
    {
      title: lang === 'en' ? "Database & Infra" : "Banco de Dados & Infra",
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      items: ["SQL", "MySQL", "PostgreSQL", "NoSQL (MongoDB)", "Docker", "Docker Compose", "Linux/Bash"]
    },
    {
      title: lang === 'en' ? "Tools & Quality" : "Ferramentas & Qualidade",
      icon: <Settings className="w-6 h-6 text-emerald-400" />,
      items: ["Git & GitHub", "Automated Testing", "Jest / RTL", "Mocha & Chai", "Agile / Scrum", "Basic CI/CD"]
    }
  ];

  return (
    <section id="habilidades" className="py-24 bg-[#080f21] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'Skills & Technologies' : 'Habilidades & Tecnologias'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            {lang === 'en' 
              ? 'My full-stack development toolbox, organized by specialties.'
              : 'Minha caixa de ferramentas de desenvolvimento full-stack, organizada por especialidades.'}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700/60 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-slate-700/60 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 border border-slate-800/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner focusing on adaptability */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-950/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-sm text-slate-400 leading-relaxed">
            {lang === 'en' ? (
              <>
                <span className="text-white font-semibold">Continuous learning:</span> In addition to the technologies above, I hold elective certifications in <span className="text-cyan-400">Python</span> and am constantly deepening software engineering, design patterns, systems architecture, and testing concepts in my Computer Science degree.
              </>
            ) : (
              <>
                <span className="text-white font-semibold">Aprendizado contínuo:</span> Além das tecnologias acima, possuo certificações eletivas em <span className="text-cyan-400">Python</span> e estou constantemente aprofundando conceitos de engenharia de software, padrões de projeto, arquitetura de sistemas e metodologias de teste na minha graduação em Ciência da Computação.
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
