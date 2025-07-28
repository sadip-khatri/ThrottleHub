import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);

      // Fake API call
      fetch("https://your-backend-api.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Subscribed:", data);
        })
        .catch((error) => {
          console.error("Subscription failed:", error);
        });

      setEmail("");

      // Reset message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-lg p-8 relative">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Subscribe to our Newsletter
          </h2>
          <p className="text-secondary mb-6">
            Get the latest updates, offers, and news delivered to your inbox.
          </p>

          {isSubscribed && (
            <div
              className="absolute top-4 right-4 bg-success text-black px-4 py-2 rounded-md shadow-md text-sm font-medium transition"
              style={{ zIndex: 10 }}
            >
              ✅ Subscribed! You’ll hear from us
              <span className="underline">{email}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-surface border border-accent rounded-lg px-4 py-2 text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-sm"
              required
            />
            <button
              type="submit"
              className="bg-accent text-black cursor-pointer px-6 py-2 rounded-lg font-medium hover:bg-accent/80 transition-colors text-sm flex items-center gap-2"
            >
              <FaPaperPlane /> Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
