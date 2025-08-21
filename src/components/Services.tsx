import Image from "next/image";
const features = [
  { 
    icon: (
      /*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>*/
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}
        <Image
            src="/armpng2.png"
            alt="ARM Cortex-M"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/embeddedlinux.png"
            alt="Embedded linux"
            width={32}
            height={32}
            />
            {/*Microchip logo*/}
        <Image
            src="/mchip.png"
            alt="Embedded linux"
            width={32}
            height={32}
            />
            {/*Arduino*/}
        <Image
            src="/arduino.png"
            alt="Embedded linux"
            width={32}
            height={32}
            />
            {/*Raspberry PI*/}
        <Image
            src="/raspberry-pi.png"
            alt="Embedded linux"
            width={32}
            height={32}
            />
      </div>
    ),
    title: "Firmware Development",
    description: "Custom firmware development to power microcontrollers and embedded systems with reliable, efficient, and scalable code.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hardware Design",
    description: "Bring to the table win-win surv strategic ensure proactive domination At end of the.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Integration",
    description: "Bring to the table win-win surv strategic ensure proactive domination At end of the.",
  },

  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Software Development",
    description: "Bring to the table win-win surv strategic ensure proactive domination At end of the.",
  },

  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="CurrentColor" className="w6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>      
        </svg>
    ),
        title: "Icons",
        description: "Bring",
  },
  
   {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="CurrentColor" className="w6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>      
        </svg>
    ),
        title: "Mobile App Development",
        description: "Bring",
  },

];

const prog = [
    {
        title: "Real-time colobration \n with developers",
        description: "Connect with John",
    },
];

export default function FeatureCards() {
  return (
    <>
      {/* First Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real-time collaborate with Sony Sunny</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bring to the table win-win surv strategic ensure proactive domination At end of the.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg bg-gray-900 flex items-center justify-center text-yellow-400">
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
      </section>

      {/* Second Section */}
      <section className="bg-black text-white pt-0 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 h-80">
            {prog.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-bold mb-3 whitespace-pre-line pl-10 pt-10">{item.title}</h3>
            <p className="text-gray-400 pl-10 pt-2">{item.description}</p>
          </div>
        ))}
        </div>
      </section>
    </>
  );
}



