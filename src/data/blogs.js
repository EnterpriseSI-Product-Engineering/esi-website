export const blogs = [
  {
    slug: "agentic-ai-playground-bfsi-fintech",
    title:
      "Introducing Our Agentic AI Playground for Accelerating Your BFSI/Fintech Enterprise's Journey Towards an AI-Native, AI-First Workforce",
    excerpt:
      "How EnterpriseSI's Agentic AI Builder Playground helps Banking, Financial Services, Insurance and Fintech enterprises build an AI native, AI first workforce and move towards autonomous business process management.",
    date: "24th Sep 2026",
    category: "Agentic AI",
    gradient: "from-[#9333ea] to-[#1569a9]",
    content: [
      {
        type: "heading",
        text: "The AI Adoption Challenge for BFSI/Fintech Sector",
      },
      {
        type: "paragraph",
        text: "Banking, Financial Services, Insurance/Fintech Enterprises face multiple challenges, risks & hurdles on AI adoption due to regulatory & internal compliance & security considerations.",
      },
      {
        type: "paragraph",
        text: "Due to this, the BFSI/Fintech Industry has been a slower adopter of the transformative capabilities of AI.",
      },
      {
        type: "subheading",
        text: "What BFSI/Fintech Enterprises Are Looking For",
      },
      {
        type: "paragraph",
        text: "In the last 3 months, we have been approached by over 5 leading BFSI & Fintech players on helping setup AI Innovation initiatives on Autonomous Agentic AI driven Banking operations & Agentic Software development for assistance on:",
      },
      {
        type: "list",
        style: "lower-alpha",
        items: [
          "Building a team of Tech and Business SMEs skilled on the latest Enterprise relevant AI innovations, use cases & technologies.",
          "Developing an external AI sandbox system where they can experiment with learning and prototype with applying the latest AI technologies to banking use cases/business processes to showcase to business — the Art of the Possible on Autonomous Agentic Banking operations with Human-in-the-loop. They want to experiment with applying various Agent Governance practices in our sandbox on Agents across their lifecycle, ascertain risks and mitigation strategies.",
          "Developing, deploying & operating software apps with AI SDLC Assistants enabling agent teams/agent swarms to assist in software development.",
        ],
      },
      {
        type: "subheading",
        text: "Select Profiles of Such Enterprises",
      },
      {
        type: "list",
        style: "decimal",
        items: [
          "A UK based mid sized Bank",
          "A North America based mid sized Bank",
          "A EMEA based leading Global Bank",
          "Two Fintech Product Enterprises",
        ],
      },
      {
        type: "heading",
        text: "How Our Agentic AI Playground Helps in Supporting AI Acceleration Initiatives",
      },
      {
        type: "paragraph",
        text: "The Agentic AI Builder Playground addresses the above requirements via:",
      },
      {
        type: "list",
        style: "decimal",
        bold: true,
        items: [
          "Providing Learner labs with AI tooling & AI-Cloud Infra to learn implementation & architectural considerations, development workflows of latest Enterprise relevant AI Technologies.",
          "Providing Learner labs on Domain AI Agents covering various business processes/use cases, paired with our Agentic Digital Twin/core business applications backend.",
          "Providing Sandbox system for experimenting and prototyping with pre-defined (Standard and customized) BFSI/Fintech Apps backend.",
          "Delivering Expert led AI Forward Deployed Engineer & AI Business Operator programs with hands-on labs, illustrated study notes & assessments delivered from our platform.",
        ],
      },
      {
        type: "heading",
        text: "We Also Provide",
      },
      {
        type: "list",
        style: "disc",
        bold: true,
        items: [
          "AI Coaching Service for assisting Sr leaders & mid level managers working in BFSI/Fintech Sector on various AI Initiatives & supporting their knowledge/subject matter needs.",
          "AI staffing providing remote Forward Deployed Engineers and fully operational AI Engineering/AI Project teams.",
        ],
      },
      {
        type: "contact",
        text: "To learn more about our AI Acceleration offerings for BFSI/Fintech Sector and setup a demo cum discussion, please contact us at",
        emails: ["sales@enterprisesi.co", "bd@enterprisesi.co"],
        phone: "+91 9513935375",
      },
      {
        type: "heading",
        text: "The AI Labs Ecosystem, Applied to BFSI Use Cases",
      },
      {
        type: "feature",
        title: "Learner Labs",
        text: "Guided, self-paced labs (30–120 min) with pre-configured tools and business scenarios. The existing lab content already includes directly relevant building blocks: RAG pipeline construction and document summarization (both core to processing policy documents, KYC files, and financial disclosures), plus cloud fundamentals (AWS S3, IAM) needed for handling sensitive financial data securely.",
      },
      {
        type: "feature",
        title: "Builder Labs",
        text: "Full AI Agent and RAG-builder environment for real business use cases; the sample use cases listed — GST invoice automation, HR onboarding, financial auditing — map directly onto BFSI back-office pain points: invoice/expense processing, employee onboarding compliance, and audit trail generation. Models, memory, vector stores, and APIs are pre-provisioned so teams build agent logic rather than infrastructure, and one-click sandbox deployment lets a use case be tested without pulling in DevOps or touching production core systems.",
      },
      {
        type: "feature",
        title: "Administration & Analytics",
        text: "Gives risk, compliance, and L&D leaders the audit-style visibility BFSI governance requires: who's been trained on what, which labs and assessments are active, usage and adoption data to demonstrate AI transformation ROI to internal risk committees or regulators.",
      },
      {
        type: "heading",
        text: "How It Works",
      },
      {
        type: "list",
        style: "decimal",
        bold: true,
        boldPrefix: true,
        items: [
          "Subscription — Enterprise purchases seats.",
          "Onboarding — Users placed into role-based learning paths (e.g., risk, compliance, engineering, ops).",
          "Assignment — Fresh labs/assessments assigned monthly.",
          "Monitoring — Progress tracked as skill scores and usage analytics, visible to admins in real time.",
          "Impact — Continuous practice raises skill scores and production-readiness before agents touch live systems.",
        ],
      },
      {
        type: "heading",
        text: "Roles Covered",
      },
      {
        type: "tags",
        items: [
          "Agentic AI Architect",
          "Agentic AI Engineer",
          "Forward Deployed Engineer",
          "AI-SDLC Engineer",
          "AI Strategist",
          "AI Business Consultant",
        ],
      },
      {
        type: "paragraph",
        text: "Covering both the technical build (architects/engineers) and the governance/adoption side (strategists/consultants) that BFSI transformation typically needs both of.",
      },
      {
        type: "heading",
        text: "Tooling Included",
      },
      {
        type: "tags",
        items: [
          "AWS",
          "Python",
          "Jupyter",
          "VS Code",
          "LangFlow",
          "Git/CI-CD",
          "Amazon Bedrock",
          "OpenAI",
          "Kubernetes",
          "Docker",
          "ChromaDB",
          "CrewAI",
          "n8n",
          "Claude",
          "LangChain",
          "Pinecone",
        ],
      },
    ],
  },
];

export const getBlogBySlug = (slug) => blogs.find((post) => post.slug === slug);
