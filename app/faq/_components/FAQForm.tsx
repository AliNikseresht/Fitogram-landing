import { useState } from "react";

const FAQForm = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setQuestion("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold c-blue mb-4">
        Still have questions?
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question here..."
          rows={4}
          className="w-full px-4 py-2 border border-[#bababa] rounded-md focus:outline-none focus:ring focus:ring-[#7b3aed]"
        />
        <button
          type="submit"
          className="cursor-pointer font-medium text-lg bg-gradient-to-r from-[#2962eb] to-[#7b3aed] text-[#fff] px-6 py-2 rounded-full"
        >
          Submit Question
        </button>
      </form>
      {submitted && (
        <p className="text-[#059669] mt-4">
          Your question has been submitted. Thank you!
        </p>
      )}
    </div>
  );
};

export default FAQForm;
