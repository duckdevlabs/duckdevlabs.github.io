import { useTranslation } from 'react-i18next'

const VIDEO_IDS = ['dQw4w9WgXcQ', 'M7lc1UVf-VE', 'aqz-KE-bpKQ']

function Conteudo({ onScroll, openVideo }) {
  const { t } = useTranslation()
  const videoTitles = t('content.videos', { returnObjects: true })

  const videos = VIDEO_IDS.map((id, i) => ({
    id,
    title: videoTitles[i],
  }))

  return (
    <section id="conteudo" className="section">
      <div className="container">
        <h2>{t('content.title')}</h2>
        <p className="section-lead">{t('content.lead')}</p>
        <div className="video-grid" role="list">
          {videos.map((video, index) => (
            <button
              key={video.id}
              className="video-card"
              role="listitem"
              onClick={() => openVideo(video.id)}
              aria-label={t('content.watchVideo', { n: index + 1 })}
            >
              <span className="video-card__title">{video.title}</span>
            </button>
          ))}
        </div>
        <div className="cta-box">
          <a className="btn btn--ghost" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">{t('content.cta')}</a>
        </div>
      </div>
    </section>
  )
}

export default Conteudo
