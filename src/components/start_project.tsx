"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const blocks = [
  {
    icon: (
      <div className="flex items-center justify-self-end">
              <Image
                src="/starting_1.png"
                alt="Start Project"
                width={800}
                height={800}
              />
            </div>
    ),
    title: "Starting",
    tag: "You are here",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end">
              <Image
                src="/planning_1.png"
                alt="Start Project"
                width={800}
                height={800}
              />
            </div>
    ),
    title: "Planning",
    tag: "Next step",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end">
              <Image
                src="/design_1.png"
                alt="Start Project"
                width={800}
                height={800}
              />
            </div>
    ),
    title: "Design",
    tag: "Work in progress",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end">
              <Image
                src="/launch_1.png"
                alt="Start Project"
                width={800}
                height={800}
              />
            </div>
    ),
    title: "Launch",
    tag: "Ready",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end">
              <Image
                src="/done_1.png"
                alt="Start Project"
                width={800}
                height={800}
              />
            </div>
    ),
    title: "Done",
    tag: "Completed",
  },
];

export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center py-20">
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-black">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-semibold leading-tight mb-10 max-w-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Have projects in mind? <br className="hidden md:block" /> Let’s work
          together.
        </h1>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/man_question_first.png"
            alt="Let's work together"
            className="rounded-xl object-cover w-[300px] md:w-[380px] lg:w-[420px] transition-transform hover:scale-105"
          />
        </div>
      </section>

      <section className="bg-[#0f0f0f] rounded-3xl shadow-2xl border border-gray-800 max-w-7xl w-full mx-4 overflow-hidden">
        {/* 🟢 TOP SECTION – BLOCKS */}
        <div className="p-10 border-b border-gray-800 bg-[#111] rounded-t-3xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {blocks.map((item, index) => (
              <div
                key={index}
                className="bg-[#141414] rounded-xl p-6 border border-gray-800 hover:border-lime-300 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center text-yellow-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🟣 BOTTOM SECTION – FORM */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Card */}
            <div className="bg-[#111] border border-[#1b1b1b] rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* LEFT PANEL */}
                <div className="md:col-span-1 p-8 flex flex-col items-center text-center gap-6 bg-[#0f0f0f]">
                  <div className="w-78 h-28 rounded-4xl overflow-hidden">
                    <Image
                      src="/lets_work_together_1.png"
                      alt="Let's work together"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Let’s start a project <br /> together
                  </h3>

                  <a
                    href="/start_project"
                    className="inline-block mt-1 bg-lime-400 text-black font-semibold px-7 py-3 rounded-full hover:bg-lime-300 transition"
                  >
                    Start a project
                  </a>

                  <div className="mt-6 w-full text-left space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-5 h-5 text-gray-300" />
                      <span className="text-white">sonysunny028@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-gray-300" />
                      <span className="text-white">Edmonton, Canada</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5 text-gray-300" />
                      <span className="text-white">+1 825 777 3605</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT PANEL – FORM */}
                <div className="md:col-span-2 p-8">
                  <h4 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h4>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your First name"
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <input
                      type="text"
                      placeholder="Your Last name"
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <textarea
                      placeholder="Type your message"
                      rows={6}
                      className="md:col-span-2 w-full bg-[#121212] border border-[#222] rounded-xl p-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <div className="flex items-center gap-4 md:col-span-2 justify-between mt-2">
                      <label className="inline-flex items-center gap-2 text-gray-300">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 rounded border-gray-600 bg-transparent text-lime-300"
                        />
                        <span className="text-gray-300">
                          Subscribe to our email newsletter.
                        </span>
                      </label>

                      <button
                        type="submit"
                        className="ml-auto bg-white text-black rounded-full px-6 py-3 font-medium hover:shadow-lg transition"
                      >
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Submit Now</span>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
