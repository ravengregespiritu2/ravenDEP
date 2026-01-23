/**
 * Portfolio Content Structure
 * 
 * PHASE 1: CONTENT AUDIT & PLANNING
 * 
 * Hero Statement:
 * "I'm a full-stack developer building scalable web applications that solve real problems.
 *  Passionate about clean code, user experience, and continuous learning."
 * 
 * THE BIG THREE PROJECTS:
 * 
 * Project 1 - CURRENT SKILL SET: Task Management & Collaboration Platform
 * - Demonstrates: React, Real-time Updates, State Management, UI/UX
 * - Shows: Professional architecture, proper component structure, modern practices
 * - Tech: React, TypeScript, Firebase, Tailwind CSS
 * 
 * Project 2 - WHAT I'VE LEARNED: Full-Stack E-Commerce System
 * - Demonstrates: Growth in backend knowledge, full-stack capabilities
 * - Shows: Server-side logic, database design, payment integration, DevOps thinking
 * - Tech: React, Node.js/Express, MongoDB, Stripe, JWT Auth
 * 
 * Project 3 - FUTURE DIRECTION: AI-Powered Analytics Dashboard
 * - Demonstrates: Interest in ML/AI, data visualization, advanced frontend
 * - Shows: Ability to learn emerging tech, ambition for complex problems
 * - Tech: React, Python/FastAPI, TensorFlow, D3.js, WebSockets
 * 
 * CURRENTLY LEARNING:
 * - Advanced React Patterns (Server Components, Concurrent Features)
 * - Backend Optimization (Database Indexing, Caching Strategies)
 * - Cloud Architecture (Kubernetes, Microservices)
 * - Machine Learning Fundamentals (Python, TensorFlow)
 */

export const portfolioContent = {
  hero: {
    title: "Full-Stack Developer",
    subtitle: "Building scalable web applications that solve real problems",
    description: "I'm passionate about clean code, intuitive user experiences, and continuous growth. With expertise in React and Node.js, I craft end-to-end solutions that make an impact.",
    cta: {
      primary: "View My Work",
      secondary: "Let's Connect"
    }
  },

  bigThreeProjects: [
    {
      id: 1,
      title: "Task Management & Collaboration Platform",
      category: "CURRENT SKILL SET",
      categoryColor: "#6366f1",
      description: "A modern task management tool showcasing React expertise, real-time collaboration, and professional UI/UX. Features team workspaces, task assignments, real-time updates, and detailed progress analytics.",
      longDescription: "This project demonstrates my current proficiency with React and modern frontend practices. It showcases component architecture, state management with Context API, real-time synchronization with Firebase, and responsive design. The application emphasizes user experience with smooth animations and intuitive workflows.",
      features: [
        "Real-time task synchronization across teams",
        "Advanced filtering and search capabilities",
        "Drag-and-drop task organization",
        "Team collaboration with notifications",
        "Progress tracking and analytics dashboard",
        "Mobile-optimized responsive design"
      ],
      technologies: ["React 18", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
      keyAchievements: [
        "Reduced task load time by 40% with optimized rendering",
        "Implemented real-time sync with <100ms latency",
        "Designed accessible interface (WCAG 2.1 AA compliant)"
      ],
      repo: "https://github.com",
      live: "https://demo.example.com",
      image: "📋"
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce System",
      category: "WHAT I'VE LEARNED",
      categoryColor: "#8b5cf6",
      description: "A complete e-commerce platform showcasing full-stack capabilities. Built with React frontend and Node.js backend, featuring product catalog, secure payments, order management, and admin dashboard.",
      longDescription: "This project represents significant growth in my backend knowledge and full-stack development capabilities. It demonstrates understanding of server architecture, database design, authentication, and payment processing. The project shows my ability to work across the entire stack and understand how frontend and backend interact.",
      features: [
        "Secure user authentication with JWT",
        "Product catalog with advanced filtering",
        "Shopping cart with persistent storage",
        "Stripe payment integration",
        "Order history and tracking",
        "Admin dashboard for inventory management",
        "Email notifications for orders"
      ],
      technologies: ["React", "Node.js/Express", "MongoDB", "Stripe", "JWT", "Docker"],
      keyAchievements: [
        "Processed 1000+ successful transactions",
        "99.9% uptime with proper error handling",
        "Implemented PCI compliance for payments",
        "Automated deployment with Docker"
      ],
      repo: "https://github.com",
      live: "https://demo.example.com",
      image: "🛒"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "FUTURE DIRECTION",
      categoryColor: "#ec4899",
      description: "An advanced analytics platform integrating machine learning for predictive insights. Demonstrates ambition to work with AI/ML, data visualization, and handling complex data streams.",
      longDescription: "This project reflects my aspiration to grow into roles involving AI/ML integration and advanced data analysis. It shows I'm actively learning beyond my core skill set and am interested in solving more complex problems. The dashboard combines frontend excellence with backend intelligence.",
      features: [
        "Real-time data streaming and processing",
        "ML-powered trend prediction",
        "Interactive data visualizations",
        "Anomaly detection algorithms",
        "Custom report generation",
        "Predictive analytics with confidence intervals",
        "WebSocket real-time data updates"
      ],
      technologies: ["React", "Python/FastAPI", "TensorFlow", "D3.js", "WebSockets", "PostgreSQL"],
      keyAchievements: [
        "Achieved 92% accuracy in trend predictions",
        "Processed 100K+ data points in <2s",
        "Reduced false positive alerts by 35%",
        "Scaled to handle 50+ concurrent users"
      ],
      repo: "https://github.com",
      live: "https://demo.example.com",
      image: "📊"
    }
  ],

  learningPath: {
    title: "Currently Learning",
    subtitle: "Committed to continuous growth and mastering emerging technologies",
    areas: [
      {
        title: "Advanced React Patterns",
        description: "Diving deep into Server Components, Suspense, and Concurrent Features for next-generation React applications.",
        status: "In Progress",
        resources: ["Next.js Documentation", "React 19 Beta", "Advanced Patterns Course"]
      },
      {
        title: "Backend Optimization",
        description: "Studying database indexing, caching strategies, and query optimization to build lightning-fast backends.",
        status: "In Progress",
        resources: ["Database Design Course", "Redis Mastery", "Query Optimization"]
      },
      {
        title: "Cloud Architecture",
        description: "Learning Kubernetes, microservices architecture, and cloud-native development for scalable systems.",
        status: "In Progress",
        resources: ["Kubernetes for Developers", "AWS Solutions Architect", "Docker Deep Dive"]
      },
      {
        title: "Machine Learning Fundamentals",
        description: "Building foundation in Python, TensorFlow, and ML concepts to integrate AI into future projects.",
        status: "In Progress",
        resources: ["TensorFlow Certification", "Applied ML Course", "Python Advanced"]
      }
    ]
  },

  skills: {
    frontend: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Redux"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "REST APIs"],
    tools: ["Git", "Docker", "GitHub", "VS Code", "Firebase", "Stripe"],
    learning: ["Kubernetes", "FastAPI", "TensorFlow", "D3.js", "GraphQL"]
  }
}
