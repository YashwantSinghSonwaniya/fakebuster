import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FakeWhatsApp: React.FC = () => {
  const [messageText, setMessageText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isLegitimate: boolean; confidence: number; indicators: string[] }>(null);

  const analyzeMessage = () => {
    if (!messageText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const confidence = Math.floor(Math.random() * 30) + 70;
      const isLegitimate = Math.random() > 0.35;
      
      setResult({
        isLegitimate,
        confidence,
        indicators: isLegitimate 
          ? ['No forward chain detected', 'Language patterns normal', 'No urgency manipulation']
          : ['Multiple forwards detected', 'Emotional manipulation present', 'Unverified claims found', 'Scam patterns identified']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8" data-aos="fade-right">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">WhatsApp Message Analysis</h1>
              <p className="text-gray-300">Verify forwarded messages and detect potential scams</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6" data-aos="fade-up">
          <div className="mb-6">
            <label htmlFor="message-text" className="block text-sm font-medium text-gray-300 mb-2">
              Paste WhatsApp message to analyze
            </label>
            <textarea
              id="message-text"
              rows={6}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              placeholder="Paste the WhatsApp message you want to verify for authenticity..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
          </div>
          
          <button
            onClick={analyzeMessage}
            disabled={!messageText.trim() || isAnalyzing}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Verify Message</span>
              </>
            )}
          </button>
          
          {result && (
            <div className="mt-6 p-4 rounded-lg border" data-aos="fade-up">
              <div className={`flex items-center space-x-2 mb-3 ${result.isLegitimate ? 'text-green-400' : 'text-red-400'}`}>
                {result.isLegitimate ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <AlertTriangle className="h-6 w-6" />
                )}
                <h3 className="text-lg font-semibold">
                  {result.isLegitimate ? 'Message Appears Legitimate' : 'Potentially Fake Message'}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-3">
                Confidence: <span className="font-semibold">{result.confidence}%</span>
              </p>
              
              <div>
                <h4 className="text-white font-medium mb-2">Analysis Indicators:</h4>
                <ul className="space-y-1">
                  {result.indicators.map((indicator, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${result.isLegitimate ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span>{indicator}</span>
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

export default FakeWhatsApp;