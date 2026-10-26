import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="border-b border-brand-100 bg-brand-50 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
        Demo Mode - Public preview only
      </div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
