import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../constant';

export default function Hero() {
  const { t } = useLanguage();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${IMAGES.heroBg})`, transform: `translateY(${offset * 0.3}px)` }}
      />
      <div className="hero__overlay" />

      <div className="hero__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__badge">{t('competitionBadge')}</div>
        <h1 className="hero__title">
          {t('heroTitle').split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p className="hero__subtitle">{t('heroSubtitle')}</p>
        <div className="hero__cta-group">
          <button className="btn btn--primary" onClick={() => handleScroll('about')}>
            {t('heroCta')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
          <button className="btn btn--outline" onClick={() => handleScroll('contact')}>
            {t('heroCtaSecondary')}
          </button>
        </div>
      </div>

      <div className="hero__scroll-indicator" onClick={() => handleScroll('about')}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
