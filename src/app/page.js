'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ChevronDown } from 'lucide-react';
import AatiqaImage from '../images/aatiqa.jpg';
import TypeWriter from '@/components/TypeWriter';
import Skills from '@/components/Skills';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const roles = [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'UI/UX Enthusiast',
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Aatiqa04', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aatiqa-hussain-275930278', label: 'LinkedIn' },
    { icon: MdEmail, href: 'mailto:hussainaatiqa99@gmail.com', label: 'Email' },
  ];

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-12">
          {/* Left Side - Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
            </div>

            <h2 className="text-lg md:text-xl text-gray-400 animate-fade-in delay-100">
              Hello, I&apos;m
            </h2>

            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in delay-200">
              Aatiqa Hussain
            </h1>

            <h3 className="text-xl md:text-2xl min-h-[2em] animate-fade-in delay-300">
              <span className="text-gray-300">And I&apos;m a </span>
              <TypeWriter words={roles} typingSpeed={80} deletingSpeed={40} delayBetweenWords={2000} />
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-lg animate-fade-in delay-400">
              I&apos;m a passionate MERN Stack Developer skilled in building full-stack web applications
              using MongoDB, Express.js, React, and Node.js. I love turning ideas into clean,
              scalable, and responsive interfaces with a focus on performance and user experience.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2 animate-fade-in delay-500">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 animate-fade-in delay-600">
              <Link href="/projects" className="btn-primary flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline flex items-center gap-2">
                <MdEmail size={18} />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in delay-300">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-500/30 animate-spin-slow" />

              {/* Gradient Border Container */}
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full p-[4px] gradient-bg-animated animate-float">
                <div className="rounded-full overflow-hidden w-full h-full bg-black">
                  <Image
                    src={AatiqaImage}
                    alt="Aatiqa Hussain"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-subtle">
                <span className="text-2xl font-bold text-white">2+</span>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 flex items-end justify-center pb-1">
                <span className="text-xs text-white/80">Years Exp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToSkills}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer animate-bounce"
          aria-label="Scroll to skills"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gradient-to-b from-black via-gray-900 to-black">
        <Skills />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Completed' },
              { number: '15+', label: 'Technologies' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Let&apos;s Work Together</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m currently available for freelance projects and full-time opportunities.
              If you have a project in mind or just want to chat, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link href="/projects" className="btn-outline">
                View Projects
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
