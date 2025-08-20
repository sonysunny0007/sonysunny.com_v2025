import Link from "next/link";

export default function Store() {
  const products = [
    {
      id: 1,
      name: "Smart Sensor Kit",
      description:
        "Includes temperature, humidity, and motion sensors for IoT projects.",
      price: "$49.99",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "STM32 Dev Board",
      description:
        "High-performance STM32F407 development board with USB support.",
      price: "$29.99",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Raspberry Pi 4 Kit",
      description:
        "Complete kit with 4GB RAM, power supply, and case for embedded Linux.",
      price: "$89.99",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-black text-white" id="store">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Explore <span className="text-gray-400">App Store</span> with <br />
          Electronics store for you
        </h2>

        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#111] shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {product.description}
                </p>
                <p className="font-bold text-indigo-400 mb-4">{product.price}</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-10">
        <Link href="/blog">
          <button className="px-6 py-3 bg-lime-400 text-black rounded-full font-semibold hover:bg-lime-300 transition">
            Explore More
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}
