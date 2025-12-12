# Script PowerShell para Deploy do Worker de IA
# Execute este script após fazer login no Cloudflare

Write-Host "🚀 Iniciando deploy do Worker de IA..." -ForegroundColor Cyan

# Verifica se está no diretório correto
if (-not (Test-Path "worker-ai-proxy.js")) {
    Write-Host "❌ Erro: Arquivo worker-ai-proxy.js não encontrado!" -ForegroundColor Red
    Write-Host "Execute este script no diretório do projeto." -ForegroundColor Yellow
    exit 1
}

# Verifica se wrangler está instalado
$wranglerVersion = wrangler --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Wrangler não encontrado. Instalando..." -ForegroundColor Yellow
    npm install -g wrangler
}

Write-Host "📦 Fazendo deploy do worker..." -ForegroundColor Cyan
wrangler deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Próximos passos:" -ForegroundColor Yellow
    Write-Host "1. Copie a URL do worker mostrada acima" -ForegroundColor White
    Write-Host "2. Abra o arquivo script.js" -ForegroundColor White
    Write-Host "3. Procure por: const AI_WORKER_URL = '';" -ForegroundColor White
    Write-Host "4. Cole a URL do worker entre as aspas" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Erro no deploy. Verifique se você está logado no Cloudflare." -ForegroundColor Red
    Write-Host "Execute: wrangler login" -ForegroundColor Yellow
}

