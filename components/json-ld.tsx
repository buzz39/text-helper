"use client";

import React from "react";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Text Styler",
    "description": "Professional Unicode text formatting tool for social media, LinkedIn, and business content. Transform plain text into stylized formats instantly.",
    "url": "https://textstyler.com",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Text Styler Team"
    },
    "featureList": [
      "Unicode text transformation",
      "Multiple text styles (bold, italic, script, monospace)",
      "Real-time preview",
      "One-click copy functionality",
      "Mobile responsive design",
      "LinkedIn and social media optimization"
    ],
    "screenshot": "https://textstyler.com/screenshot.jpg",
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareRequirements": "Web Browser"
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://textstyler.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Text Styler Tool",
        "item": "https://textstyler.com/#tool"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Unicode text styling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unicode text styling transforms regular text into stylized formats using special Unicode characters. This allows you to create bold, italic, script, and other formatted text that works across all platforms and social media."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use styled text on LinkedIn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our styled text works perfectly on LinkedIn posts, headlines, and profiles. It's a great way to make your content stand out and increase engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Is the text styler free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our text styling tool is completely free to use. You can transform unlimited text and copy it instantly without any restrictions."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}