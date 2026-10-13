import { useState } from 'react'
import { MapPin, Youtube, Send, User, Mail, MessageSquare, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Contact.css'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const { currentLanguage } = useLanguage()
    const t = translations[currentLanguage].contact

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        // Placeholder — backend will be added later
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    const contactCards = [
        {
            icon: <MapPin size={24} />,
            title: t.info.location.title,
            lines: t.info.location.lines,
        },
        {
            icon: <Phone size={24} />,
            title: t.info.phone.title,
            lines: t.info.phone.values,
            link: 'tel:+255712948270'
        },
        {
            icon: <Mail size={24} />,
            title: t.info.email.title,
            lines: t.info.email.values,
            link: 'mailto:rruangwa@gmail.com'
        },
        {
            icon: <Youtube size={24} />,
            title: 'YouTube Channel',
            lines: ['RuYACC TV', '@ruyaccruagwa4991'],
            link: 'https://www.youtube.com/@ruyaccruagwa4991',
            linkId: 'contact-youtube-link',
        },
    ]

    return (
        <div className="contact-page page-enter">
            <section className="page-hero">
                <div className="page-hero__orb"></div>
                <div className="container page-hero__content">
                    <div className="badge"><Mail size={16} /> {t.hero.badge}</div>
                    <h1 className="section-title">
                        {t.hero.title} <span className="gradient-text">{t.hero.title_accent}</span>
                    </h1>
                    <p className="section-subtitle">
                        {t.hero.subtitle}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-inner">
                    {/* CONTACT INFO */}
                    <div className="contact-info">
                        <h2 className="contact-info__title">{t.info.title}</h2>

                        <div className="contact-cards">
                            {contactCards.map((c, i) => (
                                <div className="contact-card glass-card" key={i}>
                                    <div className="contact-card__icon">{c.icon}</div>
                                    <div>
                                        <h3 className="contact-card__title">{c.title}</h3>
                                        {c.link ? (
                                            <a
                                                href={c.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-card__link"
                                                id={c.linkId}
                                            >
                                                {c.lines.map((l, j) => <div key={j}>{l}</div>)}
                                            </a>
                                        ) : (
                                            c.lines.map((l, j) => (
                                                <p className="contact-card__line" key={j}>{l}</p>
                                            ))
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            id="contact-visit-channel-btn"
                            style={{ marginTop: '32px' }}
                        >
                            <Youtube size={20} /> {t.info.btn}
                        </a>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="contact-form-wrap">
                        <div className="glass-card contact-form-card">
                            <h2 className="contact-form__title">{t.form.title}</h2>
                            {sent && (
                                <div className="contact-success">
                                    {t.form.success}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">{t.form.name}</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder={t.form.name_ph}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">{t.form.email}</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder={t.form.email_ph}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-subject">{t.form.subject}</label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder={t.form.subject_ph}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-message">{t.form.message}</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder={t.form.message_ph}
                                        rows={6}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" id="contact-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                    {t.form.submit} <Send size={18} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
