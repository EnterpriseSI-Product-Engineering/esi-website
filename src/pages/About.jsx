import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Linkedin,
  Sparkles,
  Target,
  Lightbulb,
  Award,
} from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";
import { AbhiroopImage } from "@/assets";
import { Link } from "react-router-dom";

const About = () => {
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
        className=" mt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
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
              Leadership & Vision
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent"
          >
            Meet Our CEO
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Driving Enterprise AI transformation with 22+ years of software
            product leadership and deep expertise in artificial intelligence
            innovation.
          </motion.p>
        </div>
      </motion.section>

      {/* CEO Profile Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-ai-purple to-ai-blue opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

              <CardContent className="relative p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Profile Image */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-80 h-80 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-ai-purple to-ai-blue rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <img
                        src={AbhiroopImage}
                        alt="Abhiroop Roy"
                        className="relative w-full h-full object-cover object-top rounded-2xl border-2 border-border/50 shadow-xl"
                      />
                    </div>
                  </motion.div>

                  {/* Profile Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Abhiroop Roy
                      </h2>
                      <p className="text-lg text-ai-purple font-semibold mb-4">
                        CEO & Head of AI Product Management
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Software Product Leader with 22 years of experience in
                      software products, solutions & technology consulting. With
                      over 10 years in AI, Abhiroop has led engineering for 4
                      AI-powered products and successfully delivered 35+ AI
                      projects. He has also founded and built 3 AI startups over
                      the last decade.
                    </p>

                    <div className="mt-6">
                      <a
                        href="https://www.linkedin.com/in/abhiroop-roy-bb89092/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium relative z-20"
                        style={{ backgroundColor: "#0077B5" }}
                      >
                        <Linkedin
                          className="w-5 h-5"
                          style={{ color: "white" }}
                        />
                        <span style={{ color: "white" }}>
                          Connect on LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Focus Areas */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision &{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Focus Areas
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At the core of our business is a commitment to bringing
              cutting-edge AI solutions to enterprises, driving innovation and
              transformation across industries.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: Target,
                title: "AI Product Development",
                description:
                  "Developing high-performance AI products that meet enterprise-grade standards with scalable architecture.",
                gradient: "from-ai-purple to-ai-blue",
              },
              {
                icon: Users,
                title: "Enterprise AI Solutions",
                description:
                  "Providing customized AI solutions tailored to enterprise needs and complex business processes.",
                gradient: "from-ai-blue to-ai-cyan",
              },
              {
                icon: Lightbulb,
                title: "AI Adoption Strategy",
                description:
                  "Helping businesses seamlessly adopt and integrate AI technology into their operations and workflows.",
                gradient: "from-ai-cyan to-neural-pink",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-ai-purple group-hover:to-ai-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Email Subscription */}
      <EmailSubscription />
    </div>
  );
};

export default About;
