import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-10 bg-white container mx-auto">
      {/* Top Text */}
      <div className="space-y-2 mb-6">
        <h1 className="text-xl md:text-2xl tracking-widest uppercase font-light">
          A <span className="font-semibold">Premium</span> Marketplace For
        </h1>
        <h1 className="text-xl md:text-2xl tracking-widest uppercase font-light">
          Unlimited <span className="font-semibold">Fashion.</span>
        </h1>
        <p className="text-red-600 italic font-medium text-lg">
          Something New.
        </p>
      </div>

      {/* Image */}
      <div className="px-4">
        <img
          src="/assets/img/ourstory/hero.jpg"
          alt="Street View"
          className="w-full h-[60vh] object-cover rounded"
        />
      </div>
    </section>
  );
};

export default HeroSection;
