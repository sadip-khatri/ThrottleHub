import React, { useState } from "react";

const OrderLookup: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setError("");

    // Basic validation
    if (!orderId.trim() || !contact.trim()) {
      setError("Please enter both Order ID and Email/Phone.");
      return;
    }

    // Simulated order lookup result
    // Replace this logic with real API call
    if (orderId === "12345" && contact === "example@email.com") {
      setStatus("✅ Order shipped. Expected delivery: 5th July.");
    } else {
      setStatus("❌ Order not found. Please double-check your details.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10 text-[#623e18]">
      <h1 className="text-3xl font-bold mb-6 text-center">Track Your Order</h1>
      <p className="text-center mb-6 text-sm text-gray-600">
        Enter your Order ID and the email or phone number you used during
        checkout.
      </p>

      <form
        onSubmit={handleLookup}
        className="bg-white shadow-md rounded-xl p-6 space-y-4"
      >
        <div>
          <label htmlFor="orderId" className="block font-medium">
            Order ID
          </label>
          <input
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#623e18]/30"
            placeholder="e.g. 12345"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block font-medium">
            Email or Phone
          </label>
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#623e18]/30"
            placeholder="e.g. yourname@example.com"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#623e18] text-white py-2 rounded-md hover:bg-[#4e3013] transition duration-200"
        >
          Check Status
        </button>
      </form>

      {status && (
        <div className="mt-6 text-center text-lg font-medium">{status}</div>
      )}
    </div>
  );
};

export default OrderLookup;
