import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Key, Chrome, CheckCircle, AlertTriangle, Settings, MessageCircle } from 'lucide-react';

export default function ChatbotInstall() {
  return (
    <div className="install-page">
      <div className="container">
        {/* Back Link */}
        <Link to="/bots/chatbot" className="back-link">
          <ArrowLeft size={18} />
          Back to Chatbot
        </Link>

        {/* Hero Section */}
        <motion.div
          className="install-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="install-hero-badge">
            <CheckCircle size={16} />
            <span>Step-by-Step Guide</span>
          </div>
          <h1>Chatbot Installation</h1>
          <p className="install-hero-description">
            Follow these simple steps to install and configure the Chatbot extension. 
            No coding required - just copy, paste, and you're ready to go!
          </p>
        </motion.div>

        {/* PC Only Warning */}
        <motion.div
          className="warning-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AlertTriangle size={24} />
          <div>
            <h4>PC Only</h4>
            <p>This extension only works on desktop computers (Windows, macOS, Linux). Mobile devices and tablets cannot install Chrome extensions.</p>
          </div>
        </motion.div>

        {/* Step 1: Enable Developer Mode */}
        <motion.section
          className="install-step"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="step-header">
            <div className="step-number">1</div>
            <div>
              <h2>Enable Chrome Developer Mode</h2>
              <p>Developer mode lets you load extensions from a folder</p>
            </div>
          </div>

          <div className="step-content">
            <div className="step-instructions">
              <div className="instruction-item">
                <Chrome size={20} />
                <p>Open Chrome and navigate to <code>chrome://extensions</code></p>
              </div>
              <div className="instruction-item">
                <Settings size={20} />
                <p>Turn on <strong>Developer mode</strong> in the top-right corner</p>
              </div>
              <div className="instruction-item">
                <CheckCircle size={20} />
                <p>Confirm the toggle shows as enabled</p>
              </div>
            </div>

            <div className="info-box">
              <h4>💡 Why developer mode?</h4>
              <p>Chrome requires developer mode to load unpacked (folder) extensions that are not from the Chrome Web Store.</p>
            </div>

            <div className="info-box info-box-alt">
              <h4>Why not Chrome Web Store?</h4>
              <ul>
                <li><strong>Cost & Approval:</strong> $5 developer fee + unpredictable review process (weeks/months) with no approval guarantee</li>
                <li><strong>Policy & Updates:</strong> Policies change anytime, risking removal. Every update needs re-approval</li>
                <li><strong>User Control:</strong> Direct installation = full control over updates, no data collection, better privacy</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Step 2: Install Extension */}
        <motion.section
          className="install-step"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="step-header">
            <div className="step-number">2</div>
            <div>
              <h2>Install the Extension</h2>
              <p>Download, extract, and load the extension into Chrome</p>
            </div>
          </div>

          <div className="step-content">
            <div className="substeps">
              <div className="substep">
                <div className="substep-number">1</div>
                <div className="substep-content">
                  <h3>Download the extension</h3>
                  <p>Click the button below to download the ZIP file</p>
                  <a 
                    href="./downloads/chatbot-extension.zip"
                    download
                    className="btn btn-primary"
                  >
                    <Download className="w-5 h-5" />
                    Download Extension
                  </a>
                </div>
              </div>

              <div className="substep">
                <div className="substep-number">2</div>
                <div className="substep-content">
                  <h3>Extract the ZIP</h3>
                  <p>Right-click the ZIP file and choose "Extract" to create a folder. You will load this folder in Chrome.</p>
                </div>
              </div>

              <div className="substep">
                <div className="substep-number">3</div>
                <div className="substep-content">
                  <h3>Load the extension in Chrome</h3>
                  <ul>
                    <li>Open Chrome and go to <code>chrome://extensions</code></li>
                    <li>Turn on <strong>Developer mode</strong> (top-right)</li>
                    <li>Click <strong>Load unpacked</strong> and select the extracted folder</li>
                    <li>Reload the Free4Talk room page to activate the extension</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tip-box">
              <h4>💡 Tip</h4>
              <p>Pin the extension to your toolbar for quick access by clicking the puzzle icon and pinning it.</p>
            </div>
          </div>
        </motion.section>

        {/* Step 3: Get API Key */}
        <motion.section
          className="install-step"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="step-header">
            <div className="step-number">3</div>
            <div>
              <h2>Set Up Your API Key</h2>
              <p>We recommend using Google Gemini as a free option</p>
            </div>
          </div>

          <div className="step-content">
            <div className="api-options">
              <div className="api-option recommended">
                <div className="api-option-header">
                  <h3>Google Gemini</h3>
                  <span className="recommended-badge">Supported</span>
                </div>
                <ol>
                  <li>Go to <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a></li>
                  <li>Create or sign in with your Google account</li>
                  <li>Generate an API key and copy it</li>
                  <li>In the extension popup, paste your API key</li>
                </ol>
              </div>
            </div>

            <div className="warning-box warning-box-small">
              <Key size={20} />
              <p><strong>Keep your key safe:</strong> Never share your API key publicly. Treat it like a password.</p>
            </div>
          </div>
        </motion.section>

        {/* Step 4: Configure */}
        <motion.section
          className="install-step"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="step-header">
            <div className="step-number">4</div>
            <div>
              <h2>Configure the Extension</h2>
              <p>Open the extension popup and complete these fields</p>
            </div>
          </div>

          <div className="step-content">
            <div className="config-items">
              <div className="config-item">
                <h4>1) API Provider & Key</h4>
                <p>Choose Gemini, then paste your API key</p>
              </div>
              <div className="config-item">
                <h4>2) Bot Username</h4>
                <p>Enter your Free4Talk username (the bot will respond using this identity)</p>
              </div>
              <div className="config-item">
                <h4>3) Friends List (Optional)</h4>
                <p>Add usernames of friends the bot knows about</p>
              </div>
              <div className="config-item">
                <h4>4) Facts & Persona (Optional)</h4>
                <p>Add custom facts about yourself and define the bot's personality</p>
              </div>
              <div className="config-item">
                <h4>5) Authorized Users (Optional)</h4>
                <p>Add usernames of people who can interact with the bot. Leave empty to allow everyone</p>
              </div>
            </div>

            <div className="success-box">
              <MessageCircle size={20} />
              <div>
                <h4>Ready to go!</h4>
                <p>Head to a Free4Talk room and start chatting with your AI companion</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Troubleshooting */}
        <motion.section
          className="troubleshooting"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Troubleshooting</h2>
          <p>Common problems and how to fix them</p>

          <div className="faq-grid">
            <div className="faq-card">
              <h4>Extension does not load</h4>
              <ul>
                <li>Make sure Developer mode is enabled in chrome://extensions</li>
                <li>Click Load unpacked and select the extracted folder (not the ZIP)</li>
                <li>Check the extension card for any error messages</li>
              </ul>
            </div>

            <div className="faq-card">
              <h4>API key invalid or unauthorized</h4>
              <ul>
                <li>Verify the correct provider is selected (Gemini)</li>
                <li>Regenerate the API key and paste it again</li>
                <li>Ensure your account has access to the chosen model</li>
              </ul>
            </div>

            <div className="faq-card">
              <h4>Bot not responding in Free4Talk</h4>
              <ul>
                <li>Ensure the extension is enabled in the popup</li>
                <li>Enter your correct Free4Talk username</li>
                <li>Reload the Free4Talk tab and try again</li>
              </ul>
            </div>

            <div className="faq-card">
              <h4>Performance or rate limit issues</h4>
              <ul>
                <li>Choose a lighter model (e.g., Gemini 2.0 Flash)</li>
                <li>Reduce the number of authorized users</li>
                <li>Check your API usage limits</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="install-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Need Help?</h2>
          <p>If you're still having issues, reach out to us!</p>
          <div className="cta-buttons">
            <Link to="/bots/chatbot" className="btn btn-secondary btn-large">
              Back to Chatbot
            </Link>
            <a href="mailto:getsolace.india@gmail.com" className="btn btn-primary btn-large">
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
