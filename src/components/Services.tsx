import Image from "next/image";
const features = [
  { 
    icon: (
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
            src="/ard.png"
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
        {/*Texas Instruments*/}
        <Image
            src="/ti.png"
            alt="Texas Instruments"
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
        <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}
        <Image
            src="/altium.png"
            alt="Altium Designer"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/orcad.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
        <Image
            src="/ltspice.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
            </div>
    ),
    title: "Hardware Design",
    description: "Bring to the table win-win surv strategic ensure proactive domination At end of the.",
  },
  {
    icon: (
      <div className="flex items-center justify-self-end gap-3">
        {/*Arm cortex-M Icon*/}
        
        <Image
            src="/aws.png"
            alt="Altium Designer"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/azure.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
            </div>
    ),
    title: "Cloud Integration",
    description: "Bring to the table win-win surv strategic ensure proactive domination At end of the.",
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
        <Image
            src="/c++.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/js.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/react.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/nodejs.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
        {/*Embedded Linux Icon*/}
        <Image
            src="/git.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
            </div>
    ),
    title: "Software Development",
    description: "Bring to the table win-win surv strategic ensure proactive domination At end of the.",
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
        <Image
            src="/azure.png"
            alt="Orcad by Cadence"
            width={32}
            height={32}
            />
            </div>
    ),
        title: "UI/UX & Full Stack Development",
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



