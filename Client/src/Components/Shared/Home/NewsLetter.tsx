import React from "react";
import { FaArrowRight, FaInstagram, FaFacebook } from "react-icons/fa";

function NewsLetter() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-white max-w-screen-xl mx-auto">
      {/* Left side: Heading + form */}
      <div className="flex flex-col gap-4 w-full lg:max-w-xl">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Become part of the community.
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Receive first access to the very best of REVEILED products,
          inspiration and services.
        </p>
        <form
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 mt-2"
          method="post"
        >
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg sm:rounded-l-lg px-4 py-2 w-full sm:w-64"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="bg-[#B48B65] px-4 py-2 rounded-lg sm:rounded-r-lg text-white flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </form>
      </div>

      {/* Right side: Contact info + social */}
      <div className="flex flex-col gap-6 w-full lg:w-auto">
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">EMAIL US</h3>
          <a
            href="mailto:hello@dangiz.com.au"
            className="text-gray-600 text-sm hover:underline break-all"
          >
            hello@dangiz.com.au
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">FOLLOW US</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-700 hover:text-black"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-700 hover:text-black"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
