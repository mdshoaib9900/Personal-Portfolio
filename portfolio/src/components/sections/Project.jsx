import React from 'react'
import Card from "../common/Card"
import { projects } from '../../data/ProjectData';

function Project() {
   return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="grid gap-6 w-full max-w-7xl
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3">
        {projects.map((proj) => (
          <Card key={proj.id} project={proj} /> // ✅ pass project prop
        ))}
      </div>
    </div>
  );
}

export default Project;
