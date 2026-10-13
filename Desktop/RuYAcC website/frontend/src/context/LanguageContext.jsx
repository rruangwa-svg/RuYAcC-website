import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        return localStorage.getItem('ruyacc_lang') || 'en'
    })

    useEffect(() => {
        localStorage.setItem('ruyacc_lang', currentLanguage)
    }, [currentLanguage])

    const toggleLanguage = () => {
        setCurrentLanguage(prev => (prev === 'en' ? 'sw' : 'en'))
    }

    const setLanguage = (lang) => {
        if (lang === 'en' || lang === 'sw') {
            setCurrentLanguage(lang)
        }
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
