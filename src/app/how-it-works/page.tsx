import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

const steps = [
  ['1. Define the idea', 'Choose a topic, target audience, category, and tone.'],
  ['2. Generate the draft', 'Review title, description, keywords, and pin prompt variations.'],
  ['3. Edit and publish', 'Refine the content, save it as a draft, and share it when ready.']
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="From inspiration to Pinterest-ready pins in under 10 minutes"
            description="The workflow is intentionally simple so creators can focus on content quality instead of process friction."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(([step, text]) => (
              <Card key={step}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-black text-brand-700">{step}</div>
                <p className="text-base text-slate-700">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
