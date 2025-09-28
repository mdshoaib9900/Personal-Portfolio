import React from 'react';
// SVG for the GitHub Icon
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LiveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Card({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-white rounded-3xl p-4 sm:p-6 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] w-full max-w-xs sm:max-w-sm md:max-w-sm font-sans transition-transform duration-200 hover:scale-105">
      
      {/* Image Section */}
      {project.image && (
        <div className="relative rounded-xl overflow-hidden h-48 sm:h-56 mb-4">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-xl border-2 border-black dark:border-white"
          />
        </div>
      )}

      {/* Name & Level */}
      <div className="relative z-10 flex justify-between items-center mb-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
            {project.name}
          </span>
        </h1>
        <div className="bg-gradient-to-r from-cyan-400 to-green-500 text-white font-bold py-1 px-4 rounded-lg text-xs sm:text-sm">
          {project.level}
        </div>
      </div>

      {/* Description */}
      <div className="mt-2">
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-red-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-black dark:bg-white dark:text-black text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
          <GitHubIcon />
          <span className="text-sm sm:text-base">GITHUB</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-black dark:bg-white dark:text-black text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
          <LiveIcon />
          <span className="text-sm sm:text-base">LIVE</span>
        </a>
      </div>
    </div>
  );
}
