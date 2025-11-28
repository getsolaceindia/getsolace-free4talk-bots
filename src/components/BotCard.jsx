import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Star, Users, ChevronRight, Lock } from 'lucide-react';

export default function BotCard({ bot, index }) {
  return (
    <motion.div
      className="bot-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{ background: bot.color }}
    >
      <div className="bot-card-content">
        <div className="bot-header">
          <div className="bot-icon">{bot.icon}</div>
          <div className="bot-status">
            {bot.status === 'Available' ? (
              <span className="status-badge available">Available</span>
            ) : (
              <span className="status-badge coming-soon">Coming Soon</span>
            )}
          </div>
        </div>
        
        <h3>{bot.name}</h3>
        <p className="bot-tagline">{bot.tagline}</p>
        <p className="bot-description">{bot.description}</p>
        
        <div className="bot-stats">
          {bot.downloads > 0 && (
            <div className="stat">
              <Users size={16} />
              <span>{bot.downloads.toLocaleString()}</span>
            </div>
          )}
          {bot.rating > 0 && (
            <div className="stat">
              <Star size={16} fill="currentColor" />
              <span>{bot.rating}</span>
            </div>
          )}
        </div>
        
        <div className="bot-features-preview">
          {bot.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="feature-tag">{feature}</div>
          ))}
        </div>
        
        <div className="bot-footer">
          <div className="bot-price">
            {bot.premium && <Lock size={14} />}
            <span>{bot.price}</span>
          </div>
          
          {bot.status === 'Available' ? (
            <Link to={bot.docsLink} className="btn btn-primary">
              View Details
              <ChevronRight size={18} />
            </Link>
          ) : (
            <button className="btn btn-disabled" disabled>
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
