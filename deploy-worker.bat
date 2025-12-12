@echo off
REM Script Batch para Deploy do Worker de IA
REM Execute este script após fazer login no Cloudflare

echo.
echo 🚀 Iniciando deploy do Worker de IA...
echo.

REM Verifica se está no diretório correto
if not exist "worker-ai-proxy.js" (
    echo ❌ Erro: Arquivo worker-ai-proxy.js não encontrado!
    echo Execute este script no diretório do projeto.
    pause
    exit /b 1
)

echo 📦 Fazendo deploy do worker...
wrangler deploy

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Deploy concluído com sucesso!
    echo.
    echo 📝 Próximos passos:
    echo 1. Copie a URL do worker mostrada acima
    echo 2. Abra o arquivo script.js
    echo 3. Procure por: const AI_WORKER_URL = '';
    echo 4. Cole a URL do worker entre as aspas
    echo.
) else (
    echo.
    echo ❌ Erro no deploy. Verifique se você está logado no Cloudflare.
    echo Execute: wrangler login
    echo.
)

pause

