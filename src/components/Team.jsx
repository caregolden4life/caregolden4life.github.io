import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TEAM } from '../constant';

const AVATARS = ['👩‍⚕️', '👩‍💼', '👩‍🔬', '👨‍⚕️'];

export default function Team() {
  const { lang, t } = useLanguage();
  const sectionRef = useScrollAnimation();

  return (
    <section className="team section" id="team" ref={sectionRef}>
      <div className="container">
        <div className="section__header animate-on-scroll">
          <h2 className="section__title">{t('teamTitle')}</h2>
          <p className="section__subtitle">{t('teamSubtitle')}</p>
        </div>

        <p className="team__desc animate-on-scroll">{t('teamDesc')}</p>

        <div className="team__grid">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="team__card animate-on-scroll"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="team__avatar">{AVATARS[i]}</div>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member[lang].role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
