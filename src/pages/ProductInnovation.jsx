import { Link } from "react-router";
import { GradientCard } from "@/components/ui/animatedcard";
import { motion as Motion } from "framer-motion";

const innovations = [
  {
    id: 1,
    title: 'Agentic Business Acceleration Platform & our platform driven "AI Native Enterprise" Transformation Loop',
    gradient: "from-blue-600 to-cyan-500",
    hoverGradient: "group-hover:from-blue-600 group-hover:to-cyan-500",
    link: "/thought-leadership/product-innovation/agentic-business-acceleration-platform",
  },
  {
    id: 2,
    title: "AI FDE (Forward Deployed Engineering) Consulting Mindset - Workshop – 20 hrs",
    gradient: "from-purple-600 to-indigo-500",
    hoverGradient: "group-hover:from-purple-600 group-hover:to-indigo-500",
    link: "/thought-leadership/product-innovation/ai-fde-consulting-mindset-workshop",
  },
  {
    id: 3,
    title: "AI Deployment Strategist - Sharpening the Consulting Mindset - Workshop - 24 hrs",
    gradient: "from-emerald-600 to-teal-500",
    hoverGradient: "group-hover:from-emerald-600 group-hover:to-teal-500",
    link: "/thought-leadership/product-innovation/ai-deployment-strategist-workshop",
  },
  {
    id: 4,
    title: "AI FDE Programs - By Industry, Business Function, Tech Stack",
    gradient: "from-amber-500 to-orange-600",
    hoverGradient: "group-hover:from-amber-500 group-hover:to-orange-600",
    link: "/thought-leadership/product-innovation/ai-fde-programs-industry-function-tech-stack",
  },
  {
    id: 5,
    title: "AI FORWARD DEPLOYED ENGINEER (FDE) Factory",
    gradient: "from-rose-500 to-pink-600",
    hoverGradient: "group-hover:from-rose-500 group-hover:to-pink-600",
    link: "/thought-leadership/product-innovation/ai-forward-deployed-engineer-factory",
  },
  {
    id: 6,
    title: "Employee AI Capability Assessment & AI Native Talent Transformation Strategy - Advisory",
    gradient: "from-violet-600 to-fuchsia-500",
    hoverGradient: "group-hover:from-violet-600 group-hover:to-fuchsia-500",
    link: "/thought-leadership/product-innovation/employee-ai-capability-assessment-advisory",
  },
  {
    id: 7,
    title: "Domain (Industries, Business Functions) Deepdive for AI & Software Engineers",
    gradient: "from-cyan-600 to-blue-500",
    hoverGradient: "group-hover:from-cyan-600 group-hover:to-blue-500",
    link: "/thought-leadership/product-innovation/domain-deepdive-ai-software-engineers",
  },
  {
    id: 8,
    title: "AI Forward Deployed Engineering Academy Toolkit for AI Talent Factory",
    gradient: "from-teal-600 to-emerald-500",
    hoverGradient: "group-hover:from-teal-600 group-hover:to-emerald-500",
    link: "/thought-leadership/product-innovation/ai-fde-academy-toolkit-talent-factory",
  },
  {
    id: 9,
    title: "AITech Webinar Series",
    gradient: "from-indigo-600 to-purple-500",
    hoverGradient: "group-hover:from-indigo-600 group-hover:to-purple-500",
    link: "/thought-leadership/product-innovation/aitech-webinar-series",
  },
  {
    id: 10,
    title: "Managed Agentic Sandboxes (custom) for Experimentation & Prototyping Agentic Business Systems - Post Training Applied AI",
    gradient: "from-orange-500 to-amber-600",
    hoverGradient: "group-hover:from-orange-500 group-hover:to-amber-600",
    link: "/thought-leadership/product-innovation/managed-agentic-sandboxes-experimentation-prototyping",
  },
  {
    id: 11,
    title: "AI Skilling at scale for Tech & Business Employees w/o need for human trainers",
    gradient: "from-fuchsia-600 to-pink-500",
    hoverGradient: "group-hover:from-fuchsia-600 group-hover:to-pink-500",
    link: "/thought-leadership/product-innovation/ai-skilling-at-scale-without-human-trainers",
  },
  {
    id: 12,
    title: "AI Coach (10 AI SMEs-in-a-box) service for Sr leaders & mid level managers",
    gradient: "from-sky-600 to-indigo-600",
    hoverGradient: "group-hover:from-sky-600 group-hover:to-indigo-600",
    link: "/thought-leadership/product-innovation/ai-coach-smes-in-a-box-service",
  },
];

const getSlideInitial = (index) => {
  const col = index % 3;
  if (col === 0) return { opacity: 0, y: 35, x: -15 };
  if (col === 2) return { opacity: 0, y: 35, x: 15 };
  return { opacity: 0, y: 35, x: 0 };
};

const ProductInnovation = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 mt-6 sm:mt-12 md:mt-16"
      >
        <div className="inline-flex items-center px-3.5 py-1 sm:px-4 sm:py-1.5 mb-6 sm:mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <span className="text-xs font-semibold text-[#1569a9] uppercase tracking-wider">
            Thought Leadership
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
          <span>Product Innovations</span>
        </h1>
      </Motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {innovations.map((item, index) => {
          const cardBody = (
            <GradientCard
              className={`group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 rounded-xl ${
                item.link
                  ? "cursor-pointer ring-1 ring-[#1569a9]/20 hover:ring-[#1569a9]/50 hover:shadow-lg"
                  : ""
              }`}
            >
              <div className="p-5 sm:p-6 flex flex-col justify-between h-full min-h-[140px] sm:min-h-[160px]">
                <h3
                  className={`text-base sm:text-lg font-semibold text-neutral-900 group-hover:bg-gradient-to-r ${item.hoverGradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-snug break-words`}
                >
                  {item.title}
                </h3>
                {item.link && (
                  <div className="pt-4 sm:pt-6 flex items-center justify-end">
                    <span className="inline-flex items-center text-xs font-semibold text-[#1569a9] group-hover:translate-x-1 transition-transform">
                      Explore &rarr;
                    </span>
                  </div>
                )}
              </div>
            </GradientCard>
          );

          return (
            <Motion.div
              key={item.id}
              initial={getSlideInitial(index)}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              {item.link ? (
                <Link to={item.link} className="block h-full">
                  {cardBody}
                </Link>
              ) : (
                cardBody
              )}
            </Motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductInnovation;
