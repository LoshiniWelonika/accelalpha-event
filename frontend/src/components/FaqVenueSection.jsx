function FaqVenueSection() {
  const faqs = [
    {
      question: 'Who should attend this summit?',
      answer:
        'CSOs, Supply Chain Directors, Logistics Managers, and Digital Transformation leads from the retail, manufacturing, and shipping industries.',
      open: true,
    },
    {
      question: 'Is there a hybrid attendance option?',
      answer: 'Yes. Hybrid access options are available for selected delegates and partner sessions.',
      open: false,
    },
    {
      question: 'How can I apply for a speaking slot?',
      answer: 'Use the registration form and share your topic, role, and company details for review.',
      open: false,
    },
  ];

  return (
    <section id="faq" className="faq-venue-section py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop faq-venue-grid">
        <div>
          <h2 className="faq-venue-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item" open={faq.open}>
                <summary className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon material-symbols-outlined">expand_more</span>
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div>
          <h2 className="faq-venue-title">Venue Location</h2>

          <div className="venue-card">
            <img
              alt="Dubai skyline"
              className="venue-image"
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="venue-overlay">
              <div className="venue-icon-wrap">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <div className="venue-name">Mariott Resort, The palm</div>
                <div className="venue-address">Dubai, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqVenueSection;