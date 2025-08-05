export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sony Sunny. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="mailto:youremail@example.com" className="hover:text-blue-600">Email</a>
          <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com/yourprofile" className="hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
