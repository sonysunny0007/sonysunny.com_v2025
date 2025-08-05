const projects = [
  { title: "Smart Water Meter", description: "IoT device to monitor water usage in real time." },
  { title: "SCADA Automation", description: "PLC-based solution for industrial control." },
  { title: "AI Energy Monitor", description: "ML-powered embedded device to reduce power waste." },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
