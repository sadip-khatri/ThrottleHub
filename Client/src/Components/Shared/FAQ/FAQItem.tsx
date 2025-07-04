// src/components/FAQ/FAQItem.tsx
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 cursor-pointer">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-brown-800 font-medium text-lg cursor-pointer"
      >
        <span>{question}</span>
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQItem;
