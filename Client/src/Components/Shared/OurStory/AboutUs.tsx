import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#f9f4ef] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm text-black font-medium">
            Phasellus accumsan imperdiet tempor.{" "}
            <em className="italic text-gray-800">Cras tincidunt</em>, arcu nec
            eleifend porttitor, orci est vehicula
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/img/ourstory/aboutus.png"
            alt="About Person"
            className="rounded-xl max-w-sm w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
