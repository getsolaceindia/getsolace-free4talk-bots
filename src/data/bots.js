export const bots = [
  {
    id: 'music-bot',
    name: 'Music Bot',
    tagline: 'AI-Powered Music Control',
    description: 'Control YouTube Music with text commands. AI-powered autoplay and smart suggestions.',
    icon: '🎵',
    status: 'Available',
    premium: true,
    price: 'Free + $3/month',
    features: [
      'Command Control',
      'AI Autoplay',
      'Smart Suggestions',
      'Queue Management',
      '2 Devices'
    ],
    downloads: 50,
    rating: 5,
    category: 'Entertainment',
    tags: ['Music', 'AI', 'Command Control'],
    downloadLink: 'downloads/music-bot-extension.zip',
    docsLink: '/bots/music-bot',
    color: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'  // Professional dark slate
  },
  
  {
  id: 'chatbot',
  name: 'Free4Talk Chatbot',
  tagline: 'Universal AI Chat Companion',
  description: 'Powered by Gemini AI. Natural conversations, personality profiles, and smart context-aware responses. v1.0.1 with bug fixes.',
  icon: '🤖',
  status: 'Available',
  premium: true,
  price: 'Free / $5/month',
  features: [
    'Natural AI Chat',
    'Personality Profiles',
    'Person Facts Memory',
    'Auto Reactions',
    'Premium License System',
    'v1.0.1 - Bug Fixes'
  ],
  downloads: 0,
  rating: 5.0,
  category: 'Productivity',
  tags: ['AI', 'Chat', 'Gemini', 'Conversational'],
  downloadLink: '/downloads/chatbot-extension.zip',
  docsLink: '/bots/chatbot',
  color: 'linear-gradient(135deg, #2d1e3a 0%, #3d2e4a 100%)' // Professional purple
},

  {
    id: 'assistant-bot',
    name: 'AI Assistant',
    tagline: 'Your Smart Chat Assistant',
    description: 'Powered by Gemini AI. Answer questions, help with tasks, and chat naturally.',
    icon: '🤖',
    status: 'Coming Soon',
    premium: false,
    price: 'Free',
    features: [
      'Natural Chat',
      'Smart Replies',
      'Task Help',
      'Multi-language',
      'Context Aware'
    ],
    downloads: 0,
    rating: 0,
    category: 'Productivity',
    tags: ['AI', 'Chat', 'Assistant'],
    downloadLink: null,
    docsLink: null,
    color: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)'  // Professional navy
  },
  {
    id: 'game-bot',
    name: 'Game Bot',
    tagline: 'Fun Games & Entertainment',
    description: 'Play games, trivia, and fun activities with friends in Free4Talk.',
    icon: '🎮',
    status: 'Coming Soon',
    premium: false,
    price: 'Free',
    features: [
      'Trivia Games',
      'Word Games',
      'Multiplayer',
      'Leaderboards',
      'Daily Challenges'
    ],
    downloads: 0,
    rating: 0,
    category: 'Entertainment',
    tags: ['Games', 'Fun', 'Multiplayer'],
    downloadLink: null,
    docsLink: null,
    color: 'linear-gradient(135deg, #1e3a3a 0%, #2d4a4a 100%)'  // Professional teal
  },
  {
    id: 'mod-bot',
    name: 'Moderation Bot',
    tagline: 'Auto-Moderate Your Room',
    description: 'Automatic moderation, spam filtering, and user management for room owners.',
    icon: '🛡️',
    status: 'Coming Soon',
    premium: true,
    price: '$2/month',
    features: [
      'Auto-Moderation',
      'Spam Filter',
      'User Warnings',
      'Ban Management',
      'Custom Rules'
    ],
    downloads: 0,
    rating: 0,
    category: 'Moderation',
    tags: ['Moderation', 'Admin', 'Security'],
    downloadLink: null,
    docsLink: null,
    color: 'linear-gradient(135deg, #3a1e2d 0%, #4a2d3d 100%)'  // Professional burgundy
  }
];
