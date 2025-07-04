import React, { useState } from "react";
import { SectionHeading } from "../../Components/Ui/Typography";
import Button from "../../Components/Ui/Button";

const Dispute: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderId: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: send data to backend here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f6] py-10 px-4">
      <div className="bg-[#f8f5f1] rounded-md shadow-sm p-8 w-full max-w-lg border border-gray-200">
        <div className="mb-6 text-center">
          <SectionHeading text="Raise a Dispute" />
          <p className="text-gray-600 text-base max-w-md mx-auto">
            If you have an issue with your order, please fill out the form below. Our support team will review your dispute and get back to you as soon as possible.
          </p>
        </div>
        {submitted ? (
          <div className="text-green-600 text-lg font-semibold text-center py-16">
            Your dispute has been submitted!<br />We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b5d3b] transition shadow-sm bg-white"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b5d3b] transition shadow-sm bg-white"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="orderId">Order ID</label>
              <input
                type="text"
                id="orderId"
                name="orderId"
                value={form.orderId}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b5d3b] transition shadow-sm bg-white"
                placeholder="Order #12345"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b5d3b] transition shadow-sm bg-white resize-none"
                placeholder="Describe your issue in detail..."
              />
            </div>
            <Button>
              Submit Dispute
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dispute; 