import PageShell from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Questions or demo requests?"
              description="Reach out and we’ll help you understand the product and its demo workflow."
            />
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Email: hello@pinpulseai.demo</li>
              <li>Support: support@pinpulseai.demo</li>
              <li>Hours: Mon–Fri, 9 AM–5 PM</li>
            </ul>
          </div>

          <Card className="p-8">
            <div className="space-y-4">
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 placeholder:text-slate-400" placeholder="Your name" />
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 placeholder:text-slate-400" placeholder="Email address" />
              <textarea className="min-h-[140px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 placeholder:text-slate-400" placeholder="Tell us what you need" />
              <Button href="/contact" variant="primary">Send message</Button>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
