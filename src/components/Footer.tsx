import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">sonysunny.com</h2>
          <p className="mt-4 text-gray-400">
            Connecting Code, Circuits, and the Cloud.
          </p>
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">PAGES</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/projects">Project</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact me</a></li>
          </ul>
        </div>

        {/* Template */}
        <div>
          <h3 className="font-semibold mb-4">For you</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Store</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Licenses</a></li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div>
          <h3 className="font-semibold mb-4">EMAIL</h3>
          <form className="bg-neutral-900 p-4 rounded-xl space-y-3">
            <input
              type="email"
              placeholder="hello@sonysunny.com"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Send me →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © All rights reserved by <span className="font-semibold">sonysunny.com</span>. Powered by <span className="font-semibold">Next.js</span>.
      </div>
    </footer>
  );
}
