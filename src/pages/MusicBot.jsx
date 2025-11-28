import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Download, Star, Users, PlayCircle, Image, 
  ToggleLeft, Settings, Music, Sparkles, Radio, 
  ListMusic, Shuffle, Brain, Shield, Check, Zap
} from 'lucide-react';
import Features from '../components/music-bot/Features';
import Installation from '../components/music-bot/Installations';
import Commands from '../components/music-bot/Commands';
import Pricing from '../components/music-bot/Pricing';
import FAQ from '../components/music-bot/FAQ';
import commandOptionsImg from '../assets/images/music-bot-command-options.png';
import autoPlayToggleImg from '../assets/images/music-bot-autoplay-toggle.png';
import fullConfigImg from '../assets/images/music-bot-popup-full.png';
import musicBotLiveImg from '../assets/images/music-bot-live.png';
export default function MusicBot() {
  return (
    <div className="bot-page">
      <div className="container">
        {/* Back Link */}
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div 
          className="bot-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bot-icon">🎵</div>
          <h1>Music Bot</h1>
          <p className="bot-tagline">AI-Powered Music Control for Free4Talk</p>
          <p className="bot-description">
            Control YouTube Music with natural language or prefix commands. AI-powered autoplay, 
            smart song suggestions, and flexible command detection modes. Built for the Free4Talk community.
          </p>
          <div className="bot-hero-stats">
            <div className="stat">
              <Users size={20} />
              <span>50+ Active Users</span>
            </div>
            <div className="stat">
              <Star size={20} />
              <span>5 Rating</span>
            </div>
            <div className="stat">
              <Sparkles size={20} />
              <span>Gemini Powered</span>
            </div>
          </div>
          <div className="bot-hero-actions">
            <Link to="/bots/music-bot/install" className="btn btn-primary btn-large">
              <Download size={20} />
              Install Now
            </Link>
            <a href="./downloads/music-bot-extension.zip" download className="btn btn-secondary btn-large">
              <Download size={20} />
              Direct Download
            </a>
          </div>
        </motion.div>

        {/* What's New Banner */}
        <motion.div 
          className="whats-new-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="new-badge">NEW</div>
          <div className="whats-new-content">
            <h3>Latest Features</h3>
            <div className="new-features-list">
              <div className="new-feature-item">
                <ToggleLeft size={20} />
                <span>Autoplay On/Off Toggle - Control AI autoplay directly from popup</span>
              </div>
              <div className="new-feature-item">
                <Settings size={20} />
                <span>3 Command Detection Modes - Prefix-only, Natural, or Hybrid</span>
              </div>
              <div className="new-feature-item">
                <Brain size={20} />
                <span>Smart Song Suggestions - AI recommends similar tracks</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features Highlight */}
        <motion.section 
          className="key-features-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>Powerful Music Control</h2>
            <p>Everything you need for seamless music management</p>
          </div>

          <div className="key-features-grid">
            <motion.div 
              className="key-feature-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="feature-icon-large">
                <Settings size={32} />
              </div>
              <h3>Flexible Command Detection</h3>
              <p>Choose your control method:</p>
              <ul className="feature-list">
                <li><Check size={16} /> Prefix-only (!, ~, /)</li>
                <li><Check size={16} /> Natural Language</li>
                <li><Check size={16} /> Hybrid Mode (Both)</li>
                <li><Check size={16} /> Real-time Mode Switching</li>
              </ul>
            </motion.div>

            <motion.div 
              className="key-feature-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="feature-icon-large">
                <Radio size={32} />
              </div>
              <h3>AI-Powered Autoplay</h3>
              <p>Intelligent music continuation:</p>
              <ul className="feature-list">
                <li><Check size={16} /> Smart Song Suggestions</li>
                <li><Check size={16} /> Context-Aware Selection</li>
                <li><Check size={16} /> One-Click Toggle</li>
                <li><Check size={16} /> Queue End Detection</li>
              </ul>
            </motion.div>

            <motion.div 
              className="key-feature-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="feature-icon-large">
                <Music size={32} />
              </div>
              <h3>Full Music Control</h3>
              <p>Complete YouTube Music integration:</p>
              <ul className="feature-list">
                <li><Check size={16} /> Play/Pause/Skip</li>
                <li><Check size={16} /> Queue Management</li>
                <li><Check size={16} /> Volume Control</li>
                <li><Check size={16} /> Song Search</li>
              </ul>
            </motion.div>

            <motion.div 
              className="key-feature-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="feature-icon-large">
                <Shield size={32} />
              </div>
              <h3>Privacy & Access Control</h3>
              <p>Your music, your rules:</p>
              <ul className="feature-list">
                <li><Check size={16} /> Your Own API Key</li>
                <li><Check size={16} /> Authorized Users Only</li>
                <li><Check size={16} /> No Data Collection</li>
                <li><Check size={16} /> Local Storage</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Screenshots & Demo Section */}
        <motion.section 
          className="screenshots-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>See It In Action</h2>
            <p>Screenshots and examples of the music bot working in Free4Talk</p>
          </div>

          <div className="screenshots-grid">
            {/* Screenshot 1 - Command Options */}
            <motion.div 
              className="screenshot-card featured"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="new-feature-badge">
                <Settings size={14} />
                NEW FEATURE
              </div>
              <div className="screenshot-image">
                <img 
                  src= {commandOptionsImg}
                  alt="Music Bot Command Detection Options"
                />
              </div>
              <div className="screenshot-info">
                <h3>Flexible Command Detection</h3>
                <p>Dropdown selector for Prefix-only, Natural, or Hybrid command modes. Switch instantly based on your preference!</p>
              </div>
            </motion.div>

            {/* Screenshot 2 - Autoplay Toggle */}
            <motion.div 
              className="screenshot-card featured"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="new-feature-badge">
                <ToggleLeft size={14} />
                NEW FEATURE
              </div>
              <div className="screenshot-image">
                <img 
                  src= {autoPlayToggleImg}
                  alt="Music Bot Autoplay Toggle"
                />
              </div>
              <div className="screenshot-info">
                <h3>One-Click Autoplay Control</h3>
                <p>Toggle AI-powered autoplay on/off with a checkbox. When enabled, bot automatically suggests and plays similar songs when queue ends</p>
              </div>
            </motion.div>

            {/* Screenshot 3 - Extension Popup */}
            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="screenshot-image">
                <img 
                  src= {fullConfigImg}
                  alt="Music Bot Extension Popup"
                />
              </div>
              <div className="screenshot-info">
                <h3>Easy Configuration Panel</h3>
                <p>Clean UI with API key setup, model selection, command options, autoplay toggle, and authorized users list</p>
              </div>
            </motion.div>

            {/* Screenshot 4 - Live Demo */}
            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="screenshot-image">
                <img 
                  src= {musicBotLiveImg}
                  alt="Music Bot Live in Free4Talk"
                />
              </div>
              <div className="screenshot-info">
                <h3>Seamless Integration</h3>
                <p>Works perfectly with YouTube Music tab open. Control music with natural language or prefix commands!</p>
              </div>
            </motion.div>
          </div>

          {/* Video Demo */}
          <motion.div 
            className="demo-video-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="demo-video-placeholder">
              <PlayCircle size={64} />
              <h3>Watch Demo Video</h3>
              <p>See the music bot in action with command modes, autoplay, and smart suggestions</p>
              <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <PlayCircle size={18} />
                Watch on YouTube
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Command Options Showcase */}
        <motion.section 
          className="command-options-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>Command Detection Modes</h2>
            <p>Choose how you want to control your music - three flexible options</p>
          </div>

          <div className="command-modes-grid">
            <div className="mode-card">
              <div className="mode-icon">⚡</div>
              <h3>Prefix-only Mode</h3>
              <p className="mode-description">Commands must start with a prefix symbol</p>
              <div className="mode-examples">
                <h4>Available Prefixes:</h4>
                <div className="prefix-badges">
                  <span className="prefix-badge">!</span>
                  <span className="prefix-badge">~</span>
                  <span className="prefix-badge">/</span>
                </div>
                <h4>Examples:</h4>
                <code>!play despacito</code>
                <code>~skip</code>
                <code>/pause</code>
              </div>
              <div className="mode-pros">
                <h4>✅ Best for:</h4>
                <ul>
                  <li>Clear command separation</li>
                  <li>No accidental triggers</li>
                  <li>Fast and precise</li>
                </ul>
              </div>
            </div>

            <div className="mode-card recommended">
              <div className="recommended-badge">⭐ Recommended</div>
              <div className="mode-icon">🤖</div>
              <h3>Natural Mode</h3>
              <p className="mode-description">AI detects commands from natural conversation</p>
              <div className="mode-examples">
                <h4>Examples:</h4>
                <code>play perfect by ed sheeran</code>
                <code>skip this song</code>
                <code>add to queue</code>
              </div>
              <div className="mode-pros">
                <h4>✅ Best for:</h4>
                <ul>
                  <li>Natural conversations</li>
                  <li>No prefix memorization</li>
                  <li>Context-aware detection</li>
                </ul>
              </div>
            </div>

            <div className="mode-card">
              <div className="mode-icon">⚙️</div>
              <h3>Hybrid Mode</h3>
              <p className="mode-description">Accepts both prefix and natural commands</p>
              <div className="mode-examples">
                <h4>Examples:</h4>
                <code>!play bohemian rhapsody</code>
                <code>play wonderwall</code>
                <code>~next song please</code>
              </div>
              <div className="mode-pros">
                <h4>✅ Best for:</h4>
                <ul>
                  <li>Maximum flexibility</li>
                  <li>Mixed command styles</li>
                  <li>Multi-user rooms</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real Examples Section */}
        <motion.section 
          className="examples-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>Real Command Examples</h2>
            <p>See how the bot responds in different command modes</p>
          </div>

          <div className="examples-grid">
            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Prefix Mode</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">!play shape of you</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">🎵 Playing "Shape of You - Ed Sheeran"</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Natural Mode</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">can you play some lofi music?</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">🎵 Playing "Lofi Hip Hop Radio - Beats to Relax/Study to"</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Hybrid Mode</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User 1:</span>
                  <span className="message-text">~skip this one</span>
                </div>
                <div className="message user-message">
                  <span className="message-author">User 2:</span>
                  <span className="message-text">add bohemian rhapsody to queue</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">⏭️ Skipped! ✅ Added "Bohemian Rhapsody - Queen" to queue</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">AI Autoplay (Premium)</span>
              </div>
              <div className="chat-example">
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">🤖 Queue ended. Autoplay ON - finding similar songs...</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">🎵 Now playing "Blinding Lights - The Weeknd"</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Queue Management</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">!queue</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">📋 Queue (3 songs):<br/>1. Levitating - Dua Lipa<br/>2. Starboy - The Weeknd<br/>3. bad guy - Billie Eilish</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Volume Control</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">~volume 50</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">Music Bot:</span>
                  <span className="message-text">🔊 Volume set to 50%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section 
          className="how-it-works-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Understanding the music bot's intelligence</p>
          </div>

          <div className="how-it-works-grid">
            <div className="how-step">
              <div className="how-step-number">1</div>
              <h3>Command Detection</h3>
              <p>Bot monitors Free4Talk chat for music commands using your selected mode (Prefix, Natural, or Hybrid)</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">2</div>
              <h3>AI Processing</h3>
              <p>Gemini AI analyzes the command, extracts song info, and determines the action (play, skip, queue, etc.)</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">3</div>
              <h3>YouTube Control</h3>
              <p>Bot controls YouTube Music tab - searches songs, manages queue, adjusts volume, and handles playback</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">4</div>
              <h3>Smart Autoplay</h3>
              <p>Premium: When queue ends and autoplay is ON, AI suggests similar songs based on listening history</p>
            </div>
          </div>
        </motion.section>

        {/* Regular Sections */}
        <Features />
        <Installation />
        <Commands />
        <Pricing />
        <FAQ />
      </div>
    </div>
  );
}
