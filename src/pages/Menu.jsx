import PizzaCard from '../components/PizzaCard';

// Sample pizza data
const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    image: 'Margherita_pizza.jfif',
    ingredients: 'Tomato sauce, mozzarella, fresh basil',
    price: '€8.99'
  },
  {
    id: 2,
    name: 'Pepperoni',
    image: 'Pepperoni.jfif',
    ingredients: 'Tomato sauce, mozzarella, pepperoni',
    price: '€10.99'
  },
  {
    id: 3,
    name: 'Capricciosa',
    image: 'Capricciosa.jfif',
    ingredients: 'Tomato sauce, mozzarella, ham, mushrooms, olives, artichokes',
    price: '€12.99'
  },
  {
    id: 4,
    name: 'Prosciutto',
    image: 'Prosciutto.jfif',
    ingredients: 'Tomato sauce, mozzarella, prosciutto, arugula',
    price: '€11.99'
  },
  {
    id: 5,
    name: 'Quattro Formaggi',
    image: 'Quatrro_Formaggi.jfif',
    ingredients: 'Mozzarella, gorgonzola, parmigiano, fontina',
    price: '€11.99'
  },
  {
    id: 6,
    name: 'Vegetariana',
    image: 'Vegetariana.jfif',
    ingredients: 'Tomato sauce, mozzarella, bell peppers, mushrooms, olives, onions',
    price: '€10.99'
  }
];

const Menu = () => (
  <div className="menu">
    <h2>Our Menu</h2>
    <div className="pizza-grid">
      {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  </div>
);

export default Menu;