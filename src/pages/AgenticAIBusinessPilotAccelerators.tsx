import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Settings,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FocusAreas from "@/components/AIPilotAcceleratorsComponents/FocusAreas";

const AgenticAIBusinessPilotAccelerators = () => {
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

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center">
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
              AI Pilot Accelerators
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Introducing EnterpriseSI <br />
            <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              Agentic AI Pilot Accelerator Suite
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Create Successful AI Pilot & Pilot-to-Implementation journeys with
            our Production-Ready AI Business Copilots & Agents
          </motion.p>
        </div>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

              <CardContent className="relative p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    The Challenge
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Enterprises have limited understanding of AI & its
                      business applications, especially when this technology is
                      evolving rapidly.
                    </p>
                    <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      According to an Aug 2025 MIT report,{" "}
                      <span className="text-red-500 font-semibold">
                        95% of Generative AI Pilots are failing
                      </span>{" "}
                      to demonstrate any returns.
                    </p>
                    <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      Despite billions invested in AI, business executives
                      remain wary of pilot risks and uncertain returns.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Target className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Skills Gap</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          Lack of combined skills in business processes,
                          enterprise data, AI, and software development.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Zap className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          No Ready Solutions
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          Lack of pre-built AI app blueprints that reduce
                          time-to-value in pilots.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Shield className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Production Gaps</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          Pilots lack production-grade architecture, becoming
                          throwaway prototypes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Solution */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: Rocket,
                title: "Pre-built Production Grade Apps",
                description:
                  "Production-grade Agentic AI apps addressing top 5-6 high-value business use cases for specific functions and industries.",
                gradient: "from-ai-purple to-ai-blue",
              },
              {
                icon: Globe,
                title: "Deployable Images",
                description:
                  "Ready-to-deploy app images that can be hosted in customer's cloud or on-premise environments.",
                gradient: "from-ai-blue to-ai-cyan",
              },
              {
                icon: Settings,
                title: "Customization Interface",
                description:
                  "Business-friendly interface to customize accelerators for unique processes, data, and integration needs.",
                gradient: "from-ai-cyan to-neural-pink",
              },
            ].map((solution, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-8 h-full flex flex-col">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 flex-1">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Focus Areas */}
      <FocusAreas />

      {/* Business Benefits */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Business{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: TrendingUp,
                title: "50%+ Cost & Time Reduction",
                description:
                  "Dramatically reduce the cost and effort required for AI pilots with pre-built accelerators",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: Shield,
                title: "50%+ Risk Reduction",
                description:
                  "Minimize pilot failure risk with proven ROI and business value demonstration frameworks",
                gradient: "from-blue-500 to-cyan-600",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-8">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex-shrink-0`}
                      >
                        <benefit.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

     

      {/* CTA Section - Learn More */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/20 via-ai-blue/20 to-ai-cyan/20 opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />
              
              <CardContent className="relative p-12">
                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    <Lightbulb className="w-12 h-12 text-ai-purple" />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent group-hover:drop-shadow-lg transition-all duration-300">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      To learn more about our Business Role & process workflow based AI Copilots & Agents,{" "}
                      <motion.a
                        href="https://master.d1jvuujmp5rpat.amplifyapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ai-purple font-semibold hover:text-ai-blue transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        click here
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.a>
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      asChild
                      className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-blue hover:to-ai-cyan text-white font-semibold px-8 py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a
                        href="https://master.d1jvuujmp5rpat.amplifyapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Explore Our Solutions
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default AgenticAIBusinessPilotAccelerators;
