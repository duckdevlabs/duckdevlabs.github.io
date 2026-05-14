import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
// import Conteudo from './components/Conteudo'
import Agenda from './components/Agenda'
import Setup from './components/Setup'
import Contato from './components/Contato'
import Footer from './components/Footer'
// import VideoModal from './components/VideoModal'

function App() {
  const { i18n } = useTranslation()
  const [isNavOpen, setIsNavOpen] = useState(false)
  // const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    const lang = i18n.language?.startsWith('pt') ? 'pt-br' : 'en'
    document.documentElement.lang = lang
  }, [i18n.language])

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsNavOpen(false)
    }
  }

  // const openVideo = (videoId) => {
  //   setSelectedVideo(videoId)
  // }

  // const closeVideo = () => {
  //   setSelectedVideo(null)
  // }

  return (
    <>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} onScroll={handleScroll} />
      <main id="top">
        <Hero onScroll={handleScroll} />
        <Sobre />
        <Servicos onScroll={handleScroll} />
        {/* <Conteudo onScroll={handleScroll} openVideo={openVideo} /> */}
        <Agenda />
        <Setup />
        <Contato />
      </main>
      <Footer />
      {/* <VideoModal videoId={selectedVideo} onClose={closeVideo} /> */}
    </>
  )
}

export default App

