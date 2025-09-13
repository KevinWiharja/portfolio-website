import { 
  BrainCircuit,
  Network,
  GitBranch,
  Workflow,
  Database, 
  Users
} from 'lucide-react';

export const projects = [
  {
    title: "ML Training Automation",
    // description: "Deep reinforcement learning system for drone path planning in complex environments using PPO and custom reward functions.",
    longDescription: "Developed a healthcare prediction system that classifies obesity categories with 94% accuracy using XGBoost, advanced preprocessing, and GridSearchCV optimization. Deployed through an interactive Streamlit app connected to FastAPI and PostgreSQL, the system allows real-time user input while featuring an autonomous retraining pipeline that updates the model every 100 entries, ensuring continuous improvement without human intervention.",
    tags: ["Scikit-learn", "XGBoost", "Streamlit", "PostgreSQL", "FastAPI", "Pickle"],
    metrics: { model:"XGBoost", accuracy:"97%", operation:"End-to-end" },
    github: "https://github.com/KevinWiharja/ML_Training_Automation",
    // demo: "#",
    featured: true
  },
  {
    title: "AI Chatbot",
    // description: "Transformer-based model for 3D medical image analysis achieving state-of-the-art accuracy in tumor detection.",
    longDescription: "Developed an intelligent chatbot on the Discord platform by integrating Google Gemini API for natural language understanding and n8n for workflow automation. The system automatically fetches and processes chat messages, manages prompts dynamically, and delivers real-time, context-aware responses. The project involves API integration and conversational AI deployment on a live communication platform.",
    tags: ["n8n", "Docker", "API", "Discord", "Javascript"],
    metrics: { platform: "Discord", API: "Google Gemini", tools:"n8n"},
    github: "https://github.com/KevinWiharja/Discord-AI-Chatbot",
    // demo: "#",
    featured: true
  }
  // {
  //   title: "AI-Powered Code Assistant",
  //   description: "LLM-based tool that suggests code improvements, detects vulnerabilities, and automates code reviews.",
  //   longDescription: "Created an intelligent code assistant that helps developers write better code. The system uses fine-tuned LLMs to provide contextual suggestions, detect security vulnerabilities, and automate code reviews.",
  //   tags: ["LLMs", "FastAPI", "React", "Code Analysis", "Security"],
  //   metrics: { bugs: "85% reduction", time: "40% faster", users: "500+" },
  //   github: "https://github.com/aidev/code-assistant",
  //   demo: "#",
  //   featured: false
  // }
];

export const experience = [
  {
    role: "System Analyst",
    company: "IT Division Bina Nusantara",
    period: "2025 - Present",
    description: "Focus on analyzing and optimizing IT systems. Supporting the system development process to deliver efficient solutions.",
    achievements: [
      "Standardized and maintained the data dictionary to ensure consistency",
      "Designed mockups using Figma for system improvements",
      "Created and executed detailed test cases to validate system functionality",
      "Queried relational databases using SQL to support data-driven decisions",
      "Developed and maintained system documentation for project delivery"
    ],
    technologies: ["SQL Server", "Figma", "Visio", "Spreadsheet", "Docs"]
  },
  {
    role: "Undergraduate Student",
    company: "Bina Nusantara University",
    period: "2023 - Present",
    description: "Undergraduate Data Science student with a strong interest in Python Programming and Machine Learning.",
    achievements: [
      "Developed multiple Machine Learning and Deep Learning models using Scikit-learn and Tensorflow",
      "Built interactive data applications with Streamlit for real-time model deployment",
      "Implemented efficient data pipelines with Pandas and SQL for preprocessing, feature engineering, and ETL workflows",
      "Actively participated in the Data Science Club, collaborating on events and knowledge-sharing sessions"
    ],
    technologies: ["Numpy", "Pandas", "Scikit-learn", "XGBoost", "Tensorflow", "PySpark", "Streamlit", "AWS", "R", "SQL"]
  }
];

export const skills = [
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Deep Learning", icon: Network },
  { name: "SQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "DevOps", icon: Workflow },
  { name: "Teamwork", icon: Users }
];

export const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "CTO at MedTech Innovations",
    content: "Alex's work on medical image segmentation was groundbreaking. His solution is now helping doctors save lives in our partner hospitals.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Lead Developer at TechCorp",
    content: "The AI code assistant Alex built has transformed our development workflow. Code quality improved by 40% and bugs reduced significantly.",
    rating: 5
  },
  {
    name: "Prof. Elena Rodriguez",
    role: "Stanford University",
    content: "Alex is one of the most talented researchers I've worked with. His contributions to quantum ML are truly innovative.",
    rating: 5
  }
];

export const typingTexts = [
  "Data Enthusiast",
  "Undergraduate Student",
  "Future AI Engineer"
];
