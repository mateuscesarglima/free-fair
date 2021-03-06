import iconImg from "../../../img/logos/carrinho.png";
import Link from "../Link/LinkButton";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo-box">
        <img src={iconImg} className="logoImg" alt="logo carrinho de compras" />
      </div>
      <ul className="list-box">
        <li className="list-box-item">
          <Link customClass="nav-btn" to="produtos-section">
            Produtos
          </Link>
        </li>
        <li className="list-box-item">
          <Link customClass="nav-btn" to="localization-section">
            localização
          </Link>
        </li>
        <li className="list-box-item">
          <Link customClass="nav-btn" to="feirantes-section">
            Feirantes
          </Link>
        </li>
        <li className="list-box-item">
          <Link customClass="nav-btn" to="depoimentos-section">
            Depoimentos
          </Link>
        </li>
        <li className="list-box-item">
          <a
            customClass="nav-btn"
            href="https://www.instagram.com/_mateuscesar_/?hl=pt-br"
            target="_blank"
            rel="noreferrer noopener"
            className="instagram"
            style={{textDecoration: "none", color: "#FFF"}}
          >
            Sobre mim
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
