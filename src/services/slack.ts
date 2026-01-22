export interface DemoRequestData {
  name: string;
  restaurantName: string;
  email: string;
  whatsapp: string;
}

// For local development, we need to call Slack directly since Vercel functions don't run locally
// In production, we use the API route
const isDev = import.meta.env.DEV;
const SLACK_WEBHOOK_URL = import.meta.env.VITE_SLACK_WEBHOOK_URL;

async function sendViaApi(data: DemoRequestData): Promise<boolean> {
  const response = await fetch('/api/send-demo-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Error sending demo request:', errorData);
    return false;
  }

  return true;
}

async function sendDirectToSlack(data: DemoRequestData): Promise<boolean> {
  console.log({SLACK_WEBHOOK_URL})
  if (!SLACK_WEBHOOK_URL) {
    console.error('VITE_SLACK_WEBHOOK_URL environment variable is not set');
    return false;
  }

  const message =
    `🐼 *Nova Solicitação de Demo - PandaPDV*\n\n` +
    `👤 *Nome:* ${data.name}\n` +
    `🍽️ *Restaurante:* ${data.restaurantName}\n` +
    `📧 *E-mail:* ${data.email}\n` +
    `📱 *WhatsApp:* ${data.whatsapp}\n` +
    `🕐 *Data/Hora:* ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`;

  // Use a CORS proxy for local development
  const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(SLACK_WEBHOOK_URL);

  console.log({proxyUrl, message})
  
  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: message }),
  });

  if (!response.ok) {
    console.error('Slack webhook error:', response.status, await response.text());
    return false;
  }

  return true;
}

export async function sendDemoRequest(data: DemoRequestData): Promise<boolean> {
  try {
    if (isDev) {
      return await sendDirectToSlack(data);
    }
    return await sendViaApi(data);
  } catch (error) {
    console.error('Error sending demo request to Slack:', error);
    return false;
  }
}
