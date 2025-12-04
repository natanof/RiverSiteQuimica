// Configuração do Firebase
// ------------------------------------------------------------------
// 1. Crie um projeto em https://console.firebase.google.com
// 2. Ative Authentication (Google) e Firestore
// 3. Copie os dados de configuração Web do seu projeto
// 4. Substitua os valores abaixo pelos do seu projeto
// ------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyAtckrQEgrQ5rkY0aA24jTTxilN7qTIMJM",
  authDomain: "quimicariver-33381.firebaseapp.com",
  projectId: "quimicariver-33381",
  storageBucket: "quimicariver-33381.firebasestorage.app",
  messagingSenderId: "1062591458818",
  appId: "1:1062591458818:web:4c2ba30f8fdb4f480dc11b",
  measurementId: "G-RDN2E7DM28"
};

// Inicializa Firebase (usando SDK v8 via CDN)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Instâncias globais de Auth e Firestore
const firebaseAuth = (typeof firebase !== 'undefined' && firebase.auth) ? firebase.auth() : null;
const firebaseDb = (typeof firebase !== 'undefined' && firebase.firestore) ? firebase.firestore() : null;

// Lista de e-mails autorizados como PROFESSOR
// Coloque aqui os e-mails Google dos professores que poderão acessar o painel
const PROFESSOR_EMAILS = [
  "river@ifto.edu.br",
  "professor2@escola.com"
];

// Exporta para uso global
window.firebaseAuth = firebaseAuth;
window.firebaseDb = firebaseDb;
window.PROFESSOR_EMAILS = PROFESSOR_EMAILS;


