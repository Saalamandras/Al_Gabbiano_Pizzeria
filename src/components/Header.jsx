import { Link } from 'react-router-dom';

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

export default Header;