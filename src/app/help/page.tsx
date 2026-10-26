import PageShell from '@/components/page-shell';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';

const helpArticles = [
  'How do I choose the right board category?',
  'What does demo mode include?',
  'How are credits deducted before generation?',
  'Can I connect a real Pinterest account later?'
];

export default function HelpPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="Help center"
            title="Support, product answers, and best practices"
            description="This section is designed for a future knowledge base and support experience."
          />

          <div className="space-y-4">
            {helpArticles.map((article) => (
              <Card key={article} className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{article}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
