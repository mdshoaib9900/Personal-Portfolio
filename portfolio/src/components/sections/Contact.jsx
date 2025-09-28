import React from 'react';

// SVG Icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.417 7.863 10.957.575.107.786-.25.786-.555 0-.274-.01-1.003-.016-1.968-3.2.697-3.875-1.544-3.875-1.544-.522-1.326-1.274-1.679-1.274-1.679-1.042-.713.08-.699.08-.699 1.152.082 1.758 1.183 1.758 1.183 1.024 1.754 2.686 1.247 3.342.954.104-.744.402-1.248.732-1.534-2.554-.291-5.237-1.277-5.237-5.686 0-1.256.448-2.28 1.183-3.082-.119-.292-.512-1.468.112-3.062 0 0 .964-.308 3.156 1.178a10.96 10.96 0 0 1 2.874-.387c.976.004 1.958.132 2.875.387 2.19-1.486 3.152-1.178 3.152-1.178.625 1.594.232 2.77.114 3.062.737.802 1.183 1.826 1.183 3.082 0 4.419-2.688 5.392-5.252 5.674.414.357.784 1.064.784 2.144 0 1.55-.014 2.797-.014 3.177 0 .308.208.666.792.552C20.708 21.416 24 17.09 24 12c0-6.352-5.148-11.5-12-11.5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5C3.33 3.5 2 4.82 2 6.48c0 1.66 1.33 2.98 2.98 2.98s2.98-1.32 2.98-2.98c0-1.66-1.33-2.98-2.98-2.98zM2.4 8.91h5.16v12.59H2.4V8.91zm7.37 0h4.95v1.72h.07c.69-1.3 2.38-2.67 4.89-2.67 5.23 0 6.19 3.44 6.19 7.91v8.64h-5.16v-7.65c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.04v7.79H9.77V8.91z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v8" />
  </svg>
);

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-10 transition-colors duration-500">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-black dark:text-white">
        Contact <span className="text-red-500">Me</span>
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-10 max-w-xl transition-colors duration-500">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-white dark:bg-gray-800 text-black dark:text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4 transition-colors duration-500">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
        ></textarea>
        <button
          type="submit"
          className="bg-black dark:bg-white dark:text-black text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-10 flex gap-6">
        <a href="https://github.com/mdshoaib9900" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
          <GitHubIcon />
        </a>
        <a href="https://linkedin.com/in/mohammed-shoaib-396ba5265/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
          <LinkedInIcon />
        </a>
        <a href="mailto:mdshoaib6360@gmail.com" className="hover:scale-110 transition-transform duration-200">
          <EmailIcon />
        </a>
      </div>
    </section>
  );
}
