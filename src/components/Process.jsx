import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    desc: 'We learn your goals, constraints, and risk tolerance to set a clear direction.',
  },
  {
    title: 'Design',
    desc: 'We craft a tax-aware, diversified portfolio and a plan aligned to milestones.',
  },
  {
    title: 'Implement',
    desc: 'We execute with disciplined rebalancing, cost control, and risk management.',
  },
  {
    title: 'Review',
    desc: 'We meet regularly, adapt to life changes, and keep your plan on track.',
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">How we work</h2>
          <p className="mt-3 text-slate-600">A simple, transparent process built for clarity and momentum.</p>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-500">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-xs font-medium">Step {i + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
