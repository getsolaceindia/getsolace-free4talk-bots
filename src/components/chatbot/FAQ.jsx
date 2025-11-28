import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is it really free?',
    answer: 'Yes! The basic version is 100% free forever. You only need a free Gemini API key from Google, which costs nothing.'
  },
  {
    question: 'What\'s the difference between Free and Premium?',
    answer: 'Free tier has basic AI chat with personality customization. Premium adds Person Facts memory, Friends List, AI Personality Generator, and unlimited profile saves.'
  },
  {
    question: 'How does Person Facts work?',
    answer: 'Premium feature that lets your bot remember facts about specific users (e.g., "John loves pizza"). The bot recalls these facts in future conversations for personalized responses.'
  },
  {
    question: 'How do I get a Gemini API key?',
    answer: 'Visit Google AI Studio (aistudio.google.com), sign in with your Google account, and generate a free API key. It takes 2 minutes.'
  },
  {
    question: 'Does it work offline?',
    answer: 'No, you need an internet connection since it uses Gemini AI for natural language processing and responses.'
  },
  {
    question: 'Can I use it on multiple devices?',
    answer: 'Premium license works on 2 devices. Free tier works on unlimited devices but without premium features.'
  },
  {
    question: 'How do license keys work?',
    answer: 'Premium licenses use RSA encryption and are device-bound for security. Enter your license key in the extension popup to activate premium features.'
  },
  {
    question: 'Can I customize the bot\'s personality?',
    answer: 'Yes! Use the Persona Prompt field to define how your bot behaves. Premium users get an AI-powered Personality Generator for creative ideas.'
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="faq-item"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="faq-question">
        <span>{faq.question}</span>
        <ChevronDown className={`faq-icon ${isOpen ? 'open' : ''}`} size={24} />
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the Chatbot</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
