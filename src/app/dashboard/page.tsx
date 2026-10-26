import PageShell from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const dashboardCards = [
  ['Available credits', '250'],
  ['Total generations', '42'],
  ['Pins published', '18'],
  ['Current plan', 'Starter']
];

export default function DashboardPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Dashboard</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Overview</h1>
            </div>
            <Button href="/ai-generator" variant="primary">Generate a new pin</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dashboardCards.map(([label, value]) => (
              <Card key={label} className="p-5">
                <p className="text-sm text-slate-500">{label}</p>
                <div className="mt-3 text-3xl font-black text-slate-900">{value}</div>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900">Recent generated pins</h2>
              <div className="mt-6 space-y-4">
                {[
                  ['7 morning rituals for creator productivity', 'Ready to publish'],
                  ['How to organize a Pinterest content calendar', 'Saved draft'],
                  ['3 ways to refresh a tired pin strategy', 'Published']
                ].map(([name, status]) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div>
                      <div className="font-semibold text-slate-900">{name}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{status}</div>
                    </div>
                    <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">Pin</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900">Recent activity</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                <li>Generated 3 pin variations for business growth</li>
                <li>Updated board category for content strategy</li>
                <li>Saved a draft for revival later</li>
                <li>Connected demo Pinterest board</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
