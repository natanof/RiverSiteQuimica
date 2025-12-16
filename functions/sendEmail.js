const { Resend } = require('resend');
const functions = require('firebase-functions');

// Inicializa o Resend com a API key (deve ser configurada como variável de ambiente)
const resend = new Resend(process.env.RESEND_API_KEY || functions.config().resend?.api_key);

/**
 * Cloud Function para enviar emails via Resend
 * 
 * Tipos de email suportados:
 * - 'recover-password': Email de recuperação de senha
 * - 'password-changed': Email de confirmação de alteração de senha
 */
exports.sendEmail = functions.https.onCall(async (data, context) => {
  // Validação básica
  if (!data.type || !data.to || !data.data) {
    throw new functions.https.HttpsError('invalid-argument', 'Parâmetros obrigatórios: type, to, data');
  }

  const { type, to, data: emailData } = data;

  try {
    let emailContent;

    switch (type) {
      case 'recover-password':
        emailContent = {
          from: process.env.RESEND_FROM_EMAIL || functions.config().resend?.from_email || 'noreply@seu-dominio.com',
          to: [to],
          subject: 'Recuperação de Senha - Portal do Professor',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #8b5cf6, #6366f1); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
                .password-box { background: #eff6ff; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
                .password { font-size: 24px; font-weight: bold; color: #2563eb; font-family: monospace; letter-spacing: 3px; }
                .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
                .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">🔐 Recuperação de Senha</h1>
                </div>
                <div class="content">
                  <p>Olá, <strong>${emailData.nome || emailData.username}</strong>!</p>
                  
                  <p>Você solicitou a recuperação da senha do seu acesso ao Portal do Professor.</p>
                  
                  <div class="info-box">
                    <p style="margin: 0 0 10px 0;"><strong>Usuário:</strong> ${emailData.username}</p>
                    <p style="margin: 0;"><strong>Email:</strong> ${to}</p>
                  </div>
                  
                  <div class="password-box">
                    <p style="margin: 0 0 10px 0; color: #64748b;">Sua senha atual:</p>
                    <div class="password">${emailData.password}</div>
                  </div>
                  
                  <div class="warning">
                    <p style="margin: 0;"><strong>⚠️ Importante:</strong> Por segurança, recomendamos que você altere sua senha após fazer login no portal.</p>
                  </div>
                  
                  <p style="margin-top: 30px;">Se você não solicitou esta recuperação, ignore este email.</p>
                </div>
                <div class="footer">
                  <p>Portal do Professor — Química Orgânica</p>
                  <p style="font-size: 12px;">Este é um email automático, por favor não responda.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        };
        break;

      case 'password-changed':
        emailContent = {
          from: process.env.RESEND_FROM_EMAIL || functions.config().resend?.from_email || 'noreply@seu-dominio.com',
          to: [to],
          subject: 'Senha Alterada com Sucesso - Portal do Professor',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .success-box { background: #d1fae5; border-left: 4px solid #10b981; padding: 20px; border-radius: 8px; margin: 20px 0; }
                .info-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
                .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">✅ Senha Alterada</h1>
                </div>
                <div class="content">
                  <p>Olá, <strong>${emailData.nome || emailData.username}</strong>!</p>
                  
                  <div class="success-box">
                    <p style="margin: 0; font-weight: bold; color: #047857;">Sua senha foi alterada com sucesso!</p>
                  </div>
                  
                  <div class="info-box">
                    <p style="margin: 0 0 10px 0;"><strong>Usuário:</strong> ${emailData.username}</p>
                    <p style="margin: 0;"><strong>Data da alteração:</strong> ${new Date().toLocaleString('pt-BR')}</p>
                  </div>
                  
                  <div class="warning">
                    <p style="margin: 0;"><strong>⚠️ Importante:</strong> Se você não realizou esta alteração, entre em contato imediatamente com o administrador do sistema.</p>
                  </div>
                  
                  <p style="margin-top: 30px;">Agora você pode fazer login com sua nova senha no Portal do Professor.</p>
                </div>
                <div class="footer">
                  <p>Portal do Professor — Química Orgânica</p>
                  <p style="font-size: 12px;">Este é um email automático, por favor não responda.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        };
        break;

      default:
        throw new functions.https.HttpsError('invalid-argument', 'Tipo de email não suportado');
    }

    // Envia o email via Resend
    const result = await resend.emails.send(emailContent);

    return {
      success: true,
      messageId: result.id,
      message: 'Email enviado com sucesso'
    };

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new functions.https.HttpsError('internal', 'Erro ao enviar email: ' + error.message);
  }
});

