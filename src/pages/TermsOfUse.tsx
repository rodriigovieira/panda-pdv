import { Link } from 'react-router-dom'
import './LegalPage.css'

export default function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link to="/" className="back-link">← Voltar ao início</Link>
        
        <h1>Termos de Uso</h1>
        <p className="last-updated">Última atualização: Janeiro de 2026</p>

        <section>
          <p>
            Bem-vindo ao PandaPDV. Ao utilizar nossa plataforma, você concorda com 
            estes Termos de Uso. Por favor, leia-os atentamente.
          </p>
        </section>

        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou utilizar a plataforma PandaPDV, você concorda em cumprir 
            estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você 
            não concordar com algum destes termos, não deverá utilizar nossos serviços.
          </p>
        </section>

        <section>
          <h2>2. Descrição do Serviço</h2>
          <p>
            O PandaPDV é uma plataforma de gestão para restaurantes que oferece:
          </p>
          <ul>
            <li>Sistema de gerenciamento de pedidos</li>
            <li>Kitchen Display System (KDS)</li>
            <li>Controle de estoque e inventário</li>
            <li>Relatórios financeiros e operacionais</li>
            <li>Integração com aplicativos de delivery</li>
            <li>Sistema de impressão de comandas</li>
            <li>Aplicativo mobile para funcionários</li>
            <li>Cardápio digital para clientes</li>
          </ul>
        </section>

        <section>
          <h2>3. Cadastro e Conta</h2>
          <p>Para utilizar nossos serviços, você deve:</p>
          <ul>
            <li>Fornecer informações precisas e completas durante o cadastro</li>
            <li>Manter suas credenciais de acesso em sigilo</li>
            <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
            <li>Ser responsável por todas as atividades realizadas em sua conta</li>
          </ul>
        </section>

        <section>
          <h2>4. Uso Aceitável</h2>
          <p>Você concorda em não:</p>
          <ul>
            <li>Violar qualquer lei ou regulamento aplicável</li>
            <li>Interferir no funcionamento da plataforma</li>
            <li>Tentar acessar dados de outros usuários sem autorização</li>
            <li>Utilizar a plataforma para fins ilegais ou não autorizados</li>
            <li>Transmitir vírus ou códigos maliciosos</li>
          </ul>
        </section>

        <section>
          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todos os direitos de propriedade intelectual da plataforma PandaPDV, 
            incluindo software, design, logos e conteúdo, pertencem exclusivamente 
            à PandaPDV. É proibida a reprodução, modificação ou distribuição sem 
            autorização expressa.
          </p>
        </section>

        <section>
          <h2>6. Dados e Privacidade</h2>
          <p>
            O tratamento de dados pessoais está sujeito à nossa{' '}
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>, 
            que integra estes Termos de Uso.
          </p>
        </section>

        <section>
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A PandaPDV não será responsável por danos indiretos, incidentais ou 
            consequenciais decorrentes do uso ou impossibilidade de uso da plataforma, 
            incluindo perda de dados, lucros cessantes ou interrupção de negócios.
          </p>
        </section>

        <section>
          <h2>8. Disponibilidade</h2>
          <p>
            Empenhamo-nos em manter a plataforma disponível 24 horas por dia, 7 dias 
            por semana, mas não garantimos disponibilidade ininterrupta. Manutenções 
            programadas serão comunicadas com antecedência quando possível.
          </p>
        </section>

        <section>
          <h2>9. Alterações</h2>
          <p>
            A PandaPDV pode modificar estes Termos de Uso a qualquer momento. 
            Alterações significativas serão comunicadas aos usuários. O uso 
            continuado da plataforma após alterações constitui aceitação dos 
            novos termos.
          </p>
        </section>

        <section>
          <h2>10. Rescisão</h2>
          <p>
            A PandaPDV pode suspender ou encerrar seu acesso à plataforma por 
            violação destes termos ou por qualquer outro motivo, a seu critério.
          </p>
        </section>

        <section>
          <h2>11. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa 
            do Brasil. Qualquer disputa será submetida aos tribunais da cidade 
            de Florianópolis, SC.
          </p>
        </section>

        <section>
          <h2>12. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos de Uso, entre em contato através 
            do e-mail: <a href="mailto:contato@pandapdv.com.br">contato@pandapdv.com.br</a>
          </p>
        </section>
      </div>
    </div>
  )
}
