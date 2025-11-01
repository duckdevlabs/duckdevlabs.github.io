# Fix para ERR_CERT_COMMON_NAME_INVALID

## O Problema

O erro `ERR_CERT_COMMON_NAME_INVALID` ocorre quando:
- O certificado SSL não corresponde ao domínio acessado
- Há um problema com www vs non-www
- O CNAME não está configurado corretamente no GitHub

## Soluções Aplicadas

### 1. CNAME Configurado
- ✅ Arquivo `CNAME` com `duckdevlabs.com` (sem www)
- ✅ CNAME copiado automaticamente no build

### 2. Workflow Atualizado
- ✅ Garantindo que CNAME e .nojekyll sejam copiados para dist/

## Verificações Necessárias no GitHub

### 1. Verificar Configuração do Domínio
1. Vá em **Settings → Pages**
2. Em **Custom domain**, deve estar: `duckdevlabs.com` (sem www)
3. O **SSL** deve estar **enabled**

### 2. Verificar DNS
Execute no terminal:
```bash
dig duckdevlabs.com +short
# Deve retornar algo como: 185.199.108.153
```

### 3. Verificar Certificado SSL
1. Acesse `https://duckdevlabs.com`
2. Clique no **cadeado** na barra de endereços
3. Veja os detalhes do certificado
4. Deve mostrar: **Issued to: duckdevlabs.com**

## Se o Problema Persistir

### Opção 1: Limpar Cache do GitHub Pages
1. Em Settings → Pages, remova o domínio customizado
2. Salve
3. Aguarde 5 minutos
4. Adicione novamente: `duckdevlabs.com`
5. Aguarde a propagação do DNS (pode levar até 24h)

### Opção 2: Verificar DNS
Certifique-se que o DNS aponta para:
```
Type: CNAME
Name: duckdevlabs.com
Value: duckdevlabs.github.io
```

OU se usar A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Opção 3: Forçar HTTPS no Navegador
Adicione no console do navegador:
```javascript
// Redireciona www para non-www
if (location.hostname === 'www.duckdevlabs.com') {
  location.replace('https://duckdevlabs.com' + location.pathname);
}
```

## Testar Localmente

```bash
# Build
npm run build

# Preview
npm run preview

# Acesse http://localhost:4173
# Não deve ter erro de certificado localmente
```

## Logs Úteis

No console do navegador, execute:
```javascript
// Ver URLs dos recursos carregados
Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach(link => {
  console.log('CSS:', link.href);
});

// Verificar protocolo
console.log('Protocol:', location.protocol);
console.log('Hostname:', location.hostname);
```

