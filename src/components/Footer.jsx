import { Github, Twitter, Mail, Heart, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section with Logo */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/logo/getsolace-icon.png" 
                alt="GetSolace Logo" 
                className="footer-logo-image"
              />
              <span className="footer-logo-text">GetSolace Bots</span>
            </div>
            <p className="footer-description">
              AI-powered bots for Free4Talk. Built with passion for the community.
            </p>
            <p className="footer-domain">
              free4talk.getsolace.in
            </p>
            
            {/* Contact Email */}
            <a 
              href="mailto:getsolace.india@gmail.com" 
              className="footer-email"
            >
              <Mail size={18} />
              getsolace.india@gmail.com
            </a>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bots/chatbot">Chatbot</Link></li>
                <li><Link to="/bots/music-bot">Music Bot</Link></li>
                <li><a href="#support">Support Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/bots/chatbot/install">Installation Guide</Link></li>
                <li><a href="https://free4talk.com" target="_blank" rel="noopener noreferrer">Free4Talk</a></li>
                <li><a href="https://getsolace.in" target="_blank" rel="noopener noreferrer">GetSolace</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:getsolace.india@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
              <a 
                href="https://buymeacoffee.com/avataraang" 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-coffee-btn"
              >
                <Coffee size={18} />
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} GetSolace. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={16} fill="currentColor" /> for Free4Talk
          </p>
        </div>
      </div>
    </footer>
  );
}