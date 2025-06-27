import React, { useRef } from "react";
import { SectionHeading, ViewAllLink } from "../../Ui/Typography";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogCard from "../../Ui/BlogCard";

const blog = [
  {
    image: "/bags/black.jpg",
    name: "Baibhav Nepal",
    title: "How does writing Influence your personal",
    date: "24 jun 2022",
  },
  {
    image: "/bags/black.jpg",
    name: "Baibhav Nepal",
    title: "How does writing Influence your personal",
    date: "24 jun 2022",
  },
  {
    image: "/bags/black.jpg",
    name: "Baibhav Nepal",
    title: "How does writing Influence your personal",
    date: "24 jun 2022",
  },
  {
    image: "/bags/black.jpg",
    name: "Baibhav Nepal",
    title: "How does writing Influence your personal",
    date: "24 jun 2022",
  },
  {
    image: "/bags/black.jpg",
    name: "Baibhav Nepal",
    title: "How does writing Influence your personal",
    date: "24 jun 2022",
  },
];

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-6 md:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <SectionHeading text="OUR BLOGS" />
          <p className="max-w-xl text-gray-600">
            Rooted in the concept of minimalism & re-usability, the bag is a
            classic silhouette that represents a bag that can do it all.
            Comfortable & convenient, the bag is an essential.
          </p>
        </div>
        <ViewAllLink href="blog" />
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[60%] transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-20 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[60%] transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-20 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <FaChevronRight />
      </button>

      {/* Blog Cards Scroll Area */}
      <div
        className="overflow-x-auto scroll-smooth hide-scrollbar mt-6"
        ref={scrollRef}
      >
        <div className="flex items-start w-max gap-4">
          {blog.map((blog, index) => (
            <div key={index} className="min-w-[220px] shrink-0">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar Style */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Blog;
