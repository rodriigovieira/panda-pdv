import { getAdminAppUrl } from '../services/demo'
import './CTA.css'

export default function CTA() {
  const signupUrl = `${getAdminAppUrl()}/signup`

  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="badge">Comece agora</span>
            <h2>Pronto para transformar seu restaurante?</h2>
            <p>
              Crie sua conta gratuita e descubra como o PandaPDV pode
              automatizar sua operação e aumentar seus resultados.
            </p>

            <a
              href={signupUrl}
              className="btn btn-primary btn-large"
            >
              Criar Demonstração Gratuita
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <p className="cta-note">
              Sem compromisso. Teste grátis por tempo limitado.
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
