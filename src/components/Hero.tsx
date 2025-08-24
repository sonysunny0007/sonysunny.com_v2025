export default function Hero() {
    return(
    <>

    <section className="min-h-screen bg-black flex flex-col justify-center items-center px-6 text-center">
      {/* Heading with horizontal fade gradient */}
      <h1
        className="text-6xl md:text-7xl font-extrabold max-w-5xl mb-6"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Unlimited design at 
        the next level.
      </h1>

      {/* Paragraph */}
      <p className="max-w-3xl text-gray-300 text-lg mb-12 leading-relaxed">
        Building Smarter Systems by Connecting Code, Circuits, and the Cloud — One Layer at a Time.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 justify-center">
        <button className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition">
          Start a project
        </button>
        <a
          href="#portfolio"
          className="text-white font-medium flex items-center gap-1 hover:underline"
        >
          View portfolio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>

    <section className="bg-black flex justify-center items-center h-64">
      <h1
        className="text-4xl md:text-6xl font-semibold text-center"
        style={{
          background: 'linear-gradient(90deg, #007aff, #af52de, #ff3b30, #ff9500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Top–notch designs, delivered at your doorstep
      </h1>
    </section>
    </>
  );
}
