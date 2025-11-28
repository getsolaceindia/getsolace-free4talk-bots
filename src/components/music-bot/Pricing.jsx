import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: [
      'Manual queue management',
      'Unlimited songs',
      'Your own API key',
      'Multi-user support',
      'No ads'
    ],
    cta: 'Download Free',
    link: './downloads/music-bot-extension.zip',
    download: true,
    popular: false
  },
  {
    name: 'Premium',
    price: '$3',
    period: '/month',
    features: [
      'Everything in Free',
      'AI-powered autoplay',
      'Smart song suggestions',
      'Unlimited AI suggestions',
      '2 devices per license',
      'Priority support'
    ],
    cta: 'Upgrade to Premium',
    link: 'https://buymeacoffee.com/avataraang',
    download: false,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Simple, Transparent Pricing</h2>
          <p>Start free, upgrade when you need AI-powered features</p>
        </motion.div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Sparkles size={14} />
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <div className="price-wrapper">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <div className="check-icon">
                      <Check size={16} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                download={plan.download ? 'music-bot-extension.zip' : undefined}
                target={!plan.download ? '_blank' : undefined}
                rel={!plan.download ? 'noopener noreferrer' : undefined}
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-block btn-large pricing-cta`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
