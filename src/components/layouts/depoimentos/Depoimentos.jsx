import React from "react";
import Container from "../container/Container";
import SectionStart from "../SectionStart/SectionStart";
import image1 from "../../../img/customers/ben.jpg";
import image2 from "../../../img/customers/customer-1.jpg";
import image3 from "../../../img/customers/customer-2.jpg";
import image4 from "../../../img/customers/customer-3.jpg";
import "./Depoimentos.css";

const Depoimentos = () => {
  return (
    <section className="depoimentos-section" id="depoimentos-section">
      <SectionStart>Depoimentos</SectionStart>
      <Container>
        <div className="testimonials grid grid-2-cols center-testimonials">
          <figure className="testimonial">
            <img src={image1} alt="" />
            <blockquote className="testimonial-text">
              Feira muito organizada, gostei demais!
            </blockquote>
            <p className="testimonial-name">— João Fernando</p>
          </figure>
          <figure className="testimonial">
            <img src={image2} alt="" />
            <blockquote className="testimonial-text">
              Muita sujeira na rua, horrível!
            </blockquote>
            <p className="testimonial-name">— Rebeca</p>
          </figure>
          <figure className="testimonial">
            <img src={image3} alt="" />
            <blockquote className="testimonial-text">
              Muito pirangueiro, não gostei!
            </blockquote>
            <p className="testimonial-name">— Mateus</p>
          </figure>
          <figure className="testimonial">
            <img src={image4} alt="" />
            <blockquote className="testimonial-text">
              Muita coisa barata, indico demais!
            </blockquote>
            <p className="testimonial-name">— Maria Eduarda</p>
          </figure>
        </div>
      </Container>
    </section>
  );
};

export default Depoimentos;
