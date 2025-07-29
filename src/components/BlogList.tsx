import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogList() {
  // Get all posts and take the first 3
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="space-y-8">
      {/* Recent Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            {/* Post Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readTime && <span>{post.readTime}</span>}
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-white">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
            </div>

            {/* Post Excerpt */}
            <p className="text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Post Footer */}
            <div className="flex items-center justify-between">
              {post.author && (
                <span className="text-sm text-gray-400">By {post.author}</span>
              )}
              
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-12">
        <Link
          href="/blog/all"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
