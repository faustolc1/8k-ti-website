# Projeto: Redesign 8K TI – Site Moderno para Soluções em TI

## 🧠 Visão Geral

Objetivo: atualizar e modernizar o site da 8K Soluções em TI (https://8k.net.br/), destacando seus serviços e competências com visual moderno, desempenho otimizado e branding consistente.

---

## 📌 Serviços oferecidos pela 8K  
(Conforme site atual)
- Consultoria e infraestrutura de TI  
- Segurança da informação  
- Cloud e servidores  
- Suporte técnico e outsourcing  
- Automação e soluções personalizadas  

O novo site deve refletir esses serviços com clareza, ícones específicos e imagens relevantes.

---

## 🛠️ Stack Tecnológico Recomendado (Simples e Eficaz)

### Opção 1: HTML/CSS/JS Puro + Node.js (RECOMENDADO)
- **HTML5** estrutura semântica limpa
- **CSS3** com Flexbox/Grid para layouts responsivos
- **JavaScript** vanilla ou com jQuery para interatividade
- **Node.js + Express** para servidor local de desenvolvimento
- **Live Server** para reload automático durante desenvolvimento

**Vantagens:**
- Extremamente estável e confiável
- Sem dependências complexas
- Carregamento ultra-rápido
- Fácil manutenção e deploy
- Compatível com qualquer servidor

### Opção 2: Vite + HTML/CSS/JS
- **Vite** como bundler moderno e rápido
- **HTML/CSS/JS** puro sem frameworks
- **PostCSS** para features CSS avançadas
- **ESBuild** para build otimizado

**Vantagens:**
- Build instantâneo
- Hot reload rápido
- Sem complexidade de frameworks
- Excelente performance

### CSS & Visual  
- **CSS Grid + Flexbox** para layouts responsivos
- **CSS Custom Properties** para temas e variáveis
- **Ícones SVG** inline ou sprite sheets
- **Google Fonts** para tipografia (Inter + Poppins)
- **Gradientes CSS** para efeitos visuais modernos

---

## 🎨 Estética & Identidade Visual

- Paleta: tons de azul, verde-tecnologia, cinza e branco  
- Ícones técnicos estilos flat-line (infraestrutura, nuvem, escudo de segurança, robot, rede) :contentReference[oaicite:8]{index=8}  
- Imagens de alta qualidade com contexto de TI corporativa  
- Tipografia: fontes sans-serif modernas (ex: Inter, Poppins)  

---

## 🧩 Estrutura de Arquivos (HTML/CSS/JS)

```
/projeto-8k/
├── index.html          # Página principal
├── sobre.html          # Página sobre a empresa
├── servicos.html       # Página de serviços
├── contato.html        # Página de contato
├── /css/
│   ├── main.css        # Estilos principais
│   └── responsive.css  # Media queries
├── /js/
│   ├── main.js         # Scripts principais
│   └── contact.js      # Formulário de contato
├── /img/
│   ├── hero-bg.jpg     # Background hero
│   ├── logo.svg        # Logo da empresa
│   └── /icons/         # Ícones SVG dos serviços
├── /assets/
│   └── fonts/          # Fontes locais (opcional)
└── server.js           # Servidor Node.js para desenvolvimento
```

---

## ⚙️ Fluxo de desenvolvimento SIMPLIFICADO

1. **Estrutura HTML semântica** - Criar as 4 páginas principais
2. **CSS Grid + Flexbox** - Layout responsivo sem dependências
3. **JavaScript vanilla** - Interatividade simples e eficaz
4. **Servidor Node.js** - `http-server` ou `live-server` para desenvolvimento
5. **Ícones SVG inline** - Performance e customização
6. **Formulário funcional** - JavaScript + backend simples

---

## 📈 Benefícios da Abordagem Simples

- **Carregamento instantâneo** (sem frameworks pesados)
- **Zero configuração** - funciona em qualquer servidor
- **Manutenção fácil** - código limpo e direto
- **SEO nativo** - HTML semântico natural
- **Deploy universal** - compatível com qualquer hosting
- **Performance máxima** - apenas o necessário

---

## ✅ Comandos para iniciar

```bash
# Criar estrutura básica
mkdir projeto-8k && cd projeto-8k

# Instalar servidor de desenvolvimento
npm install -g live-server

# Iniciar servidor
live-server --port=3000

# Ou usar Node.js puro
node server.js
```

**Resultado:** Site funcionando em http://localhost:3000 instantaneamente!