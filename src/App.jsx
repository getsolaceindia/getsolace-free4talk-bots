import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MusicBot from './pages/MusicBot';
import MusicBotInstall from './pages/MusicBotInstall';
import Footer from './components/Footer';
import Chatbot from './pages/Chatbot';
import ChatbotInstall from './pages/ChatbotInstall';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bots/music-bot" element={<MusicBot />} />  {/* ✅ This route must exist */}
          <Route path="/bots/music-bot/install" element={<MusicBotInstall />} />
          <Route path="/bots/chatbot" element={<Chatbot />} />
          <Route path="/bots/chatbot/install" element={<ChatbotInstall />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
