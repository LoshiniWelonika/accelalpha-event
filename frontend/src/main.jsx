import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// IntersectionObserver to add reveal animation to elements with .animate-on-scroll
if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  window.requestAnimationFrame(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => observer.observe(el));
  });
}
