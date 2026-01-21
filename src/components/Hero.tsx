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
