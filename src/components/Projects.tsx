import Image from "next/image";

export default function PrioritySection() {
  const steps = [
    {
      icon: (
        <div className="flex items-center justify-self-end gap-3">
                {/*Research Icon*/}
                <Image
                    src="/research.png"
                    alt="Altium Designer"
                    width={32}
                    height={32}
                    />
                    </div>
      ),
      title: "Research",
      description:
        "We perform in-depth research to understand your product requirements, analyze technical challenges, and explore innovative solutions. Our team investigates emerging technologies, industry standards, and component-level optimizations to ensure a strong foundation for your firmware, hardware, and software development.",
    },
    {
      icon: (
        <div className="flex items-center justify-self-end gap-3">
                {/*Research Icon*/}
                <Image
                    src="/market.png"
                    alt="Altium Designer"
                    width={32}
                    height={32}
                    />
                    </div>
      ),
      title: "Current Market Trend",
      description:
        "We stay ahead of the curve by analyzing current market demands, industry shifts, and technological advancements. By aligning your product development with these insights, we help you create solutions that are competitive, future-ready, and tailored to meet your customers’ expectations.",
    },
    {
      icon: (
        <div className="flex items-center justify-self-end gap-3">
                {/*Research Icon*/}
                <Image
                    src="/design.png"
                    alt="Altium Designer"
                    width={32}
                    height={32}
                    />
                    </div>
      ),
      title: "Design",
      description:
        "Our design process integrates creativity with engineering precision. From schematic design and PCB layout to firmware architecture and intuitive software interfaces, we ensure that every layer of your product is optimized for performance, scalability, and seamless integration.",
    },
  ];

  return (
    <>
    <main className="min-h-screen bg-black text-white" id="projects">
      {/* Section Heading */}
      <section className="flex flex-col justify-center items-center text-center py-20 px-6">
        <h1
          className="text-4xl md:text-6xl font-semibold leading-tight mb-5"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Design that puts your <br /> growth on priority
        </h1>
      </section>

      {/* Content Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-black text-lg">
                  {step.icon}
                </div>

                {/* Step Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/research_iot.jpg"
              alt="Project"
              className="rounded-3xl object-cover max-h-[500px]"
            />
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
