"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    category: "UI/UX Design",
    title: "Why Webflow is the future",
    desc: "Bring to the table win-win surv strategies ensure proactive domination At end of the day.",
    image: "/blog1.png",
  },
  {
    category: "UI/UX Design",
    title: "Optimizing User Experience",
    desc: "Bring to the table win-win surv strategies ensure proactive domination At end of the day.",
    image: "/blog2.png",
  },
  {
    category: "Development",
    title: "How to choose right colors",
    desc: "Bring to the table win-win surv strategies ensure proactive domination At end of the day.",
    image: "/blog3.png",
  },
  {
    category: "Development",
    title: "Scaling Next.js Apps",
    desc: "Learn best practices to scale Next.js apps for large projects.",
    image: "/blog4.png",
  },
  {
    category: "UI/UX Design",
    title: "Design Systems 101",
    desc: "Why every modern product needs a design system for consistency.",
    image: "/blog5.png",
  },
  {
    category: "Productivity",
    title: "Top 10 VS Code Extensions",
    desc: "Boost your developer workflow with these must-have extensions.",
    image: "/blog6.png",
  },
];

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white py-20 px-6">
      {/* Heading */}
      <h1
        className="text-4xl md:text-6xl font-semibold leading-tight mb-16 text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Keep updated with our <br />
        management blog.
      </h1>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3"
        >
          ◀
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-12"
        >
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="flex flex-col bg-[#111111] rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300 min-w-[300px] max-w-[300px]"
            >
              {/* Image */}
              <div className="h-60 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="inline-block text-sm px-4 py-1 rounded-full border border-gray-600 text-gray-300 mb-3 w-fit">
                  {blog.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3"
        >
          ▶
        </button>
      </div>

      {/* Explore More Button */}
      <div className="mt-10">
        <Link href="/blog">
          <button className="px-6 py-3 bg-lime-400 text-black rounded-full font-semibold hover:bg-lime-300 transition">
            Explore More Blogs
          </button>
        </Link>
      </div>
    </section>
  );
}
