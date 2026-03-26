import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IMAGES } from '../constant';

export default function Facility() {
  const { t } = useLanguage();
  const sectionRef = useScrollAnimation();

  const features = [
    { icon: '🌿', text: t('facilityItem1') },
    { icon: '🏥', text: t('facilityItem2') },
    { icon: '🏋️', text: t('facilityItem3') },
    { icon: '🏨', text: t('facilityItem4') },
  ];

  return (
    <section className="facility section" id="facility" ref={sectionRef}>
      <div className="container">
        <div className="section__header animate-on-scroll">
          <h2 className="section__title">{t('facilityTitle')}</h2>
          <p className="section__subtitle">{t('facilitySubtitle')}</p>
        </div>

        <div className="facility__content">
          <div className="facility__gallery animate-on-scroll">
            <div className="facility__gallery-main">
              <img src={IMAGES.facility} alt="Care center facility" loading="lazy" />
            </div>
            <div className="facility__gallery-grid">
              <div className="facility__gallery-item">
                <img src={IMAGES.activities} alt="Activities" loading="lazy" />
              </div>
              <div className="facility__gallery-item">
                <img src={IMAGES.roomInterior} alt="Room interior" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="facility__info animate-on-scroll">
            <p className="facility__desc">{t('facilityDesc')}</p>
            <ul className="facility__features">
              {features.map((f, i) => (
                <li key={i} className="facility__feature">
                  <span className="facility__feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
