import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);

      // 1. Show alert to user
      alert(
        `You have subscribed to 246 Impex. We'll send updates to: 246Impex@gmail.com`
      );

      // 2. (Optional) Send email to backend API
      fetch("https://your-backend-api.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "246Impex@gmail.com" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Subscribed:", data);
        })
        .catch((error) => {
          console.error("Subscription failed:", error);
        });

      setEmail("");

      // 3. Reset success message
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-[85px]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with{" "}
                <span className="text-[#2563eb]">246 Impex</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new
                arrivals, . Join our community!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Early Access",
                  description:
                    "Be the first to explore upcoming gadgets and product launches",
                },
                {
                  title: "Latest Tech Drops",
                  description:
                    "Stay updated with our newest arrivals in smart devices and accessories",
                },
                {
                  title: "Tech Insights",
                  description:
                    "Get expert reviews, setup tutorials, and tech tips straight to your inbox",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Newsletter Form */}
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Join Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the exclusive updates of 246 Impex
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb]"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#2563eb] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Success Message */}
              {isSubscribed && (
                <div className="mt-4 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-center">
                  🎉 Welcome to the 246 Impex community! Check your email for
                  confirmation.
                </div>
              )}

              <p className="text-gray-500 text-sm mt-4">
                By subscribing, you agree to receive marketing emails from 246
                Impex. You can unsubscribe at any time.
              </p>
            </div>
=======
    <section className="bg-[#f8f6f3] py-14 px-6 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto bg-white/90 shadow-md rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left: Heading + form */}
        <div className="w-full lg:max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-2">
            Get exclusive access to new products, design inspiration, and more.
          </p>

          <form
            className="flex flex-col sm:flex-row items-center gap-3 mt-6"
            method="post"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-72 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B48B65]"
            />
            <button
              type="submit"
              className="bg-[#B48B65] text-white px-5 py-3 rounded-full hover:bg-[#a07755] transition flex items-center gap-2 cursor-pointer"
            >
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Right: Contact & social */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-black">EMAIL US</h3>
            <a
              href="mailto:hello@dangiz.com.au"
              className="text-gray-600 text-sm hover:underline break-words"
            >
              hello@dangiz.com.au
            </a>
>>>>>>> def3aaad95fc98fc19fb3ea5b0814890cefffc80
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black mb-2">FOLLOW US</h3>
            <div className="flex justify-center lg:justify-start gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#B48B65] transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#B48B65] transition"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
