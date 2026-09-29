import { useParams, Link, Navigate } from "react-router";
import { Sparkles, Calendar, ArrowLeft, Mail, Phone } from "lucide-react";
import { getBlogBySlug } from "@/data/blogs";

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-neutral-600 leading-relaxed mb-4">{block.text}</p>
      );
    case "list": {
      const isOrdered = block.style === "decimal" || block.style === "lower-alpha";
      const ListTag = isOrdered ? "ol" : "ul";
      return (
        <ListTag
          className="pl-6 space-y-3 mb-4 text-neutral-600 leading-relaxed"
          style={{ listStyleType: block.style }}
        >
          {block.items.map((item, index) => (
            <li key={index} className="pl-1">
              {block.bold ? (
                <span className="text-neutral-900 font-semibold">{item}</span>
              ) : (
                item
              )}
            </li>
          ))}
        </ListTag>
      );
    }
    case "feature":
      return (
        <div className="border-l-4 border-[#1569a9] pl-5 py-1 mb-6">
          <h4 className="text-lg font-semibold text-neutral-900 mb-1">
            {block.title}
          </h4>
          <p className="text-neutral-600 leading-relaxed">{block.text}</p>
        </div>
      );
    case "tags":
      return (
        <div className="flex flex-wrap gap-2 mb-4">
          {block.items.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
          <p className="text-neutral-700 leading-relaxed mb-4">{block.text}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {block.emails?.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-[#1569a9] font-medium hover:underline"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
            ))}
            {block.phone && (
              <a
                href={`tel:${block.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-[#1569a9] font-medium hover:underline"
              >
                <Phone className="w-4 h-4" />
                {block.phone}
              </a>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/thought-leadership/blogs" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto mt-20">
        <Link
          to="/thought-leadership/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#1569a9] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#1569a9]" />
          <span className="text-xs font-semibold text-[#1569a9] uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          <Calendar className="w-4 h-4" />
          {post.date}
        </div>

        <div>
          {post.content.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
