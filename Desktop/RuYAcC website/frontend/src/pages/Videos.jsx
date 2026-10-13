import { useState } from 'react'
import { Search, Youtube, Eye, Calendar, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Videos.css'

const allVideos = [
    { id: 'cUVwGr10_28', title: 'UTAMU WA NGOMA ZA KUSINI', views: '929', timeKey: 'month', timeVal: '', duration: '—' },
    { id: 'NHK9ULzWm20', title: 'NGOMA ZA KUSINI MWA TANZANIA', views: '599', timeKey: 'month', timeVal: '', duration: '—' },
    { id: 'Te5FJFW5_Cw', title: 'Namna elimu inavyothaminiwa Ruangwa Lindi', views: '3.4k', timeKey: 'months', timeVal: '2', duration: '—' },
    { id: 'aVgcMhb-mo4', title: 'Ngoma ya Lingoma Kutoka Mbeya', views: '2.7k', timeKey: 'months', timeVal: '6', duration: '—' },
    { id: 'Hc8uaP1bs9M', title: 'SAMIA BAND MAFUNDI KAZINI', views: '1.5k', timeKey: 'months', timeVal: '7', duration: '—' },
    { id: 'TULONRksuzA', title: 'NGOMA YA MUAMBO WAMATENGO', views: '2.6k', timeKey: 'months', timeVal: '9', duration: '—' },
    { id: '9F0_RxeDO6E', title: 'MKWAJU NGOMA', views: '159', timeKey: 'weeks', timeVal: '3', duration: '—' },
]

export default function Videos() {
    const [search, setSearch] = useState('')
    const { currentLanguage } = useLanguage()
    const t = translations[currentLanguage].videos

    const filtered = allVideos.filter(v =>
        v.title.toLowerCase().includes(search.toLowerCase())
    )

    const formatTime = (v) => {
        const text = t.meta.time[v.timeKey]
        if (v.timeVal) {
            return `${v.timeVal} ${text}`
        }
        return text
    }

    return (
        <div className="videos-page page-enter">
            <section className="page-hero">
                <div className="page-hero__orb"></div>
                <div className="container page-hero__content">
                    <div className="badge"><Video size={16} /> {t.hero.badge}</div>
                    <h1 className="section-title">
                        {t.hero.title} <span className="gradient-text">{t.hero.title_accent}</span>
                    </h1>
                    <p className="section-subtitle">
                        {t.hero.subtitle}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* SEARCH */}
                    <div className="videos-search">
                        <input
                            type="text"
                            placeholder={t.search.placeholder}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="videos-search__input"
                            id="videos-search-input"
                        />
                        <span className="videos-search__count">{filtered.length} {t.search.found}</span>
                    </div>

                    {/* GRID */}
                    <div className="videos-page-grid">
                        {filtered.map((v, i) => (
                            <a
                                key={i}
                                href={`https://www.youtube.com/watch?v=${v.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vcard glass-card"
                                id={`video-card-${i}`}
                            >
                                <div className="vcard__thumb">
                                    <img
                                        src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                                        alt={v.title}
                                        className="vcard__img"
                                    />
                                    <div className="vcard__play"><Youtube size={44} /></div>
                                    {v.duration !== '—' && (
                                        <span className="vcard__duration">{v.duration}</span>
                                    )}
                                    <div className="vcard__overlay"></div>
                                </div>
                                <div className="vcard__info">
                                    <h3 className="vcard__title">{v.title}</h3>
                                    <div className="vcard__meta">
                                        <span><Eye size={12} /> {v.views} {t.meta.views}</span>
                                        <span><Calendar size={12} /> {formatTime(v)}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="videos-empty">
                            <p>{t.search.no_results}</p>
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <a
                            href="https://www.youtube.com/@ruyaccruagwa4991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            id="videos-channel-btn"
                        >
                            <Youtube size={20} /> {t.btn}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
