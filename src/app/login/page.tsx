import PageShell from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container max-w-md">
          <Card className="p-8">
            <div className="mb-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-black text-brand-700">P</div>
              <h1 className="mt-4 text-3xl font-black text-slate-900">Log in</h1>
            </div>
            <div className="space-y-4">
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400" placeholder="Email" />
              <input type="password" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400" placeholder="Password" />
              <Button href="/dashboard" variant="primary" className="w-full">Continue</Button>
              <div className="text-center text-sm text-slate-500">
                <a href="/signup" className="font-semibold text-brand-700">Need an account?</a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
