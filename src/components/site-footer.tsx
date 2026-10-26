import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'AI Generator', href: '/ai-generator' }
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Help Center', href: '/help' }
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookies' }
  ]
};

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600 text-lg font-black text-white">P</div>
              <div>
                <div className="text-lg font-black">PinPulse AI</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Creator metrics</div>
              </div>
            </div>
            <p className="max-w-xs text-sm text-slate-400">
              AI-powered planning, drafting, and publishing for Pinterest creators who want a cleaner workflow.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-100">{heading}</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 PinPulse AI. Built for demo and evaluation.</p>
          <div className="flex items-center gap-4">
            <span>Demo mode enabled</span>
            <span>AI disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
