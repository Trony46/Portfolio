// ─────────────────────────────────────────────────────────
// resume.js — THE ONLY FILE YOU EDIT FOR CONTENT CHANGES
// Add a skill? Edit here. New project? Add an object here.
// ─────────────────────────────────────────────────────────

const resume = {

  // ── Personal ──────────────────────────────────────────
  name: "Ashmit Shaw",
  tagline: "Backend Developer",
  subtitle: "Java · Spring Boot · SQL · Data Science",
  about:
    "3rd-year B.Tech CSE (Data Science) student at SRM IST, building backend systems that handle real data at real scale. I care about clean REST APIs, normalized schemas, and code that's easy to reason about.",

  // ── Links ─────────────────────────────────────────────
  email: "ashmitshaw960@gmail.com",
  phone: "+91 70592 76072",
  github: "https://github.com/Trony46",
  linkedin: "https://linkedin.com/in/ashmitshaw",
  leetcode: "https://leetcode.com/u/ashmit_46",

  // ── Skills ────────────────────────────────────────────
  // To add a category: add a new key. To add a skill: add to the array.
  skills: {
    Languages:   ["Java", "SQL"],
    Frameworks:  ["Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security", "Redis"],
    Databases:   ["PostgreSQL", "MySQL"],
    Tools:       ["Docker", "Git", "Maven", "Postman", "Power BI"],
    Concepts:    ["RESTful API Design", "Relational DB Modeling", "OOP", "DSA"],
  },

  // ── Projects ──────────────────────────────────────────
  // featured: true → gets the accent card treatment (use for your best project)
  projects: [
    {
      title: "PulsePoint",
      subtitle: "Real-Time IoT Telemetry & Alert Engine",
      description:
        "A production-grade RESTful backend for ingesting, persisting, and querying telemetry data from physical systems (vehicles, sensors). Features a synchronous rules-based alert engine, Redis caching, Spring Security API key auth, and a fully containerised stack via Docker Compose.",
      tech: ["Java 17", "Spring Boot 3.3", "PostgreSQL", "Spring Data JPA", "Hibernate", "Spring Security", "Redis", "Docker"],
      highlights: [
        "Compound index on (source_id, metric, timestamp) — query complexity O(n) → O(log n)",
        "Alert engine evaluates GT / LT / EQ thresholds on every ingest, triggers severity tags instantly",
        "Redis @Cacheable / @CacheEvict replacing repeated DB round-trips with millisecond RAM reads",
        "Custom OncePerRequestFilter — per-source API key auth validated against source ownership",
      ],
      github: "https://github.com/Trony46",
      live: null,
      featured: true,
    },
    {
      title: "SQL Data Engineering",
      subtitle: "Global Layoffs Dataset",
      description:
        "Advanced SQL data cleaning and analytics pipeline on a real-world global layoffs dataset. Built a deduplication pipeline, date normalization, and DENSE_RANK ranking queries from scratch using only MySQL.",
      tech: ["MySQL", "CTEs", "Window Functions", "MySQL Workbench"],
      highlights: [
        "ROW_NUMBER() + CTEs to deduplicate across composite keys — improved dataset integrity",
        "Standardized 2,000+ inconsistent date records via STR_TO_DATE() for chronological aggregations",
        "DENSE_RANK() queries ranking companies by layoff volume per year, surfacing sector outliers",
      ],
      github: "https://github.com/Trony46",
      live: null,
      featured: false,
    },
  ],

  // ── Experience ────────────────────────────────────────
  experience: [
    {
      role: "Instructor — Fundamentals of AI & Data Science",
      org: "Katadanga North Janata Arya Vidyalaya",
      type: "Volunteering",
      location: "North 24 Parganas, West Bengal",
      period: "Jun 2025",
      points: [
        "Conducted weekly AI and Data Science sessions for Class 8–10 students",
        "Designed structured lesson plans collaboratively with the school's science faculty",
      ],
    },
    {
      role: "Data Visualisation Virtual Job Simulation",
      org: "Tata / Forage",
      type: "Virtual Experience",
      location: "Remote",
      period: "Feb 2025 – Apr 2025",
      points: [
        "End-to-end data viz simulation: business scenario framing, visual selection, dashboard creation",
        "Communicated data insights to simulated executive stakeholders",
      ],
    },
  ],

  // ── Education ─────────────────────────────────────────
  education: [
    {
      degree: "B.Tech — Computer Science and Engineering (Data Science)",
      school: "SRM Institute of Science and Technology",
      score: "CGPA: 8.47 / 10",
      year: "2023 – 2027",
    },
    {
      degree: "Class XII — ISC · Mathematics, Physics, Chemistry",
      school: "St. Augustine's Day School, Shyamnagar",
      score: "74%",
      year: "2023",
    },
    {
      degree: "Class X — ICSE · Science",
      school: "St. Augustine's Day School, Shyamnagar",
      score: "85.3%",
      year: "2021",
    },
  ],

};

export default resume;
