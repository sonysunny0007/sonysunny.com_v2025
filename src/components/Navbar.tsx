export default function Navbar() {
  return (
    <header className="bg-black shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="absolute left-4">
          <h1 className="text-xl font-bold text-white">sonysunny.com</h1>
        </div>

        {/* Center: Nav Links */}
        <nav className="mx-auto space-x-8">
          <a href="#about" className="text-white hover:text-blue-500 transition">About</a>
          <a href="#Projects" className="text-white hover:text-blue-500 transition">Services</a>
          <a href="#contact" className="text-white hover:text-blue-500 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
