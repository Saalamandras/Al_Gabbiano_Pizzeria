import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem({ item }) {
  return (
    <article className={styles.card}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <span className={styles.price}>${item.price.toFixed(2)}</span>
      </div>
    </article>
  );
}

export default MenuItem;
