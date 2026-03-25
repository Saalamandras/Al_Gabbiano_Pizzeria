import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <section className="hero">
      <h1>Welcome to Al Gabbiano Pizzeria</h1>
      <p>Authentic Italian pizza made with love and fresh ingredients.</p>
      <Link to="/menu" className="cta-button">View Menu</Link>
    </section>
  </div>
);

export default Home;