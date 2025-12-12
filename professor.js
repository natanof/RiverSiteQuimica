// Sistema de Login de Professor com usuário/senha (salvo no Firestore)
let currentProfessorUser = null;
const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'admin';

// Inicializa credenciais padrão no Firestore se não existirem
async function initProfessorCredentials() {
  if (!window.firebaseDb) return;
  
  try {
    const profRef = window.firebaseDb.collection('professores').doc(DEFAULT_USERNAME);
    const doc = await profRef.get();
    
    if (!doc.exists) {
      // Cria o admin padrão no Firestore
      await profRef.set({
        username: DEFAULT_USERNAME,
        password: DEFAULT_PASSWORD,
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('Credenciais padrão do professor criadas no Firestore.');
    }
  } catch (err) {
    console.error('Erro ao inicializar credenciais do professor:', err);
  }
}

function updateProfessorLayout(loggedIn) {
  const loginScreen = document.getElementById('login-screen');
  const mainContent = document.getElementById('main-content');
  if (loggedIn) {
    if (loginScreen) loginScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    showProfessorPanel();
  } else {
    if (loginScreen) loginScreen.style.display = 'flex';
    if (mainContent) mainContent.style.display = 'none';
  }
}

// Função de login com usuário/senha (validando no Firestore)
async function handleLogin(event) {
  event.preventDefault();
  const errorDiv = document.getElementById('login-error');
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  
  if (!window.firebaseDb) {
    if (errorDiv) {
      const span = errorDiv.querySelector('span');
      if (span) span.textContent = 'Firebase não configurado. Preencha firebase-config.js.';
      errorDiv.style.display = 'flex';
    } else {
      alert('Firebase não configurado. Preencha firebase-config.js.');
    }
    return;
  }
  
  try {
    const profRef = window.firebaseDb.collection('professores').doc(username);
    const doc = await profRef.get();
    
    if (!doc.exists) {
      if (errorDiv) {
        const span = errorDiv.querySelector('span');
        if (span) span.textContent = 'Usuário não encontrado!';
        errorDiv.style.display = 'flex';
      }
      document.getElementById('login-password').value = '';
      return;
    }
    
    const data = doc.data();
    if (data.password !== password) {
      if (errorDiv) {
        const span = errorDiv.querySelector('span');
        if (span) span.textContent = 'Senha incorreta!';
        errorDiv.style.display = 'flex';
      }
      document.getElementById('login-password').value = '';
      return;
    }
    
    // Login bem-sucedido
    currentProfessorUser = { username, ...data };
    sessionStorage.setItem('professor_logged_in', 'true');
    sessionStorage.setItem('professor_username', username);
    updateProfessorLayout(true);
    if (errorDiv) errorDiv.style.display = 'none';
    
    // Carrega alunos para o select
    carregarAlunosParaSelect();
    // Configura listeners em tempo real
    configurarListenersTempoReal();
    
    // Atualiza último acesso
    await profRef.update({
      ultimoAcesso: firebase.firestore.FieldValue.serverTimestamp()
    });
    
  } catch (err) {
    console.error('Erro ao fazer login:', err);
    if (errorDiv) {
      const span = errorDiv.querySelector('span');
      if (span) span.textContent = 'Erro ao conectar com o banco de dados.';
      errorDiv.style.display = 'flex';
    }
  }
}

// Função de logout
function handleLogout() {
  if (confirm('Deseja realmente sair?')) {
    currentProfessorUser = null;
    sessionStorage.removeItem('professor_logged_in');
    sessionStorage.removeItem('professor_username');
    updateProfessorLayout(false);
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
  }
}

// Modal de alterar senha
function showChangePasswordModal() {
  document.getElementById('change-password-modal').style.display = 'flex';
  document.getElementById('current-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-password').value = '';
  document.getElementById('password-error').style.display = 'none';
  document.getElementById('password-success').style.display = 'none';
}

function closeChangePasswordModal() {
  document.getElementById('change-password-modal').style.display = 'none';
  document.getElementById('current-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-password').value = '';
  document.getElementById('password-error').style.display = 'none';
  document.getElementById('password-success').style.display = 'none';
}

// Função para alterar senha (salva no Firestore)
async function handleChangePassword(event) {
  event.preventDefault();
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorDiv = document.getElementById('password-error');
  const successDiv = document.getElementById('password-success');
  
  if (!currentProfessorUser || !window.firebaseDb) {
    errorDiv.textContent = 'Erro: não conectado ao banco de dados.';
    errorDiv.style.display = 'block';
    successDiv.style.display = 'none';
    return;
  }
  
  const username = currentProfessorUser.username;
  
  try {
    // Busca a senha atual no Firestore
    const profRef = window.firebaseDb.collection('professores').doc(username);
    const doc = await profRef.get();
    
    if (!doc.exists) {
      errorDiv.textContent = 'Usuário não encontrado!';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    const storedPassword = doc.data().password;
    
    // Validações
    if (currentPassword !== storedPassword) {
      errorDiv.textContent = 'Senha atual incorreta!';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    if (newPassword.length < 3) {
      errorDiv.textContent = 'A nova senha deve ter pelo menos 3 caracteres!';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    if (newPassword !== confirmPassword) {
      errorDiv.textContent = 'As senhas não coincidem!';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    if (newPassword === currentPassword) {
      errorDiv.textContent = 'A nova senha deve ser diferente da senha atual!';
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      return;
    }
    
    // Salva a nova senha no Firestore
    await profRef.update({
      password: newPassword,
      senhaAlteradaEm: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Atualiza o objeto local
    currentProfessorUser.password = newPassword;
    
    successDiv.textContent = 'Senha alterada com sucesso!';
    successDiv.style.display = 'block';
    errorDiv.style.display = 'none';
    
    // Limpa os campos
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    // Fecha o modal após 2 segundos
    setTimeout(() => {
      closeChangePasswordModal();
    }, 2000);
    
  } catch (err) {
    console.error('Erro ao alterar senha:', err);
    errorDiv.textContent = 'Erro ao salvar nova senha. Tente novamente.';
    errorDiv.style.display = 'block';
    successDiv.style.display = 'none';
  }
}

// Função para alternar visibilidade da senha
function togglePasswordVisibility(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);
  const icon = document.getElementById(toggleId + '-icon');
  
  if (!input || !icon) return;
  
  if (input.type === 'password') {
    input.type = 'text';
    // Ícone de olho aberto (mostrando senha)
    icon.innerHTML = '<path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-12C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5"/>';
    if (toggle) toggle.setAttribute('aria-label', 'Ocultar senha');
  } else {
    input.type = 'password';
    // Ícone de olho fechado (ocultando senha) - o SVG fornecido
    icon.innerHTML = '<path d="M12 17.5c-3.8 0-7.2-2.1-8.8-5.5H1c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5h-2.2c-1.6 3.4-5 5.5-8.8 5.5"/>';
    if (toggle) toggle.setAttribute('aria-label', 'Mostrar senha');
  }
}

// Fecha modal ao clicar fora
document.addEventListener('click', (e) => {
  const modal = document.getElementById('change-password-modal');
  if (e.target === modal) {
    closeChangePasswordModal();
  }
});

// Estado do professor
let professorState = {
  loggedIn: false,
  currentTopic: 'alcanos'
};

// Funções do painel do professor (reutilizadas do script.js)
async function showProfessorPanel() {
  if (document.getElementById('professor-panel')) {
    document.getElementById('professor-panel').style.display = 'block';
    await selectProfessorTopic(professorState.currentTopic);
  }
}

async function selectProfessorTopic(topic) {
  professorState.currentTopic = topic;
  const topicColors = {
    'alcanos': { bg: 'rgba(37,99,235,0.1)', border: 'rgba(37,99,235,0.3)', active: 'linear-gradient(135deg, #2563eb, #1e40af)' },
    'alcenos': { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', active: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
    'alcinos': { bg: 'rgba(122,209,255,0.1)', border: 'rgba(122,209,255,0.3)', active: 'linear-gradient(135deg, #7ad1ff, #00c1ff)' },
    'oxigenados': { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', active: 'linear-gradient(135deg, #10b981, #059669)' }
  };
  
  ['alcanos', 'alcenos', 'alcinos', 'oxigenados'].forEach(t => {
    const btn = document.getElementById('prof-topic-' + t);
    if (btn) {
      const colors = topicColors[t];
      if (t === topic) {
        btn.style.background = colors.active;
        btn.style.color = 'white';
        btn.style.borderColor = 'transparent';
        btn.style.transform = 'scale(1.05)';
        btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      } else {
        btn.style.background = colors.bg;
        btn.style.color = 'var(--text-primary)';
        btn.style.borderColor = colors.border;
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = 'none';
      }
    }
  });
  await loadProfessorQuestions();
}

// Função assíncrona para buscar perguntas do professor do Firestore
async function getProfessorQuestions(topic) {
  if (!window.firebaseDb) {
    console.warn('Firestore não disponível, retornando array vazio');
    return [];
  }
  
  try {
    const docRef = window.firebaseDb.collection('perguntas_professor').doc(topic);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const data = doc.data();
      return data.questions || [];
    }
    return [];
  } catch (error) {
    console.error('Erro ao buscar perguntas do professor:', error);
    return [];
  }
}

// Função assíncrona para salvar perguntas do professor no Firestore
async function saveProfessorQuestions(topic, questions) {
  if (!window.firebaseDb) {
    console.warn('Firestore não disponível, não foi possível salvar');
    return false;
  }
  
  try {
    const docRef = window.firebaseDb.collection('perguntas_professor').doc(topic);
    await docRef.set({
      topic: topic,
      questions: questions,
      atualizadoEm: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error('Erro ao salvar perguntas do professor:', error);
    return false;
  }
}

async function addProfessorQuestion() {
  const topic = professorState.currentTopic;
  const questionText = document.getElementById('prof-question-text').value.trim();
  const options = [
    document.getElementById('prof-option-0').value.trim(),
    document.getElementById('prof-option-1').value.trim(),
    document.getElementById('prof-option-2').value.trim(),
    document.getElementById('prof-option-3').value.trim()
  ];
  const correctAnswer = document.querySelector('input[name="prof-correct-answer"]:checked');
  
  // Campos opcionais de referências
  const blogRef = document.getElementById('prof-blog-ref')?.value.trim() || '';
  const bookRef = document.getElementById('prof-book-ref')?.value.trim() || '';
  const bookPage = document.getElementById('prof-book-page')?.value.trim() || '';
  
  if (!questionText) { 
    alert('Por favor, digite a pergunta!'); 
    return; 
  }
  if (options.some(opt => !opt)) { 
    alert('Por favor, preencha todas as 4 opções!'); 
    return; 
  }
  if (!correctAnswer) { 
    alert('Por favor, selecione qual é a resposta correta!'); 
    return; 
  }
  
  const newQuestion = {
    q: questionText,
    options: options,
    answer: parseInt(correctAnswer.value),
    id: Date.now()
  };
  
  // Adiciona referências se fornecidas
  if (blogRef) {
    newQuestion.blogRef = blogRef;
  }
  if (bookRef) {
    newQuestion.bookRef = bookRef;
  }
  if (bookPage) {
    newQuestion.bookPage = parseInt(bookPage);
  }
  
  const questions = await getProfessorQuestions(topic);
  questions.push(newQuestion);
  const saved = await saveProfessorQuestions(topic, questions);
  if (saved) {
    clearProfessorForm();
    await loadProfessorQuestions();
    alert('Pergunta adicionada com sucesso!');
  } else {
    alert('Erro ao salvar pergunta. Verifique sua conexão e tente novamente.');
  }
}

function clearProfessorForm() {
  document.getElementById('prof-question-text').value = '';
  document.getElementById('prof-option-0').value = '';
  document.getElementById('prof-option-1').value = '';
  document.getElementById('prof-option-2').value = '';
  document.getElementById('prof-option-3').value = '';
  document.querySelectorAll('input[name="prof-correct-answer"]').forEach(r => r.checked = false);
  // Limpa campos de referências
  const blogRefInput = document.getElementById('prof-blog-ref');
  const bookRefInput = document.getElementById('prof-book-ref');
  const bookPageInput = document.getElementById('prof-book-page');
  if (blogRefInput) blogRefInput.value = '';
  if (bookRefInput) bookRefInput.value = '';
  if (bookPageInput) bookPageInput.value = '';
}

async function loadProfessorQuestions() {
  const topic = professorState.currentTopic;
  const questions = await getProfessorQuestions(topic);
  const container = document.getElementById('professor-questions-list');
  const countEl = document.getElementById('prof-question-count');
  
  if (!container || !countEl) return;
  
  countEl.textContent = questions.length;
  
  if (questions.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:var(--muted)">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 16px; opacity:0.3">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        <p style="font-size:1rem; margin:0; font-weight:500">Nenhuma pergunta personalizada ainda</p>
        <p style="font-size:0.9rem; margin:8px 0 0 0; opacity:0.7">Adicione uma pergunta acima para começar!</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = questions.map((q, index) => `
    <div class="card" style="margin-bottom:16px; padding:24px; background:rgba(255,255,255,0.98); border:2px solid rgba(139,92,246,0.15); border-radius:16px; transition:all 0.3s; position:relative; overflow:hidden"
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'"
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg, rgba(139,92,246,0.3), rgba(99,102,241,0.3))"></div>
      <div style="display:flex; justify-content:space-between; align-items:start; gap:20px; flex-wrap:wrap">
        <div style="flex:1; min-width:300px">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px">
            <span style="background:linear-gradient(135deg, #8b5cf6, #6366f1); color:white; padding:6px 16px; border-radius:20px; font-size:0.9rem; font-weight:700; box-shadow:0 2px 8px rgba(139,92,246,0.3)">#${index + 1}</span>
            <strong style="color:var(--text-primary); font-size:1.05rem; line-height:1.5">${q.q}</strong>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:10px; margin-left:8px">
            ${q.options.map((opt, i) => `
              <div style="display:flex; align-items:center; gap:10px; padding:12px 14px; background:${i === q.answer ? 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.05))' : 'rgba(0,0,0,0.02)'}; border:2px solid ${i === q.answer ? 'rgba(16,185,129,0.3)' : 'rgba(0,0,0,0.05)'}; border-radius:10px; transition:all 0.3s"
                   onmouseover="this.style.background='${i === q.answer ? 'rgba(16,185,129,0.15)' : 'rgba(0,0,0,0.04)'}'"
                   onmouseout="this.style.background='${i === q.answer ? 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.05))' : 'rgba(0,0,0,0.02)'}'">
                <div style="width:24px; height:24px; border-radius:50%; background:${i === q.answer ? '#10b981' : 'rgba(0,0,0,0.1)'}; display:flex; align-items:center; justify-content:center; flex-shrink:0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${i === q.answer ? 'white' : 'rgba(0,0,0,0.3)'}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    ${i === q.answer ? '<polyline points="20 6 9 17 4 12"/>' : '<circle cx="12" cy="12" r="5"/>'}
                  </svg>
                </div>
                <span style="color:${i === q.answer ? '#047857' : 'var(--text-secondary)'}; font-weight:${i === q.answer ? '600' : '400'}; font-size:0.95rem; line-height:1.4">${opt}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <button class="btn ghost" onclick="(async () => { await deleteProfessorQuestion(${q.id}); })()" 
                style="color:#ef4444; border-color:rgba(239,68,68,0.3); flex-shrink:0; padding:12px 20px; font-weight:600; transition:all 0.3s; display:flex; align-items:center; gap:8px"
                onmouseover="this.style.background='rgba(239,68,68,0.1)'; this.style.borderColor='#ef4444'; this.style.transform='scale(1.05)'"
                onmouseout="this.style.background=''; this.style.borderColor='rgba(239,68,68,0.3)'; this.style.transform='scale(1)'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
          Excluir
        </button>
      </div>
    </div>
  `).join('');
}

async function deleteProfessorQuestion(id) {
  if (!confirm('Deseja realmente excluir esta pergunta?')) return;
  
  const topic = professorState.currentTopic;
  const questions = await getProfessorQuestions(topic);
  const filtered = questions.filter(q => q.id !== id);
  const saved = await saveProfessorQuestions(topic, filtered);
  if (saved) {
    await loadProfessorQuestions();
  } else {
    alert('Erro ao excluir pergunta. Verifique sua conexão e tente novamente.');
  }
}

// Exporta funções para uso global
window.selectProfessorTopic = selectProfessorTopic;
window.addProfessorQuestion = addProfessorQuestion;
window.clearProfessorForm = clearProfessorForm;
window.deleteProfessorQuestion = deleteProfessorQuestion;
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.handleChangePassword = handleChangePassword;
window.showChangePasswordModal = showChangePasswordModal;
window.closeChangePasswordModal = closeChangePasswordModal;

// Estatísticas do professor (Firestore)
async function carregarAlunosParaSelect() {
  const select = document.getElementById('stats-aluno-select');
  if (!select || !window.firebaseDb) return;
  select.innerHTML = '<option value=\"\">Selecione um aluno</option><option value=\"todos\">📊 Todos os usuários</option>';
  try {
    const snap = await window.firebaseDb.collection('alunos').orderBy('nome').get();
    snap.forEach((doc) => {
      const data = doc.data();
      const opt = document.createElement('option');
      opt.value = data.uid || doc.id;
      opt.textContent = `${data.nome || '(sem nome)'} — ${data.turma || 'sem turma'}`;
      select.appendChild(opt);
    });
  } catch (e) {
    console.warn('Erro ao carregar alunos:', e);
    // Tenta sem orderBy se falhar
    try {
      const snap2 = await window.firebaseDb.collection('alunos').get();
      snap2.forEach((doc) => {
        const data = doc.data();
        const opt = document.createElement('option');
        opt.value = data.uid || doc.id;
        opt.textContent = `${data.nome || '(sem nome)'} — ${data.turma || 'sem turma'}`;
        select.appendChild(opt);
      });
    } catch (e2) {
      console.error('Erro ao carregar alunos (sem orderBy):', e2);
    }
  }
}

// Função para configurar listeners em tempo real
function configurarListenersTempoReal() {
  if (!window.firebaseDb) return;
  
  // Listener para novos alunos (atualiza o select)
  const alunosRef = window.firebaseDb.collection('alunos');
  alunosRef.onSnapshot((snapshot) => {
    const select = document.getElementById('stats-aluno-select');
    if (!select) return;
    
    // Mantém o valor selecionado
    const valorSelecionado = select.value;
    
    // Limpa e recarrega
    select.innerHTML = '<option value=\"\">Selecione um aluno</option><option value=\"todos\">📊 Todos os usuários</option>';
    
    // Ordena os documentos por nome no cliente
    const alunos = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      alunos.push({
        id: doc.id,
        uid: data.uid || doc.id,
        nome: data.nome || '(sem nome)',
        turma: data.turma || 'sem turma'
      });
    });
    
    alunos.sort((a, b) => {
      const nomeA = a.nome.toLowerCase();
      const nomeB = b.nome.toLowerCase();
      return nomeA.localeCompare(nomeB, 'pt-BR');
    });
    
    alunos.forEach((aluno) => {
      const opt = document.createElement('option');
      opt.value = aluno.uid;
      opt.textContent = `${aluno.nome} — ${aluno.turma}`;
      select.appendChild(opt);
    });
    
    // Restaura o valor selecionado se ainda existir
    if (valorSelecionado) {
      select.value = valorSelecionado;
    }
  }, (error) => {
    console.error('Erro no listener de alunos:', error);
  });
  
  // Listener para eventos (atualiza estatísticas se um aluno ou "todos" estiver selecionado)
  const eventosRef = window.firebaseDb.collection('eventos');
  let ultimaAtualizacao = Date.now();
  
  eventosRef.onSnapshot((snapshot) => {
    const select = document.getElementById('stats-aluno-select');
    if (select && select.value) {
      // Evita atualizações muito frequentes (máximo a cada 2 segundos)
      const agora = Date.now();
      if (agora - ultimaAtualizacao > 2000) {
        ultimaAtualizacao = agora;
        // Se há um aluno ou "todos" selecionado, atualiza as estatísticas automaticamente
        atualizarEstatisticasProfessor();
      }
    }
  }, (error) => {
    console.error('Erro no listener de eventos:', error);
  });
}

// Variáveis globais para os gráficos
let chartEvolucao = null;
let chartDistribuicao = null;

async function atualizarEstatisticasProfessor() {
  if (!window.firebaseDb) {
    alert('Firestore não configurado. Veja firebase-config.js.');
    return;
  }
  const alunoId = document.getElementById('stats-aluno-select')?.value || '';
  const dataInicio = document.getElementById('stats-data-inicio')?.value || '';
  const dataFim = document.getElementById('stats-data-fim')?.value || '';

  if (!alunoId) {
    alert('Selecione um aluno ou "Todos os usuários" para ver as estatísticas.');
    return;
  }
  
  const mostrarTodos = alunoId === 'todos';

  // Mostra loading
  const resultadosDiv = document.getElementById('stats-resultados');
  const graficosDiv = document.getElementById('stats-graficos-container');
  const semDadosDiv = document.getElementById('stats-sem-dados');
  
  if (resultadosDiv) resultadosDiv.style.opacity = '0.5';
  if (graficosDiv) graficosDiv.style.display = 'none';
  if (semDadosDiv) semDadosDiv.style.display = 'none';

  try {
    // Busca todos os eventos (do aluno específico ou de todos)
    const eventosRef = window.firebaseDb.collection('eventos');
    let query;
    if (mostrarTodos) {
      // Busca todos os eventos sem filtro de uid
      query = eventosRef;
    } else {
      // Busca apenas eventos do aluno selecionado
      query = eventosRef.where('uid', '==', alunoId);
    }
    const snap = await query.get();
    
    console.log(`[Estatísticas] Buscando eventos para: ${mostrarTodos ? 'Todos os usuários' : alunoId}`);
    console.log(`[Estatísticas] Total de documentos encontrados: ${snap.size}`);
    
    // Filtra por data no cliente
    const inicioDate = dataInicio ? new Date(dataInicio + 'T00:00:00') : null;
    const fimDate = dataFim ? new Date(dataFim + 'T23:59:59') : null;
    
    // Contadores gerais
    let acessos = 0;
    let cliques = 0;
    let quizResp = 0;
    let refs = 0;
    
    // Dados agrupados por data para gráfico
    const dadosPorData = {};
    const tiposEventos = {
      'acesso_pagina': 0,
      'clique': 0,
      'quiz_resposta': 0,
      'referencia_clique': 0
    };

    snap.forEach((doc) => {
      const ev = doc.data();
      const tipo = ev.tipo || '';
      
      // Debug: log dos primeiros eventos para verificar estrutura
      if (snap.size > 0 && acessos + cliques + quizResp + refs < 3) {
        console.log(`[Estatísticas] Evento encontrado:`, { tipo, uid: ev.uid, criadoEm: ev.criadoEm, detalhe: ev.detalhe });
      }
      
      // Filtra por data
      let dataEvento = null;
      if (ev.criadoEm) {
        dataEvento = ev.criadoEm.toDate ? ev.criadoEm.toDate() : new Date(ev.criadoEm);
        if (inicioDate && dataEvento < inicioDate) return;
        if (fimDate && dataEvento > fimDate) return;
      }
      
      // Contagem geral
      if (tipo === 'acesso_pagina') {
        acessos++;
        tiposEventos['acesso_pagina']++;
      } else if (tipo === 'quiz_resposta') {
        quizResp++;
        tiposEventos['quiz_resposta']++;
      } else if (tipo.includes('referencia') || tipo === 'referencia_clique') {
        refs++;
        tiposEventos['referencia_clique']++;
      } else if (tipo === 'clique' || (tipo.includes('clique') && !tipo.includes('referencia'))) {
        cliques++;
        tiposEventos['clique']++;
      }

      // Agrupa por data para gráfico de evolução
      if (dataEvento) {
        const dataKey = dataEvento.toISOString().split('T')[0]; // YYYY-MM-DD
        
        if (!dadosPorData[dataKey]) {
          dadosPorData[dataKey] = {
            acessos: 0,
            cliques: 0,
            quizzes: 0,
            referencias: 0
          };
        }
        
        if (tipo === 'acesso_pagina') {
          dadosPorData[dataKey].acessos++;
        } else if (tipo === 'quiz_resposta') {
          dadosPorData[dataKey].quizzes++;
        } else if (tipo.includes('referencia') || tipo === 'referencia_clique') {
          dadosPorData[dataKey].referencias++;
        } else if (tipo === 'clique' || (tipo.includes('clique') && !tipo.includes('referencia'))) {
          dadosPorData[dataKey].cliques++;
        }
      }
    });

    // Atualiza os cards de métricas
    const acessosEl = document.getElementById('stats-acessos-total');
    const cliquesEl = document.getElementById('stats-cliques-total');
    const quizEl = document.getElementById('stats-quiz-total');
    const refEl = document.getElementById('stats-ref-total');
    
    if (acessosEl) acessosEl.textContent = acessos;
    if (cliquesEl) cliquesEl.textContent = cliques;
    if (quizEl) quizEl.textContent = quizResp;
    if (refEl) refEl.textContent = refs;
    
    // Debug: log dos resultados
    console.log(`[Estatísticas] Resultados finais:`, { 
      acessos, 
      cliques, 
      quizResp, 
      refs, 
      totalEventos: snap.size,
      tiposEventos 
    });
    
    // Garante que os resultados estão visíveis
    if (resultadosDiv) {
      resultadosDiv.style.display = 'grid';
      resultadosDiv.style.opacity = '1';
    }

    // Mostra/oculta seções baseado em dados
    if (snap.empty) {
      if (semDadosDiv) semDadosDiv.style.display = 'block';
      if (graficosDiv) graficosDiv.style.display = 'none';
    } else {
      if (semDadosDiv) semDadosDiv.style.display = 'none';
      if (graficosDiv) graficosDiv.style.display = 'grid';
      criarGraficos(dadosPorData, tiposEventos, dataInicio, dataFim);
    }

  } catch (e) {
    console.error('Erro ao carregar estatísticas:', e);
    
    // Tenta sem orderBy se falhar
    if (e.message && e.message.includes('orderBy')) {
      try {
        let query2;
        if (mostrarTodos) {
          query2 = window.firebaseDb.collection('eventos');
        } else {
          query2 = window.firebaseDb.collection('eventos').where('uid', '==', alunoId);
        }
        if (dataInicio) {
          const inicioDate = new Date(dataInicio + 'T00:00:00');
          query2 = query2.where('criadoEm', '>=', inicioDate);
        }
        if (dataFim) {
          const fimDate = new Date(dataFim + 'T23:59:59');
          query2 = query2.where('criadoEm', '<=', fimDate);
        }
        
        const snap2 = await query2.get();
        let acessos = 0, cliques = 0, quizResp = 0, refs = 0;
        
        snap2.forEach((doc) => {
          const ev = doc.data();
          const tipo = ev.tipo || '';
          if (tipo === 'acesso_pagina') acessos++;
          else if (tipo === 'clique' || tipo.includes('clique')) cliques++;
          else if (tipo === 'quiz_resposta') quizResp++;
          else if (tipo.includes('referencia')) refs++;
        });
        
        document.getElementById('stats-acessos-total').textContent = acessos;
        document.getElementById('stats-cliques-total').textContent = cliques;
        document.getElementById('stats-quiz-total').textContent = quizResp;
        document.getElementById('stats-ref-total').textContent = refs;
        
        if (snap2.empty) {
          document.getElementById('stats-sem-dados').style.display = 'block';
          document.getElementById('stats-graficos-container').style.display = 'none';
        } else {
          document.getElementById('stats-sem-dados').style.display = 'none';
        }
        
        if (resultadosDiv) resultadosDiv.style.opacity = '1';
        alert('Estatísticas carregadas (sem gráficos devido a limitação do Firestore).');
      } catch (e2) {
        alert('Erro ao carregar estatísticas. Veja o console para detalhes.');
      }
    } else {
      alert('Erro ao carregar estatísticas. Veja o console para detalhes.');
    }
  }
}

function criarGraficos(dadosPorData, tiposEventos, dataInicio, dataFim) {
  // Prepara dados para gráfico de evolução (linha)
  const datas = Object.keys(dadosPorData).sort();
  const labels = datas.map(d => {
    const date = new Date(d);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  });
  
  const dadosAcessos = datas.map(d => dadosPorData[d].acessos);
  const dadosCliques = datas.map(d => dadosPorData[d].cliques);
  const dadosQuizzes = datas.map(d => dadosPorData[d].quizzes);
  const dadosReferencias = datas.map(d => dadosPorData[d].referencias);
  
  // Mantém referência aos dados completos para o tooltip
  const dadosCompletosPorData = dadosPorData;

  // Gráfico de linha - Evolução
  const ctxEvolucao = document.getElementById('stats-chart-evolucao');
  if (ctxEvolucao) {
    if (chartEvolucao) chartEvolucao.destroy();
    
    chartEvolucao = new Chart(ctxEvolucao, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Acessos',
            data: dadosAcessos,
            borderColor: 'rgb(37, 99, 235)',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: 'rgb(37, 99, 235)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.4,
            fill: false
          },
          {
            label: 'Cliques',
            data: dadosCliques,
            borderColor: 'rgb(139, 92, 246)',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: 'rgb(139, 92, 246)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.4,
            fill: false
          },
          {
            label: 'Quizzes',
            data: dadosQuizzes,
            borderColor: 'rgb(16, 185, 129)',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: 'rgb(16, 185, 129)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.4,
            fill: false
          },
          {
            label: 'Referências',
            data: dadosReferencias,
            borderColor: 'rgb(239, 68, 68)',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: 'rgb(239, 68, 68)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.4,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        onHover: function(evt, activeElements) {
          // Muda o cursor quando passar sobre pontos
          evt.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              padding: 15,
              font: {
                size: 12,
                weight: '500'
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: 16,
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 13
            },
            displayColors: true,
            titleMarginBottom: 12,
            bodySpacing: 8,
            callbacks: {
              title: function(context) {
                const index = context[0].dataIndex;
                const dataKey = datas[index];
                if (dataKey) {
                  const date = new Date(dataKey);
                  return date.toLocaleDateString('pt-BR', { 
                    weekday: 'long',
                    day: '2-digit', 
                    month: 'long', 
                    year: 'numeric' 
                  });
                }
                return context[0].label;
              },
              afterTitle: function(context) {
                const index = context[0].dataIndex;
                const dataKey = datas[index];
                const dadosDia = dadosCompletosPorData[dataKey];
                
                if (!dadosDia) return '';
                
                const total = dadosDia.acessos + dadosDia.cliques + dadosDia.quizzes + dadosDia.referencias;
                return '📊 Total: ' + total + ' atividades no dia';
              },
              label: function(context) {
                const index = context.dataIndex;
                const dataKey = datas[index];
                const dadosDia = dadosCompletosPorData[dataKey];
                
                if (!dadosDia) {
                  return context.dataset.label + ': ' + context.parsed.y;
                }
                
                // Mostra todas as métricas do dia quando passar o mouse em qualquer ponto
                // Retorna apenas uma vez com todas as métricas (apenas no primeiro dataset)
                if (context.datasetIndex === 0) {
                  return [
                    '🔵 Acessos: ' + dadosDia.acessos,
                    '🟣 Cliques: ' + dadosDia.cliques,
                    '🟢 Quizzes: ' + dadosDia.quizzes,
                    '🔴 Referências: ' + dadosDia.referencias
                  ];
                }
                
                // Para os outros datasets, retorna vazio para evitar duplicação
                return '';
              },
              labelColor: function(context) {
                const index = context.dataIndex;
                const dataKey = datas[index];
                const dadosDia = dadosCompletosPorData[dataKey];
                
                // Se for o primeiro dataset e tiver dados, mostra cores para todas as métricas
                if (context.datasetIndex === 0 && dadosDia) {
                  return [
                    { borderColor: 'rgb(37, 99, 235)', backgroundColor: 'rgb(37, 99, 235)' },  // Acessos
                    { borderColor: 'rgb(139, 92, 246)', backgroundColor: 'rgb(139, 92, 246)' }, // Cliques
                    { borderColor: 'rgb(16, 185, 129)', backgroundColor: 'rgb(16, 185, 129)' }, // Quizzes
                    { borderColor: 'rgb(239, 68, 68)', backgroundColor: 'rgb(239, 68, 68)' }    // Referências
                  ];
                }
                
                return {
                  borderColor: context.dataset.borderColor,
                  backgroundColor: context.dataset.borderColor
                };
              }
            },
            filter: function(tooltipItem) {
              // Mostra apenas o primeiro dataset para evitar duplicação (já que ele mostra todas as métricas)
              return tooltipItem.datasetIndex === 0;
            }
          },
          title: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 11
              },
              maxRotation: 45,
              minRotation: 0
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
              drawBorder: false
            },
            ticks: {
              precision: 0,
              stepSize: 2,
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  }

  // Gráfico de pizza - Distribuição
  const ctxDistribuicao = document.getElementById('stats-chart-distribuicao');
  if (ctxDistribuicao) {
    if (chartDistribuicao) chartDistribuicao.destroy();
    
    const total = tiposEventos['acesso_pagina'] + tiposEventos['clique'] + 
                  tiposEventos['quiz_resposta'] + tiposEventos['referencia_clique'];
    
    if (total > 0) {
      chartDistribuicao = new Chart(ctxDistribuicao, {
        type: 'doughnut',
        data: {
          labels: ['Acessos', 'Cliques', 'Quizzes', 'Referências'],
          datasets: [{
            data: [
              tiposEventos['acesso_pagina'],
              tiposEventos['clique'],
              tiposEventos['quiz_resposta'],
              tiposEventos['referencia_clique']
            ],
            backgroundColor: [
              'rgba(37, 99, 235, 0.8)',
              'rgba(139, 92, 246, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(239, 68, 68, 0.8)'
            ],
            borderColor: [
              'rgb(37, 99, 235)',
              'rgb(139, 92, 246)',
              'rgb(16, 185, 129)',
              'rgb(239, 68, 68)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                  size: 12,
                  weight: '500'
                }
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 12,
              titleFont: {
                size: 13,
                weight: 'bold'
              },
              bodyFont: {
                size: 12
              },
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percent = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                  return `${label}: ${value} (${percent}%)`;
                }
              }
            }
          }
        }
      });
    }
  }
}

window.atualizarEstatisticasProfessor = atualizarEstatisticasProfessor;

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
  // Inicializa credenciais padrão do professor no Firestore
  await initProfessorCredentials();
  
  // Verifica se já está logado (sessionStorage)
  const loggedIn = sessionStorage.getItem('professor_logged_in') === 'true';
  const savedUsername = sessionStorage.getItem('professor_username');
  
  if (loggedIn && savedUsername) {
    // Tenta validar o login novamente no Firestore
    if (window.firebaseDb) {
      try {
        const profRef = window.firebaseDb.collection('professores').doc(savedUsername);
        const doc = await profRef.get();
        if (doc.exists) {
          currentProfessorUser = { username: savedUsername, ...doc.data() };
          updateProfessorLayout(true);
          carregarAlunosParaSelect();
          configurarListenersTempoReal();
          return;
        }
      } catch (err) {
        console.error('Erro ao verificar login:', err);
      }
    }
    // Se não conseguiu validar, limpa a sessão
    sessionStorage.removeItem('professor_logged_in');
    sessionStorage.removeItem('professor_username');
  }
  
  // Mostra tela de login
  updateProfessorLayout(false);
  
  // Carrega alunos para o select (mesmo sem estar logado, para quando logar)
  if (window.firebaseDb) {
    carregarAlunosParaSelect();
    // Configura listeners em tempo real
    configurarListenersTempoReal();
  }
});

