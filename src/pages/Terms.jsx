// src/Pages/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
        <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-6">
          <span>⏱️</span>
          <span>CountdownPro</span>
        </Link>

        <div className="space-y-6">
          {/* Acceptance */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By using TimerPro, you agree to these Terms & Conditions. If you do not agree, please do not use our website.
            </p>
          </div>

          {/* Use of Service */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">2. Use of Service</h2>
            <ul className="text-gray-300 space-y-2 list-disc pl-6">
              <li>You must be at least 13 years old to use this service</li>
              <li>You agree not to misuse or abuse the service</li>
              <li>All timers and data are stored locally in your browser</li>
              <li>We reserve the right to modify or discontinue the service</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">3. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              TimerPro is provided "as is" without any warranties. We are not responsible for any data loss 
              or damages arising from the use of our service. All data is stored locally on your device.
            </p>
          </div>

          {/* Prohibited Activities */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">4. Prohibited Activities</h2>
            <ul className="text-gray-300 space-y-2 list-disc pl-6">
              <li>Clicking your own ads (fraudulent activity)</li>
              <li>Using bots or automated scripts</li>
              <li>Attempting to hack or disrupt the service</li>
              <li>Misusing the timer functionality</li>
            </ul>
          </div>

          {/* Changes */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">5. Changes to Terms</h2>
            <p className="text-gray-300">
              We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">6. Contact</h2>
            <p className="text-gray-300">
              For questions about these terms, contact us at:
            </p>
            <p className="text-purple-400 mt-2">📧 legal@timerpro.app</p>
          </div>

          <div className="text-center text-gray-500 text-sm pt-4">
            © {new Date().getFullYear()} TimerPro. All rights reserved.
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Terms;