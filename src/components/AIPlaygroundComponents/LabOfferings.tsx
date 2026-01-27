import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Code, Users } from "lucide-react";

const slides = ["learner", "builder"];

import JupyterLogo from "@/assets/Logos/Jupyter_logo.png";
import AwsLogo from "@/assets/Logos/Amazon_Web_Services_Logo.png";
import VscodeLogo from "@/assets/Logos/Visual_Studio_Code_logo.png";
import LangflowLogo from "@/assets/Logos/Langflow_logo.png";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

function LabOfferings({ itemVariants }: { itemVariants: any }) {
  const [active, setActive] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 60 * 1000); // 5s feels premium
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section className="relative mb-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Key Product Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Now every employee will have their own AI sandbox environment with new scenarios added every month & skill development measured with innovative scoring methods.
        </p>
      </div>

      {/* Background wash */}
      <div className="absolute inset-x-0 top-32 h-[420px] -z-10 blur-3xl">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          className={`h-full w-full ${active === 0
            ? "bg-gradient-to-r from-sky-200/60 via-blue-200/40 to-transparent"
            : "bg-gradient-to-l from-amber-300/60 via-orange-200/40 to-transparent"
            }`}
        />
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {active === 0 && (
            <motion.div
              key="learner"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <LearnerLabsSlide itemVariants={itemVariants} />
            </motion.div>
          )}

          {active === 1 && (
            <motion.div
              key="builder"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <BuilderLabsSlide itemVariants={itemVariants} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition ${active === i ? "bg-foreground" : "bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default LabOfferings;

const LAB_CARD_HEIGHT = "min-h-[460px] md:min-h-[300px]";

function LearnerLabsSlide({ itemVariants }: { itemVariants: any }) {
  return (
    <Card
      className={`relative overflow-hidden rounded-2xl border 
              bg-background/80 backdrop-blur-xl shadow-xl 
              ${LAB_CARD_HEIGHT}
              flex`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/60 via-transparent to-transparent" />
      <div className="relative flex-1 flex">
        {/* <motion.div variants={itemVariants}> */}
        <Card className="relative flex flex-col h-full w-full overflow-hidden border bg-background/60 rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-ai-purple to-ai-blue shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Learner Labs</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Practical, guided/ instruction based labs with tech/ business scenario, bundled with AI tool, Cloud & AI Infra (models, memory, etc) . Perfect for self-paced learning of application of new AI technologies/ concepts. Each lab takes 30-120 mins to complete.
                  </CardDescription>
                </div>
              </div>
              {/* <div className="text-sm text-muted-foreground">Free · Self-paced</div> */}
            </div>
          </CardHeader>
          <CardContent className="relative justify-between">
            <div className="mt-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center justify-center p-4 bg-muted/10 rounded-3xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105">
                <img src={JupyterLogo} alt="Jupyter" className="h-10 md:h-12 object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 bg-muted/10 rounded-3xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105">
                <img src={AwsLogo} alt="AWS" className="h-10 md:h-12 object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 bg-muted/10 rounded-3xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105">
                <img src={VscodeLogo} alt="VS Code" className="h-10 md:h-12 object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 bg-muted/10 rounded-3xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105">
                <img src={LangflowLogo} alt="Langflow" className="h-10 md:h-12 object-contain" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground max-w-2xl">
                Each lab comes with step-by-step exercises, built-in
                terminals, and cloud credits to provision small sandbox
                resources. Beautifully designed for clarity and focus.
              </div>
              <div>
                <button onClick={scrollToBottom} className="inline-flex items-center bg-primary/10 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-primary/30 transition">
                  Explore Labs
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* </motion.div> */}
      </div>
    </Card>
  );
}

function BuilderLabsSlide({ itemVariants }: { itemVariants: any }) {
  return (
    <Card
      className={`relative overflow-hidden rounded-2xl border 
              bg-background/80 backdrop-blur-xl shadow-xl 
              ${LAB_CARD_HEIGHT}
              flex`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-transparent to-transparent" />
      <div className="relative flex-1 flex">
        {/* <motion.div variants={itemVariants}> */}
        <Card className="relative flex flex-col h-full w-full overflow-hidden border bg-background/60 rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-cyan-50">
                  <Code className="w-6 h-6 text-cyan-700" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Builder Labs</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Full-stack builder environments for agents and RAG
                    apps. Coming soon — curated projects & CI/CD flows.
                  </CardDescription>
                </div>
              </div>
              <div className="text-sm text-foreground/80 font-semibold">Coming Soon</div>
            </div>
          </CardHeader>
          <CardContent className="relative py-8 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-muted/10 text-foreground font-semibold">
                  Coming Soon
                </span>
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Builder Labs will let teams prototype, test and deploy
                agentic applications with CI support and one-click
                sandbox deploys. Subscribe to be notified when it
                launches.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={scrollToBottom}
                  className="px-5 py-2 rounded-lg bg-muted text-foreground bg-orange-100 hover:bg-orange-200 transition"
                >
                  Notify me
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
