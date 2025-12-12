const quizzes = {
  alcanos: [
    {
      q: "Qual é a fórmula geral de um alcano linear?",
      options: ["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙHₙ"],
      answer: 1,
      explanation: "Alcanos são hidrocarbonetos saturados de cadeia aberta. Para cada n carbonos, eles apresentam 2n+2 hidrogênios (CₙH₂ₙ₊₂).",
      blogRef: "#alcanos",
      bookRef: "Livro — capítulo de alcanos, seção fórmula geral"
    },
    {
      q: "Qual sufixo usamos para nomear alcanos?",
      options: ["-eno","-ano","-ino","-ol"],
      answer: 1,
      explanation: "Os alcanos recebem o sufixo -ano (metano, etano, propano). Sufixos -eno e -ino indicam dupla e tripla ligações, respectivamente.",
      blogRef: "#alcanos-nomenclatura",
      bookRef: "Livro — tabela de sufixos de hidrocarbonetos"
    },
    {
      q: "Qual propriedade é típica de alcanos?",
      options: ["Altamente polares","Formam ligações de H facilmente","Baixa solubilidade em água","Reagem prontamente com nucleófilos"],
      answer: 2,
      explanation: "Alcanos são moléculas majoritariamente apolares, então não se misturam bem com água. Eles não formam ligações de hidrogênio fortes.",
      blogRef: "#alcanos-propriedades",
      bookRef: "Livro — propriedades físicas dos alcanos"
    },
    {
      q: "Qual das reações é característica dos alcanos?",
      options: ["Adição eletrofílica","Oxidação branda","Halogenação radicalar","Rearranjo intramolecular"],
      answer: 2,
      explanation: "A reação típica dos alcanos é a halogenação radicalar, em que H é substituído por halogênio sob luz ou calor.",
      blogRef: "#alcanos-reacoes",
      bookRef: "Livro — mecanismo de halogenação radicalar"
    }
  ],
  alcenos: [
    {
      q: "Qual a principal diferença estrutural entre alceno e alcano?",
      options: ["Maior número de hidrogênios","Presença de tripla ligação","Presença de dupla ligação","Anel aromático"],
      answer: 2,
      explanation: "Alcenos possuem ao menos uma dupla ligação C=C, enquanto alcanos têm apenas ligações simples.",
      blogRef: "#alcenos-estrutura",
      bookRef: "Livro — introdução aos alcenos"
    },
    {
      q: "Qual reação é típica de alcenos?",
      options: ["Substituição nucleofílica","Adição à dupla ligação","Halogenação radicalar típica","Oxidação completa imediata"],
      answer: 1,
      explanation: "A principal reação de alcenos é a adição à dupla ligação, na qual o reagente se adiciona sobre o C=C.",
      blogRef: "#alcenos-reacoes",
      bookRef: "Livro — reações de adição em alcenos"
    },
    {
      q: "A isomeria geométrica (cis/trans) ocorre quando há:",
      options: ["Tripla ligação isolada","Átomo de oxigênio na cadeia","Dupla ligação com substituintes diferentes","Moléculas com anéis apenas"],
      answer: 2,
      explanation: "Isomeria geométrica em alcenos exige dupla ligação com substituintes diferentes em cada carbono da dupla.",
      blogRef: "#alcenos-isomeria",
      bookRef: "Livro — isomeria geométrica"
    },
    {
      q: "Um uso industrial importante do eteno (etileno) é:",
      options: ["Como solvente polar","Produção de polietileno (plástico)","Combustível de foguete","Refrigerante doméstico"],
      answer: 1,
      explanation: "O eteno é monômero chave na produção de polietileno, um dos plásticos mais utilizados.",
      blogRef: "#alcenos-aplicacoes",
      bookRef: "Livro — aplicações de alcenos"
    }
  ],
  alcinos: [
    {
      q: "Qual sufixo nomeia os alcinos?",
      options: ["-ano","-eno","-ino","-ol"],
      answer: 2,
      explanation: "Alcinos recebem o sufixo -ino (etino, propino), indicando a presença de uma tripla ligação C≡C.",
      blogRef: "#alcinos-nomenclatura",
      bookRef: "Livro — nomenclatura de alcinos"
    },
    {
      q: "Alcinos terminais (com H no carbono do triplo) têm característica:",
      options: ["Ser mais básicos que alcenos","Ter hidrogênio mais ácido","Não reagir com bases","Ser gasosos exclusivamente"],
      answer: 1,
      explanation: "O hidrogênio ligado ao carbono da tripla é relativamente mais ácido, permitindo formação de alcetiletos com bases fortes.",
      blogRef: "#alcinos-propriedades",
      bookRef: "Livro — acidez dos alcinos terminais"
    },
    {
      q: "Uma reação típica que forma alcinos é:",
      options: ["Hidratação de alcenos","Eliminação dupla a partir de dihaletos","Adição de halogénios","Esterificação"],
      answer: 1,
      explanation: "Alcinos podem ser obtidos por dupla eliminação de dihaletos vicinais ou geminais.",
      blogRef: "#alcinos-obtencao",
      bookRef: "Livro — síntese de alcinos"
    },
    {
      q: "Exemplo de alcino comum usado em soldagem:",
      options: ["Eteno","Propano","Acetileno (etino)","Metano"],
      answer: 2,
      explanation: "O acetileno (etino) é muito usado em maçaricos de solda devido à alta temperatura de chama.",
      blogRef: "#alcinos-aplicacoes",
      bookRef: "Livro — aplicações de alcinos"
    }
  ],
  oxigenados: [
    {
      q: "Qual grupo funcional corresponde a -OH?",
      options: ["Cetonas","Ésteres","Álcoois","Éteres"],
      answer: 2,
      explanation: "O grupo -OH (hidroxila) caracteriza os álcoois quando ligado a carbono saturado.",
      blogRef: "#oxigenados-alcoois",
      bookRef: "Livro — grupos funcionais oxigenados"
    },
    {
      q: "Qual sufixo indica uma cetona?",
      options: ["-al","-ol","-ona","-ico"],
      answer: 2,
      explanation: "Cetonas usam o sufixo -ona (propanona, butanona). Aldeídos usam -al, álcoois -ol.",
      blogRef: "#oxigenados-cetonas",
      bookRef: "Livro — nomenclatura de cetonas"
    },
    {
      q: "Qual propriedade os compostos oxigenados costumam ter em comum (comparados a hidrocarbonetos)?",
      options: ["Menor ponto de ebulição","Maior polaridade","Menor reatividade","Sempre insolúveis em água"],
      answer: 1,
      explanation: "A presença de O (ex.: -OH, C=O) aumenta a polaridade, elevando ponto de ebulição e solubilidade em água.",
      blogRef: "#oxigenados-propriedades",
      bookRef: "Livro — propriedades de compostos oxigenados"
    },
    {
      q: "Qual reação converte um álcool primário em um aldeído (em condições controladas)?",
      options: ["Oxidação","Hidrogenação","Esterificação","Hidrólise"],
      answer: 0,
      explanation: "A oxidação branda de um álcool primário gera um aldeído; oxidação mais forte leva a ácido carboxílico.",
      blogRef: "#oxigenados-oxidacao",
      bookRef: "Livro — reações de oxidação de álcoois"
    }
  ]
};
const quizOrder = ['alcanos', 'alcenos', 'alcinos', 'oxigenados'];
const state = {
  currentTopic: 'alcanos',
  currentQuestionIndex: 0,
  userAnswers: { alcanos: [], alcenos: [], alcinos: [], oxigenados: [] },
  completed: { alcanos: false, alcenos: false, alcinos: false, oxigenados: false },
  activeContainer: null,
  selectedQuizTopic: null
};
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

// Função para buscar perguntas combinadas (assíncrona)
async function getCombinedQuestions(topic) {
  const def = quizzes[topic] || [];
  const custom = await getProfessorQuestions(topic);
  return [...def, ...custom];
}

// Funções para salvar/carregar progresso dos alunos no Firestore
async function salvarProgressoAluno() {
  if (!window.firebaseDb || !window.firebaseAuth || !window.firebaseAuth.currentUser) {
    return false;
  }
  
  const user = window.firebaseAuth.currentUser;
  try {
    const docRef = window.firebaseDb.collection('progresso_alunos').doc(user.uid);
    await docRef.set({
      uid: user.uid,
      email: user.email || null,
      userAnswers: state.userAnswers,
      completed: state.completed,
      atualizadoEm: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error('Erro ao salvar progresso do aluno:', error);
    return false;
  }
}

async function carregarProgressoAluno() {
  if (!window.firebaseDb || !window.firebaseAuth || !window.firebaseAuth.currentUser) {
    return false;
  }
  
  const user = window.firebaseAuth.currentUser;
  try {
    const docRef = window.firebaseDb.collection('progresso_alunos').doc(user.uid);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const data = doc.data();
      if (data.userAnswers) {
        state.userAnswers = data.userAnswers;
      }
      if (data.completed) {
        state.completed = data.completed;
      }
      updateProgress();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erro ao carregar progresso do aluno:', error);
    return false;
  }
}

async function getCurrentQuizForGeneral(){
  for(let topic of quizOrder){
    const questions = await getCombinedQuestions(topic);
    const answered = state.userAnswers[topic].length;
    if(answered < questions.length){
      return topic;
    }
  }
  return null;
}
async function mountQuizToContainer(topic, containerId){
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const questions = await getCombinedQuestions(topic);
  const qIndex = Math.min(state.userAnswers[topic].length, questions.length);
  if(qIndex >= questions.length){
    const done = document.createElement('div');
    done.innerHTML = `<p style="margin:8px 0;color:var(--muted)"><strong>Você já respondeu todas as perguntas deste tema.</strong></p>`;
    const summary = document.createElement('div');
    summary.className = 'note';
    const corrects = state.userAnswers[topic].filter(x => x.correct).length;
    summary.innerHTML = `<p style="margin:6px 0">Acertos: <strong>${corrects}</strong> de ${questions.length}</p><p style="margin:6px 0">Porcentagem: <strong>${Math.round((corrects/questions.length)*100)}%</strong></p>`;
    done.appendChild(summary);
    
    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '10px';
    btnContainer.style.marginTop = '16px';
    btnContainer.style.flexWrap = 'wrap';
    
    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn primary';
    resetBtn.textContent = 'Refazer este quiz';
    resetBtn.onclick = () => {
      resetQuiz(topic);
      if (state.selectedQuizTopic) {
        mountGeneralQuiz(state.selectedQuizTopic);
      }
    };
    btnContainer.appendChild(resetBtn);
    
    // Se estiver no quiz geral com tópico selecionado, mostra botão para voltar
    if (containerId === 'quiz-geral-container' && state.selectedQuizTopic && state.selectedQuizTopic !== 'todos') {
      const backBtn = document.createElement('button');
      backBtn.className = 'btn ghost';
      backBtn.textContent = 'Escolher Outro Tópico';
      backBtn.onclick = () => backToTopicSelection();
      btnContainer.appendChild(backBtn);
    }
    
    done.appendChild(btnContainer);
    container.appendChild(done);
    updateProgress();
    return;
  }
  const qObj = questions[qIndex];
  const qBlock = document.createElement('div');
  qBlock.className = 'question-row';
  qBlock.dataset.topic = topic;
  qBlock.dataset.qIndex = qIndex;
  qBlock.innerHTML = `<div class="question-text">Q${qIndex+1}. ${qObj.q}</div>`;
  const opts = document.createElement('div');
  opts.className = 'options';
  qObj.options.forEach((opt, i) => {
    const optDiv = document.createElement('label');
    optDiv.className = 'option';
    optDiv.dataset.index = i;
    optDiv.innerHTML = `
      <input type="radio" name="opt-${topic}-${containerId}" value="${i}" />
      <div style="flex:1">${opt}</div>
    `;
    optDiv.addEventListener('click', () => {
      if (optDiv.classList.contains('disabled')) return;
      const radio = optDiv.querySelector('input[type=radio]');
      radio.checked = true;
      const siblings = optDiv.parentElement.querySelectorAll('.option');
      siblings.forEach(s => s.style.boxShadow = '');
      optDiv.style.boxShadow = '0 8px 20px rgba(8,32,56,0.06)';
    });
    opts.appendChild(optDiv);
  });
  qBlock.appendChild(opts);
  const btns = document.createElement('div');
  btns.className = 'btns';
  const send = document.createElement('button');
  send.className = 'btn primary';
  send.textContent = 'Enviar resposta';
  send.onclick = () => submitAnswer(topic, qIndex, containerId);
  const skip = document.createElement('button');
  skip.className = 'btn ghost';
  skip.textContent = 'Pular';
  skip.onclick = async () => {
    state.userAnswers[topic].push({ selected: null, correct: false, skipped:true });
    await salvarProgressoAluno();
    const questions = await getCombinedQuestions(topic);
    const isQuizComplete = state.userAnswers[topic].length >= questions.length;
    if (containerId === 'quiz-geral-container' && isQuizComplete) {
      // Se um tópico específico foi selecionado, mostra resumo
      if (state.selectedQuizTopic && state.selectedQuizTopic !== 'todos') {
        setTimeout(async () => {
          const container = document.getElementById(containerId);
          if (container) {
            const questions = await getCombinedQuestions(topic);
            const corrects = state.userAnswers[topic].filter(x => x.correct).length;
            const summary = document.createElement('div');
            summary.innerHTML = `
              <h4 style="margin:0 0 10px 0">Quiz de ${capitalize(topic)} Concluído!</h4>
              <div class="note">
                <p style="margin:6px 0"><strong>Resultado:</strong></p>
                <p style="margin:4px 0">Acertos: <strong>${corrects}</strong> de ${questions.length}</p>
                <p style="margin:4px 0">Porcentagem: <strong>${Math.round((corrects/questions.length)*100)}%</strong></p>
              </div>
              <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap">
                <button class="btn primary" onclick="(async () => { await resetQuiz('${topic}'); await mountGeneralQuiz('${topic}'); })()">Refazer Quiz</button>
                <button class="btn ghost" onclick="backToTopicSelection()">Escolher Outro Tópico</button>
              </div>
            `;
            container.innerHTML = '';
            container.appendChild(summary);
          }
        }, 500);
      } else {
        setTimeout(async () => { await mountGeneralQuiz('todos') }, 2000);
      }
    } else if (containerId === 'quiz-geral-container') {
      await mountQuizToContainer(topic, containerId);
    } else {
      await mountQuizToContainer(topic, containerId);
    }
  };
  btns.appendChild(send);
  btns.appendChild(skip);
  qBlock.appendChild(btns);
  const resultStrip = document.createElement('div');
  resultStrip.className = 'result-strip';
  qBlock.appendChild(resultStrip);
  const title = document.createElement('h4');
  title.textContent = 'Quiz — ' + capitalize(topic);
  title.style.margin = '0 0 10px 0';
  container.insertBefore(title, container.firstChild);
  container.appendChild(qBlock);
  updateProgress();
}
async function mountGeneralQuiz(topic = null){
  const container = document.getElementById('quiz-geral-container');
  if (!container) return;
  
  // Se um tópico específico foi selecionado, usa ele
  if (topic && topic !== 'todos') {
    await mountQuizToContainer(topic, 'quiz-geral-container');
    return;
  }
  
  // Se for "todos", usa o modo sequencial original
  if (topic === 'todos') {
    const currentTopic = await getCurrentQuizForGeneral();
    if (!currentTopic){
      // Busca todas as perguntas de forma assíncrona
      const summaryPromises = quizOrder.map(async (topic) => {
        const questions = await getCombinedQuestions(topic);
        const corrects = state.userAnswers[topic].filter(x => x.correct).length;
        return `<p style="margin:4px 0">${capitalize(topic)}: <strong>${corrects}</strong> de ${questions.length}</p>`;
      });
      const summaries = await Promise.all(summaryPromises);
      
      container.innerHTML = `
        <h4 style="margin:0 0 10px 0">Parabéns! Você completou todos os quizzes!</h4>
        <div class="note">
          <p style="margin:6px 0"><strong>Resumo:</strong></p>
          ${summaries.join('')}
        </div>
        <button class="btn ghost" onclick="resetAllQuizzes()" style="margin-top:12px">Reiniciar todos os quizzes</button>
      `;
      updateProgress();
      return;
    }
    await mountQuizToContainer(currentTopic, 'quiz-geral-container');
    return;
  }
  
  // Modo padrão: mostra seleção de tópico
  const selectionDiv = document.getElementById('quiz-topic-selection');
  const containerDiv = document.getElementById('quiz-geral-container');
  const backBtn = document.getElementById('quiz-back-btn');
  
  if (selectionDiv) selectionDiv.style.display = 'block';
  if (containerDiv) containerDiv.style.display = 'none';
  if (backBtn) backBtn.style.display = 'none';
}
async function submitAnswer(topic, qIndex, containerId){
  const container = document.getElementById(containerId);
  if (!container) return;
  const qBlock = container.querySelector('.question-row');
  if (!qBlock) return;
  const chosen = qBlock.querySelector('input[type=radio]:checked');
  const optionsEls = Array.from(qBlock.querySelectorAll('.option'));
  const allQuestions = await getCombinedQuestions(topic);
  const question = allQuestions[qIndex];
  const correctIndex = question.answer;
  if(!chosen){
    qBlock.style.animation = 'shake 0.3s';
    setTimeout(()=>qBlock.style.animation='none',300);
    return;
  }
  const selectedIndex = Number(chosen.value);
  const isCorrect = (selectedIndex === correctIndex);
  state.userAnswers[topic].push({ selected: selectedIndex, correct: isCorrect, skipped:false });
  await salvarProgressoAluno();
  optionsEls.forEach((optEl, i) => {
    optEl.classList.add('disabled');
    optEl.style.cursor = 'default';
    const radio = optEl.querySelector('input[type=radio]');
    if(radio) radio.disabled = true;
    if(i === correctIndex){ optEl.classList.add('correct') }
    if(i === selectedIndex && !isCorrect){ optEl.classList.add('wrong') }
  });
  const strip = qBlock.querySelector('.result-strip');
  if(strip){ strip.classList.add(isCorrect ? 'success' : 'mixed') }

  // Feedback pedagógico + referências quando o aluno erra
  const existingFeedback = qBlock.querySelector('.quiz-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
  const feedback = document.createElement('div');
  feedback.className = 'note quiz-feedback';
  let html = '';
  if (isCorrect) {
    html += `<p style="margin:4px 0"><strong>Ótimo!</strong> Resposta correta.</p>`;
    if (question.explanation) {
      html += `<p style="margin:4px 0">${question.explanation}</p>`;
    }
  } else {
    html += `<p style="margin:4px 0"><strong>Não foi dessa vez.</strong> Reveja a ideia principal antes de tentar de novo.</p>`;
    if (question.explanation) {
      html += `<p style="margin:4px 0">${question.explanation}</p>`;
    }
    if (question.blogRef || question.bookRef) {
      html += `<p style="margin:6px 0; font-size:0.9rem">Quer revisar o conteúdo?</p><ul style="margin:0 0 6px 18px; padding:0; font-size:0.9rem">`;
      if (question.blogRef) {
        html += `<li><a href="${question.blogRef}" target="_blank" style="color:#2563eb; text-decoration:none" onclick="logEvento('referencia_clique', 'blog_${topic}_q${qIndex}')">Ver explicação no blog</a></li>`;
      }
      if (question.bookRef) {
        html += `<li>${question.bookRef} <a href="#" onclick="logEvento('referencia_clique', 'livro_${topic}_q${qIndex}'); return false;" style="color:#2563eb; text-decoration:none; margin-left:6px">[Acessar]</a></li>`;
      }
      html += `</ul>`;
    }
    html += `<button class="btn ghost" style="margin-top:8px; padding:8px 12px; font-size:0.85rem" onclick="openAIChatFromQuestion('${topic}', ${qIndex}, ${selectedIndex})">Tenho dúvida / Perguntar à IA</button>`;
  }
  feedback.innerHTML = html;
  qBlock.appendChild(feedback);

  // Registro de evento no Firestore (se disponível)
  try {
    const detalhe = `topico=${topic}; correta=${isCorrect}; selecionada=${selectedIndex}; corretaIndex=${correctIndex}`;
    logEvento('quiz_resposta', detalhe);
  } catch (e) {}
  updateProgress();
  const questions = await getCombinedQuestions(topic);
  const isQuizComplete = state.userAnswers[topic].length >= questions.length;
  setTimeout(async ()=> {
    if (containerId === 'quiz-geral-container' && isQuizComplete) {
      // Se um tópico específico foi selecionado, mostra resumo e opção de voltar
      if (state.selectedQuizTopic && state.selectedQuizTopic !== 'todos') {
        const container = document.getElementById(containerId);
        if (container) {
          const questions = await getCombinedQuestions(topic);
          const corrects = state.userAnswers[topic].filter(x => x.correct).length;
          const summary = document.createElement('div');
          summary.innerHTML = `
            <h4 style="margin:0 0 10px 0">Quiz de ${capitalize(topic)} Concluído!</h4>
            <div class="note">
              <p style="margin:6px 0"><strong>Resultado:</strong></p>
              <p style="margin:4px 0">Acertos: <strong>${corrects}</strong> de ${questions.length}</p>
              <p style="margin:4px 0">Porcentagem: <strong>${Math.round((corrects/questions.length)*100)}%</strong></p>
            </div>
            <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap">
              <button class="btn primary" onclick="resetQuiz('${topic}'); mountGeneralQuiz('${topic}')">Refazer Quiz</button>
              <button class="btn ghost" onclick="backToTopicSelection()">Escolher Outro Tópico</button>
            </div>
          `;
          container.innerHTML = '';
          container.appendChild(summary);
        }
      } else {
        // Modo sequencial (todos os temas)
        setTimeout(async () => { await mountGeneralQuiz('todos') }, 2000);
      }
    } else if (containerId === 'quiz-geral-container') {
      await mountQuizToContainer(topic, containerId);
    } else {
      await mountQuizToContainer(topic, containerId);
    }
  }, 2500);
}
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1) }
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    showSection(target);
  });
});
function showSection(id){
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
  state.currentTopic = id === 'quizgeral' ? state.currentTopic : id;
  const sidebar = document.querySelector('aside.sidebar');
  const mainContainer = document.querySelector('main.container');
  if (id === 'quizgeral') {
    if (sidebar) sidebar.classList.add('show');
    if (mainContainer) mainContainer.classList.remove('no-sidebar');
    // Mostra a seleção de tópicos ao entrar na seção de quiz
    mountGeneralQuiz().then(() => {
      // Atualiza as estatísticas de progresso
      setTimeout(() => updateQuizTopicStats(), 100);
    });
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) startBtn.textContent = 'Abrir quiz do tema';
  } else if (id === 'professor') {
    // Redireciona para a página do professor
    window.location.href = 'professor.html';
    return;
  } else {
    if (sidebar) sidebar.classList.remove('show');
    if (mainContainer) mainContainer.classList.add('no-sidebar');
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) startBtn.textContent = 'Abrir quiz do tema';
  }
}
document.getElementById('start-quiz').addEventListener('click', async () => {
  const activeSection = document.querySelector('.section.active');
  if (activeSection && activeSection.id === 'quizgeral') {
    await mountGeneralQuiz();
    const qEl = document.getElementById('quiz-geral-container');
    if(qEl) qEl.scrollIntoView({behavior:'smooth', block:'center'});
  }
});
async function resetAllQuizzes(){
  if(!confirm('Deseja reiniciar todos os quizzes? Isso apagará seu progresso atual no quiz.')) return;
  state.userAnswers = { alcanos: [], alcenos: [], alcinos: [], oxigenados: [] };
  state.completed = { alcanos: false, alcenos: false, alcinos: false, oxigenados: false };
  await salvarProgressoAluno();
  const activeSection = document.querySelector('.section.active');
  if (activeSection && activeSection.id === 'quizgeral') {
    await mountGeneralQuiz();
  } else {
    await mountGeneralQuiz();
  }
  updateProgress();
}
window.resetAllQuizzes = resetAllQuizzes;
document.getElementById('reset-all').addEventListener('click', resetAllQuizzes);

// Função para selecionar um tópico de quiz
function selectQuizTopic(topic) {
  state.selectedQuizTopic = topic;
  const selectionDiv = document.getElementById('quiz-topic-selection');
  const containerDiv = document.getElementById('quiz-geral-container');
  const backBtn = document.getElementById('quiz-back-btn');
  
  if (selectionDiv) selectionDiv.style.display = 'none';
  if (containerDiv) {
    containerDiv.style.display = 'block';
    containerDiv.innerHTML = ''; // Limpa o container
  }
  if (backBtn) backBtn.style.display = 'block';
  
  // Scroll para o quiz
  if (containerDiv) {
    setTimeout(() => {
      containerDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  
  // Monta o quiz do tópico selecionado
  mountGeneralQuiz(topic).then(() => {
    // Atualiza as estatísticas após iniciar o quiz
    setTimeout(() => updateQuizTopicStats(), 200);
  });
}

// Função para voltar à seleção de tópicos
function backToTopicSelection() {
  state.selectedQuizTopic = null;
  const selectionDiv = document.getElementById('quiz-topic-selection');
  const containerDiv = document.getElementById('quiz-geral-container');
  const backBtn = document.getElementById('quiz-back-btn');
  
  if (selectionDiv) selectionDiv.style.display = 'block';
  if (containerDiv) {
    containerDiv.style.display = 'none';
    containerDiv.innerHTML = ''; // Limpa o container
  }
  if (backBtn) backBtn.style.display = 'none';
  
  // Atualiza as estatísticas ao voltar
  setTimeout(() => updateQuizTopicStats(), 100);
  
  // Scroll para a seleção
  if (selectionDiv) {
    setTimeout(() => {
      selectionDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

// Função para atualizar as estatísticas de progresso na seleção de tópicos
async function updateQuizTopicStats() {
  const topics = ['alcanos', 'alcenos', 'alcinos', 'oxigenados'];
  
  for (const topic of topics) {
    const totalEl = document.getElementById(`${topic}-total`);
    const doneEl = document.getElementById(`${topic}-done`);
    
    if (totalEl && doneEl) {
      const questions = await getCombinedQuestions(topic);
      const answered = state.userAnswers[topic].length;
      const corrects = state.userAnswers[topic].filter(x => x.correct).length;
      
      totalEl.textContent = questions.length;
      doneEl.textContent = `${answered}/${questions.length}`;
      
      // Atualiza a cor do botão baseado no progresso
      const btn = document.querySelector(`.quiz-topic-btn[data-topic="${topic}"]`);
      if (btn) {
        const progress = questions.length > 0 ? (answered / questions.length) * 100 : 0;
        if (progress === 100) {
          btn.style.borderLeftColor = '#10b981';
          btn.style.opacity = '0.9';
        } else if (progress > 0) {
          btn.style.opacity = '1';
        }
      }
    }
  }
  
  // Atualiza o resumo geral
  const summaryEl = document.getElementById('quiz-progress-summary');
  if (summaryEl) {
    let totalQuestions = 0;
    let totalAnswered = 0;
    let totalCorrects = 0;
    
    for (const topic of topics) {
      const questions = await getCombinedQuestions(topic);
      const answered = state.userAnswers[topic].length;
      const corrects = state.userAnswers[topic].filter(x => x.correct).length;
      totalQuestions += questions.length;
      totalAnswered += answered;
      totalCorrects += corrects;
    }
    
    if (totalQuestions > 0) {
      const percentage = Math.round((totalAnswered / totalQuestions) * 100);
      summaryEl.textContent = `${totalAnswered}/${totalQuestions} respondidas (${percentage}%)`;
    } else {
      summaryEl.textContent = 'Nenhuma pergunta disponível';
    }
  }
}

// Exporta as funções para uso global
window.selectQuizTopic = selectQuizTopic;
window.backToTopicSelection = backToTopicSelection;
window.updateQuizTopicStats = updateQuizTopicStats;
async function resetQuiz(topic){
  state.userAnswers[topic] = [];
  state.completed[topic] = false;
  await salvarProgressoAluno();
  const activeSection = document.querySelector('.section.active');
  if (activeSection && activeSection.id === 'quizgeral') {
    // Se há um tópico selecionado, mantém ele; senão, volta à seleção
    if (state.selectedQuizTopic) {
      await mountGeneralQuiz(state.selectedQuizTopic);
    } else {
      await mountGeneralQuiz();
    }
  } else {
    await mountGeneralQuiz();
  }
  updateProgress();
}

// ----------------------
// Ferramentas de Química + IA
// ----------------------

// Tabela expandida de massas atômicas médias (g/mol)
const atomicMasses = {
  H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.81,
  C: 12.01, N: 14.01, O: 16.00, F: 19.00, Ne: 20.18,
  Na: 22.99, Mg: 24.31, Al: 26.98, Si: 28.09, P: 30.97,
  S: 32.07, Cl: 35.45, Ar: 39.95, K: 39.10, Ca: 40.08,
  Sc: 44.96, Ti: 47.87, V: 50.94, Cr: 52.00, Mn: 54.94,
  Fe: 55.85, Co: 58.93, Ni: 58.69, Cu: 63.55, Zn: 65.38,
  Ga: 69.72, Ge: 72.64, As: 74.92, Se: 78.96, Br: 79.90,
  Kr: 83.80, Rb: 85.47, Sr: 87.62, Y: 88.91, Zr: 91.22,
  Nb: 92.91, Mo: 95.96, Tc: 98.00, Ru: 101.07, Rh: 102.91,
  Pd: 106.42, Ag: 107.87, Cd: 112.41, In: 114.82, Sn: 118.71,
  Sb: 121.76, Te: 127.60, I: 126.90, Xe: 131.29, Cs: 132.91,
  Ba: 137.33, La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24,
  Pm: 145.00, Sm: 150.36, Eu: 151.96, Gd: 157.25, Tb: 158.93,
  Dy: 162.50, Ho: 164.93, Er: 167.26, Tm: 168.93, Yb: 173.05,
  Lu: 174.97, Hf: 178.49, Ta: 180.95, W: 183.84, Re: 186.21,
  Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97, Hg: 200.59,
  Tl: 204.38, Pb: 207.2, Bi: 208.98, Po: 209.00, At: 210.00,
  Rn: 222.00, Fr: 223.00, Ra: 226.00, Ac: 227.00, Th: 232.04,
  Pa: 231.04, U: 238.03
};

// Parser avançado que suporta parênteses e grupos
function parseFormulaAdvanced(formula) {
  if (!formula) return null;
  
  // Remove espaços e trata hidratos (ex: CuSO4·5H2O)
  let cleaned = formula.replace(/\s+/g, '').replace(/·/g, '+');
  
  // Se tem +, trata como hidrato
  if (cleaned.includes('+')) {
    const parts = cleaned.split('+');
    const main = parseFormulaAdvanced(parts[0]);
    if (!main) return null;
    for (let i = 1; i < parts.length; i++) {
      const hydrate = parseFormulaAdvanced(parts[i]);
      if (!hydrate) return null;
      Object.keys(hydrate).forEach(el => {
        main[el] = (main[el] || 0) + hydrate[el];
      });
    }
    return main;
  }
  
  // Processa parênteses recursivamente
  function processGroup(str, multiplier = 1) {
    const counts = {};
    let i = 0;
    
    while (i < str.length) {
      if (str[i] === '(') {
        // Encontra o parêntese de fechamento correspondente
        let depth = 1;
        let j = i + 1;
        while (j < str.length && depth > 0) {
          if (str[j] === '(') depth++;
          if (str[j] === ')') depth--;
          j++;
        }
        
        if (depth > 0) return null; // Parêntese não fechado
        
        const groupContent = str.substring(i + 1, j - 1);
        // Pega o número após o parêntese
        let numStr = '';
        let k = j;
        while (k < str.length && /[0-9]/.test(str[k])) {
          numStr += str[k];
          k++;
        }
        const groupMultiplier = numStr ? parseInt(numStr, 10) : 1;
        
        const groupCounts = processGroup(groupContent, multiplier * groupMultiplier);
        if (!groupCounts) return null;
        
        Object.keys(groupCounts).forEach(el => {
          counts[el] = (counts[el] || 0) + groupCounts[el];
        });
        
        i = k;
      } else if (/[A-Z]/.test(str[i])) {
        // Elemento químico
        let element = str[i];
        i++;
        while (i < str.length && /[a-z]/.test(str[i])) {
          element += str[i];
          i++;
        }
        
        // Pega o número após o elemento
        let numStr = '';
        while (i < str.length && /[0-9]/.test(str[i])) {
          numStr += str[i];
          i++;
        }
        const count = numStr ? parseInt(numStr, 10) : 1;
        
        counts[element] = (counts[element] || 0) + (count * multiplier);
      } else {
        return null; // Caractere inválido
      }
    }
    
    return counts;
  }
  
  const result = processGroup(cleaned);
  if (!result || Object.keys(result).length === 0) return null;
  return result;
}

// Função para formatar elementos químicos (primeira letra maiúscula, segunda minúscula)
function formatChemicalElements(formula) {
  // Formata elementos químicos: primeira letra maiúscula, segunda minúscula (se houver)
  // Ex: H -> H, CA -> Ca, FE -> Fe, H2O -> H2O (já correto), CA(OH)2 -> Ca(OH)2
  return formula.replace(/([A-Z][a-z]?|[A-Z]{2,})/g, (match, p1, offset, string) => {
    // Se já está no formato correto (primeira maiúscula, segunda minúscula ou só uma letra), mantém
    if (match.length === 1 || (match.length === 2 && match[1] === match[1].toLowerCase())) {
      return match;
    }
    // Se tem duas ou mais letras maiúsculas, converte a segunda para minúscula
    if (match.length >= 2) {
      return match[0] + match.substring(1).toLowerCase();
    }
    return match;
  });
}

// Função para converter números em subscritos e formatar elementos
function formatFormulaWithSubscripts(formula) {
  // Primeiro formata os elementos químicos (primeira maiúscula, segunda minúscula)
  let formatted = formatChemicalElements(formula);
  // Depois converte números em subscritos (H2O -> H₂O)
  formatted = formatted.replace(/(\d+)/g, (match) => {
    const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    return match.split('').map(digit => subscripts[parseInt(digit)]).join('');
  });
  return formatted;
}

// Função para converter fórmula com subscritos de volta para números (para processamento)
function parseFormulaWithSubscripts(formula) {
  const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
  let result = formula;
  subscripts.forEach((sub, index) => {
    result = result.replace(new RegExp(sub, 'g'), index.toString());
  });
  return result;
}

function calculateMolecularMass(formula) {
  // Remove subscritos visuais antes de processar
  const cleanFormula = parseFormulaWithSubscripts(formula);
  const counts = parseFormulaAdvanced(cleanFormula);
  if (!counts) {
    return { 
      ok: false, 
      message: 'Não consegui interpretar a fórmula. Exemplos válidos: H2O, C6H12O6, Ca(OH)2, Al2(SO4)3, CuSO4·5H2O.' 
    };
  }
  
  let mass = 0;
  const unknown = [];
  const steps = [];
  
  Object.keys(counts).sort().forEach(el => {
    const m = atomicMasses[el];
    if (!m) {
      unknown.push(el);
    } else {
      const contribution = m * counts[el];
      mass += contribution;
      steps.push({
        element: el,
        count: counts[el],
        atomicMass: m,
        contribution: contribution
      });
    }
  });
  
  if (unknown.length) {
    return { 
      ok: false, 
      message: `Elemento(s) não reconhecido(s): ${unknown.join(', ')}. A tabela de massas atômicas pode precisar ser atualizada.` 
    };
  }
  
  return { 
    ok: true, 
    value: mass,
    steps: steps,
    formula: cleanFormula, // Mantém a fórmula original para processamento
    formulaDisplay: formatFormulaWithSubscripts(cleanFormula), // Fórmula formatada para exibição
    counts: counts
  };
}

function calculateGeneralFormula(type, n) {
  const carbonos = n;
  let hidrogenios;
  if (type === 'alcano') {
    hidrogenios = 2 * n + 2;
  } else if (type === 'alceno') {
    hidrogenios = 2 * n;
  } else if (type === 'alcino') {
    hidrogenios = 2 * n - 2;
  } else {
    return null;
  }
  return { C: carbonos, H: hidrogenios };
}

// Estado simples do chat de IA
let aiChatVisible = false;

function appendAIMessage(sender, text) {
  const box = document.getElementById('ai-chat-messages');
  if (!box) return;
  const row = document.createElement('div');
  row.style.marginBottom = '6px';
  row.innerHTML = `<strong style="color:${sender === 'ia' ? '#2563eb' : '#0f172a'}">${sender === 'ia' ? 'IA' : 'Você'}:</strong> <span>${text}</span>`;
  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

async function sendAIMessage(rawQuestion, context) {
  const question = rawQuestion.trim();
  if (!question) return;
  appendAIMessage('user', question);

  // Exemplo de chamada para backend de IA (stub)
  // Ajuste a URL / payload conforme o backend real (ex.: Firebase Functions, API externa, etc.)
  try {
    // Exemplo comentado de requisição real:
    // const resp = await fetch('/api/ia', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ pergunta: question, contexto: context })
    // });
    // const data = await resp.json();
    // const answer = data.resposta;

    appendAIMessage('ia', 'Erro ao processar a solicitação. Tente novamente mais tarde.');
  } catch (e) {
    appendAIMessage('ia', 'Erro ao processar a solicitação. Tente novamente mais tarde.');
  }
}

function openAIChat() {
  const widget = document.getElementById('ai-chat-widget');
  const toggle = document.getElementById('ai-chat-toggle');
  if (!widget || !toggle) return;
  widget.style.display = 'block';
  toggle.style.display = 'none';
  aiChatVisible = true;
}

function closeAIChat() {
  const widget = document.getElementById('ai-chat-widget');
  const toggle = document.getElementById('ai-chat-toggle');
  if (!widget || !toggle) return;
  widget.style.display = 'none';
  toggle.style.display = 'flex';
  aiChatVisible = false;
}

async function openAIChatFromQuestion(topic, qIndex, selectedIndex) {
  const allQuestions = await getCombinedQuestions(topic);
  const q = allQuestions[qIndex];
  const base = q ? `Questão sobre ${topic}: "${q.q}". Você pode explicar por que a alternativa marcada está incorreta e qual é o raciocínio correto?` : '';
  const input = document.getElementById('ai-chat-input');
  if (input) {
    input.value = base;
  }
  openAIChat();
}

function initToolsAndAI() {
  // Massa molecular
  const massaInput = document.getElementById('massa-formula-input');
  const massaBtn = document.getElementById('massa-calcular-btn');
  const massaRes = document.getElementById('massa-resultado');
  if (massaBtn && massaInput && massaRes) {
    massaBtn.addEventListener('click', () => {
      const formula = massaInput.value.trim();
      if (!formula) {
        massaRes.style.display = 'block';
        massaRes.innerHTML = '<span style="color:#ef4444">Por favor, digite uma fórmula molecular.</span>';
        return;
      }
      
      const result = calculateMolecularMass(formula);
      massaRes.style.display = 'block';
      
      if (!result.ok) {
        massaRes.innerHTML = `<span style="color:#ef4444">${result.message}</span>`;
      } else {
        // Monta o resultado detalhado com cálculo passo a passo
        let html = `<div style="margin-bottom:12px">`;
        html += `<strong style="font-size:1.1rem; color:#1e40af">Fórmula:</strong> <code style="background:rgba(37,99,235,0.1); padding:4px 8px; border-radius:6px; font-size:1.05rem">${result.formulaDisplay || formatFormulaWithSubscripts(result.formula)}</code>`;
        html += `</div>`;
        
        html += `<div style="margin-bottom:12px; padding:12px; background:rgba(16,185,129,0.05); border-radius:10px; border-left:3px solid #10b981">`;
        html += `<strong style="color:#047857; display:block; margin-bottom:8px">Cálculo passo a passo:</strong>`;
        
        result.steps.forEach((step, idx) => {
          const formulaPart = step.count > 1 ? `${step.element}${formatFormulaWithSubscripts(step.count.toString())}` : step.element;
          html += `<div style="margin:6px 0; font-size:0.95rem; color:#064a6b">`;
          html += `${formulaPart}: ${step.count} × ${step.atomicMass.toFixed(2)} g/mol = <strong>${step.contribution.toFixed(2)} g/mol</strong>`;
          html += `</div>`;
        });
        
        html += `</div>`;
        
        html += `<div style="padding:14px; background:linear-gradient(135deg, rgba(37,99,235,0.1), rgba(6,182,212,0.08)); border-radius:12px; border:2px solid rgba(37,99,235,0.2); margin-top:12px">`;
        html += `<div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">`;
        html += `<strong style="font-size:1.15rem; color:#1e40af">Massa molecular total:</strong>`;
        html += `</div>`;
        html += `<div style="font-size:1.5rem; font-weight:700; color:#2563eb; text-align:center; padding:8px 0">${result.value.toFixed(2)} g/mol</div>`;
        html += `</div>`;
        
        // Mostra composição percentual (opcional, mas útil)
        html += `<div style="margin-top:12px; padding:10px; background:rgba(139,92,246,0.05); border-radius:10px; font-size:0.9rem; color:#64748b">`;
        html += `<strong style="color:#6b21a8">Composição:</strong> `;
        const compParts = result.steps.map(s => {
          const percent = ((s.contribution / result.value) * 100).toFixed(1);
          return `${s.element}: ${percent}%`;
        });
        html += compParts.join(', ');
        html += `</div>`;
        
        massaRes.innerHTML = html;
      }
    });
    
    // Permite calcular ao pressionar Enter
    if (massaInput) {
      massaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          massaBtn.click();
        }
      });
      
      // Mostra subscritos e formata elementos dentro do input usando overlay
      const displayElement = document.getElementById('massa-formula-display');
      if (displayElement) {
        const updateDisplay = () => {
          const value = massaInput.value;
          if (value && value.length > 0) {
            // Formata elementos químicos e subscritos para exibição
            const formatted = formatFormulaWithSubscripts(value);
            displayElement.textContent = formatted;
            displayElement.style.display = 'flex';
          } else {
            displayElement.textContent = '';
            displayElement.style.display = 'none';
          }
        };
        
        // Atualiza o valor do input para formatar elementos químicos automaticamente
        const updateInputValue = () => {
          const value = massaInput.value;
          if (value && value.length > 0) {
            // Formata elementos químicos no valor do input (primeira maiúscula, segunda minúscula)
            const formattedElements = formatChemicalElements(value);
            if (formattedElements !== value) {
              const cursorPos = massaInput.selectionStart;
              const diff = formattedElements.length - value.length;
              massaInput.value = formattedElements;
              // Ajusta posição do cursor
              const newCursorPos = Math.max(0, Math.min(cursorPos + diff, formattedElements.length));
              massaInput.setSelectionRange(newCursorPos, newCursorPos);
            }
          }
        };
        
        massaInput.addEventListener('input', () => {
          updateInputValue();
          updateDisplay();
        });
        massaInput.addEventListener('keyup', updateDisplay);
        massaInput.addEventListener('paste', () => {
          setTimeout(() => {
            updateInputValue();
            updateDisplay();
          }, 10);
        });
        
        // Sincroniza o cursor visualmente
        massaInput.addEventListener('keydown', (e) => {
          setTimeout(() => {
            const cursorPos = massaInput.selectionStart;
            // Ajusta a posição do texto formatado para alinhar com o cursor
            if (cursorPos > 0) {
              const beforeCursor = formatFormulaWithSubscripts(massaInput.value.substring(0, cursorPos));
              // Cria um span temporário para medir a largura
              const measure = document.createElement('span');
              measure.style.visibility = 'hidden';
              measure.style.position = 'absolute';
              measure.style.fontSize = getComputedStyle(massaInput).fontSize;
              measure.style.fontFamily = getComputedStyle(massaInput).fontFamily;
              measure.textContent = beforeCursor;
              document.body.appendChild(measure);
              const width = measure.offsetWidth;
              document.body.removeChild(measure);
              // Ajusta o scroll se necessário
              if (displayElement.scrollWidth > displayElement.clientWidth) {
                displayElement.scrollLeft = Math.max(0, width - displayElement.clientWidth + 20);
              }
            }
          }, 0);
        });
      }
      
      // Teclado virtual
      const keyboardToggle = document.getElementById('massa-keyboard-toggle');
      const keyboard = document.getElementById('massa-keyboard');
      
      if (keyboardToggle && keyboard) {
        keyboardToggle.addEventListener('click', () => {
          if (keyboard.classList.contains('keyboard-open')) {
            // Fechar com animação
            keyboard.classList.remove('keyboard-open', 'keyboard-opening');
            keyboard.classList.add('keyboard-closing');
            setTimeout(() => {
              keyboard.style.display = 'none';
              keyboard.classList.remove('keyboard-closing');
            }, 300);
          } else {
            // Abrir com animação
            keyboard.style.display = 'block';
            keyboard.classList.remove('keyboard-closing');
            // Força reflow para garantir que a animação funcione
            keyboard.offsetHeight;
            keyboard.classList.add('keyboard-opening');
            setTimeout(() => {
              keyboard.classList.remove('keyboard-opening');
              keyboard.classList.add('keyboard-open');
            }, 400);
            massaInput.focus();
          }
        });
        
        // Botões do teclado
        const keyboardBtns = keyboard.querySelectorAll('.keyboard-btn[data-char]');
        keyboardBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const char = btn.getAttribute('data-char');
            const cursorPos = massaInput.selectionStart;
            const value = massaInput.value;
            const newValue = value.substring(0, cursorPos) + char + value.substring(cursorPos);
            massaInput.value = newValue;
            massaInput.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
            massaInput.dispatchEvent(new Event('input'));
            massaInput.focus();
          });
        });
      }
    }
  }

  // Fórmula geral
  const tipoSelect = document.getElementById('formula-tipo-select');
  const nInput = document.getElementById('formula-n-input');
  const formulaBtn = document.getElementById('formula-calcular-btn');
  const formulaRes = document.getElementById('formula-resultado');
  if (tipoSelect && nInput && formulaBtn && formulaRes) {
    formulaBtn.addEventListener('click', () => {
      const type = tipoSelect.value;
      const n = parseInt(nInput.value, 10);
      if (!n || n < 1) {
        formulaRes.style.display = 'block';
        formulaRes.textContent = 'Informe um valor inteiro de n (≥1).';
        return;
      }
      const f = calculateGeneralFormula(type, n);
      if (!f) return;
      formulaRes.style.display = 'block';
      formulaRes.innerHTML = `Para n = <strong>${n}</strong>, a fórmula é <strong>C<sub>${f.C}</sub>H<sub>${f.H}</sub></strong>.`;
    });
  }

  // Chat IA – botões principais
  const toggleBtn = document.getElementById('ai-chat-toggle');
  const closeBtn = document.getElementById('ai-chat-close');
  const sendBtn = document.getElementById('ai-chat-send');
  const input = document.getElementById('ai-chat-input');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (aiChatVisible) {
        closeAIChat();
      } else {
        openAIChat();
      }
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeAIChat();
    });
  }
  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      const txt = input.value;
      input.value = '';
      sendAIMessage(txt, {});
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
      }
    });
  }

  // Deixa o botão flutuante visível por padrão em telas maiores
  const widget = document.getElementById('ai-chat-widget');
  if (widget && toggleBtn) {
    widget.style.display = 'none';
    toggleBtn.style.display = 'flex';
  }
}

// Exporta para uso global em botões inline
window.openAIChatFromQuestion = openAIChatFromQuestion;

// Função para fechar o teclado de massa molecular
function closeMassaKeyboard() {
  const keyboard = document.getElementById('massa-keyboard');
  if (keyboard) {
    keyboard.classList.remove('keyboard-open', 'keyboard-opening');
    keyboard.classList.add('keyboard-closing');
    setTimeout(() => {
      keyboard.style.display = 'none';
      keyboard.classList.remove('keyboard-closing');
    }, 300);
  }
}

// Função para deletar último caractere
function deleteLastChar() {
  const massaInput = document.getElementById('massa-formula-input');
  if (massaInput) {
    const cursorPos = massaInput.selectionStart;
    if (cursorPos > 0) {
      const value = massaInput.value;
      const newValue = value.substring(0, cursorPos - 1) + value.substring(cursorPos);
      massaInput.value = newValue;
      massaInput.setSelectionRange(cursorPos - 1, cursorPos - 1);
      massaInput.dispatchEvent(new Event('input'));
      massaInput.focus();
    }
  }
}

// ----------------------
// Função logEvento removida - Firebase não está mais em uso
// ----------------------

// Função logEvento vazia para manter compatibilidade com código existente
function logEvento(tipo, detalhe) {
  // Firebase removido - função mantida apenas para compatibilidade
  return;
}

// Disponibiliza globalmente para uso em onclick inline
window.logEvento = logEvento;

// Funções de autenticação do aluno removidas - Firebase não está mais em uso
// O perfil do aluno foi removido da interface, mantendo apenas as calculadoras
async function updateProgress(){
  // Atualiza também as estatísticas dos tópicos
  await updateQuizTopicStats();
  // Calcula o total de perguntas de forma assíncrona
  let total = 0;
  for (const topic of quizOrder) {
    const questions = await getCombinedQuestions(topic);
    total += questions.length;
  }
  const answered = Object.keys(state.userAnswers).reduce((s, k) => s + state.userAnswers[k].length, 0);
  const pct = total > 0 ? Math.round((answered/total) * 100) : 0;
  const bar = document.getElementById('progress');
  const progressText = document.getElementById('progress-text');
  
  if (bar) {
    bar.style.background = `linear-gradient(90deg, ${pct>66 ? 'var(--success)' : pct>33 ? 'var(--accent1)' : 'var(--danger)'} ${pct}%, rgba(0,0,0,0.04) ${pct}%)`;
  }
  
  if (progressText) {
    progressText.textContent = `${answered}/${total}`;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('aside.sidebar');
  const mainContainer = document.querySelector('main.container');
  if (sidebar) sidebar.classList.remove('show');
  if (mainContainer) mainContainer.classList.add('no-sidebar');
  // Registro simples de acesso à página principal
  try {
    logEvento('acesso_pagina', 'index_load');
  } catch (e) {}
  updateProgress();
  
  // Registro de cliques em botões e links importantes
  document.addEventListener('click', (e) => {
    try {
      const target = e.target.closest('button, a');
      if (!target || !window.firebaseAuth?.currentUser) return;
      
      const btnText = target.textContent?.trim() || '';
      const btnClass = target.className || '';
      const href = target.href || '';
      
      // Registra cliques em botões principais
      if (target.tagName === 'BUTTON' || (target.tagName === 'A' && href)) {
        let tipoClique = 'clique';
        let detalhe = '';
        
        // Identifica o tipo de clique
        if (btnText.includes('Iniciar') || btnText.includes('Quiz')) {
          detalhe = 'botao_iniciar_quiz';
        } else if (btnText.includes('Calcular') || btnText.includes('Massa')) {
          detalhe = 'botao_calculadora';
        } else if (btnText.includes('Referência') || btnText.includes('blog') || href.includes('blog') || href.includes('referencia')) {
          tipoClique = 'referencia_clique';
          detalhe = href || 'referencia';
        } else if (btnClass.includes('btn')) {
          detalhe = `botao_${btnText.substring(0, 30)}`;
        }
        
        logEvento(tipoClique, detalhe);
      }
    } catch (err) {
      // Silencioso para não atrapalhar o usuário
      console.warn('Erro ao registrar clique:', err);
    }
  });
});
// Funções do professor movidas para professor.js
// Sistema de Texto para Voz (TTS) - Melhorado
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;
let currentSectionId = null;

// Função para limpar texto e melhorar pronúncia
function cleanTextForSpeech(text) {
  if (!text) return '';
  
  // Remove tags HTML e mantém apenas texto
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;
  let cleanText = tempDiv.textContent || tempDiv.innerText || '';
  
  // Melhora pronúncia de fórmulas químicas
  cleanText = cleanText.replace(/C<sub>(\d+)<\/sub>/g, 'C $1');
  cleanText = cleanText.replace(/H<sub>(\d+)<\/sub>/g, 'H $1');
  cleanText = cleanText.replace(/O<sub>(\d+)<\/sub>/g, 'O $1');
  cleanText = cleanText.replace(/<sub>/g, '');
  cleanText = cleanText.replace(/<\/sub>/g, '');
  cleanText = cleanText.replace(/CH<sub>(\d+)<\/sub>/g, 'C H $1');
  cleanText = cleanText.replace(/ₙ/g, 'n');
  cleanText = cleanText.replace(/₂/g, '2');
  cleanText = cleanText.replace(/₃/g, '3');
  cleanText = cleanText.replace(/₄/g, '4');
  cleanText = cleanText.replace(/₅/g, '5');
  cleanText = cleanText.replace(/₊/g, ' mais ');
  cleanText = cleanText.replace(/₋/g, ' menos ');
  cleanText = cleanText.replace(/→/g, ' produz ');
  cleanText = cleanText.replace(/\+/g, ' mais ');
  cleanText = cleanText.replace(/=/g, ' igual a ');
  
  // Remove múltiplos espaços
  cleanText = cleanText.replace(/\s+/g, ' ').trim();
  
  return cleanText;
}

// Função para selecionar melhor voz
function getBestVoice() {
  const voices = speechSynthesis.getVoices();
  // Prioriza vozes em português brasileiro
  const ptBRVoices = voices.filter(v => v.lang.startsWith('pt-BR'));
  if (ptBRVoices.length > 0) {
    // Prioriza vozes femininas (geralmente mais claras)
    const femaleVoice = ptBRVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('heloisa'));
    if (femaleVoice) return femaleVoice;
    return ptBRVoices[0];
  }
  // Fallback para português
  const ptVoices = voices.filter(v => v.lang.startsWith('pt'));
  if (ptVoices.length > 0) return ptVoices[0];
  // Fallback para qualquer voz disponível
  return voices.find(v => v.lang.includes('pt')) || voices[0];
}

// Função para abrir/fechar menu TTS
function toggleTTSMenu(sectionId) {
  const menu = document.getElementById(`tts-menu-${sectionId}`);
  if (!menu) return;
  
  // Fecha todos os outros menus
  document.querySelectorAll('.tts-menu').forEach(m => {
    if (m.id !== `tts-menu-${sectionId}`) {
      m.style.display = 'none';
    }
  });
  
  // Alterna o menu atual
  if (menu.style.display === 'none' || !menu.style.display) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

// Fecha menus ao clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.closest('.tts-toggle-btn') && !e.target.closest('.tts-menu')) {
    document.querySelectorAll('.tts-menu').forEach(m => m.style.display = 'none');
  }
});

// Sistema de autenticação do aluno com Google
function initAlunoAuth() {
  // Aguarda um pouco para garantir que o Firebase está carregado
  if (!window.firebase || !window.firebase.auth) {
    console.warn('Firebase não está carregado, tentando novamente...');
    setTimeout(() => {
      if (window.firebase && window.firebase.auth) {
        initAlunoAuth();
      } else {
        console.error('Firebase Auth não está disponível. Verifique se os scripts do Firebase estão carregados.');
        const loginBtn = document.getElementById('aluno-login-google-btn');
        if (loginBtn) {
          loginBtn.disabled = true;
          loginBtn.textContent = 'Firebase não carregado';
        }
      }
    }, 1000);
    return;
  }
  
  if (!window.firebaseAuth) {
    console.warn('Firebase Auth não está disponível');
    return;
  }

  const loginBtn = document.getElementById('aluno-login-google-btn');
  const logoutBtn = document.getElementById('aluno-logout-btn');
  const userInfo = document.getElementById('aluno-user-info');
  const userName = document.getElementById('aluno-user-name');

  // Verifica se já está autenticado
  window.firebaseAuth.onAuthStateChanged(async (user) => {
    if (user) {
      // Usuário logado
      if (loginBtn) loginBtn.style.display = 'none';
      if (userInfo) userInfo.style.display = 'flex';
      if (userName) {
        userName.textContent = user.displayName || user.email || 'Usuário';
      }
      
      // Verifica se o aluno tem perfil completo
      await verificarECompletarPerfil(user);
      
      // Carrega o progresso do aluno
      await carregarProgressoAluno();
    } else {
      // Usuário não logado
      if (loginBtn) loginBtn.style.display = 'flex';
      if (userInfo) userInfo.style.display = 'none';
    }
  });

  // Botão de login
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        
        // Tenta usar popup primeiro, se falhar usa redirect (melhor para GitHub Pages)
        try {
          const result = await window.firebaseAuth.signInWithPopup(provider);
          console.log('Login bem-sucedido:', result.user);
          
          // Verifica e completa perfil se necessário
          await verificarECompletarPerfil(result.user);
          
          // Salva o progresso após login
          await salvarProgressoAluno();
        } catch (popupError) {
          // Se popup falhar (bloqueado ou outro erro), usa redirect
          console.log('Popup bloqueado ou falhou, usando redirect...', popupError);
          
          // Verifica se é erro de popup bloqueado
          if (popupError.code === 'auth/popup-blocked' || 
              popupError.code === 'auth/popup-closed-by-user' ||
              popupError.message?.includes('popup')) {
            // Usa redirect que é mais confiável
            await window.firebaseAuth.signInWithRedirect(provider);
            // A página será redirecionada, então não precisa fazer mais nada aqui
            return;
          } else {
            // Outro tipo de erro, tenta redirect mesmo assim
            await window.firebaseAuth.signInWithRedirect(provider);
            return;
          }
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        const errorMessage = error.message || 'Erro desconhecido';
        alert(`Erro ao fazer login com Google: ${errorMessage}\n\nVerifique se:\n- O domínio está autorizado no Firebase Console\n- Os popups não estão bloqueados\n- A conexão com a internet está funcionando`);
      }
    });
  }
  
  // Verifica se há resultado de redirect quando a página carrega
  window.firebaseAuth.getRedirectResult().then(async (result) => {
    if (result.credential && result.user) {
      // Login bem-sucedido via redirect
      console.log('Login bem-sucedido via redirect:', result.user);
      
      // Verifica e completa perfil se necessário
      await verificarECompletarPerfil(result.user);
      
      // Salva o progresso após login
      await salvarProgressoAluno();
    }
  }).catch((error) => {
    // Erro no redirect (pode ser cancelado pelo usuário)
    if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
      console.error('Erro no redirect:', error);
    }
  });
  
  // Configura o formulário de perfil
  const perfilForm = document.getElementById('aluno-perfil-form');
  if (perfilForm) {
    perfilForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      await salvarPerfilAluno();
    });
  }
  
  // Fecha modal ao clicar fora
  const perfilModal = document.getElementById('aluno-perfil-modal');
  if (perfilModal) {
    perfilModal.addEventListener('click', (e) => {
      if (e.target === perfilModal) {
        fecharModalPerfil();
      }
    });
  }

  // Botão de logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        await window.firebaseAuth.signOut();
        console.log('Logout realizado');
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
        alert('Erro ao fazer logout. Tente novamente.');
      }
    });
  }
}

// Função para verificar e completar perfil do aluno
async function verificarECompletarPerfil(user) {
  if (!window.firebaseDb || !user) return;
  
  try {
    const alunoRef = window.firebaseDb.collection('alunos').doc(user.uid);
    const doc = await alunoRef.get();
    
    if (!doc.exists || !doc.data().nome || !doc.data().turma) {
      // Aluno não tem perfil completo, mostra modal
      mostrarModalPerfil(user);
    } else {
      // Atualiza informações do usuário na UI
      const userName = document.getElementById('aluno-user-name');
      if (userName) {
        const data = doc.data();
        userName.textContent = data.nome || user.displayName || user.email || 'Usuário';
      }
    }
  } catch (error) {
    console.error('Erro ao verificar perfil:', error);
  }
}

// Função para mostrar modal de perfil
function mostrarModalPerfil(user) {
  const modal = document.getElementById('aluno-perfil-modal');
  const nomeInput = document.getElementById('aluno-perfil-nome');
  const errorDiv = document.getElementById('aluno-perfil-error');
  
  if (modal) {
    modal.style.display = 'flex';
    
    // Preenche nome com o displayName do Google se disponível
    if (nomeInput && user.displayName) {
      nomeInput.value = user.displayName;
    }
    
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }
}

// Função para fechar modal de perfil
function fecharModalPerfil() {
  const modal = document.getElementById('aluno-perfil-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Função para salvar perfil do aluno
async function salvarPerfilAluno() {
  if (!window.firebaseDb || !window.firebaseAuth || !window.firebaseAuth.currentUser) {
    return;
  }
  
  const user = window.firebaseAuth.currentUser;
  const nomeInput = document.getElementById('aluno-perfil-nome');
  const turmaInput = document.getElementById('aluno-perfil-turma');
  const errorDiv = document.getElementById('aluno-perfil-error');
  
  if (!nomeInput || !turmaInput) return;
  
  const nome = nomeInput.value.trim();
  const turma = turmaInput.value.trim();
  
  if (!nome || !turma) {
    if (errorDiv) {
      errorDiv.textContent = 'Por favor, preencha todos os campos.';
      errorDiv.style.display = 'block';
    }
    return;
  }
  
  try {
    const alunoRef = window.firebaseDb.collection('alunos').doc(user.uid);
    await alunoRef.set({
      uid: user.uid,
      email: user.email || null,
      nome: nome,
      turma: turma,
      displayName: user.displayName || null,
      fotoURL: user.photoURL || null,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      atualizadoEm: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    console.log('Perfil do aluno salvo com sucesso');
    
    // Atualiza nome na UI
    const userName = document.getElementById('aluno-user-name');
    if (userName) {
      userName.textContent = nome;
    }
    
    // Fecha o modal
    fecharModalPerfil();
    
    // Mostra mensagem de sucesso
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
    
    // Mostra notificação de sucesso
    alert('Perfil salvo com sucesso! Agora você aparecerá no painel do professor.');
    
  } catch (error) {
    console.error('Erro ao salvar perfil:', error);
    if (errorDiv) {
      errorDiv.textContent = 'Erro ao salvar perfil. Tente novamente.';
      errorDiv.style.display = 'block';
    }
  }
}

function readContent(sectionId, tabId = null) {
  const btn = document.getElementById(`tts-btn-${sectionId}`);
  const icon = document.getElementById(`tts-icon-${sectionId}`);
  
  // Fecha o menu após seleção
  const menu = document.getElementById(`tts-menu-${sectionId}`);
  if (menu) menu.style.display = 'none';
  
  // Se já está falando esta seção, pausa
  if (isSpeaking && currentSectionId === sectionId && currentUtterance) {
    speechSynthesis.cancel();
    isSpeaking = false;
    currentSectionId = null;
    if (btn) {
      btn.classList.remove('playing');
      if (icon) icon.textContent = '🔊';
    }
    return;
  }
  
  // Se está falando outra seção, cancela e inicia nova
  if (isSpeaking && currentUtterance) {
    speechSynthesis.cancel();
    // Remove playing de todos os botões
    document.querySelectorAll('[id^="tts-btn-"]').forEach(b => {
      b.classList.remove('playing');
      const ic = b.querySelector('[id^="tts-icon-"]');
      if (ic) ic.textContent = '🔊';
    });
  }
  
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  let text = '';
  const title = section.querySelector('h2');
  const lead = section.querySelector('.lead');
  
  // Se tabId for null, usa a aba ativa; caso contrário, usa a aba especificada
  let targetTab = null;
  if (tabId === null) {
    targetTab = section.querySelector('.tab-content.active');
  } else {
    targetTab = section.querySelector(`#${tabId}`);
  }
  
  if (title) {
    const titleText = cleanTextForSpeech(title.textContent);
    text += titleText + '. ';
  }
  
  if (lead) {
    const leadText = cleanTextForSpeech(lead.textContent);
    text += leadText + '. ';
  }
  
  if (targetTab) {
    const cards = targetTab.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const cardTitle = card.querySelector('h4');
      const cardText = card.querySelectorAll('p');
      const cardList = card.querySelectorAll('ul.info li');
      
      if (cardTitle) {
        const titleText = cleanTextForSpeech(cardTitle.textContent);
        text += titleText + '. ';
      }
      
      cardText.forEach(p => {
        const pText = cleanTextForSpeech(p.textContent);
        if (pText) text += pText + '. ';
      });
      
      cardList.forEach(li => {
        const liText = cleanTextForSpeech(li.textContent);
        if (liText) text += liText + '. ';
      });
    });
  }
  
  if (text.trim()) {
    // Aguarda vozes carregarem se necessário
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', () => {
        speakText(text, btn, icon, sectionId);
      }, { once: true });
    } else {
      speakText(text, btn, icon, sectionId);
    }
  }
}

function speakText(text, btn, icon, sectionId) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getBestVoice();
  
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || 'pt-BR';
  } else {
    utterance.lang = 'pt-BR';
  }
  
  // Configurações otimizadas para melhor qualidade
  utterance.rate = 0.85; // Velocidade um pouco mais lenta para melhor compreensão
  utterance.pitch = 1.0; // Tom natural
  utterance.volume = 1.0; // Volume máximo
  
  utterance.onstart = () => {
    isSpeaking = true;
    currentSectionId = sectionId;
    if (btn) {
      btn.classList.add('playing');
      if (icon) icon.textContent = '⏸️';
    }
  };
  
  utterance.onend = () => {
    isSpeaking = false;
    currentSectionId = null;
    if (btn) {
      btn.classList.remove('playing');
      if (icon) icon.textContent = '🔊';
    }
  };
  
  utterance.onerror = (e) => {
    console.error('Erro na síntese de voz:', e);
    isSpeaking = false;
    currentSectionId = null;
    if (btn) {
      btn.classList.remove('playing');
      if (icon) icon.textContent = '🔊';
    }
    alert('Erro ao reproduzir áudio. Verifique se seu navegador suporta síntese de voz.');
  };
  
  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

window.readContent = readContent;
window.toggleTTSMenu = toggleTTSMenu;

// Sistema de Abas
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      const container = btn.closest('.tabs-container');
      if (!container) return;
      
      // Remove active de todas as abas e conteúdos
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Adiciona active na aba clicada e seu conteúdo
      btn.classList.add('active');
      const content = container.querySelector(`#${tabId}`);
      if (content) content.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Só tenta mostrar o painel do professor se a função existir
  if (typeof showProfessorPanel === 'function') {
    try {
      showProfessorPanel();
    } catch (e) {
      // Ignora em páginas que não tenham o painel do professor
    }
  }

  initTabs();
  initToolsAndAI();
  initAlunoAuth();
  updateProgress();
  // Atualiza as estatísticas de progresso dos quizzes
  setTimeout(() => {
    if (document.getElementById('quiz-topic-selection')) {
      updateQuizTopicStats();
    }
  }, 300);
});

const originalShowSection = showSection;
showSection = function(id) {
  originalShowSection(id);
  // Reinicializa abas quando mudar de seção
  setTimeout(() => initTabs(), 100);
};

