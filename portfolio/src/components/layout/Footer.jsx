import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-xl font-extrabold tracking-wide">
          <span className="text-white">SHOAIB</span>
          <span className="text-red-600">.</span>
        </div>

        {/* Contact & Socials */}
        <div className="flex items-center gap-6 text-lg">
          <a
            href="https://x.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shoaib. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
