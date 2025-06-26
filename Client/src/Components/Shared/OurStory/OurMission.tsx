import React from "react";

const OurMission: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto border-[6px] border-[#f8f1ec] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/img/ourstory/ourmission.jpg"
              alt="Our Mission"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">OUR MISSION</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
