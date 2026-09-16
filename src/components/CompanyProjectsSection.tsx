import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Calendar, MapPin, ExternalLink, 
  Sparkles, Layers, ArrowUpRight, Filter, CheckCircle2
} from 'lucide-react';
import { portfolioContent } from '../data/experienceProjects';
import { GithubIcon } from './Icons';

interface CompanyProjectsSectionProps {
  lang: 'en' | 'pt';
}

export default function CompanyProjectsSection({ lang }: CompanyProjectsSectionProps) {
  const content = portfolioContent[lang];
  const companies = content.companies;

  // Active company tab
  const [activeCompanyId, setActiveCompanyId] = useState<string>(companies[0]?.id || 'evenyx');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const activeCompany = companies.find((c) => c.id === activeCompanyId) || companies[0];

  // Distinct categories for active company
  const categories = useMemo(() => {
    const cats = new Set<string>();
    activeCompany.projects.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, [activeCompany]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return activeCompany.projects;
    return activeCompany.projects.filter((p) => p.category === selectedCategory);
  }, [activeCompany, selectedCategory]);

  const handleCompanyChange = (id: string) => {
    setActiveCompanyId(id);
    setSelectedCategory('all');
  };

  return (
    <section id="experiencia" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Trajetória & Portfólio' : 'Experience & Portfolio'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {lang === 'pt' ? 'Projetos por Empresa' : 'Projects by Company'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'pt'
              ? 'Navegue pelas empresas e formações onde atuei e conheça os projetos desenvolvidos para cada contexto operacional.'
              : 'Explore the organizations and engineering programs where I developed production systems and technical applications.'}
          </p>
        </div>

        {/* Company Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2.5 scrollbar-none">
          {companies.map((company) => {
            const isActive = company.id === activeCompanyId;
            return (
              <button
                key={company.id}
                onClick={() => handleCompanyChange(company.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-white text-slate-950 border-white shadow-lg shadow-white/5 font-semibold'
                    : 'bg-white/[0.03] text-slate-400 border-white/[0.08] hover:bg-white/[0.07] hover:text-slate-200'
                }`}
              >
                <span>{company.companyName}</span>
                {company.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}
                  >
                    {company.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Company Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCompany.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Company Info Card */}
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 blur-[90px] rounded-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeCompany.companyName}
                    </h3>
                    {activeCompany.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {activeCompany.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-indigo-300 font-medium mt-1">
                    {activeCompany.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeCompany.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeCompany.location}</span>
                  </div>
                </div>
              </div>

              {/* Company Summary */}
              <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {activeCompany.summary}
              </p>

              {/* Company Responsibilities / Bullets when provided */}
              {activeCompany.responsibilities && activeCompany.responsibilities.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/[0.05] space-y-3">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {lang === 'pt' ? 'Atribuições e Resultados:' : 'Key Responsibilities & Scope:'}
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeCompany.responsibilities.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack Highlights */}
              <div className="mt-6 pt-5 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-medium mr-1">
                  {lang === 'pt' ? 'Tecnologias Utilizadas:' : 'Core Technologies:'}
                </span>
                {activeCompany.stackHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Company Projects Showcase — ONLY render if there are projects */}
            {activeCompany.projects.length > 0 && (
              <div className="space-y-6 pt-2">
                {/* Category Filter Pills when there are multiple categories */}
                {categories.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2 shrink-0">
                      <Filter className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{lang === 'pt' ? 'Filtrar módulo:' : 'Filter module:'}</span>
                    </div>

                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer border ${
                        selectedCategory === 'all'
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                          : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      {lang === 'pt' ? `Todos (${activeCompany.projects.length})` : `All (${activeCompany.projects.length})`}
                    </button>

                    {categories.map((cat) => {
                      const count = activeCompany.projects.filter((p) => p.category === cat).length;
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer border ${
                            isActive
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                              : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                          }`}
                        >
                          {cat} ({count})
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <h4 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-400" />
                      <span>
                        {lang === 'pt'
                          ? `Projetos de ${activeCompany.companyName}`
                          : `Projects at ${activeCompany.companyName}`}
                      </span>
                    </h4>
                    <span className="text-xs text-slate-400">
                      {filteredProjects.length}{' '}
                      {filteredProjects.length === 1
                        ? lang === 'pt' ? 'projeto exibido' : 'project displayed'
                        : lang === 'pt' ? 'projetos exibidos' : 'projects displayed'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] p-6 sm:p-7 transition-all duration-200 group"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="space-y-2 max-w-3xl">
                            {project.category && (
                              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                                {project.category}
                              </span>
                            )}
                            <h5 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                              {project.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-slate-400 font-medium">
                              {project.tagline}
                            </p>
                          </div>

                          {/* External Links */}
                          <div className="flex items-center gap-2">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 border border-white/[0.06]"
                              >
                                <GithubIcon className="w-4 h-4" />
                                <span>{lang === 'pt' ? 'Código no GitHub' : 'GitHub Repo'}</span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 border border-white/[0.06]"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Demo</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                          {project.description}
                        </p>

                        {/* Impact / Highlight Box */}
                        {project.impact && (
                          <div className="mt-4 p-4 rounded-2xl bg-indigo-500/[0.04] border border-indigo-500/15 flex items-start gap-3">
                            <Sparkles className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                            <div className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
                              <span className="font-semibold text-white mr-1.5">
                                {lang === 'pt' ? 'Destaque & Impacto:' : 'Highlight & Impact:'}
                              </span>
                              {project.impact}
                            </div>
                          </div>
                        )}

                        {/* Metrics Badges if present */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2.5">
                            {project.metrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2 text-xs"
                              >
                                <span className="text-slate-400">{metric.label}:</span>
                                <span className="font-bold text-white">{metric.value}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tags */}
                        <div className="mt-5 pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Independent / Personal Projects Section */}
        <div className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {content.personalProjectsTitle}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {content.personalProjectsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.personalProjects.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] p-6 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-indigo-400">Personal / Production</span>
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
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
      </div>
    </section>
  );
}
