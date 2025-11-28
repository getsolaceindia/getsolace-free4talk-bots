import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const configurations = [
  { setting: 'Bot Username', description: 'Customize your bot\'s display name in the chat' },
  { setting: 'Persona Prompt', description: 'Define bot personality (e.g., "friendly assistant", "witty companion")' },
  { setting: 'Auto React to Messages', description: 'Enable smart emoji reactions based on message sentiment' },
  { setting: 'Reply to Private Messages', description: 'Choose if bot responds to DMs or only group messages' },
  { setting: 'Ignore My Own Messages', description: 'Prevent bot from replying to its own messages' },
  { setting: 'Character Limit', description: 'Set maximum response length to keep replies concise' },
  { setting: 'Friends List (Premium)', description: 'Add users who get playful, personalized responses' },
  { setting: 'Person Facts (Premium)', description: 'Store facts about users for context-aware conversations' },
  { setting: 'Personality Generator (Premium)', description: 'AI-powered tool to generate creative bot personas' }
];

export default function Commands() {
  return (
    <section className="commands">
      <div className="container">
        <div className="section-header">
          <Terminal size={48} style={{ margin: '0 auto 20px', color: 'var(--primary-light)' }} />
          <h2>Configuration Options</h2>
          <p>Customize every aspect through the extension popup</p>
        </div>

        <div className="commands-grid">
          {configurations.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="command-card"
            >
              <div className="command-icon">
                <Terminal size={20} />
              </div>
              <div className="command-content">
                <code>{config.setting}</code>
                <p>{config.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
