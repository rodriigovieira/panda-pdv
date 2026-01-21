const SLACK_WEBHOOK_URL = import.meta.env.VITE_SLACK_WEBHOOK_URL;

export interface DemoRequestData {
  name: string;
  restaurantName: string;
  email: string;
  whatsapp: string;
}

export async function sendDemoRequest(data: DemoRequestData): Promise<boolean> {
  try {
    const message = `🐼 *Nova Solicitação de Demo - PandaPDV*\n\n` +
      `👤 *Nome:* ${data.name}\n` +
      `🍽️ *Restaurante:* ${data.restaurantName}\n` +
      `📧 *E-mail:* ${data.email}\n` +
      `📱 *WhatsApp:* ${data.whatsapp}\n` +
      `🕐 *Data/Hora:* ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`;

    await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors", // Slack webhooks don't support CORS from browser
      body: JSON.stringify({
        text: message,
      }),
    });

    // With no-cors mode, we can't read the response, but if fetch doesn't throw, it likely succeeded
    return true;
  } catch (error) {
    console.error("Error sending demo request to Slack:", error);
    return false;
  }
}
