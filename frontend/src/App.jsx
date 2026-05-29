import './App.css';
import { useEffect } from 'react';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import SpeakersSection from './components/SpeakersSection';
import AgendaSection from './components/AgendaSection';
import RegisterSection from './components/RegisterSection';
import FaqVenueSection from './components/FaqVenueSection';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const targetDate = new Date('October 24, 2024 09:30:00').getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const days = document.getElementById('days');
      const hours = document.getElementById('hours');
      const minutes = document.getElementById('minutes');
      const seconds = document.getElementById('seconds');

      if (days) days.innerText = d < 10 ? '0' + d : d;
      if (hours) hours.innerText = h < 10 ? '0' + h : h;
      if (minutes) minutes.innerText = m < 10 ? '0' + m : m;
      if (seconds) seconds.innerText = s < 10 ? '0' + s : s;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navigation />
      <HeroSection />
      <HighlightsSection />
      <SpeakersSection />
      <AgendaSection />
      <RegisterSection />
      <FaqVenueSection />
      <Footer />
    </>
  );
}

export default App;

