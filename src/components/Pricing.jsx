import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PRICING } from '../constant';
import { useAutoScroll } from '../hooks/useAutoScroll';

export default function Pricing() {
  const { lang, t } = useLanguage();
  const sectionRef = useScrollAnimation();
  const isMobileOrTablet = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const scrollRef = useAutoScroll(isMobileOrTablet, 4000);

  return (
    <section className="pricing section section--alt" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="section__header animate-on-scroll">
          <h2 className="section__title">{t('pricingTitle')}</h2>
          <p className="section__subtitle">{t('pricingSubtitle')}</p>
        </div>

        <div className="pricing__grid" ref={scrollRef}>
          {PRICING.map((pkg, i) => {
            const data = pkg[lang];
            return (
              <div
                key={i}
                className={`pricing__card animate-on-scroll${pkg.featured ? ' pricing__card--featured' : ''}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {data.badge && <div className="pricing__badge">{data.badge}</div>}
                <h3 className="pricing__name">{data.name}</h3>
                <div className="pricing__price">
                  <span className="pricing__amount">{data.price}</span>
                  <span className="pricing__unit">{data.unit}</span>
                </div>
                <ul className="pricing__features">
                  {data.features.map((feature, j) => (
                    <li key={j} className="pricing__feature">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${pkg.featured ? 'btn--primary' : 'btn--outline-dark'}`}>
                  {lang === 'vi' ? 'Chọn gói này' : 'Choose Plan'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
