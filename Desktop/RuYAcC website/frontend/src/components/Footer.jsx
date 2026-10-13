import { Link } from 'react-router-dom'
import { MapPin, Youtube, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()
    const { currentLanguage } = useLanguage()
    const t = translations[currentLanguage].footer

    return (
        <footer className="footer">
            <div className="footer__glow"></div>
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">R</div>
                            <div>
                                <div className="footer__logo-name">RuYACC TV</div>
                                <div className="footer__logo-sub">Ruangwa Youth, Art & Cultural Centre</div>
                            </div>
                        </div>
                        <p className="footer__desc">
                            {t.desc}
                        </p>
                        <div className="footer__tagline">
                            <span className="gradient-text">{t.tagline}</span>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">{t.links}</h4>
                        <ul className="footer__links">
                            <li><Link to="/" className="footer__link">{translations[currentLanguage].nav.home}</Link></li>
                            <li><Link to="/about" className="footer__link">{translations[currentLanguage].nav.about}</Link></li>
                            <li><Link to="/videos" className="footer__link">{translations[currentLanguage].nav.videos}</Link></li>
                            <li><Link to="/contact" className="footer__link">{translations[currentLanguage].nav.contact}</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">{t.info}</h4>
                        <ul className="footer__info">
                            <li><MapPin size={16} /> Ruangwa, Lindi | P.O.BOX 111</li>
                            <li><Phone size={16} /> +255 712 948 270</li>
                            <li><Mail size={16} /> rruangwa@gmail.com</li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">{t.follow}</h4>
                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__youtube"
                            id="footer-youtube-link"
                        >
                            <span className="footer__yt-icon">
                                <Youtube size={20} />
                            </span>
                            <div>
                                <div className="footer__yt-name">RuYACC TV</div>
                                <div className="footer__yt-handle">@ruyaccruagwa4991</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {year} RuYACC Ruangwa Youth, Art & Cultural Centre.               {t.rights}</p>

                </div>
            </div>
        </footer>
    )
}
