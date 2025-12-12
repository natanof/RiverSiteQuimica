// Cloudflare Worker para fazer proxy da API do Hugging Face
// Este worker resolve o problema de CORS permitindo requisições do navegador

// Usa a sintaxe mais compatível do Cloudflare Workers
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Permite CORS para todas as origens
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
        'Access-Control-Allow-Headers': 'Content-Type, Cache-Control',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Aceita GET para teste e POST para requisições
  if (request.method === 'GET') {
    return new Response(JSON.stringify({ 
      status: 'ok', 
      message: 'AI Proxy Worker está funcionando',
      endpoint: 'POST / com body: { model: string, data: object }'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  // Apenas aceita POST para requisições de IA
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed. Use POST.' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const body = await request.json();
    const model = body.model || 'mistralai/Mistral-7B-Instruct-v0.2';
    
    // Valida o body
    if (!body.data || !body.data.inputs) {
      return new Response(JSON.stringify({ 
        error: 'Invalid request body. Expected: { model: string, data: { inputs: string, parameters: object } }' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    
    // Faz a requisição para a API do Hugging Face
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body.data),
    });

    const data = await response.json();

    // Retorna com CORS habilitado
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
        'Access-Control-Allow-Headers': 'Content-Type, Cache-Control',
      },
      status: response.status,
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal server error',
      details: error.toString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      status: 500,
    });
  }
}

