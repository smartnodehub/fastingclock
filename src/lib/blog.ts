import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Import TypeScript posts statically
import { post as post1 } from '@/content/posts/2025-07-29-getting-started-16-8';
import { post as post2 } from '@/content/posts/2025-07-28-breaking-fast-tips';
import { post as post3 } from '@/content/posts/2025-07-27-fasting-mistakes';
import { post as post4 } from '@/app/blog/16-8-fasting-schedule/post';

export interface BlogPost {
  title: string;
  date: string;
  excerpt?: string;
  description?: string;
  body: string;
  slug: string;
  author?: string;
  readTime?: string;
  image?: string;
}

// Collect TypeScript posts
const tsPosts: BlogPost[] = [
  { ...post1, excerpt: post1.excerpt },
  { ...post2, excerpt: post2.excerpt },
  { ...post3, excerpt: post3.excerpt },
  { ...post4, excerpt: post4.excerpt },
];

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
          description: data.description,
          body: marked.parse(content) as string,
          slug,
          author: data.author || 'Fasting Clock Team',
          readTime: data.readTime || calculateReadTime(content),
          image: data.image,
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

// Get all posts from both sources
export function getAllPosts(): BlogPost[] {
  const markdownPosts = getMarkdownPosts();
  
  return [...tsPosts, ...markdownPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
}

console.log("All Posts:", getAllPosts());
