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
    <main className="max-w-4xl mx-auto px-3 md:px-5 py-5">
      <h2>Frequently Asked Questions</h2>

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
    </main>
  );
};

export default FAQPageClient;
