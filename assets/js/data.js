/* ==========================================================================
   Portfolio content. The page sections are rendered from this file.
   ========================================================================== */

const PORTFOLIO = {
  name: "Sanjana Kadapatti",
  shortName: "SK",
  roles: [
    "Software Engineer",
    "Java backend developer",
    "Networking engineer",
    "Backend developer",
    "AI & RAG builder"
  ],
  tagline:
    "I build Java backend services, networking solutions, Python automation, and AI-powered RAG applications.",
  location: "Bengaluru, Karnataka",
  availability: "Java backend · Networking · AI technologies",
  phone: "9886413418",
  email: "sanjusk7584@gmail.com",
  resume: "assets/resume.pdf",

  girl: {
    enabled: true,
    lines: [
      "Hi, I'm Sanjana. Welcome!",
      "Ask me about Python and automation.",
      "I enjoy building useful AI-powered tools.",
      "Explore my projects and experience below."
    ]
  },

  stats: [
    { value: 60, suffix: "% max", label: "Documentation accuracy improvement" },
    { value: 68, suffix: "%", label: "RAG implementation evaluation" },
    { value: 58, suffix: "%", label: "E-Fy implementation evaluation" },
    { value: 8, suffix: ".6", label: "Education CGPA" }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "KLE Institute of Technology, Hubli, Karnataka",
      period: "2020 – 2024",
      score: "CGPA 8.6",
      details: []
    }
  ],

  skills: {
    Languages: [
      { name: "Python", icon: "devicon-python-plain colored", level: 85 },
      { name: "Java", icon: "devicon-java-plain colored", level: 78 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 76 },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored", level: 78 }
    ],
    "Backend Development": [
      { name: "Spring Boot", icon: "", level: 78 },
      { name: "Spring MVC", icon: "", level: 76 },
      { name: "Spring Data JPA", icon: "", level: 76 },
      { name: "Hibernate", icon: "", level: 74 },
      { name: "REST APIs", icon: "", level: 80 },
      { name: "Microservices", icon: "", level: 72 }
    ],
    "Core CS": [
      { name: "Object-Oriented Programming", icon: "", level: 78 },
      { name: "Data Structures & Algorithms", icon: "", level: 76 },
      { name: "DBMS", icon: "", level: 78 },
      { name: "Operating Systems", icon: "", level: 72 },
      { name: "Computer Networks", icon: "", level: 78 }
    ],
    "AI & Data": [
      { name: "LLMs", icon: "", level: 78 },
      { name: "RAG", icon: "", level: 78 },
      { name: "Embeddings", icon: "", level: 76 },
      { name: "Vector Databases", icon: "", level: 76 },
      { name: "Prompt Engineering", icon: "", level: 76 },
      { name: "Agentic AI Fundamentals", icon: "", level: 72 }
    ],
    "Network Automation": [
      { name: "Networking", icon: "", level: 82 },
      { name: "Network Automation", icon: "", level: 82 },
      { name: "Python Scripting", icon: "devicon-python-plain colored", level: 84 },
      { name: "YAML / JSON Parsing", icon: "", level: 80 },
      { name: "CDET", icon: "", level: 76 },
      { name: "Testbed Integration", icon: "", level: 76 },
      { name: "PR Automation", icon: "", level: 78 },
      { name: "Shell / CLI Automation", icon: "", level: 78 }
    ],
    "Technologies & Tools": [
      { name: "n8n", icon: "", level: 78 },
      { name: "Pytest", icon: "devicon-pytest-plain colored", level: 78 },
      { name: "Firex", icon: "", level: 70 },
      { name: "JUnit", icon: "", level: 72 },
      { name: "Mockito", icon: "", level: 72 },
      { name: "Spring Security", icon: "", level: 72 },
      { name: "JWT", icon: "", level: 72 },
      { name: "MySQL", icon: "devicon-mysql-plain colored", level: 76 },
      { name: "Linux", icon: "devicon-linux-plain", level: 76 },
      { name: "Git & GitHub", icon: "devicon-git-plain colored", level: 84 },
      { name: "GitHub Copilot", icon: "devicon-github-original", level: 76 },
      { name: "OpenAI Codex", icon: "", level: 70 },
      { name: "Maven", icon: "", level: 74 },
      { name: "Postman", icon: "", level: 76 },
      { name: "HTML5", icon: "devicon-html5-plain colored", level: 78 },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: 76 },
      { name: "PHP", icon: "devicon-php-plain colored", level: 72 }
    ]
  },

  experience: [
    {
      role: "Software Engineer Trainee",
      company: "Cisco Systems",
      period: "Aug 2025 – Aug 2026",
      duration: "1 year",
      logo: "assets/img/cisco-logo.png",
      location: "Bengaluru, Karnataka",
      points: [
        "Architected an AI-assisted Python code documentation workflow using AST/tokenize metadata extraction, LLM-driven comment generation, and Git/GitHub automation, improving documentation accuracy by up to 60% while preserving runtime behavior.",
        "Built deterministic Python pipelines for intent extraction, documentation-gap analysis, comment generation, annotated-file creation, and PR-ready publishing using YAML configuration, CLI orchestration, and structured metadata processing.",
        "Developed automated AST/tokenize-based code analysis to identify missing documentation across functions, classes, logging statements, and Allure steps, generating structured reports for targeted comment generation.",
        "Developed a SIM topology automation framework using Python, PyYAML, YAML/JSON parsing, AP/Sub-AP metadata, testcase topology variants, and CAFY POD/topology JSON inputs to generate simulator-ready configurations.",
        "Automated topology inventory, validation, metadata normalization, and HTML/CSV coverage reporting, reducing manual topology creation and improving consistency across simulator configurations.",
        "Automated end-to-end workflows for AP/Sub-AP detection, generated-file manifests, Git branching, CDET integration, and GitHub PR flows, enabling controlled and review-ready documentation changes.",
        "Integrated Python scripting, Shell/CLI automation, Git/GitHub, networking concepts, and testbed workflows to streamline automation and reduce repetitive manual operations across documentation and SIM topology processes."
      ],
      tech: ["Python", "Java", "Networking", "LLMs", "GitHub", "YAML", "PyYAML", "CDET"]
    }
  ],

  projects: [
    {
      title: "RAG-Based Document Intelligence System",
      category: "AI",
      description:
        "Built February–March 2026, this document Q&A workflow uses n8n, Google Drive, OpenAI embeddings, Pinecone, and GPT-4.1-mini to ingest PDFs and provide semantic, document-grounded answers. Achieved a 68% preliminary implementation evaluation across workflow integration, retrieval configuration, and system reliability.",
      tech: ["n8n", "RAG", "Vector Store", "LLMs", "Embeddings", "OpenAI", "Pinecone", "Git"],
      image: "",
      live: "",
      code: ""
    },
    {
      title: "E-Fy — A Techtainment Book",
      category: "Web",
      description:
        "Built January–May 2024, this KSCST-sponsored web-based event management application provides separate interfaces for students, staff, and coordinators to manage event scheduling, registrations, and participant data. Achieved a 58% preliminary implementation evaluation across functionality, database integration, security, and code quality.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      image: "",
      live: "",
      code: ""
    }
  ],

  achievements: [
    { highlight: "Automation", title: "Cisco Certified Network Associate (CCNA)", detail: "Cisco certification" },
    { highlight: "AI", title: "Cisco Certified AI Technical Practitioner", detail: "Cisco certification" },
    { highlight: "Award", title: "Cisco “Play to Win”", detail: "Recognized for the AI-Assisted Code Documentation Generator project" },
    { highlight: "Research", title: "Qubit research publication", detail: "Published a paper on AI-driven intent-aware code documentation on Cisco's Qubit platform" },
    { highlight: "KSCST", title: "E-Fy — A Techtainment Book", detail: "Received project sponsorship from KSCST" },
    { highlight: "Java", title: "Java Basics certification", detail: "Coding Ninjas (Code 360)" }
  ],

  codingProfiles: [
    {
      platform: "GitHub",
      username: "Sanjana-Kadapatti",
      url: "https://github.com/Sanjana-Kadapatti",
      stat: null,
      statLabel: "",
      extra: "Code repositories and projects",
      progress: 75,
      color: "#C9D1FF"
    }
  ],

  socials: {
    github: "https://github.com/Sanjana-Kadapatti",
    linkedin: "https://www.linkedin.com/in/sanjana-kadapatti-92a793217/",
  },

  formspreeId: ""
};
