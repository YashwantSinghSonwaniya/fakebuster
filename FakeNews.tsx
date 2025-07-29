import React, { useState } from 'react';
import { ArrowLeft, Newspaper, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FakeNews: React.FC = () => {
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isReal: boolean; confidence: number; reasons: string[] }>(null);

  const analyzeNews = () => {
    if (!newsText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const confidence = Math.floor(Math.random() * 30) + 70;
      const isReal = Math.random() > 0.4;
      
      setResult({
        isReal,
        confidence,
        reasons: isReal 
          ? ['Source verification passed', 'Writing style analysis normal', 'Fact-checking database match']
          : ['Suspicious source patterns', 'Emotional manipulation detected', 'No corroborating sources found']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8" data-aos="fade-right">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Newspaper className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Fake News Detection</h1>
              <p className="text-gray-300">Analyze news articles and headlines for authenticity</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6" data-aos="fade-up">
          <div className="mb-6">
            <label htmlFor="news-text" className="block text-sm font-medium text-gray-300 mb-2">
              Paste news article or headline to analyze
            </label>
            <textarea
              id="news-text"
              rows={8}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              placeholder="Enter the news article text, headline, or URL you want to verify..."
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
            />
          </div>
          
          <button
            onClick={analyzeNews}
            disabled={!newsText.trim() || isAnalyzing}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Analyze News</span>
              </>
            )}
          </button>
          
          {result && (
            <div className="mt-6 p-4 rounded-lg border" data-aos="fade-up">
              <div className={`flex items-center space-x-2 mb-3 ${result.isReal ? 'text-green-400' : 'text-red-400'}`}>
                {result.isReal ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <AlertTriangle className="h-6 w-6" />
                )}
                <h3 className="text-lg font-semibold">
                  {result.isReal ? 'Likely Authentic' : 'Potentially Fake'}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-3">
                Confidence: <span className="font-semibold">{result.confidence}%</span>
              </p>
              
              <div>
                <h4 className="text-white font-medium mb-2">Analysis Details:</h4>
                <ul className="space-y-1">
                  {result.reasons.map((reason, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      <span>{reason}</span>
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

export default FakeNews;