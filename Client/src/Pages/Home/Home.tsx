import React from "react";
import Hero from "./Hero";
import NewIn from "../../Components/Shared/Home/NewIn";
import LaptopCollections from "../../Components/Shared/Home/LaptopCollections";
import MensCollection from "../../Components/Shared/Home/MobileCollection";
import Blog from "../../Components/Shared/Home/Blog";
import FollowUs from "../../Components/Shared/Home/FollowUs";
import NewsLetter from "../../Components/Shared/Home/NewsLetter";
import AdBanner from "../../Components/Shared/Home/AdBanner";
import OurStory from "../../Components/Shared/Home/OurStory";
import { FaRocket, FaStar, FaHeart, FaShoppingBag } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
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
              className="w-4 h-4 bg-white/30 rounded-full hover:bg-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-xl"
              title={section.replace("-", " ")}
            />
          )
        )}
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen">
        <Hero />
      </section>

      {/* Floating Stats Bar */}
      <div className="relative z-20 -mt-20 mb-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: FaRocket,
                  number: "50K+",
                  label: "Happy Customers",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: FaStar,
                  number: "1000+",
                  label: "Products",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: FaHeart,
                  number: "24/7",
                  label: "Support",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  icon: FaShoppingBag,
                  number: "100%",
                  label: "Quality",
                  color: "from-green-500 to-green-600",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* New In Section - Full Width */}
      <section id="new-in" className="py-20 w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaStar className="w-4 h-4" />
              <span>Fresh Arrivals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                New In
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover cutting-edge gadgets and the newest innovations designed
              to enhance your digital lifestyle.
            </p>
          </div>
          <NewIn />
        </div>
      </section>

      {/* Ad Banner Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <AdBanner />
        </div>
      </section>

      {/* Bag Collection Section - Full Width */}
      <section className="py-20 w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaHeart className="w-4 h-4" />
              <span>Popular Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Mobile Collection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elegant smartphones that blend sleek design with powerful
              performance for every moment.
            </p>
          </div>
          <LaptopCollections />
        </div>
      </section>

      {/* Mens Collection Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaStar className="w-4 h-4" />
              <span>Trending Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#2563eb] via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Laptop Collection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sophisticated laptops that define modern performance, portability,
              and design.
            </p>
          </div>
          <MensCollection />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <OurStory />
        </div>
      </section>

      {/* Blog Section - Full Width */}
      <section
        id="blog"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full"
      >
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaStar className="w-4 h-4" />
              <span>Latest Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Tech Blog
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest tech trends, expert tips, and
              industry insights from the world of innovation.
            </p>
          </div>
          <Blog />
        </div>
      </section>

      {/* Follow Us Section - Full Width */}
      <section className="py-20 w-full">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
              <FaHeart className="w-4 h-4" />
              <span>Social Media</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#2563eb] via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Follow Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow us on Instagram for the latest tech updates, exclusive
              product sneak peeks, and expert tips to upgrade your gadgets every
              day.
            </p>
          </div>
          <FollowUs />
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <NewsLetter />
        </div>
      </section>
    </div>
  );
};

export default Home;
