import "./ProdutoCard.css";

const ProdutoCard = ({ title, img, alt, description }) => {
  return (
    <div className="card">
      <img src={img} alt={alt} className="produtos-img" />
      <div className="card-text-box">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProdutoCard;
