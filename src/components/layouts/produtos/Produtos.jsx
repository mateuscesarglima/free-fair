import React from "react";
import Container from "../container/Container";
import SectionStart from "../SectionStart/SectionStart";
import ProdutoCard from "./card/ProdutoCard";
import tomateImg from "../../../img/produtos/tomate.png";
import frutasImg from "../../../img/produtos/frutas.png";
import peixesImg from "../../../img/produtos/peixes.png";

import "./Produtos.css";

const Produtos = () => {
  return (
    <section className="produtos-section" id="produtos-section">
      <SectionStart>Produtos</SectionStart>
      <Container>
        <div className="produtos-cards grid grid-4-cols">
          <ProdutoCard
            title="Legumes"
            img={tomateImg}
            firstDesc="Abóbora"
            secondDesc="Batata-doce"
            thirdDesc="Pepino"
            fourthDesc="Pimentão"
          />
          <ProdutoCard
            title="Frutas"
            img={frutasImg}
            firstDesc="Cajá"
            secondDesc="Maçã"
            thirdDesc="Melancia"
            fourthDesc="Seriguela"
          />
          <ProdutoCard
            title="Frutos do mar"
            img={peixesImg}
            firstDesc="Lagosta"
            secondDesc="Polvo"
            thirdDesc="Lula"
            fourthDesc="Salmão"
          />
          <ProdutoCard
            title="Variados"
            img={frutasImg}
            firstDesc="Roupas"
            secondDesc="Jogos"
            thirdDesc="Acessórios para cozinha"
            fourthDesc="Joías"
          />
        </div>
      </Container>
    </section>
  );
};

export default Produtos;
