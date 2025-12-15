// Cloudflare Worker para fazer proxy da Workers AI
// Este worker resolve o problema de CORS permitindo requisições do navegador
// e usa apenas modelos de IA da Cloudflare (Workers AI).

// IMPORTANTE:
// - No wrangler.toml precisa ter:
//   [ai]
//   binding = "AI"
//
// - O front-end deve enviar POST com body:
//   { "prompt": "texto da pergunta", "model": "@cf/meta/llama-3-8b-instruct" (opcional) }

const DEFAULT_MODEL = '@cf/meta/llama-3-8b-instruct';

function corsHeaders(extra = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
    'Access-Control-Allow-Headers': 'Content-Type, Cache-Control',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json',
    ...extra,
  };
}

export default {
  async fetch(request, env, ctx) {
    // Pré‑flight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    // GET para teste rápido
    if (request.method === 'GET') {
      const body = {
        status: 'ok',
        message: 'AI Proxy Worker (Workers AI) está funcionando',
        usage: 'POST / com body: { prompt: string, model?: string }',
        defaultModel: DEFAULT_MODEL,
      };
      return new Response(JSON.stringify(body), {
        headers: corsHeaders(),
        status: 200,
      });
    }

    // Aceita apenas POST para geração de texto
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed. Use POST.' }),
        { status: 405, headers: corsHeaders() },
      );
    }

    try {
      const body = await request.json().catch(() => null);

      if (!body || typeof body !== 'object') {
        return new Response(
          JSON.stringify({ error: 'Body inválido. Envie JSON.' }),
          { status: 400, headers: corsHeaders() },
        );
      }

      const prompt = (body.prompt || '').toString().trim();
      const model = (body.model || DEFAULT_MODEL).toString();

      if (!prompt) {
        return new Response(
          JSON.stringify({ error: 'Campo "prompt" é obrigatório.' }),
          { status: 400, headers: corsHeaders() },
        );
      }

      // Chamada para Workers AI (modelo de texto)
      // Usando formato de chat para melhor controle
      const messages = [
        {
          role: 'system',
          content:
            'Você é um assistente de estudos para alunos do ensino médio, especializado em QUÍMICA. ' +
            'Responda SEMPRE em português brasileiro, de forma clara, didática e amigável. ' +
            'Explique conceitos de química (principalmente química orgânica), tire dúvidas teóricas e resolva exercícios. ' +
            'Quando houver cálculos, mostre o passo a passo: fórmula usada, substituição de valores, contas intermediárias e resultado com unidade. ' +
            'Organize respostas em parágrafos separados por linhas em branco e, quando for útil, use listas numeradas (1., 2., 3.) ou com traços (-) para os passos. ' +
            'Não use negrito nem sintaxe de markdown; responda apenas com texto simples bem organizado. ' +
            'Evite dar só a resposta final; dê sempre o raciocínio.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ];

      const aiResponse = await env.AI.run(model, { messages });

      // Normaliza a resposta em uma string simples
      let text = '';

      // Formato padrão de chat do Workers AI
      if (aiResponse && typeof aiResponse.response === 'string') {
        text = aiResponse.response;
      }
      // Outros formatos possíveis (fallbacks)
      else if (Array.isArray(aiResponse) && aiResponse[0]?.generated_text) {
        text = aiResponse[0].generated_text;
      } else if (aiResponse?.generated_text) {
        text = aiResponse.generated_text;
      }

      text = (text || '').toString().trim();

      if (!text) {
        return new Response(
          JSON.stringify({
            error: 'Não foi possível gerar resposta com a IA.',
          }),
          { status: 502, headers: corsHeaders() },
        );
      }

      const result = { text };

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: corsHeaders(),
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error?.message || 'Erro interno no Worker',
          details: error?.toString?.() || String(error),
        }),
        { status: 500, headers: corsHeaders() },
      );
    }
  },
};
