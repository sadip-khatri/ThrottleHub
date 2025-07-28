/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import { SectionHeading, ViewAllLink } from "../../Ui/Typography";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogCard from "../../Ui/BlogCard";
import { blogs } from "../../../Data/BlogsData";
import { Link } from "react-router-dom";

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

  // Show all blogs
  // const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="py-16 bg-surface relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Latest Blog Posts</h2>
        {/* Arrow Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background border border-accent rounded-full p-2 z-10 shadow-md hover:bg-surface cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background border border-accent rounded-full p-2 z-10 shadow-md hover:bg-surface cursor-pointer"
        >
          <FaChevronRight />
        </button>
        {/* Scrollable Blog Cards */}
        <div
          className="overflow-x-auto scroll-smooth hide-scrollbar mt-6"
          ref={scrollRef}
        >
          <div className="flex items-start w-max gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="w-[240px] h-[370px] bg-surface rounded-md overflow-hidden shadow-sm flex flex-col border border-accent"
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[180px] object-cover"
                  />
                  <div className="p-3 flex flex-col justify-between h-[170px]">
                    <p className="text-sm text-secondary pb-2">{blog.author}</p>
                    <h4 className="text-xs font-semibold uppercase tracking-wider pb-2 line-clamp-2 text-primary">
                      {blog.title}
                    </h4>
                    <p className="text-base font-semibold mt-1 text-secondary">
                      {new Date(blog.date).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
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
      </div>
    </section>
  );
};

export default Blog;
