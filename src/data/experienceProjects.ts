export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category?: string;
  period?: string;
  description: string;
  impact?: string;
  metrics?: { label: string; value: string }[];
  tags: string[];
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  isHighlight?: boolean;
}

export interface CompanyExperience {
  id: string;
  companyName: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  current?: boolean;
  summary: string;
  responsibilities?: string[];
  stackHighlights: string[];
  projects: ProjectItem[];
}

export interface PortfolioData {
  hero: {
    badge: string;
    greeting: string;
    title: string;
    role: string;
    description: string;
    metrics: { label: string; value: string }[];
    actions: {
      projects: string;
      contact: string;
      resume: string;
      resumeUrl: string;
    };
  };
  companies: CompanyExperience[];
  personalProjectsTitle: string;
  personalProjectsDescription: string;
  personalProjects: ProjectItem[];
}

export const portfolioContent: Record<'en' | 'pt', PortfolioData> = {
  pt: {
    hero: {
      badge: "Disponível para novos desafios e projetos",
      greeting: "Olá, me chamo Eduardo Klein",
      title: "Construindo plataformas escaláveis e experiências de alto impacto.",
      role: "Engenheiro de Software Full Stack",
      description:
        "Especializado no desenvolvimento de sistemas web de alta volumetria, microsserviços, automação operacional e arquiteturas resilientes com React, TypeScript, PHP/Laravel, Node.js e bancos SQL.",
      metrics: [
        { value: "2.5M+", label: "Clientes atendidos na plataforma" },
        { value: "3 a 5s", label: "Tempo de validação facial (offline/online)" },
        { value: "60%+", label: "Redução no tempo operacional de kits" }
      ],
      actions: {
        projects: "Explorar Projetos",
        contact: "Entrar em Contato",
        resume: "Currículo",
        resumeUrl: "https://eduardoklein.github.io/portfolio/resume.pdf"
      }
    },
    companies: [
      {
            "id": "evenyx",
            "companyName": "Evenyx",
            "role": "Desenvolvedor Full Stack",
            "period": "Nov 2025 — Presente",
            "location": "Recife, PE (Híbrido)",
            "badge": "8 Projetos",
            current: true,
            "summary": "Atuação como Desenvolvedor Full Stack em uma das 10 maiores plataformas de ticketing do Brasil (2,5 milhões+ de clientes atendidos em 8 anos), sustentando eventos nacionais de grande porte como Carnatal (800 mil pessoas e R$ 30M+ em ingressos) e Fenearte. Único responsável pelo sistema de administração e troca de kits para eventos com até 4.000 atletas por edição.",
            "stackHighlights": [
                  "React",
                  "TypeScript",
                  "PHP",
                  "Laravel",
                  "Node.js",
                  "Docker",
                  "SQL",
                  "APIs REST",
                  "Raspberry Pi"
            ],
            "projects": [
                  {
                        "id": "evenyx-helpdesk",
                        "title": "HelpdeskEvenyx — Sistema Interno de Demandas",
                        "tagline": "Centralização de abertura de chamados técnicos e triagem para a engenharia",
                        "category": "Ferramentas Internas",
                        "description": "Criação do sistema interno de chamados para o time de tecnologia, centralizando demandas de suporte, bugs e incidentes das demais áreas da empresa, agilizando triagem e resolução técnica.",
                        "impact": "Rastreabilidade completa de chamados técnicos e priorização ágil de incidentes da operação.",
                        "tags": [
                              "PHP",
                              "Laravel",
                              "SQL",
                              "Internal Tools",
                              "Helpdesk"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/HelpdeskEvenyx",
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-kit-delivery",
                        "title": "Sistema de Administração e Troca de Kits de Corrida",
                        "tagline": "Automação logística e painel de validação para corridas com até 4.000 inscritos",
                        "category": "Operações & Logística",
                        "description": "Único desenvolvedor responsável pela criação e manutenção da plataforma de administração de participantes e troca de kits para grandes corridas (Mix Mateus Run, Novo Atacarejo Run). Substituiu processos manuais em planilhas por um painel web com geração automática de relatórios para os produtores.",
                        "impact": "Reduziu o tempo da operação de mais de uma semana para uma média de 3 dias para eventos com até 4.000 inscritos.",
                        "metrics": [
                              {
                                    "label": "Atletas por edição",
                                    "value": "Até 4.000"
                              },
                              {
                                    "label": "Redução operacional",
                                    "value": "~60% mais rápido"
                              },
                              {
                                    "label": "Relatórios",
                                    "value": "Automáticos"
                              }
                        ],
                        "tags": [
                              "React",
                              "PHP",
                              "Laravel",
                              "SQL",
                              "REST APIs",
                              "Automação"
                        ],
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-facial-validation",
                        "title": "Reconhecimento Facial Offline/Online & Validação de Fotos",
                        "tagline": "Check-in biométrico em 3 a 5s com tolerância a falhas e validação de fotos de usuários",
                        "category": "Biometria & Segurança",
                        "description": "Evolução do sistema de reconhecimento facial de participantes em colaboração com o time, operando tanto conectado à internet quanto offline nas portarias e catracas de eventos, além da validação automática e independente das fotos cadastradas pelos usuários.",
                        "impact": "Validação de participantes em média de 3 a 5 segundos por pessoa, garantindo entrada fluida e segura em locais sem conectividade.",
                        "metrics": [
                              {
                                    "label": "Tempo de validação",
                                    "value": "3 a 5 seg"
                              },
                              {
                                    "label": "Resiliência",
                                    "value": "Modo Offline"
                              },
                              {
                                    "label": "Auditoria",
                                    "value": "Validação Automática"
                              }
                        ],
                        "tags": [
                              "React",
                              "TypeScript",
                              "REST APIs",
                              "Offline Cache",
                              "Web Workers",
                              "Biometria"
                        ],
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-mixpag",
                        "title": "MixPag — Sistema Financeiro de Adquirência",
                        "tagline": "Plataforma de adquirência para processamento e liquidação de pagamentos em eventos",
                        "category": "Fintech & Pagamentos",
                        "description": "Desenvolvimento em equipe do MixPag, solução financeira de adquirência voltada para o ecossistema de bilhetagem e eventos, processando transações e fluxos financeiros com alta conformidade e integridade.",
                        "impact": "Processamento seguro e centralizado das transações financeiras em eventos de grande escala.",
                        "metrics": [
                              {
                                    "label": "Setor",
                                    "value": "Fintech / Adquirência"
                              },
                              {
                                    "label": "Integração",
                                    "value": "Core Evenyx"
                              }
                        ],
                        "tags": [
                              "PHP",
                              "Laravel",
                              "SQL",
                              "Gateways de Pagamento",
                              "APIs Seguras"
                        ],
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-ticketing-landing-pages",
                        "title": "Ecossistema de Landing Pages & Inscrições de Eventos",
                        "tagline": "Confecção contínua de múltiplas landing pages de alta conversão integradas ao checkout",
                        "category": "E-Commerce & Conversão",
                        "description": "Criação, otimização e manutenção de múltiplas landing pages e fluxos de venda direta para eventos esportivos de grande porte e corridas de rua (incluindo Corrida dos Morros e diversas edições parceiras). Desenvolvidas em React, JavaScript e HTML5/CSS3 com foco estrito em tempo de carregamento ultrarrápido (Core Web Vitals), responsividade mobile-first, SEO estrutural e conexão direta com as APIs de pagamento e backend Laravel em produção.",
                        "impact": "Processamento estável de transações durante picos intensos de tráfego em aberturas de lotes e aumento contínuo na conversão de inscrições mobile.",
                        "metrics": [
                              {
                                    "label": "Páginas Entregues",
                                    "value": "Múltiplas Edições"
                              },
                              {
                                    "label": "Performance",
                                    "value": "Core Web Vitals"
                              },
                              {
                                    "label": "Checkout",
                                    "value": "Produção Direta"
                              }
                        ],
                        "tags": [
                              "React",
                              "HTML5",
                              "CSS3",
                              "JavaScript",
                              "Tailwind CSS",
                              "Laravel",
                              "SEO",
                              "Performance"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/corrida-dos-morros",
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-guestlist-panel",
                        "title": "Evenlist — Gestão de Listas de Convidados",
                        "tagline": "Sistema digital de controle de portaria eliminando listas manuscritas",
                        "category": "Portaria & Controle",
                        "description": "Desenvolvimento do sistema de gestão de listas que serviu de fundação para o aplicativo de lista de convidados em eventos, eliminando o uso de pranchetas de papel e otimizando o controle de entrada do público.",
                        "impact": "Eliminação total do uso de papel e filas na conferência de listas em camarotes e setores VIP.",
                        "metrics": [
                              {
                                    "label": "Eficiência",
                                    "value": "100% Digital"
                              },
                              {
                                    "label": "Entrada",
                                    "value": "Validação Rápida"
                              }
                        ],
                        "tags": [
                              "React",
                              "TypeScript",
                              "Laravel",
                              "REST APIs"
                        ],
                        "isHighlight": false
                  },
                  {
                        "id": "evenyx-raspevenyx",
                        "title": "RaspEvenyx — Módulos para Totens e IoT",
                        "tagline": "Integração de totens de autoatendimento e hardware com Raspberry Pi",
                        "category": "Hardware & IoT",
                        "description": "Desenvolvimento de serviços e integrações para totens operacionais com Raspberry Pi, permitindo comunicação direta com periféricos para validação rápida de ingressos e credenciais em eventos.",
                        "impact": "Autonomia de credenciamento no local do evento com resposta instantânea de hardware.",
                        "tags": [
                              "PHP",
                              "Raspberry Pi",
                              "Linux",
                              "IoT",
                              "Hardware Integration"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/RaspEvenyx",
                        "isHighlight": false
                  },
                  {
                        "id": "evenyx-valida",
                        "title": "ValidaEvenyx — Credenciamento Operacional",
                        "tagline": "Módulo de validação e conferência rápida de participantes na portaria",
                        "category": "Portaria & Controle",
                        "description": "Interface e backend para leitura, busca ágil e validação de inscrições e cortesias diretamente nos pontos de entrada de eventos.",
                        "tags": [
                              "PHP",
                              "Blade",
                              "SQL",
                              "Validação",
                              "Event Ops"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/ValidaEvenyx",
                        "isHighlight": false
                  }
            ]
      },
      {
            "id": "trybe",
            "companyName": "Trybe",
            "role": "Desenvolvedor Web Full Stack (Formação Prática Intensiva)",
            "period": "2023 — 2024",
            "location": "Belo Horizonte, MG (Remoto)",
            "badge": "28 Projetos",
            "summary": "Formação intensiva de mais de 1.500 horas com foco total em desenvolvimento de software prático, arquitetura limpa, testes automatizados e metodologias ágeis (Scrum/Kanban). Durante o programa, foram desenvolvidos e aprovados 28 projetos de ponta a ponta nas áreas de Back-end, Front-end, Ciência da Computação com Python e Fundamentos Web.",
            "stackHighlights": [
                  "TypeScript",
                  "Node.js",
                  "React",
                  "Docker",
                  "Python",
                  "Sequelize ORM",
                  "MySQL",
                  "PostgreSQL",
                  "Jest",
                  "Mocha & Chai",
                  "TDD",
                  "POO",
                  "SOLID"
            ],
            "projects": [
                  {
                        "id": "trybe-futebol-clube",
                        "title": "FutebolClube (TFC)",
                        "tagline": "API RESTful completa para gerenciamento de partidas e classificação de futebol",
                        "category": "Back-end",
                        "description": "Backend completo desenvolvido em arquitetura em camadas (MSC - Model, Service, Controller), com modelagem relacional via Sequelize, autenticação JWT, validação de dados com Middlewares, cobertura de testes com Mocha/Chai e containerização completa com Docker.",
                        "impact": "Arquitetura modular sustentando atualização em tempo real de placares, partidas em andamento e cálculo dinâmico de pontuação e saldo de gols.",
                        "metrics": [
                              {
                                    "label": "Arquitetura",
                                    "value": "MSC / POO"
                              },
                              {
                                    "label": "Testes",
                                    "value": "Mocha & Chai"
                              }
                        ],
                        "tags": [
                              "TypeScript",
                              "Node.js",
                              "Express",
                              "Sequelize",
                              "Docker",
                              "JWT",
                              "Mocha & Chai",
                              "POO"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/FutebolClube",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-blogs-api",
                        "title": "BlogsAPI",
                        "tagline": "Serviço backend para gestão de posts de blog, categorias e usuários",
                        "category": "Back-end",
                        "description": "Construção de API RESTful com CRUD completo aplicando relacionamentos N:N e 1:N entre usuários, postagens e categorias. Autenticação e autorização via JWT com validações estritas de esquema.",
                        "impact": "Persistência estruturada em PostgreSQL/MySQL via Sequelize ORM com integridade referencial rigorosa.",
                        "metrics": [
                              {
                                    "label": "Padrão",
                                    "value": "RESTful API"
                              },
                              {
                                    "label": "Segurança",
                                    "value": "JWT Auth"
                              }
                        ],
                        "tags": [
                              "JavaScript",
                              "Node.js",
                              "Express",
                              "Sequelize",
                              "PostgreSQL",
                              "JWT"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/BlogsAPI",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-store-manager",
                        "title": "StoreManager",
                        "tagline": "API RESTful em padrão MSC para gestão de estoques e vendas com 100% de testes",
                        "category": "Back-end",
                        "description": "Microsserviço de gestão comercial para controle de produtos e transações de venda com validações assíncronas no MySQL, seguindo o padrão MSC com camadas desacopladas.",
                        "impact": "100% de cobertura de código com testes unitários cobrindo todos os fluxos de sucesso e casos de borda.",
                        "metrics": [
                              {
                                    "label": "Cobertura",
                                    "value": "100% Testes"
                              },
                              {
                                    "label": "Mocks",
                                    "value": "Sinon / Chai"
                              }
                        ],
                        "tags": [
                              "JavaScript",
                              "Node.js",
                              "Express",
                              "MySQL",
                              "Mocha",
                              "Sinon",
                              "Chai",
                              "TDD"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/StoreManager"
                  },
                  {
                        "id": "trybe-talker-manager",
                        "title": "TalkerManager",
                        "tagline": "API de cadastro de palestrantes com endpoints assíncronos e validações",
                        "category": "Back-end",
                        "description": "Aplicação em Express.js para criação, leitura, atualização e exclusão (CRUD) de participantes e palestrantes, manipulando persistência em sistema de arquivos de forma assíncrona.",
                        "tags": [
                              "JavaScript",
                              "Node.js",
                              "Express",
                              "Async/Await",
                              "Middlewares"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TalkerManager"
                  },
                  {
                        "id": "trybe-tsmith",
                        "title": "TSmith",
                        "tagline": "API desenvolvida em TypeScript com tipagem estrita e Programação Orientada a Objetos",
                        "category": "Back-end",
                        "description": "Criação de serviço de catálogo e pedidos em TypeScript aplicando interfaces estritas, tipagens genéricas, controllers e services desacoplados.",
                        "tags": [
                              "TypeScript",
                              "Node.js",
                              "Express",
                              "POO",
                              "MySQL"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TSmith"
                  },
                  {
                        "id": "trybe-dnd",
                        "title": "DnD — Dungeons & Dragons SOLID",
                        "tagline": "Modelagem orientada a objetos aplicando princípios SOLID",
                        "category": "Back-end",
                        "description": "Implementação de regras de combate e evolução de personagens aplicando com rigor os pilares de POO: Polimorfismo, Encapsulamento, Herança e Abstração, além dos princípios SOLID.",
                        "tags": [
                              "TypeScript",
                              "POO",
                              "SOLID",
                              "Design Patterns"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/DnD"
                  },
                  {
                        "id": "trybe-docker-todo",
                        "title": "DockerToDo",
                        "tagline": "Orquestração multi-container para aplicação full-stack via Docker Compose",
                        "category": "Back-end",
                        "description": "Configuração e empacotamento completo de ambientes distintos para frontend, backend e persistência de dados em containers Docker isolados com rede interna e volumes persistentes.",
                        "tags": [
                              "Docker",
                              "Docker Compose",
                              "Containers",
                              "DevOps"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/DockerToDo"
                  },
                  {
                        "id": "trybe-mysql-all",
                        "title": "MySQL One For All & All For One",
                        "tagline": "Modelagem relacional, normalização até 3FN e queries SQL avançadas",
                        "category": "Back-end",
                        "description": "Estruturação de banco de dados relacional para serviços de streaming de áudio, com tabelas normalizadas, criação de triggers, views, procedimentos e consultas com múltiplos JOINs e agregações.",
                        "tags": [
                              "SQL",
                              "MySQL",
                              "Database Modeling",
                              "3FN",
                              "Queries Complexas"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/MySQLOneForAll"
                  },
                  {
                        "id": "trybe-recipes-app",
                        "title": "RecipesApp",
                        "tagline": "App completo de receitas de comidas e bebidas com foco mobile-first e metodologia ágil",
                        "category": "Front-end",
                        "description": "Desenvolvido em equipe multidisciplinar utilizando Kanban/Scrum, o app oferece busca detalhada por ingredientes e categorias, reprodução passo a passo de receitas, cronômetro e persistência de favoritos.",
                        "impact": "Mais de 80% de cobertura de testes de integração com React Testing Library e layout responsivo de alta usabilidade.",
                        "metrics": [
                              {
                                    "label": "Metodologia",
                                    "value": "Scrum / Kanban"
                              },
                              {
                                    "label": "Testes",
                                    "value": "> 80% RTL"
                              }
                        ],
                        "tags": [
                              "React",
                              "Context API",
                              "Hooks",
                              "React Router",
                              "CSS Mobile-First",
                              "Jest",
                              "RTL"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/RecipesApp",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-frontend-store",
                        "title": "Frontend Online Store",
                        "tagline": "E-commerce integrado à API pública do Mercado Livre",
                        "category": "Front-end",
                        "description": "Loja virtual funcional desenvolvida em sprints ágeis, com busca dinâmica de produtos, navegação por árvore de categorias, carrinho de compras interativo e finalização de compra.",
                        "tags": [
                              "React",
                              "API Mercado Livre",
                              "State Management",
                              "Agile"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/FrontendOnlineStore"
                  },
                  {
                        "id": "trybe-trivia-redux",
                        "title": "Trivia Game React + Redux",
                        "tagline": "Jogo interativo de quiz com gerenciamento de estado global com Redux",
                        "category": "Front-end",
                        "description": "Plataforma interativa de quiz conectada a API externa de perguntas, gerenciando timer regressivo, pontuações, ranking de jogadores e persistência de dados no estado global.",
                        "tags": [
                              "React",
                              "Redux",
                              "Redux Thunk",
                              "API Integration",
                              "CSS"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TriviaReactRedux"
                  },
                  {
                        "id": "trybe-star-wars-search",
                        "title": "Star Wars Planets Search",
                        "tagline": "Filtros dinâmicos combinados com React Hooks e Context API",
                        "category": "Front-end",
                        "description": "Dashboard com listagem e filtragem de planetas do universo Star Wars, permitindo aplicar múltiplos filtros numéricos acumulados e pesquisa por texto sem re-renderizações desnecessárias.",
                        "tags": [
                              "React",
                              "Context API",
                              "React Hooks",
                              "Filter Logic"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/StarWarsPlanetsSearch"
                  },
                  {
                        "id": "trybe-wallet",
                        "title": "Wallet — Carteira de Despesas",
                        "tagline": "Gerenciador de finanças com conversão cambial em tempo real",
                        "category": "Front-end",
                        "description": "Controle de despesas pessoais onde cada gasto registrado em moedas internacionais é convertido automaticamente para reais utilizando as cotações mais recentes de APIs financeiras.",
                        "tags": [
                              "React",
                              "Redux",
                              "APIs Financeiras",
                              "CSS"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/Wallet"
                  },
                  {
                        "id": "trybe-ttunes",
                        "title": "TTunes — Player de Música",
                        "tagline": "Streaming e visualização de álbuns consumindo a API oficial do iTunes",
                        "category": "Front-end",
                        "description": "Aplicação musical completa com autenticação de perfil, busca de artistas, listagem de álbuns, reprodução de prévias de áudio e gerenciamento de músicas favoritas.",
                        "tags": [
                              "React",
                              "React Router",
                              "iTunes API",
                              "Audio API"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TTunes"
                  },
                  {
                        "id": "trybe-tryunfo",
                        "title": "Tryunfo",
                        "tagline": "Jogo interativo estilo Super Trunfo com criador dinâmico de cartas",
                        "category": "Front-end",
                        "description": "Aplicação para criação e gerenciamento de baralhos de cartas personalizados, com validações em tempo real de atributos, cartas trunfo e filtros de busca.",
                        "tags": [
                              "React",
                              "Form Validation",
                              "State Management"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/Tryunfo"
                  },
                  {
                        "id": "trybe-solar-system",
                        "title": "Solar System",
                        "tagline": "Aplicação de visualização dos planetas e missões espaciais",
                        "category": "Front-end",
                        "description": "Primeira aplicação desenvolvida em React para consolidação de componentes funcionais, passagem de props e renderização de listas no ecossistema JSX.",
                        "tags": [
                              "React",
                              "JSX",
                              "Componentization",
                              "CSS Modules"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/SolarSystem"
                  },
                  {
                        "id": "trybe-rtl-tests",
                        "title": "React Testing Library (RTL)",
                        "tagline": "Suíte abrangente de testes de integração e comportamento",
                        "category": "Front-end",
                        "description": "Implementação de testes automatizados com Jest e React Testing Library, garantindo a confiabilidade de navegação, formulários e eventos de usuário.",
                        "tags": [
                              "React",
                              "Jest",
                              "React Testing Library",
                              "Integration Tests"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/ReactTestingLibrary"
                  },
                  {
                        "id": "trybe-shopping-cart",
                        "title": "Shopping Cart",
                        "tagline": "Carrinho de compras interativo com persistência em LocalStorage",
                        "category": "Front-end",
                        "description": "Aplicação web manipulando a API pública do Mercado Livre através de Promises e Fetch API, com atualização dinâmica de valores e persistência no navegador.",
                        "tags": [
                              "JavaScript (ES6)",
                              "Fetch API",
                              "DOM Manipulation",
                              "LocalStorage"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/ShoppingCart"
                  },
                  {
                        "id": "trybe-algorithms",
                        "title": "Algorithms & Complexidade Assintótica",
                        "tagline": "Implementação e benchmark de algoritmos de ordenação e busca com análise Big-O",
                        "category": "Ciência da Computação",
                        "description": "Implementação de algoritmos de recursão, busca linear/binária, ordenação (QuickSort, MergeSort) e resolução de problemas clássicos com cálculo formal de complexidade de tempo e memória.",
                        "impact": "Compreensão aprofundada de eficiência de algoritmos, otimização de gargalos de CPU e alocação de memória.",
                        "metrics": [
                              {
                                    "label": "Foco",
                                    "value": "Notação Big-O"
                              },
                              {
                                    "label": "Paradigmas",
                                    "value": "Recursão / Divisão"
                              }
                        ],
                        "tags": [
                              "Python",
                              "Algoritmos",
                              "Complexidade de Tempo",
                              "Big-O",
                              "Data Structures"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/Algorithms",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-ting",
                        "title": "TING — Trybe Is Not Google",
                        "tagline": "Indexador e motor de busca para arquivos de texto estruturado",
                        "category": "Ciência da Computação",
                        "description": "Desenvolvimento de um sistema de indexação de arquivos de texto e busca rápida de termos em Python, implementando estruturas de dados fundamentais como Filas (Queue) e Pilhas (Stack).",
                        "tags": [
                              "Python",
                              "Estruturas de Dados",
                              "Filas",
                              "Pilhas",
                              "Processamento de Texto"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TING"
                  },
                  {
                        "id": "trybe-restaurant-orders",
                        "title": "Restaurant Orders",
                        "tagline": "Sistema analítico para gestão de pedidos e relatórios de demanda",
                        "category": "Ciência da Computação",
                        "description": "Construção de rotinas estatísticas de controle de comandas e frequência de clientes utilizando Hashmaps, Dicionários e Conjuntos (Sets) em Python com alto desempenho.",
                        "tags": [
                              "Python",
                              "Hashmaps",
                              "Sets",
                              "Dicionários",
                              "Análise de Dados"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/RestaurantOrders"
                  },
                  {
                        "id": "trybe-job-insights",
                        "title": "Job Insights",
                        "tagline": "Pipeline de extração e filtragem de dados de vagas de tecnologia",
                        "category": "Ciência da Computação",
                        "description": "Módulos para leitura e sanitização de grandes arquivos CSV, filtros dinâmicos por faixas salariais e tipos de contrato, e testes automatizados com Pytest.",
                        "tags": [
                              "Python",
                              "CSV Parsing",
                              "Pytest",
                              "Data Pipelines"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/JobInsights"
                  },
                  {
                        "id": "trybe-pixels-art",
                        "title": "PixelsArt",
                        "tagline": "Editor gráfico de pixel art em JavaScript puro",
                        "category": "Fundamentos Web",
                        "description": "Aplicação interativa de desenho em grid com paleta de cores dinâmica e manipulação direta do DOM via JavaScript puro sem frameworks.",
                        "tags": [
                              "JavaScript",
                              "DOM Manipulation",
                              "Event Handling",
                              "CSS Grid"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/PixelsArt"
                  },
                  {
                        "id": "trybe-js-unit-tests",
                        "title": "JS Unit Tests & TDD",
                        "tagline": "Prática rigorosa de Test-Driven Development (TDD) com Jest",
                        "category": "Fundamentos Web",
                        "description": "Desenvolvimento guiado por testes cobrindo funções de lógica pura, validações de integridade e edge cases matemáticos.",
                        "tags": [
                              "JavaScript",
                              "Jest",
                              "TDD",
                              "Unit Testing"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/JSUnitTests"
                  },
                  {
                        "id": "trybe-playground-functions",
                        "title": "Playground Functions",
                        "tagline": "Resolução de problemas de lógica de programação e algoritmos essenciais",
                        "category": "Fundamentos Web",
                        "description": "Conjunto de desafios algorítmicos em JavaScript moderno explorando estruturas de repetição, condicionais, objetos e arrays.",
                        "tags": [
                              "JavaScript (ES6)",
                              "Lógica de Programação",
                              "Algoritmos"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/PlaygroundFunctions"
                  },
                  {
                        "id": "trybe-semantic-html",
                        "title": "Semantic HTML & Web Standards",
                        "tagline": "Padrões de semântica web, acessibilidade e SEO estrutural",
                        "category": "Fundamentos Web",
                        "description": "Estruturação de documentos segundo as melhores práticas do W3C, acessibilidade semântica (a11y) e estilização com CSS moderno.",
                        "tags": [
                              "HTML5",
                              "CSS3",
                              "Acessibilidade (a11y)",
                              "SEO"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/SemanticHTML"
                  },
                  {
                        "id": "trybe-lessons-learned",
                        "title": "Lessons Learned",
                        "tagline": "Primeiro projeto de fundamentos de layout semântico e estilização",
                        "category": "Fundamentos Web",
                        "description": "Construção da primeira página web da formação consolidando elementos estruturais e seletores de estilo.",
                        "tags": [
                              "HTML5",
                              "CSS3",
                              "Flexbox"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/LessonsLearned"
                  },
                  {
                        "id": "trybe-desafio-qca",
                        "title": "Desafio QCA",
                        "tagline": "Projeto de desafio técnico desenvolvido em TypeScript",
                        "category": "Fundamentos Web",
                        "description": "Resolução de desafio prático de código aplicando TypeScript e padrões de engenharia.",
                        "tags": [
                              "TypeScript",
                              "Node.js",
                              "Clean Code"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/desafioQCA"
                  }
            ]
      },
      {
            "id": "effetive",
            "companyName": "Effetive Sistemas",
            "role": "Desenvolvedor de Software (Estágio)",
            "period": "Ago 2016 — Nov 2016",
            "location": "Recife, PE",
            "summary": "Desenvolvimento e manutenção de módulos em sistema corporativo de grande porte utilizado pelas operações da Michelin na América Latina.",
            "responsibilities": [
                  "Desenvolvi e mantive sistema corporativo utilizado pela Michelin América Latina.",
                  "Traduzi e adaptei conteúdos técnicos do inglês para o português.",
                  "Atuei em metodologia ágil, utilizando Git e ferramentas de gestão de tarefas."
            ],
            "stackHighlights": [
                  "JavaScript",
                  "HTML/CSS",
                  "Git",
                  "Sistemas Corporativos",
                  "Metodologia Ágil"
            ],
            "projects": []
      },
      {
            "id": "suape",
            "companyName": "Complexo Industrial Portuário de SUAPE",
            "role": "Estagiário de Tecnologia da Informação",
            "period": "Out 2014 — Jul 2016",
            "location": "Cabo de Santo Agostinho, PE",
            "summary": "Atuação na área de tecnologia da informação de um dos maiores complexos industriais e portuários do país, prestando suporte operacional de alta disponibilidade para setores administrativos e sistemas de gestão.",
            "responsibilities": [
                  "Prestei suporte técnico presencial e remoto a mais de 100 usuários nos departamentos administrativos, resolvendo em média 6 chamados diários (~120 chamados/mês) sobre sistemas, rede corporativa e periféricos ao longo de 1 ano e 10 meses.",
                  "Realizei manutenção preventiva e corretiva de softwares corporativos, incluindo o ERP TOTVS, assegurando a continuidade das operações administrativas.",
                  "Executei manutenção de hardware em estações de trabalho: formatação, diagnóstico, substituição de componentes físicos e instalação/configuração de drivers e softwares essenciais."
            ],
            "stackHighlights": [
                  "ERP TOTVS",
                  "Redes Corporativas",
                  "Hardware & Diagnóstico",
                  "Suporte a Sistemas"
            ],
            "projects": []
      }
],
    personalProjectsTitle: "Projetos Independentes & Automação",
    personalProjectsDescription:
      "Aplicações desenvolvidas para estudo de arquitetura, automação operacional, sistemas em tempo real e utilitários de produtividade.",
    personalProjects: [
      {
            "id": "proj-agent-panel",
            "title": "Agent Control Panel",
            "tagline": "Painel de Menu Bar do macOS para monitoramento de sessões de agentes AI",
            "description": "Aplicativo nativo em Swift para macOS que monitora em tempo real processos, instâncias e sessões ativas do Claude Code, Codex e Antigravity diretamente na barra de menus.",
            "tags": [
                  "Swift",
                  "macOS",
                  "Process Management",
                  "Native UI",
                  "AI Tooling"
            ],
            "githubUrl": "https://github.com/eduardoklein/agent-control-panel"
      },
      {
            "id": "proj-resume-builder",
            "title": "Resume Builder & ATS Tailor",
            "tagline": "Gerador e customizador inteligente de currículos com conformidade ATS",
            "description": "Aplicação full-stack em Node.js desenvolvida para modularizar perfis profissionais em JSON, adaptar experiências a descrições de vagas e gerar currículos formatados para aprovação em sistemas ATS.",
            "tags": [
                  "Node.js",
                  "JavaScript",
                  "Express",
                  "ATS Optimization",
                  "Automação"
            ],
            "githubUrl": "https://github.com/eduardoklein/resume-builder"
      },
      {
            "id": "proj-redalert",
            "title": "RedAlert — Telemetria & Alarmes",
            "tagline": "Motor assíncrono de monitoramento com disparo de alertas em tempo real",
            "description": "Serviço em Python desenvolvido para escuta contínua de feeds de dados em tempo real, detecção de divergências operacionais fora dos limites de tolerância e disparo imediato de notificações multicanal.",
            "tags": [
                  "Python",
                  "AsyncIO",
                  "WebSockets",
                  "Telemetria",
                  "Alerting Engine"
            ],
            "githubUrl": "https://github.com/eduardoklein/redalert"
      },
      {
            "id": "proj-botranker",
            "title": "BotRanker — Analytics & Benchmarking",
            "tagline": "Framework de análise estatística comparativa e classificação de performance",
            "description": "Pipeline analítico em Python para consolidação de métricas operacionais, análise estatística comparativa de múltiplos sistemas automatizados e classificação de eficiência de resposta sob parâmetros definidos.",
            "tags": [
                  "Python",
                  "Data Analysis",
                  "Benchmarking",
                  "Statistical Modeling"
            ],
            "githubUrl": "https://github.com/eduardoklein/botranker"
      },
      {
            "id": "proj-delist-radar",
            "title": "Delist Radar",
            "tagline": "Inventário e mapeamento de rotas de liquidez para ativos suspensos",
            "description": "Sistema em PHP que rastreia moedas suspensas em exchanges centralizadas, resolve a identidade on-chain dos tokens e calcula valor realizável.",
            "tags": [
                  "PHP",
                  "APIs Financeiras",
                  "Web Scraping",
                  "Data Modeling"
            ],
            "githubUrl": "https://github.com/eduardoklein/delist-radar"
      },
      {
            "id": "proj-safemode",
            "title": "SafeMode Arbitrage Engine",
            "tagline": "Motor de execução automatizada com camadas de segurança e tolerância a risco",
            "description": "Execução automatizada de rotinas analíticas em tempo real com validação contínua de livros de ordens, conexão persistente via WebSockets e travas de segurança ativas.",
            "tags": [
                  "JavaScript",
                  "Node.js",
                  "WebSockets",
                  "Algorithmic Systems",
                  "Risk Controls"
            ],
            "githubUrl": "https://github.com/eduardoklein/safemode"
      }
]
  },
  en: {
    hero: {
      badge: "Available for new challenges and engineering roles",
      greeting: "Hello, I'm Eduardo Klein",
      title: "Engineering scalable platforms and high-impact digital experiences.",
      role: "Full Stack Software Engineer",
      description:
        "Specialized in high-traffic web applications, microservices, operational automation, and resilient architectures using React, TypeScript, PHP/Laravel, Node.js, and SQL databases.",
      metrics: [
        { value: "2.5M+", label: "Clients served on platform" },
        { value: "3 a 5s", label: "Facial validation (offline/online)" },
        { value: "60%+", label: "Kit operation time reduction" }
      ],
      actions: {
        projects: "Explore Projects",
        contact: "Get in Touch",
        resume: "Resume",
        resumeUrl: "https://eduardoklein.github.io/portfolio/resume.pdf"
      }
    },
    companies: [
      {
            "id": "evenyx",
            "companyName": "Evenyx",
            "role": "Full Stack Developer",
            "period": "Nov 2025 — Present",
            "location": "Recife, PE, Brazil (Hybrid)",
            "badge": "8 Projects",
            current: true,
            "summary": "Working as Full Stack Developer at one of Brazil's top 10 ticketing platforms (2.5M+ attendees served over 8 years), supporting major national events like Carnatal (800K attendees and R$ 30M+ in ticket sales) and Fenearte. Sole developer responsible for participant management and race-kit distribution for races with up to 4,000 athletes per edition.",
            "stackHighlights": [
                  "React",
                  "TypeScript",
                  "PHP",
                  "Laravel",
                  "Node.js",
                  "Docker",
                  "SQL",
                  "REST APIs",
                  "Raspberry Pi"
            ],
            "projects": [
                  {
                        "id": "evenyx-helpdesk",
                        "title": "HelpdeskEvenyx — Internal Tech Ticketing System",
                        "tagline": "Unified ticketing and incident triage platform for the engineering team",
                        "category": "Internal Tools",
                        "description": "Built the internal helpdesk ticketing tool for the technology team, centralizing cross-department support tickets and bug reports to streamline triage and resolution.",
                        "impact": "End-to-end incident traceability and faster technical support turnaround.",
                        "tags": [
                              "PHP",
                              "Laravel",
                              "SQL",
                              "Internal Tools",
                              "Helpdesk"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/HelpdeskEvenyx",
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-kit-delivery",
                        "title": "Race-Kit Logistics & Participant Management System",
                        "tagline": "Operational automation and real-time dashboard for sporting events with up to 4,000 registrants",
                        "category": "Operations & Logistics",
                        "description": "Sole developer responsible for creating and maintaining the participant management and race-kit exchange system for major street runs (Mix Mateus Run, Novo Atacarejo Run). Replaced manual spreadsheet operations with an automated web dashboard with automatic report generation for organizers.",
                        "impact": "Reduced kit exchange operation time from over a week down to an average of 3 days for events with up to 4,000 registrants.",
                        "metrics": [
                              {
                                    "label": "Athletes per edition",
                                    "value": "Up to 4,000"
                              },
                              {
                                    "label": "Time reduction",
                                    "value": "~60% faster"
                              },
                              {
                                    "label": "Reporting",
                                    "value": "Automated"
                              }
                        ],
                        "tags": [
                              "React",
                              "PHP",
                              "Laravel",
                              "SQL",
                              "REST APIs",
                              "Automation"
                        ],
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-facial-validation",
                        "title": "Offline/Online Facial Validation & Photo Verification",
                        "tagline": "3 to 5 second biometric admission with automatic user photo validation and network fault tolerance",
                        "category": "Biometrics & Security",
                        "description": "Engineered and enhanced the attendee biometric facial recognition system in collaboration with the engineering team, operating seamlessly both online and offline at gates/turnstiles, featuring automated and independent validation of attendee photos.",
                        "impact": "Participant admission in just 3 to 5 seconds per person, eliminating gate queues even in venues with zero internet connectivity.",
                        "metrics": [
                              {
                                    "label": "Validation time",
                                    "value": "3 to 5 sec"
                              },
                              {
                                    "label": "Resilience",
                                    "value": "Offline-First"
                              },
                              {
                                    "label": "Auditing",
                                    "value": "Auto Verification"
                              }
                        ],
                        "tags": [
                              "React",
                              "TypeScript",
                              "REST APIs",
                              "Offline Cache",
                              "Web Workers",
                              "Biometrics"
                        ],
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-mixpag",
                        "title": "MixPag — Financial Payment Acquiring System",
                        "tagline": "Financial acquiring platform for payment processing and settlement across event transactions",
                        "category": "Fintech & Payments",
                        "description": "Co-developed MixPag, a specialized acquiring and payment processing platform serving large-scale event ticketing, ensuring secure and high-compliance transaction workflows.",
                        "impact": "Secure and unified transaction processing across high-volume production events.",
                        "metrics": [
                              {
                                    "label": "Domain",
                                    "value": "Fintech / Acquiring"
                              },
                              {
                                    "label": "Integration",
                                    "value": "Core Platform"
                              }
                        ],
                        "tags": [
                              "PHP",
                              "Laravel",
                              "SQL",
                              "Payment Gateways",
                              "Secure APIs"
                        ],
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-ticketing-landing-pages",
                        "title": "High-Conversion Event Landing Pages & Registration Ecosystem",
                        "tagline": "Continuous engineering of high-converting event landing pages integrated with live checkout",
                        "category": "E-Commerce & Conversion",
                        "description": "Engineering, performance tuning, and continuous deployment of multiple direct-to-checkout landing pages for major street runs and sporting events (including Corrida dos Morros and partner race series). Built using React, Tailwind CSS, and HTML5/CSS3 with extreme focus on sub-second load times (Core Web Vitals), mobile-first conversion, SEO, and resilient live checkout integration on Laravel APIs.",
                        "impact": "Seamless transaction handling during viral batch launches and measurable improvements in mobile checkout completion rates.",
                        "metrics": [
                              {
                                    "label": "Delivered Pages",
                                    "value": "Multiple Editions"
                              },
                              {
                                    "label": "Performance",
                                    "value": "Core Web Vitals"
                              },
                              {
                                    "label": "Checkout",
                                    "value": "Production Direct"
                              }
                        ],
                        "tags": [
                              "React",
                              "HTML5",
                              "CSS3",
                              "JavaScript",
                              "Tailwind CSS",
                              "Laravel",
                              "SEO",
                              "Performance"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/corrida-dos-morros",
                        "isHighlight": true
                  },
                  {
                        "id": "evenyx-guestlist-panel",
                        "title": "Evenlist — Digital Guest List Management",
                        "tagline": "Digital admission control system eliminating manual paper guestlists",
                        "category": "Access Control",
                        "description": "Built the guestlist management system that established the foundation for the VIP guest admission mobile app, eliminating manual paper clipboards and accelerating venue check-ins.",
                        "impact": "Completely digitized guest check-in, eliminating bottlenecks at VIP access points.",
                        "metrics": [
                              {
                                    "label": "Format",
                                    "value": "100% Digital"
                              },
                              {
                                    "label": "Entry speed",
                                    "value": "Instant Lookup"
                              }
                        ],
                        "tags": [
                              "React",
                              "TypeScript",
                              "Laravel",
                              "REST APIs"
                        ],
                        "isHighlight": false
                  },
                  {
                        "id": "evenyx-raspevenyx",
                        "title": "RaspEvenyx — Kiosks & IoT Hardware Modules",
                        "tagline": "Hardware communication and validation services on Raspberry Pi",
                        "category": "Hardware & IoT",
                        "description": "Developed services and hardware integrations on Raspberry Pi powering automated event kiosks for real-time ticket scanning and credential issuance.",
                        "impact": "On-site self-service badge and credential validation with instant hardware response.",
                        "tags": [
                              "PHP",
                              "Raspberry Pi",
                              "Linux",
                              "IoT",
                              "Hardware Integration"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/RaspEvenyx",
                        "isHighlight": false
                  },
                  {
                        "id": "evenyx-valida",
                        "title": "ValidaEvenyx — Operational Gate Admission",
                        "tagline": "Rapid attendee verification and credential validation module",
                        "category": "Access Control",
                        "description": "Admission interface and backend for fast registrant lookup and check-in confirmation directly at entrance turnstiles.",
                        "tags": [
                              "PHP",
                              "Blade",
                              "SQL",
                              "Validation",
                              "Event Ops"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/ValidaEvenyx",
                        "isHighlight": false
                  }
            ]
      },
      {
            "id": "trybe",
            "companyName": "Trybe",
            "role": "Full Stack Web Developer (Intensive Engineering Program)",
            "period": "2023 — 2024",
            "location": "Belo Horizonte, Brazil (Remote)",
            "badge": "28 Projects",
            "summary": "1,500+ hours of intensive hands-on software engineering covering full-stack development, clean architecture, automated testing, and agile workflows (Scrum/Kanban). Delivered and published 28 production-grade projects spanning Back-end, Front-end, Computer Science with Python, and Web Fundamentals.",
            "stackHighlights": [
                  "TypeScript",
                  "Node.js",
                  "React",
                  "Docker",
                  "Python",
                  "Sequelize ORM",
                  "MySQL",
                  "PostgreSQL",
                  "Jest",
                  "Mocha & Chai",
                  "TDD",
                  "OOP",
                  "SOLID"
            ],
            "projects": [
                  {
                        "id": "trybe-futebol-clube",
                        "title": "FutebolClube (TFC)",
                        "tagline": "API RESTful completa para gerenciamento de partidas e classificação de futebol",
                        "category": "Back-end",
                        "description": "Backend completo desenvolvido em arquitetura em camadas (MSC - Model, Service, Controller), com modelagem relacional via Sequelize, autenticação JWT, validação de dados com Middlewares, cobertura de testes com Mocha/Chai e containerização completa com Docker.",
                        "impact": "Arquitetura modular sustentando atualização em tempo real de placares, partidas em andamento e cálculo dinâmico de pontuação e saldo de gols.",
                        "metrics": [
                              {
                                    "label": "Arquitetura",
                                    "value": "MSC / POO"
                              },
                              {
                                    "label": "Testes",
                                    "value": "Mocha & Chai"
                              }
                        ],
                        "tags": [
                              "TypeScript",
                              "Node.js",
                              "Express",
                              "Sequelize",
                              "Docker",
                              "JWT",
                              "Mocha & Chai",
                              "POO"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/FutebolClube",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-blogs-api",
                        "title": "BlogsAPI",
                        "tagline": "Serviço backend para gestão de posts de blog, categorias e usuários",
                        "category": "Back-end",
                        "description": "Construção de API RESTful com CRUD completo aplicando relacionamentos N:N e 1:N entre usuários, postagens e categorias. Autenticação e autorização via JWT com validações estritas de esquema.",
                        "impact": "Persistência estruturada em PostgreSQL/MySQL via Sequelize ORM com integridade referencial rigorosa.",
                        "metrics": [
                              {
                                    "label": "Padrão",
                                    "value": "RESTful API"
                              },
                              {
                                    "label": "Segurança",
                                    "value": "JWT Auth"
                              }
                        ],
                        "tags": [
                              "JavaScript",
                              "Node.js",
                              "Express",
                              "Sequelize",
                              "PostgreSQL",
                              "JWT"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/BlogsAPI",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-store-manager",
                        "title": "StoreManager",
                        "tagline": "API RESTful em padrão MSC para gestão de estoques e vendas com 100% de testes",
                        "category": "Back-end",
                        "description": "Microsserviço de gestão comercial para controle de produtos e transações de venda com validações assíncronas no MySQL, seguindo o padrão MSC com camadas desacopladas.",
                        "impact": "100% de cobertura de código com testes unitários cobrindo todos os fluxos de sucesso e casos de borda.",
                        "metrics": [
                              {
                                    "label": "Cobertura",
                                    "value": "100% Testes"
                              },
                              {
                                    "label": "Mocks",
                                    "value": "Sinon / Chai"
                              }
                        ],
                        "tags": [
                              "JavaScript",
                              "Node.js",
                              "Express",
                              "MySQL",
                              "Mocha",
                              "Sinon",
                              "Chai",
                              "TDD"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/StoreManager"
                  },
                  {
                        "id": "trybe-talker-manager",
                        "title": "TalkerManager",
                        "tagline": "API de cadastro de palestrantes com endpoints assíncronos e validações",
                        "category": "Back-end",
                        "description": "Aplicação em Express.js para criação, leitura, atualização e exclusão (CRUD) de participantes e palestrantes, manipulando persistência em sistema de arquivos de forma assíncrona.",
                        "tags": [
                              "JavaScript",
                              "Node.js",
                              "Express",
                              "Async/Await",
                              "Middlewares"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TalkerManager"
                  },
                  {
                        "id": "trybe-tsmith",
                        "title": "TSmith",
                        "tagline": "API desenvolvida em TypeScript com tipagem estrita e Programação Orientada a Objetos",
                        "category": "Back-end",
                        "description": "Criação de serviço de catálogo e pedidos em TypeScript aplicando interfaces estritas, tipagens genéricas, controllers e services desacoplados.",
                        "tags": [
                              "TypeScript",
                              "Node.js",
                              "Express",
                              "POO",
                              "MySQL"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TSmith"
                  },
                  {
                        "id": "trybe-dnd",
                        "title": "DnD — Dungeons & Dragons SOLID",
                        "tagline": "Modelagem orientada a objetos aplicando princípios SOLID",
                        "category": "Back-end",
                        "description": "Implementação de regras de combate e evolução de personagens aplicando com rigor os pilares de POO: Polimorfismo, Encapsulamento, Herança e Abstração, além dos princípios SOLID.",
                        "tags": [
                              "TypeScript",
                              "POO",
                              "SOLID",
                              "Design Patterns"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/DnD"
                  },
                  {
                        "id": "trybe-docker-todo",
                        "title": "DockerToDo",
                        "tagline": "Orquestração multi-container para aplicação full-stack via Docker Compose",
                        "category": "Back-end",
                        "description": "Configuração e empacotamento completo de ambientes distintos para frontend, backend e persistência de dados em containers Docker isolados com rede interna e volumes persistentes.",
                        "tags": [
                              "Docker",
                              "Docker Compose",
                              "Containers",
                              "DevOps"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/DockerToDo"
                  },
                  {
                        "id": "trybe-mysql-all",
                        "title": "MySQL One For All & All For One",
                        "tagline": "Modelagem relacional, normalização até 3FN e queries SQL avançadas",
                        "category": "Back-end",
                        "description": "Estruturação de banco de dados relacional para serviços de streaming de áudio, com tabelas normalizadas, criação de triggers, views, procedimentos e consultas com múltiplos JOINs e agregações.",
                        "tags": [
                              "SQL",
                              "MySQL",
                              "Database Modeling",
                              "3FN",
                              "Queries Complexas"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/MySQLOneForAll"
                  },
                  {
                        "id": "trybe-recipes-app",
                        "title": "RecipesApp",
                        "tagline": "App completo de receitas de comidas e bebidas com foco mobile-first e metodologia ágil",
                        "category": "Front-end",
                        "description": "Desenvolvido em equipe multidisciplinar utilizando Kanban/Scrum, o app oferece busca detalhada por ingredientes e categorias, reprodução passo a passo de receitas, cronômetro e persistência de favoritos.",
                        "impact": "Mais de 80% de cobertura de testes de integração com React Testing Library e layout responsivo de alta usabilidade.",
                        "metrics": [
                              {
                                    "label": "Metodologia",
                                    "value": "Scrum / Kanban"
                              },
                              {
                                    "label": "Testes",
                                    "value": "> 80% RTL"
                              }
                        ],
                        "tags": [
                              "React",
                              "Context API",
                              "Hooks",
                              "React Router",
                              "CSS Mobile-First",
                              "Jest",
                              "RTL"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/RecipesApp",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-frontend-store",
                        "title": "Frontend Online Store",
                        "tagline": "E-commerce integrado à API pública do Mercado Livre",
                        "category": "Front-end",
                        "description": "Loja virtual funcional desenvolvida em sprints ágeis, com busca dinâmica de produtos, navegação por árvore de categorias, carrinho de compras interativo e finalização de compra.",
                        "tags": [
                              "React",
                              "API Mercado Livre",
                              "State Management",
                              "Agile"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/FrontendOnlineStore"
                  },
                  {
                        "id": "trybe-trivia-redux",
                        "title": "Trivia Game React + Redux",
                        "tagline": "Jogo interativo de quiz com gerenciamento de estado global com Redux",
                        "category": "Front-end",
                        "description": "Plataforma interativa de quiz conectada a API externa de perguntas, gerenciando timer regressivo, pontuações, ranking de jogadores e persistência de dados no estado global.",
                        "tags": [
                              "React",
                              "Redux",
                              "Redux Thunk",
                              "API Integration",
                              "CSS"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TriviaReactRedux"
                  },
                  {
                        "id": "trybe-star-wars-search",
                        "title": "Star Wars Planets Search",
                        "tagline": "Filtros dinâmicos combinados com React Hooks e Context API",
                        "category": "Front-end",
                        "description": "Dashboard com listagem e filtragem de planetas do universo Star Wars, permitindo aplicar múltiplos filtros numéricos acumulados e pesquisa por texto sem re-renderizações desnecessárias.",
                        "tags": [
                              "React",
                              "Context API",
                              "React Hooks",
                              "Filter Logic"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/StarWarsPlanetsSearch"
                  },
                  {
                        "id": "trybe-wallet",
                        "title": "Wallet — Carteira de Despesas",
                        "tagline": "Gerenciador de finanças com conversão cambial em tempo real",
                        "category": "Front-end",
                        "description": "Controle de despesas pessoais onde cada gasto registrado em moedas internacionais é convertido automaticamente para reais utilizando as cotações mais recentes de APIs financeiras.",
                        "tags": [
                              "React",
                              "Redux",
                              "APIs Financeiras",
                              "CSS"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/Wallet"
                  },
                  {
                        "id": "trybe-ttunes",
                        "title": "TTunes — Player de Música",
                        "tagline": "Streaming e visualização de álbuns consumindo a API oficial do iTunes",
                        "category": "Front-end",
                        "description": "Aplicação musical completa com autenticação de perfil, busca de artistas, listagem de álbuns, reprodução de prévias de áudio e gerenciamento de músicas favoritas.",
                        "tags": [
                              "React",
                              "React Router",
                              "iTunes API",
                              "Audio API"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TTunes"
                  },
                  {
                        "id": "trybe-tryunfo",
                        "title": "Tryunfo",
                        "tagline": "Jogo interativo estilo Super Trunfo com criador dinâmico de cartas",
                        "category": "Front-end",
                        "description": "Aplicação para criação e gerenciamento de baralhos de cartas personalizados, com validações em tempo real de atributos, cartas trunfo e filtros de busca.",
                        "tags": [
                              "React",
                              "Form Validation",
                              "State Management"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/Tryunfo"
                  },
                  {
                        "id": "trybe-solar-system",
                        "title": "Solar System",
                        "tagline": "Aplicação de visualização dos planetas e missões espaciais",
                        "category": "Front-end",
                        "description": "Primeira aplicação desenvolvida em React para consolidação de componentes funcionais, passagem de props e renderização de listas no ecossistema JSX.",
                        "tags": [
                              "React",
                              "JSX",
                              "Componentization",
                              "CSS Modules"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/SolarSystem"
                  },
                  {
                        "id": "trybe-rtl-tests",
                        "title": "React Testing Library (RTL)",
                        "tagline": "Suíte abrangente de testes de integração e comportamento",
                        "category": "Front-end",
                        "description": "Implementação de testes automatizados com Jest e React Testing Library, garantindo a confiabilidade de navegação, formulários e eventos de usuário.",
                        "tags": [
                              "React",
                              "Jest",
                              "React Testing Library",
                              "Integration Tests"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/ReactTestingLibrary"
                  },
                  {
                        "id": "trybe-shopping-cart",
                        "title": "Shopping Cart",
                        "tagline": "Carrinho de compras interativo com persistência em LocalStorage",
                        "category": "Front-end",
                        "description": "Aplicação web manipulando a API pública do Mercado Livre através de Promises e Fetch API, com atualização dinâmica de valores e persistência no navegador.",
                        "tags": [
                              "JavaScript (ES6)",
                              "Fetch API",
                              "DOM Manipulation",
                              "LocalStorage"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/ShoppingCart"
                  },
                  {
                        "id": "trybe-algorithms",
                        "title": "Algorithms & Complexidade Assintótica",
                        "tagline": "Implementação e benchmark de algoritmos de ordenação e busca com análise Big-O",
                        "category": "Computer Science",
                        "description": "Implementação de algoritmos de recursão, busca linear/binária, ordenação (QuickSort, MergeSort) e resolução de problemas clássicos com cálculo formal de complexidade de tempo e memória.",
                        "impact": "Compreensão aprofundada de eficiência de algoritmos, otimização de gargalos de CPU e alocação de memória.",
                        "metrics": [
                              {
                                    "label": "Foco",
                                    "value": "Notação Big-O"
                              },
                              {
                                    "label": "Paradigmas",
                                    "value": "Recursão / Divisão"
                              }
                        ],
                        "tags": [
                              "Python",
                              "Algoritmos",
                              "Complexidade de Tempo",
                              "Big-O",
                              "Data Structures"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/Algorithms",
                        "isHighlight": true
                  },
                  {
                        "id": "trybe-ting",
                        "title": "TING — Trybe Is Not Google",
                        "tagline": "Indexador e motor de busca para arquivos de texto estruturado",
                        "category": "Computer Science",
                        "description": "Desenvolvimento de um sistema de indexação de arquivos de texto e busca rápida de termos em Python, implementando estruturas de dados fundamentais como Filas (Queue) e Pilhas (Stack).",
                        "tags": [
                              "Python",
                              "Estruturas de Dados",
                              "Filas",
                              "Pilhas",
                              "Processamento de Texto"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/TING"
                  },
                  {
                        "id": "trybe-restaurant-orders",
                        "title": "Restaurant Orders",
                        "tagline": "Sistema analítico para gestão de pedidos e relatórios de demanda",
                        "category": "Computer Science",
                        "description": "Construção de rotinas estatísticas de controle de comandas e frequência de clientes utilizando Hashmaps, Dicionários e Conjuntos (Sets) em Python com alto desempenho.",
                        "tags": [
                              "Python",
                              "Hashmaps",
                              "Sets",
                              "Dicionários",
                              "Análise de Dados"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/RestaurantOrders"
                  },
                  {
                        "id": "trybe-job-insights",
                        "title": "Job Insights",
                        "tagline": "Pipeline de extração e filtragem de dados de vagas de tecnologia",
                        "category": "Computer Science",
                        "description": "Módulos para leitura e sanitização de grandes arquivos CSV, filtros dinâmicos por faixas salariais e tipos de contrato, e testes automatizados com Pytest.",
                        "tags": [
                              "Python",
                              "CSV Parsing",
                              "Pytest",
                              "Data Pipelines"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/JobInsights"
                  },
                  {
                        "id": "trybe-pixels-art",
                        "title": "PixelsArt",
                        "tagline": "Editor gráfico de pixel art em JavaScript puro",
                        "category": "Web Fundamentals",
                        "description": "Aplicação interativa de desenho em grid com paleta de cores dinâmica e manipulação direta do DOM via JavaScript puro sem frameworks.",
                        "tags": [
                              "JavaScript",
                              "DOM Manipulation",
                              "Event Handling",
                              "CSS Grid"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/PixelsArt"
                  },
                  {
                        "id": "trybe-js-unit-tests",
                        "title": "JS Unit Tests & TDD",
                        "tagline": "Prática rigorosa de Test-Driven Development (TDD) com Jest",
                        "category": "Web Fundamentals",
                        "description": "Desenvolvimento guiado por testes cobrindo funções de lógica pura, validações de integridade e edge cases matemáticos.",
                        "tags": [
                              "JavaScript",
                              "Jest",
                              "TDD",
                              "Unit Testing"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/JSUnitTests"
                  },
                  {
                        "id": "trybe-playground-functions",
                        "title": "Playground Functions",
                        "tagline": "Resolução de problemas de lógica de programação e algoritmos essenciais",
                        "category": "Web Fundamentals",
                        "description": "Conjunto de desafios algorítmicos em JavaScript moderno explorando estruturas de repetição, condicionais, objetos e arrays.",
                        "tags": [
                              "JavaScript (ES6)",
                              "Lógica de Programação",
                              "Algoritmos"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/PlaygroundFunctions"
                  },
                  {
                        "id": "trybe-semantic-html",
                        "title": "Semantic HTML & Web Standards",
                        "tagline": "Padrões de semântica web, acessibilidade e SEO estrutural",
                        "category": "Web Fundamentals",
                        "description": "Estruturação de documentos segundo as melhores práticas do W3C, acessibilidade semântica (a11y) e estilização com CSS moderno.",
                        "tags": [
                              "HTML5",
                              "CSS3",
                              "Acessibilidade (a11y)",
                              "SEO"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/SemanticHTML"
                  },
                  {
                        "id": "trybe-lessons-learned",
                        "title": "Lessons Learned",
                        "tagline": "Primeiro projeto de fundamentos de layout semântico e estilização",
                        "category": "Web Fundamentals",
                        "description": "Construção da primeira página web da formação consolidando elementos estruturais e seletores de estilo.",
                        "tags": [
                              "HTML5",
                              "CSS3",
                              "Flexbox"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/LessonsLearned"
                  },
                  {
                        "id": "trybe-desafio-qca",
                        "title": "Desafio QCA",
                        "tagline": "Projeto de desafio técnico desenvolvido em TypeScript",
                        "category": "Web Fundamentals",
                        "description": "Resolução de desafio prático de código aplicando TypeScript e padrões de engenharia.",
                        "tags": [
                              "TypeScript",
                              "Node.js",
                              "Clean Code"
                        ],
                        "githubUrl": "https://github.com/eduardoklein/desafioQCA"
                  }
            ]
      },
      {
            "id": "effetive",
            "companyName": "Effetive Sistemas",
            "role": "Software Developer (Intern)",
            "period": "Aug 2016 — Nov 2016",
            "location": "Recife, PE, Brazil",
            "summary": "Development and maintenance of corporate enterprise systems utilized across Michelin operations throughout Latin America.",
            "responsibilities": [
                  "Developed and maintained corporate system features utilized by Michelin Latin America.",
                  "Translated and localized technical documentation and modules from English to Portuguese.",
                  "Worked in agile cycles using Git and task management tools."
            ],
            "stackHighlights": [
                  "JavaScript",
                  "HTML/CSS",
                  "Git",
                  "Enterprise Systems",
                  "Agile"
            ],
            "projects": []
      },
      {
            "id": "suape",
            "companyName": "SUAPE Port Industrial Complex",
            "role": "IT Intern",
            "period": "Oct 2014 — Jul 2016",
            "location": "Cabo de Santo Agostinho, PE, Brazil",
            "summary": "Provided comprehensive IT operations and infrastructure support across one of Brazil's premier industrial and port complexes, maintaining high service uptime for administrative departments.",
            "responsibilities": [
                  "Provided on-site and remote technical support to 100+ administrative users, resolving an average of 6 daily tickets (~120/month) covering software, corporate networking, and peripherals over 1 year and 10 months.",
                  "Performed preventive and corrective maintenance on corporate applications including the TOTVS ERP, sustaining smooth administrative business workflows.",
                  "Executed hardware and workstation maintenance: system imaging, component replacement, diagnostics, and essential software/driver deployments."
            ],
            "stackHighlights": [
                  "TOTVS ERP",
                  "Corporate Networking",
                  "Hardware Maintenance",
                  "IT Support"
            ],
            "projects": []
      }
],
    personalProjectsTitle: "Independent Projects & Automation",
    personalProjectsDescription:
      "Applications developed for in-depth practice of system architectures, automation, and real-time tooling.",
    personalProjects: [
      {
            "id": "proj-agent-panel",
            "title": "Agent Control Panel",
            "tagline": "macOS Menu Bar utility tracking active AI agent sessions in real time",
            "description": "Native Swift menu bar app tracking live system processes, background instances, and active sessions of Claude Code, Codex, and Antigravity.",
            "tags": [
                  "Swift",
                  "macOS",
                  "Process Management",
                  "Native UI",
                  "AI Tooling"
            ],
            "githubUrl": "https://github.com/eduardoklein/agent-control-panel"
      },
      {
            "id": "proj-resume-builder",
            "title": "Resume Builder & ATS Tailor",
            "tagline": "Automated resume generator and profile tailor with ATS compliance",
            "description": "Full-stack Node.js application built to modularize career profile data into structured JSON, tailor experiences against job requirements, and generate ATS-friendly formatted documents.",
            "tags": [
                  "Node.js",
                  "JavaScript",
                  "Express",
                  "ATS Optimization",
                  "Automation"
            ],
            "githubUrl": "https://github.com/eduardoklein/resume-builder"
      },
      {
            "id": "proj-redalert",
            "title": "RedAlert — Telemetry & Event Alarms",
            "tagline": "Asynchronous real-time telemetry monitoring engine with multi-channel alerts",
            "description": "Python service engineered for continuous real-time data feed monitoring, detecting operational divergences outside defined tolerance boundaries and triggering instant notifications.",
            "tags": [
                  "Python",
                  "AsyncIO",
                  "WebSockets",
                  "Telemetry",
                  "Alerting Engine"
            ],
            "githubUrl": "https://github.com/eduardoklein/redalert"
      },
      {
            "id": "proj-botranker",
            "title": "BotRanker — Quantitative Analytics",
            "tagline": "Statistical benchmarking framework and execution performance ranking engine",
            "description": "Python analytics pipeline consolidating operational execution metrics, providing comparative statistical analysis across multiple automated systems and ranking response efficiencies.",
            "tags": [
                  "Python",
                  "Data Analysis",
                  "Benchmarking",
                  "Statistical Modeling"
            ],
            "githubUrl": "https://github.com/eduardoklein/botranker"
      },
      {
            "id": "proj-delist-radar",
            "title": "Delist Radar",
            "tagline": "Asset inventory and liquidity route mapper for suspended crypto tokens",
            "description": "PHP system cataloging suspended tokens across centralized exchanges, resolving on-chain contract addresses and estimating recoverable liquidity routes.",
            "tags": [
                  "PHP",
                  "Financial APIs",
                  "Web Scraping",
                  "Data Modeling"
            ],
            "githubUrl": "https://github.com/eduardoklein/delist-radar"
      },
      {
            "id": "proj-safemode",
            "title": "SafeMode Arbitrage Engine",
            "tagline": "Automated execution engine with continuous risk mitigation tripwires",
            "description": "Automated real-time routine execution with continuous order book validation, persistent WebSockets, and strict security and risk limitation tripwires.",
            "tags": [
                  "JavaScript",
                  "Node.js",
                  "WebSockets",
                  "Automated Execution",
                  "Risk Controls"
            ],
            "githubUrl": "https://github.com/eduardoklein/safemode"
      }
]
  }
};
