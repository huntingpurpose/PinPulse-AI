import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function TermsPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Terms of service"
            title="Guidelines for using the PinPulse AI platform"
          />
          <Card className="space-y-5 p-8 text-sm leading-7 text-slate-700">
            <p>By using PinPulse AI, you agree to use the platform for lawful and appropriate content workflows.</p>
            <p>AI-generated drafts are assistive tools. You remain responsible for reviewing, editing, and complying with platform policies before publication.</p>
            <p>Demo mode is clearly labeled and should not be interpreted as a live public Pinterest publication or payment system.</p>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
