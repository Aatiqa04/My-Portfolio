'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart } from 'react-icons/fa';
import { Download } from 'lucide-react';
import AatiqaImage from '../../images/aatiqa.jpg';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const experiences = [
    {
      icon: FaBriefcase,
      title: 'Associate Software Engineer',
      description: 'Currently working as a Full Stack Developer, building scalable web applications and contributing to team projects.',
    },
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies like React, Node.js, and MongoDB.',
    },
    {
      icon: FaGraduationCap,
      title: 'BS Computer Science',
      description: 'Graduated from FAST National University (NUCES), Lahore with strong fundamentals.',
    },
    {
      icon: FaHeart,
      title: 'Passionate Learner',
      description: 'Always exploring new technologies and best practices to improve my craft.',
    },
  ];

  const timeline = [
    {
      year: 'Sep 2025 - Present',
      title: 'Associate Software Engineer (Full Stack)',
      description: 'Working on various web development projects using MERN stack, Next.js, and modern technologies. Building scalable applications and collaborating with cross-functional teams.',
      type: 'work',
      current: true,
    },
    {
      year: '2023',
      title: 'Started Professional Journey',
      description: 'Began building real-world applications and contributing to open-source projects.',
      type: 'work',
    },
    {
      year: '2025',
      title: 'Graduated from FAST NUCES',
      description: 'Completed Bachelor\'s degree in Computer Science from FAST National University, Lahore.',
      type: 'education',
    },
    {
      year: '2021',
      title: 'Started University',
      description: 'Enrolled in BS Computer Science program at FAST NUCES.',
      type: 'education',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <ScrollReveal animation="fade-in-left" className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 rounded-2xl blur-2xl opacity-30 animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 rounded-2xl opacity-50" />

                <div className="relative w-[300px] h-[350px] md:w-[350px] md:h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={AatiqaImage}
                    alt="Aatiqa Hussain"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-green-500/50 rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-green-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Currently Employed
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal animation="fade-in-right" className="lg:w-1/2">
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                  About Me
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">I&apos;m </span>
                  <span className="gradient-text">Aatiqa Hussain</span>
                </h1>

                <div className="mb-4 inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-medium">
                    Associate Software Engineer (Full Stack) @ Big Immersive
                  </p>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  I&apos;m a dedicated full-stack developer currently working as an <span className="text-purple-400">Associate Software Engineer</span>.
                  I specialize in creating modern, responsive UIs and scalable backend systems using tools like
                  <span className="text-purple-400"> React, Node.js, Next.js, Firebase, MongoDB</span> and more.
                </p>

                <p className="text-gray-400 leading-relaxed mb-6">
                  I hold a Bachelor&apos;s degree in Computer Science from
                  <span className="text-purple-400"> FAST National University (NUCES), Lahore</span>.
                  My education has built a strong foundation in software engineering principles, while my
                  professional experience sharpened my real-world development skills.
                </p>

                <p className="text-gray-400 leading-relaxed mb-8">
                  I enjoy turning complex problems into intuitive user experiences. My focus is on writing clean,
                  efficient, and maintainable code while continuously learning and adapting to new technologies.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get In Touch
                  </Link>
                  <Link href="/projects" className="btn-outline">
                    View Projects
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">What I Do</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I bring ideas to life through clean code and thoughtful design
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <ScrollReveal key={exp.title} delay={index * 100}>
                  <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                        <p className="text-gray-400">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">My Journey</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A brief timeline of my education and professional experience
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500" />

            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100}
                animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}
              >
                <div className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-900 z-10 ${item.current ? 'bg-green-500 animate-pulse' : 'bg-purple-500'}`} />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`p-6 bg-gray-900/50 border rounded-xl hover:border-purple-500/50 transition-all duration-300 ${item.current ? 'border-green-500/50' : 'border-gray-800'}`}>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`inline-block px-3 py-1 text-sm rounded-full ${item.current ? 'bg-green-500/10 text-green-400' : 'bg-purple-500/10 text-purple-400'}`}>
                          {item.year}
                        </span>
                        {item.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-black to-transparent">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Want to Know More?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Let&apos;s Talk
              </Link>
              <Link href="/projects" className="btn-outline">
                See My Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
