'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'landing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', projectType: 'landing', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Touati Seif
          </Link>
          <Link href="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Let&apos;s Discuss Your Project
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a specific project in mind? Let&apos;s talk about your requirements and how I can help bring your vision to life.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="landing">Landing Page ($50)</option>
                <option value="dashboard">Admin Dashboard ($30)</option>
                <option value="custom">Custom Project</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Details *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>

          {/* Alternative Contact Methods */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-center">Other Ways to Connect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-300">touati.seif@example.com</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-semibold mb-2">LinkedIn</h4>
                <p className="text-gray-300">linkedin.com/in/touatiseif</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🐙</div>
                <h4 className="font-semibold mb-2">GitHub</h4>
                <p className="text-gray-300">github.com/touatiseif</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
