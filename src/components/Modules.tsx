import './Modules.css'

const modules = [
  {
    title: 'Painel Administrativo',
    description: 'Dashboard completo para gestão do restaurante. Controle de pedidos, mesas, reservas, finanças e relatórios.',
    features: ['Gestão de pedidos', 'Controle de mesas', 'Reservas online', 'Relatórios detalhados'],
    color: 'orange',
  },
  {
    title: 'Kitchen Display System',
    description: 'Tela dedicada para organização da cozinha. Visualize pedidos em tempo real com alertas sonoros.',
    features: ['Fila de pedidos', 'Alertas sonoros', 'Separação por estação', 'Código de confirmação'],
    color: 'rose',
  },
  {
    title: 'App Mobile',
    description: 'Aplicativo para funcionários acessarem informações importantes e registrarem operações.',
    features: ['Registro de despesas', 'Pesagem de estoque', 'Checklists diários', 'Relatórios móveis'],
    color: 'amber',
  },
  {
    title: 'Cardápio Digital',
    description: 'Menu online para clientes fazerem pedidos de delivery ou visualizarem opções do salão.',
    features: ['Pedidos delivery', 'Cardápio salão', 'Integração iFood', 'Rastreamento PIX'],
    color: 'emerald',
  },
]

export default function Modules() {
  return (
    <section id="modules" className="modules section">
      <div className="container">
        <div className="section-title">
          <span className="badge">Módulos</span>
          <h2>Ecossistema <span className="gradient-text">completo</span></h2>
          <p>Plataformas integradas que trabalham juntas para automatizar sua operação</p>
        </div>

        <div className="modules-grid">
          {modules.map((module, index) => (
            <div key={index} className={`module-card module-${module.color}`}>
              <div className="module-content">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <ul className="module-features">
                  {module.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="module-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
