"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/#blog" },
    { label: "Store", href: "/#store" },
    { label: "Contact", href: "/start_project" },
  ];

  return (
    <header className="bg-black shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="absolute left-4">
          <Link href="/" className="text-xl font-bold text-white">
            sonysunny.com
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="mx-auto space-x-8">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-500 transition"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-lime-400 transition ${
                  pathname === link.href ? "text-lime-400" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
