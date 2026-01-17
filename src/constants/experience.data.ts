export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  link?: string          // Company website
  description: {
    highlight: string   // Key skill / contribution
    text: string        // Details
  }[]
  tech: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: "German Research Centre for Artificial Intelligence (DFKI GmbH)​",
    role: "ML Engineer (Research)​",
    period: "June 2023 - December 2024",
    location: "Saarbruecken, Germany",
    link: "https://www.dfki.de/en/web",
    description: [
      {
        highlight: "Optimization & LLM Fine-Tuning",
        text: "Owned and optimized end-to-end data and model pipelines, fine-tuned LLMs with GPU acceleration and quantization, achieving a 36% BLEU score improvement."
      },
      {
        highlight: "Data Preprocessing",
        text: "Created reproducible preprocessing and data augmentation workflows using Python, Pandas, and NumPy, expanding training data from 90 to 300 documents and enhancing model robustness."
      },
      {
        highlight: "Multi-Output Transformer Architecture",
        text: "Designed a transformer model with 30+ parallel prediction heads, enabling automated generation of structured sign language data for avatar-based rendering."
      },
      {
        highlight: "Model Evaluation, Validation & Hyperparameter Tuning",
        text: "Conducted 10-fold cross-validation across 3 architectures and tokenization strategies to identify optimal hyperparameters, maximizing translation quality."
      },
      {
        highlight: "MLOps, Deployment & CI/CD Automation",
        text: "Deployed containerized ML pipelines using Docker, AWS, and CI/CD, ensuring repeatable experiments, model monitoring, and production-ready training workflows."
      }
    ],
    tech: ["Python", "PyTorch", "Transformers", "NLP", "LLM", "Model Fine-tuning", "Feature Engineering", "Docker", "AWS", "CI/CD"]
  },
  {
    company: "IDnow​",
    role: "Data Engineer",
    period: "March 2022 - March 2023",
    location: "Munich, Germany",
    link: "https://www.idnow.io/",
    description: [
      {
        highlight: "Data Annotation & Quality Improvement",
        text: "Annotated 50,000+ images, improving data quality and consistency for computer vision-based fraud detection models."
      },
        {
        highlight: "Document Modeling & Segmentation",
        text: "Developed Python-based digital document models to convert complex ID layouts into machine-readable formats, achieving 85% validation accuracy."
      },
      {
        highlight: "Synthetic Data Generation",
        text: "Built synthetic training data generators using Python and GIMP to simulate diverse ID security features, addressing data imbalance and improving pipeline robustness."
      },
      {
        highlight: "Cross-Functional Collaboration",
        text: "Worked with ML, QA, and product teams in a Kanban CI environment, supporting testing, validation, and deployment using Git, pytest, and Jenkins."
      }

    ],
    tech: ["Python", "GIMP", "Pytest", "Git"]
  },
  {
    company: "Tata Consultancy Services (TCS)​",
    role: "Junior System Engineer - Data & Analytics",
    period: "December 2017 - September 2019",
    location: "Bangalore, India",
    link: "https://www.tcs.com/",
    description: [
      {
        highlight: "Data Analytics & Visualization",
        text: "Built SQL-based analytics and Power BI dashboards for clinical datasets (100+ patient records), transforming raw data into actionable operational and reporting insights."
      },
      {
        highlight: "Query Optimization & Performance",
        text: "Optimized complex SQL queries and database procedures through improved join logic and indexing, significantly reducing report generation time and improving dashboard responsiveness."
      },
      {
        highlight: "Testing",
        text: "Ensured data integrity and pipeline reliability by implementing unit and integration tests in Java."
      },
      {
        highlight: "Requirements Translation & Documentation",
        text: "Worked closely with business analysts to translate clinical requirements into technical specifications, streamlining data mapping and ensuring accurate end-to-end reporting."
      },
    ],
    tech: ["Java", "SQL", "Power BI", "Data Analytics"]
  }
]
