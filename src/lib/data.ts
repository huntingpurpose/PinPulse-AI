export const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'For creators trying the workflow',
    features: ['50 welcome credits', 'Basic title + description generation', 'Limited image prompting', 'Saved drafts']
  },
  {
    name: 'Starter',
    price: '$19',
    description: 'For active creators building a steady pipeline',
    features: ['500 credits per cycle', 'Multi-variation packs', 'Draft history', 'Standard generation queue']
  },
  {
    name: 'Pro',
    highlight: true,
    price: '$49',
    description: 'For creators publishing consistently',
    features: ['2,000 credits per cycle', 'Advanced workflows', 'Expanded board selection', 'Priority queue access']
  },
  {
    name: 'Business',
    price: '$99',
    description: 'For teams and larger content operations',
    features: ['5,000 credits per cycle', 'Team-ready usage controls', 'Advanced workflows', 'Support and administration']
  }
];

export const faqItems = [
  { question: 'Do I need a Pinterest account to try the demo?', answer: 'No. The app includes labeled demo mode for testing the generator and marketing flow without configured API credentials.' },
  { question: 'How do credits work?', answer: 'Each generation action consumes configured credits server-side. The wallet reflects balance, spending, and transaction history.' },
  { question: 'Can I connect my real Pinterest account?', answer: 'Yes. The app supports OAuth and board selection when real Pinterest credentials are configured, while demo mode keeps the flow labeled and safe.' },
  { question: 'Is this app production-ready?', answer: 'This MVP is designed for demonstration and deployment readiness, with clear protection for demo, billing, and data-access boundaries.' }
];

export const generatorExample = {
  title: '7 easy morning rituals for more productive Pinterest planning',
  description: 'Build a calmer content rhythm with a simple, repeatable morning routine designed for creators who want to organize ideas and publish consistently.',
  tags: ['pinterest strategy', 'creator workflow', 'content planning', 'morning routine', 'productivity'],
  cta: 'Save this idea and start your next board refresh today.'
};
