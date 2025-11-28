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
    answer: 'Free tier has manual queue management. Premium adds AI-powered autoplay and smart song suggestions when your queue is empty.'
  },
  {
    question: 'How do I get a Gemini API key?',
    answer: 'Visit Google AI Studio, sign in with your Google account, and generate a free API key. It takes 2 minutes.'
  },
  {
    question: 'Does it work offline?',
    answer: 'No, you need an internet connection since it uses YouTube Music and Gemini AI for song suggestions.'
  },
  {
    question: 'Can I use it on multiple devices?',
    answer: 'Premium license works on 2 devices. Free tier works on unlimited devices.'
  },
  {
    question: 'How do I cancel Premium?',
    answer: 'Just don\'t renew your license. No automatic billing. You stay premium until your license expires.'
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <ChevronDown size={20} className={isOpen ? 'rotate' : ''} />
      </button>
      <motion.div
        className="faq-answer"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p>{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the Music Bot</p>
        </motion.div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
