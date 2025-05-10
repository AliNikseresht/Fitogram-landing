import FAQItem from "./FAQItem";

type QuestionItem = { q: string; a: string };
type FAQSectionProps = {
  category: string;
  questions: QuestionItem[];
  expandedKey: string | null;
  toggle: (key: string) => void;
  sectionIndex: number;
};

const FAQSection = ({
  category,
  questions,
  expandedKey,
  toggle,
  sectionIndex,
}: FAQSectionProps) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-700 mb-4">{category}</h2>
    <div className="space-y-3">
      {questions.map((q, qIdx) => {
        const key = `${sectionIndex}-${qIdx}`;
        return (
          <FAQItem
            key={key}
            question={q.q}
            answer={q.a}
            isOpen={expandedKey === key}
            onToggle={() => toggle(key)}
          />
        );
      })}
    </div>
  </section>
);

export default FAQSection;
