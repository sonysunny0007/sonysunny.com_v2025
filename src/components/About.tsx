// src/components/about.tsx
import Image from "next/image";
import { MdDescription } from "react-icons/md";
import { TbSortDescendingNumbers } from "react-icons/tb";
const experience =[
  {
    icon: (
      <div className="flex justify-self-end items-center gap3">
      <Image
        src="/arduino.jpg"
        alt="Arduino"
        width={52}
        height={52}
      />
      </div>
    ),
    title: "Firmware development",
    description: "heee",
  },
  {
    icon: (
      <div className="flex justify-self-end items-center gap3">
        <Image
          src="/altium.png"
          alt="Altium"
          width={52}
          height={52}
          />
      </div>
    ),
    title:"Hardware Design",
    description: "hiiiiii"
  },
  {
    icon: (
      <div className="flex justify-self-end items-center gap3">
        <Image
          src="/altium.png"
          alt="Altium"
          width={52}
          height={52}
          />
      </div>
    ),
    title:"Hardware Design",
    description: "hiiiiii"
  },
]

const work_experience=[
  {
    period:"March 2015 - May 2018",
    company: "Atwic R&D, India",
    designation: "Hardware Design Engineer",
    description: "heeeeeeeee"
  },
  {
    period:"May 2018 - September 2018",
    company: "Creopedia, India",
    designation: "Team lead - AI",
    description: "heeeeeeeee"
  },
  {
    period:"September 2018 - April 2022",
    company: "Cavli Wireless, India",
    designation: "Embedded systems Engineer",
    description: "hiiiiiii"
  },
  {
    period:"Aug 2022 - Dec 2022",
    company: "Site 2020, Canada",
    designation: "Quality Specialist",
    description: "heeeee"
  },
  {
    period:"Jan 2023 - Present",
    company: "Sirius Controls, Canada",
    designation: "Product Testing",
    description: "heeeee"
  },
  {
    period:"Jan 2021 - Present",
    company: "IoTGliders, Canada",
    designation: "Founder & Consultant",
    description: "heeeee"
  },
]

const answers=[
  {
    question: "How can i get the services?",
    answer: "You are at the right place.Please visit the service page",
  },
  {
    question: "How can i get the services?",
    answer: "You are at the right place.Please visit the service page",
  },
  {
    question: "How can i get the services?",
    answer: "You are at the right place.Please visit the service page",
  },
  {
    question: "How can i get the services?",
    answer: "You are at the right place.Please visit the service page",
  },
  {
    question: "How can i get the services?",
    answer: "You are at the right place.Please visit the service page",
  },

]


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
      <p className="text-lg">I’m Sony Sunny, a technology innovator dedicated to transforming ideas into practical, future-ready solutions. With expertise across firmware development, hardware design, software engineering, cloud integration, and UI/UX design, I specialize in building end-to-end technology platforms that empower businesses to thrive in a connected world.</p>
      <p className="text-lg pt-5"> My approach combines technical precision, creative problem-solving, and user-focused design, ensuring every project is not only functional but also scalable, efficient, and intuitive. Whether it’s embedded systems, smart devices, or seamless cloud platforms, I aim to deliver innovative solutions that make an impact.</p>
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

<section className="grid md:grid-cols-2 gap-8 items-center text-center  pt-20">
  <div className="md:text-left">
    <h2
      className="text-5xl md:text-5xl font-semibold leading-tight justify-center items-center text-center pt-10 pb-20 pl-5"
      style={{
        background: 
          "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
      }}
      >
        Sony Sunny promises and<br />delivers quality products
      </h2>
  </div>

  <div className="justify-center items-center">
    <button className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
        start project
    </button>
  </div>
</section>

<section className="bg-black grid md:grid-cols-2 gap-2 items-center max-w-6xl mx-auto">
  <div className="w-140 mx-auto h-80 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition ">
    <h3 className="text-3xl font-bold mb-3 shadow-lg whitespace-pre-line pl-10 pt-10">sony sunny</h3>
    <p className="text-gray-400 pl-10 pt-2">hey its me sony</p>
  </div>
  <div className="w-140 mx-auto h-80 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition ">
    <h3 className="text-3xl font-bold mb-3 shadow-lg whitespace-pre-line pl-10 pt-10">sony sunny</h3>
    <p className="text-gray-400 pl-10 pt-2">hey its me sony</p>
  </div>
</section>

<section className="bg-black items-center max-w-6xl mx-auto pt-15">
  <div className="mx-auto h-80 bg-[#111] rounded-3xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition">
    <h3 className="text-3xl font-bold mb-3 shodow-lg whitespace-pre-line pl-5 pt-10">Real-time connect with <br />sony sunny</h3>
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
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent",
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
        <div className="flex-1">
          <div className="text-sm text-gray-400">{item.period}</div>
          <div className="text-3xl font-bold mt-2">{item.company}</div>
        </div>

        {/* Right Column */}
        <div className="flex items-center gap-4 max-w-md">
          <div className="text-right">
            <div className="text-xl font-semibold">{item.designation}</div>
            <div className="text-sm text-gray-400 shadow-lg">
              {item.description}
            </div>
          </div>

          <button className="bg-lime-400 text-black font-semibold w-12 h-12 rounded-full hover:bg-lime-300 transition">
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
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent",
        }}>
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
  <div className="grid gap-4 mx-auto h-10 pt-35 w-150">
    {answers.map((item,index)=>(
      <div
        key={index}
        className="bg-[#111] rounded-2xl p-8 border border-gray-800 flex justify-between items-center"
      >
        <div className="flex justify-center items-center font-semibold">
        {item.question}
        </div>

    </div>    
    ))}


  </div>

</section>

  </main>
  </>
  )
}
