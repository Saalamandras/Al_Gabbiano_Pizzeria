const PizzaCard = ({ pizza }) => (
  <div className="pizza-card">
    <img src={pizza.image} alt={pizza.name} className="pizza-image" />
    <h3>{pizza.name}</h3>
    <p>{pizza.ingredients}</p>
    <p className="price">{pizza.price}</p>
    <button className="order-button">Order Now</button>
  </div>
);

export default PizzaCard;