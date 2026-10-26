import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="About us"
            title="An AI-first SaaS for Pinterest creators"
            description="PinPulse AI helps content creators plan better, move faster, and publish with more confidence."
          />
          <Card className="p-8 leading-7 text-slate-700">
            We built this product to simplify the ideation, drafting, and publishing workflow for Pinterest creators who want to turn their expertise into high-fit content without a patchwork of disconnected tools.
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
