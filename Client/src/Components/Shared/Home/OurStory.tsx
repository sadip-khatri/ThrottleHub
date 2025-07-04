import React from "react";
import { SectionHeading, ViewAllLink } from "../../Ui/Typography";

const OurStory: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <SectionHeading text="OUR STORY" />
          <p className="max-w-xl text-gray-600">
            Built for everyday life, our bags blend simplicity, style, and
            function. Timeless, versatile, and made to go wherever you do.
          </p>
        </div>
        <h4>
          <a href="our-story">Learn More →</a>
        </h4>
      </div>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src="/images/story-1.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-md"
        />
        <div className="space-y-6">
          <img
            src="/images/story-2.jpg"
            alt=""
            className="w-full h-36 object-cover rounded-md"
          />
          <img
            src="/images/story-3.jpg"
            alt=""
            className="w-full h-36 object-cover rounded-md"
          />
          <div className="bg-[#E9DCC7] flex items-center justify-center rounded-md h-12 font-semibold text-lg">
            <img src="/images/logo.png" alt="Dangiz" className="h-6 mr-2" />
            Dangiz
          </div>
        </div>
        <img
          src="/images/story-4.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-md"
        />
      </div>

      {/* Success Story */}
      <div className="mt-14 flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">OUR SUCCESS STORY</h3>
          <p className="text-gray-600 mt-1">with John Doe</p>
          <ViewAllLink href="#" />
        </div>
        <div className="flex-[2] text-gray-700">
          <p>
            We chatted about online expectation pressures, wedding dress
            choices, how to keep a level head throughout the journey and much
            more!
          </p>
          <a
            href="#"
            className="text-brown-600 underline font-medium mt-2 inline-block"
          >
            Read the interview and shop the shoot
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
