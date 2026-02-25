export const languages = [
  { code: "pt", label: "PT-BR", name: "Português" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "zh", label: "中文", name: "中文" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const isLanguageCode = (value: string | null | undefined): value is LanguageCode => {
  if (!value) return false;
  return languages.some((lang) => lang.code === value);
};

export const translations = {
  pt: {
    language: {
      label: "Idioma",
    },
    nav: {
      about: "Sobre",
      skills: "Skills",
      resume: "Currículo",
      projects: "Projetos",
      contact: "Contato",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      subtitle: "Desenvolvedor Full Stack & Criador Digital",
      cta: "Ver Meu Trabalho",
    },
    about: {
      sectionTitle: "Sobre Mim",
      heading: "Um Vislumbre do Meu Mundo",
      blurb: "Um desenvolvedor criativo transformando ideias em realidades digitais impressionantes.",
      paragraph:
        "Sou um Desenvolvedor Full Stack e Criador Digital apaixonado por criar experiências digitais bonitas, funcionais e centradas no usuário. Eu prospero em dar vida a ideias, do conceito à implantação. Meu trabalho é uma mistura de código limpo, design moderno e uma busca incessante pela perfeição.",
      timeline: [
        {
          date: "Janeiro de 2026 - Presente",
          title: "Cursos EAD de alto valor",
          description:
            "Formações EAD de alto valor, com certificações em andamento e aplicação prática contínua.",
        },
        {
          date: "Fevereiro de 2026 - Presente",
          title: "Graduação (em andamento)",
          description:
            "Início da graduação, com foco em aprofundar base teórica e prática em tecnologia.",
        },
        {
          date: "2021 - Presente",
          title: "Desenvolvedor Full Stack",
          description:
            "Construindo e escalando aplicações web modernas em uma startup de tecnologia em rápido crescimento.",
        },
        {
          date: "2022 - 2023",
          title: "Entra21 React Native",
          description: "Participação no programa Entra21 na linguagem de React Native.",
        },
        {
          date: "Março - Setembro",
          title: "Entra21 EAD Java",
          description:
            "Novamente tendo a participação no programa Entra21 na linguagem de Java no modelo EAD.",
        },
      ],
    },
    skills: {
      sectionTitle: "Minha Expertise",
      sectionSubtitle: "Um conjunto de habilidades versátil para dar vida a qualquer visão digital.",
      items: [
        {
          title: "Desenvolvimento Full Stack",
          description:
            "Criação de soluções completas, do front-end ao back-end, com foco em performance e escalabilidade.",
        },
        {
          title: "Desenvolvimento de Aplicativos",
          description:
            "Construção de aplicativos móveis nativos e híbridos para iOS e Android com interfaces modernas.",
        },
        {
          title: "Integração com Banco de Dados",
          description:
            "Modelagem e integração de bancos de dados SQL e NoSQL, garantindo a eficiência e segurança dos dados.",
        },
        {
          title: "Criação de Redes Neurais para IAs",
          description:
            "Desenvolvimento e treinamento de modelos de machine learning e redes neurais para aplicações inteligentes.",
        },
        {
          title: "UI/UX",
          description:
            "Projetando interfaces intuitivas e experiências de usuário envolventes que resolvem problemas reais.",
        },
        {
          title: "Desenvolvimento de Sistemas",
          description:
            "Arquitetura e desenvolvimento de sistemas complexos e distribuídos para diversas finalidades.",
        },
      ],
    },
    portfolio: {
      sectionTitle: "Trabalhos Selecionados",
      sectionSubtitle: "Um vislumbre da minha paixão pela criação e resolução de problemas.",
      code: "Código",
      demo: "Demo",
    },
    resume: {
      sectionTitle: "Meu Currículo",
      sectionSubtitle: "Baixe ou visualize o PDF atualizado com minha experiência.",
      heading: "Disponível para download",
      description: "O arquivo do currículo está em PDF e pode ser baixado ou aberto em uma nova guia.",
      download: "Baixar PDF",
      view: "Ver Online",
    },
    contact: {
      sectionTitle: "Vamos nos Conectar",
      sectionSubtitle: "Tem um projeto em mente ou só quer dizer olá? Me mande uma mensagem.",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Seu Nome",
        emailLabel: "Email",
        emailPlaceholder: "seu.email@example.com",
        messageLabel: "Mensagem",
        messagePlaceholder: "Me fale sobre seu projeto ou ideia...",
        submit: "Enviar Mensagem",
      },
      validation: {
        nameMin: "O nome deve ter pelo menos 2 caracteres.",
        email: "Por favor, insira um email válido.",
        messageMin: "A mensagem deve ter pelo menos 10 caracteres.",
      },
      toast: {
        title: "Mensagem Enviada!",
        description: "Obrigado por entrar em contato. Retornarei em breve.",
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    project: {
      notFound: "Projeto não encontrado.",
      close: "Fechar",
      viewSource: "Ver Código Fonte",
      visit: "Visitar Projeto",
    },
    projects: {
      "project-1": {
        title: "appQuanta",
        description:
          "Criação automatizada de aplicativos a partir de ideias, sem código e sem complicações.",
        longDescription:
          "O appQuanta é uma plataforma revolucionária que permite a criação de aplicativos de forma automatizada diretamente de uma ideia. Utilizando tecnologias de ponta, o sistema interpreta os requisitos do usuário e gera a estrutura do aplicativo, incluindo a interface e a lógica de negócios, de maneira rápida e sem a necessidade de escrever código. O projeto foi desenvolvido em Dart com Flutter, garantindo uma experiência nativa e performática tanto no iOS quanto no Android.",
      },
      "project-2": {
        title: "Site_CH",
        description:
          "Site educativo sobre temas históricos e militares com conteúdo interativo.",
        longDescription:
          "O Site_CH é um portal educativo focado em temas históricos e militares, como a corrida armamentista e armas nucleares. Construído com as tecnologias mais modernas do ecossistema React, como Next.js e TypeScript, o site oferece uma experiência de aprendizado interativa e rica em conteúdo. A utilização do TailwindCSS garante uma interface responsiva e visualmente agradável, adaptada para todos os dispositivos.",
      },
      "project-3": {
        title: "appQuanta-server",
        description: "Servidor inteligente do Quanta: geração automática, APIs e gerenciamento de builds.",
        longDescription:
          "Servidor inteligente para a plataforma appQuanta. Responsável pela geração automática de código, gerenciamento de APIs e controle de builds dos aplicativos gerados. Construído em Python para garantir robustez e escalabilidade.",
      },
      "project-4": {
        title: "Portfolio",
        description: "Portfólio de Lucca — desenvolvedor criativo e apaixonado por tecnologia.",
        longDescription:
          "Uma versão anterior do meu portfólio, desenvolvida com HTML, CSS e JavaScript puros para demonstrar minhas habilidades fundamentais de desenvolvimento web. Um projeto que mostra minhas raízes como desenvolvedor.",
      },
      "project-5": {
        title: "clinica-web",
        description: "Sistema web para gerenciamento de clínicas. Feito com JavaScript.",
        longDescription:
          "Um sistema completo para gerenciamento de clínicas, permitindo o agendamento de consultas, cadastro de pacientes e prontuários eletrônicos. Desenvolvido com JavaScript, HTML e CSS.",
      },
      "project-6": {
        title: "Sites",
        description:
          "Esqueleto inicial para prototipagem de sistemas web com 30 telas básicas em HTML e CSS.",
        longDescription:
          "Projeto de sistema web com 30 telas básicas em HTML e CSS simples, servindo como um esqueleto inicial robusto para a prototipagem rápida de novas aplicações e websites.",
      },
      "project-7": {
        title: "Minha_IA",
        description: "Estudos e implementações de conceitos de Inteligência Artificial em Python.",
        longDescription:
          "Repositório dedicado aos meus estudos e implementações de algoritmos e conceitos de Inteligência Artificial utilizando Python. Inclui redes neurais, processamento de linguagem natural e mais.",
      },
      "project-8": {
        title: "Estudaai",
        description: "App para organização de rotina de estudos com funcionalidades inteligentes.",
        longDescription:
          "📚 Estuda.AI é um app em desenvolvimento focado em organizar a rotina de estudos de forma simples, intuitiva e eficiente. Com funcionalidades inteligentes e um visual moderno, ele ajuda estudantes a otimizar seu tempo e aprendizado.",
      },
      "project-9": {
        title: "Ativo-TCC",
        description:
          "Aplicativo de finanças pessoais para controle de receitas, gastos e saldo.",
        longDescription:
          "💸💸 Ativo: controle suas finanças pessoais com facilidade. Acompanhe receitas, gastos e saldo com clareza e mantenha seu orçamento sempre em dia.",
      },
    },
  },
  en: {
    language: {
      label: "Language",
    },
    nav: {
      about: "About",
      skills: "Skills",
      resume: "Resume",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      subtitle: "Full Stack Developer & Digital Creator",
      cta: "See My Work",
    },
    about: {
      sectionTitle: "About Me",
      heading: "A Glimpse Into My World",
      blurb: "A creative developer turning ideas into impressive digital realities.",
      paragraph:
        "I am a Full Stack Developer and Digital Creator passionate about building beautiful, functional, user-centered digital experiences. I thrive on bringing ideas to life, from concept to deployment. My work blends clean code, modern design, and a relentless pursuit of perfection.",
      timeline: [
        {
          date: "2021 - Present",
          title: "Full Stack Developer",
          description:
            "Building and scaling modern web applications at a fast-growing tech startup.",
        },
        {
          date: "2022 - 2023",
          title: "Entra21 React Native",
          description: "Participation in the Entra21 program focused on React Native.",
        },
        {
          date: "March - September",
          title: "Entra21 EAD Java",
          description:
            "Participated again in the Entra21 program, focusing on Java in a remote format.",
        },
      ],
    },
    skills: {
      sectionTitle: "My Expertise",
      sectionSubtitle: "A versatile skill set to bring any digital vision to life.",
      items: [
        {
          title: "Full Stack Development",
          description:
            "Creating complete solutions from front-end to back-end with a focus on performance and scalability.",
        },
        {
          title: "App Development",
          description:
            "Building native and hybrid mobile apps for iOS and Android with modern interfaces.",
        },
        {
          title: "Database Integration",
          description:
            "Designing and integrating SQL and NoSQL databases, ensuring efficiency and data security.",
        },
        {
          title: "Neural Networks for AI",
          description:
            "Developing and training machine learning models and neural networks for intelligent applications.",
        },
        {
          title: "UI/UX",
          description:
            "Designing intuitive interfaces and engaging user experiences that solve real problems.",
        },
        {
          title: "Systems Development",
          description:
            "Architecting and building complex, distributed systems for diverse goals.",
        },
      ],
    },
    portfolio: {
      sectionTitle: "Selected Work",
      sectionSubtitle: "A glimpse of my passion for building and solving problems.",
      code: "Code",
      demo: "Demo",
    },
    resume: {
      sectionTitle: "My Resume",
      sectionSubtitle: "Download or view the updated PDF with my experience.",
      heading: "Ready to download",
      description: "The resume is a PDF file you can download or open in a new tab.",
      download: "Download PDF",
      view: "View Online",
    },
    contact: {
      sectionTitle: "Let’s Connect",
      sectionSubtitle: "Have a project in mind or just want to say hello? Send me a message.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your Name",
        emailLabel: "Email",
        emailPlaceholder: "your.email@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or idea...",
        submit: "Send Message",
      },
      validation: {
        nameMin: "Name must be at least 2 characters.",
        email: "Please enter a valid email address.",
        messageMin: "Message must be at least 10 characters.",
      },
      toast: {
        title: "Message Sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
    project: {
      notFound: "Project not found.",
      close: "Close",
      viewSource: "View Source Code",
      visit: "Visit Project",
    },
    projects: {
      "project-1": {
        title: "appQuanta",
        description:
          "Automated app creation from ideas, with no code and no hassle.",
        longDescription:
          "appQuanta is a revolutionary platform that enables automated app creation directly from an idea. Using cutting-edge technology, the system interprets user requirements and generates the app structure, including interface and business logic, quickly and without the need to write code. The project was built in Dart with Flutter, ensuring a native and high-performance experience on both iOS and Android.",
      },
      "project-2": {
        title: "Site_CH",
        description:
          "Educational site on historical and military topics with interactive content.",
        longDescription:
          "Site_CH is an educational portal focused on historical and military topics such as the arms race and nuclear weapons. Built with modern React ecosystem technologies like Next.js and TypeScript, the site delivers an interactive learning experience rich in content. TailwindCSS ensures a responsive, visually pleasing interface for all devices.",
      },
      "project-3": {
        title: "appQuanta-server",
        description:
          "Quanta’s smart server: auto-generation, APIs, and build management.",
        longDescription:
          "Smart server for the appQuanta platform. Responsible for automated code generation, API management, and build control for generated apps. Built in Python to ensure robustness and scalability.",
      },
      "project-4": {
        title: "Portfolio",
        description: "Lucca’s portfolio — a creative developer passionate about technology.",
        longDescription:
          "A previous version of my portfolio built with pure HTML, CSS, and JavaScript to demonstrate my core web development skills. A project that shows my roots as a developer.",
      },
      "project-5": {
        title: "clinica-web",
        description: "Web system for clinic management. Built with JavaScript.",
        longDescription:
          "A complete clinic management system enabling appointment scheduling, patient registration, and electronic health records. Developed with JavaScript, HTML, and CSS.",
      },
      "project-6": {
        title: "Sites",
        description:
          "Starter skeleton for web system prototyping with 30 basic HTML/CSS screens.",
        longDescription:
          "A web system project with 30 basic HTML and CSS screens, serving as a robust starter skeleton for rapid prototyping of new applications and websites.",
      },
      "project-7": {
        title: "Minha_IA",
        description: "Studies and implementations of AI concepts in Python.",
        longDescription:
          "Repository dedicated to my studies and implementations of AI algorithms and concepts using Python. Includes neural networks, NLP, and more.",
      },
      "project-8": {
        title: "Estudaai",
        description: "Study routine organizer app with smart features.",
        longDescription:
          "Estuda.AI is a work-in-progress app focused on organizing study routines in a simple, intuitive, and efficient way. With smart features and a modern look, it helps students optimize their time and learning.",
      },
      "project-9": {
        title: "Ativo-TCC",
        description: "Personal finance app for tracking income, expenses, and balance.",
        longDescription:
          "Ativo helps you manage personal finances with ease. Track income, expenses, and balance with clarity and keep your budget on track.",
      },
    },
  },
  es: {
    language: {
      label: "Idioma",
    },
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      resume: "Currículum",
      projects: "Proyectos",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      subtitle: "Desarrollador Full Stack y Creador Digital",
      cta: "Ver Mi Trabajo",
    },
    about: {
      sectionTitle: "Sobre Mí",
      heading: "Un Vistazo a Mi Mundo",
      blurb: "Un desarrollador creativo convirtiendo ideas en realidades digitales impresionantes.",
      paragraph:
        "Soy un Desarrollador Full Stack y Creador Digital apasionado por crear experiencias digitales bellas, funcionales y centradas en el usuario. Me encanta dar vida a ideas, del concepto al despliegue. Mi trabajo combina código limpio, diseño moderno y una búsqueda constante de la perfección.",
      timeline: [
        {
          date: "2021 - Presente",
          title: "Desarrollador Full Stack",
          description:
            "Construyendo y escalando aplicaciones web modernas en una startup tecnológica de rápido crecimiento.",
        },
        {
          date: "2022 - 2023",
          title: "Entra21 React Native",
          description: "Participación en el programa Entra21 enfocado en React Native.",
        },
        {
          date: "Marzo - Septiembre",
          title: "Entra21 EAD Java",
          description:
            "Participación nuevamente en el programa Entra21, enfocado en Java en modalidad remota.",
        },
      ],
    },
    skills: {
      sectionTitle: "Mi Experiencia",
      sectionSubtitle: "Un conjunto de habilidades versátil para dar vida a cualquier visión digital.",
      items: [
        {
          title: "Desarrollo Full Stack",
          description:
            "Creación de soluciones completas, del front-end al back-end, con foco en rendimiento y escalabilidad.",
        },
        {
          title: "Desarrollo de Apps",
          description:
            "Construcción de aplicaciones móviles nativas e híbridas para iOS y Android con interfaces modernas.",
        },
        {
          title: "Integración de Bases de Datos",
          description:
            "Modelado e integración de bases de datos SQL y NoSQL, garantizando eficiencia y seguridad.",
        },
        {
          title: "Redes Neuronales para IA",
          description:
            "Desarrollo y entrenamiento de modelos de machine learning y redes neuronales para aplicaciones inteligentes.",
        },
        {
          title: "UI/UX",
          description:
            "Diseño de interfaces intuitivas y experiencias de usuario envolventes que resuelven problemas reales.",
        },
        {
          title: "Desarrollo de Sistemas",
          description:
            "Arquitectura y desarrollo de sistemas complejos y distribuidos para diversos fines.",
        },
      ],
    },
    portfolio: {
      sectionTitle: "Trabajos Seleccionados",
      sectionSubtitle: "Una muestra de mi pasión por crear y resolver problemas.",
      code: "Código",
      demo: "Demo",
    },
    resume: {
      sectionTitle: "Mi Currículum",
      sectionSubtitle: "Descarga o visualiza el PDF actualizado con mi experiencia.",
      heading: "Listo para descargar",
      description: "El currículum está en PDF y puedes descargarlo o abrirlo en una nueva pestaña.",
      download: "Descargar PDF",
      view: "Ver Online",
    },
    contact: {
      sectionTitle: "Conectemos",
      sectionSubtitle: "¿Tienes un proyecto en mente o solo quieres saludar? Envíame un mensaje.",
      form: {
        nameLabel: "Nombre",
        namePlaceholder: "Tu Nombre",
        emailLabel: "Email",
        emailPlaceholder: "tu.email@ejemplo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto o idea...",
        submit: "Enviar Mensaje",
      },
      validation: {
        nameMin: "El nombre debe tener al menos 2 caracteres.",
        email: "Por favor, ingresa un email válido.",
        messageMin: "El mensaje debe tener al menos 10 caracteres.",
      },
      toast: {
        title: "¡Mensaje Enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    project: {
      notFound: "Proyecto no encontrado.",
      close: "Cerrar",
      viewSource: "Ver Código Fuente",
      visit: "Visitar Proyecto",
    },
    projects: {
      "project-1": {
        title: "appQuanta",
        description:
          "Creación automatizada de aplicaciones a partir de ideas, sin código y sin complicaciones.",
        longDescription:
          "appQuanta es una plataforma revolucionaria que permite la creación automatizada de aplicaciones directamente desde una idea. Usando tecnología de punta, el sistema interpreta los requisitos del usuario y genera la estructura de la app, incluyendo interfaz y lógica de negocio, de forma rápida y sin necesidad de escribir código. El proyecto fue desarrollado en Dart con Flutter, garantizando una experiencia nativa y de alto rendimiento en iOS y Android.",
      },
      "project-2": {
        title: "Site_CH",
        description:
          "Sitio educativo sobre temas históricos y militares con contenido interactivo.",
        longDescription:
          "Site_CH es un portal educativo enfocado en temas históricos y militares, como la carrera armamentista y las armas nucleares. Construido con tecnologías modernas del ecosistema React como Next.js y TypeScript, ofrece una experiencia de aprendizaje interactiva y rica en contenido. El uso de TailwindCSS garantiza una interfaz responsiva y agradable en todos los dispositivos.",
      },
      "project-3": {
        title: "appQuanta-server",
        description:
          "Servidor inteligente de Quanta: autogeneración, APIs y gestión de builds.",
        longDescription:
          "Servidor inteligente para la plataforma appQuanta. Responsable de la generación automática de código, gestión de APIs y control de builds de las apps generadas. Desarrollado en Python para garantizar robustez y escalabilidad.",
      },
      "project-4": {
        title: "Portfolio",
        description: "Portafolio de Lucca — desarrollador creativo y apasionado por la tecnología.",
        longDescription:
          "Una versión anterior de mi portafolio, desarrollada con HTML, CSS y JavaScript puros para demostrar mis habilidades fundamentales de desarrollo web. Un proyecto que muestra mis raíces como desarrollador.",
      },
      "project-5": {
        title: "clinica-web",
        description: "Sistema web para gestión de clínicas. Hecho con JavaScript.",
        longDescription:
          "Un sistema completo para la gestión de clínicas, permitiendo programación de citas, registro de pacientes e historiales clínicos electrónicos. Desarrollado con JavaScript, HTML y CSS.",
      },
      "project-6": {
        title: "Sites",
        description:
          "Esqueleto inicial para prototipado de sistemas web con 30 pantallas básicas en HTML y CSS.",
        longDescription:
          "Proyecto de sistema web con 30 pantallas básicas en HTML y CSS, sirviendo como un esqueleto robusto para el prototipado rápido de nuevas aplicaciones y sitios web.",
      },
      "project-7": {
        title: "Minha_IA",
        description: "Estudios e implementaciones de conceptos de IA en Python.",
        longDescription:
          "Repositorio dedicado a mis estudios e implementaciones de algoritmos y conceptos de IA usando Python. Incluye redes neuronales, PLN y más.",
      },
      "project-8": {
        title: "Estudaai",
        description: "App para organizar rutinas de estudio con funciones inteligentes.",
        longDescription:
          "Estuda.AI es una app en desarrollo centrada en organizar rutinas de estudio de forma simple, intuitiva y eficiente. Con funciones inteligentes y un diseño moderno, ayuda a estudiantes a optimizar su tiempo y aprendizaje.",
      },
      "project-9": {
        title: "Ativo-TCC",
        description: "App de finanzas personales para controlar ingresos, gastos y saldo.",
        longDescription:
          "Ativo te ayuda a gestionar tus finanzas personales con facilidad. Controla ingresos, gastos y saldo con claridad y mantén tu presupuesto al día.",
      },
    },
  },
  fr: {
    language: {
      label: "Langue",
    },
    nav: {
      about: "À propos",
      skills: "Compétences",
      resume: "CV",
      projects: "Projets",
      contact: "Contact",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      subtitle: "Développeur Full Stack et Créateur Digital",
      cta: "Voir Mon Travail",
    },
    about: {
      sectionTitle: "À Propos de Moi",
      heading: "Un Aperçu de Mon Univers",
      blurb: "Un développeur créatif transformant des idées en réalités numériques impressionnantes.",
      paragraph:
        "Je suis un développeur Full Stack et créateur digital passionné par la création d'expériences numériques belles, fonctionnelles et centrées sur l'utilisateur. J'aime donner vie aux idées, du concept au déploiement. Mon travail mélange code propre, design moderne et quête constante de perfection.",
      timeline: [
        {
          date: "2021 - Aujourd'hui",
          title: "Développeur Full Stack",
          description:
            "Création et montée en charge d'applications web modernes dans une startup tech en forte croissance.",
        },
        {
          date: "2022 - 2023",
          title: "Entra21 React Native",
          description: "Participation au programme Entra21 axé sur React Native.",
        },
        {
          date: "Mars - Septembre",
          title: "Entra21 EAD Java",
          description:
            "Nouvelle participation au programme Entra21, axé sur Java en format à distance.",
        },
      ],
    },
    skills: {
      sectionTitle: "Mon Expertise",
      sectionSubtitle: "Un ensemble de compétences polyvalent pour donner vie à toute vision numérique.",
      items: [
        {
          title: "Développement Full Stack",
          description:
            "Création de solutions complètes, du front-end au back-end, avec un focus sur la performance et l'évolutivité.",
        },
        {
          title: "Développement d'Apps",
          description:
            "Création d'applications mobiles natives et hybrides pour iOS et Android avec des interfaces modernes.",
        },
        {
          title: "Intégration de Bases de Données",
          description:
            "Modélisation et intégration de bases SQL et NoSQL, garantissant efficacité et sécurité.",
        },
        {
          title: "Réseaux de Neurones pour l'IA",
          description:
            "Développement et entraînement de modèles de machine learning et réseaux neuronaux pour des applications intelligentes.",
        },
        {
          title: "UI/UX",
          description:
            "Conception d'interfaces intuitives et d'expériences utilisateur engageantes qui résolvent de vrais problèmes.",
        },
        {
          title: "Développement de Systèmes",
          description:
            "Architecture et développement de systèmes complexes et distribués pour divers objectifs.",
        },
      ],
    },
    portfolio: {
      sectionTitle: "Travaux Sélectionnés",
      sectionSubtitle: "Un aperçu de ma passion pour la création et la résolution de problèmes.",
      code: "Code",
      demo: "Démo",
    },
    resume: {
      sectionTitle: "Mon CV",
      sectionSubtitle: "Téléchargez ou consultez le PDF à jour avec mon expérience.",
      heading: "Prêt à télécharger",
      description: "Le CV est en PDF, vous pouvez le télécharger ou l’ouvrir dans un nouvel onglet.",
      download: "Télécharger le PDF",
      view: "Voir en ligne",
    },
    contact: {
      sectionTitle: "Restons en Contact",
      sectionSubtitle: "Vous avez un projet en tête ou voulez simplement dire bonjour ? Envoyez-moi un message.",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Votre Nom",
        emailLabel: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        messageLabel: "Message",
        messagePlaceholder: "Parlez-moi de votre projet ou idée...",
        submit: "Envoyer le Message",
      },
      validation: {
        nameMin: "Le nom doit comporter au moins 2 caractères.",
        email: "Veuillez saisir une adresse email valide.",
        messageMin: "Le message doit comporter au moins 10 caractères.",
      },
      toast: {
        title: "Message Envoyé !",
        description: "Merci de votre message. Je vous répondrai bientôt.",
      },
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    project: {
      notFound: "Projet introuvable.",
      close: "Fermer",
      viewSource: "Voir le Code Source",
      visit: "Visiter le Projet",
    },
    projects: {
      "project-1": {
        title: "appQuanta",
        description:
          "Création d'applications automatisée à partir d'idées, sans code ni complications.",
        longDescription:
          "appQuanta est une plateforme révolutionnaire qui permet la création d'applications automatisée directement à partir d'une idée. Grâce à des technologies de pointe, le système interprète les besoins utilisateurs et génère la structure de l'app, y compris l'interface et la logique métier, rapidement et sans écrire de code. Le projet a été développé en Dart avec Flutter, garantissant une expérience native et performante sur iOS et Android.",
      },
      "project-2": {
        title: "Site_CH",
        description:
          "Site éducatif sur des thèmes historiques et militaires avec contenu interactif.",
        longDescription:
          "Site_CH est un portail éducatif axé sur des thèmes historiques et militaires, comme la course aux armements et les armes nucléaires. Construit avec des technologies modernes de l'écosystème React telles que Next.js et TypeScript, il offre une expérience d'apprentissage interactive et riche. TailwindCSS assure une interface responsive et agréable sur tous les appareils.",
      },
      "project-3": {
        title: "appQuanta-server",
        description:
          "Serveur intelligent de Quanta : auto-génération, APIs et gestion des builds.",
        longDescription:
          "Serveur intelligent pour la plateforme appQuanta. Responsable de la génération automatique de code, de la gestion des APIs et du contrôle des builds des apps générées. Développé en Python pour garantir robustesse et évolutivité.",
      },
      "project-4": {
        title: "Portfolio",
        description: "Portefeuille de Lucca — développeur créatif passionné par la technologie.",
        longDescription:
          "Une version précédente de mon portfolio, développée en HTML, CSS et JavaScript purs pour démontrer mes compétences fondamentales en développement web. Un projet qui montre mes racines de développeur.",
      },
      "project-5": {
        title: "clinica-web",
        description: "Système web de gestion de cliniques. Réalisé en JavaScript.",
        longDescription:
          "Un système complet de gestion de cliniques, permettant la prise de rendez-vous, l'inscription des patients et les dossiers médicaux électroniques. Développé en JavaScript, HTML et CSS.",
      },
      "project-6": {
        title: "Sites",
        description:
          "Squelette initial pour prototyper des systèmes web avec 30 écrans HTML/CSS.",
        longDescription:
          "Projet de système web avec 30 écrans HTML et CSS de base, servant de squelette robuste pour le prototypage rapide de nouvelles applications et sites web.",
      },
      "project-7": {
        title: "Minha_IA",
        description: "Études et implémentations de concepts d'IA en Python.",
        longDescription:
          "Dépôt dédié à mes études et implémentations d'algorithmes et concepts d'IA en Python. Inclut réseaux neuronaux, NLP, et plus.",
      },
      "project-8": {
        title: "Estudaai",
        description: "App d'organisation de routine d'étude avec fonctionnalités intelligentes.",
        longDescription:
          "Estuda.AI est une app en cours de développement axée sur l'organisation des routines d'étude de manière simple, intuitive et efficace. Avec des fonctionnalités intelligentes et un visuel moderne, elle aide les étudiants à optimiser leur temps et apprentissage.",
      },
      "project-9": {
        title: "Ativo-TCC",
        description: "App de finances personnelles pour suivre revenus, dépenses et solde.",
        longDescription:
          "Ativo aide à gérer ses finances personnelles facilement. Suivez revenus, dépenses et solde avec clarté et gardez votre budget à jour.",
      },
    },
  },
  de: {
    language: {
      label: "Sprache",
    },
    nav: {
      about: "Über mich",
      skills: "Skills",
      resume: "Lebenslauf",
      projects: "Projekte",
      contact: "Kontakt",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      subtitle: "Full-Stack-Entwickler und Digital Creator",
      cta: "Meine Arbeit ansehen",
    },
    about: {
      sectionTitle: "Über Mich",
      heading: "Ein Einblick in Meine Welt",
      blurb: "Ein kreativer Entwickler, der Ideen in beeindruckende digitale Realitäten verwandelt.",
      paragraph:
        "Ich bin ein Full-Stack-Entwickler und Digital Creator mit Leidenschaft für schöne, funktionale und nutzerzentrierte digitale Erlebnisse. Ich liebe es, Ideen vom Konzept bis zum Launch zum Leben zu erwecken. Meine Arbeit verbindet sauberen Code, modernes Design und das ständige Streben nach Perfektion.",
      timeline: [
        {
          date: "2021 - Heute",
          title: "Full-Stack-Entwickler",
          description:
            "Aufbau und Skalierung moderner Webanwendungen in einem schnell wachsenden Tech-Startup.",
        },
        {
          date: "2022 - 2023",
          title: "Entra21 React Native",
          description: "Teilnahme am Entra21-Programm mit Fokus auf React Native.",
        },
        {
          date: "März - September",
          title: "Entra21 EAD Java",
          description:
            "Erneute Teilnahme am Entra21-Programm mit Fokus auf Java im Remote-Format.",
        },
      ],
    },
    skills: {
      sectionTitle: "Meine Expertise",
      sectionSubtitle: "Ein vielseitiges Skillset, um jede digitale Vision umzusetzen.",
      items: [
        {
          title: "Full-Stack-Entwicklung",
          description:
            "Komplette Lösungen vom Frontend bis zum Backend mit Fokus auf Performance und Skalierbarkeit.",
        },
        {
          title: "App-Entwicklung",
          description:
            "Entwicklung nativer und hybrider Mobile-Apps für iOS und Android mit modernen Interfaces.",
        },
        {
          title: "Datenbank-Integration",
          description:
            "Modellierung und Integration von SQL- und NoSQL-Datenbanken für Effizienz und Sicherheit.",
        },
        {
          title: "Neuronale Netze für KI",
          description:
            "Entwicklung und Training von Machine-Learning-Modellen und neuronalen Netzen für intelligente Anwendungen.",
        },
        {
          title: "UI/UX",
          description:
            "Design intuitiver Interfaces und ansprechender Nutzererlebnisse, die echte Probleme lösen.",
        },
        {
          title: "Systementwicklung",
          description:
            "Architektur und Entwicklung komplexer, verteilter Systeme für unterschiedliche Ziele.",
        },
      ],
    },
    portfolio: {
      sectionTitle: "Ausgewählte Arbeiten",
      sectionSubtitle: "Ein Einblick in meine Leidenschaft fürs Bauen und Problemlösen.",
      code: "Code",
      demo: "Demo",
    },
    resume: {
      sectionTitle: "Mein Lebenslauf",
      sectionSubtitle: "Lade das aktuelle PDF herunter oder sieh es dir an.",
      heading: "Bereit zum Download",
      description: "Der Lebenslauf ist als PDF verfügbar. Du kannst ihn herunterladen oder in einem neuen Tab öffnen.",
      download: "PDF herunterladen",
      view: "Online ansehen",
    },
    contact: {
      sectionTitle: "Lass Uns Vernetzen",
      sectionSubtitle: "Hast du ein Projekt im Kopf oder willst einfach Hallo sagen? Schreib mir.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Dein Name",
        emailLabel: "Email",
        emailPlaceholder: "deine.email@beispiel.de",
        messageLabel: "Nachricht",
        messagePlaceholder: "Erzähl mir von deinem Projekt oder deiner Idee...",
        submit: "Nachricht senden",
      },
      validation: {
        nameMin: "Der Name muss mindestens 2 Zeichen haben.",
        email: "Bitte gib eine gültige Email-Adresse ein.",
        messageMin: "Die Nachricht muss mindestens 10 Zeichen haben.",
      },
      toast: {
        title: "Nachricht gesendet!",
        description: "Danke für deine Nachricht. Ich melde mich bald.",
      },
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
    project: {
      notFound: "Projekt nicht gefunden.",
      close: "Schließen",
      viewSource: "Quellcode ansehen",
      visit: "Projekt besuchen",
    },
    projects: {
      "project-1": {
        title: "appQuanta",
        description:
          "Automatisierte App-Erstellung aus Ideen, ohne Code und ohne Aufwand.",
        longDescription:
          "appQuanta ist eine revolutionäre Plattform, die die automatisierte Erstellung von Apps direkt aus einer Idee ermöglicht. Mit modernster Technologie interpretiert das System Nutzeranforderungen und generiert die App-Struktur, inklusive Interface und Business-Logik, schnell und ohne Code. Das Projekt wurde in Dart mit Flutter entwickelt und bietet native Performance auf iOS und Android.",
      },
      "project-2": {
        title: "Site_CH",
        description:
          "Bildungsseite zu historischen und militärischen Themen mit interaktiven Inhalten.",
        longDescription:
          "Site_CH ist ein Bildungsportal mit Fokus auf historische und militärische Themen wie Wettrüsten und Atomwaffen. Es wurde mit modernen React-Technologien wie Next.js und TypeScript gebaut und bietet ein interaktives, inhaltsreiches Lernerlebnis. TailwindCSS sorgt für ein responsives, ansprechendes UI auf allen Geräten.",
      },
      "project-3": {
        title: "appQuanta-server",
        description:
          "Intelligenter Quanta-Server: Auto-Generierung, APIs und Build-Management.",
        longDescription:
          "Intelligenter Server für die appQuanta-Plattform. Zuständig für automatische Code-Generierung, API-Management und Build-Steuerung der erzeugten Apps. In Python entwickelt für Robustheit und Skalierbarkeit.",
      },
      "project-4": {
        title: "Portfolio",
        description: "Luccas Portfolio — kreativer Entwickler mit Leidenschaft für Technologie.",
        longDescription:
          "Eine frühere Version meines Portfolios, gebaut mit reinem HTML, CSS und JavaScript, um meine grundlegenden Web-Entwicklungsfähigkeiten zu zeigen. Ein Projekt, das meine Wurzeln als Entwickler zeigt.",
      },
      "project-5": {
        title: "clinica-web",
        description: "Websystem für Klinikverwaltung. Gebaut mit JavaScript.",
        longDescription:
          "Ein vollständiges System zur Klinikverwaltung mit Terminplanung, Patientenregistrierung und elektronischen Akten. Entwickelt mit JavaScript, HTML und CSS.",
      },
      "project-6": {
        title: "Sites",
        description:
          "Starter-Skelett für Web-System-Prototyping mit 30 HTML/CSS-Bildschirmen.",
        longDescription:
          "Websystem-Projekt mit 30 grundlegenden HTML- und CSS-Screens als robustes Startgerüst für schnelles Prototyping neuer Anwendungen und Websites.",
      },
      "project-7": {
        title: "Minha_IA",
        description: "Studien und Implementierungen von KI-Konzepten in Python.",
        longDescription:
          "Repository für meine Studien und Implementierungen von KI-Algorithmen und -Konzepten mit Python. Enthält neuronale Netze, NLP und mehr.",
      },
      "project-8": {
        title: "Estudaai",
        description: "App zur Organisation von Lernroutinen mit smarten Funktionen.",
        longDescription:
          "Estuda.AI ist eine App in Entwicklung, die Lernroutinen einfach, intuitiv und effizient organisiert. Mit smarten Funktionen und modernem Look hilft sie Studierenden, Zeit und Lernen zu optimieren.",
      },
      "project-9": {
        title: "Ativo-TCC",
        description: "Finanz-App zur Verfolgung von Einnahmen, Ausgaben und Kontostand.",
        longDescription:
          "Ativo hilft dir, persönliche Finanzen einfach zu verwalten. Verfolge Einnahmen, Ausgaben und Kontostand und halte dein Budget im Blick.",
      },
    },
  },
  zh: {
    language: {
      label: "语言",
    },
    nav: {
      about: "关于我",
      skills: "技能",
      resume: "简历",
      projects: "项目",
      contact: "联系",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    hero: {
      subtitle: "全栈开发者与数字创作者",
      cta: "查看作品",
    },
    about: {
      sectionTitle: "关于我",
      heading: "我的世界一瞥",
      blurb: "一位将想法变成令人惊艳数字现实的创意开发者。",
      paragraph:
        "我是一名全栈开发者和数字创作者，热爱打造美观、实用、以用户为中心的数字体验。我喜欢让想法从概念走向上线。我的工作融合干净的代码、现代设计，以及对完美的不懈追求。",
      timeline: [
        {
          date: "2021 - 至今",
          title: "全栈开发者",
          description: "在一家快速成长的科技初创公司构建并扩展现代 Web 应用。",
        },
        {
          date: "2022 - 2023",
          title: "Entra21 React Native",
          description: "参加 Entra21 计划，专注于 React Native。",
        },
        {
          date: "3月 - 9月",
          title: "Entra21 EAD Java",
          description: "再次参加 Entra21 计划，专注于 Java（远程模式）。",
        },
      ],
    },
    skills: {
      sectionTitle: "我的专长",
      sectionSubtitle: "多元技能组合，助力实现任何数字愿景。",
      items: [
        {
          title: "全栈开发",
          description: "从前端到后端打造完整解决方案，强调性能与可扩展性。",
        },
        {
          title: "应用开发",
          description: "为 iOS 和 Android 构建现代界面的原生与混合移动应用。",
        },
        {
          title: "数据库集成",
          description: "建模与集成 SQL/NoSQL 数据库，确保效率与数据安全。",
        },
        {
          title: "AI 神经网络",
          description: "开发与训练机器学习模型和神经网络，用于智能应用。",
        },
        {
          title: "UI/UX",
          description: "设计直观界面与沉浸式用户体验，解决真实问题。",
        },
        {
          title: "系统开发",
          description: "架构并开发复杂的分布式系统，满足多样化需求。",
        },
      ],
    },
    portfolio: {
      sectionTitle: "精选作品",
      sectionSubtitle: "展现我对创造与解决问题的热爱。",
      code: "代码",
      demo: "演示",
    },
    resume: {
      sectionTitle: "我的简历",
      sectionSubtitle: "下载或查看包含我的经历的最新 PDF。",
      heading: "可下载",
      description: "简历为 PDF，可下载或在新标签页中打开。",
      download: "下载 PDF",
      view: "在线查看",
    },
    contact: {
      sectionTitle: "保持联系",
      sectionSubtitle: "有项目想法或只是打个招呼？给我留言吧。",
      form: {
        nameLabel: "姓名",
        namePlaceholder: "你的姓名",
        emailLabel: "邮箱",
        emailPlaceholder: "your.email@example.com",
        messageLabel: "留言",
        messagePlaceholder: "告诉我你的项目或想法...",
        submit: "发送消息",
      },
      validation: {
        nameMin: "姓名至少需要 2 个字符。",
        email: "请输入有效的邮箱地址。",
        messageMin: "留言至少需要 10 个字符。",
      },
      toast: {
        title: "已发送！",
        description: "感谢联系，我会尽快回复。",
      },
    },
    footer: {
      rights: "版权所有。",
    },
    project: {
      notFound: "未找到项目。",
      close: "关闭",
      viewSource: "查看源码",
      visit: "访问项目",
    },
    projects: {
      "project-1": {
        title: "appQuanta",
        description: "基于想法的自动化应用创建，无需代码与繁琐流程。",
        longDescription:
          "appQuanta 是一个革命性平台，可直接从想法自动生成应用。系统利用前沿技术解析用户需求，快速生成应用结构，包括界面与业务逻辑，无需手写代码。项目使用 Dart 与 Flutter 构建，确保在 iOS 与 Android 上的原生高性能体验。",
      },
      "project-2": {
        title: "Site_CH",
        description: "面向历史与军事主题的教育网站，内容交互丰富。",
        longDescription:
          "Site_CH 是一个教育门户，聚焦军备竞赛、核武器等历史与军事主题。采用 Next.js、TypeScript 等现代 React 生态技术构建，提供丰富且互动的学习体验。TailwindCSS 保证在各类设备上的响应式与美观界面。",
      },
      "project-3": {
        title: "appQuanta-server",
        description: "Quanta 智能服务器：自动生成、API 与构建管理。",
        longDescription:
          "appQuanta 平台的智能服务器，负责自动代码生成、API 管理与生成应用的构建控制。使用 Python 构建，具备稳健性与可扩展性。",
      },
      "project-4": {
        title: "Portfolio",
        description: "Lucca 的作品集——热爱技术的创意开发者。",
        longDescription:
          "我的旧版作品集，使用纯 HTML、CSS 与 JavaScript 构建，用于展示基础 Web 开发能力。这个项目体现了我作为开发者的根基。",
      },
      "project-5": {
        title: "clinica-web",
        description: "用于诊所管理的 Web 系统，使用 JavaScript 开发。",
        longDescription:
          "完整的诊所管理系统，支持预约安排、患者登记与电子病历。采用 JavaScript、HTML 与 CSS 开发。",
      },
      "project-6": {
        title: "Sites",
        description: "用于 Web 系统原型的初始骨架，含 30 个基础页面。",
        longDescription:
          "包含 30 个基础 HTML 与 CSS 页面 的 Web 系统项目，可作为快速原型与新应用/网站的稳健起点。",
      },
      "project-7": {
        title: "Minha_IA",
        description: "使用 Python 进行 AI 概念研究与实现。",
        longDescription:
          "用于记录我在 Python 中研究与实现 AI 算法和概念的仓库。包含神经网络、自然语言处理等内容。",
      },
      "project-8": {
        title: "Estudaai",
        description: "用于整理学习日程的智能应用。",
        longDescription:
          "Estuda.AI 是一款正在开发的应用，专注以简单直观的方式组织学习日程。具备智能功能与现代视觉，帮助学生优化时间与学习效率。",
      },
      "project-9": {
        title: "Ativo-TCC",
        description: "个人理财应用，用于追踪收入、支出与余额。",
        longDescription:
          "Ativo 帮助你轻松管理个人财务。清晰跟踪收入、支出与余额，让预算保持在正轨。",
      },
    },
  },
} as const;

export type Translations = typeof translations[LanguageCode];
