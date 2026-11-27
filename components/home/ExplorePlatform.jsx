"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gamepad2,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
} from "lucide-react";

const PLATFORM_TABS = [
  {
    id: "playground",
    title: "AI Builder Playground",
    badge: "For Engineers & Architects",
    icon: Gamepad2,
    heading: "Agentic AI Builder Playground",
    summary:
      "Interactive cloud development environment for AI developers, forward deployed engineers, and product teams to prototype, test, and benchmark agentic workflows.",
    points: [
      "Zero-setup sandboxes equipped with A100/V100 GPUs and fine-tuning infra",
      "Native integrations with LangGraph, LangFlow, Jupyter, Claude, OpenAI & Bedrock",
      "StacBot AI companion for 1-on-1, interactive, live coding guidance",
      "CASH model (Continuous, Accelerated, Scalable & Holistic) talent scoring",
    ],
    features: [
      { name: "Cloud Sandboxes", desc: "Instant containerized dev environments" },
      { name: "Model Benchmarking", desc: "Multi-LLM evaluation & prompt tuning" },
      { name: "Digital Twins", desc: "Simulated enterprise datasets & environments" },
    ],
    href: "/product/agentic-ai-builder-playground",
    buttonText: "Explore Builder Playground",
  },
  {
    id: "accelerators",
    title: "Business Pilot Accelerators",
    badge: "For Enterprise Business Units",
    icon: Zap,
    heading: "Agentic AI Business Pilot Accelerators",
    summary:
      "Production-grade, pre-built domain copilots that cut pilot lead times and costs by 50%+ with enterprise governance and human-in-the-loop oversight.",
    points: [
      "Finance & Accounting: Automated 3-way matching, reconciliation & invoice generation",
      "Internal Auditing: Risk-based audit planning, automated evidence gathering & DB queries",
      "Risk & Compliance: Real-time vendor risk assessment, VAT agent & policy enforcement",
      "Reduces pilot failure rate and accelerates pilot-to-production journeys",
    ],
    features: [
      { name: "Finance Copilots", desc: "Automate invoice, reconciliations & timesheets" },
      { name: "Audit Copilots", desc: "Evidence collection & findings management" },
      { name: "Risk & VAT Agents", desc: "Vendor due diligence & continuous compliance" },
    ],
    href: "/product/agentic-ai-business-pilot-accelerators",
    buttonText: "Explore Pilot Accelerators",
  },
  {
    id: "enablement",
    title: "Workforce & Talent Strategy",
    badge: "For Leadership & Teams",
    icon: Users,
    heading: "AI Talent Transformation & Advisory",
    summary:
      "Scalable skilling programs and advisory services that empower enterprise teams to master agentic AI without trainer bottlenecks.",
    points: [
      "Role-specific pathways for Business Leaders, Engineers, and Domain Experts",
      "AI Forward Deployed Architect coaching and advisory series",
      "Autonomous skilling at scale with interactive practical lab assessments",
      "Adoption frameworks designed for enterprise governance, risk, and safety",
    ],
    features: [
      { name: "AI Skilling at Scale", desc: "Practical hands-on lab learning" },
      { name: "AI Architect Advisory", desc: "Forward Deployed coaching & design" },
      { name: "Business AI Programs", desc: "Strategy for C-suite & line-of-business" },
    ],
    href: "/solutions/ai-talent-transformation-strategy",
    buttonText: "Explore Talent Solutions",
  },
];

export default function ExplorePlatform() {
  const [activeTab, setActiveTab] = useState("playground");
  const current = PLATFORM_TABS.find((t) => t.id === activeTab) || PLATFORM_TABS[0];

  return (
    <section id="explore-platform" className="py-20 md:py-28 bg-[#f8fafc] border-b border-neutral-300/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#047857]/10 text-[#047857] text-xs font-semibold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            The Acceleration Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Explore the EnterpriseSI Platform
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            A cohesive ecosystem architected for enterprise speed, security, and measurable ROI across every phase of your AI transformation.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PLATFORM_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#047857] text-white border-[#047857] shadow-md shadow-[#047857]/20"
                    : "bg-[#f8fafc] text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:bg-[#eef2f7]"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#047857]"}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="rounded-3xl bg-[#f8fafc] border border-neutral-300/90 shadow-xl p-6 sm:p-8 md:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#047857] bg-[#047857]/10 px-3 py-1 rounded-full mb-3">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                  {current.heading}
                </h3>
                <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                  {current.summary}
                </p>
              </div>

              {/* Key Capabilities List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Core Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700 leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-medium text-sm transition-all duration-200 shadow-md shadow-[#047857]/25 hover:shadow-lg hover:shadow-[#047857]/35 cursor-pointer"
                >
                  <span>{current.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-[#047857] transition-colors"
                >
                  View complete platform architecture
                </Link>
              </div>
            </div>

            {/* Right Feature Highlights Column */}
            <div className="lg:col-span-5 bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-neutral-300/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-300">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Feature Highlights
                </span>
                <span className="text-xs text-[#047857] font-medium">EnterpriseSI Platform</span>
              </div>

              <div className="space-y-3">
                {current.features.map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#f8fafc] border border-neutral-300/80 shadow-xs hover:border-[#047857]/40 transition-colors"
                  >
                    <div className="font-semibold text-sm text-neutral-900 mb-1">{f.name}</div>
                    <div className="text-xs text-neutral-500 leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#047857]/5 border border-[#047857]/20 text-xs text-neutral-700 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                <span>
                  All environments adhere to SOC2, ISO27001, and human-in-the-loop enterprise governance protocols.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
