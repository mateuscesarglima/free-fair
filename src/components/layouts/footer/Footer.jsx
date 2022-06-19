import LinkButton from "../../layouts/Link/LinkButton";
import Container from "../container/Container";
import logo from "../../../img/logos/carrinho.png";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="grid grid--footer">
          <div className="logo-col">
            <LinkButton to="header-container">
              <img src={logo} alt="logo" />
            </LinkButton>
            <ul className="social-links">
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <AiOutlineFacebook />
              </li>
              <li>
                <AiOutlineYoutube />
              </li>
            </ul>
          </div>
          <div className="address-col">
            <p className="footer-heading">
              Contate-me
            </p>
            <ul className="footer-list">
              <li className="footer-list-item">Rua xxxxx</li>
              <li className="footer-list-item">fulano@dale.com</li>
              <li className="footer-list-item">cep: 151515151</li>
              <li className="footer-list-item">caixa postal: xxxxxx</li>
            </ul>
          </div>
          <div className="nav-col">
          <p className="footer-heading">
              Navegue
            </p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <LinkButton to="header-section" >Seção inicial</LinkButton>
              </li>
              <li className="footer-list-item">
                <LinkButton to="localization-section">Localização</LinkButton>
              </li>
              <li className="footer-list-item">
                <LinkButton to="produtos-section">Produtos</LinkButton>
              </li>
              <li className="footer-list-item">
                <LinkButton to="depoimentos-section">Depoimentos</LinkButton>
              </li>
              <li className="footer-list-item">
                <LinkButton to="feirantes-section" >Feirantes</LinkButton>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
