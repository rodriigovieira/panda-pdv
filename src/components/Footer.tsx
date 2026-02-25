import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/panda.png" alt="Panda" className="logo-icon" />
              <span className="logo-text">Panda<span className="logo-accent">PDV</span></span>
            </Link>
            <p>Sistema completo para gestão de restaurantes. Simplifique sua operação e aumente seus resultados.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Produto</h4>
              <ul>
                <li><Link to="/features">Funcionalidades</Link></li>
                <li><Link to="/modules">Módulos</Link></li>
                <li><Link to="/pricing">Preços</Link></li>
                <li><Link to="/contact">Demonstração</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li><Link to="/contact">Contato</Link></li>
                <li><a href="mailto:contato@pandapdv.com.br">E-mail</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/termos-de-uso">Termos de Uso</Link></li>
                <li><Link to="/politica-de-privacidade">Privacidade</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} PandaPDV. Todos os direitos reservados.</p>
          <p>CNPJ: 35.237.566/0001-16 | E-mail: <a href="mailto:contato@pandapdv.com.br">contato@pandapdv.com.br</a></p>
          <p>Desenvolvido por <a href="https://tatsuki.com.br" target="_blank" rel="noopener noreferrer">Tatsuki</a></p>
        </div>
      </div>
    </footer>
  )
}
