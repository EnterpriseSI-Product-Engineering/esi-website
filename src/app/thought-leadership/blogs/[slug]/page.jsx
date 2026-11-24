import BlogPost from "@/views/BlogPost";
import { getBlogBySlug, blogs } from "@/data/blogs";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog Post | EnterpriseSI" };

  return {
    title: `${post.title} | EnterpriseSI`,
    description: post.excerpt,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
