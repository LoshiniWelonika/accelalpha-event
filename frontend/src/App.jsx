import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const targetDate = new Date('October 24, 2024 09:30:00').getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const days = document.getElementById('days');
      const hours = document.getElementById('hours');
      const minutes = document.getElementById('minutes');
      const seconds = document.getElementById('seconds');

      if (days) days.innerText = d < 10 ? '0' + d : d;
      if (hours) hours.innerText = h < 10 ? '0' + h : h;
      if (minutes) minutes.innerText = m < 10 ? '0' + m : m;
      if (seconds) seconds.innerText = s < 10 ? '0' + s : s;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <nav className="sticky top-0 w-full z-[100] bg-surface/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <div className="flex items-center gap-4">
            <span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">
              Navigate Gulf
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#speakers">Speakers</a>
            <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#agenda">Agenda</a>
            <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#sponsors">Sponsors</a>
            <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#faq">FAQ</a>
            <a className="red-gradient-btn px-6 py-2.5 rounded-lg text-on-primary font-label-bold uppercase shadow-md active:scale-95 transition-transform" href="#register">
              Register Now
            </a>
          </div>

          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Logistics Hub Background"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOL-zaqOAtZFW483W8mORVEZjzjH6gQ-ah0t041P1VE4_9ByXPr-Qmmkjw-6UI6plHwfpibUkoYyAViUAXABYwY04e-cte6HcVmkwcsD-tu3myxq8yPDNRm9obruKTDc8PVx0kxzlLjwmIJdEm6K3ZUEqIvJOmYyaEyBC8kO76lXGQ7CLPZ6dZ3MpXoWT-RmypbWzhR3dhnlj8YwyYnQuUkUUZhpoTj9qHSWh7RiaHyA9MLptqNI6v9GRzipLARx9NpAxAaqzbXQ"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-reveal">
            <img
              alt="Accelalpha x Oracle Logo"
              className="h-12 w-auto mb-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCSRQY7eNC9y6k7k4QpJ2DghjmdBPmqwdNWBmShWsTztkqVTI-ueGkd6PdeWebD2lZ0snwCgSVWZcXtg5HJULfRse7gGhFJ6WebHd09DJwHcc_5tApYh12xULrbisqp-nn7Ce7qArCXgxI1szCZF735z-SQYBGZ270hh7hqbmKVSgl4lOUsiqk6TN4gKJ32Gai4APLWL6FGqzsuKfm5mSMNgZyiEb7OCpuV89TnIMmfiluL_PCV0APUGWypYKo4j-mZjrGTOg3MXc"
            />

            <h1 className="font-headline-xl text-[48px] md:text-headline-xl text-on-surface leading-tight mb-6">
              Navigate the <span className="text-primary">Complexities</span> of Gulf Supply Chain & Logistics
            </h1>

            <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-xl">
              Join industry leaders for an exclusive summit on the future of global commerce. Discover how Gen AI-powered SCM, sustainable green operations, and resilient logistics frameworks are transforming the Gulf into a global supply chain powerhouse.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a className="red-gradient-btn px-10 py-4 rounded-lg text-on-primary font-headline-md text-headline-md shadow-xl hover:shadow-primary/20 transition-all" href="#register">
                Register Now
              </a>

              <a className="border-2 border-primary/20 bg-white/50 backdrop-blur-sm px-10 py-4 rounded-lg text-primary font-headline-md text-headline-md hover:bg-white/80 transition-all" href="#agenda">
                Learn More
              </a>
            </div>

            {/* Countdown */}
            <div className="flex gap-4 md:gap-8 bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/40 w-fit">

              <div className="text-center">
                <div className="font-headline-lg text-headline-lg text-primary" id="days">24</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">Days</div>
              </div>

              <div className="text-center">
                <div className="font-headline-lg text-headline-lg text-primary" id="hours">12</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">Hours</div>
              </div>

              <div className="text-center">
                <div className="font-headline-lg text-headline-lg text-primary" id="minutes">45</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">Mins</div>
              </div>

              <div className="text-center">
                <div className="font-headline-lg text-headline-lg text-primary" id="seconds">09</div>
                <div className="font-label-bold text-label-bold text-secondary uppercase">Secs</div>
              </div>

            </div>
          </div>

        </div>
      </header>
    </>
  );
}

export default App;

