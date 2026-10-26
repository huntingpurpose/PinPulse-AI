import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

export default function AiGeneratorOverviewPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="AI generator"
            title="A creator-first generator for titles, descriptions, prompts, and drafts"
            description="The generator is designed to support SEO, board alignment, and strong Pinterest visual concepts without leaving the platform."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Input fields</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Topic or keyword</li>
                <li>Target audience</li>
                <li>Board category</li>
                <li>Language, tone, and format</li>
                <li>Optional destination URL</li>
                <li>Variation count</li>
              </ul>
            </Card>
            <Card>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Outputs</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>SEO title and description</li>
                <li>Keyword tags and image prompt</li>
                <li>CTA, alternate titles, and board suggestion</li>
                <li>Editable built-in preview and save workflow</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
