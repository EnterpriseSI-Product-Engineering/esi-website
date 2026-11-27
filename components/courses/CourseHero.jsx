import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  Users,
} from "lucide-react";

const getStats = ({ curriculum, topics, audience }) => {
  const format = { icon: Users, value: "Live", label: "Cohort format" };
  if (!curriculum) {
    return [
      format,
      { icon: BookOpen, value: topics.length, label: "Core topics" },
      { icon: Layers, value: audience.length, label: "Target roles" },
    ];
  }
  const { totalHours, stages } = curriculum;
  const modules = stages.reduce((n, s) => n + s.modules.length, 0);
  return [
    { icon: Clock, value: totalHours, label: "Hours of training" },
    { icon: BookOpen, value: modules, label: "Modules" },
    ...(stages.length > 1
      ? [{ icon: Layers, value: stages.length, label: "Learning stages" }]
      : []),
    format,
  ];
};

export default function CourseHero({ program }) {
  const stats = getStats(program);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] pt-28 pb-14 md:pt-40 md:pb-20 text-emerald-950">
      {/* Decorative grid and glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(4,120,87,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,120,87,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-white/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="text-sm font-medium text-emerald-800 transition-colors hover:text-emerald-950"
        >
          &larr; Back to Courses
        </Link>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {program.title}
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-emerald-900">
              {program.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#047857] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#065f46]"
              >
                Enroll
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {/* Smooth scrolling comes from `scroll-behavior` on html */}
              <a
                href="#syllabus"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#047857]/40 bg-white/40 px-8 py-3.5 font-semibold transition-colors hover:bg-white/80"
              >
                View Syllabus
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                // An odd last tile spans the row so the grid has no gap
                className={`flex flex-col rounded-2xl border border-white bg-white/70 p-5 backdrop-blur-sm ${
                  stats.length % 2 && i === stats.length - 1 ? "col-span-2" : ""
                }`}
              >
                <Icon className="h-5 w-5 text-[#047857]" aria-hidden="true" />
                <dt className="order-last mt-1 text-sm text-emerald-800">
                  {label}
                </dt>
                <dd className="mt-4 text-3xl font-bold leading-none">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
