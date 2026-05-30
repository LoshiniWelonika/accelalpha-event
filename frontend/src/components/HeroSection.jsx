import { useEffect, useState } from 'react';

function HeroSection() {
  const slides = [
    {
      image: 'https://i.pinimg.com/1200x/c3/44/be/c344be92ae0d8f07c739607eb2727d82.jpg',
      alt: 'Cargo ship carrying containers at sea',
    },
    {
      image: 'https://i.pinimg.com/1200x/5a/73/de/5a73def8d77e43f61b8bd5f40d030709.jpg',
      alt: 'Container ship in a busy port',
    },
    {
      image: 'https://i.pinimg.com/1200x/ec/d0/0c/ecd00c0ee77a62ac223565b5534febfb.jpg',
      alt: 'Logistics vessel with stacked containers',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  function previousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  return (
    <header className="hero-banner relative min-h-[88vh] overflow-hidden animate-on-scroll">
      <div className="hero-banner__media">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            alt={slide.alt}
            className={`hero-banner__image ${index === activeSlide ? 'is-active' : ''}`}
            src={slide.image}
          />
        ))}
        <div className="hero-banner__overlay" />
        <div className="hero-banner__pattern" />
      </div>

      <button type="button" className="hero-banner__arrow hero-banner__arrow--left" aria-label="Previous slide" onClick={previousSlide}>
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <button type="button" className="hero-banner__arrow hero-banner__arrow--right" aria-label="Next slide" onClick={nextSlide}>
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      <div className="hero-banner__content max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="hero-banner__copy animate-reveal">
          <div className="hero-banner__eyebrow">EXCLUSIVE INVITATION</div>

          <h1 className="hero-banner__title">
            Troubled Waters:
            <span>Sailing with AI in Supply Chain</span>
          </h1>

          <div className="hero-banner__details">
            <div>Date -13th November 2024</div>
            <div>Time -09.30AM to 01.00PM</div>
            <div>Location -Marriott Resort, The Palm</div>
          </div>

          <a className="hero-banner__cta" href="#register">
            REGISTER
            <span className="material-symbols-outlined">chevron_right</span>
          </a>

          <div className="hero-banner__dots" aria-label="Hero slide indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                className={`hero-banner__dot ${index === activeSlide ? 'is-active' : ''}`}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <a href="#register" className="hero-banner__jump" aria-label="Jump to registration">
        <span className="material-symbols-outlined">keyboard_double_arrow_up</span>
      </a>
    </header>
  );
}

export default HeroSection;