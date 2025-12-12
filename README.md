# Química Orgânica Interativa

Site educacional completo sobre Química Orgânica com quizzes interativos, calculadoras, autenticação de alunos e painel do professor.

## 🚀 Como Executar

**⚠️ IMPORTANTE:** Para que todas as funcionalidades funcionem corretamente, você precisa abrir o arquivo em um navegador real, não no preview do VSCode.

### Opções para abrir:

1. **Arrastar e soltar:**
   - Abra o arquivo `index.html` no Windows Explorer
   - Arraste e solte no navegador (Chrome, Firefox, Edge, etc.)

2. **Clicar com botão direito:**
   - Clique com botão direito em `index.html`
   - Selecione "Abrir com" → Escolha seu navegador

3. **Usar Live Server (recomendado):**
   - Instale a extensão "Live Server" no VSCode
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"
   - Isso abrirá automaticamente no navegador e recarregará quando você salvar alterações

4. **Via terminal:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (com http-server instalado)
   npx http-server
   ```
   Depois acesse: `http://localhost:8000`

## ✨ Funcionalidades Principais

### 📚 Conteúdo Educacional
- **4 Tópicos principais:** Alcanos, Alcenos, Alcinos e Compostos Oxigenados
- **Conteúdo detalhado** com abas organizadas:
  - Estrutura molecular
  - Nomenclatura
  - Propriedades físicas e químicas
  - Obtenção e síntese
  - Aplicações industriais
  - Reações características
- **Imagens ilustrativas** com zoom interativo
- **Seção "Sobre"** com informações dos desenvolvedores

### 🎯 Sistema de Quizzes
- **Quizzes interativos** para cada tópico (4 questões por tópico)
- **Questões embaralhadas** - ordem das perguntas e alternativas são randomizadas
- **Feedback imediato** com explicações detalhadas
- **Barra de progresso** visual
- **Referências de estudo** - links para blog e PDF do livro após cada resposta
- **Quiz geral** combinando todos os tópicos
- **Questões personalizadas** criadas pelo professor
- **Sistema de pontuação** e estatísticas

### 🔐 Autenticação e Perfil de Alunos
- **Login com Google** (Firebase Authentication)
- **Perfil do aluno** - cadastro de nome e turma após primeiro login
- **Persistência de progresso** - salva respostas e estatísticas no Firestore
- **Rastreamento de eventos** - registra acessos, cliques e interações
- **Compatível com GitHub Pages** - suporta popup e redirect para login

### 🧮 Calculadoras Químicas

#### Calculadora de Massa Molecular
- **Formatação automática** - números aparecem como subscritos (H₂O)
- **Correção automática** de elementos químicos (CA → Ca)
- **Teclado virtual** com animações para entrada de fórmulas
- **Cálculo instantâneo** da massa molecular
- **Interface intuitiva** com botão de teclado integrado

#### Calculadora de Fórmula Geral
- **Select personalizado** com design moderno
- **Cálculo de fórmulas** para Alcanos, Alcenos e Alcinos
- **Resultado formatado** com subscritos

### 🤖 Assistente de IA
- **Chat widget flutuante** sempre acessível
- **Respostas contextuais** baseadas nas questões do quiz
- **Interface responsiva** adaptada para mobile
- **Mensagens de erro genéricas** para melhor UX

### 👨‍🏫 Painel do Professor
- **Login seguro** com sistema de autenticação local
- **Gerenciamento de questões:**
  - Adicionar questões personalizadas por tópico
  - Editar e deletar questões
  - Adicionar imagens às questões
  - Incluir referências (blog e PDF do livro)
- **Estatísticas dos alunos:**
  - Visualização individual ou agregada (todos os usuários)
  - Gráficos interativos (Chart.js)
  - Métricas: acessos, cliques, respostas de quiz, referências acessadas
  - **Atualização em tempo real** via Firestore
- **Recuperação de senha** com email de recuperação
- **Toggle de senha** - mostrar/ocultar senha nos campos

### 📖 Sistema de Referências
- **Links para o blog** - suporta âncoras (#alcanos) ou URLs externas
- **Links para PDF do livro** - com suporte a páginas específicas (#page=N)
- **Referências aparecem** tanto em respostas corretas quanto incorretas
- **Ícones visuais** para melhor identificação
- **Configuração centralizada** em `REFERENCIAS_CONFIG`

### ♿ Acessibilidade
- **Text-to-Speech (TTS)** - leitura de conteúdo em voz alta
- **Design responsivo** - funciona em desktop, tablet e mobile
- **Navegação por teclado** - suporte completo
- **Contraste adequado** - cores e tipografia acessíveis

### 🎨 Design e UX
- **Design moderno** com gradientes e animações suaves
- **Interface responsiva** - adapta-se a diferentes tamanhos de tela
- **Animações** - transições suaves em elementos interativos
- **Placeholders discretos** - menos visíveis para melhor foco
- **Logo IFTO** integrada no header
- **Sidebar colapsável** com quiz rápido

## 📁 Estrutura de Arquivos

```
RiverSiteQuimica/
├── index.html          # Página principal do site
├── professor.html      # Painel do professor
├── script.js           # Lógica JavaScript principal
├── professor.js        # Lógica do painel do professor
├── styles.css          # Estilos CSS
├── firebase-config.js  # Configuração do Firebase
└── README.md           # Este arquivo
```

## 🔧 Configuração

### Firebase
O site utiliza Firebase para:
- **Autenticação Google** para alunos
- **Firestore** para armazenar:
  - Perfis de alunos (nome, turma, UID)
  - Progresso de quizzes
  - Eventos de interação
  - Questões do professor

**Configuração:** Edite `firebase-config.js` com suas credenciais do Firebase.

### Referências (Blog e PDF)
Configure as URLs em `script.js` na constante `REFERENCIAS_CONFIG`:
```javascript
const REFERENCIAS_CONFIG = {
  blogBaseURL: '', // URL base do blog (ou '' para âncoras)
  livroPDFBaseURL: '' // URL do PDF do livro
};
```

### Emails de Professor
Configure os emails autorizados em `firebase-config.js`:
```javascript
const PROFESSOR_EMAILS = [
  "professor@escola.com",
  // Adicione mais emails aqui
];
```

## 💾 Armazenamento de Dados

### LocalStorage
- Progresso de quizzes (respostas dos alunos)
- Credenciais do professor (criptografadas)
- Configurações de interface

### Firestore (Firebase)
- Perfis de alunos (coleção `alunos`)
- Eventos de interação (coleção `eventos`)
- Questões do professor (coleção `perguntas_professor`)

## 🎯 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilização e animações
- **JavaScript (ES6+)** - Lógica e interatividade
- **Firebase** - Autenticação e banco de dados
  - Firebase Authentication (Google Sign-in)
  - Cloud Firestore
- **Chart.js** - Gráficos de estatísticas
- **Web Speech API** - Text-to-Speech

## 📱 Compatibilidade

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Navegadores mobile (iOS Safari, Chrome Mobile)
- ⚠️ Requer JavaScript habilitado
- ⚠️ Requer conexão com internet (para Firebase)

## 🚀 Deploy

### GitHub Pages
O site é compatível com GitHub Pages. Certifique-se de:
1. Configurar o Firebase corretamente
2. Adicionar o domínio do GitHub Pages nas configurações do Firebase
3. Configurar as URLs de referências se necessário

## 📝 Notas Importantes

- Os quizzes usam **localStorage** para salvar progresso localmente
- Dados dos alunos são salvos no **Firestore** para sincronização
- O sistema de eventos rastreia interações para estatísticas
- Questões do professor são salvas no **Firestore** e mescladas com questões padrão
- O chat de IA é simulado (pode ser integrado com API real)
- Imagens podem ser adicionadas via URL ou upload (Base64)

## 👥 Desenvolvedores

- **Natanael** - Desenvolvimento e design
- **Gabi** - Desenvolvimento e design

## 📄 Licença

Este projeto é educacional e desenvolvido para o Instituto Federal do Tocantins (IFTO).

---

**Desenvolvido com ❤️ para educação em Química Orgânica**
