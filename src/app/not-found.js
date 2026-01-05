'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-900 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-bold gradient-text-animated">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4">Or check out these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['About', 'Projects', 'Contact'].map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase()}`}
                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
}
