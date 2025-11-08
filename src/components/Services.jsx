import { Shield, LineChart, PiggyBank, LayoutGrid } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Risk-managed portfolios',
    desc: 'Diversified, low-cost asset allocation with disciplined rebalancing and downside protection.',
  },
  {
    icon: LineChart,
    title: 'Investment strategy',
    desc: 'Evidence-based frameworks, factor tilts, and tax-aware implementation tailored to your goals.',
  },
  {
    icon: PiggyBank,
    title: 'Financial planning',
    desc: 'Cash flow, retirement, education funding, and liquidity planning with clear milestones.',
  },
  {
    icon: LayoutGrid,
    title: 'Private markets access',
    desc: 'Curated access to venture, credit, and real assets with institutional diligence.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">What we do</h2>
        <p className="mt-3 text-slate-600">Integrated advice across investments and planning to move you closer to the life you want.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
