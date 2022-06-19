import Nav from "../nav/Nav";
import LinkButton from "../Link/LinkButton";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-box" id="header-container">
      <Nav />
      <section className="hero-section-box">
        <div className="hero grid grid-2-cols">
          <div className="hero-text-box">
            <h1 className="heading-primary">Feira da parangaba</h1>
            <p className="informacoes-parangaba">
              A sua tradicional feira que ocorre todos os domingos tendo de tudo
              que você necessita por aquele preço baixo que todos gostam!
            </p>
            <LinkButton customClass="btn-saiba-mais" to={"localization-section"}>
              Saiba mais!
            </LinkButton>
          </div>
          <div></div>
        </div>
      </section>
    </header>
  );
};

export default Header;
