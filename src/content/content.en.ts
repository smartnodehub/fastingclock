import type { Content } from "../types/content";

export const content: Content = {
  intro16to8: "<h1>Welcome to FastingTimer!</h1><p>Track your fasting period and see the benefits of intermittent fasting.</p>",
  benefits: [
    { title: "Weight Loss", description: "Intermittent fasting can help reduce body fat." },
    { title: "Improved Metabolism", description: "Fasting boosts metabolic health." },
    { title: "Mental Clarity", description: "Many report better focus during fasting." }
  ],
  faqItems: [
    { question: "What is 16:8 fasting?", answer: "16 hours fasting, 8 hours eating window." },
    { question: "Can I drink water while fasting?", answer: "Yes, water, tea, and black coffee are allowed." },
    { question: "Is fasting safe?", answer: "For most healthy adults, yes. Consult your doctor if unsure." }
  ]
}
