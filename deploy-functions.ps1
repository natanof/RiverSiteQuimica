# Script para fazer deploy da Cloud Function
# Execute este script após fazer login no Firebase

Write-Host "=== Deploy da Cloud Function Firebase AI Logic ===" -ForegroundColor Cyan
Write-Host ""

# Verifica se está logado
Write-Host "Verificando login no Firebase..." -ForegroundColor Yellow
$loginCheck = firebase login:list 2>&1
if ($loginCheck -match "No authorized accounts") {
    Write-Host "ERRO: Você precisa fazer login no Firebase primeiro!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Execute o comando:" -ForegroundColor Yellow
    Write-Host "  firebase login" -ForegroundColor White
    Write-Host ""
    Write-Host "Depois execute este script novamente." -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Login verificado" -ForegroundColor Green
Write-Host ""

# Verifica se as dependências estão instaladas
Write-Host "Verificando dependências..." -ForegroundColor Yellow
if (-not (Test-Path "functions\node_modules")) {
    Write-Host "Instalando dependências..." -ForegroundColor Yellow
    Set-Location functions
    npm install
    Set-Location ..
}

Write-Host "✓ Dependências verificadas" -ForegroundColor Green
Write-Host ""

# Faz o deploy
Write-Host "Fazendo deploy da função generateContent..." -ForegroundColor Yellow
Write-Host ""
firebase deploy --only functions:generateContent

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "A função está disponível e o assistente de IA deve funcionar agora." -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "✗ Erro no deploy. Verifique os logs acima." -ForegroundColor Red
}

