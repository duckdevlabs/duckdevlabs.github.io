# DuckDevLabs — Site React

Site oficial do DuckDevLabs construído com React e Vite.

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ (recomendado: v20+)
- npm ou yarn

### Setup Inicial

```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo desenvolvimento
npm run dev
```

O servidor iniciará automaticamente em **<http://localhost:5173>**

### Comandos Disponíveis

```bash
# Desenvolvimento (hot reload ativado)
npm run dev

# Build para produção
npm run build

# Preview do build de produção localmente
npm run preview
```

> 💡 **Dica**: O Vite usa Hot Module Replacement (HMR), então as alterações no código são refletidas instantaneamente no navegador sem precisar recarregar a página.

## 📁 Estrutura do Projeto

```md
duckdevlabs.github.io/
├── public/          # Arquivos estáticos (assets, CNAME)
├── src/
│   ├── components/  # Componentes React
│   ├── App.jsx      # Componente principal
│   ├── main.jsx     # Entry point
│   └── index.css    # Estilos globais
├── index.html       # Template HTML
├── package.json
└── vite.config.js   # Configuração do Vite
```

## 🛠️ Tecnologias

- React 18
- Vite 5
- CSS Vanilla (sem frameworks CSS)

## 📝 Deploy

O site está configurado para GitHub Pages. Após o build, os arquivos serão gerados na pasta `dist/`.

O arquivo `CNAME` já está configurado para `duckdevlabs.com`.
