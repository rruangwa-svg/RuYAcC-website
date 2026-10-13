import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './About.css'
import logo from '../assets/RUYACCLOGO.png'
import profile from '../assets/profile.png'
import { Target, Eye, Palette, Theater, Music, BookOpen, Smartphone, Users, DollarSign, Lightbulb, Youtube } from 'lucide-react'

export default function About() {
    const { currentLanguage } = useLanguage()
    const t = translations[currentLanguage].about

    const objectiveIcons = [
        <Palette size={32} />,
        <Theater size={32} />,
        <Music size={32} />,
        <BookOpen size={32} />,
        <Smartphone size={32} />,
        <Users size={32} />,
        <DollarSign size={32} />,
        <Lightbulb size={32} />
    ]

    return (
        <div className="about page-enter">
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="page-hero__orb"></div>
                <div className="container page-hero__content">
                    <div className="badge">{t.hero.badge}</div>
                    <h1 className="section-title">
                        {t.hero.title} <span className="gradient-text">{t.hero.title_accent}</span>
                    </h1>
                    <p className="section-subtitle">
                        {t.hero.subtitle}
                    </p>
                </div>
            </section>

            {/* MAIN DESCRIPTION */}
            <section className="section">
                <div className="container">
                    <div className="about-main glass-card">
                        <div className="about-main__header">
                            <img src={logo} alt="RuYACC Logo" className="about-main__logo-img" />
                            <div>
                                <h2 className="about-main__name">RuYACC TV</h2>
                                <p className="about-main__handle">@ruyaccruagwa4991</p>
                            </div>
                        </div>
                        <p className="about-main__text">
                            <strong>RuYACC</strong> {t.main.text1}
                        </p>
                        <p className="about-main__text">
                            {t.main.text2}
                        </p>
                        <p className="about-main__text">
                            {t.main.text3}
                        </p>
                        <div className="about-main__quote">
                            <span className="gradient-text">{t.main.tagline}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="section mission-vision">
                <div className="container mission-vision__grid">
                    <div className="glass-card mission-card">
                        <div className="mission-card__badge"><Target size={18} /> {t.mission.badge}</div>
                        <p className="mission-card__text">
                            {t.mission.text}
                        </p>
                    </div>
                    <div className="glass-card vision-card">
                        <div className="mission-card__badge"><Eye size={18} /> {t.vision.badge}</div>
                        <p className="mission-card__text">
                            {t.vision.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* FOUNDER'S INTENT */}
            <section className="section founder-intent">
                <div className="container">
                    <div className="founder-intent__inner glass-card">
                        <div className="founder-intent__visual">
                            <div className="founder-img-wrapper">
                                <img src={profile} alt="Hussein Mkamballah" className="founder-img" />
                                <div className="founder-badge">{t.founder.badge}</div>
                            </div>
                            <h3 className="founder-name">Hussein Mkamballah</h3>
                        </div>
                        <div className="founder-intent__text">
                            <h2 className="section-title">{t.founder.title} <span className="gradient-text">{t.founder.title_accent}</span></h2>
                            <p className="founder-intro">
                                {t.founder.intro}
                            </p>
                            <ul className="founder-list">
                                {t.founder.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIFIC OBJECTIVES */}
            <section className="section objectives">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '48px' }}>
                        <div className="badge">{t.objectives.title} {t.objectives.title_accent}</div>
                        <h2 className="section-title">
                            {currentLanguage === 'en' ? 'Our' : 'Malengo'} <span className="gradient-text">{t.objectives.title_accent}</span>
                        </h2>
                    </div>
                    <div className="objectives-grid">
                        {t.objectives.items.map((obj, i) => (
                            <div className="objective-card glass-card" key={i}>
                                <div className="objective-icon">{objectiveIcons[i]}</div>
                                <h3 className="objective-title">{obj.title}</h3>
                                <p className="objective-desc">{obj.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHANNEL INFO */}
            <section className="section channel-info">
                <div className="container">
                    <div className="channel-info__inner">
                        <div className="badge">{t.channel.title} {t.channel.title_accent}</div>
                        <h2 className="section-title">
                            {t.channel.title} <span className="gradient-text">{t.channel.title_accent}</span>
                        </h2>
                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            id="about-youtube-btn"
                            style={{ marginTop: '40px' }}
                        >
                            <Youtube size={20} /> {t.channel.btn}
                        </a>
                    </div>
                </div>
            </section>
        </div >
    )
}
