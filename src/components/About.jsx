import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { STATS, IMAGES } from '../constant';

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useScrollAnimation();

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section__header animate-on-scroll">
          <h2 className="section__title">{t('aboutTitle')}</h2>
          <p className="section__subtitle">{t('slogan')}</p>
        </div>

        <div className="about__grid">
          <div className="about__content animate-on-scroll">
            <p className="about__text">{t('aboutP1')}</p>
            <p className="about__text">{t('aboutP2')}</p>
            <p className="about__text">{t('aboutP3')}</p>
          </div>

          <div className="about__image animate-on-scroll">
            <img src={IMAGES.careService} alt="Elderly care service" loading="lazy" />
          </div>
        </div>

        <div className="about__cards">
          <div className="about__card animate-on-scroll">
            <div className="about__card-icon">🔭</div>
            <h3>{t('aboutVision')}</h3>
            <p>{t('aboutVisionText')}</p>
          </div>
          <div className="about__card animate-on-scroll">
            <div className="about__card-icon">🎯</div>
            <h3>{t('aboutMission')}</h3>
            <p>{t('aboutMissionText')}</p>
          </div>
        </div>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat }) {
  const { lang } = useLanguage();
  const countRef = useCountUp(stat.value);

  return (
    <div className="about__stat animate-on-scroll">
      <div className="about__stat-number">
        <span ref={countRef}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="about__stat-label">{stat[lang]}</p>
    </div>
  );
}
