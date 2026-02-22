import { getAdminAppUrl } from '../services/demo'
import './Pricing.css'

const advantages = [
  'Gestão completa de pedidos (salão, delivery e iFood)',
  'Kitchen Display System (KDS) com alertas sonoros',
  'Controle total de estoque e pesagem de ingredientes',
  'Relatórios financeiros completos (Fluxo de caixa, DRE)',
  'Gestão de fornecedores e pedidos de compra',
  'App mobile para equipe registrar operações',
  'Impressão automática de comandas na cozinha',
  'Controle de mesas e reservas online',
  'Cardápio digital para delivery',
  'Integração com iFood',
  'Rastreamento automático de pagamentos PIX',
  'Checklists diários para equipe',
  'Registro de despesas e consumo interno',
  'Dashboard com métricas em tempo real',
  'Sistema de filas organizadas por estação',
  'Código de confirmação para pedidos',
  'Gestão de vouchers e promoções',
  'Controle de caixa completo',
  'Relatórios diários automatizados',
  'Suporte técnico dedicado',
]

export default function Pricing() {
  const signupUrl = `${getAdminAppUrl()}/signup`

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-title">
          <span className="badge">Planos</span>
          <h2>Investimento <span className="gradient-text">simples</span> e transparente</h2>
          <p>Tudo que você precisa em um único plano completo</p>
        </div>

        <div className="pricing-wrapper">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Plano Completo</h3>
              <p className="pricing-subtitle">Todas as funcionalidades incluídas</p>

              <div className="pricing-price">
                <span className="currency">R$</span>
                <span className="amount">197</span>
                <span className="period">/mês</span>
              </div>

              <p className="pricing-description">
                Acesso ilimitado a todas as funcionalidades do PandaPDV
              </p>
            </div>

            <div className="pricing-features">
              <h4 className="features-title">O que está incluído:</h4>
              <ul className="advantages-list">
                {advantages.map((advantage, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing-cta">
              <a href={signupUrl} className="btn btn-primary btn-large">
                Começar Agora
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <p className="pricing-note">
                Teste grátis por tempo limitado • Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
