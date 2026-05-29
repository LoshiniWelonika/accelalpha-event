const agendaItems = [
  {
    time: '9:30 AM — 10:15 AM',
    title: 'Keynote: The Gulf Economic Bridge',
    desc: 'Exploring the strategic positioning of the GCC in global trade lanes and the roadmap to a unified digital logistics corridor.',
    side: 'left',
  },
  {
    time: '10:30 AM — 11:30 AM',
    title: 'Panel: AI in the Warehouse',
    desc: 'Real-world applications of autonomous robotics and predictive inventory management powered by Oracle Cloud.',
    side: 'right',
  },
  {
    time: '11:45 AM — 12:30 PM',
    title: 'Sustainability & Resilience',
    desc: 'Workshop on multi-modal transport optimization and reducing carbon footprint across long-haul logistics.',
    side: 'left',
  },
  {
    time: '12:30 PM — 1:00 PM',
    title: 'Networking Lunch',
    desc: 'Executive networking sessions in the VIP lounge and solution showcase tours.',
    side: 'right',
  },
];

function AgendaItem({ time, title, desc, side }) {
  const isLeft = side === 'left';
  return (
    <div className="relative mb-12 flex flex-col md:flex-row items-center justify-between w-full">
      {/* Left slot */}
      <div className={`w-full md:w-[45%] ${isLeft ? 'mb-6 md:mb-0' : 'order-2 md:order-1'}`}>
        {isLeft && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10">
            <span className="text-primary font-label-bold uppercase mb-2 block">{time}</span>
            <h4 className="font-headline-md text-headline-md mb-2">{title}</h4>
            <p className="text-secondary text-sm">{desc}</p>
          </div>
        )}
      </div>

      {/* Centre dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md -translate-x-1/2 z-10 hidden md:block" />

      {/* Right slot */}
      <div className={`w-full md:w-[45%] ${!isLeft ? 'mb-6 md:mb-0 order-1 md:order-2' : ''}`}>
        {!isLeft && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10">
            <span className="text-primary font-label-bold uppercase mb-2 block">{time}</span>
            <h4 className="font-headline-md text-headline-md mb-2">{title}</h4>
            <p className="text-secondary text-sm">{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Agenda() {
  return (
    <section className="py-section-padding" id="agenda">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">The Summit Agenda</h2>
          <p className="text-secondary font-body-lg mt-2">A strategic journey through the next decade of supply chain evolution.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />
          {agendaItems.map((item) => (
            <AgendaItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
