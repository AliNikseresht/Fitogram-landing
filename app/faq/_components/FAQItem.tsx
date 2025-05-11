type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="border border-[#bababa] rounded-md overflow-hidden">
    <button
      onClick={onToggle}
      className="cursor-pointer w-full text-left px-4 py-3 bg-[#fff] hover:bg-gray-50 font-medium"
    >
      {question}
    </button>
    {isOpen && (
      <div className="px-4 py-3 text-sm bg-gray-50 text-gray-700">{answer}</div>
    )}
  </div>
);

export default FAQItem;
