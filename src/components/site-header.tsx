import Link from 'next/link';

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Help', href: '/help' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600 text-lg font-black text-white shadow-soft">
            P
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">PinPulse AI</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Creator growth</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700 md:inline-flex">
            Demo Mode
          </span>
          <Link href="/login" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700 sm:inline-flex">
            Log in
          </Link>
          <Link href="/signup" className="inline-flex rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
            Try generator
          </Link>
        </div>
      </div>
    </header>
  );
}
