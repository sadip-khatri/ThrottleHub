// src/components/shared/Hero.tsx
import React from "react";
import Button from "../../Components/Ui/Button";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] max-w-[94%] m-auto flex items-center bg-gradient-to-r from-[#b67c4b] to-[#e3b47c] text-white relative overflow-hidden rounded-md mb-10 mt-2">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            A PREMIUM <br /> MARKET PLACE <br /> FOR YOU.
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-md mb-2">
            A premium marketplace where you can extend the product lifecycle &
            minimize your carbon footprint.
          </p>
          <p className="italic text-white/60 mb-6">
            Share the love and find something with us
          </p>
          <Button>
            Shop Now <span className="text-lg">→</span>
          </Button>
        </div>

        {/* Right Image Section */}
        <div className="relative z-10">
          <img
            src="/assets/img/Home/hero.jpg"
            alt="Model"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
