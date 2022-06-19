import React from "react";
import SectionStart from "../SectionStart/SectionStart";
import FeiranteCard from "./feirante/FeiranteCard";
import "./Feirantes.css";
import img1 from "../../../img/customers/customer-3.jpg";
import img2 from "../../../img/customers/customer-4.jpg";
import img3 from "../../../img/customers/customer-5.jpg";
import img4 from "../../../img/customers/customer-6.jpg";
import Container from "../container/Container";

const Feirantes = () => {
  return (
    <section className="feirantes-section" id="feirantes-section">
      <SectionStart>Feirantes</SectionStart>
      <Container>
        <div className="feirantes-card-container">
          <FeiranteCard
            img={img1}
            name="Fernanda"
            first="frutas"
            second="preço baixo"
            thirst="Gente boa"
            fourth="Qualidade dos produtos"
          />
          <FeiranteCard
            img={img2}
            name="Seu luís"
            first="frutas"
            second="preço baixo"
            thirst="Gente boa"
            fourth="Qualidade dos produtos"
          />
          <FeiranteCard
            img={img3}
            name="Raimundo doido"
            first="frutas"
            second="preço baixo"
            thirst="Gente boa"
            fourth="Qualidade dos produtos"
          />
          <FeiranteCard
            img={img4}
            name="Daniela"
            first="frutas"
            second="preço baixo"
            thirst="Gente boa"
            fourth="Qualidade dos produtos"
          />
        </div>
      </Container>
    </section>
  );
};

export default Feirantes;
