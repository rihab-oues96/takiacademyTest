import "./card.scss";

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={info.image} />
      </div>
      <div className="stats">
        <span className="num"> {info.stats}+ </span>
        <span className="text">{info.description}</span>
      </div>
    </div>
  );
};

export default Card;
