import { ChevronDown } from "lucide-react";

const Items = ({ items }) => (
  <ul className="list-disc space-y-1.5 pl-5 text-neutral-700">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

// Native <details> keeps the accordion server-rendered, with no client JavaScript
const Module = ({ module, open }) => (
  <details
    open={open}
    className="group rounded-xl border border-neutral-300/80 bg-white"
  >
    <summary className="flex cursor-pointer list-none items-center gap-3 p-4 sm:px-5 [&::-webkit-details-marker]:hidden">
      <span className="flex-1 font-semibold text-neutral-900">
        {module.title}
      </span>
      <span className="shrink-0 rounded-full bg-[#047857]/10 px-3 py-1 text-xs font-semibold text-[#047857]">
        {module.hours} hrs
      </span>
      <ChevronDown
        className="h-4 w-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-180"
        aria-hidden="true"
      />
    </summary>
    <div className="border-t border-neutral-200 p-4 sm:px-5">
      <Items items={module.topics} />
      {module.labs?.length > 0 && (
        <div className="mt-5 rounded-lg bg-[#f8fafc] p-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Hands-on labs
          </h4>
          <Items items={module.labs} />
        </div>
      )}
    </div>
  </details>
);

export default function Curriculum({ curriculum }) {
  const { totalHours, highlights, stages } = curriculum;
  const moduleCount = stages.reduce((n, s) => n + s.modules.length, 0);

  return (
    <section id="syllabus" className="mt-10 scroll-mt-28">
      <h2 className="text-2xl font-bold text-neutral-900">Curriculum</h2>
      <p className="mt-1 text-neutral-600">
        {totalHours} hours · {stages.length > 1 && `${stages.length} stages · `}
        {moduleCount} modules
      </p>

      <div className="mt-4">
        <Items items={highlights} />
      </div>

      {stages.map((stage, i) => (
        <div key={stage.title ?? i} className="mt-6">
          {stage.title && (
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#047857]">
                Stage {i + 1} · {stage.hours} hrs
              </p>
              <h3 className="mt-1 text-lg font-bold text-neutral-900">
                {stage.title}
              </h3>
              {stage.tools && (
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  <span className="font-semibold">Tools and frameworks: </span>
                  {stage.tools}
                </p>
              )}
            </div>
          )}
          <div className="space-y-3">
            {stage.modules.map((module, j) => (
              <Module
                key={module.title}
                module={module}
                open={i === 0 && j === 0}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
