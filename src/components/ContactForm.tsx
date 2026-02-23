import { useState } from 'react'
import { sendContactMessage } from '../services/slack'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const success = await sendContactMessage(formData)

    if (success) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 5000)
    }

    setSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-header">
        <h2>Entre em Contato</h2>
        <p>Preencha o formulário e entraremos em contato em breve</p>
      </div>

      {submitted && (
        <div className="success-message">
          ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {error && (
        <div className="error-message">
          ✗ Erro ao enviar mensagem. Por favor, tente novamente.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Como podemos ajudar?"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-large"
          disabled={submitting}
        >
          {submitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  )
}
