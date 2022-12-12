const CustomerCard = (info) => {
  return (
    <div className="customer-card">
      <div className="image">
        <img src={info.image} />
      </div>
      <span className="customer">{info.title}</span>
      <span className="customer-description">{info.description}</span>
      <div className="btn">{info.link}</div>
    </div>
  );
};

export default CustomerCard;
