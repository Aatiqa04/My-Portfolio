'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import yourImage from '@/images/aatiqa.jpg';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Send email using Formspree (client-side)
      const response = await fetch('https://formspree.io/f/xzdzooqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error) {
      console.error('Form Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MdEmail,
      label: 'Email',
      value: 'hussainaatiqa99@gmail.com',
      href: 'mailto:hussainaatiqa99@gmail.com',
    },
    {
      icon: MdPhone,
      label: 'Phone',
      value: '+92-333-1438458',
      href: 'tel:+923331438458',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aatiqa-hussain-275930278',
      color: 'hover:bg-[#0077b5]',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Aatiqa04',
      color: 'hover:bg-gray-700',
    },
    {
      icon: MdEmail,
      label: 'Email',
      href: 'mailto:hussainaatiqa99@gmail.com',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Contact Me</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <ScrollReveal animation="fade-in-left">
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full animate-spin-slow opacity-50 blur-sm" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-900">
                    <Image
                      src={yourImage}
                      alt="Aatiqa Hussain"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Aatiqa Hussain</h2>
                <p className="text-purple-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-400 text-sm">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${color}`}
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Contact Form */}
          <ScrollReveal animation="fade-in-right">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Map/Location placeholder */}
        <ScrollReveal delay={200}>
          <div className="mt-16 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Based in Lahore, Pakistan</h3>
            <p className="text-gray-400 mb-6">
              Open to remote work and collaboration worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
                Remote Friendly
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                Flexible Hours
              </span>
              <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">
                Quick Response
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
