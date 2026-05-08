'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

// Replace these with your actual featured projects.
// For each project: drop a screenshot at public/projects/<filename>.png
// and update the `image` field. Leave `image: null` to show a gradient fallback.
const featuredProjects = [
  {
    title: 'GitHub Wrapped',
    description:
      'A Spotify Wrapped–style dashboard for GitHub. Visualizes a year of coding activity with contribution heatmaps, language breakdowns, streak tracking, and achievement badges.',
    image: '/projects/github-wrapped.png',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'GitHub API'],
    demo: 'https://git-hub-wrapper-kappa.vercel.app',
    repo: 'https://github.com/Aatiqa04/GitHub-Wrapper',
    accent: 'from-purple-500 to-blue-500',
  },
  {
    title: 'CareerPulse',
    description:
      'AI-powered resume reviewer and job matcher. Analyzes resumes against job descriptions to score skill alignment, ATS compatibility, and overall match — helping candidates tailor applications.',
    image: null,
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'AI'],
    demo: null,
    repo: 'https://github.com/Aatiqa04/CareerPulse-AI-Resume-Reviewer-Job-Matcher',
    accent: 'from-pink-500 to-purple-500',
  },
  {
    title: 'FinAI — Smart Expense Tracker',
    description:
      'Full-stack expense tracker with AI insights. Tracks spending patterns, predicts overspending, offers saving suggestions, and generates interactive dashboards and monthly financial health reports.',
    image: null,
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'AI'],
    demo: null,
    repo: 'https://github.com/Aatiqa04/FinAI-Smart-Expense-Tracker',
    accent: 'from-blue-500 to-cyan-500',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mb-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Selected Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hand-picked projects that showcase what I can build end-to-end.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <article className="group h-full bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col">
              {/* Image / fallback */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.accent} flex items-center justify-center`}
                  >
                    <span className="text-5xl font-bold text-white/90">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors ml-auto"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Divider before GitHub repos */}
      <div className="relative mt-20 mb-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-black px-4 text-sm text-gray-500">
            All Repositories
          </span>
        </div>
      </div>
    </section>
  );
}
