import { useState, type FormEvent } from 'react'
import { sendDemoRequest } from '../services/slack'
import { createDemoRestaurant, getAdminAppUrl } from '../services/demo'
import './CTA.css'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    whatsapp: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'creating' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!formData.name || !formData.restaurantName || !formData.email || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('creating')
    setErrorMessage('')

    try {
      // Send Slack notification (non-blocking)
      sendDemoRequest(formData).catch(console.error)

      // Create demo restaurant
      const result = await createDemoRestaurant({
        ownerName: formData.name,
        restaurantName: formData.restaurantName,
        email: formData.email,
        phone: formData.whatsapp,
      })

      setSubmitStatus('success')

      // Redirect to admin app with custom token for auto-login
      setTimeout(() => {
        window.location.href = `${getAdminAppUrl()}/login?demo_token=${encodeURIComponent(result.customToken)}`;
      }, 1500)
    } catch (error: any) {
      console.error('Error creating demo:', error)
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Ocorreu um erro ao criar sua demonstração.')
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
            
            {submitStatus === 'creating' ? (
              <div className="success-message">
                <span className="success-icon">🔧</span>
                <h3>Criando seu restaurante...</h3>
                <p>Estamos preparando tudo para você. Isso pode levar alguns segundos.</p>
              </div>
            ) : submitStatus === 'success' ? (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <h3>Restaurante criado com sucesso!</h3>
                <p>Redirecionando para o painel administrativo...</p>
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
                      Criando seu restaurante...
                    </>
                  ) : (
                    <>
                      Criar Demonstração Gratuita
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="error-message">
                    {errorMessage || 'Ocorreu um erro. Por favor, tente novamente.'}
                  </p>
                )}
              </form>
            )}
            
            <p className="cta-note">
              Sem compromisso. Acesso instantâneo por 24 horas.
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
