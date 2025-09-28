import React from "react";
import { FaDownload, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20  bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:20px_20px]">
    {/* <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:20px_20px]"></div> */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">ABOUT ME</h2>

        {/* About text */}
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          I'm a passionate{" "}
          <span className="text-red-500 font-semibold">Full Stack Developer</span>{" "}
          who thrives on solving complex problems and crafting innovative solutions. 
          With a strong focus on scalability and efficiency, I bring creativity and 
          technical prowess to every project I touch 🚀
        </p>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition"
        >
          <FaDownload /> Get Resume
        </a>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto mt-20">
        <h3 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <FaGraduationCap className="text-red-500" /> Education
        </h3>

        <div className="relative border-l-4 border-red-500 pl-6">
          {/* Degree */}
          <div className="mb-10">
            <div className="absolute -left-3.5 w-7 h-7 bg-red-500 rounded-full border-4 border-white"></div>
            <h4 className="text-xl font-semibold">Bachelor of Engineering in Computer Science</h4>
            <p className="text-gray-700">ATME College of Engineering</p>
            <span className="text-sm text-gray-500">2022 - 2026</span>
          </div>

          {/* PUC */}
          <div className="mb-10">
            <div className="absolute -left-3.5 w-7 h-7 bg-red-500 rounded-full border-4 border-white"></div>
            <h4 className="text-xl font-semibold">Pre-University Course (PUC)</h4>
            <p className="text-gray-700">St. Philomena Pu College </p>
            <span className="text-sm text-gray-500">2020 - 2022</span>
          </div>

          {/* School */}
          <div>
            <div className="absolute -left-3.5 w-7 h-7 bg-red-500 rounded-full border-4 border-white"></div>
            <h4 className="text-xl font-semibold">High School</h4>
            <p className="text-gray-700">St Mary School</p>
            <span className="text-sm text-gray-500">2019 - 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
