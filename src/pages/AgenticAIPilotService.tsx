import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Lightbulb, 
  Star, 
  Sparkles, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Zap
} from "lucide-react";

const AgenticAIPilotService = () => {
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

  const challenges = [
    "AI startups must pilot products with enterprises on custom requirements & data to support license sales.",
    "Once licenses are sold, a capable technical team is needed for implementation to ensure ROI and adoption.",
    "Pilots require people-heavy, hands-on services — unlike product engineering or GTM activities.",
    "Startups often have to build new professional services or customer success teams, diverting focus from innovation.",
    "Lack of on-demand specialized AI talent makes scaling pilots costly.",
    "Having a technically strong offshore team offers competitive advantage by executing pilots faster and better.",
    "Startups need partners who can introduce their products into qualified enterprise leads.",
  ];

  const solutions = [
    "Enterprise Agentic AI Pilot & Implementation Delivery with high offshore leverage.",
    "Dedicated pre-vetted offshore delivery teams (India): stable on-demand core team + flexible scaling.",
    "We introduce your products to qualified Enterprise leads via training workshops, product demos & hands-on labs.",
    "Lower cost, faster scaling, and repeatable success delivery model.",
    "Backed by founders with proven experience in building customer success teams for successful AI startups.",
  ];

  const benefits = [
    "Achieve a 5–8x cost advantage by leveraging top-tier offshore Agentic AI talent.",
    "Rapidly scale pilots and implementations while allowing internal teams to focus on product innovation.",
    "Speed up time-to-market and enterprise successes, boosting adoption rates and business growth.",
    "Generate new Enterprise leads supported by our on-product experience-based lead nurturing.",
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
              Offshore Delivery Service
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Agentic AI Product Pilot-as-Service
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">
              Offshore Delivery Solution
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            EnterpriseSI helps startups in high-cost countries run customer pilots with high offshore
            leverage, delivering cost & profit advantages without investing in offshore centers.
          </motion.p>
        </motion.section>

        {/* Challenges Section */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Challenges{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Addressed
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {challenges.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 shadow-lg flex-shrink-0"
                      >
                        <AlertTriangle className="h-5 w-5 text-white" />
                      </motion.div>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {solutions.map((item, index) => (
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
                        <Lightbulb className="h-5 w-5 text-white" />
                      </motion.div>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Business Benefits - Bento Grid */}
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
              <span className="bg-gradient-to-r from-ai-cyan to-green-500 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {benefits.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-green-500/10 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

                  <CardContent className="relative p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-ai-cyan to-green-500 shadow-lg flex-shrink-0"
                      >
                        {index === 0 && <TrendingUp className="h-5 w-5 text-white" />}
                        {index === 1 && <Zap className="h-5 w-5 text-white" />}
                        {index === 2 && <Globe className="h-5 w-5 text-white" />}
                        {index === 3 && <Users className="h-5 w-5 text-white" />}
                      </motion.div>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Subscription Footer */}
        <EmailSubscription page="solutions" />
      </main>
    </div>
  );
};

export default AgenticAIPilotService;