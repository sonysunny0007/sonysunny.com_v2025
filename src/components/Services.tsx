"use client";

import Image from "next/image";
import Link from "next/link";
const features = [
  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}
        <Image src="/armpng2.png" alt="ARM Cortex-M" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image
          src="/embeddedlinux.png"
          alt="Embedded linux"
          width={32}
          height={32}
        />
        {/*Microchip logo*/}
        <Image src="/mchip.png" alt="Embedded linux" width={32} height={32} />
        {/*Arduino*/}
        <Image src="/ard.png" alt="Embedded linux" width={32} height={32} />
        {/*Raspberry PI*/}
        <Image
          src="/raspberry-pi.png"
          alt="Embedded linux"
          width={32}
          height={32}
        />
        {/*Texas Instruments*/}
        <Image src="/ti.png" alt="Texas Instruments" width={32} height={32} />
      </div>
    ),
    title: "Firmware Development",
    description:
      "Custom firmware development to power microcontrollers and embedded systems with reliable, efficient, and scalable code.",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}
        <Image src="/altium.png" alt="Altium Designer" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image src="/orcad.png" alt="Orcad by Cadence" width={32} height={32} />
        <Image
          src="/ltspice.png"
          alt="Orcad by Cadence"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "Hardware Design",
    description:
      "Innovative hardware design solutions powered by Altium, OrCAD, and LTspice to bring your ideas to life.",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}

        <Image src="/aws.png" alt="Altium Designer" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image src="/azure.png" alt="Orcad by Cadence" width={32} height={32} />
      </div>
    ),
    title: "Cloud Integration",
    description:
      "Future-ready solutions powered by AWS and Azure to accelerate your digital transformation.",
  },

  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}

        <Image
          src="/python3.png"
          alt="Altium Designer"
          width={32}
          height={32}
        />
        {/*Embedded Linux Icon*/}
        <Image src="/c++.png" alt="Orcad by Cadence" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image src="/js.png" alt="Orcad by Cadence" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image src="/react.png" alt="Orcad by Cadence" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image
          src="/nodejs.png"
          alt="Orcad by Cadence"
          width={32}
          height={32}
        />
        {/*Embedded Linux Icon*/}
        <Image src="/git.png" alt="Orcad by Cadence" width={32} height={32} />
      </div>
    ),
    title: "Software Development",
    description:
      "Building smart, scalable, and reliable software solutions tailored to your vision.",
  },

  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}

        <Image
          src="/pallete.png"
          alt="Altium Designer"
          width={32}
          height={32}
        />
        {/*Embedded Linux Icon*/}
        <Image
          src="/typography.jpg"
          alt="Orcad by Cadence"
          width={32}
          height={32}
        />
        {/*Embedded Linux Icon*/}
        <Image src="/ux.jpg" alt="Orcad by Cadence" width={32} height={32} />
        {/*Embedded Linux Icon*/}
        <Image
          src="/backend.jpg"
          alt="Orcad by Cadence"
          width={32}
          height={32}
        />
        {/*Embedded Linux Icon*/}
        <Image
          src="/wireframe.jpg"
          alt="Orcad by Cadence"
          width={32}
          height={32}
        />
      </div>
    ),
    title: "UI/UX&Full Stack Development",
    description:
      "Where stunning design meets robust technology — UI/UX and full-stack solutions that work.",
  },

  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}

        <Image
          src="/android.png"
          alt="Altium Designer"
          width={32}
          height={32}
        />
        {/*Embedded Linux Icon*/}
        <Image src="/apple.png" alt="Orcad by Cadence" width={32} height={32} />
      </div>
    ),
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile apps for Android and iOS that deliver seamless experiences on every device.",
  },
];

export default function FeatureCards() {
  return (
    <>
      <main className="bg-black text-white" id="services">
        {/* First Section */}
        <section className="bg-black text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Real-time collaborate with Sony Sunny
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Bring to the table win-win surv strategic ensure proactive
                domination At end of the.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-lime-400 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 rounded-full flex items-center justify-center text-yellow-400">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="flex items-center justify-center h-20 text-center pt-20">
            <div className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
            <Link
              href="/services"
              >
                Explore Services
              </Link>
              
            </div>
              
          </section>
        </section>

        {/* Second Section */}
        <section className="w-fill flex justify-center items-center py-10 bg-black">
          <div className="w-[90%] max-w-6xl flex items-center justify-between rounded-2xl bg-[#111] p-10">
            {/*Ledt column*/}
            <div className="text-left max-w-lg">
              <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                Real-time colobration <br /> with developers
              </h1>
              <p className="mt-4 text-gray-400 cursor-pointer hover:underline">
                Connect with Alice
              </p>
            </div>
              
              {/*Right Column*/}
              <div className="border border-gray-800 rounded-xl flex items-center justify-center">
                <Image
                  src="lets_work_together_1.png"
                  alt="Lets work together"
                  width={300}
                  height={200}
                  className="rounded-xl"
                  />
              </div>
          </div>
        </section>
        
      </main>
    </>
  );
}
