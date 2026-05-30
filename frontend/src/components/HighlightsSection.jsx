function HighlightsSection() {
  return (
    <section id="why-attend" className="py-20 highlights-section animate-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="highlights-pill">Top 3 Reasons to Attend</div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ol className="mt-8 space-y-10">

              <li className="flex gap-6">
                <div>
                  <h3 className="font-extrabold text-2xl">Oracle’s Gen AI SCM Platform Unveiled</h3>
                  <p className="text-base text-gray-600">Explore how Oracle’s AI powered SCM innovations offer predictive analytics, automation, improved visibility, and sustainability into Supply Chains such as yours.</p>
                </div>
              </li>

              <li className="flex gap-6">
                <div>
                  <h3 className="font-extrabold text-2xl">Customer Success Stories That Deliver Results</h3>
                  <p className="text-base text-gray-600">Hear how companies partnered with Oracle and Accelalpha to optimize logistics flows, cut costs, and improve resilience while reducing their environmental impact through smarter inventory management and automation.</p>
                </div>
              </li>

              <li className="flex gap-6">
                <div>
                  <h3 className="font-extrabold text-2xl">Practical Solutions for Green and Resilient Operations</h3>
                  <p className="text-base text-gray-600">Learn how to navigate geopolitical risks, last-mile delivery challenges, and integrate eco-friendly practices - keeping operations agile and competitive in an evolving Gulf market.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img src="https://i.pinimg.com/1200x/af/85/ae/af85ae9b3d3ede3ceb956c43b31dd7e5.jpg" alt="Highlight visual" className="hero-image rounded-2xl shadow-lg w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;