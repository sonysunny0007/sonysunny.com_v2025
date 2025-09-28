// src/components/about.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MdDescription } from "react-icons/md";
import { TbSortDescendingNumbers } from "react-icons/tb";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const work_experience = [
  {
    period: "March 2015 - May 2018",
    company: "Atwic R&D, India",
    designation: "Hardware Design Engineer",
    description:
      "Hardware Design, PCB Design,Firmware Development. Software Development",
  },
  {
    period: "May 2018 - September 2018",
    company: "Creopedia, India",
    designation: "Team lead - AI",
    description: "AI, Machine Learning, LLM",
  },
  {
    period: "September 2018 - April 2022",
    company: "Cavli Wireless, India",
    designation: "Embedded systems Engineer",
    description:
      "Hardware Design, PCB Design,Firmware Development. Software Development",
  },
  {
    period: "Aug 2022 - Dec 2022",
    company: "Site 2020, Canada",
    designation: "Quality Specialist",
    description: "QA, Firmware Development",
  },
  {
    period: "Jan 2023 - Present",
    company: "Sirius Controls, Canada",
    designation: "Product Testing",
    description:
      "Firmware Testing, Software Development, Cloud Integration, Product Testing, QA",
  },
  {
    period: "Jan 2021 - Present",
    company: "IoTGliders, Canada",
    designation: "Founder & Consultant",
    description: "Consultation, FW, SW, HW Development, Cloud Integration",
  },
];

const answers = [
  {
    question: "What services does SonySunny.com provide?",
    answer:
      "We specialize in firmware development, hardware design, software solutions, and cloud integration to help you build a complete IoT ecosystem.",
  },
  {
    question: "Can you help with both hardware and software?",
    answer:
      "Yes! From PCB design and embedded firmware to cloud platforms and mobile apps, we cover the full stack to bring your product to life.",
  },
  {
    question: "How do I start a project with you?",
    answer:
      "Simply click “Start Project” or reach out through our contact page. We’ll discuss your idea, suggest solutions, and give you a clear roadmap.",
  },
  {
    question: "Do you work with startups as well as established companies?",
    answer:
      "Absolutely. Whether you’re an early-stage startup with an idea or a company looking to scale, we can customize our services to fit your needs.",
  },
  {
    question:
      "Can you integrate my devices with AWS, Azure, or other cloud platforms?",
    answer:
      "Yes! We specialize in secure cloud connectivity with platforms like AWS IoT, Azure IoT Hub, and Google Cloud IoT.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white" id="about">
        <section className="flex flex-col justify-center items-center text-center py-10 px-6">
          <h1
            className="text-4xl md:text-6xl font-semibold leading-tight mb-5 pt-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sony Sunny brings <br /> your ideas into reality
          </h1>

          <p className="max-w-3xl text-gray-300 text-lg mb-12 leading-relaxed">
            Building Smarter Systems by Connecting Code, Circuits, and the Cloud
            — One Layer at a Time.
          </p>

          <div className="flex gap-6">
            <button className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
              start project
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start pt-10">
          {/* Left column */}
          <div className="flex justify-center items-center">
            <div className="relative w-150 h-72 md:h-96">
              <Image
                src="/sony-about.jpg"
                alt="Descriptive alt text"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right column with two rows */}
          <div className="flex flex-col px-10">
            <div className="gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">About me</h2>
                <p className="text-lg">
                  I’m Sony Sunny, a technology innovator dedicated to
                  transforming ideas into practical, future-ready solutions.
                  With expertise across firmware development, hardware design,
                  software engineering, cloud integration, and UI/UX design, I
                  specialize in building end-to-end technology platforms that
                  empower businesses to thrive in a connected world.
                </p>
                <p className="text-lg pt-5">
                  {" "}
                  My approach combines technical precision, creative
                  problem-solving, and user-focused design, ensuring every
                  project is not only functional but also scalable, efficient,
                  and intuitive. Whether it’s embedded systems, smart devices,
                  or seamless cloud platforms, I aim to deliver innovative
                  solutions that make an impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="pt-20"> {/* Reduce padding top */}
        {/*<div className="max-w-6xl mx-auto grid md:grid-cols-1 justify-center mt-6 h-120"> {/* Reduce margin top */}
        {/*<div className="bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition">
      <h1 className="text-2xl font-semibold">
        Firmware Development
      </h1>
      <p className="mt-4 text-gray-300">
        Specialized in low-level programming, embedded systems, and real-time solutions that power the next generation of smart devices.
      </p>
        <div className="grid md-gid-cols-3 justify-center mt-6">
      <div className="grid md:grid-col-3 gap-8">
        {experience.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col justify-center">
              
              {experience.icon}
            </div>
          </div>
        )) }
      </div>
    </div>
    </div>
 
  </div>
</section>*/}
        <div className="pt-10">
          {/* Horizontal Divider */}
          <div className="w-full h-px my-6 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </div>

        <section className="bg-black text-white py-10 pt-10">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            {/* Item 1 */}
            <div className="flex flex-col items-center md:items-start flex-1">
              <p className="text-gray-300 mt-2">Happy customers</p>
              <h2
                className="text-7xl font-bold"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                20+
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-800 mx-6" />

            {/* Item 2 */}
            <div className="flex flex-col items-center flex-1">
              <p className="text-gray-300 mt-2">Hours spent on craft</p>
              <h2
                className="text-7xl font-bold"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                8K+
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-800 mx-6" />

            {/* Item 3 */}
            <div className="flex flex-col items-center md:items-end flex-1">
              <p className="text-gray-300 mt-2">Review rate</p>
              <h2
                className="text-7xl font-bold"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                4.6
              </h2>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center text-center  pt-20 ">
          <div className="md:text-left">
            <h2
              className="text-5xl md:text-5xl font-semibold leading-tight justify-center items-center text-center pt-10 pb-20 pl-25"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sony Sunny promises &
              <br />
              delivers quality products
            </h2>
          </div>

          <div className="justify-center items-center pl-50">
            <button className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
              start project
            </button>
          </div>
        </section>

        <section className="bg-black grid md:grid-cols-2 gap-2 items-center max-w-6xl mx-auto">
          <div className="w-140 mx-auto h-80 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition ">
            <h3 className="text-3xl font-bold mb-3 shadow-lg whitespace-pre-line pl-10 pt-10">
              Embedded Systems Development
            </h3>
            <p className="text-gray-400 pl-10 pt-2">
              From hardware design to optimized firmware, we build reliable and
              scalable embedded solutions that power the future of IoT and
              automation.
            </p>
          </div>
          <div className="w-140 mx-auto h-80 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition ">
            <h3 className="text-3xl font-bold mb-3 shadow-lg whitespace-pre-line pl-10 pt-10">
              Software & <br />
              Cloud Integration
            </h3>
            <p className="text-gray-400 pl-10 pt-2">
              Seamlessly connect devices with intelligent software and cloud
              platforms. We help create a complete ecosystem for data,
              analytics, and remote control.
            </p>
          </div>
        </section>

        <section className="bg-black items-center max-w-6xl mx-auto pt-15">
          <div className="mx-auto h-80 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold mb-3 shodow-lg whitespace-pre-line pl-5 pt-10">
              Real-time connect with <br />
              sony sunny
            </h3>
            <p className="shadow-lg pl-5 text-gray-400">Connect with Ray</p>
          </div>
        </section>

        <section className="bg-black text-white pt-25 py-10 pb-25">
          <div className="flex flex-col justify-center items-center text-center">
            <h1
              className="text-4xl md:text-6xl font-semibold leading-tight"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              I have worked with some <br /> amazing companies.
            </h1>
          </div>
        </section>

        <section className="bg-black text-white pt-5">
          <div className="grid gap-6 mx-auto max-w-4xl px-4">
            {work_experience.map((item, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-2xl p-8 border border-gray-800 flex justify-between items-center"
              >
                {/* Left Column */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-gray-400">{item.period}</div>
                  <div className="text-3xl font-bold mt-2">{item.company}</div>
                </div>

                {/* Right Column */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xl font-semibold">
                      {item.designation}
                    </div>
                    <div className="text-sm text-gray-400 shadow-lg leading-snug max-w-xs whitespace-normal">
                      {item.description}
                    </div>
                  </div>

                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-lime-400 text-black hover:bg-lime-300 transition">
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-screen grid md:grid-cols-2 bg-black">
          <div className="flex justify-center items-center">
            <div className="text-left">
              <h1
                className="text-3xl md:text-6xl font-semibold leading-tight"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We've got the <br /> answers
              </h1>
              <p className="text-gray-300 text-left font-sm pt-5">its normal</p>
              <div className="justify-center items-center pt-5">
                <button className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
                  start project
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 mx-auto pt-35 w-150 h-fit">
            {answers.map((item, index) => {
              const [open, setOpen] = useState(false);
              return (
                <div
                  key={index}
                  className={`bg-[#111] rounded-2xl border border-gray-800 transition-all duration-300 ${
                    open ? "p-8" : "p-6"
                  }`}
                >
                  {/* Question Row */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <div className="text-xl font-bold text-left">
                      {item.question}
                    </div>
                    <ChevronDown
                      className={`w-7 h-7 text-lime-400 transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Collapsible Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 text-gray-400 text-sm ${
                      open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-black items-center max-w-6xl mx-auto pt-10 pb-20">
          <div className="mx-auto h-120 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition">
            <div className="flex flex-col justify-center items-center text-center pt-10">
              <h1
                className="text-4xl md:text-6xl font-semibold leading-tight"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Have projects in mind <br /> Lets work together.
              </h1>
            </div>
            {/* Explore More Button */}
            <div className="text-center pt-15">
              <Link
                href="/blog"
                className="inline-block px-6 py-3 bg-lime-400 text-black rounded-full font-semibold hover:bg-lime-300 transition"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
