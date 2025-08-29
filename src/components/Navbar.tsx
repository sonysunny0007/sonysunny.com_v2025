import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="absolute left-4">
          <Link href="/" className="text-xl font-bold text-white">sonysunny.com</Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="mx-auto space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <a href="#services" className="text-white hover:text-blue-500 transition">Services</a>
          <a href="#blog" className="text-white hover:text-blue-500 transition">Blog</a>
          <a href="#store" className="text-white hover:text-blue-500 transition">Store</a>
          <a href="#contact" className="text-white hover:text-blue-500 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
