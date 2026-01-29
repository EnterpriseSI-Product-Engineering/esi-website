import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Code, Users, BarChart3, Settings, Shield, UserCog } from "lucide-react";

import JupyterLogo from "@/assets/Logos/Jupyter_logo.png";
import AwsLogo from "@/assets/Logos/Amazon_Web_Services_Logo.png";
import VscodeLogo from "@/assets/Logos/Visual_Studio_Code_logo.png";
import LangflowLogo from "@/assets/Logos/Langflow_logo.png";
import N8nLogo from "@/assets/Logos/N8n_logo.png";

import JupyterScreen from "../../assets/Playground/Labs/Learner/Jupyter.png"
import AWSScreen from "../../assets/Playground/Labs/Learner/AWS.png"
import Langflow from "../../assets/Playground/Labs/Learner/Langflow.png"

import BuilderCardImage from "../../assets/Playground/Labs/Builder/BuilderCard.jpeg"
import BuilderLabsImage from "../../assets/Playground/Labs/Builder/BuilderLabs.jpeg"
import BuilderUI from "../../assets/Playground/Labs/Builder/BuilderUI.jpeg"

import AdminDashboard from "../../assets/Playground/Admin/AdminDashboard.png"
import UsersManagement from "../../assets/Playground/Admin/UsersManagement.png"
import UserProfileOverview from "../../assets/Playground/Admin/UserProfileOverview.png"
import LabsManagement from "../../assets/Playground/Admin/LabsManagement.png"
import AssessmentsManagement from "../../assets/Playground/Admin/AssessmentsManagement.png"
import Visualization from "../../assets/Playground/Admin/Visualization.png"

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

/* =========================
   Animated Number & Helpers
========================= */

function AnimatedNumber({
  value,
  decimals = 0,
  suffix = "",
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span className={className}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function MetricChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="px-3 py-2 rounded-lg bg-muted/10 text-sm">
      {label}: <AnimatedNumber value={value} suffix="%" />
    </div>
  );
}

function MetricCard({
  label,
  value,
  suffix = "",
  decimals = 0,
}: {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  return (
    <div className="p-4 rounded-xl bg-muted/10 text-center">
      <p className="text-xs text-muted-foreground">{label}</p>
      <AnimatedNumber
        value={value}
        decimals={decimals}
        suffix={suffix}
        className="text-xl font-semibold"
      />
    </div>
  );
}

const learnerSlides = [
  {
    id: 0,
    image: JupyterScreen,
    label: "Jupyter-based Guided Labs",
    type: "image"
  },
  {
    id: 1,
    image: AWSScreen,
    label: "Cloud Sandboxes on AWS",
    type: "image"
  },
  {
    id: 2,
    image: Langflow,
    label: "Visual Agent & Flow Builder",
    type: "image"
  },
];

const builderSlides = [
  {
    id: 0,
    image: BuilderCardImage,
    label: "Builder-labs Card Image",
    type: "image"
  },
  {
    id: 1,
    image: BuilderLabsImage,
    label: "Builder-labs Screen Image",
    type: "image"
  },
  {
    id: 2,
    image: BuilderUI,
    label: "Builder-labs UI Image",
    type: "image"
  }
]

const adminSlides = [
  {
    id: 0,
    image: AdminDashboard,
    label: "Admin Dashboard",
    type: "image"
  },
  {
    id: 1,
    image: UsersManagement,
    label: "User Management",
    type: "image"
  },
  {
    id: 2,
    image: UserProfileOverview,
    label: "User Profiles",
    type: "image"
  },
  {
    id: 3,
    image: LabsManagement,
    label: "Labs Management",
    type: "image"
  },
  {
    id: 4,
    image: AssessmentsManagement,
    label: "Assessments",
    type: "image"
  },
  {
    id: 5,
    image: Visualization,
    label: "Client Support",
    type: "image"
  },
  {
    id: 6,
    type: "component",
    label: "AI Native Skill Score",
    component: (
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-full w-full p-8 md:p-12">
        {/* Score */}
        <div className="relative shrink-0">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-ai-cyan to-neural-pink p-1.5">
            <div className="w-[154px] h-[154px] rounded-full bg-background flex items-center justify-center">
              <AnimatedNumber
                value={82}
                className="text-5xl font-bold"
              />
            </div>
          </div>
          <p className="absolute -bottom-8 w-full text-base font-medium text-center text-muted-foreground">
            Composite Score
          </p>
        </div>

        {/* Breakdown */}
        <div className="flex-1 w-full max-w-lg space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Composite score derived from knowledge checks, hands-on lab
            performance, and operational readiness.
          </p>
          <div className="flex flex-wrap gap-3">
            <MetricChip label="Knowledge" value={80} />
            <MetricChip label="Applied" value={75} />
            <MetricChip label="Ops-Ready" value={70} />
          </div>

          <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "82%" }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-ai-cyan to-ai-purple"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    type: "component",
    label: "Performance Analytics",
    component: (
      <div className="flex flex-col gap-10 items-center justify-center h-full w-full p-8 md:p-12">
        <p className="text-xl text-muted-foreground text-center max-w-2xl">
          User performance is captured and analyzed using
          industry-relevant metrics.
        </p>

        <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
          <MetricCard label="Success Rate" value={91} suffix="%" />
          <MetricCard label="Accuracy" value={88} suffix="%" />
          <MetricCard
            label="Confidence"
            value={0.92}
            decimals={2}
          />
        </div>

        <div className="p-6 rounded-2xl bg-background/50 w-full max-w-2xl text-center border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
            Trend Insight
          </p>
          <p className="text-xl">
            Performance improved by{" "}
            <span className="font-bold text-green-600 text-2xl">
              12%
            </span>{" "}
            month-over-month.
          </p>
        </div>
      </div>
    )
  }
]

function LabOfferings({ features,
  containerVariants,
  itemVariants,
}: {
  features?: any[];
  containerVariants?: any;
  itemVariants?: any;
}) {

  return (
    <motion.section className="relative mb-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Key {""}
          <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
            Product Features
          </span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Now every employee will have their own AI sandbox environment with new scenarios added every month & skill development measured with innovative scoring methods.
        </p>
      </div>

      <LearnerLabsSlide itemVariants={itemVariants} />
      <div className="h-[46px]" />
      <BuilderLabsSlide itemVariants={itemVariants} />
      <div className="h-[46px]" />
      <AdministrationAnalyticsSlide itemVariants={itemVariants} />
    </motion.section>
  );
}

export default LabOfferings;

const LAB_CARD_HEIGHT = "min-h-[460px] md:min-h-[300px]";

function LearnerLabsSlide({ itemVariants }: { itemVariants: any }) {

  const [active, setActive] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % learnerSlides.length);
    }, 3 * 1000); // 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      className={`relative overflow-hidden rounded-2xl border 
              bg-background/80 backdrop-blur-xl shadow-xl 
              ${LAB_CARD_HEIGHT}
              flex`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/60 via-transparent to-transparent" />
      <div className="relative flex-1 flex">
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
            </div>
          </CardHeader>
          <CardContent className="relative justify-between">
            <div className="mt-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
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
              <div className="flex items-center justify-center p-4 bg-muted/10 rounded-3xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105">
                <img src={N8nLogo} alt="Langflow" className="h-10 md:h-12 object-contain" />
              </div>
            </div>

            <div>
              <div className="absolute inset-x-0 top-32 h-[420px] -z-10 blur-3xl">
                <AnimatePresence>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 h-full w-full ${active === 0
                      ? "bg-gradient-to-r from-sky-200/50 via-blue-200/30 to-transparent"
                      : "bg-gradient-to-l from-amber-300/50 via-orange-200/30 to-transparent"
                      }`}
                  />
                </AnimatePresence>
              </div>
              {/* Platform Images */}
              <div className="grid grid-cols-1 grid-rows-1">
                <AnimatePresence>
                  <motion.img
                    key={active}
                    src={learnerSlides[active].image}
                    alt={learnerSlides[active].label}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="col-start-1 row-start-1 w-full max-h-[560px] object-contain rounded-xl border bg-background/50 p-3"
                  />
                </AnimatePresence>
              </div>

              {/* Indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {learnerSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActive(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${active === index
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
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
      </div >
    </Card >
  );
}

function BuilderLabsSlide({ itemVariants }: { itemVariants: any }) {
  const [active, setActive] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % builderSlides.length);
    }, 3 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Card
      className={`relative overflow-hidden rounded-2xl border 
              bg-background/80 backdrop-blur-xl shadow-xl 
              ${LAB_CARD_HEIGHT}
              flex`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-transparent to-transparent" />
      <div className="relative flex-1 flex">
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
                    AI Agent & RAG Builder Environment with AI Infra & deployment options and problem statement/business use cases - Accelerate your AI Architect/ Builder skill development by designing , developing & deploying.
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative py-8 items-center justify-center">
            <div>
              <div className="absolute inset-x-0 top-32 h-[420px] -z-10 blur-3xl">
                <AnimatePresence>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 h-full w-full ${active === 0
                      ? "bg-gradient-to-r from-sky-200/50 via-blue-200/30 to-transparent"
                      : "bg-gradient-to-l from-amber-300/50 via-orange-200/30 to-transparent"
                      }`}
                  />
                </AnimatePresence>
              </div>
              {/* Platform Images */}
              <div className="grid grid-cols-1 grid-rows-1">
                <AnimatePresence>
                  <motion.img
                    key={active}
                    src={builderSlides[active].image}
                    alt={builderSlides[active].label}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="col-start-1 row-start-1 w-full max-h-[560px] object-contain rounded-xl border bg-background/50 p-3"
                  />
                </AnimatePresence>
              </div>

              {/* Indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {builderSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActive(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${active === index
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground max-w-2xl">
                Builder Labs lets teams prototype, test and deploy
                agentic applications with CI support and one-click
                sandbox deploys.
              </div>
              <div className="flex justify-center">
                <button
                  onClick={scrollToBottom}
                  className="px-5 py-2 rounded-lg bg-muted text-foreground bg-orange-100 hover:bg-orange-200 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}

function AdministrationAnalyticsSlide({ itemVariants }: { itemVariants: any }) {
  const [active, setActive] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % adminSlides.length);
    }, 4000); // 4s for more content
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      className={`relative overflow-hidden rounded-2xl border 
              bg-background/80 backdrop-blur-xl shadow-xl 
              ${LAB_CARD_HEIGHT}
              flex`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-transparent to-transparent" />
      <div className="relative flex-1 flex">
        <Card className="relative flex flex-col h-full w-full overflow-hidden border bg-background/60 rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl rounded-xl" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-purple-50">
                  <BarChart3 className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Administration & Analytics</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Comprehensive admin dashboard, user management, and detailed performance analytics. Monitor skill growth, track usage, and manage your organization's AI adoption journey.
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative py-8 items-center justify-center">
            <div>
              <div className="absolute inset-x-0 top-32 h-[420px] -z-10 blur-3xl">
                <AnimatePresence>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 h-full w-full ${active % 2 === 0
                      ? "bg-gradient-to-r from-purple-200/50 via-pink-200/30 to-transparent"
                      : "bg-gradient-to-l from-indigo-300/50 via-blue-200/30 to-transparent"
                      }`}
                  />
                </AnimatePresence>
              </div>

              {/* Platform Images/Components */}
              <div className="grid grid-cols-1 grid-rows-1 min-h-[400px]">
                <AnimatePresence mode="wait">
                  {adminSlides[active].type === 'image' ? (
                    <motion.img
                      key={active}
                      src={adminSlides[active].image}
                      alt={adminSlides[active].label}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="col-start-1 row-start-1 w-full max-h-[560px] object-contain rounded-xl border bg-background/50 p-3"
                    />
                  ) : (
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="col-start-1 row-start-1 w-full flex items-center justify-center rounded-xl border bg-background/50 backdrop-blur-sm"
                    >
                      {adminSlides[active].component}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {adminSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActive(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${active === index
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground max-w-2xl">
                Powerful tools for admins to manage users, labs, and assessments, while providing deep insights into skill development.
              </div>
              <div className="flex justify-center">
                <button
                  onClick={scrollToBottom}
                  className="px-5 py-2 rounded-lg bg-muted text-foreground bg-purple-100 hover:bg-purple-200 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}

