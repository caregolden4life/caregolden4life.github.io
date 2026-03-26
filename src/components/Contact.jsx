import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { lang, t } = useLanguage();
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contactSend') + ' ✓');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact section section--alt" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section__header animate-on-scroll">
          <h2 className="section__title">{t('contactTitle')}</h2>
          <p className="section__subtitle">{t('contactSubtitle')}</p>
        </div>

        <div className="contact__grid">
          <form className="contact__form animate-on-scroll" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <input
                type="text"
                placeholder={t('contactName')}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <input
                  type="email"
                  placeholder={t('contactEmail')}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="contact__form-group">
                <input
                  type="tel"
                  placeholder={t('contactPhone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="contact__form-group">
              <textarea
                placeholder={t('contactMessage')}
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              {t('contactSend')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>

          <div className="contact__info animate-on-scroll">
            <div className="contact__info-card">
              <div className="contact__info-icon">📍</div>
              <div>
                <h4>{lang === 'vi' ? 'Địa chỉ' : 'Address'}</h4>
                <p>{t('contactAddress')}</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>{t('contactEmailAddr')}</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">📞</div>
              <div>
                <h4>{lang === 'vi' ? 'Điện thoại' : 'Phone'}</h4>
                <p>{t('contactPhoneNum')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
