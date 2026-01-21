import './Stats.css'

const stats = [
  {
    value: '+5.000',
    label: 'Pedidos processados por mês',
    icon: '📦',
  },
  {
    value: '30%',
    label: 'Redução em tempo de atendimento',
    icon: '⚡',
  },
  {
    value: '99.9%',
    label: 'Disponibilidade do sistema',
    icon: '🛡️',
  },
  {
    value: '0',
    label: 'Pedidos perdidos',
    icon: '✅',
  },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
