import "./DescriptionCards.scss";

const DescriptionCards = ({ info }) => {
  return (
    <div className="desc-card">
      <div className="image">
        <img src={info.image} />
      </div>
      <span>{info.description}</span>
    </div>
  );
};

export default DescriptionCards;
