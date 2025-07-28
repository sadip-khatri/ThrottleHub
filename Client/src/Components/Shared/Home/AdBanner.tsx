import React from "react";

const AdBanner = () => {
  return (
    <section className="relative w-full bg-white rounded-2xl shadow-lg overflow-hidden py-16 px-8 md:px-20 max-w-7xl mx-auto">
      {/* Diagonal slant background on right */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 bg-gradient-to-br from-blue-100 to-blue-300 -skew-x-12 origin-top-right rounded-l-3xl"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-serif font-bold mb-6 text-gray-900 max-w-xl">
            ThrottleHub — Drive Your Passion
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-md leading-relaxed">
            Find top-quality cars, bikes, and genuine parts all in one place.
            Whether you're upgrading your ride or searching for trusted
            accessories, ThrottleHub fuels your journey with performance and
            style.
          </p>
        </div>

        {/* Right Product Collage */}
        <div className="relative flex justify-center items-center gap-4 md:gap-8">
          <img
            src="/fortuner.jpg" // Replace with your actual car image path
            alt="Car"
            className="w-36 rounded-xl shadow-md rotate-[-6deg] hover:rotate-0 transition-transform duration-500 cursor-pointer z-20"
            style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
          />
          <img
            src="/duke390.jpg" // Replace with your actual bike image path
            alt="Bike"
            className="w-28 rounded-lg shadow-md rotate-[10deg] hover:rotate-0 transition-transform duration-500 cursor-pointer absolute top-16 right-16 z-10"
            style={{ boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
          />
          <img
            src="/chrome-exhaust.jpg" // Replace with your actual parts image path
            alt="Car Parts"
            className="w-20 rounded-lg shadow-md rotate-[-10deg] hover:rotate-0 transition-transform duration-500 cursor-pointer absolute bottom-20 left-20 z-10"
            style={{ boxShadow: "0 6px 15px rgba(0,0,0,0.08)" }}
          />
          <img
            src="/motorcycle-windscreen.jpg" // Replace with your actual accessories image path
            alt="Bike Parts"
            className="w-28 rounded-xl shadow-md rotate-[5deg] hover:rotate-0 transition-transform duration-500 cursor-pointer absolute bottom-10 right-8 z-20"
            style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
