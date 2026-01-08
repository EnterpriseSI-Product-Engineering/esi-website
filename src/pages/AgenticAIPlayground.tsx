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
      icon: Users,
      title: "Learner Labs",
      description:
        "Access pre-defined labs with illustrated tutorials and step-by-step coding tasks using integrated tools and cloud AI infrastructure.",
      gradient: "from-ai-purple to-ai-blue",
    },
    {
      icon: Code,
      title: "Builder Labs",
      description:
        "Build Agentic or RAG applications with full-stack development, testing, and deployment in sandbox environments.",
      gradient: "from-ai-blue to-ai-cyan",
    },
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

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16 mt-20"
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
              AI Learning Platform
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

        {/* Problem & Solution */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      Problem Statement
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    The rapid progress in Artificial Intelligence is disrupting traditional models of Tech Services and business process management.
                  </p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Enterprises & Tech SIs struggle to align their workforce to leverage & monetize AI effectively.
                  </p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Current AI talent transformation approaches using online courses & budget trainers lack real business impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-ai-cyan to-ai-blue shadow-lg">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-ai-cyan group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      Our Solution
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Our unique approach to high impact AI Talent Transformation is delivered via our{" "}
                    <strong className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">
                      CASH (Continuous, Accelerated, Scalable, Holistic) model
                    </strong>, driven by our Agentic AI Playground approach.
                  </p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Our CASH model is customized with structured & measurable learning journeys for specific personas, including the latest AI tools and enterprise-grade infrastructure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

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

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardHeader className="relative">
                    <motion.div
                      className="mx-auto mb-4"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit mx-auto`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                    <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies &{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Tools
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* Python & ML */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-ai-purple/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-ai-purple shadow-lg w-fit mb-4"
                  >
                    <Code className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-ai-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Python & Machine Learning
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Core programming and ML fundamentals for AI development
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Agent Development */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-ai-purple to-ai-blue shadow-lg w-fit mb-4"
                  >
                    <Brain className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    AI Agent Development
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                    Google ADK, Microsoft Autogen, AWS Strands SDK
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* RAG Development */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-neural-pink/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-ai-cyan to-neural-pink shadow-lg w-fit mb-4"
                  >
                    <Target className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-ai-cyan group-hover:to-neural-pink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    RAG Development
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                    Llamaindex, Langchain frameworks
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Agentic Coding Tools */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-ai-blue shadow-lg w-fit mb-4"
                  >
                    <Zap className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Agentic Coding Tools
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                    GitHub Copilot, Cursor, Google AI Studio
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cloud AI Services */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-ai-cyan/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-ai-cyan shadow-lg w-fit mb-4"
                  >
                    <Cloud className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-ai-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Cloud AI Services
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                    AWS Bedrock, Azure AI Foundry, GCP Vertex AI
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Context Engineering */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-neural-pink/10 to-ai-purple/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-neural-pink to-ai-purple shadow-lg w-fit mb-4"
                  >
                    <Lightbulb className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-neural-pink group-hover:to-ai-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Context Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                    Advanced prompt engineering and context optimization
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
            <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
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
                    Continuous AI Upskilling
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6 flex-1">
                    Continuously right-skill employees on rapidly evolving AI technology with real-time updates and hands-on practice.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-ai-purple font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span>Real-time technology updates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ai-purple font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span>Hands-on practice environments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ai-purple font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span>Personalized learning paths</span>
                    </div>
                  </div>
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
                      <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-ai-cyan group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        AI Skills Scoring & Analytics
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        Continuously score AI skills with comprehensive assessments and detailed performance analytics.
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
                    Self-Paced Learning
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Flexible learning paths that avoid expensive instructor-led trainings.
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
                    Cost Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Save direct and opportunity costs while improving ROI.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wide card - spans 2 columns */}
            <motion.div variants={itemVariants} className="md:col-span-2">
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
                        Massive Scale Training
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        Scale to upskill thousands of employees simultaneously with cloud-based infrastructure and automated learning paths.
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