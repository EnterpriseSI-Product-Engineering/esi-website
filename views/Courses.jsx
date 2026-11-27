import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  Code2,
  Compass,
  Rocket,
  Users,
} from "lucide-react";
import { programs } from "@/data/programs";

const icons = {
  "ai-deployment-strategist": Briefcase,
  "ai-forward-deployed-engineer": Rocket,
  "ai-strategist-business-operator": Compass,
  "ai-native-software-development": Code2,
};

const CourseCard = ({ slug, title, summary, topics, audience }) => {
  const Icon = icons[slug] ?? Compass;

  return (
    <Link
      href={`/courses/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-300/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#047857]/50 hover:shadow-xl hover:shadow-[#047857]/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] p-6 sm:p-7 text-emerald-950">
        <Icon
          className="absolute -right-6 -bottom-8 h-36 w-36 text-white/60 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-[#047857]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="rounded-full border border-[#047857]/30 bg-white/50 px-3 py-1 text-xs font-semibold">
            Live Cohort
          </span>
        </div>
        {/* min-h keeps banners level when a title wraps to two lines */}
        <h3 className="relative mt-5 text-2xl font-bold leading-snug sm:min-h-[4.125rem]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="leading-relaxed text-neutral-700">{summary}</p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          What you will cover
        </p>
        <ul className="mt-3 mb-6 space-y-2.5">
          {topics.slice(0, 3).map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-700"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[#047857]"
                aria-hidden="true"
              />
              {topic}
            </li>
          ))}
        </ul>

        <p className="mt-auto flex items-start gap-2.5 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
          <Users className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>For {audience.join(" · ")}</span>
        </p>

        <span className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#047857]/10 py-3 text-sm font-semibold text-[#047857] transition-colors group-hover:bg-[#047857] group-hover:text-white">
          View details
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
};

const Courses = () => {
  return (
    <div className="pt-32 md:pt-40 pb-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Courses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            AI programs for enterprise teams.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <CourseCard key={program.slug} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
