import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Import TypeScript posts statically
import { post as post1 } from '@/content/posts/2025-07-29-getting-started-16-8';
import { post as post2 } from '@/content/posts/2025-07-28-breaking-fast-tips';
import { post as post3 } from '@/content/posts/2025-07-27-fasting-mistakes';
import { post as post4 } from '@/app/blog/16-8-fasting-schedule/post';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author?: string;
  readTime?: string;
  description?: string;
  body?: string;
};

// Get posts from Markdown files
function getMarkdownPosts(): BlogPost[] {
  const blogDirectory = path.join(process.cwd(), 'src/content/blog');
  
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogDirectory);
  const markdownPosts: BlogPost[] = [];

  for (const filename of filenames) {
    if (filename.endsWith('.md')) {
      try {
        const fullPath = path.join(blogDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const slug = filename.replace('.md', '');
        
        markdownPosts.push({
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          excerpt: data.description || data.excerpt || content.substring(0, 150) + '...',
          slug,
          image: '/fastingclock-logo-adsense-5to1.png', // Added default image
        });
      } catch (error) {
        console.warn(`Error loading Markdown post ${filename}:`, error);
      }
    }
  }

  return markdownPosts;
}

// Calculate estimated read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

// Get all posts from the static posts array
export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
}

export const posts: BlogPost[] = [
  // --- Uued postitused ---
  {
    slug: "16-8-fasting-schedule",
    title: "16/8 Intermittent Fasting Schedule for Beginners",
    date: "2025-09-26",
    excerpt:
      "Learn how to start 16/8 intermittent fasting with an easy daily schedule, meal tips, and fasting window guide.",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "best-foods-breaking-fast",
    title: "Best Foods to Eat When Breaking a Fast (2025 Guide)",
    date: "2025-09-26",
    excerpt:
      "Discover the best foods to safely break your fast in 2025. Support digestion, energy, and health after intermittent fasting.",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "fasting-mistakes",
    title: "5 Common Intermittent Fasting Mistakes to Avoid",
    date: "2025-09-26",
    excerpt:
      "Avoid these 5 intermittent fasting mistakes that can block your progress. Learn how to fast smarter and healthier.",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "fasting-and-coffee",
    title: "Intermittent Fasting and Coffee: What’s Allowed?",
    date: "2025-09-26",
    excerpt:
      "Can you drink coffee during intermittent fasting? Learn what’s allowed, what breaks a fast, and how to enjoy coffee while fasting.",
    image: "/fastingclock-logo-adsense-5to1.png",
  },

  // --- Vanad artiklid (hoia alles) ---
  {
    slug: "getting-started-16-8-intermittent-fasting",
    title: "Getting Started with 16:8 Intermittent Fasting",
    date: "2025-07-29",
    excerpt:
      "Master 16:8 intermittent fasting with our free fasting timer and expert fasting clock guidance. Beginner-friendly tips for sustainable weight loss—start today!",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "best-fasting-apps-2025",
    title: "Best Fasting Apps 2025: Top 5 Apps to Track Your Intermittent Fasting Journey",
    date: "2025-07-29",
    excerpt:
      "Discover the best intermittent fasting apps of 2025 to help you track your fasts, stay motivated, and achieve your health goals.",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "5-tips-breaking-fast-properly",
    title: "5 Tips for Breaking Your Fast Properly",
    date: "2025-07-28",
    excerpt:
      "Break your fast safely with our free fasting timer insights and fasting clock tips. Expert advice for maximum benefits and better digestion—learn more today!",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "science-of-fasting",
    title: "The Science of Fasting: What Happens to Your Body During Intermittent Fasting",
    date: "2025-07-28",
    excerpt:
      "Explore the fascinating science behind intermittent fasting and discover what happens in your body during different stages of a fast.",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
  {
    slug: "common-intermittent-fasting-mistakes",
    title: "Common Intermittent Fasting Mistakes and How to Avoid Them",
    date: "2025-07-27",
    excerpt:
      "Avoid fasting pitfalls with our free fasting timer strategies and smart fasting clock techniques. Expert tips for intermittent fasting success—read more now!",
    image: "/fastingclock-logo-adsense-5to1.png",
  },
];

console.log("All Posts:", getAllPosts());
