import Link from 'next/link';
import PageShell from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

const features = [
  ['Ideas', 'Capture trend-led content concepts and turn them into fully formed pin pack suggestions.'],
  ['Titles', 'Generate keyword-rich titles tuned for search intent and board topics.'],
  ['Images', 'Build AI image prompts and preview the look and feel before publishing.'],
  ['Publishing', 'Review drafts in one interface before posting to a connected Pinterest board.']
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="Features"
            title="Built for creators, planners, and publishing teams"
            description="PinPulse AI focuses on the parts of Pinterest growth that matter most: clarity, speed, and quality control."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map(([title, text]) => (
              <Card key={title} className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg text-brand-700">✦</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container max-w-4xl">
          <Card className="p-8">
            <h3 className="text-2xl font-black text-slate-900">What’s included in the MVP</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                'AI-inspired title and description generation',
                'Draft management and editable previews',
                'Pinned board selection flow',
                'Demo publishing simulation vs real OAuth flow',
                'Credit wallet and billing preview',
                'Responsive marketing site and dashboard scaffolding'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 text-brand-700">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/signup" variant="primary">Create your demo account</Button>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
