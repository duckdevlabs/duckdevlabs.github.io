import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container">
        <p>{t('footer.copy', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}

export default Footer
