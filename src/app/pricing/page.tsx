import PageShell from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { plans } from '@/lib/data';

export default function PricingPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible pricing for every creator stage"
            description="All plans are configurable and clearly labeled as demo values in this MVP."
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {plans.map((plan) => (
              <Card key={plan.name} className={`${plan.highlight ? 'border-brand-200 bg-brand-50 shadow-soft' : ''}`}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  {plan.highlight ? <span className="rounded-full bg-brand-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">Popular</span> : null}
                </div>
                <div className="mb-3 flex items-end gap-2">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-500">/month</span>
                </div>
                <p className="mb-5 text-sm text-slate-600">{plan.description}</p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-brand-700">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/signup" variant={plan.highlight ? 'primary' : 'secondary'} className="w-full">Get started</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
