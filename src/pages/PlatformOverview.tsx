import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Rocket,
  Users,
  Target,
  BarChart3,
  Zap,
  Brain,
  Code,
  ArrowRight,
} from "lucide-react";

const PlatformOverview = () => {
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
    <div className="min-h-screen relative overflow-x-hidden">
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
        className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-gradient-to-r from-secondary/80 to-secondary/60 border border-border/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-ai-purple" />
            </motion.div>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              Platform Overview
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2"
          >
            Overview of Our{" "}
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Platform
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-8 md:mb-12 px-2"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              EnterpriseSI is building a ground breaking agentic AI acceleration
              platform that enables fortune 2000 enterprises in improving AI
              adoption & value realization at scale using our playground & pilot
              accelerators.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How We Support Section */}
      <motion.section
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
              How We Support{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Agentic AI Accelerators
              </span>
            </h2>
          </motion.div>

          {/* Mindmap */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <div className="max-w-5xl mx-auto">
              {/* Top Level - Problem Statements */}
              <div className="flex justify-center mb-6 md:mb-8">
                <Card className="relative overflow-hidden border-2 border-ai-purple/30 bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 backdrop-blur-sm w-full max-w-md">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-base md:text-xl font-bold text-center bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                      Problem Statements We Address
                    </h3>
                  </CardContent>
                </Card>
              </div>

              {/* Connecting Lines - Hidden on mobile */}
              <div className="hidden md:flex justify-center mb-8">
                <div className="relative w-full max-w-2xl h-20">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="40%"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-ai-purple/40"
                    />
                    <line
                      x1="25%"
                      y1="40%"
                      x2="75%"
                      y2="40%"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-ai-purple/40"
                    />
                    <line
                      x1="25%"
                      y1="40%"
                      x2="25%"
                      y2="100%"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-ai-purple/40"
                    />
                    <line
                      x1="75%"
                      y1="40%"
                      x2="75%"
                      y2="100%"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-ai-purple/40"
                    />
                  </svg>
                </div>
              </div>

              {/* Two Branches */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* PR1 - Left Branch */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:border-ai-purple/50 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                    <CardContent className="relative p-4 md:p-8">
                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-3">
                        No Proven solution to continuously develop AI talent at
                        scale via hands-on / practical approach
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6">
                        CASH (Continuous, Accelerated, Scalable & Holistic)
                        model of AI Talent Transformation deployed via learner &
                        builder labs, continuous skill scoring & usage
                        analytics.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-blue hover:to-ai-purple text-white w-full md:w-auto"
                      >
                        <Link
                          to="/product/agentic-ai-builder-playground"
                          className="flex items-center justify-center gap-2"
                        >
                          Our Solution
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* PR2 - Right Branch */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:border-ai-cyan/50 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-ai-blue/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                    <CardContent className="relative p-4 md:p-8">
                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-3">
                        No Proven solution to finding right AI use cases,
                        accelerate/ improve pilots & pilot-to-production
                        journeys (on factors- cost, efforts, success
                        probability)
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-3">
                        Production grade Agentic AI Use Case Pilot &
                        Pilot-to-Implementation accelerators reducing cost,
                        efforts & failure rate of AI pilots & implementations.
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-6">
                        With AI Governance, Risk mgt & Safety leading practices
                        baked-in.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-ai-cyan to-ai-blue hover:from-ai-blue hover:to-ai-cyan text-white w-full md:w-auto"
                      >
                        <Link
                          to="/product/agentic-ai-business-pilot-accelerators"
                          className="flex items-center justify-center gap-2"
                        >
                          Our Solution
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PlatformOverview;
