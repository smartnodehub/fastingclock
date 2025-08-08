
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  const baseUrl = 'https://fastingclock.com';
  const currentDate = new Date().toISOString();
  const posts = getAllPosts();

  const urls = [
    { loc: baseUrl, lastmod: currentDate, changefreq: 'daily', priority: '1.0' },
    { loc: `${baseUrl}/blog`, lastmod: currentDate, changefreq: 'daily', priority: '0.8' },
    { loc: `${baseUrl}/blog/all`, lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
    { loc: `${baseUrl}/privacy`, lastmod: currentDate, changefreq: 'monthly', priority: '0.4' },
    { loc: `${baseUrl}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    ...posts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `<url>\n  <loc>${url.loc}</loc>\n  <lastmod>${url.lastmod}</lastmod>\n  <changefreq>${url.changefreq}</changefreq>\n  <priority>${url.priority}</priority>\n</url>`
    )
    .join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
