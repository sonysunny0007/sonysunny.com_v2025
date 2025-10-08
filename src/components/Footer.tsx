import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white" role="contentinfo" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        
        {/* Logo & Social */}
        <section className="flex flex-col items-start">
          <Link href="/" className="block leading-none">
            <img
              src="/sony-logo-01.png"
              alt="Project"
              className="rounded-xl object-cover max-h-[120px] block "
            />
          </Link>

          <p className="mt-4 text-gray-400">
            Connecting Code, Circuits, and the Cloud.
          </p>

          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-lime-400 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-lime-400 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-lime-400 transition">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-lime-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Pages */}
        <section className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">PAGES</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-lime-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-lime-400 transition">About us</Link></li>
            <li><a href="/#projects" className="hover:text-lime-400 transition">Projects</a></li>
            <li><a href="/#blog" className="hover:text-lime-400 transition">Blog</a></li>
            <li><Link href="/start_project" className="hover:text-lime-400 transition">Contact me</Link></li>
          </ul>
        </section>

        {/* For You */}
        <section className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">For you</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/#store" className="hover:text-lime-400 transition">Store</a></li>
            <li><a href="/#services" className="hover:text-lime-400 transition">Services</a></li>
          </ul>
        </section>

        {/* Email Subscription */}
        <section className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">EMAIL</h3>
          <form
            className="bg-neutral-900 p-4 rounded-xl space-y-3 w-full"
            action="mailto:sonysunny028@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition"
            >
              Send me →
            </button>
          </form>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © All rights reserved by <span className="font-semibold">sonysunny.com</span>. Powered by <span className="font-semibold">Next.js</span>.
      </div>
    </footer>
  );
}
