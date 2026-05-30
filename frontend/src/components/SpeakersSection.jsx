function SpeakersSection() {
  const speakers = [
    { name: 'Dr. Raman Kumar', role: 'CEO', company: 'Al-Futtaim Logistics', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/3.png' },
    { name: 'David Moono', role: 'Global Logistics Manager', company: 'Weatherford', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/1.png' },
    { name: 'Tamer Hamed', role: 'CIO', company: 'Dubai Cable Company', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/5.png' },
    { name: 'Richard Buxton', role: 'VP EMEA', company: 'Accelalpha', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/4.png' },
    { name: 'Joe Spear', role: 'Partner', company: 'Accelalpha', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/2.png' },
    { name: 'Srivatsav Sarvepalli', role: 'Regional Director Supply Chain Solutions, ECEMEA', company: 'Oracle', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/6.png' },
    { name: 'Rohan Chitnis', role: 'Sales Director Applications', company: 'Oracle', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/8.png' },
    { name: 'Ujjwal Kumar', role: 'Principal Domain Lead, ECEMEA', company: 'Oracle', profile: 'https://cogentsolutions.ae/events/upcoming-physical-events/accelalpha-oracle/images/speakers/7.png' },
  ];

  return (
    <section id="speakers" className="speakers-section py-20 animate-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="speakers-header">
          <div>
            <h2 className="speakers-title">World-Class Visionaries</h2>
          </div>
        </div>

        <div className="speakers-grid speakers-grid--featured">
          {speakers.map((speaker) => {
            // Normalize profile URL in case it contains extra characters
            const profileRaw = speaker.profile || '';
            const matched = profileRaw.match(/https?:\/\/[^\s"'<>]+\.(?:png|jpe?g|webp|svg)/i);
            const profileUrl = matched ? matched[0] : null;

            // Fallback initials from name
            const initials = speaker.name.split(' ').map((n) => n[0]).slice(0,2).join('').toUpperCase();

            return (
              <div key={speaker.name} className="speaker-card speaker-card--featured">
                <div className="speaker-photo speaker-photo--featured">
                  {profileUrl ? (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img src={profileUrl} alt={`Profile picture of ${speaker.name}`} className="speaker-avatar-img" />
                  ) : (
                    <div className="speaker-avatar">{initials}</div>
                  )}
                </div>
                <div className="speaker-name speaker-name--featured">{speaker.name}</div>
                <div className="speaker-role speaker-role--featured">{speaker.role}</div>
                <div className="speaker-company speaker-company--featured">{speaker.company}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;