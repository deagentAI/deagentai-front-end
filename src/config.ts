// Project metadata
export const metadata = {
  title: 'DeAgent AI',
  description: 'DeAgent AI - Web3 Trading Platform',
  logo: '/icons/logo.svg',
  favicon: '/favicon.ico',
}

// Navigation item type
export interface NavItem {
  name: string
  href: string
  target?: string
}

// Navigation configuration
export const navigation: NavItem[] = [
  { name: 'HOME', href: '/' },
  { name: 'AI AGENT', href: '/products' },
  { name: 'MINER', href: 'https://dam.deagent.ai', target: '_blank' },
  { name: 'EVENT', href: '/event' },
  { name: 'WHITEPAPER', href: 'https://deagentai.gitbook.io/deagentai', target: '_blank' },
  { name: 'BLOG', href: 'https://medium.com/@deagent.ai', target: '_blank' },
]
