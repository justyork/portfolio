export const site = {
  url: 'https://justyork.dev',
  devUrl: 'https://dev.justyork.dev',
  name: 'Iurii Shpynev',
  alternateName: 'Iurii (Yuriy) Shpynev',
  headline: 'Technical Architect & AI System Builder',
  location: 'Limassol, Cyprus',
  experienceStart: '2011-06-01',
  contacts: {
    linkedin: 'https://www.linkedin.com/in/shpynev',
    telegram: 'https://t.me/JustYork',
    github: 'https://github.com/justyork',
    email: 'yorkshp@gmail.com'
  }
};

export const languages = {
  en: {
    code: 'en',
    label: 'English',
    path: '/en/',
    altPath: '/ru/',
    altLabel: 'RU',
    htmlLang: 'en',
    title: 'Iurii Shpynev — Technical Architect & AI System Builder',
    description: 'Technical Architect and AI System Builder with dynamicExperience years in software engineering, high-load platforms, data pipelines, reliability and technical leadership.',
    nav: ['Profile', 'Expertise', 'Case Studies', 'Experience', 'CV', 'Contact'],
    heroKicker: 'Technical Architect & AI System Builder',
    heroTitle: 'I design reliable systems, data platforms and AI-assisted products.',
    heroText: 'With dynamicExperience years in software engineering, I combine architecture, hands-on backend/full-stack development and technical leadership to build scalable, maintainable and future-proof solutions.',
    ctaPrimary: 'Contact me',
    ctaSecondary: 'Download CV',
    proofTitle: 'Core proof points',
    aboutTitle: 'Profile',
    about: [
      'I am an experienced Technical Lead and Technical Architect with a background in building and scaling high-load platforms, designing robust system architectures and leading cross-functional teams through complex projects.',
      'My engineering focus is backend and full-stack development with PHP, Node.js, Go, Python and C#, plus databases, distributed systems and data pipelines. I have delivered large-scale data migrations, ML-driven content search and recommendation services, and automation frameworks that improve release confidence and system reliability.',
      'Beyond coding, I focus on architecture governance, reliability, compliance and incident management. I define SLO/SLI practices, act as Incident Commander during critical outages, mentor engineers and standardize engineering practices.'
    ],
    expertiseTitle: 'Expertise',
    casesTitle: 'Selected case studies',
    casesIntro: 'Public-safe summaries of systems and automation work. Detailed internal implementation specifics are intentionally omitted.',
    experienceTitle: 'Experience',
    cvTitle: 'CV, education & languages',
    writingTitle: 'Architecture notes',
    writingText: 'Short, structured notes on how I think about systems, autonomy and engineering delivery.',
    contactTitle: 'Contact',
    contactText: 'Open to relevant discussions about technical leadership, architecture, AI systems and product engineering.',
    labels: {
      role: 'Role', context: 'Context', technologies: 'Technologies', problem: 'Problem', built: 'What I built', result: 'Result', publicSafe: 'Public-safe', dates: 'Dates', location: 'Location'
    }
  },
  ru: {
    code: 'ru',
    label: 'Русский',
    path: '/ru/',
    altPath: '/en/',
    altLabel: 'EN',
    htmlLang: 'ru',
    title: 'Iurii Shpynev — Technical Architect & AI System Builder',
    description: 'Technical Architect и AI System Builder с dynamicExperience годами в software engineering: high-load платформы, data pipelines, reliability и technical leadership.',
    nav: ['Профиль', 'Экспертиза', 'Кейсы', 'Опыт', 'CV', 'Контакты'],
    heroKicker: 'Technical Architect & AI System Builder',
    heroTitle: 'Проектирую надёжные системы, data-платформы и AI-assisted продукты.',
    heroText: 'За dynamicExperience лет в software engineering я объединяю архитектуру, hands-on backend/full-stack разработку и техническое лидерство, чтобы создавать масштабируемые, поддерживаемые и долгоживущие решения.',
    ctaPrimary: 'Связаться',
    ctaSecondary: 'Скачать CV',
    proofTitle: 'Ключевые факты',
    aboutTitle: 'Профиль',
    about: [
      'Я Technical Lead и Technical Architect с опытом построения и масштабирования high-load платформ, проектирования устойчивых системных архитектур и лидерства кросс-функциональных команд в сложных проектах.',
      'Мой инженерный фокус — backend и full-stack разработка на PHP, Node.js, Go, Python и C#, базы данных, распределённые системы и data pipelines. В опыте есть крупные миграции данных, ML-driven content search и recommendation services, а также automation frameworks, повышающие уверенность релизов и надёжность систем.',
      'Помимо разработки, я фокусируюсь на architecture governance, reliability, compliance и incident management: внедряю SLO/SLI, выступаю Incident Commander в критических инцидентах, менторю инженеров и стандартизирую инженерные процессы.'
    ],
    expertiseTitle: 'Экспертиза',
    casesTitle: 'Выбранные кейсы',
    casesIntro: 'Публично-безопасные описания системной, data и automation работы. Внутренние детали реализации намеренно не раскрываются.',
    experienceTitle: 'Опыт',
    cvTitle: 'CV, образование и языки',
    writingTitle: 'Заметки по архитектуре',
    writingText: 'Короткие структурированные заметки о том, как я подхожу к системам, автономии и engineering delivery.',
    contactTitle: 'Контакты',
    contactText: 'Открыт к релевантным обсуждениям про technical leadership, architecture, AI systems и product engineering.',
    labels: {
      role: 'Роль', context: 'Контекст', technologies: 'Технологии', problem: 'Проблема', built: 'Что сделал', result: 'Результат', publicSafe: 'Публичность', dates: 'Даты', location: 'Локация'
    }
  }
};

export const proofPoints = {
  en: [
    'dynamicExperience years in software engineering',
    '~28B records / ~2TB data migration',
    'High-load platforms and multitenant architecture',
    'ML-driven content search and recommendations',
    'SLO/SLI, incident command and reliability culture',
    '2 released games on Google Play'
  ],
  ru: [
    'dynamicExperience лет в software engineering',
    'Миграция ~28B записей / ~2TB данных',
    'High-load платформы и multitenant architecture',
    'ML-driven content search и recommendations',
    'SLO/SLI, incident command и культура reliability',
    '2 выпущенные игры в Google Play'
  ]
};

export const expertise = {
  en: [
    { title: 'Architecture & reliability', items: ['Solution Architecture', 'Multitenant architecture', 'Distributed systems', 'High-load platforms', 'Architecture governance', 'SLO/SLI', 'Incident management', 'Postmortems'] },
    { title: 'Backend & platforms', items: ['PHP', 'Node.js', 'Go', 'Python', 'C#', 'JavaScript', 'API design', 'Swagger / OpenAPI', 'Automatic CRUD generation'] },
    { title: 'Data, search & AI-adjacent systems', items: ['PostgreSQL', 'BigQuery', 'Apache Airflow', 'OpenSearch', 'Data pipelines', 'Image similarity search', 'Recommendation services', 'Search relevance evaluation'] },
    { title: 'Leadership & delivery', items: ['Development coordination', 'Release planning', 'Requirements analysis', 'Stakeholder communication', 'Mentoring', 'Onboarding', 'Engineering standards'] },
    { title: 'Compliance & automation', items: ['Legal compliance', 'Consent management', 'Privacy-aware design', 'Workflow automation', 'Creative production automation'] },
    { title: 'Game development & product', items: ['Mobile game development', 'Google Play releases', 'Product iteration', 'Game UX', 'Casual games'] }
  ],
  ru: [
    { title: 'Архитектура и reliability', items: ['Solution Architecture', 'Multitenant architecture', 'Distributed systems', 'High-load platforms', 'Architecture governance', 'SLO/SLI', 'Incident management', 'Postmortems'] },
    { title: 'Backend и платформы', items: ['PHP', 'Node.js', 'Go', 'Python', 'C#', 'JavaScript', 'API design', 'Swagger / OpenAPI', 'Automatic CRUD generation'] },
    { title: 'Data, search и AI-adjacent systems', items: ['PostgreSQL', 'BigQuery', 'Apache Airflow', 'OpenSearch', 'Data pipelines', 'Image similarity search', 'Recommendation services', 'Search relevance evaluation'] },
    { title: 'Leadership и delivery', items: ['Development coordination', 'Release planning', 'Requirements analysis', 'Stakeholder communication', 'Mentoring', 'Onboarding', 'Engineering standards'] },
    { title: 'Compliance и automation', items: ['Legal compliance', 'Consent management', 'Privacy-aware design', 'Workflow automation', 'Creative production automation'] },
    { title: 'Game development и product', items: ['Mobile game development', 'Google Play releases', 'Product iteration', 'Game UX', 'Casual games'] }
  ]
};

export const architectureNotes = {
  en: [
    { title: 'Architecture as an operating model', text: 'Good architecture is not only diagrams. It is a set of boundaries, ownership rules, quality gates and feedback loops that let teams ship changes safely.' },
    { title: 'AI-assisted delivery', text: 'AI agents are most useful when they work inside explicit context: source-of-truth documentation, task states, decision logs, review gates and reproducible commands.' },
    { title: 'Reliability by design', text: 'I prefer systems where observability, SLO/SLI thinking, incident response and postmortems are part of the design rather than emergency additions after launch.' }
  ],
  ru: [
    { title: 'Архитектура как operating model', text: 'Хорошая архитектура — это не только схемы. Это границы, ownership, quality gates и feedback loops, которые позволяют командам безопасно выпускать изменения.' },
    { title: 'AI-assisted delivery', text: 'AI-агенты наиболее полезны, когда работают внутри явного контекста: source-of-truth документации, статусов задач, decision logs, review gates и воспроизводимых команд.' },
    { title: 'Reliability by design', text: 'Я предпочитаю системы, где observability, SLO/SLI, incident response и postmortems заложены в дизайн, а не добавляются экстренно после запуска.' }
  ]
};

export const caseStudies = {
  en: [
    { name: 'Multitenant platform architecture', role: 'Technical Lead / Architect', context: 'X-FLOW', technologies: ['Architecture', 'Distributed systems', 'Backend platform design'], problem: 'Support scalable onboarding and separation between tenants/environments without operational chaos.', built: 'Designed and implemented multitenant architecture patterns for a large-scale platform.', result: 'Enabled scalable onboarding and isolated deployments.' },
    { name: 'Consent management service', role: 'Technical Lead / Architect', context: 'X-FLOW', technologies: ['Service architecture', 'Compliance', 'Privacy-aware design'], problem: 'Build reliable consent handling that supports compliance and seamless integration across product systems.', built: 'Led the design of consent management service architecture.', result: 'Improved compliance readiness, scalability and integration consistency.' },
    { name: '28B-record data migration', role: 'Technical Lead / Data architecture', context: 'X-FLOW', technologies: ['BigQuery', 'PostgreSQL', 'Partitioning', 'Indexing', 'Apache Airflow'], problem: 'Move and restructure very large datasets into a scalable query model.', built: 'Built migration and restructuring pipelines with partitioning and indexing, orchestrated via Airflow.', result: 'Reliable replication and scalable queries for ~28B records / ~2TB.' },
    { name: 'Airflow orchestration platform', role: 'Technical Lead / Platform engineer', context: 'X-FLOW', technologies: ['Apache Airflow', 'DAGs', 'Retry policies', 'SLA', 'Monitoring'], problem: 'Standardize and improve reliability of production data workflows.', built: 'Deployed Airflow as a company-wide orchestration tool and built production DAGs.', result: 'Cross-system pipelines with retry, SLA and monitoring.' },
    { name: 'ML-driven content search and recommendations', role: 'Technical Lead / Backend + AI systems', context: 'X-FLOW', technologies: ['Go', 'Python', 'OpenSearch', 'Image similarity search', 'Automated image descriptions'], problem: 'Improve content discovery, search relevance and recommendation quality.', built: 'Built a content tagging system, image recommendation/search services and OpenSearch relevance evaluation framework.', result: 'Foundation for ML-driven features and significantly better search quality.' },
    { name: 'OpenAPI CRUD framework', role: 'Technical Lead / Developer experience', context: 'X-FLOW', technologies: ['JavaScript', 'Swagger', 'OpenAPI', 'Code generation'], problem: 'Standardize API design and reduce repetitive implementation work.', built: 'Formalized code style conventions and built automatic CRUD generation around OpenAPI.', result: 'More consistent API design and improved developer experience.' },
    { name: 'Multi-agent architecture for autonomous development', role: 'System architect / AI workflow designer', context: 'OpenClaw-based agent workflow', technologies: ['AI agents', 'Agent orchestration', 'Obsidian knowledge base', 'Git-based handoff', 'Runtime events'], problem: 'Coordinate autonomous agents so they can work on real projects without losing context, duplicating decisions or bypassing review/deployment boundaries.', built: 'Designed a multi-agent operating model where Obsidian acts as the source of truth, project state is captured in tasks and decision logs, agents can continue runtime events, and code/deployment changes are validated through reproducible commands and Git history.', result: 'A repeatable autonomous development workflow with persistent context, clearer handoffs and safer staging-to-production boundaries.' },
    { name: 'Released Google Play games', role: 'Game developer / product engineer', context: 'Independent mobile game development', technologies: ['Mobile game development', 'Google Play', 'Casual games', 'Product iteration'], problem: 'Build and release complete casual games, not just prototypes, with enough polish to be published publicly.', built: 'Developed and released two mobile games on Google Play: WoodBricks and Sudoku Secrets.', result: 'Hands-on product experience across game design, implementation, release preparation and post-release iteration.' },
    { name: 'Adobe After Effects asset library', role: 'Automatization Lead / Senior PHP Programmer', context: 'VOLKA GAMES', technologies: ['PHP', 'Web UI', 'Adobe After Effects workflow automation'], problem: 'Improve creative production workflow and asset reuse.', built: 'Built an asset library plugin for Adobe After Effects with a supporting web UI.', result: 'More structured creative asset management.' },
    { name: 'Playable ads automation', role: 'Automatization Lead / Senior PHP Programmer', context: 'VOLKA GAMES', technologies: ['PHP', 'Automation systems', 'Mobile advertising workflows'], problem: 'Reduce manual work and improve consistency in mobile advertising creative production.', built: 'Built systems for generating playable ads for mobile advertising platforms.', result: 'Faster and more repeatable creative production workflows.' }
  ],
  ru: [
    { name: 'Multitenant platform architecture', role: 'Technical Lead / Architect', context: 'X-FLOW', technologies: ['Architecture', 'Distributed systems', 'Backend platform design'], problem: 'Обеспечить масштабируемый onboarding tenant-ов и изоляцию deployments без операционного хаоса.', built: 'Спроектировал и реализовал multitenant architecture patterns для large-scale платформы.', result: 'Появилась возможность масштабируемого onboarding и isolated deployments.' },
    { name: 'Consent management service', role: 'Technical Lead / Architect', context: 'X-FLOW', technologies: ['Service architecture', 'Compliance', 'Privacy-aware design'], problem: 'Построить надёжную обработку consent, совместимую с compliance и интеграциями across systems.', built: 'Вёл дизайн архитектуры consent management service.', result: 'Улучшены compliance readiness, scalability и consistency интеграций.' },
    { name: '28B-record data migration', role: 'Technical Lead / Data architecture', context: 'X-FLOW', technologies: ['BigQuery', 'PostgreSQL', 'Partitioning', 'Indexing', 'Apache Airflow'], problem: 'Перенести и реструктурировать очень большой dataset в модель, пригодную для scalable queries.', built: 'Построил migration/restructuring pipeline с partitioning и indexing, orchestrated via Airflow.', result: 'Надёжная репликация и scalable queries для ~28B records / ~2TB.' },
    { name: 'Airflow orchestration platform', role: 'Technical Lead / Platform engineer', context: 'X-FLOW', technologies: ['Apache Airflow', 'DAGs', 'Retry policies', 'SLA', 'Monitoring'], problem: 'Стандартизировать и повысить reliability production data workflows.', built: 'Развернул Airflow как company-wide orchestration tool и построил production DAGs.', result: 'Cross-system pipelines с retry, SLA и monitoring.' },
    { name: 'ML-driven content search and recommendations', role: 'Technical Lead / Backend + AI systems', context: 'X-FLOW', technologies: ['Go', 'Python', 'OpenSearch', 'Image similarity search', 'Automated image descriptions'], problem: 'Улучшить content discovery, search relevance и recommendation quality.', built: 'Построил content tagging system, image recommendation/search services и OpenSearch relevance evaluation framework.', result: 'Foundation для ML-driven features и заметно лучшее качество поиска.' },
    { name: 'Multi-agent architecture for autonomous development', role: 'System architect / AI workflow designer', context: 'OpenClaw-based agent workflow', technologies: ['AI agents', 'Agent orchestration', 'Obsidian knowledge base', 'Git-based handoff', 'Runtime events'], problem: 'Координировать автономных агентов так, чтобы они могли работать над реальными проектами, не теряя контекст, не дублируя решения и не обходя границы review/deployment.', built: 'Спроектировал multi-agent operating model, где Obsidian выступает source of truth, состояние проекта фиксируется в tasks и decision logs, агенты могут продолжать runtime events, а code/deployment changes проверяются воспроизводимыми командами и Git history.', result: 'Повторяемый autonomous development workflow с persistent context, более понятными handoffs и безопасными границами staging-to-production.' },
    { name: 'Released Google Play games', role: 'Game developer / product engineer', context: 'Independent mobile game development', technologies: ['Mobile game development', 'Google Play', 'Casual games', 'Product iteration'], problem: 'Сделать и выпустить полноценные casual games, а не только прототипы, с уровнем готовности для публичной публикации.', built: 'Разработал и выпустил две мобильные игры в Google Play: WoodBricks и Sudoku Secrets.', result: 'Практический product experience в game design, implementation, release preparation и post-release iteration.' },
    { name: 'OpenAPI CRUD framework', role: 'Technical Lead / Developer experience', context: 'X-FLOW', technologies: ['JavaScript', 'Swagger', 'OpenAPI', 'Code generation'], problem: 'Стандартизировать API design и уменьшить repetitive implementation work.', built: 'Формализовал code style conventions и построил automatic CRUD generation вокруг OpenAPI.', result: 'Более консистентный API design и улучшенный developer experience.' },
    { name: 'Adobe After Effects asset library', role: 'Automatization Lead / Senior PHP Programmer', context: 'VOLKA GAMES', technologies: ['PHP', 'Web UI', 'Adobe After Effects workflow automation'], problem: 'Улучшить creative production workflow и переиспользование assets.', built: 'Создал asset library plugin for Adobe After Effects с web UI.', result: 'Более структурированное управление creative assets.' },
    { name: 'Playable ads automation', role: 'Automatization Lead / Senior PHP Programmer', context: 'VOLKA GAMES', technologies: ['PHP', 'Automation systems', 'Mobile advertising workflows'], problem: 'Снизить ручную работу и повысить consistency в production playable ads.', built: 'Построил системы генерации playable ads для mobile advertising platforms.', result: 'Более быстрый и повторяемый creative production workflow.' }
  ]
};

export const experience = [
  { company: 'X-FLOW', role: 'Technical Lead', dates: 'Jun 2023 — Present', location: 'Cyprus', summary: 'Architecture, release governance, multitenancy, consent management, data pipelines, search/recommendation, SLO/SLI and incident command.' },
  { company: 'FX Back Office', role: 'Senior Web Developer', dates: 'Sep 2022 — Jun 2023', location: 'Limassol, Cyprus', summary: 'Team/project leadership, Forex CRM support, feature development and payment integrations.' },
  { company: 'VOLKA GAMES', role: 'Automatization Lead / Senior PHP Programmer', dates: 'Jul 2021 — Sep 2022', location: 'Limassol, Cyprus', summary: 'Workflow automation, creatives database, Adobe After Effects asset library plugin and playable ads generation.' },
  { company: 'Ortnec Services Ltd', role: 'Senior Full Stack Engineer', dates: 'May 2020 — Jul 2021', location: 'Limassol, Cyprus', summary: 'High-load system development, MVP creation/testing, monitoring and performance.' },
  { company: 'WebYard Studio', role: 'Lead Full Stack Developer', dates: 'Sep 2013 — May 2020', location: 'Irkutsk, Russia', summary: 'Led two web development teams; maintained 10+ loaded projects and dozens of websites.' },
  { company: 'IRKIPEDIA', role: 'Web Developer', dates: 'Aug 2012 — Sep 2013', location: 'Irkutsk, Russia', summary: 'WordPress websites and photo stock development on Kohana.' },
  { company: 'DOT.RU Web Studio', role: 'Web Developer', dates: 'Dec 2011 — Aug 2012', location: 'Irkutsk, Russia', summary: 'Company CMS websites and website statistics parser on Kohana.' },
  { company: 'IDEAL Web Studio', role: 'Junior Web Developer', dates: 'Sep 2011 — Dec 2011', location: 'Irkutsk, Russia', summary: 'HTML coding and studio CMS websites.' }
];

export const education = [
  'Moscow Open Institute — Bachelor of Engineering, Computer Science and Computer Engineering (2016–2020)',
  'SkillFactory — Specialist, Data Science (2019–2020)',
  'Irkutsk State Pedagogical College #1 — Specialist, Pedagogy of additional education (2006–2010)'
];

export const spokenLanguages = [
  'Russian — Native or bilingual',
  'English — Professional working',
  'Greek — Elementary'
];

export const certifications = [
  'Certificates of completion of two levels of the portfolio investor course',
  'Certificate in Business and Marketing'
];
