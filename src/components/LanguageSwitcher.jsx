import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="lang-switcher" role="radiogroup" aria-label="Language">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          role="radio"
          aria-checked={i18n.language?.startsWith(code)}
          className={`lang-switcher__btn${i18n.language?.startsWith(code) ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
