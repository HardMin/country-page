const CardItem = ({ country }) => {
  return (
    <div className="card-item">
      <section className="card-item-content">
        <img src={country?.flags.png} alt={country?.name.common} />
        <h3>{country?.name.official}</h3>
      </section>
    </div>
  );
};

export default CardItem;
