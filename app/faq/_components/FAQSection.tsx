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
  <section className="my-8">
    <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2962eb] to-[#7b3aed] bg-clip-text text-transparent mb-4">{category}</h3>
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
