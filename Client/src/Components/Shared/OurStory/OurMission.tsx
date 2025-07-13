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
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">OUR MISSION</h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>246 Impex</strong>, our mission is to simplify access to cutting-edge technology by offering reliable, affordable, and innovative products. We aim to empower every individual — from everyday users to tech enthusiasts — by making premium devices and accessories more accessible.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              With a customer-first approach and a commitment to quality, we continuously strive to stay ahead of the tech curve and bring you the best from global brands — all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
