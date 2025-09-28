import React from 'react'
import ProjectCard from "../common/Card"
function Project() {
   return (
<div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
  <div className="grid gap-6 w-full max-w-7xl
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3">
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </div>
</div>

  );
}

export default Project