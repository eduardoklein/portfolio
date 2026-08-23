import { BookOpen, Scale, Code2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  lang: 'en' | 'pt';
}

export default function About({ lang }: AboutProps) {
  const journeySteps = lang === 'en' 
    ? [
        {
          icon: <Code2 className="w-5 h-5 text-cyan-400" />,
          title: "First Contact",
          description: "IT and software development internships between 2014 and 2016 (SUAPE, Effetive Sistemas), where I built my initial foundation with programming logic and systems support."
        },
        {
          icon: <Scale className="w-5 h-5 text-emerald-400" />,
          title: "Transition & Law",
          description: "Bachelor's Degree in Law (UNIFACOL, 2017-2022) and legal internship at TJPE (2019-2021). Law brought me crucial skills: high-precision writing, complex logical and structural analysis, and methodical problem-solving."
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
          title: "Return to Tech",
          description: "1-year Technical Degree in Full Stack Web Development at Trybe (2023-2024). Published over 32 projects and delved deep into the modern JS/TS stack, databases, automated tests, and Docker."
        },
        {
          icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
          title: "Consolidation & CS",
          description: "Currently pursuing a Bachelor's in Computer Science (UNINTER, 2025-2029) and working on high-performance systems and biometrics at Evenyx."
        }
      ]
    : [
        {
          icon: <Code2 className="w-5 h-5 text-cyan-400" />,
          title: "Primeiro Contato",
          description: "Estágios em TI e desenvolvimento de software entre 2014 e 2016 (SUAPE, Effetive Sistemas), onde criei minha base inicial com lógica de programação e suporte a sistemas."
        },
        {
          icon: <Scale className="w-5 h-5 text-emerald-400" />,
          title: "Transição e Direito",
          description: "Graduação em Direito (UNIFACOL, 2017-2022) e estágio jurídico no TJPE (2019-2021). A advocacia me trouxe habilidades cruciais: escrita de alta precisão, análise lógica e estrutural complexa e resolução metódica de problemas."
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
          title: "A Volta à Tecnologia",
          description: "Formação Técnica de 1 ano em Desenvolvimento Web Full Stack na Trybe (2023-2024). Publiquei mais de 32 projetos e me aprofundei na stack moderna de Javascript, Typescript, bancos de dados, testes automatizados e Docker."
        },
        {
          icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
          title: "Consolidação e CS",
          description: "Atualmente cursando Bacharelado em Ciência da Computação (UNINTER, 2025-2029) e atuando no desenvolvimento de sistemas de alta performance e biometria na Evenyx."
        }
      ];

  return (
    <section id="sobre" className="py-24 bg-[#080f21] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'About Me' : 'Sobre Mim'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            {lang === 'en' 
              ? 'A unique trajectory combining the precision of Law and the rigor of Computer Science.'
              : 'Uma trajetória singular combinando a precisão do Direito e o rigor da Ciência da Computação.'}
          </p>
        </div>

        {/* Narrative & Profile info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              {lang === 'en' ? (
                <>
                  From legal analyst to <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">builder of robust systems</span>.
                </>
              ) : (
                <>
                  De analista jurídico a <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">desenvolvedor de sistemas robustos</span>.
                </>
              )}
            </h3>
            
            <p className="text-slate-300 leading-relaxed">
              {lang === 'en' 
                ? 'My journey in technology is not linear, and that is my greatest strength. My background in Law structured my mind to think under rigid rules, interpret complex scenarios, and document processes clearly — skills that translate perfectly into writing clean code, architecting APIs, and debugging legacy systems.'
                : 'Minha jornada na tecnologia não é linear, e isso é o meu maior trunfo. Minha passagem pelo Direito estruturou a minha mente para pensar sob regras rígidas, interpretar cenários complexos e documentar processos de forma clara — habilidades que se traduzem perfeitamente em escrever código limpo, arquitetar APIs e debugar sistemas legados.'}
            </p>

            <p className="text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Today, my absolute focus is the JavaScript/TypeScript and PHP/Laravel ecosystem. I enjoy solving performance bottlenecks, automating manual workflows, and building robust solutions. I have excellent communication skills and learn fast, adapting to dynamic, delivery-focused teams.'
                : 'Hoje, meu foco absoluto é o ecossistema JavaScript/TypeScript e o ecossistema PHP/Laravel. Gosto de resolver gargalos de performance, automatizar fluxos manuais e construir soluções robustas. Tenho facilidade extrema de comunicação e aprendizado rápido, adaptando-me a times dinâmicos e focados em entrega.'}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div className="text-3xl font-extrabold text-cyan-400">32+</div>
                <div className="text-sm text-slate-400 mt-1">
                  {lang === 'en' ? 'Personal projects on GitHub' : 'Projetos autorais no GitHub'}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div className="text-3xl font-extrabold text-emerald-400">2.5M+</div>
                <div className="text-sm text-slate-400 mt-1">
                  {lang === 'en' ? 'Customers served at Evenyx' : 'Clientes impactados na Evenyx'}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline / Journey Steps */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-lg font-bold text-white font-mono uppercase tracking-wider mb-6">
              {lang === 'en' ? 'My Journey' : 'A Minha Jornada'}
            </h4>
            
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-slate-800">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 relative"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                  <div className="flex-1 bg-slate-900/40 p-4 rounded-lg border border-slate-800/50 hover:border-slate-700/60 transition-colors">
                    <h5 className="font-bold text-white text-base">{step.title}</h5>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
