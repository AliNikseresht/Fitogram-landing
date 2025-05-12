"use client";

import { useState } from "react";
import FAQSection from "./FAQSection";
import FAQForm from "./FAQForm";

type FAQItem = { q: string; a: string };
type FAQCategory = {
  category: string;
  questions: FAQItem[];
};

type FAQPageClientProps = {
  faqData: FAQCategory[];
};

const FAQPageClient = ({ faqData }: FAQPageClientProps) => {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="max-w-4xl mx-auto px-3 md:px-5 py-5">
      <h1>Frequently Asked Questions</h1>

      {faqData.map((section, i) => (
        <FAQSection
          key={section.category}
          category={section.category}
          questions={section.questions}
          expandedKey={expandedKey}
          toggle={toggle}
          sectionIndex={i}
        />
      ))}

      <FAQForm />
    </div>
  );
};

export default FAQPageClient;
