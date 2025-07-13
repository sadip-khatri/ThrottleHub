import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#f9f4ef] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>246 Impex</strong>, we’re passionate about connecting people with the latest in technology. From cutting-edge smartphones and high-performance laptops to essential accessories and audio gear, we curate products that enhance your everyday life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is to bring trusted brands and unbeatable value under one digital roof. Whether you're a professional, a gamer, or a casual tech lover — our store is built with your needs in mind. We stand for quality, fast delivery, and reliable customer support.
          </p>
          <p className="text-sm text-black font-medium">
            Innovation meets convenience —{" "}
            <em className="italic text-gray-800">
              your trusted destination for all things tech.
            </em>
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/img/ourstory/about.jpg"
            alt="Tech Products Display"
            className="rounded-xl max-w-sm w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
