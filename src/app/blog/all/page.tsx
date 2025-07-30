import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Free Fasting Timer Posts | FastingClock.com",
  description: "Browse all our intermittent fasting tips, guides, and health insights. Complete archive of articles on fasting, nutrition, and wellness.",
  openGraph: {
    title: "Free Fasting Timer Posts | FastingClock.com",
    description: "Browse all our intermittent fasting tips, guides, and health insights. Complete archive of articles on fasting, nutrition, and wellness.",
    url: "https://fastingclock.com/blog/all",
    type: "website",
    images: [
      {
        url: "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
        width: 1200,
        height: 240,
        alt: "Fasting Clock Blog - All Posts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Posts | Fasting Clock Blog",
    description: "Browse all our intermittent fasting tips, guides, and health insights. Complete archive of articles on fasting, nutrition, and wellness.",
    images: ["https://fastingclock.com/fastingclock-logo-adsense-5to1.png"],
  },
};

export default function AllPostsPage() {
  // Get all posts (already sorted by date)
  const sortedPosts = getAllPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">All Posts</h1>
        <p className="text-gray-300">
          Browse all our articles about intermittent fasting, health, and wellness.
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {sortedPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.readTime && <span>{post.readTime}</span>}
                  {post.author && <span>By {post.author}</span>}
                </div>
                
                <h2 className="text-xl font-bold mb-2 text-white">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="md:ml-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  Read Post
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Back to Blog */}
      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 font-medium"
        >
          ← Back to Blog Home
        </Link>
      </div>
    </div>
  );
}
