import { motion } from 'framer-motion';
import { Music, Zap, Brain, Shield, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Suggestions',
    description: 'Premium users get AI-powered song recommendations based on what you\'re listening to.'
  },
  {
    icon: Zap,
    title: 'AutoPlay',
    description: 'Never run out of music. AI automatically queues similar songs when your queue is empty.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Uses your own Gemini API key. Your data stays private, no tracking.'
  },
  {
    icon: Users,
    title: 'Multi-User',
    description: 'Control who can use the bot by adding authorized users in settings.'
  },
  {
    icon: Clock,
    title: 'Queue Management',
    description: 'Add songs, view queue, skip tracks, and manage playback easily.'
  }
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Powerful Features</h2>
          <p>Everything you need for the perfect music experience</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
