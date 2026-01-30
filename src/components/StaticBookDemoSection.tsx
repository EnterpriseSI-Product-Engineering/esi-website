import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const StaticBookDemoSection = () => {
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
    <motion.section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
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
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div variants={itemVariants}>
          <Card className="group relative overflow-hidden border bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm hover:from-background hover:to-muted/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/20 via-ai-blue/20 to-ai-cyan/20 opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-xl" />
            <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />

            <CardContent className="relative p-12">
              <div className="text-center space-y-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <Sparkles className="w-12 h-12 text-ai-purple" />
                </motion.div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent group-hover:drop-shadow-lg transition-all duration-300">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 max-w-2xl mx-auto">
                    Book a personalized demo to see how our Agentic AI solutions can transform your business and drive measurable results.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  <Button
                    onClick={() => {
                      const button = document.querySelector(
                        'button[data-floating-widget-trigger]'
                      ) as HTMLButtonElement;
                      if (button) {
                        button.click();
                      }
                    }}
                    className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-blue hover:to-ai-cyan text-white font-semibold px-8 py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Demo
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <p className="text-sm text-muted-foreground">
                  Our team will reach out within 24 hours to schedule your demo
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StaticBookDemoSection;
