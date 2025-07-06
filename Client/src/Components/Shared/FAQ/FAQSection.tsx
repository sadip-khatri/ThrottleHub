// src/components/FAQ/FAQSection.tsx
import React from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    title: "About Dangiz",
    items: [
      {
        question: "What is Dangiz?",
        answer:
          "Dangiz is an online store offering a curated collection of high-quality bags, dresses, and clothing that combine style with craftsmanship.",
      },
      {
        question: "Where can I buy Dangiz products?",
        answer:
          "You can purchase Dangiz products exclusively from our official website.",
      },
      {
        question: "Where are your products made?",
        answer:
          "Our products are thoughtfully designed and ethically made in collaboration with skilled artisans and manufacturers.",
      },
      {
        question: "What are Dangiz products made of?",
        answer:
          "We use premium materials such as pure cotton, sustainable leather alternatives, and durable fabrics to craft our items.",
      },
      {
        question: "How do I care for my products?",
        answer:
          "Please follow the care instructions included with each product. For fabric items, gentle hand wash or dry cleaning is recommended.",
      },
    ],
  },
  {
    title: "Placing Your Order",
    items: [
      {
        question: "Do I need an account to shop?",
        answer:
          "No, you can shop as a guest. However, creating an account allows you to track orders and manage your preferences.",
      },
      {
        question: "How can I update my account details?",
        answer:
          "Log in to your Dangiz account and go to 'My Profile' to update your information.",
      },
      {
        question: "Forgot your password?",
        answer:
          "Click on 'Forgot Password' at the login page to reset your password via email.",
      },
      {
        question: "Can I edit or cancel my order?",
        answer:
          "Please contact us within 2 hours of placing the order. Once processed, changes may not be possible.",
      },
      {
        question: "Do you offer gift packing?",
        answer:
          "Currently, we do not offer gift packing. We aim to introduce this service soon.",
      },
      {
        question: "Is there a welcome offer for first-time customers?",
        answer:
          "Yes! Sign up for our newsletter and receive a discount on your first purchase.",
      },
      {
        question: "Is my order confirmed?",
        answer:
          "Once your payment is successful, you'll receive a confirmation email with order details.",
      },
      {
        question: "Trouble with payment?",
        answer:
          "If your payment fails, please try a different method or contact your bank. You can also reach out to our support team.",
      },
      {
        question: "How do I track my order?",
        answer:
          "After shipping, you'll receive a tracking link via email to monitor delivery status.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        question: "How do I return or exchange a product?",
        answer:
          "Please refer to our Return & Refund Policy for details on eligible items and return process.",
      },
    ],
  },
  {
    title: "Press & Partnerships",
    items: [
      {
        question: "Media features or editorial enquiries",
        answer:
          "Please email us at press@dangiz.com for media-related queries.",
      },
      {
        question: "Creator collaborations & brand tie-ups",
        answer:
          "We love working with creators! Reach out at collab@dangiz.com.",
      },
      {
        question: "Wholesale, gifting or private label",
        answer: "For bulk or custom inquiries, contact wholesale@dangiz.com.",
      },
      {
        question: "Marketplace partnerships",
        answer:
          "If you're a marketplace or stockist, write to us at partner@dangiz.com.",
      },
    ],
  },
];

const FAQSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#5e3c1c]">
      {faqs.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 uppercase tracking-wide">
            {section.title}
          </h2>
          <div>
            {section.items.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
