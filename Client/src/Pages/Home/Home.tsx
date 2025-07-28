/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Hero from "./Hero";
import NewIn from "../../Components/Shared/Home/NewIn";
import BikeCollection from "../../Components/Shared/Home/BikeCollection";
import CarCollection from "../../Components/Shared/Home/CarCollections";
import Blog from "../../Components/Shared/Home/Blog";
import FollowUs from "../../Components/Shared/Home/FollowUs";
import NewsLetter from "../../Components/Shared/Home/NewsLetter";
import AdBanner from "../../Components/Shared/Home/AdBanner";
import OurStory from "../../Components/Shared/Home/OurStory";
import {
  FaRocket,
  FaCarSide,
  FaHeadset,
  FaFlagCheckered,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Floating Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
        {["hero", "new-in", "collections", "blog", "newsletter"].map(
          (section, index) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-4 h-4 bg-accent/30 rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
              title={section.replace("-", " ")}
            />
          )
        )}
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen">
        <Hero />
      </section>

      {/* Stats Section */}
      <div className="relative z-20 my-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-surface backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-accent">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: FaFlagCheckered,
                  number: "Now Open",
                  label: "ThrottleHub Launch",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: FaCarSide,
                  number: "100+",
                  label: "Curated Vehicles & Gear",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: FaHeadset,
                  number: "24/7",
                  label: "Customer Support",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  icon: FaRocket,
                  number: "100%",
                  label: "Satisfaction Goal",
                  color: "from-green-500 to-green-600",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* New In Section */}
      <section id="new-in" className="py-20 w-full bg-surface">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaStar className="w-4 h-4" />
              <span>Fresh Arrivals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              New In
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Explore the latest arrivals in premium bikes and cars — built for
              performance and designed to impress.
            </p>
          </div>
          <NewIn />
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-20 bg-surface w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <AdBanner />
        </div>
      </section>

      {/* Bike Collection */}
      <section className="py-20 w-full bg-surface">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaHeart className="w-4 h-4" />
              <span>Popular Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Bike Collection
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Discover performance-packed motorcycles engineered for thrill,
              control, and endurance.
            </p>
          </div>
          <BikeCollection />
        </div>
      </section>

      {/* Car Collection */}
      <section className="py-20 bg-surface w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaStar className="w-4 h-4" />
              <span>Trending Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Car Collection
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Browse our curated selection of stylish and reliable cars tailored
              for every lifestyle.
            </p>
          </div>
          <CarCollection />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <OurStory />
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-surface w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaStar className="w-4 h-4" />
              <span>Latest Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Auto Blog
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Stay updated with automotive trends, maintenance tips, and buying
              guides for both bikes and cars.
            </p>
          </div>
          <Blog />
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-20 w-full bg-surface">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaHeart className="w-4 h-4" />
              <span>Social Media</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Follow Us
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Follow ThrottleHub for the latest rides, featured builds, auto
              tips, and road stories.
            </p>
          </div>
          <FollowUs />
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 bg-surface">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <NewsLetter />
        </div>
      </section>
    </div>
  );
};

export default Home;
