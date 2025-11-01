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

## 📝 Deploy no GitHub Pages

### Configuração Automática (Recomendado)

O projeto já está configurado com GitHub Actions para deploy automático. Basta:

1. **Habilitar GitHub Pages no repositório:**
   - Vá em Settings → Pages
   - Em "Source", selecione **"GitHub Actions"**
   - Salve as configurações

2. **Fazer push das mudanças:**

   ```bash
   git add .
   git commit -m "Configura deploy automático"
   git push origin main
   ```

3. O GitHub Actions vai automaticamente:
   - Fazer build do projeto
   - Fazer deploy para GitHub Pages
   - Atualizar o site sempre que você fizer push na branch `main`

### Deploy Manual (Alternativo)

Se preferir fazer deploy manual:

```bash
# 1. Build do projeto
npm run build

# 2. Fazer push da pasta dist/ para a branch gh-pages
# (ou configurar para usar a branch main como source)
```

### Configurações Importantes

- ✅ **CNAME**: Já configurado para `duckdevlabs.com`
- ✅ **.nojekyll**: Criado automaticamente no build para GitHub Pages processar corretamente
- ✅ **GitHub Actions**: Workflow configurado em `.github/workflows/deploy.yml`
- ✅ **HTTPS**: Todas as URLs estão configuradas com HTTPS

### Verificar o Deploy

Após o deploy, você pode verificar:

- Actions tab no GitHub: Veja se o workflow foi executado com sucesso
- Settings → Pages: Veja o status do deploy
- Acesse `https://duckdevlabs.com` para ver o site no ar

### Problemas Comuns

**Site aparece em branco:**

- Verifique se o GitHub Pages está usando **"GitHub Actions"** como source (não "Deploy from a branch")
- Verifique os logs na aba Actions para erros
- Confirme que o arquivo `.nojekyll` está na pasta `dist/`

**Assets não carregam:**

- Certifique-se de que o build foi feito corretamente (`npm run build`)
- Verifique se os arquivos estão na pasta `dist/assets/`
