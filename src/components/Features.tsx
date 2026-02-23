import './Features.css'

const features = [
  {
    icon: '🍽️',
    title: 'Gestão de Pedidos',
    description: 'Controle completo de pedidos do salão, delivery e iFood. Acompanhe em tempo real o status de cada pedido.',
  },
  {
    icon: '👨‍🍳',
    title: 'Kitchen Display (KDS)',
    description: 'Tela dedicada para a cozinha com fila de pedidos organizada e notificações sonoras para novos itens.',
  },
  {
    icon: '📊',
    title: 'Relatórios Financeiros',
    description: 'Fluxo de caixa, DRE, relatórios diários e análises detalhadas para tomada de decisão.',
  },
  {
    icon: '📦',
    title: 'Controle de Estoque',
    description: 'Pesagem semanal de ingredientes, gestão de fornecedores e pedidos de compra integrados.',
  },
  {
    icon: '📱',
    title: 'App para Equipe',
    description: 'Aplicativo mobile para funcionários registrarem transações, pesagens e acessarem informações.',
  },
  {
    icon: '🖨️',
    title: 'Impressão Automática',
    description: 'Impressão automática de comandas na cozinha com sistema de confirmação e prevenção de duplicatas.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-title">
          <h2>Tudo que você precisa para <span className="gradient-text">gerenciar</span> seu restaurante</h2>
          <p>Módulos integrados que automatizam sua operação do início ao fim</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
