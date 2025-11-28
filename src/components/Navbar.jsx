import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img 
            src="/logo/getsolace-icon.png" 
            alt="GetSolace Logo" 
            className="logo-image"
          />
          <span>GetSolace Bots</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <button
            onClick={() => scrollToSection('bots')}
            className="nav-link-button"
          >
            Bots
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="nav-link-button"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('support')}
            className="nav-link-button"
          >
            Support
          </button>
          <a 
            href="https://buymeacoffee.com/avataraang" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coffee"
          >
            <Coffee size={18} />
            Support Us
          </a>
        </div>
      </div>
    </nav>
  );
}