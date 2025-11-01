import { useState } from 'react'

function Agenda() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Obrigado! Em breve enviaremos novidades.')
    setEmail('')
  }

  return (
    <section id="agenda" className="section section--alt">
      <div className="container grid-2">
        <div>
          <h2>Agenda de Meetups</h2>
          <p>Organizamos encontros técnicos com talks, demos e networking. Cadastre‑se para receber a próxima data.</p>
          <form id="newsletter" className="form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">Seu e-mail</label>
            <input 
              id="email" 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button className="btn btn--primary" type="submit">Quero participar</button>
            {status && (
              <small className="muted" id="form-status" role="status" aria-live="polite">{status}</small>
            )}
          </form>
        </div>
        <div className="card card--retro">
          <h3>Próximos temas</h3>
          <ul className="bullets">
            <li>Micro‑frontends no mobile</li>
            <li>Observabilidade simples e efetiva</li>
            <li>Performance: do profiler à pull request</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Agenda

