export interface Benefit {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Content {
  intro16to8: string;
  benefits: Benefit[];
  faqItems: FAQItem[];
}
