export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  body: string;
  slug: string;
  author?: string;
  readTime?: string;
}

export const post: BlogPost = {
  title: "Getting Started with 16:8 Intermittent Fasting",
  date: "2025-07-29",
  excerpt: "Learn the basics of 16:8 intermittent fasting and how to start your journey towards better health.",
  slug: "getting-started-16-8-intermittent-fasting",
  author: "Fasting Clock Team",
  readTime: "5 min read",
  body: `
    <p>Intermittent fasting has become one of the most popular health trends, and for good reason. The 16:8 method is particularly effective for beginners because it's sustainable and fits well into most lifestyles.</p>
    
    <h2>What is 16:8 Intermittent Fasting?</h2>
    <p>The 16:8 method involves fasting for 16 hours and eating within an 8-hour window. This typically means skipping breakfast and eating between 12 PM and 8 PM, though you can adjust the timing to fit your schedule.</p>
    
    <h2>Benefits You Can Expect</h2>
    <ul>
      <li><strong>Weight Loss:</strong> Natural calorie reduction and improved metabolism</li>
      <li><strong>Better Blood Sugar:</strong> Improved insulin sensitivity</li>
      <li><strong>Mental Clarity:</strong> Enhanced focus during fasting periods</li>
      <li><strong>Cellular Health:</strong> Autophagy and cellular repair processes</li>
    </ul>
    
    <h2>How to Start</h2>
    <p>Begin gradually by extending your overnight fast. If you normally eat breakfast at 8 AM, try pushing it to 10 AM, then 12 PM over the course of a week. Listen to your body and adjust as needed.</p>
    
    <h2>Common Mistakes to Avoid</h2>
    <p>Don't jump into long fasts immediately, stay hydrated during fasting periods, and maintain balanced nutrition during eating windows.</p>
  `
};
