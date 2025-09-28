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

export default function Card() {
  const tags = [
    'React.js',
    'Node.js',
    'TailwindCSS',
    'LLM',
    'Vector Databases',
    'LangChain',
    'OpenAI API',
    'Socket.io',
  ];

  return (
    <div className="bg-white border-4 border-black rounded-3xl p-4 sm:p-6 shadow-[8px_8px_0_0_#000] 
                    w-full max-w-xs sm:max-w-sm md:max-w-sm font-sans 
                    transition-transform duration-200 hover:scale-105">
      {/* Image Section */}
      <div className="relative rounded-xl overflow-hidden">
        {/* Background with Grid Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 20px 20px, 20px 20px',
            backgroundColor: '#1a202c',
          }}
        ></div>

        <div className="relative z-10 p-6 text-white min-h-[200px] flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Social Gauge
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-1">Powered by Dev Dominators</p>
          </div>

          <div className="flex justify-between items-end">
            <div className="bg-gradient-to-r from-cyan-400 to-green-500 text-white font-bold py-1 px-4 rounded-lg text-xs sm:text-sm">
              Level SuperMind'25
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4 sm:mt-6">
        <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight">SOCIAL GAUGE</h2>
        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          Social Gauge leverages AI, to revolutionize social media engagement with smart analytics and content optimization.
        </p>
      </div>

      {/* Tags Section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
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
        <button className="w-full sm:w-auto bg-black text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 cursor-pointer">
          <GitHubIcon />
          <span className="text-sm sm:text-base">GITHUB</span>
        </button>
        <button className="w-full sm:w-auto bg-black text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 cursor-pointer">
          <LiveIcon />
          <span className="text-sm sm:text-base">LIVE</span>
        </button>
      </div>
    </div>
  );
}
