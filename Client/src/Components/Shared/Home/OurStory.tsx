import React from "react";
import { FaMotorcycle, FaCar, FaTools } from "react-icons/fa";

const OurStory: React.FC = () => {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Headline + Link */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold uppercase tracking-wider mb-2">
              The ThrottleHub Journey
            </h2>
            <p
              className="max-w-xl text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Fueled by passion, driven by innovation — we power your rides with
              the best in bikes, cars, and premium auto parts.
            </p>
          </div>

          <a
            href="/our-story"
            className="px-5 py-2 rounded-full font-medium text-sm border transition"
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--text-primary)";
              e.currentTarget.style.backgroundColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Learn More →
          </a>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {/* Icon Sections */}
            {[
              {
                icon: <FaMotorcycle />,
                title: "Born in a Garage",
                desc: "Our roots trace back to late-night builds and custom mods in a garage with a vision to revolutionize how Nepal shops for vehicles.",
              },
              {
                icon: <FaCar />,
                title: "For Car & Bike Lovers",
                desc: "Whether it's a commuter or a beast on wheels, we stock only the finest machines and accessories to elevate your experience.",
              },
              {
                icon: <FaTools />,
                title: "Beyond the Machine",
                desc: "From filters to full upgrades, our catalog ensures you don’t just ride — you dominate the roads.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div style={{ color: "var(--accent)", fontSize: "1.75rem" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/ad.png"
              alt="ThrottleHub Showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
              <h4 className="text-xl font-semibold text-white">
                Real Rides. Real Power.
              </h4>
            </div>
          </div>
        </div>

        {/* Brand Values Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Curated Quality",
              desc: "Every product — from helmets to engines — is handpicked to ensure it meets our performance and durability standards.",
            },
            {
              title: "Gearhead Support",
              desc: "New rider or seasoned racer? We’re here to help you make the right choice with personalized assistance.",
            },
            {
              title: "Built for Nepal",
              desc: "All vehicles, parts, and accessories are sourced and tested for local terrain, climate, and style.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-6 shadow-md hover:shadow-lg transition border"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text-primary)",
                borderColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: "var(--accent)" }}
              >
                {card.title}
              </h4>
              <p
                style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
