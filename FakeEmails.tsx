import React, { useState } from 'react';
import { ArrowLeft, Mail, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FakeEmails: React.FC = () => {
  const [emailText, setEmailText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isSafe: boolean; confidence: number; threats: string[] }>(null);

  const analyzeEmail = () => {
    if (!emailText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const confidence = Math.floor(Math.random() * 25) + 75;
      const isSafe = Math.random() > 0.3;
      
      setResult({
        isSafe,
        confidence,
        threats: isSafe 
          ? ['No suspicious links detected', 'Sender verification passed', 'Content analysis normal']
          : ['Suspicious links detected', 'Sender spoofing indicators', 'Phishing patterns found', 'Urgency manipulation tactics']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8" data-aos="fade-right">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Email Phishing Detection</h1>
              <p className="text-gray-300">Scan emails for phishing attempts and malicious content</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6" data-aos="fade-up">
          <div className="mb-6">
            <label htmlFor="email-text" className="block text-sm font-medium text-gray-300 mb-2">
              Paste email content to analyze
            </label>
            <textarea
              id="email-text"
              rows={10}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Paste the email content including headers, subject, sender information, and body text..."
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
            />
          </div>
          
          <button
            onClick={analyzeEmail}
            disabled={!emailText.trim() || isAnalyzing}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Scanning...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Scan Email</span>
              </>
            )}
          </button>
          
          {result && (
            <div className="mt-6 p-4 rounded-lg border" data-aos="fade-up">
              <div className={`flex items-center space-x-2 mb-3 ${result.isSafe ? 'text-green-400' : 'text-red-400'}`}>
                {result.isSafe ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <AlertTriangle className="h-6 w-6" />
                )}
                <h3 className="text-lg font-semibold">
                  {result.isSafe ? 'Email Appears Safe' : 'Potential Phishing Detected'}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-3">
                Confidence: <span className="font-semibold">{result.confidence}%</span>
              </p>
              
              <div>
                <h4 className="text-white font-medium mb-2">Security Analysis:</h4>
                <ul className="space-y-1">
                  {result.threats.map((threat, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${result.isSafe ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span>{threat}</span>
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

export default FakeEmails;