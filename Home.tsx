import React from 'react';
import { Shield, Newspaper, Mail, MessageCircle, Share2, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import DetectionCard from '../components/DetectionCard';

const Home: React.FC = () => {
  const scrollToCards = () => {
    document.getElementById('detection-cards')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div
            data-aos="fade-up"
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">AI-Powered Detection</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Protect Yourself from
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Fake Content</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Advanced AI technology to detect and analyze fake news, phishing emails, 
              fraudulent WhatsApp messages, and deceptive social media posts.
            </p>
            
            <button
              onClick={scrollToCards}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Start Detection</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">99.7%</div>
                  <div className="text-gray-300 text-sm">Detection Accuracy</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400">50M+</div>
                  <div className="text-gray-300 text-sm">Content Analyzed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-300 text-sm">Real-time Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Detection Cards Section */}
      <section id="detection-cards" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Detection Tool
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the type of content you want to analyze and let our AI do the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DetectionCard
              title="Fake News Detection"
              description="Analyze news articles, headlines, and stories to identify misinformation and verify credibility using advanced NLP algorithms."
              icon={Newspaper}
              link="/fake-news"
              gradient="from-red-600 to-pink-600"
              delay={0}
            />
            
            <DetectionCard
              title="Email Phishing Detection"
              description="Scan emails for phishing attempts, malicious links, and suspicious attachments to protect your inbox."
              icon={Mail}
              link="/fake-emails"
              gradient="from-blue-600 to-indigo-600"
              delay={100}
            />
            
            <DetectionCard
              title="WhatsApp Message Analysis"
              description="Verify WhatsApp forwards, check for fake messages, and identify potential scams in your conversations."
              icon={MessageCircle}
              link="/fake-whatsapp"
              gradient="from-green-600 to-emerald-600"
              delay={200}
            />
            
            <DetectionCard
              title="Social Media Posts"
              description="Detect fake profiles, manipulated images, and misleading social media content across all platforms."
              icon={Share2}
              link="/fake-social-media"
              gradient="from-purple-600 to-violet-600"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose FakeBuster?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced AI Protection</h3>
              <p className="text-gray-400">State-of-the-art machine learning models trained on millions of data points</p>
            </div>
            
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Analysis</h3>
              <p className="text-gray-400">Instant results with comprehensive threat assessment and detailed reports</p>
            </div>
            
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">99.7% Accuracy</h3>
              <p className="text-gray-400">Industry-leading accuracy rates with continuous model improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">FakeBuster</span>
          </div>
          <p className="text-gray-400 mb-4">Protecting you from fake content with AI-powered detection</p>
          <p className="text-gray-500 text-sm">© 2025 FakeBuster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;