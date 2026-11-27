import { Bot, Cpu, ShieldCheck, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: Bot,
    title: "Agentic Systems",
    description:
      "Multi-agent workflows that act on their own, with humans in control.",
  },
  {
    icon: Cpu,
    title: "Instant Sandboxes",
    description:
      "Secure cloud environments with A100/V100 GPUs, enterprise templates and our StacBot AI companion.",
  },
  {
    icon: ShieldCheck,
    title: "Governed and Audit-Ready",
    description:
      "Built-in guardrails, compliance automation and chain-of-custody tracking at every step.",
    wide: true,
  },
];

const IconBox = ({ icon: Icon }) => (
  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#047857]/10 text-[#047857]">
    <Icon className="h-5 w-5" aria-hidden="true" />
  </span>
);

export default function AboutShortDesc() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#f8fafc] border-b border-neutral-300/60"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#047857]">
            About EnterpriseSI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Turn AI Ambition into{" "}
            <span className="text-[#047857]">Operating Advantage</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured card */}
          <article className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] p-8 text-emerald-950 md:col-span-2 lg:col-span-1 lg:row-span-2">
            <Zap
              className="absolute -right-10 -top-10 h-56 w-56 text-white/60"
              aria-hidden="true"
            />
            <p className="relative">
              <span className="block text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                50%+
              </span>
              <span className="mt-3 block text-lg text-emerald-900">
                shorter AI pilot cycles
              </span>
            </p>
            <div className="relative">
              <h3 className="text-2xl font-bold">Ready-to-Deploy Accelerators</h3>
              <p className="mt-2 leading-relaxed text-emerald-900">
                Proven copilots for Finance, Auditing, Risk and Operations,
                built to reach production fast.
              </p>
            </div>
          </article>

          {PILLARS.map(({ icon, title, description, wide }) => (
            <article
              key={title}
              className={`rounded-3xl border border-neutral-300/80 bg-white p-7 transition-colors hover:border-[#047857]/50 ${
                wide
                  ? "md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5"
                  : ""
              }`}
            >
              <IconBox icon={icon} />
              <div>
                <h3
                  className={`text-xl font-bold text-neutral-900 ${wide ? "" : "mt-8"}`}
                >
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
