const highlights = [
  {
    icon: 'psychology',
    title: 'Gen AI Platform',
    desc: 'Witness the unveil of state-of-the-art Generative AI frameworks designed specifically for predictive logistics and demand forecasting.',
  },
  {
    icon: 'trophy',
    title: 'Success Stories',
    desc: "Deep dive into real-world implementations from the region's largest shipping giants and retail conglomerates.",
  },
  {
    icon: 'eco',
    title: 'Green Operations',
    desc: 'Learn how to decarbonize your supply chain while maintaining operational efficiency through smart logistics routing.',
  },
];

export default function Highlights() {
  return (
    <section className="py-section-padding bg-surface-bright">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <span className="bg-primary-fixed text-primary px-4 py-1.5 rounded-full font-label-bold text-label-bold uppercase mb-4 inline-block">
            Summit Highlights
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Why Attend Navigate Gulf 2024?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {highlights.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all border border-secondary/5 group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
              <p className="text-secondary font-body-md">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
