export const resumeData = {
  personal: {
    name: "PURUSHOTTAM KUMAR",
    role: "Data and Transformation Strategy Associate | Gen AI | Multi-Market CRM",
    email: "kumar.purushottam@outlook.com",
    phone: "+91 8650174548",
    location: "India | Open to global opportunities",
    linkedin: "linkedin.com/in/purushottamkumar-strategy",
    summary: "Strategy and analytics associate (4 years) with multi-market delivery across 7 Southeast Asian markets and 5,300+ stores. Diagnoses the data, measurement, and incentive failures others miss — delivered 8.2x campaign ROI, $8M incremental revenue over 18 months, $400K annual fraud prevention, and £41K operational waste reframed as P&L leakage at a £500M UK retailer. Builds AI systems alongside the consulting work (data-quality agents, retrieval pipelines, claim substantiation), all on synthetic data and labelled as such. MBA, Swansea University (2025).",
  },
  experience: [
    {
      company: "Independent Practice",
      role: "Freelance Consulting — Strategy & Gen-AI",
      location: "Remote, India",
      period: "Jan 2026 – Present",
      achievements: [
        "Operating as independent strategy + Gen-AI consultant; productised end-to-end enterprise AI architecture patterns into 10xConsulting — a live, hypothesis-first AI strategy diagnostic built on Claude agents, Supabase and Next.js.",
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
        "Cut customer churn 6% across 1,600+ stores ($2.3M retention value) by running statistical analysis on the full customer dataset before building customer-centricity cohorts and market-mix models.",
        "Cut the daily customer persona engine from 45 to 7 minutes and compute cost 70% ($180K a year) by rebuilding it in Python and PySpark.",
        "Designed a finance-validated loyalty fraud-detection system (rules plus gradient-boosted anomaly scoring) that contained fraud within 2% of revenue and preserved $400K+ annually.",
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
        "Cut reported errors and escalations 34%+ and report-generation time 83% via VBA batch-consolidation of compliance documents."
      ]
    }
  ],
  projects: [
    {
      title: "10xConsulting — Hypothesis-First AI Strategy Diagnostic",
      type: "Live",
      context: "Independent build, live since 2026 (source repository is private)",
      details: [
        "Claude-based agents behind a free, no-login diagnostic, with Supabase (Postgres and pgvector) and Next.js on Vercel.",
        "Built by directing an AI coding agent and verifying against 449 tests; design validated with synthetic personas, not paying clients."
      ],
      live: "https://10xconsulting-dusky.vercel.app",
      isPublic: true
    },
    {
      title: "VeriGreen — ESG Claim Substantiation",
      type: "Public",
      context: "AI-assisted build on synthetic data; not validated on real reports",
      details: [
        "Three independent Claude extraction passes with disagreement escalation, GRI and SASB mapping, and a human review queue in a multi-tenant app.",
        "140 ML-service tests with a mocked model; the web app has no automated tests yet."
      ],
      github: "https://github.com/CAPP-Financials/verigreen",
      isPublic: true
    },
    {
      title: "LangGraph Data Quality System",
      type: "Public",
      context: "Multi-agent system, synthetic data",
      details: [
        "Five-agent state machine for profiling, validating and remediating data: 42 deterministic rules, no model in the validation path.",
        "Two-key routing applies only high-confidence fixes automatically and sends the rest to human review; 187 tests pass."
      ],
      github: "https://github.com/CAPP-Financials/langgraph-dq-system",
      isPublic: true
    },
    {
      title: "Enterprise RAG Pipeline",
      type: "Public",
      context: "Retrieval pipeline with evaluation harness, synthetic documents",
      details: [
        "Semantic chunking, BM25 plus dense hybrid retrieval, query expansion on LangGraph, and RAGAS evaluation.",
        "123 tests with a mocked LLM; the targeted relevance improvement has not been measured."
      ],
      github: "https://github.com/CAPP-Financials/enterprise-rag-pipeline",
      isPublic: true
    },
    {
      title: "HackerRank Orchestrate — Buy or Wait?",
      type: "Public",
      context: "24-hour hackathon, September 2026",
      details: [
        "Deterministic forecasting and planning core decides whether a user can safely afford a purchase; Claude is used only to extract facts from receipts and messages.",
        "250 of 250 rows generated with no invariant violations; 17 of 25 public samples matched exactly."
      ],
      github: "https://github.com/CAPP-Financials/hackerrank-orchestrate-september26",
      isPublic: true
    },
    {
      title: "Sustainability ROI Diagnostic (Major Automotive Retailer)",
      type: "Private",
      context: "MBA capstone | UK automotive retail group, £500M revenue",
      details: [
        "Diagnosed systemic operational waste, reframing financial leakage previously misattributed to employee engagement.",
        "Constructed integrated 5-layer diagnostic interpreting Lean, RBV, Agency Theory.",
        "Translated ESG data into a financial reframing that achieved 200% projected ROI within a 12-month transformation roadmap."
      ],
      isPublic: false
    }
  ],
  education: [
    {
      degree: "MBA — Sustainability & Innovation",
      institution: "Swansea University, Wales, UK",
      year: "2024 – 2025",
      details: "Capstone: Sustainability ROI Diagnostic for a £500M UK automotive retail group."
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
    { category: "Digital & AI", items: ["Enterprise AI Architecture", "Retrieval-Augmented Generation (RAG)", "Multi-Agent Systems", "Prompt Engineering", "LLM Strategy"] },
    { category: "Analytics & Data Science", items: ["Predictive Analytics", "Customer Segmentation", "A/B Testing", "Fraud Detection & Prevention", "Spark UI Profiling"] },
    { category: "Technical", items: ["Python", "SQL", "PySpark", "Pandas", "scikit-learn", "LangGraph", "LangChain", "Supabase", "Power BI", "n8n", "Trigger.dev"] }
  ]
};
