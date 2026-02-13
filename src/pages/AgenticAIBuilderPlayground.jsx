import {
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Code2,
  Users,
  BarChart3,
  CheckCircle2,
  UserPlus,
  MonitorPlay,
  BarChart2,
  TrendingUp,
  Brain,
  Target,
} from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";
import {
  AdminDashboard,
  AssessmentsManagement,
  Builder1,
  Builder2,
  Builder3,
  LabsManagement,
  UserProfileOverview,
  UsersManagement,
  Visualization,
  OpenAILogo,
  ClaudeAILogo,
  ClaudeCodeLogo,
  GoogleGeminiLogo,
  MetaLogo,
  VisualStudioCodeLogo,
  JupyterLogo,
  GoogleAIStudioLogo,
  AmazonWebServicesLogo,
  AWSBedrockLogo,
  AzureFoundryLogo,
  VertexAILogo,
  GoogleADKLogo,
  MicrosoftAgentFrameworkLogo,
  Microsoft365CopilotLogo,
  LangflowLogo,
  N8nLogo,
  GalileoLogo,
  GitHubCopilotLogo,
  StrandsAgentsLogo,
  LanggraphLogo,
  KoreaiLogo,
  LovableLogo,
} from "../assets";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useState, useEffect } from "react";
import AWSScreenshot from "../assets/labs/learner/AWS.png";
import JupyterScreenshot from "../assets/labs/learner/Jupyter.png";
import LangflowScreenshot from "../assets/labs/learner/Langflow.png";
import { Link } from "react-router";

const learnerSlides = [
  { id: 1, image: AWSScreenshot, label: "AWS Lab" },
  { id: 2, image: JupyterScreenshot, label: "Jupyter Lab" },
  { id: 3, image: LangflowScreenshot, label: "Langflow Lab" },
];

const builderSlides = [
  { id: 1, image: Builder1, label: "Builder-labs Card Image" },
  { id: 2, image: Builder2, label: "Builder-labs Screen Image" },
  { id: 3, image: Builder3, label: "Builder-labs UI Image" },
];

const adminSlides = [
  { id: 1, image: AdminDashboard, label: "Admin Dashboard" },
  { id: 2, image: UsersManagement, label: "Users Management" },
  { id: 3, image: UserProfileOverview, label: "User Profile Overview" },
  { id: 4, image: LabsManagement, label: "Labs Management" },
  { id: 5, image: AssessmentsManagement, label: "Assessments Management" },
  { id: 6, image: Visualization, label: "Visualization" },
];

const AgenticAIBuilderPlayground = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBuilderSlide, setActiveBuilderSlide] = useState(0);
  const [activeAdminSlide, setActiveAdminSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % learnerSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBuilderSlide((prev) => (prev + 1) % builderSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdminSlide((prev) => (prev + 1) % adminSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto py-20 md:py-32 px-4 mt-20 md:mt-0">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 mb-6 md:mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Sparkles className="w-4 h-4 text-[#1569a9]" />
          <span className="text-xs md:text-sm font-semibold text-[#1569a9]">
            LEARN AI BY BUILDING
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-neutral-900">Agentic AI Builder</span>
          <span className="block -mt-2 bg-gradient-to-r from-[#1569a9] to-[#0d5a8f] bg-clip-text text-transparent">
            Playground
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Transform your workforce with our CASH (Continuous, Accelerated,
          Scalable, Holistic) model for high-impact AI talent transformation
        </p>
      </div>

      {/* Challenge & Solution Section */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Problem Statement */}
          <GradientCard className="transition-all duration-300 rounded-xl">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className="p-2 md:p-3 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                  Problem Statement
                </h3>
              </div>
              <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                <p>
                  The rapid progress in Artificial Intelligence is disrupting
                  traditional models of Tech Services and business process
                  management.
                </p>
                <p>
                  Enterprises & Tech SIs struggle to align their workforce to
                  leverage & monetize AI effectively.
                </p>
                <p>
                  Current AI talent transformation approaches using online
                  courses & budget trainers lack real business impact.
                </p>
              </div>
            </div>
          </GradientCard>

          {/* Our Solution */}
          <GradientCard className=" rounded-xl transition-all duration-300">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className="p-2 md:p-3 rounded-lg bg-[#1569a9]/10 border border-[#1569a9]/20">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-[#1569a9]" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                  Our Solution
                </h3>
              </div>
              <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                <p>
                  Our approach to high impact AI Talent Transformation is
                  delivered via our{" "}
                  <strong className="text-neutral-900 font-semibold">
                    CASH
                  </strong>{" "}
                  model (Continuous, Accelerated, Scalable, Holistic), driven by
                  the Agentic AI Playground.
                </p>
                <p>
                  Customized learning journeys, hands-on labs, and
                  enterprise-grade infrastructure make progress measurable and
                  practical.
                </p>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>

      {/* Learner Labs Section */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-32">
        <GradientCard className="rounded-2xl overflow-hidden">
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
              <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-[#1569a9] to-[#0d5a8f] shadow-lg">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  Learner Labs
                </h3>
                <p className="text-sm md:text-base text-neutral-600 max-w-4xl">
                  Practical, guided/ instruction based labs with tech/ business
                  scenario, bundled with AI tool, Cloud & AI Infra (models,
                  memory, etc). Perfect for self-paced learning of application
                  of new AI technologies/ concepts. Each lab takes 30-120 mins
                  to complete.
                </p>
              </div>
            </div>

            {/* Platform Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 my-6 md:my-8">
              <div className="flex items-center justify-center p-3 md:p-4 bg-neutral-50 rounded-xl md:rounded-2xl border border-neutral-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
                  alt="Jupyter"
                  className="h-8 md:h-10 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-neutral-50 rounded-xl md:rounded-2xl border border-neutral-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="AWS"
                  className="h-8 md:h-10 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-neutral-50 rounded-xl md:rounded-2xl border border-neutral-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                  alt="VS Code"
                  className="h-8 md:h-10 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-neutral-50 rounded-xl md:rounded-2xl border border-neutral-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img
                  src={LangflowLogo}
                  alt="Langflow"
                  className="h-8 md:h-10 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-neutral-50 rounded-xl md:rounded-2xl border border-neutral-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img
                  src={N8nLogo}
                  alt="n8n"
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            </div>

            {/* Lab Preview Slideshow */}
            <div className="relative rounded-xl border-2 border-neutral-200 bg-white overflow-hidden">
              <div className="relative aspect-video">
                {learnerSlides.map((slide, index) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.label}
                    className={`absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-500 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {learnerSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? "bg-[#1569a9] scale-125"
                        : "bg-neutral-400 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-sm text-neutral-600 max-w-2xl">
                Each lab comes with step-by-step exercises, built-in terminals,
                and cloud credits to provision small sandbox resources.
                Beautifully designed for clarity and focus.
              </p>
              <a href="#labs">
                <LiquidButton className=" rounded-xs">
                  Explore Labs
                </LiquidButton>
              </a>
            </div>
          </div>
        </GradientCard>
      </div>

      {/* Builder Labs Section */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-32">
        <GradientCard className="rounded-2xl overflow-hidden">
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
              <div className="p-2 md:p-3 rounded-xl bg-cyan-50 border border-cyan-200">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-700" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  Builder Labs
                </h3>
                <p className="text-sm md:text-base text-neutral-600 max-w-4xl">
                  AI Agent & RAG Builder Environment with AI Infra & deployment
                  options and problem statement/business use cases - Accelerate
                  your AI Architect/ Builder skill development by designing,
                  developing & deploying.
                </p>
              </div>
            </div>

            {/* Builder Lab Slideshow */}
            <div className="relative rounded-xl border-2 border-neutral-200 bg-white overflow-hidden">
              <div className="relative aspect-video">
                {builderSlides.map((slide, index) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.label}
                    className={`absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-500 ${
                      index === activeBuilderSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {builderSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveBuilderSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeBuilderSlide === index
                        ? "bg-cyan-600 scale-125"
                        : "bg-neutral-400 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-sm text-neutral-600 max-w-2xl">
                Builder Labs lets teams prototype, test and deploy agentic
                applications with CI support and one-click sandbox deploys.
              </p>
              <LiquidButton size={"lg"} className=" rounded-xs">
                Learn More
              </LiquidButton>
            </div>
          </div>
        </GradientCard>
      </div>

      {/* Administration & Analytics Section */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-32">
        <GradientCard className="rounded-2xl overflow-hidden">
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
              <div className="p-2 md:p-3 rounded-xl bg-purple-50 border border-purple-200">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  Administration & Analytics
                </h3>
                <p className="text-sm md:text-base text-neutral-600 max-w-4xl">
                  Comprehensive admin dashboard, user management, and detailed
                  performance analytics. Monitor skill growth, track usage, and
                  manage your organization's AI adoption journey.
                </p>
              </div>
            </div>

            {/* Admin Slideshow */}
            <div className="relative rounded-xl border-2 border-neutral-200 bg-white overflow-hidden">
              <div className="relative aspect-video">
                {adminSlides.map((slide, index) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.label}
                    className={`absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-500 ${
                      index === activeAdminSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {adminSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveAdminSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeAdminSlide === index
                        ? "bg-purple-600 scale-125"
                        : "bg-neutral-400 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to ${slide.label}`}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-sm text-neutral-600 max-w-2xl">
                Powerful tools for admins to manage users, labs, and
                assessments, while providing deep insights into skill
                development.
              </p>
              <LiquidButton size={"lg"} className=" rounded-xs">
                Learn More
              </LiquidButton>
            </div>
          </div>
        </GradientCard>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            A simple 5-step process to transform your workforce with AI
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1569a9] via-purple-500 to-green-500 opacity-20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16 relative">
            {[
              {
                icon: CheckCircle2,
                title: "Subscription",
                description:
                  "Enterprise buys Playground subscription for fixed no of seats",
                color: "#1569a9",
              },
              {
                icon: UserPlus,
                title: "Onboarding",
                description:
                  "Users onboarded, assigned to designated learning paths",
                color: "#9333ea",
              },
              {
                icon: MonitorPlay,
                title: "Assignment",
                description:
                  "Users assigned new learner & builder labs, assessments in their learning paths, every month",
                color: "#06b6d4",
              },
              {
                icon: BarChart2,
                title: "Monitoring",
                description:
                  "Progress on a user's labs & assessments usage is monitored & converted to skill score & usage analytics",
                color: "#ec4899",
              },
              {
                icon: TrendingUp,
                title: "Impact",
                description:
                  "Continuous practice on our app improves skill score & project readiness of users.",
                color: "#10b981",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div className="flex-1 text-center md:text-left">
                    <GradientCard className="rounded-xl p-4 md:p-6">
                      <div
                        className={`flex flex-col gap-2 md:gap-3 items-center ${
                          index % 2 === 0
                            ? "md:items-start md:text-left"
                            : "md:items-end md:text-right"
                        }`}
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs md:text-sm font-semibold text-neutral-700">
                          Step {index + 1}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </GradientCard>
                  </div>

                  {/* Center Icon */}
                  <div className="relative shrink-0 z-10">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-white shadow-2xl"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon
                        className="w-8 h-8 md:w-10 md:h-10"
                        style={{ color: step.color }}
                      />
                    </div>
                  </div>

                  {/* Empty Side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Tools & Technologies Marquee Section */}
      <div className="max-w-full mx-auto mt-16 md:mt-32 mb-12 md:mb-20 overflow-hidden">
        <div className="text-center mb-x8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            AI Tools & Technologies
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Industry-leading platforms and frameworks integrated into our
            playground
          </p>
        </div>

        <div className="space-y-6">
          {/* Row 1 - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 flex-shrink-0">
                  {[
                    OpenAILogo,
                    ClaudeAILogo,
                    ClaudeCodeLogo,
                    GoogleGeminiLogo,
                    MetaLogo,
                    VisualStudioCodeLogo,
                    JupyterLogo,
                    GoogleAIStudioLogo,
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="h-24 w-40 flex-shrink-0 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-xl hover:border-[#1569a9]/40 hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={logo}
                        alt="AI Tool Logo"
                        className="max-h-14 max-w-[130px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee-reverse">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 flex-shrink-0">
                  {[
                    AmazonWebServicesLogo,
                    AWSBedrockLogo,
                    AzureFoundryLogo,
                    VertexAILogo,
                    GoogleADKLogo,
                    MicrosoftAgentFrameworkLogo,
                    Microsoft365CopilotLogo,
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="h-24 w-40 flex-shrink-0 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-xl hover:border-[#1569a9]/40 hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={logo}
                        alt="AI Tool Logo"
                        className="max-h-14 max-w-[130px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 flex-shrink-0">
                  {[
                    LangflowLogo,
                    N8nLogo,
                    GalileoLogo,
                    GitHubCopilotLogo,
                    StrandsAgentsLogo,
                    LanggraphLogo,
                    KoreaiLogo,
                    LovableLogo,
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="h-24 w-40 flex-shrink-0 flex items-center justify-center bg-white border-2 border-neutral-200 rounded-xl hover:border-[#1569a9]/40 hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={logo}
                        alt="AI Tool Logo"
                        className="max-h-14 max-w-[130px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Learning Paths Section */}
      <div
        id="labs"
        className="max-w-6xl mx-auto mt-16 md:mt-32 mb-12 md:mb-20"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Our AI Learning Paths
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: "Agentic AI Architect",
              desc: "Design scalable, secure, enterprise-grade agentic AI systems",
              Icon: Users,
            },
            {
              title: "Agentic AI Engineer",
              desc: "Build and deploy production-ready AI agent applications",
              Icon: Brain,
            },
            {
              title: "AI Evals Engineer",
              desc: "Design evaluation frameworks for quality, safety, and alignment",
              Icon: BarChart3,
            },
            {
              title: "AI-SDLC Engineer",
              desc: "Operationalize AI across CI/CD, testing, monitoring, and governance",
              Icon: Code2,
            },
            {
              title: "AI Strategist",
              desc: "Translate business goals into high-impact AI strategies",
              Icon: Lightbulb,
            },
            {
              title: "AI Business Consultant",
              desc: "Drive ROI-driven AI adoption and transformation programs",
              Icon: Target,
            },
          ].map(({ title, desc, Icon }) => (
            <GradientCard
              key={title}
              className="group h-full hover:border-[#9333ea]/30 transition-all duration-300 rounded-xl"
            >
              <div className="h-full flex flex-col gap-4 p-6">
                <div className="inline-flex p-2.5 rounded-lg border bg-[#9333ea]/10 border-[#9333ea]/20 w-fit">
                  <Icon className="w-5 h-5 text-[#9333ea]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AgenticAIBuilderPlayground;
