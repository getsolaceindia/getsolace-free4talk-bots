import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Download, Star, Users, PlayCircle, Image, 
  Sparkles, Brain, MessageSquare, Shield, Zap, Settings,
  UserPlus, Heart, Database, Check
} from 'lucide-react';
import Features from '../components/chatbot/Features';
import Installation from '../components/chatbot/Installations';
import Commands from '../components/chatbot/Commands';
import Pricing from '../components/chatbot/Pricing';
import FAQ from '../components/chatbot/FAQ';
import commandOptionsImg from '../assets/images/chat-bot-config.png';
import chatBotUIiImg from '../assets/images/chat-bot-ui.png';
import chatBotOptionsImg from '../assets/images/chat-bot-options.png';
import chatBotLiveImg from '../assets/images/chat-bot-live.png';

export default function Chatbot() {
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
          <div className="bot-icon">💬</div>
          <h1>Free4Talk Chatbot</h1>
          <p className="bot-tagline">Universal AI Chat Companion</p>
          <p className="bot-description">
            Powered by Google Gemini AI. Natural conversations with personality profiles, memory system, and smart context-aware responses. Built for the Free4Talk community with privacy in mind.
            <span style={{ display: 'block', marginTop: '12px', fontSize: '14px', color: 'var(--primary-light)', fontWeight: '600' }}>
              Version 1.0.1 - Latest Bug Fixes
            </span>
          </p>
          <div className="bot-hero-stats">
            <div className="stat">
              <Users size={20} />
              <span>50+ Active Users</span>
            </div>
            <div className="stat">
              <Star size={20} />
              <span>5.0 Rating</span>
            </div>
            <div className="stat">
              <Sparkles size={20} />
              <span>Gemini Powered</span>
            </div>
          </div>
          <div className="bot-hero-actions">
            <Link to="/bots/chatbot/install" className="btn btn-primary btn-large">
              <Download size={20} />
              Install Now
            </Link>
            <a href="./downloads/chatbot-extension.zip" download className="btn btn-secondary btn-large">
              <Download size={20} />
              Direct Download
            </a>
          </div>
        </motion.div>

        {/* What's New Banner - Version 1.4 */}
        <motion.div 
          className="whats-new-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="new-badge">v1.4 🚀</div>
          <div className="whats-new-content">
            <h3>Major Feature Update - Dual API Support!</h3>
            <div className="new-features-list">
              <div className="new-feature-item">
                <Check size={20} />
                <span><strong>Groq API Integration</strong> - Ultra-fast responses with LPU acceleration (up to 10x faster than Gemini!)</span>
              </div>
              <div className="new-feature-item">
                <Check size={20} />
                <span><strong>10+ AI Models</strong> - Choose from Gemini 2.0/2.5/3.0 models + Llama 3.1/3.3 on Groq</span>
              </div>
              <div className="new-feature-item">
                <Check size={20} />
                <span><strong>Enterprise-Grade UI</strong> - Beautiful tab-based interface with status indicators and real-time model display</span>
              </div>
              <div className="new-feature-item">
                <Check size={20} />
                <span><strong>Smart Model Switching</strong> - Auto-validates provider/model compatibility and prevents mismatches</span>
              </div>
              <div className="new-feature-item">
                <Check size={20} />
                <span><strong>Enhanced UX</strong> - Loading states, improved validation, keyboard shortcuts, better error handling</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        

        <motion.section className="key-features-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
  <div className="section-header">
    <h2>Powerful AI Features</h2>
    <p>Everything you need for natural, intelligent conversations</p>
  </div>

  <div className="key-features-grid">
      {/* Feature 1 - Dual API Support */}
      <motion.div className="key-feature-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className="feature-icon-large">
          <Zap size={32} />
        </div>
        <h3>Dual API Support</h3>
        <p>Choose between Gemini and Groq</p>
        <ul className="feature-list">
          <li><Check size={16} /> Google Gemini - Standard speed, high quality</li>
          <li><Check size={16} /> Groq API - Ultra-fast LPU acceleration</li>
          <li><Check size={16} /> Seamless switching between providers</li>
          <li><Check size={16} /> Auto-validation prevents mismatches</li>
        </ul>
      </motion.div>
  
      {/* Feature 2 - 10+ AI Models */}
      <motion.div className="key-feature-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className="feature-icon-large">
          <Sparkles size={32} />
        </div>
        <h3>10+ AI Models</h3>
        <p>Select the perfect model for your needs</p>
        <ul className="feature-list">
          <li><Check size={16} /> Gemini 3 Pro Preview (Latest)</li>
          <li><Check size={16} /> Gemini 2.0 Flash / 2.5 Flash Lite</li>
          <li><Check size={16} /> Llama 3.3 70B Versatile (Groq)</li>
          <li><Check size={16} /> Llama 3.1 8B Instant (Groq)</li>
        </ul>
      </motion.div>
  
      {/* Feature 3 - Enterprise UI */}
      <motion.div className="key-feature-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className="feature-icon-large">
          <Settings size={32} />
        </div>
        <h3>Enterprise-Grade UI</h3>
        <p>Professional interface with modern design</p>
        <ul className="feature-list">
          <li><Check size={16} /> Tab-based navigation</li>
          <li><Check size={16} /> Real-time status indicators</li>
          <li><Check size={16} /> Loading states & validation</li>
          <li><Check size={16} /> Responsive gradient design</li>
        </ul>
      </motion.div>
  
      {/* Feature 4 - Smart Memory System */}
      <motion.div className="key-feature-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className="feature-icon-large">
          <Database size={32} />
        </div>
        <h3>Smart Memory System</h3>
        <p>Advanced memory capabilities</p>
        <ul className="feature-list">
          <li><Check size={16} /> Person Facts Database</li>
          <li><Check size={16} /> Friends List Recognition</li>
          <li><Check size={16} /> Context History (50 messages)</li>
          <li><Check size={16} /> Custom Personality Prompts</li>
        </ul>
      </motion.div>
  
      {/* Feature 5 - Intelligent Responses */}
      <motion.div className="key-feature-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className="feature-icon-large">
          <Brain size={32} />
        </div>
        <h3>Intelligent Responses</h3>
        <p>AI decides when to respond</p>
        <ul className="feature-list">
          <li><Check size={16} /> Context-Aware Detection</li>
          <li><Check size={16} /> Natural Conversation Flow</li>
          <li><Check size={16} /> Auto Reactions 💖</li>
          <li><Check size={16} /> Smart Reply Timing</li>
        </ul>
      </motion.div>
  
      {/* Feature 6 - Privacy Control */}
      <motion.div className="key-feature-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className="feature-icon-large">
          <Shield size={32} />
        </div>
        <h3>Privacy & Control</h3>
        <p>Your data stays private</p>
        <ul className="feature-list">
          <li><Check size={16} /> Your Own API Keys</li>
          <li><Check size={16} /> No Data Collection</li>
          <li><Check size={16} /> Local Storage Only</li>
          <li><Check size={16} /> Full Transparency</li>
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
            <p>Screenshots and examples of the chatbot working in Free4Talk</p>
          </div>

          <div className="screenshots-grid">
            {/* Screenshot 1 - Extension Popup */}
            <motion.div 
              className="screenshot-card featured"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="new-feature-badge">
                <Settings size={14} />
                UI REDESIGN
              </div>
              <div className="screenshot-image">
                <img 
                  src= {commandOptionsImg}
                  alt="Chat Bot Command Detection"
                />
              </div>
              <div className="screenshot-info">
                <h3>Easy Configuration Panel</h3>
                <p>Simple popup interface with API key setup, model selection, bot username, persona customization, and profile save/load system</p>
              </div>
            </motion.div>

            {/* Screenshot 2 - Friends & Facts */}
            <motion.div 
              className="screenshot-card featured"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="new-feature-badge">
                <Database size={14} />
                MEMORY SYSTEM
              </div>
              <div className="screenshot-image">
                <img 
                  src= {chatBotUIiImg}
                  alt="Chat Bot Command Detection UI"
                />
              </div>
              <div className="screenshot-info">
                <h3>Advanced Memory Features</h3>
                <p>Add friends with special notes, store facts about people you meet, and get personalized AI responses based on saved information</p>
              </div>
            </motion.div>

            {/* Screenshot 3 - Chat Example */}
            <motion.div 
              className="screenshot-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="screenshot-image">
                <img 
                  src= {chatBotOptionsImg}
                  alt="Chat Bot Command Options UI"
                />
              </div>
              <div className="screenshot-info">
                <h3>Natural Conversations</h3>
                <p>AI-powered responses that feel genuine and context-aware. Understands conversation history and responds naturally</p>
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
                  src= {chatBotLiveImg}
                  alt="Chat Bot Live"
                />
              </div>
              <div className="screenshot-info">
                <h3>Seamless Integration</h3>
                <p>Works perfectly within Free4Talk rooms. Auto-detects when to respond, no manual commands needed</p>
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
              <p>See the chatbot in action with real examples of memory features and natural conversations</p>
              <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <PlayCircle size={18} />
                Watch on YouTube
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Real Examples Section */}
        <motion.section 
          className="examples-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>Real Conversation Examples</h2>
            <p>See how the bot responds with context awareness and memory</p>
          </div>

          <div className="examples-grid">
            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Natural Greeting</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">Hey! How's everyone doing?</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">Hey there! 😊 Doing great! Just hanging out here. What brings you to the room today?</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Friend Recognition (Premium)</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">Sarah:</span>
                  <span className="message-text">I'm back from vacation!</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">Welcome back, Sarah! 🎉 How was your trip to Japan? Did you try all that amazing sushi you were excited about?</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Context Awareness</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">Alex:</span>
                  <span className="message-text">Just watched Inception!</span>
                </div>
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">What did you think about that movie?</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">Inception is mind-blowing! The dream-within-a-dream concept and that spinning top ending... still gives me chills. What was your favorite scene?</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Helpful Response</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">Can someone recommend a good coding tutorial?</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">For which language? If you're starting with JavaScript, I'd recommend FreeCodeCamp or The Odin Project - both are free and comprehensive! For Python, try CS50 or Automate the Boring Stuff.</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Person Facts Memory (Premium)</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">Mike:</span>
                  <span className="message-text">Finally got that job at Google!</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">Congratulations, Mike! 🎊 That's amazing! I remember you were interviewing for a software engineering role there. All that preparation paid off!</span>
                </div>
              </div>
            </div>

            <div className="example-card">
              <div className="example-header">
                <span className="example-label">Auto Reactions</span>
              </div>
              <div className="chat-example">
                <div className="message user-message">
                  <span className="message-author">User:</span>
                  <span className="message-text">I passed my driving test today!</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">❤️ (Auto-reacts to positive moments)</span>
                </div>
                <div className="message bot-message">
                  <span className="message-author">ChatBot:</span>
                  <span className="message-text">That's fantastic! Congratulations on passing your driving test! 🚗 Time to hit the road!</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          className="how-it-works-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Understanding the bot's intelligence</p>
          </div>

          <div className="how-it-works-grid">
            <div className="how-step">
              <div className="how-step-number">1</div>
              <h3>Monitors Chat</h3>
              <p>The bot watches Free4Talk room conversations in real-time, building context from the last 50 messages</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">2</div>
              <h3>AI Analysis</h3>
              <p>Gemini AI analyzes context, user profiles, friends list, and person facts to determine if a response is needed</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">3</div>
              <h3>Smart Response</h3>
              <p>Bot responds naturally when appropriate - not every message, just like a real person would</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">4</div>
              <h3>Learns & Remembers</h3>
              <p>Premium: Stores facts about people and remembers friends for more personalized future conversations</p>
            </div>
          </div>
        </motion.section>

        {/* Profile System Showcase */}
        <motion.section 
          className="profile-system-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>Multiple Bot Personalities</h2>
            <p>Save and switch between different bot profiles instantly</p>
          </div>

          <div className="profile-showcase">
            <div className="profile-card">
              <div className="profile-header">
                <h3>👨‍💼 Professional Assistant</h3>
                <span className="profile-badge">Profile 1</span>
              </div>
              <p className="profile-prompt">"You are a professional, helpful assistant who provides concise, accurate information"</p>
              <div className="profile-features">
                <span>-  Formal tone</span>
                <span>-  Detailed answers</span>
                <span>-  Business focused</span>
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <h3>😄 Casual Friend</h3>
                <span className="profile-badge">Profile 2</span>
              </div>
              <p className="profile-prompt">"You are a friendly, casual companion who loves jokes and keeping conversations light"</p>
              <div className="profile-features">
                <span>-  Informal language</span>
                <span>-  Emoji usage</span>
                <span>-  Fun responses</span>
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <h3>🎓 Study Buddy</h3>
                <span className="profile-badge">Profile 3</span>
              </div>
              <p className="profile-prompt">"You are a patient tutor who helps explain complex topics in simple terms"</p>
              <div className="profile-features">
                <span>-  Educational</span>
                <span>-  Clear explanations</span>
                <span>-  Encouraging</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Changelog Section */}
<motion.section 
  className="examples-section" 
  initial={{ opacity: 0, y: 30 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }}
>
  <div className="section-header">
    <h2>Version History</h2>
    <p>Track all updates and improvements</p>
  </div>
  
  <div className="profile-showcase" style={{ gridTemplateColumns: '1fr' }}>
    {/* Version 1.4 - Current */}
    <div className="profile-card">
      <div className="profile-header">
        <h3>Version 1.4 🚀</h3>
        <span className="profile-badge">Current</span>
      </div>
      <p className="profile-prompt" style={{ fontStyle: 'normal' }}>
        December 8, 2025 - Major Feature Update
      </p>
      <div className="profile-features" style={{ flexDirection: 'column', gap: '8px' }}>
        <span>✅ Added Groq API support with ultra-fast LPU acceleration</span>
        <span>✅ 10+ AI models (Gemini 2.0/2.5/3.0 + Llama 3.1/3.3)</span>
        <span>✅ Enterprise-grade tab-based UI redesign</span>
        <span>✅ Smart model switching with auto-validation</span>
        <span>✅ Loading states, improved validation & error handling</span>
        <span>✅ Real-time status indicators & model display</span>
      </div>
    </div>

    {/* Version 1.0.1 */}
        <div className="profile-card" style={{ opacity: 0.7 }}>
          <div className="profile-header">
            <h3>Version 1.0.1</h3>
            <span className="profile-badge">Previous</span>
          </div>
          <p className="profile-prompt" style={{ fontStyle: 'normal' }}>
            November 27, 2025 - Bug Fixes & Stability
          </p>
          <div className="profile-features" style={{ flexDirection: 'column', gap: '8px' }}>
            <span>✅ Fixed variable reply-length limits</span>
            <span>✅ Improved context analysis to prevent non-responses</span>
            <span>✅ Fixed replies to old messages when scrolled up</span>
          </div>
        </div>
    
        {/* Version 1.0.0 */}
        <div className="profile-card" style={{ opacity: 0.5 }}>
          <div className="profile-header">
            <h3>Version 1.0.0</h3>
            <span className="profile-badge">Initial</span>
          </div>
          <p className="profile-prompt" style={{ fontStyle: 'normal' }}>
            Initial Release
          </p>
          <div className="profile-features" style={{ flexDirection: 'column', gap: '8px' }}>
            <span>✅ Person Facts Memory</span>
            <span>✅ Friends List System</span>
            <span>✅ Context-Aware AI</span>
          </div>
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
