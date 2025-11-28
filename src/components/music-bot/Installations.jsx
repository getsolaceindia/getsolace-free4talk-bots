import { motion } from 'framer-motion';
import { Download, Key, Users, Play } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download Extension',
    description: 'Download the Chrome extension ZIP file and extract it to your computer.'
  },
  {
    icon: Key,
    title: 'Get API Key',
    description: 'Get a free Gemini API key from Google AI Studio. Takes 2 minutes.'
  },
  {
    icon: Users,
    title: 'Configure Settings',
    description: 'Paste your API key and add authorized users in the extension popup.'
  },
  {
    icon: Play,
    title: 'Start Using',
    description: 'Head to Free4Talk, say "play your favorite song" and enjoy!'
  }
];

export default function Installation() {
  return (
    <section className="installation" id="installation">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Get Started in Minutes</h2>
          <p>Follow these simple steps to install and configure the bot</p>
        </motion.div>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                <step.icon size={28} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="installation-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a 
            href="downloads/music-bot-extension.zip"  // NO 'public/'
            download="music-bot-extension.zip"
            className="btn btn-primary"
          >
            Download Extension
          </a>

          <a 
            href="https://makersuite.google.com/app/apikey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary btn-large"
          >
            <Key size={24} />
            Get Free API Key
          </a>
        </motion.div>
      </div>
    </section>
  );
}
