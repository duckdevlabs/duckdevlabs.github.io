function VideoModal({ videoId, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!videoId) return null

  return (
    <div
      className="modal"
      aria-hidden="false"
      role="dialog"
      aria-label="Player do YouTube"
      onClick={handleBackdropClick}
    >
      <div className="modal__dialog">
        <button className="modal__close" aria-label="Fechar vídeo" onClick={onClose}>&times;</button>
        <div className="modal__body">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="modal__backdrop"></div>
    </div>
  )
}

export default VideoModal

