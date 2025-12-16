# Configuração do Resend para Envio de Emails

Este projeto usa a API Resend para enviar emails de recuperação de senha e confirmação de alteração de senha.

## 📋 Pré-requisitos

1. Conta no [Resend](https://resend.com)
2. API Key do Resend
3. Domínio verificado no Resend (para envio de emails)

## 🔧 Configuração

### 1. Obter API Key do Resend

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta ou faça login
3. Vá em **API Keys** no painel
4. Crie uma nova API Key
5. Copie a chave (ela só será mostrada uma vez!)

### 2. Configurar no Firebase Functions

Você tem duas opções para configurar a API Key:

#### Opção A: Variável de Ambiente (Recomendado)

1. No Firebase Console, vá em **Functions** > **Configuration**
2. Clique em **Add variable**
3. Adicione:
   - **Nome**: `RESEND_API_KEY`
   - **Valor**: Sua API Key do Resend
4. Adicione também:
   - **Nome**: `RESEND_FROM_EMAIL`
   - **Valor**: O email verificado no Resend (ex: `noreply@seudominio.com`)

#### Opção B: Firebase Config (via CLI)

```bash
firebase functions:config:set resend.api_key="sua_api_key_aqui"
firebase functions:config:set resend.from_email="noreply@seudominio.com"
```

### 3. Instalar Dependências

No diretório `functions`, execute:

```bash
cd functions
npm install
```

### 4. Deploy da Função

Execute no terminal (na raiz do projeto):

```bash
firebase deploy --only functions:sendEmail
```

Ou para fazer deploy de todas as funções:

```bash
firebase deploy --only functions
```

## 📧 Configuração do Email Remetente

No arquivo `functions/sendEmail.js`, você pode personalizar:

- **Email remetente**: Configurado via `RESEND_FROM_EMAIL` ou `functions.config().resend?.from_email`
- **Assunto dos emails**: Editável no código
- **Template HTML**: Personalizável no código

## ✅ Verificação

Após o deploy, teste a funcionalidade:

1. Acesse o Portal do Professor
2. Clique em "Esqueci minha senha"
3. Digite um email vinculado a um professor
4. Verifique se o email foi recebido

## 🔒 Segurança

- A API Key nunca é exposta no frontend
- Todas as chamadas passam pela Cloud Function
- O email só é enviado se o email estiver vinculado a um professor no Firestore

## 🐛 Troubleshooting

### Email não está sendo enviado

1. Verifique se a API Key está configurada corretamente
2. Verifique se o domínio está verificado no Resend
3. Verifique os logs do Firebase Functions:
   ```bash
   firebase functions:log --only sendEmail
   ```

### Erro de autenticação

- Certifique-se de que a API Key está correta
- Verifique se o domínio está verificado no Resend

### Email na pasta de spam

- Configure SPF e DKIM no seu domínio
- Use um domínio verificado no Resend
- Evite palavras que podem ser consideradas spam no assunto

## 📚 Documentação

- [Resend Documentation](https://resend.com/docs)
- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)

