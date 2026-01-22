import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

  if (!SLACK_WEBHOOK_URL) {
    console.error('SLACK_WEBHOOK_URL environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, restaurantName, email, whatsapp } = req.body;

    // Validate required fields
    if (!name || !restaurantName || !email || !whatsapp) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const message =
      `🐼 *Nova Solicitação de Demo - PandaPDV*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `🍽️ *Restaurante:* ${restaurantName}\n` +
      `📧 *E-mail:* ${email}\n` +
      `📱 *WhatsApp:* ${whatsapp}\n` +
      `🕐 *Data/Hora:* ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`;

    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
      }),
    });

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      console.error('Slack webhook error:', errorText);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending demo request to Slack:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
