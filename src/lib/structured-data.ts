// File: src/lib/structured-data.ts

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  canonicalUrl: string;
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Generate Article Schema
export function generateArticleSchema(data: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.headline,
    "description": data.description,
    "image": {
      "@type": "ImageObject",
      "url": data.image,
      "width": 1200,
      "height": 240
    },
    "author": {
      "@type": "Person",
      "name": data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastingClock.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
        "width": 1200,
        "height": 240
      }
    },
    "datePublished": data.datePublished,
    "dateModified": data.dateModified || data.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.canonicalUrl
    }
  };
}

// Generate FAQ Schema
export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

// Generate Website Schema (for homepage)
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FastingClock.com",
    "description": "Free fasting timer and clock to track your intermittent fasting journey",
    "url": "https://fastingclock.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fastingclock.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FastingClock.com",
    "description": "Providing free fasting tools and resources for intermittent fasting",
    "url": "https://fastingclock.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fastingclock.com/fastingclock-logo-adsense-5to1.png",
      "width": 1200,
      "height": 240
    },
    "sameAs": [
      "https://github.com/smartnodehub/fastingtimer"
    ]
  };
}
