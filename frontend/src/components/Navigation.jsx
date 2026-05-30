import accelalphaLogo from "../assets/accelalpha.png";
import oracleLogo from "../assets/oracle.png";

function Navigation() {
  return (
    <nav className="sticky top-0 w-full z-[100] bg-surface/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={accelalphaLogo} alt="Accelalpha" className="h-8 md:h-10 object-contain" />
            <span className="w-px h-8 md:h-10 bg-primary/20" aria-hidden="true" />
            <img src={oracleLogo} alt="Oracle" className="h-12 md:h-14 object-contain" />
          </div>
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
  );
}

export default Navigation;