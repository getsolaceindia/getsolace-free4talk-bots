import { motion } from 'framer-motion';
import { Download, Key, Settings, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download Extension',
    description: 'Download the Chrome extension ZIP file and extract it to your computer.'
  },
  {
    icon: Key,
    title: 'Get Gemini API Key',
    description: 'Get a free Gemini API key from Google AI Studio. Takes 2 minutes.'
  },
  {
    icon: Settings,
    title: 'Configure Bot',
    description: 'Set bot username, persona prompt, and behavior settings in the extension popup.'
  },
  {
    icon: MessageCircle,
    title: 'Start Chatting',
    description: 'Head to Free4Talk and watch your bot respond naturally to conversations!'
  }
];

export default function Installation() {
  return (
    <section className="installation">
      <div className="container">
        <div className="section-header">
          <h2>Get Started in Minutes</h2>
          <p>Follow these simple steps to install and configure the bot</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="step-card"
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                <step.icon size={32} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="installation-cta">
          <a href="../downloads/chatbot-extension.zip" download className="btn btn-primary btn-large">
            <Download size={20} />
            Download Extension
          </a>
          <a 
            href="https://aistudio.google.com/app/apikey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary btn-large"
          >
            <Key size={20} />
            Get Free API Key
          </a>
        </div>
      </div>
    </section>
  );
}
