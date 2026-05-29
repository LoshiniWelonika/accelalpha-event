function SpeakersSection() {
  const speakers = [
    { name: 'Dr. Raman Kumar', role: 'CEO', company: 'Al-Futtaim Logistics', initials: 'RK' },
    { name: 'David Moono', role: 'Global Logistics Manager', company: 'Weatherford', initials: 'DM' },
    { name: 'Tamer Hamed', role: 'CIO', company: 'Dubai Cable Company', initials: 'TH' },
    { name: 'Richard Buxton', role: 'VP EMEA', company: 'Accelalpha', initials: 'RB' },
    { name: 'Joe Spear', role: 'Partner', company: 'Accelalpha', initials: 'JS' },
    { name: 'Srivatsav Sarvepalli', role: 'Regional Director Supply Chain Solutions, ECEMEA', company: 'Oracle', initials: 'SS' },
    { name: 'Rohan Chitnis', role: 'Sales Director Applications', company: 'Oracle', initials: 'RC' },
    { name: 'Ujjwal Kumar', role: 'Principal Domain Lead, ECEMEA', company: 'Oracle', initials: 'UK' },
  ];

  return (
    <section id="speakers" className="speakers-section py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="speakers-header">
          <div>
            <h2 className="speakers-title">World-Class Visionaries</h2>
            <p className="speakers-sub">Engage with 50+ speakers from across the globe, including Chief Supply Chain Officers and digital transformation pioneers.</p>
          </div>

          <div className="speakers-controls">
            <button type="button" className="speaker-nav" aria-label="Previous speakers">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button type="button" className="speaker-nav" aria-label="Next speakers">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="speakers-grid speakers-grid--featured">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="speaker-card speaker-card--featured">
              <div className="speaker-photo speaker-photo--featured">
                <div className="speaker-avatar">{speaker.initials}</div>
              </div>
              <div className="speaker-name speaker-name--featured">{speaker.name}</div>
              <div className="speaker-role speaker-role--featured">{speaker.role}</div>
              <div className="speaker-company speaker-company--featured">{speaker.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;