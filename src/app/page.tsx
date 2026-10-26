import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { faqItems, generatorExample, plans } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <section className="section-shell pt-16">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700">
              AI-powered Pinterest workflow
            </span>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              Turn ideas into pin-ready content that feels crafted for growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Create titles, descriptions, image prompts, and publishing plans for Pinterest in one place. Build a consistent content engine without bouncing between tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/signup" variant="primary">Start free</Button>
              <Button href="/ai-generator" variant="secondary">Try the generator</Button>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-slate-600">
              <span>✓ No credit card required</span>
              <span>✓ Demo mode available</span>
            </div>
          </div>

          <div className="relative">
            <div className="surface-card relative overflow-hidden p-5">
              <div className="gradient-bar absolute inset-x-0 top-0 h-2" />
              <div className="rounded-[28px] bg-slate-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Pin idea</p>
                    <h3 className="mt-2 text-xl font-black text-slate-900">{generatorExample.title}</h3>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">AI draft</span>
                </div>
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft">
                  <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
                    <div className="overflow-hidden rounded-[24px] bg-gradient-to-br from-rose-200 via-rose-100 to-white p-4">
                      <div className="aspect-[4/5] rounded-[22px] bg-white/80 p-4 shadow-inner">
                        <div className="mb-4 h-24 rounded-2xl bg-gradient-to-br from-brand-500 via-brand-400 to-rose-200" />
                        <div className="space-y-2">
                          <div className="h-3 w-3/4 rounded-full bg-slate-300" />
                          <div className="h-3 w-full rounded-full bg-slate-200" />
                          <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm text-slate-600">{generatorExample.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {generatorExample.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="rounded-2xl bg-brand-50 p-3 text-sm font-medium text-brand-800">
                        {generatorExample.cta}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="Why creators use it"
            title="Everything needed to plan and publish Pinterest content in one workspace"
            description="PinPulse AI helps you move from raw inspiration to polished assets without clunky workflows and disconnected tools."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['✨', 'Smart titles', 'Create SEO-friendly titles that match your audience and category intent.'],
              ['📝', 'Description builder', 'Generate readable descriptions with keywords, CTAs, and polished language.'],
              ['🖼️', 'Image concepts', 'Translate a content idea into a high-converting prompt ready for image generation.'],
              ['📤', 'Publishing flow', 'Review, save, and publish directly to Pinterest inside the dashboard.']
            ].map(([emoji, title, text]) => (
              <Card key={title} className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg text-brand-700">{emoji}</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <SectionHeading
            eyebrow="Simple pricing"
            title="Plans built for different content rhythms"
            description="Start with a free demo and move to a creator-friendly plan once you want more variations, boards, and publishing support."
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {plans.map((plan) => (
              <Card key={plan.name} className={`${plan.highlight ? 'border-brand-200 bg-brand-50 shadow-soft' : ''}`}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  {plan.highlight ? <span className="rounded-full bg-brand-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">Popular</span> : null}
                </div>
                <div className="mb-4 flex items-end gap-2">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-500">/mo</span>
                </div>
                <p className="mb-5 text-sm text-slate-600">{plan.description}</p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 text-brand-700">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/pricing" variant={plan.highlight ? 'primary' : 'secondary'} className="w-full">Choose plan</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Everything creators ask before trying it"
            align="center"
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="rounded-[32px] bg-slate-950 px-6 py-10 text-white md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-200">Launch faster</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Build a more consistent Pinterest content engine.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/signup" variant="primary" className="bg-white text-slate-900 hover:bg-slate-200">Create account</Button>
                <Button href="/features" variant="secondary" className="border-slate-700 bg-slate-900 text-white hover:border-brand-200 hover:text-brand-100">Explore features</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
