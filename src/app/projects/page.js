'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiPython,
  SiFlutter,
  SiJupyter,
  SiHtml5,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';

export default function Projects() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'VoxPersona',
      description:
        'AI based audiobook generator with emotion and character-specific voices.',
      link: 'https://github.com/Aatiqa04/VoxPersona',
      tech: [SiReact, SiNodedotjs, SiFirebase, SiNextdotjs],
    },
    {
      title: 'AEMS - Attendance & Employee Management System',
      description:
        'Built with Python and HTML, AEMS includes login, admin dashboard, and employee data handling.',
      link: 'https://github.com/Aatiqa04/AEMS',
      tech: [SiPython, SiHtml5],
    },
    {
      title: 'Car-Snap',
      description:
        'Machine learning project that classifies damaged car parts using Jupyter notebooks.',
      link: 'https://github.com/Aatiqa04/Car-Snap',
      tech: [SiPython, SiJupyter],
    },
    {
      title: 'Food-App',
      description:
        'Flutter app with catalog browsing, filtering, and favorites—ideal for food or recipe platforms.',
      link: 'https://github.com/Aatiqa04/Food-App',
      tech: [SiFlutter],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-16 px-4 relative">
      <h2 className="text-4xl text-purple-400 font-extrabold text-center mb-10">
        My Projects
      </h2>

      {/* Arrow Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-purple-500 p-2 rounded-full shadow-lg hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)] transition z-10"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-purple-500 p-2 rounded-full shadow-lg hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)] transition z-10"
      >
        <ChevronRight size={28} />
      </button>

      {/* Project Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm bg-black border border-purple-700 p-5 rounded-xl shadow-lg hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.7)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-300">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-3">{project.description}</p>

            {/* Tech Icons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((TechIcon, i) => (
                <TechIcon key={i} className="text-purple-500 text-xl" />
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline mt-4 inline-block"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
