import Link from "next/link";
import { getProgram } from "@/data/programs";
import CourseHero from "@/components/courses/CourseHero";
import Curriculum from "@/components/courses/Curriculum";
import CourseUpdatesForm from "@/components/courses/CourseUpdatesForm";

const linkClass =
  "font-semibold text-[#047857] underline underline-offset-4 hover:text-[#065f46]";

const Heading = ({ children }) => (
  <h2 className="mt-10 mb-4 text-lg font-bold text-neutral-900">{children}</h2>
);

const ProgramDetail = ({ slug }) => {
  const program = getProgram(slug);

  return (
    <>
      <CourseHero program={program} />

      {/* Content comes first on mobile; the hero already has an Enroll button */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <h2 className="mb-4 text-lg font-bold text-neutral-900">
            Do you catch yourself asking any of these?
          </h2>
          <ol className="list-decimal space-y-1.5 pl-5 text-lg text-neutral-700">
            {program.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>

          {program.curriculum ? (
            <>
              <Heading>What you will be able to do</Heading>
              <ul className="list-disc space-y-1.5 pl-5 text-lg text-neutral-700">
                {program.curriculum.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <Curriculum curriculum={program.curriculum} />
            </>
          ) : (
            <div id="syllabus" className="scroll-mt-28">
              <Heading>What you will cover</Heading>
              <ul className="list-disc space-y-1.5 pl-5 text-lg text-neutral-700">
                {program.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          <Heading>Who it is for</Heading>
          <ul className="list-disc space-y-1.5 pl-5 text-lg text-neutral-700">
            {program.audience.map((person) => (
              <li key={person}>{person}</li>
            ))}
          </ul>

          {program.related && (
            <p className="mt-10 text-lg">
              <Link href={program.related.href} className={linkClass}>
                {program.related.label} &rarr;
              </Link>
            </p>
          )}
        </div>

        <aside>
          <div className="space-y-3 lg:sticky lg:top-28">
            <div className="rounded-xl border border-neutral-300/80 bg-white p-6 shadow-xs">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-bold text-neutral-900">
                  Live Cohort
                </h2>
                <p className="text-right text-lg font-bold text-neutral-900">
                  {program.price ?? "Price on request"}
                </p>
              </div>
              <p className="mt-1 text-neutral-600">
                Learn live alongside a cohort of peers
              </p>
              {program.curriculum && (
                <p className="mt-3 text-neutral-600">
                  {program.curriculum.totalHours} hours of training
                </p>
              )}
              <p className="mt-3 font-semibold text-neutral-900">
                {program.dates ?? "Dates to be announced"}
              </p>
              <Link
                href="/demo"
                className="mt-6 block rounded-lg bg-[#047857] py-3.5 text-center font-semibold text-white transition-colors hover:bg-[#065f46]"
              >
                Enroll
              </Link>
              <p className="mt-4 text-center text-sm">
                <Link href="/demo" className="font-semibold underline">
                  Enrolling a team? Talk to us
                </Link>
              </p>
            </div>

            <CourseUpdatesForm course={program.title} />
          </div>
        </aside>
      </div>
    </>
  );
};

export default ProgramDetail;
