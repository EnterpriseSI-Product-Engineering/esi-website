import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Workflow,
  TrendingUp,
  Lightbulb,
  Code,
  BarChart,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Improve Customer Experience",
    description: "Marketing | Service | E-Com | Sales | UI-UX Transformation",
    gradient: "from-ai-purple to-ai-blue",
  },
  {
    icon: Workflow,
    title: "Improve Business Processes",
    description:
      "Process Intelligence | Process Automation | Process Optimization | Process Analytics & Exception Handling",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: TrendingUp,
    title: "Improve Revenue, Profit & Cash Flow",
    description:
      "Revenue Generation | Profit Optimization | Cash Flow Management",
    gradient: "from-ai-cyan to-neural-pink",
  },
  {
    icon: Lightbulb,
    title: "Improve Employee Productivity & Creativity",
    description:
      "Intelligent Assistance | Augmentation | Learning & Development",
    gradient: "from-neural-pink to-ai-purple",
  },
  {
    icon: Code,
    title: "Improve Software Development Outcomes",
    description:
      "Design & Analysis | Coding | Testing | Deployment | Operations Transformation",
    gradient: "from-ai-purple to-ai-blue",
  },
  {
    icon: BarChart,
    title: "Improve Analysis & Decision Making",
    description:
      "Real Time Insights | Next Best Action/ Recommendation | Insight-to-action | Decision Simulation/ What-if analysis",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: ShieldCheck,
    title: "Improve Regulatory Compliance & Risk Management",
    description:
      "Real Time Risk/ Threat Detection | Compliance Automation | Audit reporting augmentation |  Audit task automation",
    gradient: "from-ai-cyan to-neural-pink",
  },
];

const FeaturesGrid = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
    <section className="pb-32  pt-10 px-4 sm:px-6 lg:px-8 -mt-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
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
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-neural-pink/25 to-ai-purple/15 blur-sm"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                />
                <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                {/* Glow effect */}
                {/* <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-xl`} /> */}

                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    /> */}
                    <div
                      className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <motion.div
                      // animate={{ rotate: [0, 10, -10, 0] }}
                      // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 ">
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-sm animate-pulse`}
                      style={{ clipPath: "inset(0 0 99% 0)" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
