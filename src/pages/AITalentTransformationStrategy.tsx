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
  Target,
  BarChart3,
  Brain,
  Layers,
  Zap,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Settings,
} from "lucide-react";

const AITalentTransformationStrategy = () => {
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

  const areas = [
    {
      icon: Target,
      title: "AI Native Scoring & Measurement",
      description:
        "Building AI native scoring & measurement for your organization across key employee categories",
      gradient: "from-ai-purple to-ai-blue",
    },
    {
      icon: Users,
      title: "Learning Paths & Journeys",
      description:
        "Building Learning paths and Journeys for key employee personas for outcome driven AI Skill development.",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      icon: BarChart3,
      title: "Competency & KRA Mapping",
      description:
        "Mapping learning journeys to competency development goals/ KRAs with metrics data",
      gradient: "from-ai-cyan to-neural-pink",
    },
  ];

  const benefits = [
    "Leverage EnterpriseSI's 10+ years of expertise in building global AI practices.",
    "Proven track record of advising 20+ enterprise customers on AI transformation strategies.",
    "Measurable results through execution of structured AI learning journeys.",
    "Platform-driven approach for scalability, personalization, and performance tracking.",
    "Holistic enablement model: Continuous, Accelerated, Scalable, and Holistic (CASH).",
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
              Talent Transformation
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              AI Talent Transformation Strategy
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            EnterpriseSI's Founding Team brings 10+ years experience in building Global AI practices.
            Over the last 3 years, we've advised 20+ Enterprise customers on outcome-oriented AI Talent
            Transformation Strategies with measurable results.
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
                      The Challenge
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    AI is rapidly redefining the enterprise workforce landscape, but many organizations struggle to align employee skill transformation with business outcomes.
                  </p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Generic online courses or ad-hoc trainings fail to create measurable impact in competency development and AI technology adoption.
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
                      Our Approach
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    We leverage our proprietary <strong className="bg-gradient-to-r from-ai-cyan to-ai-blue bg-clip-text text-transparent">CASH model</strong> (Continuous, Accelerated, Scalable, Holistic) to deliver measurable workforce transformation outcomes.
                  </p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Through our platform, tools, and AI programs, we enable organizations with structured learning journeys, scoring mechanisms, and competency mapping.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Areas of Support */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Areas Where We Can{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Support
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {areas.map((area, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardHeader className="relative">
                    <motion.div
                      className="mx-auto mb-4"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit mx-auto`}
                      >
                        <area.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                    <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-center text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Business Benefits */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Strategy
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-ai-purple to-ai-blue shadow-lg flex-shrink-0"
                      >
                        <Zap className="h-5 w-5 text-white" />
                      </motion.div>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CASH Model Highlight */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-ai-purple to-ai-blue shadow-lg w-fit mx-auto mb-4"
                  >
                    <Settings className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    CASH Model Implementation
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Our consulting work leverages our CASH (Continuous, Accelerated, Scalable, Holistic) model with a unique platform-driven approach.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-neural-pink/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                <CardContent className="relative p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-ai-cyan to-neural-pink shadow-lg w-fit mx-auto mb-4"
                  >
                    <TrendingUp className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-ai-cyan group-hover:to-neural-pink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Complete Execution Support
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Via our platform and AI programs, we provide tools, technologies, enablement mechanisms, processes and data for executing AI Talent Transformation strategies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default AITalentTransformationStrategy;