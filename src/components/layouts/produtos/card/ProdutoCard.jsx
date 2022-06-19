import "./ProdutoCard.css";
import { AiOutlineCheck } from "react-icons/ai";

const ProdutoCard = ({ title, img, alt, firstDesc, secondDesc, thirdDesc, fourthDesc }) => {
  return (
    <div className="card">
      <img src={img} alt={alt} className="produtos-img" />
      <div className="card-text-box">
        <h1 className="card-title">{title}</h1>
        <div className="card-atributes">
          <ul className="card-list-item">
            <li className="card-item">
              <AiOutlineCheck />
              <p className="atributes-description">{firstDesc}</p>
            </li>
            <li className="card-item">
              <AiOutlineCheck />
              <p className="atributes-description">{secondDesc}</p>
            </li>
            <li className="card-item">
              <AiOutlineCheck />
              <p className="atributes-description">{thirdDesc}</p>
            </li>
            <li className="card-item">
              <AiOutlineCheck />
              <p className="atributes-description">{fourthDesc}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProdutoCard;
