# Configuração do Firebase AI Logic

Este diretório contém a Cloud Function necessária para usar o Firebase AI Logic no assistente de IA.

## Instruções de Instalação

### 1. Instalar dependências

No diretório `functions`, execute:

```bash
npm install
```

### 2. Configurar API Key do Gemini

Você tem duas opções:

**Opção A: Variável de ambiente (Recomendado)**
1. No Firebase Console, vá em Functions > Configuration
2. Adicione uma variável de ambiente chamada `GEMINI_API_KEY`
3. Coloque sua chave API do Gemini como valor

**Opção B: Editar o código diretamente**
1. Edite `functions/generateContent.js`
2. Substitua `'SUA_API_KEY_AQUI'` pela sua chave API (já está com a chave atual)

### 3. Implantar a Cloud Function

Execute no terminal (na raiz do projeto):

```bash
firebase deploy --only functions:generateContent
```

### 4. Verificar se está funcionando

Após implantar, a função estará disponível automaticamente no código JavaScript do site através de `firebase.functions().httpsCallable('generateContent')`.

## Estrutura

- `functions/index.js` - Ponto de entrada das Cloud Functions
- `functions/generateContent.js` - Função que usa o Generative AI do Google
- `functions/package.json` - Dependências do projeto

## Modelo usado

A função usa o modelo `gemini-1.5-flash` que é rápido e eficiente. Você pode alterar o modelo editando a linha no `generateContent.js`:

```javascript
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
```

Outros modelos disponíveis:
- `gemini-1.5-pro` (mais preciso, mais lento)
- `gemini-pro` (modelo anterior)

