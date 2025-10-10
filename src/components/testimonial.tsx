import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Joel Joseph",
    role: "Experienced Software Engineer",
    image: "/joel.jpeg", // put your image in public/ folder
    rating: 4.5,
    text: "Collaborating with Sony Sunny has been an absolute pleasure. Their professionalism, creativity, and technical insight make every project seamless and impactful.",
  },
  {
    name: "Jenu James",
    role: "Embedded Software Developer",
    image: "/jenu.jpeg",
    rating: 4.95,
    text: "Working with Sony Sunny has been an exceptional experience. Their deep understanding of technology and attention to detail made collaboration on complex firmware projects smooth and highly productive.",
  },
  {
    name: "Oleg Serbinov",
    role: "Lead Hardware Design Engineer",
    image: "/oleg.jpeg",
    rating: 4.75,
    text: "Partnering with SonySunny has truly elevated our hardware projects. Their expertise in hardware design and commitment to precise, innovative solutions made every project efficient and rewarding.",
  },
  {
    name: "Clara Mike",
    role: "Fashion Designer",
    image: "/fashion_designer.png",
    rating: 5,
    text: "Working with Sony Sunny has been a wonderful experience. They brought my vision to life with creativity, attention to detail, and a seamless website design that truly represents my brand.",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="bg-black flex flex-col justify-center items-center px-6 text-center pt-10 pb-10">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-semibold leading-tight mb-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My customers think <br />
          about SonySunny
        </h1>
      </section>

      <section className="bg-black text-white justify-center items-center flex flex-col py-20 px-6">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111111] rounded-2xl p-8 shadow-md flex flex-col justify-between"
            >
              {/* Rating */}
              <div className="flex mb-4 text-yellow-400 relative">
                {Array.from({ length: 5 }, (_, idx) => {
                  const fullStars = Math.floor(t.rating);
                  const hasHalf = t.rating % 1 !== 0;

                  if (idx < fullStars) {
                    return (
                      <Star
                        key={idx}
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    );
                  } else if (idx === fullStars && hasHalf) {
                    return (
                      <div key={idx} className="relative w-5 h-5">
                        <Star
                          className="absolute top-0 left-0"
                          stroke="currentColor"
                        />
                        <Star
                          className="absolute top-0 left-0"
                          fill="currentColor"
                          stroke="currentColor"
                          style={{ clipPath: "inset(0 50% 0 0)" }} // left half filled
                        />
                      </div>
                    );
                  } else {
                    return <Star key={idx} />;
                  }
                })}
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
