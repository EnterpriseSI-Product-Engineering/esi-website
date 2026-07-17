import EveryThingInOnePlatform from "../components/home/EveryThingInOnePlatform";
import Stacbot from "../components/home/Stacbot";
import WhoIsItFor from "../components/home/WhoIsItFor";
import WhatWeOffer from "../components/home/WhatWeOffer";
import Hero from "../components/home/Hero";
import VideShowCase from "../components/home/VideoShowCase";
import Vision from "../components/home/Vision";
import Features from "../components/home/Features";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Link } from "react-router";
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

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Vision /> */}
      {/* <Features /> */}
      {/* <div className="flex items-center justify-center">
        <Link to="/product">
          <LiquidButton size={"lg"}>Explore our Products</LiquidButton>
        </Link>
      </div> */}
      {/* <WhatWeOffer /> */}
      {/* <VideShowCase /> */}
      {/* <EveryThingInOnePlatform /> */}
      {/* <Stacbot /> */}
      {/* <WhoIsItFor /> */}

      <section
        className="outcomes mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-32"
        id="outcomes"
      >
        <div className="outcomes__header mb-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ploy-accent-primary">
              Our vision
            </p>
            <h2 className="mt-3 max-w-xl text-balance font-heading text-2xl font-semibold tracking-[-0.02em] md:mt-4 md:text-3xl md:tracking-[-0.035em] lg:text-4xl">
              Agentic AI acceleration, structured around business outcomes.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-6 md:text-lg md:leading-8 text-ploy-text-secondary">
              Our Agentic AI Acceleration platform provides AI Accelerators
              &amp; Playgrounds helping Enterprises embrace Artificial General
              Intelligence in a structured manner, enabling Business Outcomes
              like:
            </p>
            <Link
              to="/product"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ploy-accent-primary md:mt-6"
            >
              Explore platform <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="outcomes__grid grid border-t border-ploy-border-primary grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {OUTCOMES.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <article
                key={outcome.title}
                className={`outcomes__item flex min-h-[auto] flex-col border-b border-l border-ploy-border-primary p-5 md:p-8 ${
                  index % 3 !== 2 ? "xl:border-r" : ""
                } ${index % 2 === 0 ? "md:border-r xl:border-r" : ""} ${index == 5 ? "border-r" : ""}`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="text-ploy-accent-primary"
                />
                <h3 className="mt-6 max-w-sm text-balance font-heading text-xl font-semibold tracking-tight md:mt-10 md:text-2xl">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ploy-text-secondary md:mt-4">
                  {outcome.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* <section className="">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="platform__visual relative self-start space-y-3 order-2 lg:order-1">
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

          <div className="platform__copy flex flex-col justify-center order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ploy-accent-primary">
              The acceleration platform
            </p>
            <h2 className="mt-3 max-w-xl text-balance font-heading text-2xl font-semibold tracking-[-0.02em] md:mt-4 md:text-3xl md:tracking-[-0.035em] lg:text-4xl">
              From AI ambition to a controlled operating capability.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-6 md:mt-6 md:text-lg md:leading-8 text-ploy-text-secondary">
              EnterpriseSI connects experimentation, business pilots, and
              workforce readiness so teams can move faster without separating
              innovation from governance.
            </p>
            <ul className="mt-6 grid gap-0 border-t border-ploy-border-primary md:mt-9">
              {CAPABILITIES.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 border-b border-ploy-border-primary py-3 text-sm font-medium md:py-4"
                >
                  <span className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-button bg-ploy-accent-primary text-ploy-text-on-accent-primary">
                    <Check size={14} />
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-4 md:mt-6">
              <LiquidButton size={"lg"}>
                <span className="flex items-center gap-1">
                  <span>Explore Products</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </LiquidButton>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
