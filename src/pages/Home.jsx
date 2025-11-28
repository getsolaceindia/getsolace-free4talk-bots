import { motion } from 'framer-motion';
import { Coffee, Sparkles, Download, Zap, Users, Star, Rocket } from 'lucide-react';
import BotCard from '../components/BotCard';
import { bots } from '../data/bots';
import { Link } from 'react-router-dom';

export default function Home() {
  const availableBots = bots.filter(b => b.status === 'Available');
  const comingSoonBots = bots.filter(b => b.status === 'Coming Soon');
  
  // Calculate real stats from bots data
  const totalDownloads = bots.reduce((sum, bot) => sum + (bot.downloads || 0), 0);
  const averageRating = (bots.reduce((sum, bot) => sum + (bot.rating || 0), 0) / bots.filter(b => b.rating > 0).length).toFixed(1);
  const availableBotsCount = availableBots.length;
  
  // Function to scroll to bots section
  const scrollToBots = () => {
    const element = document.getElementById('bots');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {/* News Banner for New Chatbot Version */}
          <motion.div
            className="news-banner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="news-badge">NEW</div>
            <div className="news-content">
              <div className="news-title">
                <span className="bot-name">Free4Talk Chatbot</span> updated to <strong>v1.0.1</strong> — Bug Fixes!
              </div>
              <div className="news-description">
                Replies are now natural length, context analysis improved, no more old message bug.
              </div>
            </div>
            <Link to="/bots/chatbot" className="btn btn-primary">
              Learn More
            </Link>
          </motion.div>
          
          
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Powered by GetSolace</span>
            </div>
            
            <h1 className="hero-title">
              Supercharge Your
              <br />
              <span className="gradient-text">Free4Talk Experience</span>
            </h1>
            
            <p className="hero-description">
              Collection of AI-powered bots to enhance your Free4Talk rooms. 
              Music control, intelligent chat, moderation, and more. Built by GetSolace.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={scrollToBots}
                className="btn btn-primary btn-large"
              >
                <Download size={20} />
                Explore Bots
              </button>
              
              <a 
                href="https://buymeacoffee.com/avataraang" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
              >
                <Coffee size={20} />
                Support Development
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <Rocket size={24} className="stat-icon" />
                <div className="stat-value">{availableBotsCount}</div>
                <div className="stat-label">Active Bots</div>
              </div>
              <div className="stat">
                <Users size={24} className="stat-icon" />
                <div className="stat-value">{totalDownloads.toLocaleString()}+</div>
                <div className="stat-label">Total Downloads</div>
              </div>
              <div className="stat">
                <Star size={24} className="stat-icon" />
                <div className="stat-value">{averageRating}★</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
         

      {/* Available Bots */}
      <section className="bots-section" id="bots">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Available Now</h2>
            <p>Download and start using these bots today</p>
          </motion.div>
          
          <div className="bots-grid">
            {availableBots.map((bot, index) => (
              <BotCard key={bot.id} bot={bot} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Coming Soon */}
      {comingSoonBots.length > 0 && (
        <section className="bots-section coming-soon-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Coming Soon</h2>
              <p>Exciting new bots in development</p>
            </motion.div>
            
            <div className="bots-grid">
              {comingSoonBots.map((bot, index) => (
                <BotCard key={bot.id} bot={bot} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Why Choose Us */}
      <section className="features-section" id="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose GetSolace Bots?</h2>
            <p>Built with care for the Free4Talk community</p>
          </motion.div>
          
          <div className="features-grid-home">
            <motion.div
              className="feature-card-home"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap size={32} />
              <h3>Easy to Use</h3>
              <p>Simple installation with natural language commands. No coding required.</p>
            </motion.div>
            
            <motion.div
              className="feature-card-home"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles size={32} />
              <h3>AI-Powered</h3>
              <p>Powered by Google Gemini for smart suggestions and intelligent automation.</p>
            </motion.div>
            
            <motion.div
              className="feature-card-home"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Coffee size={32} />
              <h3>Community Driven</h3>
              <p>Built by Free4Talk users, for Free4Talk users. Your feedback shapes development.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="support-section" id="support">
        <div className="container">
          <motion.div
            className="support-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Coffee size={48} />
            <h2>Love Our Bots?</h2>
            <p>
              Support GetSolace by buying us a coffee! Your support helps us 
              create more amazing bots, add new features, and keep everything accessible for the community.
            </p>
            <a 
              href="https://buymeacoffee.com/avataraang" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              <Coffee size={24} />
              Buy Me a Coffee
            </a>
            <p className="support-note">
              ☕ Even a small coffee helps us keep building amazing bots!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}