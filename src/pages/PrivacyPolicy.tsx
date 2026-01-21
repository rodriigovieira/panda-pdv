import { Link } from 'react-router-dom'
import './LegalPage.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link to="/" className="back-link">← Voltar ao início</Link>
        
        <h1>Política de Privacidade</h1>
        <p className="last-updated">Última atualização: Janeiro de 2026</p>

        <section>
          <p>
            A PandaPDV, plataforma de gestão para restaurantes, preza pela privacidade 
            dos seus clientes e usuários, e se compromete a proteger as informações 
            pessoais coletadas e/ou armazenadas em seus sistemas.
          </p>
        </section>

        <section>
          <h2>1. Coleta de Informações</h2>
          <p>A PandaPDV coleta informações dos usuários por meio dos seguintes meios:</p>
          <ul>
            <li>
              <strong>Cadastro na plataforma:</strong> para utilizar nossos serviços, é 
              necessário que o usuário faça um cadastro, informando nome completo, 
              nome do estabelecimento, telefone e endereço de e-mail.
            </li>
            <li>
              <strong>Uso da plataforma:</strong> coletamos informações sobre o uso 
              das funcionalidades, incluindo pedidos processados, dados financeiros 
              do estabelecimento e logs de operação.
            </li>
            <li>
              <strong>Navegação:</strong> coletamos informações sobre as páginas 
              visitadas, tempo de navegação, dispositivo utilizado e outros dados 
              relacionados à navegação em nossa plataforma.
            </li>
            <li>
              <strong>Suporte:</strong> coletamos informações fornecidas pelos 
              usuários que entram em contato com nosso suporte técnico.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Uso das Informações</h2>
          <p>Utilizamos as informações coletadas para as seguintes finalidades:</p>
          <ul>
            <li>
              <strong>Prestação dos serviços:</strong> fornecer a plataforma de gestão, 
              incluindo processamento de pedidos, relatórios financeiros e todas as 
              funcionalidades contratadas.
            </li>
            <li>
              <strong>Melhoria dos serviços:</strong> aprimorar a plataforma, desenvolver 
              novas funcionalidades e personalizar a experiência do usuário.
            </li>
            <li>
              <strong>Comunicação:</strong> enviar atualizações, notificações de sistema 
              e informações relevantes sobre a plataforma.
            </li>
            <li>
              <strong>Cumprimento legal:</strong> cumprir obrigações legais e regulatórias.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Compartilhamento de Informações</h2>
          <p>
            A PandaPDV pode compartilhar as informações dos usuários com terceiros 
            nas seguintes situações:
          </p>
          <ul>
            <li>
              <strong>Fornecedores de serviços:</strong> empresas que atuam em nosso 
              nome, incluindo serviços de hospedagem, processamento de pagamentos e 
              integrações autorizadas (ex: iFood).
            </li>
            <li>
              <strong>Obrigações legais:</strong> quando exigido por lei ou autoridade 
              competente.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Segurança</h2>
          <p>
            A PandaPDV está comprometida em proteger as informações dos usuários e 
            utiliza medidas de segurança adequadas, incluindo criptografia, firewalls 
            e controles de acesso. No entanto, nenhum sistema é completamente infalível.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar a experiência de 
            navegação, manter sessões de login e coletar dados analíticos. Os usuários 
            podem configurar seus navegadores para aceitar ou rejeitar cookies.
          </p>
        </section>

        <section>
          <h2>6. Alterações</h2>
          <p>
            A PandaPDV se reserva o direito de modificar esta Política de Privacidade 
            a qualquer momento. Alterações significativas serão comunicadas aos usuários.
          </p>
        </section>

        <section>
          <h2>7. Contato</h2>
          <p>
            Para dúvidas sobre esta Política de Privacidade, entre em contato através 
            do e-mail: <a href="mailto:contato@pandapdv.com.br">contato@pandapdv.com.br</a>
          </p>
        </section>
      </div>
    </div>
  )
}
