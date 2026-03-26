import { useLanguage } from '../context/LanguageContext';
import { NAV_LINKS } from '../constant';

export default function Footer() {
  const { lang, t } = useLanguage();

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">🏛️ {t('brand')}</h3>
            <p className="footer__desc">{t('footerDesc')}</p>
            <p className="footer__team">👥 {t('footerTeam')}</p>
          </div>

          <div className="footer__links">
            <h4>{t('footerQuickLinks')}</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}>
                    {link[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h4>{t('footerContact')}</h4>
            <ul>
              <li>📍 {t('contactAddress')}</li>
              <li>📧 {t('contactEmailAddr')}</li>
              <li>📞 {t('contactPhoneNum')}</li>
            </ul>
          </div>

          <div className="footer__newsletter">
            <h4>{t('footerNewsletter')}</h4>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t('footerEmailPlaceholder')} />
              <button type="submit" className="btn btn--primary btn--sm">{t('footerSubscribe')}</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
}
