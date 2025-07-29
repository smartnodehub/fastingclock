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
  title: "5 Tips for Breaking Your Fast Properly",
  date: "2025-07-28",
  excerpt: "Discover the best practices for breaking your intermittent fast to maximize benefits and avoid digestive issues.",
  slug: "5-tips-breaking-fast-properly",
  author: "Fasting Clock Team",
  readTime: "4 min read",
  body: `
    <p>How you break your fast is just as important as the fast itself. Breaking your fast properly can help you maintain energy levels, support digestion, and maximize the benefits of intermittent fasting.</p>
    
    <h2>1. Start with Something Light</h2>
    <p>Don't jump straight into a heavy meal. Begin with something gentle on your digestive system like a piece of fruit, a small salad, or some nuts.</p>
    
    <h2>2. Hydrate First</h2>
    <p>Before eating, drink a glass of water. This helps prepare your digestive system and can prevent overeating.</p>
    
    <h2>3. Include Protein</h2>
    <p>Adding protein to your first meal helps stabilize blood sugar and keeps you feeling satisfied longer. Consider eggs, Greek yogurt, or lean meats.</p>
    
    <h2>4. Avoid Processed Foods</h2>
    <p>Skip the processed snacks and focus on whole, nutrient-dense foods that will nourish your body after the fasting period.</p>
    
    <h2>5. Eat Mindfully</h2>
    <p>Take your time and chew slowly. This helps with digestion and allows you to recognize hunger and fullness cues.</p>
    
    <p>Remember, the goal is to ease back into eating and maintain the positive effects of your fast.</p>
  `
};
