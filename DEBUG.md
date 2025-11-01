# Guia de Debug - Tela Branca

## Como identificar o problema

### 1. Abra o Console do Navegador
1. Acesse o site: `https://duckdevlabs.com`
2. Pressione `F12` ou `Cmd+Option+I` (Mac)
3. Vá na aba **Console**
4. Procure por erros em vermelho

### 2. Verifique os Erros Comuns

#### Erro: "Failed to fetch dynamically imported module"
- **Causa**: Assets não estão sendo encontrados
- **Solução**: Verifique se os arquivos estão em `/assets/` no servidor

#### Erro: "Uncaught SyntaxError"
- **Causa**: JavaScript malformado ou CSP bloqueando
- **Solução**: Verifique se o build foi feito corretamente

#### Erro: "ReactDOM is not defined" ou "React is not defined"
- **Causa**: Dependências não carregadas
- **Solução**: Verifique se o `index.js` está sendo carregado

#### Erro: "Root element not found"
- **Causa**: HTML não tem `<div id="root">`
- **Solução**: Verifique o `dist/index.html`

### 3. Verifique a Aba Network
1. Na aba **Network** do DevTools
2. Recarregue a página (`Ctrl+R` ou `Cmd+R`)
3. Procure por arquivos com status **404** ou **Failed**
4. Verifique se estão sendo carregados:
   - `index.html`
   - `assets/index.[hash].js`
   - `assets/index.[hash].css`
   - `assets/duck-avatar.jpeg`
   - `assets/duckdev-banner.jpeg`

### 4. Verifique o GitHub Actions
1. Vá na aba **Actions** do repositório
2. Veja se o último workflow foi executado com sucesso
3. Clique no workflow e veja os logs
4. Procure por erros no build

### 5. Teste Localmente
```bash
# Build local
npm run build

# Preview local
npm run preview

# Acesse http://localhost:4173
# Se funcionar localmente, o problema é no deploy
```

## Problemas Conhecidos e Soluções

### Problema: Site funciona localmente mas não no GitHub Pages
**Solução:**
1. Verifique se o GitHub Pages está usando **"GitHub Actions"** como source
2. Verifique se o arquivo `.nojekyll` está sendo criado no build
3. Verifique os logs do workflow

### Problema: Assets não carregam (404)
**Solução:**
1. Verifique se o `base: '/'` está correto no `vite.config.js`
2. Verifique se os arquivos estão em `dist/assets/`
3. Verifique se o CNAME está correto

### Problema: JavaScript não executa
**Solução:**
1. Verifique o CSP no `index.html`
2. Verifique se há erros de sintaxe no console
3. Desabilite extensões do navegador que possam interferir (AdBlock, etc.)

## Ferramentas de Debug

### Verificar Build Local
```bash
npm run build
ls -la dist/
cat dist/index.html
```

### Verificar Assets
```bash
ls -la dist/assets/
```

### Testar Build
```bash
npm run preview
# Abra http://localhost:4173
```

## Se Nada Funcionar

1. **Limpe o cache do navegador**: `Ctrl+Shift+Delete` ou `Cmd+Shift+Delete`
2. **Teste em modo anônimo**: `Ctrl+Shift+N` ou `Cmd+Shift+N`
3. **Teste em outro navegador**: Chrome, Firefox, Safari
4. **Verifique o DNS**: Use `nslookup duckdevlabs.com`
5. **Verifique o certificado SSL**: Clique no cadeado na barra de endereços

## Logs Úteis

Execute no console do navegador:
```javascript
// Verificar se React está carregado
console.log(window.React)

// Verificar se o root existe
console.log(document.getElementById('root'))

// Verificar erros carregados
console.error
```

