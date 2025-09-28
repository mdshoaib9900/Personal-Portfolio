import {  useNavigate } from "react-router-dom";
function Hero() {
    const navigate=useNavigate()
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 text-center relative">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#ffffff60_1px,transparent_1px)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden border-4 border-black dark:border-white shadow-[8px_0_20px_rgba(0,0,0,0.7)] dark:shadow-[8px_0_20px_rgba(255,255,255,0.5)]">
          <img
            src="/images/sanji.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white">
          HEYY 👋, I&apos;m <span className="text-black dark:text-white">SHOAIB</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Full-Stack Architect 🏗 | Java Developer &amp; AI Strategist 🤖☁️
        </p>

        {/* Button */}
        <button onClick={navigate("/project")}
        className="mt-6 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          MY PROJECTS
        </button>
      </div>
    </section>
  );
}

export default Hero;
