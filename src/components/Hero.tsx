import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const Hero = () => {
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
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center  px-6 overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-ai-purple/20 to-ai-blue/20 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-ai-cyan/20 to-ai-blue/20 blur-sm [animation-delay:1s]"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-20 w-20 h-20 rounded-full bg-gradient-to-br from-ai-blue/15 to-ai-purple/15 blur-sm [animation-delay:3s]"
      />

      <motion.div
        className="relative z-10 max-w-6xl w-full text-center"
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
            The Future of Enterprise AI
          </span>
        </motion.div>

        {/* Enhanced Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-2 leading-[1.1]"
        >
          Accelerating journey towards <br />
        </motion.h1>
        <span className="relative ">
          <span className="bg-gradient-to-r text-3xl from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent tracking-normal animate-gradient-x">
            Enterprise SuperIntelligence & Agentic Business processes with
            human-in-loop
          </span>
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          />
        </span>

        {/* Enhanced Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-4 mt-10 max-w-4xl mx-auto leading-relaxed"
        >
          Our product-led AI accelerators are helping Enterprises embrace
          Artificial General Intelligence in their journey towards autonomous
          business processes/ operations, enabling next gen Digital Business
          Transformation.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-10 mt-4 max-w-4xl mx-auto leading-relaxed"
        >
          Our Agentic AI Acceleration platform provides AI Accelerators &
          Playgrounds helping Enterprises embrace Artificial General
          Intelligence in a structured manner, enabling Business Outcomes like:
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground mb-12"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Real-time Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span>Scalable Architecture</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
