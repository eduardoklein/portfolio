import { Folder, ExternalLink, Zap } from 'lucide-react';
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

interface ProjectsProps {
  lang: 'en' | 'pt';
}

export default function Projects({ lang }: ProjectsProps) {
  const productionProjects = lang === 'en'
    ? [
        {
          title: "Race-Kit Exchange System",
          company: "Evenyx",
          description: "Full automation of the kit distribution workflow for street races (e.g. Mix Mateus Run). Replaced complex manual spreadsheets with a fast, integrated web dashboard.",
          impact: "Reduced operation time from over 7 days to an average of 3 days for events with up to 4,000 registrants.",
          tags: ["React", "PHP", "Laravel", "SQL", "REST APIs"]
        },
        {
          title: "Offline/Online Facial Validation",
          company: "Evenyx",
          description: "Biometric check-in system integrated into event entrances. Developed to function on both stable networks and offline environments.",
          impact: "Secure participant validation in just 3 to 5 seconds per person.",
          tags: ["React", "TypeScript", "REST APIs", "Offline Cache"]
        },
        {
          title: "High-Conversion Landing Pages",
          company: "Evenyx",
          description: "Development of 5 high-converting pages for street races, connected directly to the live backend checkout flow.",
          impact: "Secure live transaction processing and optimization for SEO and fast mobile loading.",
          tags: ["React", "Tailwind CSS", "Laravel Backend"]
        }
      ]
    : [
        {
          title: "Sistema de Entrega de Kits de Corrida",
          company: "Evenyx",
          description: "Automação completa do fluxo de distribuição de kits para corridas de rua (ex: Mix Mateus Run). Substituiu planilhas manuais complexas por um painel web ágil e integrado.",
          impact: "Redução do tempo de operação de mais de 7 dias para apenas 3 dias em eventos de até 4.000 inscritos.",
          tags: ["React", "PHP", "Laravel", "SQL", "REST APIs"]
        },
        {
          title: "Validação Facial Offline/Online",
          company: "Evenyx",
          description: "Sistema de check-in biométrico integrado às portarias de grandes eventos. Desenvolvido para funcionar tanto em redes estáveis quanto em ambientes com conectividade nula.",
          impact: "Validação segura do participante em apenas 3 a 5 segundos por pessoa.",
          tags: ["React", "TypeScript", "REST APIs", "Offline Cache"]
        },
        {
          title: "Landing Pages de Venda de Ingressos",
          company: "Evenyx",
          description: "Desenvolvimento de 5 páginas de alta conversão para eventos esportivos de rua, conectadas diretamente ao fluxo de pagamento em produção do backend.",
          impact: "Processamento seguro de transações ao vivo e otimização para SEO e carregamento mobile rápido.",
          tags: ["React", "Tailwind CSS", "Laravel Backend"]
        }
      ];

  const githubProjects = lang === 'en'
    ? [
        {
          title: "FutebolClube (TFC)",
          description: "Complete REST API to manage a football championship, with real-time leaderboard updates, team management, matches, and JWT authentication.",
          tags: ["TypeScript", "Node.js", "Express", "Sequelize ORM", "Docker", "Mocha & Chai"],
          github: "https://github.com/eduardoklein/FutebolClube"
        },
        {
          title: "BlogsAPI",
          description: "Backend for a blog containing complete CRUD of posts, categories, and users, structured with Sequelize ORM for SQL relational tables and JWT validation.",
          tags: ["JavaScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT"],
          github: "https://github.com/eduardoklein/BlogsAPI"
        },
        {
          title: "DockerToDo",
          description: "To-Do web application containerized with Docker. Configured multiple containers (frontend, backend, database) with Docker Compose.",
          tags: ["Docker", "Docker Compose", "React", "Node.js", "Linux"],
          github: "https://github.com/eduardoklein/DockerToDo"
        },
        {
          title: "ShoppingCart",
          description: "Dynamic shopping cart integrated with the Mercado Livre public API, allowing product search, addition, removal, and cart persistence in localStorage.",
          tags: ["JavaScript (ES6)", "HTML5", "CSS3", "Fetch API", "Jest"],
          github: "https://github.com/eduardoklein/ShoppingCart"
        }
      ]
    : [
        {
          title: "FutebolClube (TFC)",
          description: "API REST completa para gerenciar um campeonato de futebol, com tabelas de classificação atualizadas em tempo real, gerenciamento de times, partidas e autenticação JWT.",
          tags: ["TypeScript", "Node.js", "Express", "Sequelize ORM", "Docker", "Mocha & Chai"],
          github: "https://github.com/eduardoklein/FutebolClube"
        },
        {
          title: "BlogsAPI",
          description: "Backend para um blog contendo CRUD completo de posts, categorias e usuários, estruturado com Sequelize ORM para tabelas relacionais SQL e validação JWT.",
          tags: ["JavaScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT"],
          github: "https://github.com/eduardoklein/BlogsAPI"
        },
        {
          title: "DockerToDo",
          description: "Aplicação Web ToDo de lista de tarefas conteinerizada com Docker. Configuração de múltiplos containers (frontend, backend e banco de dados) com Docker Compose.",
          tags: ["Docker", "Docker Compose", "React", "Node.js", "Linux"],
          github: "https://github.com/eduardoklein/DockerToDo"
        },
        {
          title: "ShoppingCart",
          description: "Carrinho de compras dinâmico integrado à API pública do Mercado Livre, permitindo busca de produtos, adição, remoção e persistência do carrinho em localStorage.",
          tags: ["JavaScript (ES6)", "HTML5", "CSS3", "Fetch API", "Jest"],
          github: "https://github.com/eduardoklein/ShoppingCart"
        }
      ];

  return (
    <section id="projetos" className="py-24 bg-[#0b1329] border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'Featured Projects' : 'Projetos em Destaque'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            {lang === 'en'
              ? 'Highlights of my corporate achievements and open-source contributions.'
              : 'Destaques da minha atuação no mercado corporativo e contribuições de código aberto.'}
          </p>
        </div>

        {/* 1. Production Projects (Evenyx) */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 font-mono">
            <Zap className="w-5 h-5 text-emerald-400" />
            {lang === 'en' ? 'Production Impact @ Evenyx' : 'Impacto em Produção @ Evenyx'}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {productionProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {project.company}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Highlight impact block */}
                  <div className="mt-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-300 text-xs">
                    <strong>{lang === 'en' ? 'Result' : 'Resultado'}:</strong> {project.impact}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-0.5 text-2xs font-mono rounded bg-slate-950 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Open Source / GitHub Projects */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 font-mono">
            <Folder className="w-5 h-5 text-cyan-400" />
            {lang === 'en' ? 'Open Source Portfolio (GitHub)' : 'Portfólio de Código Aberto (GitHub)'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/30 rounded-xl p-6 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Ver repositório no GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mt-6 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-0.5 text-2xs font-mono rounded bg-slate-950 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    {lang === 'en' ? 'Explore code' : 'Explorar código'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
