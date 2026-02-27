import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="badge animate-fade-in-up">
              ✨ Sistema completo para restaurantes
            </span>
            
            <h1 className="animate-fade-in-up animate-delay-100">
              Gerencie seu restaurante com{' '}
              <span className="gradient-text">inteligência</span>
            </h1>
            
            <p className="hero-description animate-fade-in-up animate-delay-200">
              O PandaPDV é uma solução completa para gestão de restaurantes. 
              Controle pedidos, cozinha, estoque, financeiro e muito mais em uma única plataforma.
            </p>
            
            <div className="hero-actions animate-fade-in-up animate-delay-300">
              <a href="#contact" className="btn btn-primary btn-large">
                Solicitar Demonstração
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#features" className="btn btn-secondary btn-large">
                Ver Funcionalidades
              </a>
            </div>

            <div className="app-download-section animate-fade-in-up animate-delay-350">
              <p className="app-download-label">Baixe nosso aplicativo:</p>
              <div className="app-download-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.br.pandapdv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-store-button"
                  aria-label="Baixar na Google Play Store"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="app-button-text">
                    <span className="app-button-small">Disponível no</span>
                    <span className="app-button-large">Google Play</span>
                  </div>
                </a>

                <a
                  href="https://apps.apple.com/us/app/pandapdv-gest%C3%A3o-completa/id6758158610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-store-button"
                  aria-label="Baixar na App Store"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div className="app-button-text">
                    <span className="app-button-small">Baixe na</span>
                    <span className="app-button-large">App Store</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="hero-stats animate-fade-in-up animate-delay-400">
              <div className="hero-stat">
                <span className="hero-stat-value">+5000</span>
                <span className="hero-stat-label">Pedidos/mês</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-value">99.9%</span>
                <span className="hero-stat-label">Uptime</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-value">24/7</span>
                <span className="hero-stat-label">Suporte</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-float">
            <div className="hero-image-container">
              <div className="hero-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="mockup-title">PandaPDV Dashboard</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-sidebar">
                    <div className="mockup-menu-item active"></div>
                    <div className="mockup-menu-item"></div>
                    <div className="mockup-menu-item"></div>
                    <div className="mockup-menu-item"></div>
                    <div className="mockup-menu-item"></div>
                  </div>
                  <div className="mockup-main">
                    <div className="mockup-cards">
                      <div className="mockup-card orange"></div>
                      <div className="mockup-card rose"></div>
                      <div className="mockup-card amber"></div>
                    </div>
                    <div className="mockup-chart"></div>
                    <div className="mockup-table">
                      <div className="mockup-row"></div>
                      <div className="mockup-row"></div>
                      <div className="mockup-row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
