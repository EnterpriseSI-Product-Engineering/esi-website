import { Lightbulb } from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";
import { motion as Motion } from "framer-motion";

const innovations = [
  {
    id: 1,
    title: 'Agentic Business Acceleration Platform & our platform driven "AI Native Enterprise" Transformation Loop',
    category: "Platform Architecture",
    gradient: "from-blue-600 to-cyan-500",
    hoverGradient: "group-hover:from-blue-600 group-hover:to-cyan-500",
  },
  {
    id: 2,
    title: "AI FDE (Forward Deployed Engineering) Consulting Mindset - Workshop – 20 hrs",
    category: "Executive Workshop",
    gradient: "from-purple-600 to-indigo-500",
    hoverGradient: "group-hover:from-purple-600 group-hover:to-indigo-500",
  },
  {
    id: 3,
    title: "AI Deployment Strategist - Sharpening the Consulting Mindset - Workshop - 24 hrs",
    category: "Strategy Workshop",
    gradient: "from-emerald-600 to-teal-500",
    hoverGradient: "group-hover:from-emerald-600 group-hover:to-teal-500",
  },
  {
    id: 4,
    title: "AI FDE Programs - By Industry, Business Function, Tech Stack",
    category: "Specialized Programs",
    gradient: "from-amber-500 to-orange-600",
    hoverGradient: "group-hover:from-amber-500 group-hover:to-orange-600",
  },
  {
    id: 5,
    title: "AI FORWARD DEPLOYED ENGINEER (FDE) Factory",
    category: "Engineering Factory",
    gradient: "from-rose-500 to-pink-600",
    hoverGradient: "group-hover:from-rose-500 group-hover:to-pink-600",
  },
  {
    id: 6,
    title: "Employee AI Capability Assessment & AI Native Talent Transformation Strategy - Advisory",
    category: "Advisory & Strategy",
    gradient: "from-violet-600 to-fuchsia-500",
    hoverGradient: "group-hover:from-violet-600 group-hover:to-fuchsia-500",
  },
  {
    id: 7,
    title: "Domain (Industries, Business Functions) Deepdive for AI & Software Engineers",
    category: "Domain Deepdive",
    gradient: "from-cyan-600 to-blue-500",
    hoverGradient: "group-hover:from-cyan-600 group-hover:to-blue-500",
  },
  {
    id: 8,
    title: "AI Forward Deployed Engineering Academy Toolkit for AI Talent Factory",
    category: "Academy Toolkit",
    gradient: "from-teal-600 to-emerald-500",
    hoverGradient: "group-hover:from-teal-600 group-hover:to-emerald-500",
  },
  {
    id: 9,
    title: "AITech Webinar Series",
    category: "Webinar Series",
    gradient: "from-indigo-600 to-purple-500",
    hoverGradient: "group-hover:from-indigo-600 group-hover:to-purple-500",
  },
  {
    id: 10,
    title: "Managed Agentic Sandboxes (custom) for Experimentation & Prototyping Agentic Business Systems - Post Training Applied AI",
    category: "Managed Sandboxes",
    gradient: "from-orange-500 to-amber-600",
    hoverGradient: "group-hover:from-orange-500 group-hover:to-amber-600",
  },
  {
    id: 11,
    title: "AI Skilling at scale for Tech & Business Employees w/o need for human trainers",
    category: "Scaled Skilling",
    gradient: "from-fuchsia-600 to-pink-500",
    hoverGradient: "group-hover:from-fuchsia-600 group-hover:to-pink-500",
  },
  {
    id: 12,
    title: "AI Coach (10 AI SMEs-in-a-box) service for Sr leaders & mid level managers",
    category: "Executive AI Coaching",
    gradient: "from-sky-600 to-indigo-600",
    hoverGradient: "group-hover:from-sky-600 group-hover:to-indigo-600",
  },
];

const getSlideInitial = (index) => {
  const col = index % 3;
  if (col === 0) return { opacity: 0, y: 50, x: -25 };
  if (col === 2) return { opacity: 0, y: 50, x: 25 };
  return { opacity: 0, y: 50, x: 0 };
};

const ProductInnovation = () => {
  return (
    <div className="container mx-auto px-4 py-32 overflow-hidden">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center mb-16 mt-20"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Lightbulb className="w-4 h-4 text-[#1569a9]" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            Thought Leadership
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>Product Innovations</span>
        </h1>
      </Motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map((item, index) => (
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
            <GradientCard className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 rounded-xl">
              <div className="p-6 flex flex-col justify-between h-full min-h-[170px]">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3
                    className={`text-lg font-semibold text-neutral-900 group-hover:bg-gradient-to-r ${item.hoverGradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-snug`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </GradientCard>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductInnovation;
