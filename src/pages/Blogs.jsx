import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { GradientCard } from "@/components/ui/animatedcard";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto text-center mb-16 mt-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Sparkles className="w-4 h-4 text-[#1569a9]" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            Thought Leadership
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>Blogs</span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <Link key={post.slug} to={`/thought-leadership/blogs/${post.slug}`}>
            <GradientCard className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 line-clamp-3 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 flex-1 line-clamp-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-200">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1569a9] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </GradientCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
