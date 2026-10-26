import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function CookiesPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Cookies & ad preferences"
            title="How we use cookies and ad-related settings"
          />
          <Card className="space-y-5 p-8 text-sm leading-7 text-slate-700">
            <p>We may use cookies to keep your session active, remember consent choices, and improve reliability.</p>
            <p>Advertising is configured for future use and should be reviewed based on current Google publisher policies before activation.</p>
            <p>Personalized advertising is optional and may require user consent depending on applicable law and platform requirements.</p>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
