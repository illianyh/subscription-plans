"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left font-medium cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "How does billing work?",
      answer:
        "You'll be billed at the start of each billing cycle. For 3-month and 6-month plans, you'll be billed at the beginning of each period. For annual billing, you'll be charged once per year.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. You'll continue to receive treatment until the end of your current billing period.",
    },
    {
      question: "How discreet is the packaging?",
      answer:
        "All our treatments are delivered in plain, unmarked packaging with no indication of the contents inside.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
    },
  ];

  return (
    <div className="mt-16 w-full">
      <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
