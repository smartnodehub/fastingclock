import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const allPosts = getAllPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Fasting Clock Blog`,
    description: post.excerpt || post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <article className="max-w-3xl mx-auto">
      {/* Post Header */}
      <header className="mb-8">
        <div className="mb-4">
          <Link 
            href="/blog" 
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-white">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author && <span>By {post.author}</span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>
      </header>

      {/* Post Content */}
      <div 
        className="prose prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-700">
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            ← Back to All Posts
          </Link>
        </div>
      </footer>
    </article>
  );
}
