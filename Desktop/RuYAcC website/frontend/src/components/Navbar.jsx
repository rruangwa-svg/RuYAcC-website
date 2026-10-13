import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Youtube, Menu, X, Languages, Moon, Sun } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { translations } from '../translations'
import './Navbar.css'
import logo from '../assets/RUYACCLOGO.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const { currentLanguage, toggleLanguage } = useLanguage()
    const { theme, toggleTheme } = useTheme()
    const t = translations[currentLanguage].nav

    const navLinks = [
        { path: '/', label: t.home },
        { path: '/about', label: t.about },
        { path: '/videos', label: t.videos },
        { path: '/contact', label: t.contact },
    ]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menuOpen])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="RuYACC Logo" className="navbar__logo-img" />
                    <div className="navbar__logo-text">
                        <span className="navbar__logo-name">RuYACC</span>
                        <span className="navbar__logo-tagline">TV</span>
                    </div>
                </Link>

                <div className="navbar__desktop">
                    <ul className="navbar__links">
                        {navLinks.map(link => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__actions">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            className="lang-toggle"
                            onClick={toggleLanguage}
                            title={currentLanguage === 'en' ? 'Switch to Swahili' : 'Badili kwenda Kiingereza'}
                        >
                            <Languages size={18} />
                            <span>{currentLanguage === 'en' ? 'SW' : 'EN'}</span>
                        </button>
                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary navbar__cta"
                            id="navbar-youtube-btn"
                        >
                            <Youtube size={10} /> {t.watch}
                        </a>
                    </div>
                </div>

                <div className="navbar__mobile-actions">
                    <button className="theme-toggle theme-toggle--mobile" onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button className="lang-toggle lang-toggle--mobile" onClick={toggleLanguage}>
                        <span>{currentLanguage === 'en' ? 'SW' : 'EN'}</span>
                    </button>
                    <button
                        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        id="navbar-burger-btn"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <div
                className={`navbar__backdrop ${menuOpen ? 'navbar__backdrop--open' : ''}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <div className={`navbar__menu-overlay ${menuOpen ? 'navbar__menu-overlay--open' : ''}`}>
                <ul className="navbar__mobile-links">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}
                        >
                            <Youtube size={0.5} /> {t.watch}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
