import Link from "next/link";
import Image from "next/image";

export default function Store() {
  const products = [
    {
      id: 1,
      name: "Smart Sensor Kit",
      description:
        "Includes temperature, humidity, and motion sensors for IoT projects.",
      price: "$49.99",
      image: "/sensorkit.jpg",
    },
    {
      id: 2,
      name: "STM32 Dev Board",
      description:
        "High-performance STM32F407 development board with USB support.",
      price: "$29.99",
      image: "/stm32devboard.jpg",
    },
    {
      id: 3,
      name: "Raspberry Pi 4 Kit",
      description:
        "Complete kit with 4GB RAM, power supply, and case for embedded Linux.",
      price: "$89.99",
      image: "/raspberrypi.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white" id="store">
      {/* Section 1: Heading */}
      <section className="bg-black flex flex-col justify-center items-center text-center py-20 px-6">
        <h1
          className="text-4xl md:text-6xl font-semibold leading-tight mb-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Explore App Store with <br /> Electronics store for you
        </h1>
      </section>

      {/* Section 2: Product Grid + Explore More */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-3 mb-15">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#111] shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={200}
                className="w-full h-48 rounded-xl object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                <p className="font-bold text-indigo-400 mb-4">{product.price}</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-lime-400 text-black rounded-full font-semibold hover:bg-lime-300 transition"
          >
            Explore More
          </Link>
        </div>
      </section>
    </main>
  );
}
