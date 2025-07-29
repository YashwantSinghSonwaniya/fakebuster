import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import FakeNews from './pages/FakeNews';
import FakeEmails from './pages/FakeEmails';
import FakeWhatsApp from './pages/FakeWhatsApp';
import FakeSocialMedia from './pages/FakeSocialMedia';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fake-news" element={<FakeNews />} />
          <Route path="/fake-emails" element={<FakeEmails />} />
          <Route path="/fake-whatsapp" element={<FakeWhatsApp />} />
          <Route path="/fake-social-media" element={<FakeSocialMedia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;