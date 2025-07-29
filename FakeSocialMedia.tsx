import React, { useState } from 'react';
import { ArrowLeft, Share2, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FakeSocialMedia: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isAuthentic: boolean; confidence: number; findings: string[] }>(null);

  const analyzePost = () => {
    if (!postText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const confidence = Math.floor(Math.random() * 25) + 75;
      const isAuthentic = Math.random() > 0.4;
      
      setResult({
        isAuthentic,
        confidence,
        findings: isAuthentic 
          ? ['Profile authenticity verified', 'Content originality confirmed', 'No manipulation detected']
          : ['Fake profile indicators found', 'Content manipulation detected', 'Bot-like behavior patterns', 'Misleading information present']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8" data-aos="fade-right">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
              <Share2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Social Media Post Detection</h1>
              <p className="text-gray-300">Analyze posts for fake content and manipulation</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6" data-aos="fade-up">
          <div className="mb-6">
            <label htmlFor="post-text" className="block text-sm font-medium text-gray-300 mb-2">
              Paste social media post content
            </label>
            <textarea
              id="post-text"
              rows={8}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              placeholder="Enter the social media post content, including text, captions, or descriptions you want to analyze..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          
          <button
            onClick={analyzePost}
            disabled={!postText.trim() || isAnalyzing}
            className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Analyze Post</span>
              </>
            )}
          </button>
          
          {result && (
            <div className="mt-6 p-4 rounded-lg border" data-aos="fade-up">
              <div className={`flex items-center space-x-2 mb-3 ${result.isAuthentic ? 'text-green-400' : 'text-red-400'}`}>
                {result.isAuthentic ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <AlertTriangle className="h-6 w-6" />
                )}
                <h3 className="text-lg font-semibold">
                  {result.isAuthentic ? 'Content Appears Authentic' : 'Suspicious Content Detected'}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-3">
                Confidence: <span className="font-semibold">{result.confidence}%</span>
              </p>
              
              <div>
                <h4 className="text-white font-medium mb-2">Detection Results:</h4>
                <ul className="space-y-1">
                  {result.findings.map((finding, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${result.isAuthentic ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FakeSocialMedia;