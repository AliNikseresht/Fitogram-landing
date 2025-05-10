type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="border border-gray-200 rounded-md overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 font-medium"
    >
      {question}
    </button>
    {isOpen && (
      <div className="px-4 py-3 text-sm bg-gray-50 text-gray-700">{answer}</div>
    )}
  </div>
);

export default FAQItem;
