import type { VercelRequest, VercelResponse } from '@vercel/node'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const data: ContactFormData = req.body

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Get Slack webhook URL from environment variables
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL environment variable is not set')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    // Format message for Slack
    const message =
      `📬 *Nova Mensagem de Contato - PandaPDV*\n\n` +
      `👤 *Nome:* ${data.name}\n` +
      `📧 *E-mail:* ${data.email}\n` +
      `📱 *Telefone:* ${data.phone || 'Não informado'}\n` +
      `💬 *Mensagem:*\n${data.message}\n\n` +
      `🕐 *Data/Hora:* ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: message }),
    })

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text()
      console.error('Slack webhook error:', slackResponse.status, errorText)
      return res.status(500).json({ error: 'Failed to send notification' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
