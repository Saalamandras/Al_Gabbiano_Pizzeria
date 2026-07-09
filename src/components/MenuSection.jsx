import React from 'react';
import MenuItem from './MenuItem';
import { menuItems } from '../data/menuData';
import styles from './MenuSection.module.css';

function MenuSection() {
  return (
    <section id="menu" className={styles.section}>
      <h2 className={styles.heading}>Our Menu</h2>
      <div className={styles.grid}>
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
