/**
 * Cloud Function para usar Firebase AI Logic (Generative AI)
 * 
 * Instruções para implantar:
 * 1. No diretório functions, execute: npm install firebase-functions firebase-admin @google/generative-ai
 * 2. Configure as variáveis de ambiente se necessário
 * 3. Implante com: firebase deploy --only functions:generateContent
 */

const { onCall } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Configura opções globais (ajuste conforme necessário)
setGlobalOptions({
  maxInstances: 10,
});

// Inicializa o Generative AI
// Você pode usar a API key do projeto ou configurar via variável de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyBij0K9_g-EqlbleVkz8pVxcrJ9yxpq9UI');

exports.generateContent = onCall(async (request) => {
  try {
    const { question, history, systemInstruction, context } = request.data;

    if (!question) {
      throw new Error('Pergunta não fornecida');
    }

    // Usa o modelo gemini-1.5-flash (ou outro modelo disponível)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Prepara o histórico de mensagens
    const chatHistory = [];
    
    // Adiciona instrução do sistema se fornecida (apenas na primeira vez se não estiver no histórico)
    const hasSystemInstruction = history && history.some(msg => 
      msg.role === 'user' && msg.parts?.[0]?.text?.includes('assistente especializado em química orgânica')
    );
    
    if (systemInstruction && !hasSystemInstruction) {
      chatHistory.push({
        role: 'user',
        parts: [{ text: systemInstruction }]
      });
      chatHistory.push({
        role: 'model',
        parts: [{ text: 'Entendido. Estou pronto para ajudar com questões de química orgânica.' }]
      });
    }

    // Adiciona contexto se fornecido
    if (context && (context.topic || context.question)) {
      const contextText = `Contexto: ${context.topic ? 'Tópico: ' + context.topic + '. ' : ''}${context.question ? 'Questão: ' + context.question : ''}`;
      chatHistory.push({
        role: 'user',
        parts: [{ text: contextText }]
      });
    }

    // Adiciona histórico de conversação
    if (history && Array.isArray(history)) {
      chatHistory.push(...history);
    }

    // Adiciona a pergunta atual
    chatHistory.push({
      role: 'user',
      parts: [{ text: question }]
    });

    // Gera o conteúdo
    const result = await model.generateContent({
      contents: chatHistory.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: msg.parts
      })),
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });

    const response = result.response;
    const text = response.text();

    return {
      response: text,
      text: text, // Compatibilidade
      success: true
    };

  } catch (error) {
    console.error('Erro na Cloud Function generateContent:', error);
    throw new Error(`Erro ao gerar conteúdo: ${error.message}`);
  }
});

