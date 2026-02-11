import { motion } from "framer-motion";
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
    <>
      <section className="relative min-h-screen flex items-start justify-center px-4 md:px-6 pt-[100px] md:pt-[150px] overflow-x-hidden">
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
          {/* Enhanced Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-2 leading-[1.1]"
          >
            Accelerating journey towards <br />
          </motion.h1>

          <div className="mt-4 md:mt-8 py-4 md:py-8 flex flex-wrap gap-2 items-center justify-center">
            <span className="border p-2 px-3 md:px-4 rounded-full bg-blue-200 text-sm md:text-base">
              Enterprise SuperIntelligence
            </span>
            <span className="border p-2 px-3 md:px-4 rounded-full bg-blue-200 text-sm md:text-base">
              Agentic Business processes
            </span>
            <span className="border p-2 px-3 md:px-4 rounded-full bg-blue-200 text-sm md:text-base">
              Human-in-control
            </span>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 mt-4 max-w-4xl mx-auto leading-relaxed px-2"
          >
            Our Agentic AI Acceleration platform provides AI Accelerators &
            Playgrounds helping Enterprises embrace Artificial General
            Intelligence in a structured manner, enabling Business Outcomes
            like:
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
