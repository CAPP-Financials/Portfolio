export const resumeData = {
  personal: {
    name: "PURUSHOTTAM KUMAR",
    role: "Data and Transformation Strategy Associate | Gen AI | Multi-Market CRM",
    email: "kumar.purushottam@outlook.com",
    phone: "+91 8650174548",
    location: "India | Open to relocation with visa sponsorship",
    linkedin: "linkedin.com/in/purushottamkumar-strategy",
    summary: "Strategy and analytics associate (4+ years) with multi-market delivery across 7 Southeast Asian markets and 5,300+ stores. Diagnoses the data, measurement, and incentive failures others miss — delivered 8.2x campaign ROI, $8M incremental revenue over 18 months, $400K annual fraud prevention, and £41K operational waste reframed as P&L leakage at a £500M UK retailer. Bridges consulting frameworks with production AI/RAG systems. MBA, Swansea University (2025).",
  },
  experience: [
    {
      company: "Independent Practice",
      role: "Freelance Consulting — Strategy & Gen-AI",
      location: "Remote, India",
      period: "Jan 2026 – Present",
      achievements: [
        "Operating as independent strategy + Gen-AI consultant; productised end-to-end enterprise AI architecture patterns into 10xConsulting — multi-agent strategy diagnostic platform on Claude + OpenAI + RAG.",
        "Continuing IIT Patna Executive Certificate in Generative AI — deepening LLM architecture, RAG, multi-agent orchestration, and production-AI deployment.",
      ]
    },
    {
      company: "EasyRewardz Software Services Pvt. Ltd.",
      role: "Associate — Strategy & Analytics Consultant",
      location: "Gurugram, India",
      period: "Jun 2022 – Aug 2024",
      context: "Client: 150-year-old global footwear brand. Scope: 7 SE Asian markets, 5,300+ stores, 10–12M customers.",
      achievements: [
        "Led multi-market loyalty programme transformation across 7 SE Asian markets — delivered 8.2x campaign ROI and $8M incremental revenue over 18 months.",
        "Cut customer churn 6% across a 1,600-store network ($2.3M retention value) deploying a predictive segmentation model.",
        "Eliminated O(N²) computational bottleneck serving 10–12M customers (45min → 7min, $180K annual compute savings).",
        "Engineered multi-layer loyalty fraud detection engine preventing $400K+ annual revenue leakage.",
        "Developed proxy-based market entry methodology for markets with zero usable baseline data using India demographics as proxies.",
        "Improved marketing efficiency 40% across a multi-brand portfolio by restructuring campaign targeting."
      ]
    },
    {
      company: "Convergytics Solutions Pvt. Ltd.",
      role: "Business Consultant (Analytics)",
      location: "Bangalore, India",
      period: "Dec 2021 – May 2022",
      context: "Client: Dell Technologies. Scope: B2B enterprise sales analytics, lead propensity modelling.",
      achievements: [
        "Redesigned lead propensity model to action-oriented ranking aligned to sales rep capacity — drove 20% conversion uplift and $1.2M incremental quarterly revenue.",
        "Embedded capacity-aware tiered ranking (A/B/C buckets) directly into CRM and Power BI dashboards.",
        "Automated fragmented ETL pipelines — consolidated dispersed SQL into parameterised stored procedures saving 42 hours/week."
      ]
    },
    {
      company: "APCER Life Sciences India Pvt. Ltd.",
      role: "MIS Business Analyst",
      location: "Greater Noida, India",
      period: "Apr 2021 – Oct 2021",
      achievements: [
        "Reduced compliance reporting errors 12% (preventing $200K+ audit penalties) by automating cross-referencing of regulatory datasets.",
        "Transformed monthly regulatory report generation from 3 days to 4 hours through process engineering."
      ]
    }
  ],
  projects: [
    {
      title: "10xConsulting — Enterprise Strategy Diagnostic Platform",
      type: "Public",
      context: "IIT Patna GenAI Capstone (Shipped Q2 2026)",
      details: [
        "Architected 3-agent pipeline (Claude → OpenAI → Claude) with RAG via Supabase pgvector.",
        "Live deployment with Next.js, n8n webhook orchestration, and automated evaluation.",
        "Build-in-public log available on LinkedIn (#IITPatnaCapstone)."
      ],
      github: "https://github.com/purushottam/10xconsulting", // Placeholder, will indicate it's public
      isPublic: true
    },
    {
      title: "Sustainability ROI Diagnostic (Major Automotive Retailer)",
      type: "Private",
      context: "Strategic Capstone | Tier-1 Regional Automotive Retail Group",
      details: [
        "Diagnosed systemic operational waste, reframing financial leakage previously misattributed to employee engagement.",
        "Constructed integrated 5-layer diagnostic interpreting Lean, RBV, Agency Theory.",
        "Translated ESG data into a financial reframing that achieved 200% projected ROI within a 12-month transformation roadmap."
      ],
      isPublic: false
    },
    {
      title: "Enterprise RAG Pipeline",
      type: "Public",
      context: "Production GenAI System",
      details: [
        "Architected end-to-end RAG system (LangChain, Pinecone, GPT-4) improving query relevance 40%.",
        "Designed semantic chunking strategy, hybrid retrieval, and containerised production deployment."
      ],
      github: "https://github.com/purushottam/enterprise-rag-pipeline",
      isPublic: true
    },
    {
      title: "Automated Data Quality Agent",
      type: "Public",
      context: "Multi-Agent System",
      details: [
        "Designed autonomous multi-agent system reducing QA cycles from 3 days to 4 hours with 95% anomaly detection accuracy.",
        "Specialised agents for schema validation, referential integrity, and business rule verification orchestrated via LangGraph."
      ],
      github: "https://github.com/purushottam/data-quality-agent",
      isPublic: true
    }
  ],
  education: [
    {
      degree: "MBA — Sustainability & Innovation",
      institution: "Swansea University, Wales, UK",
      year: "2024 – 2025",
      details: "Capstone: Sustainability ROI Diagnostic for £500M UK automotive retailer (Sinclair Group)."
    },
    {
      degree: "Executive Certificate in Generative AI",
      institution: "IIT Patna",
      year: "2025 – Present",
      details: "Focus: LLM architecture, RAG systems, multi-agent orchestration."
    },
    {
      degree: "PG Diploma — Data Science (Data Engineering)",
      institution: "IIIT Bangalore",
      year: "2020 – 2021",
      details: "Focus: Machine learning, statistical modelling, data engineering pipelines."
    },
    {
      degree: "B.Tech — Electrical Engineering",
      institution: "DIT University",
      year: "2015 – 2019",
      details: ""
    }
  ],
  skills: [
    { category: "Strategy & Transformation", items: ["Operational Diagnostics", "Financial Modelling", "ROI Optimisation", "Stakeholder Alignment", "Multi-Framework Analysis", "Transformation Roadmapping"] },
    { category: "Digital & AI", items: ["Enterprise AI Architecture", "Retrieval-Augmented Generation (RAG)", "Multi-Agent Systems", "Prompt Engineering", "MLOps", "LLM Strategy"] },
    { category: "Analytics & Data Science", items: ["Predictive Analytics", "Customer Segmentation", "A/B Testing", "Fraud Detection & Prevention", "Spark UI Profiling"] },
    { category: "Technical", items: ["Python", "SQL", "PySpark", "LangChain", "LangGraph", "Delta Lake", "Pinecone", "Power BI", "Docker", "AWS / Azure"] }
  ]
};
