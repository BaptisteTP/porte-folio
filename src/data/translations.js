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
      status: "Alternant SRE chez EDF • Étudiant Ingénieur CESI",
      hello: "Bonjour, je suis",
      subtitle: "Alternant SRE chez EDF & Étudiant Ingénieur",
      description: "Étudiant ingénieur au CESI (Toulouse) et actuellement Alternant Site Reliability Engineer (SRE) chez EDF. Spécialisé dans la fiabilité des systèmes, le développement backend/data (Python, Java, Big Data) et le génie logiciel.",
      ctaProjects: "Consulter mes projets",
      ctaResume: "Télécharger mon CV (PDF)",
      chipLabel: "École d'ingénieurs"
    },
    about: {
      title: "Parcours & Expériences",
      lead: "Formation d'ingénieur au CESI et parcours professionnel axé sur la fiabilité des systèmes et le génie logiciel.",
      tabs: {
        experience: "Expériences professionnelles",
        studies: "Formations",
        languages: "Langues",
        interests: "Centres d'intérêt"
      },
      experiences: [
        {
          date: "Septembre 2024 - Présent",
          title: "Alternant SRE (Site Reliability Engineer)",
          place: "EDF — Direction des Systèmes d'Information et du Numérique",
          desc: "Fiabilisation, exploitation et observabilité des environnements. Développement et automatisation en Python, traitement Big Data, maintien en conditions opérationnelles et industrialisation des flux applicatifs."
        },
        {
          date: "Avril 2024 - Juin 2024",
          title: "Stagiaire Développeur Web",
          place: "EDF — Direction des Systèmes d'Information et du Numérique",
          desc: "Stage technique de 2ème année : travaux d'évolution et d'intégration sur le site web EDF Particuliers."
        },
        {
          date: "Octobre 2022 - Septembre 2024",
          title: "Employé Polyvalent (Emploi étudiant)",
          place: "Intermarché — Plaisance-du-Touch",
          desc: "Hôte de caisse, accueil des clients, mise en rayon et service Drive menés en parallèle de mon cursus préparatoire d'ingénieur."
        },
        {
          date: "Juillet 2022 - Août 2022",
          title: "Agent d'Entretien",
          place: "Mairie de Tournefeuille — Piscine Municipale",
          desc: "Entretien technique des installations, respect rigoureux des normes de sécurité et d'hygiène."
        }
      ],
      studies: [
        {
          date: "2023 - Présent",
          title: "Cycle Ingénieur Informatique (FISA / CESI)",
          place: "CESI École d'Ingénieurs — Labège (Toulouse)",
          desc: "Pédagogie active par projets (PBL) : Architecture logicielle & microservices, POO et génie logiciel (Java, C#, C++), scripting et data (Python), bases de données SQL/NoSQL et systèmes distribués."
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
      lead: "Aperçu de mes compétences techniques, méthodes SRE/DevOps, langages et qualités humaines.",
      categories: {
        languages: "Langages de programmation",
        sreData: "SRE, Big Data & Systèmes",
        webFrameworks: "Web & Frameworks",
        toolsEnvironment: "Outils & DevOps",
        softSkills: "Savoir-être (Soft Skills)",
        methodologies: "Méthodologie & Génie Logiciel"
      },
      languagesList: [
        { name: "Python", desc: "Automatisation, scripts SRE, traitement et analyse de données (Big Data)" },
        { name: "Java", desc: "Programmation orientée objet, backend robuste, architectures d'entreprise" },
        { name: "JavaScript / TypeScript", desc: "ES6+, logique asynchrone, typage statique, React/Node" },
        { name: "C# (.NET)", desc: "Génie logiciel, POO, architecture d'applications" },
        { name: "C / C++", desc: "Gestion mémoire bas niveau, algorithmique, microcontrôleurs" },
        { name: "SQL", desc: "Modélisation relationnelle, requêtes complexes, bases distribuées" }
      ],
      sreDataList: [
        { name: "SRE & Observabilité", desc: "Supervision, suivi des métriques, fiabilisation des environnements et réduction du toïl" },
        { name: "Big Data & Traitement", desc: "Pipelines de traitement, manipulation de volumes de données et scripts analytiques" },
        { name: "Systèmes Linux & Scripting", desc: "Administration système Linux, automatisation Bash et PowerShell" },
        { name: "Industrialisation & CI/CD", desc: "Notions de déploiement continu, intégration et maintenance en conditions opérationnelles" }
      ],
      webList: [
        { name: "React / Vite", desc: "Hooks, SPA, composants modulaires, architecture front-end" },
        { name: "Node.js / Express", desc: "APIs REST, architecture microservices, middlewares" },
        { name: "PHP / Symfony / Blade", desc: "Développement web MVC, templating et gestion de données" },
        { name: "HTML5 / CSS3", desc: "Responsive design, Flexbox, CSS Grid, intégration soignée" }
      ],
      toolsList: [
        { name: "Git & GitHub", desc: "Gestion de versions, branches, pull requests, collaboration" },
        { name: "Bases de données", desc: "PostgreSQL, MySQL, SQL Server, stockage de données volumineuses" },
        { name: "Figma", desc: "Maquettage, prototypage d'interfaces, intégration design-to-code" },
        { name: "Cloud & Déploiement", desc: "Vercel, notions AWS EC2, GitHub Actions" },
        { name: "Outils & CAO", desc: "Suite bureautique, modélisation CAO 3D pour impression additive" }
      ],
      softSkillsList: [
        { title: "Rigueur & Sens du détail", desc: "Exigence indispensable en environnement de production critique (SRE) et code structuré." },
        { title: "Esprit d'équipe & Leadership", desc: "Capitaine de rugby pendant 2 ans et habitude de la collaboration transverse en entreprise." },
        { title: "Résolution méthodique de problèmes", desc: "Diagnostic d'incidents, analyse de causes racines (RCA) et recherche de solutions pérennes." },
        { title: "Adaptabilité & Organisation", desc: "Gestion conjointe et équilibrée des responsabilités professionnelles chez EDF et des études d'ingénieur." },
        { title: "Communication claire", desc: "Transmission fluide des informations techniques et sens de l'écoute." }
      ],
      methodsList: [
        { title: "Pratiques SRE (Site Reliability Engineering)", desc: "Culture de la fiabilité, surveillance proactive, automatisation et documentation." },
        { title: "Pédagogie active par projets (PBL)", desc: "Résolution de problématiques concrètes au CESI en autonomie et en équipe." },
        { title: "Méthodes Agiles & Scrum", desc: "Organisation en sprints, gestion de backlog et livraisons itératives." },
        { title: "Conception Orientée Objet (POO) & Design Patterns", desc: "Modélisation UML, modularité et séparation des responsabilités." }
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
      lead: "N'hésitez pas à me contacter pour échanger sur mes projets techniques ou pour toute opportunité professionnelle.",
      infoTitle: "Coordonnées",
      infoDesc: "Alternant SRE chez EDF & Étudiant Ingénieur au CESI.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      downloadCV: "Télécharger mon CV (PDF)",
      form: {
        name: "Nom & Prénom",
        namePlaceholder: "ex. Jean Dupont",
        email: "Adresse Email",
        emailPlaceholder: "ex. jean.dupont@example.com",
        subject: "Objet",
        subjectPlaceholder: "ex. Prise de contact / Échange technique",
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
      status: "SRE Apprentice at EDF • CESI Engineering Student",
      hello: "Hello, I am",
      subtitle: "Site Reliability Engineer Apprentice at EDF & Engineering Student",
      description: "Computer Science Engineering Student at CESI (Toulouse) and currently Site Reliability Engineer (SRE) Apprentice at EDF. Specialized in system reliability, backend and data engineering (Python, Java, Big Data) and clean software engineering.",
      ctaProjects: "Browse my projects",
      ctaResume: "Download Resume (PDF)",
      chipLabel: "Engineering School"
    },
    about: {
      title: "Background & Experience",
      lead: "Engineering degree at CESI and professional experience focused on site reliability, backend development, and big data.",
      tabs: {
        experience: "Work Experience",
        studies: "Education",
        languages: "Languages",
        interests: "Interests & Sports"
      },
      experiences: [
        {
          date: "September 2024 - Present",
          title: "Site Reliability Engineer (SRE) Apprentice",
          place: "EDF — Information Systems & Digital Directorate",
          desc: "System reliability, monitoring, and observability. Scripting and automation with Python, big data processing pipelines, maintaining high availability in operational environments."
        },
        {
          date: "April 2024 - June 2024",
          title: "Web Developer Intern",
          place: "EDF — Information Systems & Digital Directorate",
          desc: "2nd-year technical internship: contributing to feature improvements on the official EDF Residential Customer portal."
        },
        {
          date: "October 2022 - September 2024",
          title: "Store Associate & Cashier (Part-time student job)",
          place: "Intermarché — Plaisance-du-Touch",
          desc: "Customer service, cash register management, stock organization, and drive service managed alongside preparatory engineering studies."
        },
        {
          date: "July 2022 - August 2022",
          title: "Facility Maintenance Associate",
          place: "Tournefeuille City Hall — Public Pool",
          desc: "Technical maintenance of facilities strictly adhering to hygiene and safety protocols."
        }
      ],
      studies: [
        {
          date: "2023 - Present",
          title: "Computer Science Engineering Degree (CESI)",
          place: "CESI Graduate School of Engineering — Toulouse",
          desc: "Problem-Based Learning: Software & microservices architecture, OOP (Java, C#, C++), scripting and data (Python), relational & distributed databases, and system reliability."
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
      lead: "An overview of my technical capabilities, SRE & data engineering tools, and soft skills.",
      categories: {
        languages: "Programming Languages",
        sreData: "SRE, Big Data & Systems",
        webFrameworks: "Web & Frameworks",
        toolsEnvironment: "Tools & DevOps",
        softSkills: "Soft Skills",
        methodologies: "Methodologies & Software Engineering"
      },
      languagesList: [
        { name: "Python", desc: "Automation, SRE scripting, big data processing and analytical pipelines" },
        { name: "Java", desc: "Object-oriented programming, enterprise backend architecture" },
        { name: "JavaScript / TypeScript", desc: "ES6+, asynchronous logic, static typing, React/Node" },
        { name: "C# (.NET)", desc: "Software engineering, OOP, application design" },
        { name: "C / C++", desc: "Low-level memory management, algorithms, microcontrollers" },
        { name: "SQL", desc: "Relational database modeling, complex queries, distributed data" }
      ],
      sreDataList: [
        { name: "SRE & Observability", desc: "Monitoring, metrics tracking, system resilience, and toil reduction" },
        { name: "Big Data & Data Pipelines", desc: "Data manipulation, analytical workflows, handling high-volume datasets" },
        { name: "Linux Systems & Scripting", desc: "Linux system administration, automation via Bash and PowerShell" },
        { name: "CI/CD & Industrialization", desc: "Continuous integration concepts, operational maintenance and deployment" }
      ],
      webList: [
        { name: "React / Vite", desc: "Hooks, SPA, modular component design, frontend architecture" },
        { name: "Node.js / Express", desc: "REST APIs, microservices architecture, middlewares" },
        { name: "PHP / Symfony / Blade", desc: "MVC web applications, templating, and data handling" },
        { name: "HTML5 / CSS3", desc: "Responsive design, Flexbox, CSS Grid, clean integration" }
      ],
      toolsList: [
        { name: "Git & GitHub", desc: "Version control, branches, pull requests, collaboration" },
        { name: "Databases", desc: "PostgreSQL, MySQL, SQL Server, large scale data stores" },
        { name: "Figma", desc: "UI wireframing, interactive prototyping, design-to-code" },
        { name: "Cloud & Deployment", desc: "Vercel, AWS EC2 basics, GitHub Actions" },
        { name: "Office & CAD", desc: "Office tools, 3D CAD modeling for additive manufacturing" }
      ],
      softSkillsList: [
        { title: "Rigor & Attention to Detail", desc: "Essential in critical production environments (SRE) and maintainable codebases." },
        { title: "Teamwork & Leadership", desc: "Rugby captain for 2 years and experienced with cross-functional corporate teams." },
        { title: "Root-Cause Problem Solving", desc: "Incident diagnostics, root cause analysis (RCA), and reliable permanent fixes." },
        { title: "Adaptability & Organization", desc: "Successfully balancing demanding engineering coursework with professional duties at EDF." },
        { title: "Clear Communication", desc: "Effective technical documentation, clear reporting, and active listening." }
      ],
      methodsList: [
        { title: "Site Reliability Engineering (SRE)", desc: "Reliability culture, proactive monitoring, automation, and incident post-mortems." },
        { title: "Problem-Based Learning (PBL)", desc: "Hands-on engineering problem resolution at CESI individually and in teams." },
        { title: "Agile & Scrum Methodologies", desc: "Sprint cycles, retrospectives, backlogs, and iterative milestones." },
        { title: "Object-Oriented Design (OOP) & Patterns", desc: "UML modeling, modularity, and separation of concerns." }
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
      lead: "Feel free to reach out to connect or discuss technical projects.",
      infoTitle: "Contact Details",
      infoDesc: "SRE Apprentice at EDF & Engineering Student at CESI.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      downloadCV: "Download Resume (PDF)",
      form: {
        name: "Full Name",
        namePlaceholder: "e.g. John Doe",
        email: "Email Address",
        emailPlaceholder: "e.g. john.doe@example.com",
        subject: "Subject",
        subjectPlaceholder: "e.g. Technical Discussion / Networking",
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
