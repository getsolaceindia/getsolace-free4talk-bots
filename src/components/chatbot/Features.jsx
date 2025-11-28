import { motion } from 'framer-motion';
import { Brain, Users, Database, Smile, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Natural AI Conversations',
    description: 'Powered by Google Gemini AI. Understands context and responds naturally like a real person.'
  },
  {
    icon: Database,
    title: 'Person Facts Memory',
    description: 'Premium feature: Bot remembers facts about users and recalls them in conversations for personalized responses.'
  },
  {
    icon: Users,
    title: 'Friends List',
    description: 'Premium feature: Add friends who get special playful responses. Perfect for close community members.'
  },
  {
    icon: Sparkles,
    title: 'Personality Profiles',
    description: 'Save and load multiple bot personalities. Switch between fun, professional, or custom personas instantly.'
  },
  {
    icon: Smile,
    title: 'Smart Auto-Reactions',
    description: 'Bot automatically reacts to messages with appropriate emojis based on message sentiment and context.'
  },
  {
    icon: Lock,
    title: 'Secure Licensing',
    description: 'Premium features protected by RSA encryption. License keys are device-bound for security.'
  }
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need for an intelligent chat companion</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">
                <feature.icon size={28} />
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
