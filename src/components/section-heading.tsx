type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600">{description}</p> : null}
    </div>
  );
}
