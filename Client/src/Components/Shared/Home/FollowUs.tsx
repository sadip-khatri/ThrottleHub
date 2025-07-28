import React from "react";
import { FaInstagram } from "react-icons/fa";

const instagramImages = [
  "/follow1.jpg",
  "/follow2.jpg",
  "/follow3.jpg",
  "/follow4.jpg",
  "/follow5.jpg",
];

const FollowUs: React.FC = () => {
  return (
    <section
      className="py-14 px-6 md:px-20"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase tracking-wide">
          Follow ThrottleHub on Instagram
        </h2>
        <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
          Ride highlights, garage mods & more straight from our grid
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 group">
        {instagramImages.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg hover:shadow-lg transition"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <img
              src={img}
              alt={`Instagram ${i + 1}`}
              className="w-full h-[180px] object-cover transform hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <FaInstagram className="text-[var(--accent)] text-2xl" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--background)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--button-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent)";
          }}
        >
          <FaInstagram />
          Follow @ThrottleHub
        </a>
      </div>
    </section>
  );
};

export default FollowUs;
