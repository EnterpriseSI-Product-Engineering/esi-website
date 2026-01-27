import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Brain,
  Target,
  BarChart3,
  Code,
  Cloud,
  Zap,
  Sparkles,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";
import ToolsTechnologies from "@/components/AIPlaygroundComponents/ToolsTechnologies";
import LabOfferings from "@/components/AIPlaygroundComponents/LabOfferings";
import { HowItWorksSection } from "@/components/AIPlaygroundComponents/HowItWorks";
import PlaygroundFeatures from "@/components/AIPlaygroundComponents/PlaygroundFeatures";

const aiTools = [
  "openai", "anthropic", "gemini", "llama",
  "aws-bedrock", "azure-ai-foundry", "vertex-ai",
  "langflow", "n8n", "kore-ai", "galileo-ai",
  "google-adk", "ms-agent-framework", "aws-strands",
  "langgraph", "ms-copilot", "github-copilot",
  "claude-code", "amazon-kiro", "amazon-q-dev",
  "cursor", "replit", "google-ai-studio", "lovable"
];

const AgenticAIPlayground = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: Target,
      title: "AI Native Skill Score",
      description:
        "Assessment tests at different stages with generated scores reflecting progress in learning journeys.",
      gradient: "from-ai-cyan to-neural-pink",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Comprehensive usage and performance analytics for tracking progress and competency mapping.",
      gradient: "from-neural-pink to-ai-purple",
    },
  ];

  const technologies = [
    "Python & Machine Learning",
    "AI Agent Development (Google ADK, Microsoft Autogen, AWS Strands SDK)",
    "RAG Development (Llamaindex, Langchain)",
    "Agentic Coding Tools (GitHub Copilot, Cursor, Google AI Studio)",
    "Cloud AI Services (AWS Bedrock, Azure AI Foundary, GCP Vertex AI)",
    "Context Engineering",
  ];

  const benefits = [
    "Continuously right-skill employees on rapidly evolving AI technology",
    "Continuously score AI skills of your employees",
    "Avoid expensive instructor-led trainings with self-paced learning",
    "Save direct and opportunity costs while improving ROI",
    "Scale to upskill thousands simultaneously",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-ai-purple/10 to-ai-blue/5 rounded-full blur-xl"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-ai-cyan/10 to-ai-purple/5 rounded-full blur-xl"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-neural-pink/8 to-ai-cyan/5 rounded-full blur-lg"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-16 w-12 h-12 rounded-full bg-gradient-to-br from-ai-purple/20 to-ai-blue/15 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-16 w-16 h-16 rounded-full bg-gradient-to-br from-ai-cyan/15 to-neural-pink/10 blur-sm"
        style={{ animationDelay: "1.5s" }}
      />

      <main className="container mx-auto px-4 py-16 relative z-10 space-y-12">


        {/* Hero Section */}
        <motion.section
          className="text-center mb-16 mt-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-secondary/80 to-secondary/60 border border-border/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-ai-purple" />
            </motion.div>
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              Learn AI by building
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Agentic AI Builder Playground
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Transform your workforce with our CASH (Continuous, Accelerated,
            Scalable, Holistic) model for high-impact AI talent transformation
          </motion.p>
        </motion.section>

        {/* Problem & Solution (moved up) */}
        <motion.section
          className="mb-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <motion.div variants={itemVariants}>
              <Card className="relative overflow-hidden border bg-background/60 rounded-2xl shadow-sm transition-transform duration-300 hover:translate-y-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/10 to-transparent rounded-2xl" />
                <CardHeader className="relative p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-red-100">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">Problem Statement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative p-6 space-y-3">
                  <p className="text-muted-foreground">
                    The rapid progress in Artificial Intelligence is disrupting traditional models of Tech Services and business process management.
                  </p>
                  <p className="text-muted-foreground">
                    Enterprises & Tech SIs struggle to align their workforce to leverage & monetize AI effectively.
                  </p>
                  <p className="text-muted-foreground">
                    Current AI talent transformation approaches using online courses & budget trainers lack real business impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="relative overflow-hidden border bg-background/60 rounded-2xl shadow-sm transition-transform duration-300 hover:translate-y-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/10 to-transparent rounded-2xl" />
                <CardHeader className="relative p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-cyan-100">
                      <Lightbulb className="w-5 h-5 text-cyan-700" />
                    </div>
                    <CardTitle className="text-xl">Our Solution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative p-6 space-y-3">
                  <p className="text-muted-foreground">
                    Our approach to high impact AI Talent Transformation is delivered via our <strong className="text-foreground font-semibold">CASH</strong> model (Continuous, Accelerated, Scalable, Holistic), driven by the Agentic AI Playground.
                  </p>
                  <p className="text-muted-foreground">
                    Customized learning journeys, hands-on labs, and enterprise-grade infrastructure make progress measurable and practical.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Labs Section - Learner Labs and Builder Labs */}
        <motion.section
          className="pt-[50px] pb-[10px] max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          <div className="space-y-3">
            <LabOfferings itemVariants={itemVariants} />
          </div>
        </motion.section>

        <div className="pb-[100px]">
          <PlaygroundFeatures />
        </div>

        {/* Problem & Solution (moved) - removed original duplicate */}

        {/* How It Works */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </motion.div>

          <HowItWorksSection features={features} containerVariants={containerVariants} itemVariants={itemVariants} />


        </motion.section>

        {/* Tools & Technologies */}
        <ToolsTechnologies />

        {/* Our Learning Paths */}
        <motion.section
          className="pb-[100px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our AI{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Learning Paths
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                title: "Agentic AI Architect",
                desc: "Design scalable, secure, enterprise-grade agentic AI systems",
                gradient: "from-purple-500 to-pink-500",
                Icon: Users,
              },
              {
                title: "Agentic AI Engineer",
                desc: "Build and deploy production-ready AI agent applications",
                gradient: "from-indigo-500 to-blue-500",
                Icon: Brain,
              },
              {
                title: "AI Evals Engineer",
                desc: "Design evaluation frameworks for quality, safety, and alignment",
                gradient: "from-teal-500 to-green-500",
                Icon: BarChart3,
              },
              {
                title: "AI-SDLC Engineer",
                desc: "Operationalize AI across CI/CD, testing, monitoring, and governance",
                gradient: "from-ai-purple to-ai-blue",
                Icon: Code,
              },
              {
                title: "AI Strategist",
                desc: "Translate business goals into high-impact AI strategies",
                gradient: "from-orange-500 to-ai-cyan",
                Icon: Lightbulb,
              },
              {
                title: "AI Business Consultant",
                desc: "Drive ROI-driven AI adoption and transformation programs",
                gradient: "from-green-500 to-ai-blue",
                Icon: Target,
              },
            ].map(({ title, desc, gradient, Icon }) => (
              <motion.div key={title} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 rounded-xl" />

                  <CardContent className="relative p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg w-fit mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-3">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>


        {/* Benefits - Bento Grid */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Business{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* Large featured card - spans 2 columns, 2 rows */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 md:row-span-2"
            >
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-8 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-ai-purple to-ai-blue shadow-lg w-fit mb-6"
                  >
                    <Zap className="h-12 w-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    AI Tech-Use Cases
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 flex-1">
                    Continuously assign right-skill employees on rapidly evolving AI
                    tech-use cases
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Medium card - spans 2 columns */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-ai-cyan to-ai-blue shadow-lg"
                    >
                      <BarChart3 className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 transition-all duration-300">
                        AI Skill Insights
                      </h3>
                      <p className="text-muted-foreground transition-colors duration-300">
                        Aggregate skill signals into actionable insights and recommended learning paths for teams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Small card */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-neural-pink/10 to-ai-purple/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-neural-pink to-ai-purple shadow-lg w-fit mb-4"
                  >
                    <Users className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-neural-pink group-hover:to-ai-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Learning Paths
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Monitor AI skill development journeys on our learning paths
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Small card */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-ai-cyan/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-ai-cyan shadow-lg w-fit mb-4"
                  >
                    <Target className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-ai-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    ROI & Cost Optimization</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Improve ROI & cost of AI Talent transformation
                    initiatives
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wide card - spans 2 columns */}
            <motion.div variants={itemVariants} className="md:col-span-4">
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-ai-purple/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-ai-purple shadow-lg"
                    >
                      <Cloud className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-ai-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Self-Paced Transformation
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">


                        Move from expensive instructor led trainings to self-paced
                        practical skill transformation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <EmailSubscription />
      </main>
    </div>
  );
};

export default AgenticAIPlayground;
