import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Privacy policy"
            title="Your data is handled with care and transparency"
          />
          <Card className="space-y-5 p-8 text-sm leading-7 text-slate-700">
            <p>PinPulse AI is a demo and evaluation application. We collect only the information needed to run the product experience and support the service.</p>
            <p>We do not sell personal data. We use cookies only as needed for user experience, consent preferences, and platform stability.</p>
            <p>External providers, including AI and Pinterest integrations, may process limited account or content data when you explicitly connect them.</p>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
