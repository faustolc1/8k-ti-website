# 📧 Configuração EmailJS - 8K Soluções em TI

## Passo 1: Criar Conta EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up"
3. Use o email: **comercial@8k.net.br**
4. Confirme o email

## Passo 2: Adicionar Serviço de Email

1. No dashboard, clique em "Add New Service"
2. Escolha "Gmail" (ou seu provedor)
3. Faça login com: **comercial@8k.net.br**
4. Autorize o acesso
5. **Anote o Service ID** (ex: service_xxxxxxx)

## Passo 3: Criar Template de Email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure assim:

### Template Settings:
- **Template Name**: 8K Contact Form
- **Template ID**: Será gerado automaticamente (anote!)

### Subject:
```
[8K Site] {{servico}} - {{from_name}}
```

### Content:
```
Nova solicitação de contato via site 8K Soluções em TI

===== DADOS DO CLIENTE =====
Nome: {{from_name}}
Empresa: {{empresa}}
Email: {{from_email}}
Telefone: {{telefone}}
Serviço de Interesse: {{servico}}

===== MENSAGEM =====
{{message}}

===== INFORMAÇÕES TÉCNICAS =====
Enviado via: Site 8K (https://8k.net.br)
Data/Hora: Automático pelo EmailJS
Responder para: {{from_email}}

===== PRÓXIMOS PASSOS =====
1. Responder em até 2 horas úteis
2. Agendar reunião se necessário
3. Enviar proposta comercial

---
Sistema automático - 8K Soluções em TI
```

### Reply-To:
- Marque "Reply-To" como: `{{from_email}}`

## Passo 4: Obter Chaves

1. Vá para "Account" > "General"
2. **Copie a Public Key** (ex: user_xxxxxxxxxxxxxx)

## Passo 5: Configurar no Site

**Editar arquivo `contato.html`:**

Procure por essas linhas e substitua:

```javascript
// LINHA 258: Substitua YOUR_PUBLIC_KEY
emailjs.init("SUA_PUBLIC_KEY_AQUI");

// LINHA 308: Substitua YOUR_SERVICE_ID e YOUR_TEMPLATE_ID  
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
```

### Exemplo de configuração final:
```javascript
emailjs.init("user_aBcDeF123456789");
emailjs.send('service_xyz123', 'template_abc456', templateParams)
```

## Passo 6: Testar

1. Salve as alterações no `contato.html`
2. Faça commit e push para GitHub
3. Aguarde 2-3 minutos para atualizar
4. Teste o formulário em: https://faustolc1.github.io/8k-ti-website/contato.html

## 📋 Checklist:

- [ ] Conta EmailJS criada com comercial@8k.net.br
- [ ] Serviço de email configurado (Gmail)
- [ ] Template criado com subject e content acima
- [ ] Public Key copiada
- [ ] Service ID anotado  
- [ ] Template ID anotado
- [ ] Chaves configuradas no contato.html
- [ ] Arquivo commitado e enviado para GitHub
- [ ] Formulário testado e funcionando

## 🎯 Resultado:

Quando alguém preencher o formulário, você receberá um email em **comercial@8k.net.br** com:
- Todos os dados do cliente
- Serviço de interesse
- Mensagem
- Email configurado para "Responder" diretamente ao cliente

## 🔧 Solução de Problemas:

**Erro "User ID is required"**
- Verificar se Public Key está correta

**Erro "Service ID is required"**  
- Verificar se Service ID está correto

**Erro "Template ID is required"**
- Verificar se Template ID está correto

**Email não chega**
- Verificar caixa de spam
- Confirmar se serviço está ativo no EmailJS

## 📞 Suporte:
Se precisar de ajuda, me informe qual erro específico está acontecendo!