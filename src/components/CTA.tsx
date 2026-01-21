import { useState, type FormEvent } from 'react'
import { sendDemoRequest } from '../services/slack'
import './CTA.css'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    whatsapp: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    if (!formData.name || !formData.restaurantName || !formData.email || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const success = await sendDemoRequest(formData)
      
      if (success) {
        setSubmitStatus('success')
        setFormData({ name: '', restaurantName: '', email: '', whatsapp: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="badge">Comece agora</span>
            <h2>Pronto para transformar seu restaurante?</h2>
            <p>
              Agende uma demonstração gratuita e descubra como o PandaPDV pode 
              automatizar sua operação e aumentar seus resultados.
            </p>
            
            {submitStatus === 'success' ? (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <h3>Solicitação enviada com sucesso!</h3>
                <p>Entraremos em contato em até 24 horas.</p>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setSubmitStatus('idle')}
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                  <input 
                    type="text" 
                    placeholder="Nome do restaurante" 
                    className="form-input"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-row">
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                  <input 
                    type="tel" 
                    placeholder="WhatsApp (com DDD)" 
                    className="form-input"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Demonstração Gratuita
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="error-message">
                    ❌ Ocorreu um erro ao enviar. Por favor, tente novamente.
                  </p>
                )}
              </form>
            )}
            
            <p className="cta-note">
              Sem compromisso. Resposta em até 24 horas.
            </p>
          </div>
          
          <div className="cta-decoration">
            <div className="cta-circle cta-circle-1"></div>
            <div className="cta-circle cta-circle-2"></div>
            <div className="cta-circle cta-circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
