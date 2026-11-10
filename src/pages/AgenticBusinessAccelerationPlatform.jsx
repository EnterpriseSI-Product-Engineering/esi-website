import { Link } from "react-router";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Mail,
  Lightbulb,
  Rocket,
  BookOpen,
  FlaskConical,
  Repeat,
  CheckCircle2,
  Layers,
  Bot,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { GradientCard } from "@/components/ui/animatedcard";

const transformationSteps = [
  {
    step: "01",
    agenda: "Learn",
    tagline: "AI Talent Transformation",
    icon: BookOpen,
    color: "from-blue-600 to-cyan-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Via our Agentic AI Playground & Skilling programs.",
    details:
      "Start or accelerate your AI Talent Transformation journey. Ideal for upskilling tech and business employees beyond static video courses into interactive, hands-on environments.",
  },
  {
    step: "02",
    agenda: "Experiment & Prototype",
    tagline: "Sandbox & Digital Twins",
    icon: FlaskConical,
    color: "from-purple-600 to-indigo-500",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    description:
      "Via our AI Sandbox with Agentic Digital Twins, Agentic Process Templates & Agentic Business Copilots.",
    details:
      "Empower employees with hands-on labs and experimentation. Build your dedicated AI Engineering Lab and AI Engineer pods within our secure, isolated platform.",
  },
  {
    step: "03",
    agenda: "Pilot & Test Drive",
    tagline: "Accelerators & AI Coaches",
    icon: Rocket,
    color: "from-emerald-600 to-teal-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Via our AI Coach Service & Agentic Pilot Accelerators.",
    details:
      "Identify high-impact Agentic AI use cases and execute rapid pilots. Leverage pre-built accelerators and AI coaches to reduce lead time, cost, and effort by 50% or more.",
  },
  {
    step: "04",
    agenda: "Implement / Adopt & Optimize",
    tagline: "Turnkey AI Systems & Staffing",
    icon: Repeat,
    color: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    description:
      "Via our AI Implementation (Project turnkey) & Staffing services.",
    details:
      "Deploy Agentic applications safely into production. Benefit from enterprise AI architecture, governance design, implementation support, and continuous loop optimization.",
  },
];

const enterprisePersonas = [
  {
    title: "Start / Accelerate AI Talent Transformation",
    recommended: "Learn Solutions",
    color: "text-blue-600",
    bg: "bg-blue-50/60 border-blue-100",
    description:
      "If you are looking to kickstart or accelerate your organizational AI competency, our 'Learn' solutions provide a structured, hands-on starting point tailored to enterprise needs.",
  },
  {
    title: "Upgrade from Passive Courses to Hands-on Engineering",
    recommended: "Learn + Experiment & Prototype",
    color: "text-purple-600",
    bg: "bg-purple-50/60 border-purple-100",
    description:
      "Move beyond self-learning video courses and instructor-led lectures. Employees get access to real builder labs, digital twins, and prototyping environments to form internal AI Engineer pods.",
  },
  {
    title: "Identify Use Cases & Execute Pilots Fast",
    recommended: "Pilot & Test Drive",
    color: "text-emerald-600",
    bg: "bg-emerald-50/60 border-emerald-100",
    description:
      "De-risk innovation by testing enterprise use cases in realistic sandboxes. Our AI Coaches and Pilot Accelerators slash pilot lead time, cost, and execution risks by 50% or more.",
  },
  {
    title: "Deploy Agentic AI into Production Safely",
    recommended: "Adopt & Optimize",
    color: "text-amber-600",
    bg: "bg-amber-50/60 border-amber-100",
    description:
      "Transition prototypes to mission-critical business environments. Leverage our end-to-end Architecture, Turnkey Implementation, and Support services to guarantee operational success.",
  },
];

const industries = [
  "Banking & Financial Services",
  "Insurance",
  "Healthcare",
  "CPG / FMCG",
  "Oil & Gas",
  "Pharma & Life Sciences",
  "Professional Services (IT / Consulting)",
  "Manufacturing & Logistics",
];

const AgenticBusinessAccelerationPlatform = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto mt-20">
        {/* Navigation Breadcrumb */}
        <Link
          to="/thought-leadership/product-innovations"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#1569a9] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Product Innovations
        </Link>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#1569a9]" />
          <span className="text-xs font-semibold text-[#1569a9] uppercase tracking-wider">
            Platform Architecture &bull; Thought Leadership
          </span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
          Agentic Business Acceleration Platform & our platform driven &ldquo;AI
          Native Enterprise&rdquo; Transformation Loop
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed mb-10 pb-8 border-b border-neutral-200">
          A blueprint for Fortune 2000 organizations to systematically upskill
          talent, experiment in secure sandboxes, accelerate pilot success, and
          scale autonomous agentic workflows into production.
        </p>

        {/* Major Modules Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-[#1569a9]" />
            Two Core Platform Modules
          </h2>
          <p className="text-neutral-600 mb-6 leading-relaxed">
            EnterpriseSI bridges the gap between AI experimentation and
            enterprise-grade deployment through two synergistic pillars:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <GradientCard className="rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Agentic AI Playground
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Interactive hands-on development environments, pre-seeded
                    labs, and experiential learning pathways empowering both tech
                    and business talent to build AI intuition.
                  </p>
                </div>
              </div>
            </GradientCard>

            <GradientCard className="rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Agentic AI Sandbox & Pilot Accelerators
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Secure virtual cloud sandboxes equipped with Agentic Digital
                    Twins, reusable business process templates, and turnkey pilot
                    accelerators to validate ROI in weeks.
                  </p>
                </div>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* TRANSFORMATION LOOP DIAGRAM */}
        <div className="my-16 rounded-3xl bg-gradient-to-b from-neutral-50 to-white border border-neutral-200 p-6 md:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1569a9]/10 text-[#1569a9] text-xs font-semibold mb-3">
              Transformation Loop Diagram
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              The 4 Major AI Transformation Agendas
            </h2>
            <p className="text-sm text-neutral-600">
              Our continuous, platform-driven cycle that propels organizations
              toward becoming true AI-Native Enterprises.
            </p>
          </div>

          {/* Connected Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {transformationSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeBg}`}
                      >
                        Step {item.step} &bull; {item.agenda}
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 text-neutral-700">
                        <Icon className="w-5 h-5 text-[#1569a9]" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-1">
                      {item.tagline}
                    </h3>
                    <p className="text-xs font-semibold text-[#1569a9] mb-3">
                      {item.description}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                    <span>Continuous Acceleration Loop</span>
                    <ArrowRight className="w-4 h-4 text-[#1569a9]" />
                  </div>
                </Motion.div>
              );
            })}
          </div>

          {/* Loop Cycle Banner */}
          <div className="mt-8 text-center p-4 rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 flex items-center justify-center gap-3">
            <Repeat className="w-5 h-5 text-[#1569a9] animate-spin-slow" />
            <span className="text-sm font-semibold text-[#1569a9]">
              Iterative, Scalable &amp; Self-Reinforcing Transformation Engine
            </span>
          </div>
        </div>

        {/* Enterprise Entry Points Section */}
        <div className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Where Does Your Enterprise Start?
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Depending on your organizational maturity and current adoption
            initiatives, here is how you can plug into our loop:
          </p>

          <div className="space-y-4">
            {enterprisePersonas.map((persona, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${persona.bg} transition-all duration-200`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${persona.color}`} />
                    {persona.title}
                  </h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${persona.color} px-2.5 py-1 rounded-md bg-white border border-neutral-200/80 w-fit`}
                  >
                    {persona.recommended}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applicability */}
        <div className="my-16 p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
          <h3 className="text-lg font-bold text-neutral-900 mb-2">
            Cross-Industry Relevance
          </h3>
          <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
            Our agentic acceleration templates and blueprints are pre-tuned for
            high-governance and complex enterprise domains:
          </p>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span
                key={ind}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-2xs"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Contact & Demo Callout */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-[#1569a9]/10 via-purple-500/10 to-[#1569a9]/10 border border-[#1569a9]/30 p-8 md:p-10 text-center">
          <Sparkles className="w-8 h-8 text-[#1569a9] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Schedule a Demo &amp; Architecture Discussion
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Want to learn more on how our platform-driven scalable AI
            Acceleration loop can fit into your enterprise initiatives? Reach out
            directly to our leadership and architecture teams:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:abhiroop@enterprisesi.co"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-semibold text-neutral-800 border border-neutral-200 hover:border-[#1569a9] hover:text-[#1569a9] shadow-2xs transition-all"
            >
              <Mail className="w-4 h-4 text-[#1569a9]" />
              abhiroop@enterprisesi.co
            </a>
            <a
              href="mailto:bd@enterprisesi.co"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-semibold text-neutral-800 border border-neutral-200 hover:border-[#1569a9] hover:text-[#1569a9] shadow-2xs transition-all"
            >
              <Mail className="w-4 h-4 text-[#1569a9]" />
              bd@enterprisesi.co
            </a>
            <a
              href="mailto:sales@enterprisesi.co"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-semibold text-neutral-800 border border-neutral-200 hover:border-[#1569a9] hover:text-[#1569a9] shadow-2xs transition-all"
            >
              <Mail className="w-4 h-4 text-[#1569a9]" />
              sales@enterprisesi.co
            </a>
          </div>

          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1569a9] text-white font-semibold hover:bg-[#12578c] shadow-md transition-all hover:gap-3"
          >
            Book a Demo Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgenticBusinessAccelerationPlatform;
