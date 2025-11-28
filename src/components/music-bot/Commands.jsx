import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const commands = [
  { command: 'play [song name]', description: 'Play any song immediately' },
  { command: 'add [song] to queue', description: 'Add song to queue without playing' },
  { command: 'next / skip', description: 'Skip to next song' },
  { command: 'pause', description: 'Pause current song' },
  { command: 'resume', description: 'Resume playback' },
  { command: 'stop', description: 'Stop playback and clear queue' },
  { command: 'show queue', description: 'See what\'s queued up' },
  { command: 'what\'s playing', description: 'Show current song' },
  { command: 'autoplay on/off', description: 'Enable/disable autoplay' }
];

export default function Commands() {
  return (
    <section className="commands" id="commands">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Available Commands</h2>
          <p>Natural language commands - Just type like you talk</p>
        </motion.div>
        
        <div className="commands-grid">
          {commands.map((cmd, index) => (
            <motion.div
              key={index}
              className="command-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="command-icon">
                <Terminal size={18} />
              </div>
              <div className="command-content">
                <code>{cmd.command}</code>
                <p>{cmd.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
