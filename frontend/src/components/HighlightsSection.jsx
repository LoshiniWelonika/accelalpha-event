function HighlightsSection() {
  return (
    <section id="why-attend" className="py-20 highlights-section">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <div className="highlights-pill">SUMMIT HIGHLIGHTS</div>
        <h2 className="highlights-title">Why Attend Navigate Gulf 2024?</h2>
        <p className="highlights-sub">Practical strategies, real-world case studies and AI-driven innovations to help Gulf supply chains become more resilient, efficient and sustainable.</p>
 
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="icon-badge">🧠</div>
            <h3>Gen AI Platform</h3>
            <p>Witness the unveil of state-of-the-art Generative AI frameworks designed specifically for predictive logistics and demand forecasting.</p>
          </div>

          <div className="highlight-card">
            <div className="icon-badge">🏆</div>
            <h3>Success Stories</h3>
            <p>Deep dive into real-world implementations from the region's largest shipping giants and retail conglomerates.</p>
          </div>

          <div className="highlight-card">
            <div className="icon-badge">🍃</div>
            <h3>Green Operations</h3>
            <p>Learn how to decarbonize your supply chain while maintaining operational efficiency through smart logistics routing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;