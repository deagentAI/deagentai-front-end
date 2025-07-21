export interface Agent {
  id: number
  title: string
  icon: string
  description: string
  status: string
  href?: string
}

export const agents: Agent[] = [
  {
    id: 1,
    title: 'ALPHA-X',
    icon: '/images/events/alpha-x-icon.svg',
    description: 'AlphaX is the first community-incubated AI model developed under the DeAgentAI feedback training mechanism, progressing toward autonomous trading capabilities. By leveraging a smaller model\'s parameters, the larger model achieves better accuracy with less GPU time and resolves "hallucination" issues, enhancing reliability for high-precision industries.',
    status: '',
    href: 'https://alpha-x.ai/',
  },
  {
    id: 2,
    title: 'Meme Hunter',
    icon: '/images/events/meme-hunter-icon.svg',
    description: 'Introducing Meme Hunter, an AI agent for Google Chrome on Twitter. It detects meme coin content in tweets and retrieves relevant info via APIs, providing real-time data for informed decisions. Enhance your Twitter experience and stay ahead in the meme coin market with Meme Hunter.',
    status: 'Coming Soon',
  },
  {
    id: 3,
    title: 'DeAgent Terminal',
    icon: '/images/events/deagent-terminal-icon.png',
    description: 'Introducing the DeAgent Terminal, your next-gen Web3 gateway. This AI-driven platform merges GPT\'s intuition with advanced Web3 features. Navigate dApps, manage transactions, and interact with smart contracts effortlessly on Solana. Experience intelligent decentralization with DeAgent Terminal.',
    status: 'Coming Soon',
  },
  {
    id: 4,
    title: 'MemeX',
    icon: '/images/events/memex.png',
    description: 'Introducing MemeX, a cutting-edge AI agent for Telegram. Once installed, users can effortlessly trade meme coins directly within Telegram. When meme coin content is detected, Meme Trader enables swift transactions, providing a seamless and convenient trading experience. Stay ahead in the meme coin market with the efficiency and ease of Meme Trader.',
    status: 'Coming Soon',
  },
  {
    id: 5,
    title: 'Trump\'s Trip',
    icon: '/images/events/trump-trip-icon.svg',
    description: 'Introducing Trump\'s Trip, an engaging GameFi agent built on the TON ecosystem. This community-contributed AI agent allows users to experience the thrilling journey of Trump\'s election campaign. Dive into the strategic decisions, challenges, and triumphs of the race, all within an interactive and immersive environment. Join the adventure and see if you have what it takes to navigate the complexities of a high-stakes political campaign.',
    status: 'Coming Soon',
  },
  {
    id: 6,
    title: 'Trending Analytics',
    icon: '/images/events/trending-analytics-icon.png',
    description: 'Introducing Trending Analytics, an AI tool that provides in-depth insights into trending tokens. It analyzes fundamentals, news, and technical data, highlighting significant market events in an easy-to-understand bubble chart. Stay ahead in crypto with quick and clear market analysis.',
    status: 'Coming Soon',
  },
  {
    id: 7,
    title: 'Arbitrage Bot',
    icon: '/images/events/arbitrage-bot-icon.svg',
    description: 'Introducing our Arbitrage Bot, designed to maximize profits through exchange arbitrage, funding rate differentials, MEV techniques, and interest rate discrepancies. Let it enhance your trading performance with advanced strategies.',
    status: 'Coming Soon',
  },
  {
    id: 8,
    title: 'Meet KOL Connect',
    icon: '/images/events/meet-kol-connect-icon.png',
    description: 'Meet KOL Connect, our cutting-edge KOL agent. It captures the persona and style of top influencers, allowing users to engage in realistic conversations and access valuable insights. With Influencer Connect, experience personalized interactions and stay informed with advice directly from your favorite Key Opinion Leaders.',
    status: 'Coming Soon',
  },
]
