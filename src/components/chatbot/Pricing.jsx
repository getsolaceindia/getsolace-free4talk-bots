import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: [
      'Natural AI conversations',
      'Basic personality customization',
      'Unlimited messages',
      'Your own Gemini API key',
      'Profile save/load (3 profiles)',
      'Auto reactions',
      'No ads'
    ],
    cta: 'Download Free',
    link: './downloads/chatbot-extension.zip',
    download: true,
    popular: false
  },
  {
    name: 'Premium',
    price: '$5',
    period: '/month',
    features: [
      'Everything in Free',
      'Person Facts Memory',
      'Friends List with special responses',
      'AI Personality Generator',
      'Unlimited profile saves',
      '2 devices per license',
      'Priority support',
      'Early access to new features'
    ],
    cta: 'Upgrade to Premium',
    link: 'https://buymeacoffee.com/avataraang',
    download: false,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Start free, upgrade when you need advanced features</p>
        </div>

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
                download={plan.download}
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