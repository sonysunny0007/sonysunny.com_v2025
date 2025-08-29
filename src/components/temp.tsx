// src/components/about.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-12 space-y-24">
      
      {/* About Us */}
      <section className="grid md:grid-cols-2 gap-12 items-center pt-10">
        <div className="relative h-screen w-full h-72 md:h-96">
          <Image
            src="/images/about-us.jpg" // Replace with your image
            alt="About Us"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            At <strong>sonysunny.com</strong>, we are driven by innovation, precision,
            and a passion for building technology that shapes the future. Our expertise
            spans across firmware development, hardware design, software engineering,
            cloud integration, and UI/UX design, making us a one-stop hub for end-to-end
            technology solutions.
          </p>
          <p className="text-lg leading-relaxed">
            We believe in creating smart, connected, and scalable systems that empower
            businesses to thrive in the digital age. From embedded systems to seamless
            cloud platforms, our solutions are designed to deliver efficiency, reliability,
            and growth.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To bridge the gap between hardware and software innovation, delivering
            high-quality, future-ready solutions that help businesses succeed in a
            rapidly evolving tech landscape.
          </p>
        </div>
        <div className="relative w-full h-72 md:h-96">
          <Image
            src="/images/our-mission.jpg" // Replace with your image
            alt="Our Mission"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* What We Do */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-72 md:h-96">
          <Image
            src="/images/what-we-do.jpg" // Replace with your image
            alt="What We Do"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Firmware Development:</strong> Optimized, secure, and efficient low-level programming for cutting-edge devices.</li>
            <li><strong>Hardware Design:</strong> Intelligent and robust hardware solutions tailored to your unique needs.</li>
            <li><strong>Software Development:</strong> Scalable, secure, and high-performance applications for various platforms.</li>
            <li><strong>Cloud Integration:</strong> Seamless connectivity between devices, systems, and the cloud for smarter operations.</li>
            <li><strong>UI/UX Design:</strong> User-focused interfaces that deliver intuitive and engaging digital experiences.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li><strong>End-to-End Expertise:</strong> From concept to deployment, we handle every step of the process.</li>
            <li><strong>Innovation-Driven:</strong> We leverage the latest technologies to create future-proof solutions.</li>
            <li><strong>Quality-Focused:</strong> Every project meets the highest standards of performance and reliability.</li>
            <li><strong>Collaborative Approach:</strong> We work closely with clients to ensure every solution aligns with their goals.</li>
          </ul>
          <p className="text-lg leading-relaxed">
            Join us in creating the next generation of intelligent, connected technology.
          </p>
        </div>
        <div className="relative w-full h-72 md:h-96">
          <Image
            src="/images/why-choose-us.jpg" // Replace with your image
            alt="Why Choose Us"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

    </div>
  );
}
