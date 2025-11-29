import { motion } from 'framer-motion';
import { Coffee, Sparkles, Download, Zap, Users, Star, Rocket, User, AlertTriangle, Shield, Brain, FileText, Heart, Lightbulb } from 'lucide-react';
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
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles size={16} />
              <span>Free4Talk Extension Bots</span>
            </motion.div>
            
            <h1 className="hero-title">
              Supercharge Your
              <span className="gradient-text"> Free4Talk Rooms</span>
            </h1>
            
            <p className="hero-description">
              Collection of AI-powered bots to enhance your Free4Talk rooms. Music control, intelligent chat, moderation, and more. Built by GetSolace.
            </p>
            
            <div className="hero-buttons">
              <button onClick={scrollToBots} className="btn btn-primary btn-large">
                <Download size={20} />
                Explore Bots
              </button>
              <a 
                href="https://free4talk.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-large"
              >
                Visit Free4Talk
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <Download size={24} className="stat-icon" />
                <div className="stat-info">
                  <div className="stat-value">{totalDownloads.toLocaleString()}+</div>
                  <div className="stat-label">Downloads</div>
                </div>
              </div>
              <div className="stat">
                <Star size={24} className="stat-icon" />
                <div className="stat-info">
                  <div className="stat-value">{averageRating}</div>
                  <div className="stat-label">Rating</div>
                </div>
              </div>
              <div className="stat">
                <Rocket size={24} className="stat-icon" />
                <div className="stat-info">
                  <div className="stat-value">{availableBotsCount}</div>
                  <div className="stat-label">Active Bots</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Developer & Vision Section */}
      <section className="about-developer">
        <div className="container">
          <motion.div
            className="about-developer-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-developer-header">
              <User size={32} className="section-icon" />
              <h2>About the Creator</h2>
            </div>
            
            <div className="developer-card">
              <div className="developer-image">
                <div className="image-container">
                  <img 
                    src="/images/aang-profile.jpg" 
                    alt="Aang - Developer" 
                    className="profile-picture"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://ui-avatars.com/api/?name=Aang&size=200&background=667eea&color=fff";
                    }}
                  />
                  <div className="vision-badge">
                    <Lightbulb size={14} fill="currentColor" /> Visionary
                  </div>
                </div>
              </div>
              <div className="developer-info">
                <h3 className="developer-name">Aang</h3>
                <p className="developer-title">Engineer</p>
                <div className="developer-location">📍 Tamil Nadu, India</div>
                
                <div className="vision-content">
                  <p className="vision-intro">
                    Driven by a singular mission: <strong>to enhance the quality of every human life.</strong>
                  </p>
                  <p>
                    I am an engineer working to make people's lives easier through intelligent technology. My work goes beyond simple tools—I am building a comprehensive ecosystem designed to understand and support the human experience.
                  </p>
                  <p>
                    Currently, I am spearheading a massive project: <strong>an AI Psychologist with high-level intelligence</strong> capable of understanding deep emotional context and providing meaningful support. This is just one step in my journey to build technologies that don't just serve tasks, but truly elevate human well-being.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Research Participation Section */}
      <section className="research-section">
        <div className="container">
          <motion.div
            className="research-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <div className="section-badge research-badge">
                <Brain size={16} />
                <span>Beta Access Opportunity</span>
              </div>
              <h2>Join the Future of AI Psychology</h2>
              <p>
                I am currently conducting critical research to build the next generation of AI mental health support. 
                Your input will shape an intelligence that could help millions.
              </p>
            </div>

            <div className="research-card-container">
              {/* Card 1: For Everyone */}
              <div className="research-card">
                <div className="research-card-icon general">
                  <Users size={32} />
                </div>
                <h3>General Public</h3>
                <p>
                  Help us understand human emotional needs better. For anyone who wants to contribute to better mental health tech.
                </p>
                <ul className="research-benefits">
                  <li><Star size={14} /> Get exclusive Beta Access</li>
                  <li><Heart size={14} /> Help shape the AI's personality</li>
                  <li><Zap size={14} /> Early access via Free4Talk</li>
                </ul>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqeWhd7YJrvTiWqy2SWIbt8yoP4dGxz9JtMNHQLwU_E_pw-Q/viewform?usp=header"                   
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                >
                  Fill General Form
                </a>
              </div>

              {/* Card 2: For Professionals */}
              <div className="research-card professional">
                <div className="research-card-icon pro">
                  <Brain size={32} />
                </div>
                <h3>Mental Health Pros</h3>
                <p>
                  For psychologists, therapists, and students. Your professional insights are invaluable for accuracy and safety.
                </p>
                <ul className="research-benefits">
                  <li><Star size={14} /> Professional Beta Access</li>
                  <li><Shield size={14} /> Contribute to ethical AI safety</li>
                  <li><Rocket size={14} /> Priority feature testing</li>
                </ul>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfOKp3iTI9W3caKLKQFpxBb3rImHWUVZ8ARZiTFJyggDJrSjA/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-block"
                >
                  Fill Professional Form
                </a>
              </div>
            </div>
            
            <div className="research-note">
              <p>
                * Participants will receive free beta access to the AI Psychologist on Free4Talk before the official launch on GetSolace.in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer-section">
        <div className="container">
          <motion.div
            className="disclaimer-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="disclaimer-header">
              <AlertTriangle size={32} className="section-icon disclaimer-icon" />
              <h2>Important Disclaimer</h2>
            </div>
            
            <div className="disclaimer-card">
              <div className="disclaimer-badge">
                <Shield size={20} />
                <span>Responsible Use Policy</span>
              </div>
              
              <div className="disclaimer-text">
                <p>
                  <strong>These bot extensions have been created with good intentions</strong> — to help people, 
                  enhance Free4Talk experiences, and build a positive community. They are tools designed for 
                  constructive and ethical use.
                </p>
                
                <p>
                  <strong>Please use these bots responsibly.</strong> Do not misuse them to harm, harass, spam, 
                  or negatively impact other users. These tools are meant to bring people together, not to cause disruption.
                </p>
                
                <p>
                  <strong>By using these bots, you agree to:</strong>
                </p>
                <ul className="disclaimer-list">
                  <li>Use the bots for legitimate and constructive purposes only</li>
                  <li>Respect other Free4Talk users and community guidelines</li>
                  <li>Not engage in harassment, spam, or malicious activities</li>
                  <li>Take full responsibility for how you use these tools</li>
                </ul>
                
                <p className="disclaimer-footer">
                  The developer and GetSolace are not responsible for any misuse of these extensions. 
                  Use them wisely and ethically to create positive experiences for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Bots Section */}
      <section className="bots-section" id="bots">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-badge">
              <Zap size={16} />
              <span>Available Now</span>
            </div>
            <h2>Download and start using these bots today</h2>
          </motion.div>
          
          <div className="bots-grid">
            {availableBots.map((bot, index) => (
              <motion.div
                key={bot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BotCard bot={bot} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      {comingSoonBots.length > 0 && (
        <section className="bots-section coming-soon-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-badge">
                <Sparkles size={16} />
                <span>Coming Soon</span>
              </div>
              <h2>Exciting new bots in development</h2>
            </motion.div>
            
            <div className="bots-grid">
              {comingSoonBots.map((bot, index) => (
                <motion.div
                  key={bot.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BotCard bot={bot} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-badge">
              <Star size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2>Built with care for the Free4Talk community</h2>
          </motion.div>
          
          <div className="features-grid">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>Easy to Use</h3>
              <p>Simple installation with natural language commands. No coding required.</p>
            </motion.div>
            
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature-icon">
                <Sparkles />
              </div>
              <h3>AI-Powered</h3>
              <p>Powered by Google Gemini for smart suggestions and intelligent automation.</p>
            </motion.div>
            
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Community-Driven</h3>
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Coffee size={48} className="support-icon" />
            <h2>Support GetSolace</h2>
            <p>
              Support GetSolace by buying us a coffee! Your support helps us create more amazing bots, add new features, and keep everything accessible for the community.
            </p>
            <a 
              href="https://buymeacoffee.com/avataraang" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              <Coffee size={20} />
              ☕ Even a small coffee helps us keep building amazing bots!
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
