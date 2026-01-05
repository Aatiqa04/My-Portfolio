'use client';

import { useEffect, useRef, useState } from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiDocker,
  SiFigma,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
  { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
  { name: 'Express.js', icon: SiExpress, level: 85, color: '#ffffff' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, level: 75, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
  { name: 'Firebase', icon: SiFirebase, level: 80, color: '#FFCA28' },
  { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
  { name: 'Python', icon: SiPython, level: 70, color: '#3776AB' },
  { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 70, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, level: 60, color: '#2496ED' },
  { name: 'Figma', icon: SiFigma, level: 65, color: '#F24E1E' },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] ${
                  isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="p-3 rounded-lg bg-gray-800/50 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    <Icon size={32} />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center font-semibold text-white mb-3">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 50 + 300}ms`,
                    }}
                  />
                </div>

                {/* Percentage */}
                <p className="text-center text-sm text-gray-500 mt-2">
                  {skill.level}%
                </p>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
