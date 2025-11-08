export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-lg sm:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold sm:text-3xl">Ready to move forward with confidence?</h3>
          <p className="mt-2 text-slate-300">Book a no-cost consultation to discuss your goals and explore how we can help.</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Independent, fee-only advice</li>
            <li>Fiduciary standard of care</li>
            <li>Clear, actionable next steps</li>
          </ul>
        </div>
        <form className="rounded-2xl bg-white p-6 text-slate-900 shadow">
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none" placeholder="Jane Doe" />
          <label className="mt-4 block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none" placeholder="jane@example.com" />
          <label className="mt-4 block text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none" rows="3" placeholder="Tell us about your goals" />
          <button type="submit" className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">Request consultation</button>
          <p className="mt-2 text-center text-xs text-slate-500">We'll get back within 1 business day.</p>
        </form>
      </div>
    </section>
  );
}
