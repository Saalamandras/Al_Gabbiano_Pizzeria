import React from 'react';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <div>
      <header>
        <img id="header-img" src="/Images/al-gabbiano-logo.jpg" alt="Al Gabbiano Pizza Logo" />
        <h1>Al Gabbiano Pizza</h1>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#order-form">Order</a>
        </nav>
      </header>

      <main>
        <OrderForm />
      </main>

      <footer>
        <p>Made with love by Saalamandras</p>
      </footer>
    </div>
  );
}

export default App;
