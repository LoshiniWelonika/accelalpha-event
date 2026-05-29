import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-[100] bg-surface/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">
            Navigate Gulf
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#speakers">Speakers</a>
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#agenda">Agenda</a>
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#sponsors">Sponsors</a>
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#faq">FAQ</a>
          <a className="red-gradient-btn px-6 py-2.5 rounded-lg text-on-primary font-label-bold uppercase shadow-md active:scale-95 transition-transform" href="#register">
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-primary/10 px-margin-mobile py-6 flex flex-col gap-4">
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#speakers" onClick={() => setMobileOpen(false)}>Speakers</a>
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#agenda" onClick={() => setMobileOpen(false)}>Agenda</a>
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#sponsors" onClick={() => setMobileOpen(false)}>Sponsors</a>
          <a className="font-label-bold text-label-bold uppercase text-secondary hover:text-primary transition-colors" href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
          <a className="red-gradient-btn px-6 py-3 rounded-lg text-on-primary font-label-bold uppercase shadow-md text-center" href="#register" onClick={() => setMobileOpen(false)}>Register Now</a>
        </div>
      )}
    </nav>
  );
}
