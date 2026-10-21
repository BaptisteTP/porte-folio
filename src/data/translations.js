export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      status: "Recherche d'alternance • 3 ans",
      hello: "Bonjour, je suis",
      subtitle: "Étudiant Ingénieur en Informatique",
      description: "Étudiant au CESI (Labège), passionné par le développement web et le génie logiciel. Rigoureux et orienté pratique, je conçois des projets académiques et personnels propres, performants et documentés.",
      ctaProjects: "Consulter mes projets",
      ctaResume: "Télécharger mon CV (PDF)",
      chipLabel: "École d'ingénieurs"
    },
    about: {
      title: "Parcours & Expériences",
      lead: "Formation d'ingénieur, expériences en entreprise et engagement personnel.",
      tabs: {
        experience: "Expériences professionnelles",
        studies: "Formations",
        languages: "Langues",
        interests: "Centres d'intérêt"
      },
      experiences: [
        {
          date: "Avril 2024 - Juin 2024",
          title: "Stagiaire Développeur Web",
          place: "EDF — Direction des Systèmes d'Informations et du Numérique (DSIN)",
          desc: "Stage technique de 2ème année : travaux et évolutions sur le site web EDF Particuliers."
        },
        {
          date: "Octobre 2022 - Présent",
          title: "Employé Polyvalent (Emploi étudiant)",
          place: "Intermarché — Plaisance-du-Touch",
          desc: "Hôte de caisse, accueil des clients, mise en rayon et service Drive en parallèle de mon cursus d'ingénieur."
        },
        {
          date: "Juillet 2022 - Août 2022",
          title: "Agent d'Entretien",
          place: "Mairie de Tournefeuille — Piscine Municipale",
          desc: "Entretien technique des installations, respect des normes d'hygiène et de sécurité."
        }
      ],
      studies: [
        {
          date: "2023 - Présent",
          title: "Cycle Ingénieur Informatique (FISA / Prépa intégrée)",
          place: "CESI École d'Ingénieurs — Labège",
          desc: "Pédagogie active par projets (PBL) : Architecture microservices, génie logiciel et POO (C++, C#), développement web (React, Express, PHP, Symphony), bases de données relationnelles SQL et systèmes embarqués (C/Arduino)."
        },
        {
          date: "2019 - 2022",
          title: "Baccalauréat Général (Mention Assez Bien)",
          place: "Lycée Marie-Louise Dissard Françoise — Tournefeuille",
          desc: "Spécialités Mathématiques, Physique-Chimie et option Mathématiques Expertes."
        },
        {
          date: "2019",
          title: "Diplôme National du Brevet",
          place: "Collège Léonard de Vinci — Tournefeuille",
          desc: "Mention Très Bien."
        }
      ],
      languages: [
        {
          name: "Français",
          level: "Langue maternelle"
        },
        {
          name: "Anglais",
          level: "Niveau B1 (TOEIC : 585)"
        },
        {
          name: "Espagnol",
          level: "Niveau scolaire"
        }
      ],
      interests: [
        {
          title: "Rugby à XV (13 ans en club)",
          desc: "Joueur à Tournefeuille, capitaine d'équipe lors des deux dernières saisons. Esprit d'équipe, engagement et sens du collectif."
        },
        {
          title: "Impression 3D & Prototypage",
          desc: "Modélisation 3D et fabrication additive pour des projets personnels et d'outillage."
        },
        {
          title: "Ski & Sport",
          desc: "Pratique régulière du ski alpin et activités sportives outdoor."
        }
      ]
    },
    skills: {
      title: "Compétences & Outils",
      lead: "Aperçu de mes compétences techniques, méthodes de travail et qualités humaines.",
      categories: {
        languages: "Langages de programmation",
        webFrameworks: "Web & Frameworks",
        toolsEnvironment: "Outils, Systèmes & DevOps",
        softSkills: "Savoir-être (Soft Skills)",
        methodologies: "Méthodologie & Génie Logiciel"
      },
      languagesList: [
        { name: "JavaScript / TypeScript", desc: "ES6+, logique asynchrone, typage statique" },
        { name: "C# (.NET)", desc: "Programmation orientée objet, conception d'applications" },
        { name: "C / C++", desc: "Gestion mémoire, algorithmique, microcontrôleurs" },
        { name: "PHP", desc: "Architecture MVC, développement back-end" },
        { name: "SQL", desc: "Modélisation relationnelle, requêtes complexes" },
        { name: "Python", desc: "Scripts d'automatisation, data, calcul scientifique" }
      ],
      webList: [
        { name: "React / Vite", desc: "Hooks, SPA, composants réutilisables, routage" },
        { name: "Node.js / Express", desc: "APIs REST, architecture microservices, middlewares" },
        { name: "HTML5 / CSS3", desc: "Mise en page responsive, Flexbox, CSS Grid, accessibilité" },
        { name: "Symfony / Blade", desc: "Frameworks PHP, templating et gestion de données" }
      ],
      toolsList: [
        { name: "Git & GitHub", desc: "Gestion de versions, branches, pull requests, collaboration" },
        { name: "Bases de données", desc: "MySQL, PostgreSQL, SQL Server, modélisation conceptuelle" },
        { name: "Figma", desc: "Maquettage, prototypage d'interfaces, intégration design-to-code" },
        { name: "Systèmes & Linux", desc: "Environnements Windows/Linux, terminal Bash/PowerShell" },
        { name: "Déploiement & Cloud", desc: "Vercel, notions AWS EC2, GitHub Actions CI/CD" },
        { name: "Bureautique & CAO", desc: "Suite Office, modélisation CAO 3D pour impression additive" }
      ],
      softSkillsList: [
        { title: "Rigueur & Sens du détail", desc: "Code propre, structuration claire des données et respect scrupuleux des consignes." },
        { title: "Esprit d'équipe & Leadership", desc: "Capitaine de rugby pendant 2 ans et habitué aux projets d'ingénierie en groupe." },
        { title: "Capacité d'adaptation & Ponctualité", desc: "Gestion simultanée et rigoureuse de mes études d'ingénieur et d'un emploi étudiant." },
        { title: "Résolution de problèmes", desc: "Approche méthodique face aux bugs techniques et recherche de solutions viables." },
        { title: "Aisance relationnelle", desc: "Expérience du contact client au quotidien (accueil, caisse, drive)." }
      ],
      methodsList: [
        { title: "Pédagogie active par projets (PBL)", desc: "Résolution de cas concrets en autonomie et en équipe restreinte." },
        { title: "Méthodes Agiles & Scrum", desc: "Découpage en sprints, revues, réunions de suivi et backlog." },
        { title: "Conception Orientée Objet (POO)", desc: "Diagrammes UML, séparation des responsabilités, design patterns." },
        { title: "Architecture Logicielle", desc: "Compréhension des architectures MVC et des architectures distribuées / microservices." }
      ]
    },
    projects: {
      title: "Projets Réalisés",
      lead: "Code source public accessible sur GitHub avec démonstrations en ligne pour certains projets.",
      sectionAcademic: "Projets Académiques & Études (CESI)",
      sectionPersonal: "Projets Personnels & Associatifs",
      viewCode: "Voir sur GitHub",
      viewDemo: "Voir la démo",
      academic: [
        {
          title: "DAD Microservices — Architecture Web",
          desc: "Application web collaborative conçue en FISA A3 Informatique basée sur une architecture microservices avec React en front-end et Express / Node.js en backend, intégrant une maquette Figma dédiée.",
          tags: ["React", "Express", "Microservices", "JavaScript", "Figma"],
          github: "https://github.com/BaptisteTP/DAD-Equipe-1",
          icon: "web"
        },
        {
          title: "EasySave — Logiciel de Sauvegarde (POO)",
          desc: "Projet de génie logiciel en C# exploitant les patrons de conception orientés objet. Sauvegarde complète et différentielle avec chiffrement et suivi des logs.",
          tags: ["C#", ".NET", "POO", "Génie Logiciel", "Design Patterns"],
          github: "https://github.com/BaptisteTP/EasySave",
          icon: "database"
        },
        {
          title: "POO-A2 — Interface Graphique & Base SQL",
          desc: "Application de gestion en C++ avec interface graphique interactive développée en C++/CLI, connectée à une base de données SQL Server.",
          tags: ["C++", "C++/CLI", "POO", "SQL Server", "GUI"],
          github: "https://github.com/Zecknoz/POO-A2",
          icon: "database"
        },
        {
          title: "Plateforme Web d'Offres d'Emploi",
          desc: "Application web complète (front-end et back-end) de gestion d'annonces et candidatures avec architecture MVC et authentification.",
          tags: ["Blade", "PHP", "JavaScript", "CSS3", "SQL"],
          github: "https://github.com/BaptisteTP/web",
          icon: "web"
        },
        {
          title: "Station Météo Embarquée",
          desc: "Système de mesure environnementale sur microcontrôleur Arduino en langage C. Gestion des capteurs d'entrées/sorties et optimisation des ressources.",
          tags: ["C / C++", "Arduino", "Systèmes Embarqués", "Capteurs I/O"],
          github: "https://github.com/BaptisteTP",
          icon: "chip"
        }
      ],
      personal: [
        {
          title: "Soirée Caritative « Au Cœur des Couleurs »",
          desc: "Site officiel déployé pour la soirée caritative au profit de la Maison Ronald McDonald de Toulouse (Association Dessine-moi une Maison). Présentation de l'évènement, formulaire et informations.",
          tags: ["TypeScript", "React", "Next.js/Vite", "Vercel"],
          github: "https://github.com/BaptisteTP/MDP",
          liveUrl: "https://mdp-tan.vercel.app",
          icon: "web"
        },
        {
          title: "Jeu de Belote en Ligne",
          desc: "Application web interactive du jeu de Belote hébergée sur Vercel, avec logique de distribution, règles et interface joueur.",
          tags: ["JavaScript", "HTML5", "CSS3", "Vercel"],
          github: "https://github.com/BaptisteTP/belote",
          liveUrl: "https://belote-six.vercel.app",
          icon: "web"
        },
        {
          title: "Antigravity IDE",
          desc: "Projet d'éditeur de code web modulaire développé en TypeScript et React avec Vite.",
          tags: ["TypeScript", "React", "Vite", "Oxlint"],
          github: "https://github.com/BaptisteTP/IDE",
          icon: "web"
        },
        {
          title: "Site d'Association",
          desc: "Structure et interface pour un site web associatif moderne.",
          tags: ["JavaScript", "React", "Vite", "ESLint"],
          github: "https://github.com/BaptisteTP/site_dassos",
          icon: "web"
        }
      ]
    },
    contact: {
      title: "Contact",
      lead: "N'hésitez pas à me contacter pour une proposition d'alternance ou pour échanger sur mes projets.",
      infoTitle: "Coordonnées",
      infoDesc: "Disponible pour une alternance de 3 ans en développement informatique.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      downloadCV: "Télécharger mon CV (PDF)",
      form: {
        name: "Nom & Prénom",
        namePlaceholder: "ex. Jean Dupont",
        email: "Adresse Email",
        emailPlaceholder: "ex. jean.dupont@example.com",
        subject: "Objet",
        subjectPlaceholder: "ex. Proposition d'alternance",
        message: "Message",
        messagePlaceholder: "Votre message...",
        submit: "Envoyer l'email",
        notice: "Le clic ouvrira votre client de messagerie habituel avec le message préparé."
      }
    },
    footer: {
      rights: "Tous droits réservés."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "Background",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      status: "Seeking 3-year apprenticeship",
      hello: "Hello, I am",
      subtitle: "Computer Science Engineering Student",
      description: "Engineering student at CESI (Toulouse), focused on software engineering and web technologies. Hands-on and detail-oriented, with clean and well-structured projects.",
      ctaProjects: "Browse my projects",
      ctaResume: "Download Resume (PDF)",
      chipLabel: "Engineering School"
    },
    about: {
      title: "Background & Experience",
      lead: "Academic training, work experience, and personal background.",
      tabs: {
        experience: "Work Experience",
        studies: "Education",
        languages: "Languages",
        interests: "Interests & Sports"
      },
      experiences: [
        {
          date: "April 2024 - June 2024",
          title: "Web Developer Intern",
          place: "EDF — Information Systems & Digital Directorate (DSIN)",
          desc: "2nd-year technical internship: contributing to the official EDF Residential Customer portal."
        },
        {
          date: "October 2022 - Present",
          title: "Store Associate & Cashier (Part-time student job)",
          place: "Intermarché — Plaisance-du-Touch",
          desc: "Customer service, cash management, stock organization, and drive service alongside full-time engineering studies."
        },
        {
          date: "July 2022 - August 2022",
          title: "Facility Maintenance Associate",
          place: "Tournefeuille City Hall — Public Pool",
          desc: "Technical maintenance of facilities adhering to hygiene and safety protocols."
        }
      ],
      studies: [
        {
          date: "2023 - Present",
          title: "Computer Science Engineering Degree (CESI)",
          place: "CESI Graduate School of Engineering — Toulouse",
          desc: "Problem-Based Learning: Microservices architecture, Object-Oriented Software Design (C++, C#), Web development (React, Express, PHP, Symphony), SQL databases, and embedded systems (C/Arduino)."
        },
        {
          date: "2019 - 2022",
          title: "High School Diploma (Baccalauréat)",
          place: "Lycée Marie-Louise Dissard Françoise — Tournefeuille",
          desc: "Majors in Mathematics, Physics & Chemistry, with Advanced Mathematics option."
        },
        {
          date: "2019",
          title: "Middle School Certificate (Brevet)",
          place: "Collège Léonard de Vinci — Tournefeuille",
          desc: "Graduated with highest honors."
        }
      ],
      languages: [
        {
          name: "French",
          level: "Native speaker"
        },
        {
          name: "English",
          level: "B1 Level (TOEIC: 585)"
        },
        {
          name: "Spanish",
          level: "School level"
        }
      ],
      interests: [
        {
          title: "Rugby Union (13 years of club practice)",
          desc: "Player at Tournefeuille Rugby Club, team captain for the last 2 seasons. Teamwork, commitment, and leadership."
        },
        {
          title: "3D Printing & Hardware Prototyping",
          desc: "3D modeling and additive manufacturing for personal electronics and hardware projects."
        },
        {
          title: "Skiing & Outdoor Sports",
          desc: "Alpine skiing and outdoor fitness activities."
        }
      ]
    },
    skills: {
      title: "Skills & Tools",
      lead: "An overview of my technical capabilities, software tools, and interpersonal skills.",
      categories: {
        languages: "Programming Languages",
        webFrameworks: "Web & Frameworks",
        toolsEnvironment: "Tools, Systems & DevOps",
        softSkills: "Soft Skills",
        methodologies: "Methodologies & Software Engineering"
      },
      languagesList: [
        { name: "JavaScript / TypeScript", desc: "ES6+, asynchronous programming, static typing" },
        { name: "C# (.NET)", desc: "Object-oriented programming, application development" },
        { name: "C / C++", desc: "Memory management, algorithms, microcontrollers" },
        { name: "PHP", desc: "MVC architecture, backend development" },
        { name: "SQL", desc: "Relational database modeling, complex queries" },
        { name: "Python", desc: "Automation scripts, data manipulation, computing" }
      ],
      webList: [
        { name: "React / Vite", desc: "Hooks, SPA, reusable component design, routing" },
        { name: "Node.js / Express", desc: "REST APIs, microservices architecture, middlewares" },
        { name: "HTML5 / CSS3", desc: "Responsive layout, Flexbox, CSS Grid, accessibility" },
        { name: "Symfony / Blade", desc: "PHP frameworks, templating, and data handling" }
      ],
      toolsList: [
        { name: "Git & GitHub", desc: "Version control, branches, pull requests, collaboration" },
        { name: "Databases", desc: "MySQL, PostgreSQL, SQL Server, conceptual modeling" },
        { name: "Figma", desc: "UI wireframing, interactive prototyping, design-to-code" },
        { name: "Systems & Linux", desc: "Windows / Linux environments, Bash / PowerShell" },
        { name: "Cloud & Deployment", desc: "Vercel, AWS EC2 basics, GitHub Actions CI/CD" },
        { name: "Office & CAD", desc: "Office tools, 3D CAD modeling for additive manufacturing" }
      ],
      softSkillsList: [
        { title: "Rigor & Precision", desc: "Clean code, structured data, and strict adherence to requirements." },
        { title: "Teamwork & Leadership", desc: "Rugby captain for 2 years and practiced at group engineering projects." },
        { title: "Adaptability & Punctuality", desc: "Successfully balancing demanding engineering coursework with part-time employment." },
        { title: "Problem-Solving Mindset", desc: "Methodical debugging and persistent search for functional solutions." },
        { title: "Communication & Customer Relations", desc: "Daily customer-facing experience (cashier, greeting, drive-thru)." }
      ],
      methodsList: [
        { title: "Problem-Based Learning (PBL)", desc: "Hands-on resolution of engineering scenarios individually and in teams." },
        { title: "Agile & Scrum Methodologies", desc: "Sprint cycles, retrospectives, backlogs, and milestone tracking." },
        { title: "Object-Oriented Design (OOP)", desc: "UML diagrams, separation of concerns, design patterns." },
        { title: "Software Architecture", desc: "Solid understanding of MVC and distributed / microservice patterns." }
      ]
    },
    projects: {
      title: "Featured Projects",
      lead: "Public source code on GitHub with live demonstrations where available.",
      sectionAcademic: "Academic Projects (CESI)",
      sectionPersonal: "Personal & Community Projects",
      viewCode: "View on GitHub",
      viewDemo: "Live Demo",
      academic: [
        {
          title: "DAD Microservices — Web Architecture",
          desc: "Collaborative web application built in 3rd year engineering using microservices architecture with React front-end, Node.js / Express backend, and Figma design.",
          tags: ["React", "Express", "Microservices", "JavaScript", "Figma"],
          github: "https://github.com/BaptisteTP/DAD-Equipe-1",
          icon: "web"
        },
        {
          title: "EasySave — Backup Software (OOP)",
          desc: "Software engineering project in C# using object-oriented design patterns. Differential and full backups with log tracking.",
          tags: ["C#", ".NET", "OOP", "Software Engineering", "Design Patterns"],
          github: "https://github.com/BaptisteTP/EasySave",
          icon: "database"
        },
        {
          title: "POO-A2 — GUI & Database Manager",
          desc: "C++ desktop application utilizing OOP principles with an interactive C++/CLI graphical interface connected to an SQL Server database.",
          tags: ["C++", "C++/CLI", "OOP", "SQL Server", "GUI"],
          github: "https://github.com/Zecknoz/POO-A2",
          icon: "database"
        },
        {
          title: "Job Search Web Platform",
          desc: "Full-stack MVC web application for job listings and applications with user authentication.",
          tags: ["Blade", "PHP", "JavaScript", "CSS3", "SQL"],
          github: "https://github.com/BaptisteTP/web",
          icon: "web"
        },
        {
          title: "Embedded Weather Station",
          desc: "Microcontroller system programmed in C on Arduino. Sensor input/output handling and resource optimization.",
          tags: ["C / C++", "Arduino", "Embedded Systems", "I/O Sensors"],
          github: "https://github.com/BaptisteTP",
          icon: "chip"
        }
      ],
      personal: [
        {
          title: "Charity Gala « Au Cœur des Couleurs »",
          desc: "Live official website built for the charity gala supporting Maison Ronald McDonald Toulouse. Event presentation and registration information.",
          tags: ["TypeScript", "React", "Next.js/Vite", "Vercel"],
          github: "https://github.com/BaptisteTP/MDP",
          liveUrl: "https://mdp-tan.vercel.app",
          icon: "web"
        },
        {
          title: "Online Belote Card Game",
          desc: "Interactive web implementation of the traditional French Belote card game hosted on Vercel.",
          tags: ["JavaScript", "HTML5", "CSS3", "Vercel"],
          github: "https://github.com/BaptisteTP/belote",
          liveUrl: "https://belote-six.vercel.app",
          icon: "web"
        },
        {
          title: "Antigravity IDE",
          desc: "Modular web-based code editor project built with TypeScript and React.",
          tags: ["TypeScript", "React", "Vite", "Oxlint"],
          github: "https://github.com/BaptisteTP/IDE",
          icon: "web"
        },
        {
          title: "Nonprofit Association Website",
          desc: "Modern web frontend designed for nonprofit and student associations.",
          tags: ["JavaScript", "React", "Vite", "ESLint"],
          github: "https://github.com/BaptisteTP/site_dassos",
          icon: "web"
        }
      ]
    },
    contact: {
      title: "Contact",
      lead: "Feel free to reach out regarding apprenticeship opportunities or technical projects.",
      infoTitle: "Contact Details",
      infoDesc: "Available for a 3-year apprenticeship program in software and web engineering.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      downloadCV: "Download Resume (PDF)",
      form: {
        name: "Full Name",
        namePlaceholder: "e.g. John Doe",
        email: "Email Address",
        emailPlaceholder: "e.g. john.doe@example.com",
        subject: "Subject",
        subjectPlaceholder: "e.g. Apprenticeship Opportunity",
        message: "Message",
        messagePlaceholder: "Your message...",
        submit: "Send Email",
        notice: "Submitting opens your default email client with your pre-filled message."
      }
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};
