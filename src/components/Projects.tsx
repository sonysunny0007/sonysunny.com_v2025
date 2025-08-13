export default function PrioritySection() {
  const steps = [
    {
      icon: "🔍", // Replace with your actual SVG/icon
      title: "Research",
      description:
        "Bring to the table win-win surv strategies to ensure proactive domination.",
    },
    {
      icon: "📐", // Replace with your actual SVG/icon
      title: "Wireframe",
      description:
        "Bring to the table win-win surv strategies to ensure proactive domination.",
    },
    {
      icon: "🎨", // Replace with your actual SVG/icon
      title: "Design",
      description:
        "Bring to the table win-win surv strategies to ensure proactive domination.",
    },
  ];

  return (
    <>
    <section className="bg-black flex flex-col justify-center items-center px-6 text-center pt-10 pb-10">
        <h1
            className="text-4xl md:text-6xl font-semibold leading-tight  mb-10 justify-center item-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,1) 40%,rgba(255,255,255,1) 60%, rgba(255,255,255,0.15) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Design that puts your <br /> growth on priority
          </h1>
    </section>
    <section className="bg-black text-white py-20 px-6">
        
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Title */}
          
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black text-lg">
                  {step.icon}
                </div>

                {/* Text */}
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
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/your-image.jpg"
            alt="Designer at work"
            className="rounded-3xl object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
    </>
  );
}