import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  FlaskConical,
  Presentation,
  Radio,
  Users,
} from "lucide-react";
// Same topic and audience lists as the webinar series page, so they stay in sync
import { targetRoles, webinarTopics } from "@/views/AITechWebinarSeries";

// Topics read "Format - Title (2-part series)"; split that into card fields
const topics = webinarTopics.map((raw) => {
  const deepDive = raw.startsWith("Deep dive workshop - ");
  const twoPart = raw.includes("(2-part series)");
  const title = raw
    .replace("Deep dive workshop - ", "")
    .replace(" (2-part series)", "");
  return { title, deepDive, twoPart };
});

const stats = [
  { icon: Clock, value: "2 hrs", label: "Per session" },
  { icon: Presentation, value: topics.length, label: "Featured topics" },
  { icon: Users, value: "500", label: "Seats per session" },
  { icon: CalendarDays, value: "Monthly", label: "New sessions" },
];

const steps = [
  {
    icon: Radio,
    title: "Join live",
    text: "Open enrolment for employees across business units, practices and departments.",
  },
  {
    icon: Presentation,
    title: "See it applied",
    text: "Latest AI technical and business use cases, with selective demos.",
  },
  {
    icon: FlaskConical,
    title: "Practise hands-on",
    text: "Continue in AI labs and sandboxes on our Agentic AI Playground.",
  },
];

const container = "container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const heading =
  "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900";

const Masterclass = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] pt-32 pb-28 md:pt-44 md:pb-36 text-center text-emerald-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(4,120,87,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />
      <div className={`relative ${container}`}>
        <p className="inline-flex items-center gap-2 rounded-full border border-[#047857]/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-emerald-600 motion-safe:animate-pulse" />
          Live sessions · Nov – Dec 2026
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          AI Masterclass for{" "}
          <span className="bg-gradient-to-r from-[#047857] to-[#0f766e] bg-clip-text text-transparent">
            Enterprise Teams
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-emerald-900">
          Focused 2-hour sessions on cutting-edge AI, from agent architecture to
          governance.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#047857] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#065f46]"
          >
            Enroll
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="#syllabus"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#047857]/40 bg-white/40 px-8 py-3.5 font-semibold transition-colors hover:bg-white/80"
          >
            View Syllabus
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    {/* Stats card overlapping the hero */}
    <div className={`relative -mt-14 ${container}`}>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 shadow-xl lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center bg-white p-6 text-center"
          >
            <Icon className="h-5 w-5 text-[#047857]" aria-hidden="true" />
            <dt className="order-last mt-1 text-sm text-neutral-600">
              {label}
            </dt>
            <dd className="mt-3 text-2xl sm:text-3xl font-bold text-neutral-900">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>

    {/* Topics */}
    <section id="syllabus" className={`scroll-mt-28 py-16 md:py-24 ${container}`}>
      <div className="text-center">
        <h2 className={heading}>Featured topics</h2>
        <p className="mt-3 text-neutral-600">
          Pick the sessions that match your work.
        </p>
      </div>

      {/* Roadmap: line on the left on mobile, centred with alternating steps from md */}
      <ol className="relative mt-12 before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-[#047857] before:to-emerald-400 md:before:left-1/2">
        {topics.map(({ title, deepDive, twoPart }, i) => {
          const onLeft = i % 2 === 0;
          return (
            <li
              key={title}
              className="group relative pb-10 pl-16 last:pb-0 md:grid md:grid-cols-2 md:gap-x-24 md:pl-0"
            >
              <span
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#047857] bg-white text-sm font-bold text-[#047857] ring-4 ring-[#f8fafc] transition-colors group-hover:bg-[#047857] group-hover:text-white md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {/* Short connector between the step and the line */}
              <span
                className={`absolute top-5 hidden h-0.5 w-6 bg-[#047857]/30 md:block ${
                  onLeft
                    ? "right-[calc(50%+1.5rem)]"
                    : "left-[calc(50%+1.5rem)]"
                }`}
                aria-hidden="true"
              />
              <div
                className={`pt-1.5 ${onLeft ? "md:text-right" : "md:col-start-2"}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#047857]">
                  {deepDive ? "Deep dive workshop" : "Masterclass"}
                  {twoPart && (
                    <span className="text-emerald-700"> · 2-part series</span>
                  )}
                </p>
                <h3 className="mt-1.5 text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-[#047857]">
                  {title}
                </h3>
              </div>
            </li>
          );
        })}
      </ol>
    </section>

    {/* How it works */}
    <section className="border-y border-neutral-200 bg-white py-16 md:py-24">
      <div className={container}>
        <h2 className={`text-center ${heading}`}>How it works</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] text-[#047857] shadow-lg shadow-[#047857]/15">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#047857]">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-xl font-bold text-neutral-900">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-neutral-600">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Audience and sign-up */}
    <section
      className={`grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 ${container}`}
    >
      <div>
        <h2 className={heading}>Who should attend</h2>
        <ul className="mt-8 space-y-4">
          {targetRoles.map((role) => (
            <li key={role} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#047857]/10 text-[#047857]">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-lg text-neutral-700">{role}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] p-8 sm:p-10 text-emerald-950">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Bring your whole team
        </h2>
        <p className="mt-3 leading-relaxed text-emerald-900">
          Tell us which topics matter to you and we will take it from there.
        </p>
        <Link
          href="/demo"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#047857] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#065f46]"
        >
          Talk to us
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  </>
);

export default Masterclass;
