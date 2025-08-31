// src/components/about.tsx
import Image from "next/image";

export default function AboutPage() {
  return(
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
      <button className="bg-lime-400 text-black ont-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
        start project
      </button>
</div>


    </section>

     <section className="grid md:grid-cols-[1fr_1fr] gap-8 items-start pt-5 ">
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
  <div className="grid grid-rows-2 gap-6">
    <div>
      <h2 className="text-3xl font-bold mb-6">About me</h2>
      <p className="text-lg">I’m Sony Sunny, a technology innovator dedicated to transforming ideas into practical, future-ready solutions. With expertise across firmware development, hardware design, software engineering, cloud integration, and UI/UX design, I specialize in building end-to-end technology platforms that empower businesses to thrive in a connected world.</p>
      <p className="text-lg pt-5"> My approach combines technical precision, creative problem-solving, and user-focused design, ensuring every project is not only functional but also scalable, efficient, and intuitive. Whether it’s embedded systems, smart devices, or seamless cloud platforms, I aim to deliver innovative solutions that make an impact.</p>
    </div>
  </div>
  </div>
</section>


<section className="pt-8"> {/* Reduce padding top */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-1 justify-center mt-6"> {/* Reduce margin top */}
    <div className="bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition">
      <h1 className="text-2xl font-semibold">
        Firmware Development
      </h1>
      <p className="mt-4 text-gray-300">
        Specialized in low-level programming, embedded systems, and real-time solutions that power the next generation of smart devices.
      </p>
    </div>
  </div>
</section>




  </main>
  </>
  )
}
