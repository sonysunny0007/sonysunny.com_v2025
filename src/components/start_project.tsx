"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const blocks = [
  { icon: "/starting_1.png", title: "Starting", tag: "You are here" },
  { icon: "/planning_1.png", title: "Planning", tag: "Next step" },
  { icon: "/design_1.png", title: "Design", tag: "Work in progress" },
  { icon: "/launch_1.png", title: "Launch", tag: "Ready" },
  { icon: "/done_1.png", title: "Done", tag: "Completed" },
];

export default function StartProjectPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim()) return alert("Please enter your first name");
    if (!formData.lastName.trim()) return alert("Please enter your last name");
    if (!formData.email.trim()) return alert("Please enter your email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return alert("Please enter a valid email");
    if (!formData.subject.trim()) return alert("Please enter your subject");
    if (!formData.message.trim()) return alert("Please enter a message");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          subscribe: false,
        });
      } else alert("Failed to send message. Please try again.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start py-10 px-4 md:px-10">
      {/* Heading */}
      <section className="text-center max-w-3xl mb-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Have projects in mind? <br className="hidden md:block" /> Let’s work together.
        </h1>
      </section>

      {/* Main Card */}
      <section className="w-full max-w-7xl bg-[#0f0f0f] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
        {/* Top Section – Process Blocks */}
        <div className="p-6 md:p-10 border-b border-gray-800 bg-[#111] rounded-t-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="bg-[#141414] rounded-xl p-6 border border-gray-800 hover:border-lime-300 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={block.icon}
                    alt={block.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{block.title}</h3>
                <p className="text-gray-400 text-sm">{block.tag}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section – Form */}
        <div className="py-16 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#111] border border-[#1b1b1b] rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Left Panel */}
                <div className="md:col-span-1 p-6 md:p-8 flex flex-col items-center text-center gap-6 bg-[#0f0f0f]">
                  {/* Image above the text */}
                  <div className="flex justify-center w-full">
                    <Image
                      src="/man_question_first.png"
                      alt="Let's work together"
                      width={420}
                      height={420}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl object-cover transition-transform hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Let’s start a project <br /> together
                  </h3>

                  <a
                    href="/start_project"
                    className="mt-1 bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition"
                  >
                    Start a project
                  </a>

                  <div className="mt-6 w-full text-left space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-5 h-5" />
                      <span className="text-white">sonysunny028@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5" />
                      <span className="text-white">Edmonton, Canada</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5" />
                      <span className="text-white">+1 825 777 3605</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel – Form */}
                <div className="md:col-span-2 p-6 md:p-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Get in Touch</h4>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#222] rounded-xl p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="md:col-span-2 w-full bg-[#121212] border border-[#222] rounded-xl p-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:col-span-2 justify-between mt-2">
                      <label className="inline-flex items-center gap-2 text-gray-300">
                        <input
                          type="checkbox"
                          name="subscribe"
                          checked={formData.subscribe}
                          onChange={handleChange}
                          className="form-checkbox h-4 w-4 rounded border-gray-600 bg-transparent text-lime-300"
                        />
                        <span className="text-gray-300">Subscribe to our newsletter.</span>
                      </label>

                      <button
                        type="submit"
                        className="inline-block mt-1 bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-lime-300 transition"
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
