import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  CheckCircle, 
  Users, 
  Brain, 
  Layers, 
  Sparkles,
  Clock,
  Target,
  Award,
  BookOpen,
  TrendingUp
} from "lucide-react";

const BusinessAIPrograms = () => {
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

  const programs = [
    {
      sno: 1,
      program: "Generative and Agentic AI for Sr Business Leaders",
      personas: "CEO, CFO, COO, SVP, VP, AVP, Sr Director, Director levels",
      duration: "16 hrs",
      gradient: "from-ai-purple to-ai-blue",
      icon: Users,
    },
    {
      sno: 2,
      program: "Generative and Agentic AI for All Business Practitioners",
      personas: "All profiles – middle and junior level – non tech/ business domains",
      duration: "16 hrs",
      gradient: "from-ai-blue to-ai-cyan",
      icon: Target,
    },
    {
      sno: 3,
      program: "Generative and Agentic AI for Finance & Accounting, Auditing Practitioners",
      personas: "VP Finance, Financial Controller, Director- FP&A, Sr Analyst/ Consultant",
      duration: "8 hrs",
      gradient: "from-ai-cyan to-neural-pink",
      icon: TrendingUp,
    },
    {
      sno: 4,
      program: "Generative and Agentic AI for Supply Chain Practitioners",
      personas: "VP Supply Chain, Supply Chain Managers, Supply Chain Analysts/ Consultants",
      duration: "8 hrs",
      gradient: "from-neural-pink to-ai-purple",
      icon: Layers,
    },
    {
      sno: 5,
      program: "Generative and Agentic AI for HR Practitioners",
      personas: "VP HR, Director HR, HR Business partners, Payroll SMEs, Recruiters",
      duration: "8 hrs",
      gradient: "from-ai-purple to-ai-blue",
      icon: Users,
    },
    {
      sno: 6,
      program: "Generative and Agentic AI for Customer Service Practitioners",
      personas: "Customer Service Organization- Sr and mid-level associates",
      duration: "8 hrs",
      gradient: "from-ai-blue to-ai-cyan",
      icon: CheckCircle,
    },
  ];

  const usps = [
    {
      title: "Research-Based Content",
      description: "Content is well researched, with monthly updates to keep it latest.",
      icon: BookOpen,
      gradient: "from-ai-purple to-ai-blue",
    },
    {
      title: "Domain Expertise",
      description: "Experience in AI Consulting, pilots, and domain expertise embedded into programs.",
      icon: Brain,
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      title: "Expert Instructors",
      description: "Mentors/Instructors are experts in AI, Enterprise Apps, and business domains.",
      icon: Award,
      gradient: "from-ai-cyan to-neural-pink",
    },
    {
      title: "Hands-on Learning",
      description: "Plenty of demos and hands-on labs for practical exposure and better retention.",
      icon: Zap,
      gradient: "from-neural-pink to-ai-purple",
    },
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
              AI Training Programs
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Business AI Programs
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We have pioneered AI Enablement workshops and skilling programs, training thousands of 
            senior executives and leaders across Fortune 2000 enterprises on Generative and Agentic AI 
            over the last 2.5 years.
          </motion.p>
        </motion.section>

        {/* Programs Grid */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Most Popular{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {programs.map((program, index) => (
              <motion.div key={program.sno} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${program.gradient} shadow-lg`}
                      >
                        <program.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {program.program}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      <strong>Target Audience:</strong> {program.personas}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* USPs */}
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
                Programs
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {usps.map((usp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${usp.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${usp.gradient} shadow-lg flex-shrink-0`}
                      >
                        <usp.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {usp.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {usp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default BusinessAIPrograms;