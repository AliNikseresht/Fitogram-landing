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
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Still have questions?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question here..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium"
        >
          Submit Question
        </button>
      </form>
      {submitted && (
        <p className="text-green-600 mt-4">
          Your question has been submitted. Thank you!
        </p>
      )}
    </div>
  );
};

export default FAQForm;
