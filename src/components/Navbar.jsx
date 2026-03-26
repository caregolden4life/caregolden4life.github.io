import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NAV_LINKS } from '../constant';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="navbar__logo">🏛️</span>
          <span className="navbar__brand-text">{t('brand')}</span>
        </a>

        <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="navbar__link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
            >
              {link[lang]}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__lang-toggle"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            aria-label="Toggle language"
            title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
          >
            <span className={`lang-flag${lang === 'vi' ? ' lang-flag--active' : ''}`}>🇻🇳</span>
            <span className="lang-separator">/</span>
            <span className={`lang-flag${lang === 'en' ? ' lang-flag--active' : ''}`}>🇬🇧</span>
          </button>

          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
