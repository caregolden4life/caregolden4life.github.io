import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SERVICES } from '../constant';

export default function Services() {
  const { lang, t } = useLanguage();
  const sectionRef = useScrollAnimation();

  return (
    <section className="services section section--alt" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section__header animate-on-scroll">
          <h2 className="section__title">{t('servicesTitle')}</h2>
          <p className="section__subtitle">{t('servicesSubtitle')}</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="services__card animate-on-scroll"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service[lang].title}</h3>
              <p className="services__card-desc">{service[lang].desc}</p>
              <div className="services__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
