import { Link } from 'react-router-dom'
import { Youtube, Eye, ArrowRight, MapPin, Target, Lightbulb } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Home.css'
import logo from '../assets/RUYACCLOGO.png'

const featuredVideos = [
    { title: 'UTAMU WA NGOMA ZA KUSINI', views: '929', id: 'cUVwGr10_28' },
    { title: 'NGOMA ZA KUSINI MWA TANZANIA', views: '599', id: 'NHK9ULzWm20' },
    { title: 'Namna elimu inavyothaminiwa Ruangwa Lindi', views: '3.4k', id: 'Te5FJFW5_Cw' },
    { title: 'Ngoma ya Lingoma Kutoka Mbeya', views: '2.7k', id: 'aVgcMhb-mo4' },
    { title: 'SAMIA BAND MAFUNDI KAZINI', views: '1.5k', id: 'Hc8uaP1bs9M' },
    { title: 'NGOMA YA MUAMBO WAMATENGO', views: '2.6k', id: 'TULONRksuzA' },
]

export default function Home() {
    const { currentLanguage } = useLanguage()
    const t = translations[currentLanguage].home

    return (
        <div className="home page-enter">
            {/* HERO */}
            <section className="hero">
                <div className="hero__orb hero__orb--1"></div>
                <div className="hero__orb hero__orb--2"></div>
                <div className="hero__orb hero__orb--3"></div>
                <div className="container hero__content">
                    <div className="hero__logo-wrap">
                        <img src={logo} alt="RuYACC Logo" className="hero__logo-img" />
                    </div>
                    <div className="badge"><MapPin size={14} /> Ruangwa, Lindi, Tanzania</div>
                    <h1 className="hero__title">
                        <span className="gradient-text">{t.hero.title_main}</span>
                        <br />
                        <span className="hero__title-sub">{t.hero.title_sub}</span>
                    </h1>
                    <p className="hero__desc">
                        {t.hero.desc}
                    </p>
                    <div className="hero__tagline">{t.hero.tagline}</div>
                    <div className="hero__actions">
                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            id="hero-youtube-btn"
                        >
                            <Youtube size={20} /> {t.hero.watch_btn}
                        </a>
                        <Link to="/about" className="btn btn-outline" id="hero-about-btn">
                            {t.hero.learn_more} <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="section about-preview">
                <div className="container about-preview__inner">
                    <div className="about-preview__text">
                        <div className="badge">{t.about_preview.badge}</div>
                        <h2 className="section-title">
                            {t.about_preview.title} <span className="gradient-text">{t.about_preview.title_accent}</span>
                        </h2>
                        <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                            {t.about_preview.desc1}
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', lineHeight: '1.8' }}>
                            {t.about_preview.desc2}
                        </p>
                        <Link to="/about" className="btn btn-primary" id="home-about-link">
                            {t.about_preview.read_more} <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="about-preview__visual">
                        <div className="about-preview__card glass-card">
                            <div className="about-preview__mission">
                                <h3><Target size={20} color="var(--color-primary)" /> {t.about_preview.mission}</h3>
                                <p>{t.about_preview.mission_desc}</p>
                            </div>
                            <div className="about-preview__mission">
                                <h3><Eye size={20} color="var(--color-primary)" /> {t.about_preview.vision}</h3>
                                <p>{t.about_preview.vision_desc}</p>
                            </div>
                            <div className="about-preview__mission">
                                <h3><Lightbulb size={20} color="var(--color-primary)" /> {t.about_preview.phil}</h3>
                                <p>{t.about_preview.phil_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED VIDEOS */}
            <section className="section featured-videos">
                <div className="container">
                    <div className="section-header">
                        <div className="badge">{t.featured.badge}</div>
                        <h2 className="section-title">
                            {t.featured.title} <span className="gradient-text">{t.featured.title_accent}</span>
                        </h2>
                        <p className="section-subtitle">
                            {t.featured.subtitle}
                        </p>
                    </div>
                    <div className="videos-grid">
                        {featuredVideos.map((v) => (
                            <a
                                key={v.id}
                                href={`https://www.youtube.com/watch?v=${v.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="video-card glass-card"
                                id={`hero-video-${v.id}`}
                            >
                                <div className="video-card__thumb">
                                    <img
                                        src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                                        alt={v.title}
                                        className="video-card__img"
                                    />
                                    <div className="video-card__play"><Youtube size={40} /></div>
                                    <div className="video-card__overlay"></div>
                                </div>
                                <div className="video-card__info">
                                    <h3 className="video-card__title">{v.title}</h3>
                                    <span className="video-card__views"><Eye size={14} /> {v.views} {t.featured.views}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="featured-videos__cta">
                        <Link to="/videos" className="btn btn-outline" id="home-videos-link">
                            {t.featured.watch_all} <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-banner">
                <div className="cta-banner__glow"></div>
                <div className="container cta-banner__inner">
                    <div>
                        <h2 className="cta-banner__title">
                            {t.cta.title} <span className="gradient-text">{t.cta.title_accent}</span>
                        </h2>
                        <p className="cta-banner__desc">
                            {t.cta.desc}
                        </p>
                    </div>
                    <a
                        href="https://www.youtube.com/@ruyaccruagwa4991"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                        id="home-subscribe-btn"
                    >
                        <Youtube size={20} /> {t.cta.subscribe_btn}
                    </a>
                </div>
            </section>
        </div >
    )
}
