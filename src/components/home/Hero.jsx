import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ThreeAnimation from "../common/HeroAnimation";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  Check,
} from "lucide-react";

// import { Link } from "react-router";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/ployai/6e4aa4d4-61c8-4835-97ad-24842405b902/user/854097f0-ai-generated-1784186932651.webp";

const DEFAULT_PROOF = [
  { title: "Build", detail: "Agentic playgrounds" },
  { title: "Pilot", detail: "Business accelerators" },
  { title: "Scale", detail: "Talent transformation" },
];

const OUTCOMES = [
  {
    icon: Users,
    title: "Improve Customer Experience",
    description: "Marketing | Service | E-Com | Sales | UI-UX Transformation",
  },
  {
    icon: Workflow,
    title: "Improve Business Processes",
    description:
      "Process Intelligence | Process Automation | Process Optimization | Process Analytics & Exception Handling",
  },
  {
    icon: TrendingUp,
    title: "Improve Revenue, Profit & Cash Flow",
    description:
      "Revenue Generation | Profit Optimization | Cash Flow Management",
  },
  {
    icon: Lightbulb,
    title: "Improve Employee Productivity & Creativity",
    description:
      "Intelligent Assistance | Augmentation | Learning & Development",
  },
  {
    icon: Code2,
    title: "Improve Software Development Outcomes",
    description:
      "Design & Analysis | Coding | Testing | Deployment | Operations Transformation",
  },
  {
    icon: BarChart3,
    title: "Improve Analysis & Decision Making",
    description:
      "Real Time Insights | Next Best Action / Recommendation | Insight-to-action | Decision Simulation / What-if analysis",
  },
  {
    icon: ShieldCheck,
    title: "Improve Regulatory Compliance & Risk Management",
    description:
      "Real Time Risk / Threat Detection | Compliance Automation | Audit reporting augmentation | Audit task automation",
  },
];

const CAPABILITIES = [
  "Secure agentic AI builder playgrounds",
  "Ready-to-pilot business accelerators",
  "Business and technical AI programs",
  "Governed, human-controlled adoption",
];

const Hero = ({
  title = "Turn enterprise AI into measurable outcomes.",
  description = "EnterpriseSI brings agentic accelerators, secure builder playgrounds, and workforce transformation into one human-controlled path from idea to production.",
  image = DEFAULT_IMAGE,
  imageAlt = "Enterprise AI process planning in a modern boardroom",
  primaryLabel = "Book a demo",
  primaryHref = "/demo",
  secondaryLabel = "Explore platform",
  secondaryHref = "/product",
  captionLabel = "Human in control",
  caption = "Move from mapped opportunity to governed agentic workflow without losing business oversight.",
  proof = DEFAULT_PROOF,
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-20 ">
      <section className="hero mx-auto grid max-w-7xl lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          className="hero__copy flex min-h-[34rem] flex-col justify-center px-6 py-16 lg:min-h-[43rem] lg:px-8 lg:py-24"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="hero__title max-w-xl text-balance font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl lg:text-5xl">
            {/* {title} */}
            Scale your Forward Deployed AI Engineering & Implementation outcomes
            with Agentic Business Acceleration Platform.
          </h1>
          <p className="hero__description mt-7 max-w-lg text-lg leading-8 text-ploy-text-secondary">
            {description}
          </p>
          <div className="hero__actions mt-9 flex flex-wrap items-center gap-4">
            <LiquidButton size={"lg"}>
              <span className="flex items-center gap-1">
                <span>Book a demo</span>
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </LiquidButton>

            <LiquidButton size={"lg"}>
              <span className="flex items-center gap-1">
                <span>Explore platform</span>
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </LiquidButton>
          </div>
          <div
            className={`hero__proof mt-12 grid max-w-lg border-t border-ploy-border-primary pt-6 text-sm ${proof.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}
          >
            {proof.map((item) => (
              <div key={item.title}>
                <strong className="block font-semibold">{item.title}</strong>
                <span className="text-ploy-text-secondary">{item.detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hero__visual relative min-h-[30rem] overflow-hidden rounded-bl-card lg:min-h-[43rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute bottom-5 left-5 max-w-xs rounded-card border border-white/60 bg-white/88 p-4 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ploy-accent-primary">
              {captionLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-ploy-text-primary">
              {caption}
            </p>
          </div>
        </motion.div>
      </section>
      <section
        className="outcomes mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
        id="outcomes"
      >
        <div className="outcomes__header mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ploy-accent-primary">
              Our vision
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-heading text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Agentic AI acceleration, structured around business outcomes.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-ploy-text-secondary">
              Our Agentic AI Acceleration platform provides AI Accelerators
              &amp; Playgrounds helping Enterprises embrace Artificial General
              Intelligence in a structured manner, enabling Business Outcomes
              like:
            </p>
            <a
              href="/product"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ploy-accent-primary"
            >
              Explore platform <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="outcomes__grid grid border-t border-ploy-border-primary md:grid-cols-2 xl:grid-cols-3">
          {OUTCOMES.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <article
                key={outcome.title}
                className={`outcomes__item flex min-h-64 flex-col border-b border-ploy-border-primary p-6 md:p-8 ${
                  index % 3 !== 2 ? "xl:border-r" : ""
                } ${index % 2 === 0 ? "md:border-r xl:border-r" : "md:border-r-0"}`}
              >
                <Icon
                  size={24}
                  strokeWidth={1.6}
                  className="text-ploy-accent-primary"
                />
                <h3 className="mt-10 max-w-sm text-balance font-heading text-2xl font-semibold tracking-tight">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ploy-text-secondary">
                  {outcome.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="">
        <div className="mx-auto grid max-w-7xl gap-16 px-6  lg:grid-cols-2 lg:px-8 ">
          <div className="platform__visual relative self-start space-y-3">
            <img
              src="/src/assets/landing/esi-01.png"
              alt="EnterpriseSI agentic AI builder labs"
              className="w-full rounded-card border border-gray-300 object-cover rounded-md overflow-hidden"
            />
            <img
              src="/src/assets/landing/esi-02.png"
              alt="Auditor copilot accelerator interface"
              className="w-full rounded-card border border-gray-300 object-cover rounded-md overflow-hidden"
            />
            <img
              src="/src/assets/landing/esi-03.png"
              alt="EnterpriseSI lab visualization interface"
              className="w-full rounded-card border border-gray-300 object-cover rounded-md overflow-hidden"
            />
            <div className="mt-4 grid grid-cols-2 gap-4"></div>
          </div>

          <div className="platform__copy flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ploy-accent-primary">
              The acceleration platform
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-heading text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              From AI ambition to a controlled operating capability.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ploy-text-secondary">
              EnterpriseSI connects experimentation, business pilots, and
              workforce readiness so teams can move faster without separating
              innovation from governance.
            </p>
            <ul className="mt-9 grid gap-0 border-t border-ploy-border-primary">
              {CAPABILITIES.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 border-b border-ploy-border-primary py-4 text-sm font-medium"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-button bg-ploy-accent-primary text-ploy-text-on-accent-primary">
                    <Check size={15} />
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <LiquidButton size={"lg"}>
                <span className="flex items-center gap-1">
                  <span>Explore Products</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </LiquidButton>
            </div>
          </div>
        </div>
      </section>

      {/* <div className=" mt-24 flex flex-col items-start justify-between gap-8 pt-12 md:flex-row md:items-end">
        <div>
          <h3 className="max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to turn your next AI initiative into an operating advantage?
          </h3>
          <p className="mt-4 text-ploy-text-secondary">
            Bring the business problem. EnterpriseSI will help shape the path.
          </p>
        </div>
        <a
          href="https://enterprisesi.co/demo"
          className="shrink-0 rounded-button bg-ploy-button-primary-background px-5 py-3.5 text-sm font-medium text-ploy-button-primary-text"
        >
          Book a demo
        </a>
      </div> */}
    </div>
  );
};

export default Hero;
