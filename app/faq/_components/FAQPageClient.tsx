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
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-10">
        Frequently Asked Questions
      </h3>

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
