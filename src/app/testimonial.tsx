import Image from "next/image";

const testimonials = [
  {
    name: "Matthew Johnson",
    role: "Fashion Designer",
    image: "/avatar1.png", // put your image in public/ folder
    rating: 4.5,
    text: "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always.",
  },
  {
    name: "Matthew Johnson",
    role: "Fashion Designer",
    image: "/avatar2.png",
    rating: 4.5,
    text: "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always.",
  },
  {
    name: "Matthew Johnson",
    role: "Fashion Designer",
    image: "/avatar3.png",
    rating: 4.5,
    text: "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always.",
  },
  {
    name: "Matthew Johnson",
    role: "Fashion Designer",
    image: "/avatar4.png",
    rating: 4.5,
    text: "It has been an absolute pleasure working with Relume. The team went above and beyond to help us execute on our vision and always.",
  },
];

export default function Testimonials() {
  return (
    <>
    <section className="bg-black text-white py-20 px-6">
      <h1
          className="text-4xl md:text-6xl font-semibold leading-tight mb-10"
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
    <section>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111111] rounded-2xl p-8 shadow-md flex flex-col justify-between"
            >
              {/* Rating */}
              <div className="flex mb-4 text-yellow-400">
                {Array.from({ length: 5 }, (_, idx) => (
                  <span key={idx}>
                    {idx < Math.floor(t.rating) ? "★" : "☆"}
                  </span>
                ))}
                {t.rating % 1 !== 0 && <span>½</span>}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  
    </>
  );
}
