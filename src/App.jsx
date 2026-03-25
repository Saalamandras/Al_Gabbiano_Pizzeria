import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

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

// Header component
const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src="Logo_Pizza.jfif" alt="Al Gabbiano Pizzeria Logo" className="logo" />
    </div>
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

// PizzaCard component
const PizzaCard = ({ pizza }) => (
  <div className="pizza-card">
    <img src={pizza.image} alt={pizza.name} className="pizza-image" />
    <h3>{pizza.name}</h3>
    <p>{pizza.ingredients}</p>
    <p className="price">{pizza.price}</p>
    <button className="order-button">Order Now</button>
  </div>
);

// Menu page
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

// Home page
const Home = () => (
  <div className="home">
    <section className="hero">
      <h1>Welcome to Al Gabbiano Pizzeria</h1>
      <p>Authentic Italian pizza made with love and fresh ingredients.</p>
      <Link to="/menu" className="cta-button">View Menu</Link>
    </section>
  </div>
);

// About page
const About = () => (
  <div className="about">
    <h2>About Us</h2>
    <p>We are a family-owned pizzeria dedicated to bringing the taste of Italy to your table.</p>
  </div>
);

// Contact page
const Contact = () => (
  <div className="contact">
    <h2>Contact Us</h2>
    <p>123 Venice Street, Italy</p>
    <p>Phone: +39 123 456 7890</p>
  </div>
);

// Footer component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2026 Al Gabbiano Pizzeria. All rights reserved.</p>
  </footer>
);

// Main App
const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;