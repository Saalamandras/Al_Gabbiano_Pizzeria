import React from 'react';
import MenuSection from './components/MenuSection';
import OrderForm from './components/OrderForm';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="/Images/Logo-Pizza.png"
          alt="Al Gabbiano Pizza Logo"
        />
        <h1 className={styles.siteTitle}>Al Gabbiano Pizza</h1>
        <nav className={styles.nav}>
          <a href="#menu">Menu</a>
          <a href="#order-form">Order</a>
        </nav>
      </header>

      <main className={styles.main}>
        <MenuSection />
        <OrderForm />
      </main>

      <footer className={styles.footer}>
        <p>Made with love by Saalamandras</p>
      </footer>
    </div>
  );
}

export default App;
