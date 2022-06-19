import React from "react";
import Container from "../container/Container";
import SectionStart from "../SectionStart/SectionStart";
import ProdutoCard from "./card/ProdutoCard";
import tomateImg from "../../../img/produtos/tomate.png"

import "./Produtos.css";

const Produtos = () => {
  return (
    <section className="produtos=section" id="produtos-section">
      <SectionStart>Produtos</SectionStart>
      <Container>
        <div className="produtos-cards grid grid-4-cols">
          <ProdutoCard title={"Legumes"} img={tomateImg} />
          <ProdutoCard title={"testando"} img={tomateImg} />
          <ProdutoCard title={"testando"} img={tomateImg} />
          <ProdutoCard title={"testando"} img={tomateImg} />
        </div>
      </Container>
    </section>
  );
};

export default Produtos;
