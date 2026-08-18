// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit this file to update your info: every section reads from here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Richa Jha",
  // Titles she's actually held / is applying for. Keep this to real job titles,
  // not aspirational ones (e.g. no "ML Engineer" since that wasn't her title).
  roles: ["Software Engineer", "Data Engineer", "Full-Stack Developer"],
  photo: "/profile.jpg",
  location: "Raleigh, North Carolina",
  email: "richajha749@gmail.com",
  phone: "+1 (984) 382-0842",
  github: "https://github.com/Rj-2171",
  linkedin: "https://linkedin.com/in/-richa-jha",
  resumeUrl: "/resume.pdf",
  availability: "Open to SWE, Data, ML/AI & TPM roles",
  summary:
    "Computer Science master's student at NC State with three years of hands-on experience in software engineering and data engineering at Deloitte and HighRadius. I've worked across Python, Java, SQL, ML and React, and explored LLM and RAG, and computer vision through academic and personal projects.",
  tagline:
    "I build data-driven products end to end, from ETL pipelines and backend APIs to ML models and the interfaces around them.",
  // Shown in About: she's open to SWE/data/ML/AI roles at any level (not just new grad,
  // given 3 years at Deloitte) and is also exploring technical product management,
  // building on her experience leading/collaborating with cross-functional teams
  // at Deloitte. The AI PM and IBM AI Developer certifications were pursued to
  // understand how AI products actually get built and shipped, not as random extras.
  pmNote:
    "Also exploring Technical Product Management, building on the cross-functional collaboration and mentoring experience I gained at Deloitte. I picked up the Microsoft AI Product Manager and IBM AI Developer certifications to better understand how AI products actually get designed, built, and shipped.",
};

// Short, high-impact numbers shown in the hero stats strip.
export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Shipped", value: "6" },
  { label: "Certifications", value: "10" },
  { label: "Companies", value: "3" },
];

// Companies shown as a quick-credibility badge strip under the hero.
// Keep this to actual employers so it lines up with the "Companies" stat above.
export const companies = ["Deloitte", "HighRadius", "PrepEase"];

export const education = [
  {
    school: "North Carolina State University",
    degree: "Master of Computer Science",
    location: "Raleigh, NC",
    period: "Aug 2025 to May 2027",
    detail: "GPA: 3.61 / 4.0",
  },
  {
    school: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "B.Tech in Information Technology",
    location: "India",
    period: "Jul 2018 to May 2022",
    detail: "CGPA: 9.07 / 10",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Deloitte",
    period: "Jun 2022 - Jul 2025",
    points: [
      "Designed and automated ETL pipelines using Python, PySpark, SQL, Databricks, Informatica, AWS, and Power BI, cutting manual effort by more than 400 hours a year and improving data quality and timeliness.",
      "Led client discussions and cross-team conversations with in-house and client stakeholders to prioritize the backlog, run Agile sprints, and communicate data risks and dependencies.",
      "Completed Deloitte's AI Academy certification and started applying AI/ML techniques to some of the team's data workflows.",
      "Mentored new team members on coding practices, documentation, and quality standards.",
    ],
    tags: ["Python", "PySpark", "SQL", "Databricks", "Informatica", "AWS", "Power BI", "AI/ML"],
  },
  {
    role: "Software Engineer Intern",
    company: "HighRadius",
    period: "Jan 2021 - May 2022",
    points: [
      "Built an AI-enabled B2B accounts receivable application end to end, automating data analysis and cutting collection cycle time by 45%.",
      "Implemented backend services in Java and SQL, and built frontend features in React.js for invoice processing workflows.",
    ],
    tags: ["Java", "SQL", "React.js"],
  },
  {
    role: "Backend Developer Intern",
    company: "PrepEase",
    period: "Apr 2020 - May 2020",
    points: [
      "Built backend APIs using Node.js and MongoDB for an online examination platform supporting 50+ concurrent users.",
      "Added features such as question uploads, test cards, countdown timers, and live video class integration.",
    ],
    tags: ["Node.js", "MongoDB"],
  },
];

export const projects = [
  {
    title: "Satellite Image Classification",
    subtitle: "Vegetation vs. Built-Up Land",
    year: "2026",
    description:
      "Designed, trained, and evaluated a CNN with batch normalization on 16,000 EuroSAT satellite images to classify vegetation versus built-up land, reaching 93.3% test accuracy as lead contributor on a 3-person team.",
    tags: ["Python", "PyTorch/TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com/NCSU-NNDL-Spring26/ProjectFinal-team24",
  },
  {
    title: "SafeBites",
    subtitle: "AI Allergen Detection & Food Search Platform",
    year: "2025",
    description:
      "Built backend REST APIs (FastAPI, MongoDB) for an AI-powered food search platform with a 4-person team, integrating LangGraph, LangChain, FAISS, and RAG-based semantic search to flag allergens in restaurant menus.",
    tags: ["FastAPI", "MongoDB", "LangGraph", "LangChain", "FAISS", "RAG"],
    github: "https://github.com/Rj-2171/SE-Safebites",
  },
  {
    title: "Micro-Learning Platform",
    subtitle: "NC State WiCS x Fidelity Investments",
    year: "2026",
    description:
      "Selected from around 100 applicants for this Fidelity Investments-sponsored micro-learning platform team. Built Java backend REST APIs (Spring Boot, PostgreSQL) with JWT authentication, using a modular architecture and a team GitHub workflow.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    github: "https://github.com/Rj-2171/Micro-Learning-App",
  },
  {
    title: "IoT Analytics",
    subtitle: "Weather Time-Series Forecasting",
    year: "2026",
    description:
      "Built a data pipeline on 4 years of NOAA weather data and benchmarked forecasting models (AR, Exponential Smoothing) against ML models (ANN, DBSCAN, HMM); ANN performed best with an RMSE around 2.2°F.",
    tags: ["Python", "Time Series", "ANN", "DBSCAN", "HMM"],
    github: "https://github.com/Rj-2171/Weather-Time-Series-Forecasting/tree/main",
  },
  {
    title: "AI B2B Invoice Management Application",
    subtitle: null,
    year: "2021",
    description:
      "Built an end-to-end ML model and a React.js frontend to predict invoice payment dates from historical invoice and payment data, achieving about 80% accuracy on a Java-SQL backend.",
    tags: ["Java", "SQL", "React.js", "Machine Learning"],
    github: null,
  },
  {
    title: "Employment Site",
    subtitle: "Job Portal Web App",
    year: "2019",
    description:
      "A full-stack job portal built with Node.js and Express, using MongoDB (via Mongoose) for data, Passport.js for login and authentication, and Cloudinary for image uploads.",
    tags: ["Node.js", "Express", "MongoDB", "Passport.js"],
    github: "https://github.com/Rj-2171/Employment-site",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript", "SQL"],
  },
  {
    category: "AI, ML & Data Science",
    items: [
      "Machine Learning",
      "LLMs",
      "RAG",
      "Statistics",
      "Data Science",
      "Artificial Intelligence",
      "Data Analysis",
      "Data Visualization",
      "Power BI",
    ],
  },
  {
    category: "Databases & Data Engineering",
    items: [
      "MongoDB",
      "PostgreSQL",
      "PySpark",
      "Azure Databricks",
      "ETL Development",
      "Data Modeling",
      "Database Management",
    ],
  },
  {
    category: "Web Development",
    items: ["React.js", "Node.js", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git",
      "AWS",
      "API Development",
      "Software Development",
      "Agile Methodologies",
      "Human-Computer Interaction",
      "Microsoft Excel",
    ],
  },
];

// Kept intentionally uniform (name + year only, no description) so all
// certifications read consistently instead of only some having detail text.
export const certifications = [
  { name: "IBM AI Developer Professional Certificate", year: "2026" },
  { name: "Microsoft AI Product Manager Professional Certificate", year: "2026" },
  { name: "Deloitte AI Academy", year: "2022" },
  { name: "Coursera: Artificial Intelligence", year: "2020" },
  { name: "Cloud Computing Basics", year: "2020" },
  { name: "RCPL Python", year: "2020" },
  { name: "HackerRank C++", year: "2020" },
  { name: "Google Hash Code", year: "2020" },
  { name: "Full Stack Web Development", year: "2019" },
  { name: "Introduction to Python", year: "2020" },
];

export const achievements = [
  "Deloitte Spot Award (2022) for outstanding contributions to the firm.",
  "Deloitte Applause Award (2024) for outstanding contributions to the firm.",
  "Won Most Voted Software Engineering Project (2025) for SafeBites.",
  "Mentored new engineers at Deloitte on coding practices and quality standards.",
];
