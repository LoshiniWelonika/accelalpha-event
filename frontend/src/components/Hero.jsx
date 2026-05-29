import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('October 24, 2024 09:30:00').getTime();

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    s: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function pad(n) {
  return n < 10 ? '0' + n : String(n);
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Aerial view of a modern logistics port representing Gulf supply chain"
          className="w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOL-zaqOAtZFW483W8mORVEZjzjH6gQ-ah0t041P1VE4_9ByXPr-Qmmkjw-6UI6plHwfpibUkoYyAViUAXABYwY04e-cte6HcVmkwcsD-tu3myxq8yPDNRm9obruKTDc8PVx0kxzlLjwmIJdEm6K3ZUEqIvJOmYyaEyBC8kO76lXGQ7CLPZ6dZ3MpXoWT-RmypbWzhR3dhnlj8YwyYnQuUkUUZhpoTj9qHSWh7RiaHyA9MLptqNI6v9GRzipLARx9NpAxAaqzbXQ"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* Left */}
        <div className="animate-reveal">
          <img
            alt="Accelalpha x Oracle Logo"
            className="h-12 w-auto mb-8"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCSRQY7eNC9y6k7k4QpJ2DghjmdBPmqwdNWBmShWsTztkqVTI-ueGkd6PdeWebD2lZ0snwCgSVWZcXtg5HJULfRse7gGhFJ6WebHd09DJwHcc_5tApYh12xULrbisqp-nn7Ce7qArCXgxI1szCZF735z-SQYBGZ270hh7hqbmKVSgl4lOUsiqk6TN4gKJ32Gai4APLWL6FGqzsuKfm5mSMNgZyiEb7OCpuV89TnIMmfiluL_PCV0APUGWypYKo4j-mZjrGTOg3MXc"
          />

          <h1 className="font-headline-xl text-[40px] md:text-headline-xl text-on-surface leading-tight mb-6">
            Navigate the <span className="text-primary">Complexities</span> of Gulf Supply Chain &amp; Logistics
          </h1>

          <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-xl">
            Join industry leaders for an exclusive summit on the future of global commerce. Discover how Gen AI-powered SCM, sustainable green operations, and resilient logistics frameworks are transforming the Gulf into a global supply chain powerhouse.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              className="red-gradient-btn px-10 py-4 rounded-lg text-on-primary font-headline-md shadow-xl hover:opacity-90 transition-all"
              href="#register"
            >
              Register Now
            </a>
            <a
              className="border-2 border-primary/20 bg-white/50 backdrop-blur-sm px-10 py-4 rounded-lg text-primary font-headline-md hover:bg-white/80 transition-all"
              href="#agenda"
            >
              Learn More
            </a>
          </div>

          {/* Countdown */}
          <div className="flex gap-4 md:gap-8 bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/40 w-fit">
            {[
              { label: 'Days', value: pad(time.d) },
              { label: 'Hours', value: pad(time.h) },
              { label: 'Mins', value: pad(time.m) },
              { label: 'Secs', value: pad(time.s) },
            ].map(({ label, value }) => (
              <div key={label} className="text-center min-w-[48px]">
                <div className="font-headline-lg text-headline-lg text-primary tabular-nums">{value}</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Event Info Card */}
        <div className="hidden lg:block animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="relative glass-card p-8 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined" style={{ fontSize: '120px' }}>hub</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary-fixed text-primary p-2 rounded-lg material-symbols-outlined">event</span>
                <span className="font-headline-md text-headline-md">October 24, 2024</span>
              </div>
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-primary-fixed text-primary p-2 rounded-lg material-symbols-outlined">location_on</span>
                <span className="font-headline-md text-headline-md">Dubai World Trade Centre</span>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="font-label-bold text-label-bold uppercase text-primary mb-2">Key Theme</h3>
                <p className="font-body-md text-body-md text-on-surface">
                  Digital Maturity &amp; Resilient Connectivity in the Gulf Economic Zone.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-primary/10 pt-8">
                {[
                  { value: '1200+', label: 'Delegates' },
                  { value: '50+', label: 'Speakers' },
                  { value: '45+', label: 'Countries' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-headline-md text-headline-md text-primary">{value}</div>
                    <div className="font-label-bold text-label-bold text-secondary uppercase text-[11px]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
