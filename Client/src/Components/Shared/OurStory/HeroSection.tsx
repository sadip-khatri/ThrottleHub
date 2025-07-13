import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-10 bg-white container mx-auto">
      {/* Top Text */}
      <div className="space-y-2 mb-6">
        <h1 className="text-xl md:text-2xl tracking-widest uppercase font-light">
          Discover <span className="font-semibold">Next-Gen</span> Technology
        </h1>
        <h1 className="text-xl md:text-2xl tracking-widest uppercase font-light">
          From <span className="font-semibold">Top Brands</span> Worldwide
        </h1>
        <p className="text-blue-600 italic font-medium text-lg">
          Power Up Your Digital Life.
        </p>
      </div>

      {/* Image */}
      <div className="px-4">
        <img
          src="/assets/img/ourstory/hero.jpg"
          alt="Tech gadgets display"
          className="w-full h-[60vh] object-cover rounded"
        />
      </div>
    </section>
  );
};

export default HeroSection;
