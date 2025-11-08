import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-slate-900" />
            <span className="font-semibold">Apex Advisory</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">Get started</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <div id="process">
          <Services />
          <Process />
        </div>
        <CTA />
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Apex Advisory. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
