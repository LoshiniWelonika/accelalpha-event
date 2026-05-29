function AgendaSection() {
  const agenda = [
    { time: '9:30 AM - 10:00 AM', title: 'Registrations' },
    { time: '10:00 AM - 10:10 AM', title: 'Welcome Note', speaker: 'Richard Buxton (VP EMEA, Accelalpha)\nRohan Chitnis (Sales Director Applications, Oracle)' },
    { time: '10:10 AM - 10:40 AM', title: 'Industry Keynote (Outlook & Challenges on Digital Logistics & Supply Chain)', speaker: 'Srivatsav Sarvepalli (Regional Director, Supply Chain Solutions, ECEMEA, Oracle)' },
    { time: '10:40 AM - 11:10 AM', title: 'A Practical Guide to Successful Implementation', speaker: 'Joe Spear (Partner, Accelalpha)' },
    { time: '11:10 AM - 11:30 AM', title: 'The Resilient Supply Chain & SCM Innovations', speaker: 'Ujjwal Kumar (Principal Domain Lead, ECEMEA, Oracle)' },
    { time: '11:30 AM - 11:50 AM', title: 'Coffee Break' },
    { time: '11:50 AM - 12:10 PM', title: 'Insights from Digital Evolution', speaker: 'Dr. Raman Kumar (CEO, Al-Futtaim Logistics)' },
    { time: '12:10 PM - 12:40 PM', title: 'Strategies in Action: Insights from Industry Leaders Panel Discussion with Weatherford & Ducab', speaker: 'David Moono (Global Logistics Manager, Weatherford)\nTamer Hamed (CIO, Dubai Cable Company)' },
    { time: '12:40 PM - 01:00 PM', title: 'Q&A and Closing Remarks', speaker: 'Accelalpha' },
    { time: '01:00 PM - Onwards', title: 'Lunch & Networking' },
  ];

  return (
    <section id="agenda" className="py-20 bg-white agenda-section">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-md text-headline-md mb-2">The Summit Agenda</h2>
        <p className="text-secondary mb-8">A strategic journey through the next decade of supply chain evolution.</p>

        <div className="timeline-container">
          <div className="timeline-line" />
          {agenda.map((item, index) => (
            <div key={item.time} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-title">{item.title}</div>
                {item.speaker && <div className="timeline-speaker">{item.speaker.split('\n').map((line) => <div key={line}>{line}</div>)}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgendaSection;