'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Aatiqa04', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aatiqa-hussain-275930278', label: 'LinkedIn' },
    { icon: MdEmail, href: 'mailto:hussainaatiqa99@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-transparent pt-16 pb-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Aatiqa Hussain</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-purple-400 group-hover:w-4 transition-all duration-300" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <MdEmail className="text-purple-400" />
                hussainaatiqa99@gmail.com
              </p>
              <p>Lahore, Pakistan</p>
              <p className="text-sm">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            &copy; {currentYear} Aatiqa Hussain. Made with
            <FaHeart className="text-purple-500 animate-pulse" size={14} />
            All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <span className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-purple-500 flex items-center justify-center group-hover:bg-purple-500/10 transition-all duration-300">
              <FaArrowUp size={12} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
