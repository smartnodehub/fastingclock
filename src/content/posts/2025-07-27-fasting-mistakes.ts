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
  title: "Common Intermittent Fasting Mistakes and How to Avoid Them",
  date: "2025-07-27",
  excerpt: "Learn about the most common pitfalls in intermittent fasting and practical strategies to overcome them.",
  slug: "common-intermittent-fasting-mistakes",
  author: "Fasting Clock Team", 
  readTime: "6 min read",
  body: `
    <p>While intermittent fasting can be incredibly beneficial, there are several common mistakes that can derail your progress. Here's what to watch out for and how to avoid these pitfalls.</p>
    
    <h2>Mistake #1: Going Too Hard Too Fast</h2>
    <p>Many beginners try to jump into long fasting periods immediately. Start with a 12-hour fast and gradually work your way up to 16 hours over several weeks.</p>
    
    <h2>Mistake #2: Ignoring Hydration</h2>
    <p>Dehydration during fasting can cause headaches, fatigue, and irritability. Drink plenty of water, and consider adding electrolytes if fasting for longer periods.</p>
    
    <h2>Mistake #3: Overeating During Eating Windows</h2>
    <p>Just because you're in your eating window doesn't mean you should eat everything in sight. Focus on balanced, nutritious meals.</p>
    
    <h2>Mistake #4: Not Getting Enough Sleep</h2>
    <p>Poor sleep can disrupt hormones that control hunger and satiety, making fasting much more difficult. Aim for 7-9 hours per night.</p>
    
    <h2>Mistake #5: Expecting Instant Results</h2>
    <p>Intermittent fasting is a lifestyle change, not a quick fix. Give your body at least 2-4 weeks to adapt before evaluating results.</p>
    
    <h2>Mistake #6: Ignoring Your Body's Signals</h2>
    <p>If you feel unwell, dizzy, or excessively fatigued, it's okay to break your fast early. Listen to your body and adjust accordingly.</p>
    
    <p>Remember, successful intermittent fasting is about finding a sustainable approach that works for your lifestyle and health goals.</p>
  `
};
