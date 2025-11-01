import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

// Verificar se o root existe
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = `
    <div style="padding: 40px; text-align: center; color: #eceff4; font-family: system-ui; background: #0f1012; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h1 style="color: #f5b000;">Erro: Elemento root não encontrado</h1>
      <p style="color: #a6adbb;">Por favor, verifique se o HTML está correto.</p>
    </div>
  `
} else {
  // Renderizar com error boundary
  try {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Failed to render React app:', error)
    rootElement.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #eceff4; font-family: system-ui;">
        <h1 style="color: #f5b000;">Erro ao carregar a aplicação</h1>
        <p style="color: #a6adbb;">Erro: ${error.message}</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #f5b000; color: #111; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; margin-top: 20px;">
          Recarregar
        </button>
      </div>
    `
  }
}

