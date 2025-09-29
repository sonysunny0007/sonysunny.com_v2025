"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    category: "Embedded System",
    title: "FreeRTOS Demystified: How Embedded Multitasking Works",
    desc: "FreeRTOS is a lightweight, open-source real-time operating system that enables efficient multitasking on microcontrollers by managing tasks, scheduling, and communication with deterministic performance.",
    image: "/freertos_embedded.png",
  },
  {
    category: "Cloud",
    title: "How MQTT Connects Your Firmware to the Cloud",
    desc: "MQTT is a lightweight messaging protocol that connects embedded devices to the cloud by enabling efficient, reliable, and real-time data exchange over minimal network resources.",
    image: "/mqtt_embedded.png",
  },
  {
    category: "AI",
    title: "AI on the Edge: ESP32-CAM & TinyML",
    desc: "AI on the Edge: ESP32-CAM & TinyML explores how low-power microcontrollers like the ESP32-CAM can run machine learning models locally, enabling intelligent, real-time decision-making without relying on the cloud.",
    image: "/esp32_ai.png",
  },
  {
    category: "Software Development",
    title: "Visualizing Embedded Data: Dashboards in React",
    desc: "Learn how to create interactive React dashboards to visualize and monitor embedded system data effectively.",
    image: "/embedded_data_react.png",
  },
  {
    category: "UI/UX Design",
    title: "Embedded UI/UX Meets Cloud",
    desc: "Design intuitive UI/UX for embedded systems with seamless cloud integration, ensuring smooth user interactions and real-time data accessibility.",
    image: "/embedded_uiux.png",
  },
  {
    category: "Embedded System",
    title: "Best Practices for Managing Firmware Repositories",
    desc: "Explore essential strategies for organizing, maintaining, and version-controlling firmware repositories efficiently.",
    image: "/firmware_repository.png",
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
    <main className="bg-black text-white" id="blog">
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
    </main>
  );
}
