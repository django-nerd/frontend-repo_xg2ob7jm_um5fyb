import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for contrast (doesn't block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          Modern Wealth Management
          <span className="text-slate-400">•</span>
          Fiduciary Advice
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Elevate your wealth with
          <br />
          institutional-grade strategy.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Independent investment consultants for founders, professionals, and families.
          We design diversified portfolios, plan for life goals, and protect what you build.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-slate-900 shadow backdrop-blur hover:bg-white"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}
