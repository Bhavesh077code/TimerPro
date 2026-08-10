// src/Pages/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    < div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]" >
   <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-400 mt-2">We'd love to hear from you! 👋</p>
        </div>

        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-8">
          <span>⬅️</span>
          <span>Back to Home</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">📬 Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">forgetemail057@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐦</span>
                  <div>
                    <p className="text-gray-400 text-sm">Twitter</p>
                    <p className="text-white">@TimerProApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white">github.com/timerpro</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Worldwide 🌍</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold">⏰ Response Time</h3>
              <p className="text-gray-400 text-sm mt-2">
                We typically respond within 24-48 hours. For urgent issues, please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">📝 Send Message</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white font-bold text-lg">Message Sent!</h3>
                <p className="text-gray-400 mt-2">We'll get back to you soon. 🚀</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300"
                >
                  📤 Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-purple-400 transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
          </div>
          <p className="mt-4 text-gray-600">
            © {new Date().getFullYear()} TimerPro. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;