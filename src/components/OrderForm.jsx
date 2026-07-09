import React, { useState } from 'react';
import { menuItems, addOns, sizeMultipliers } from '../data/menuData';
import styles from './OrderForm.module.css';

function OrderForm() {
  const [quantities, setQuantities] = useState(
    Object.fromEntries(menuItems.map(item => [item.id, 0]))
  );
  const [selectedAddOns, setSelectedAddOns] = useState(new Set());
  const [size, setSize] = useState('regular');
  const [specialRequests, setSpecialRequests] = useState('');

  const pizzaTotal = menuItems.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 0),
    0
  );
  const addOnTotal = addOns.reduce(
    (sum, addon) => sum + (selectedAddOns.has(addon.id) ? addon.price : 0),
    0
  );
  const total = pizzaTotal * sizeMultipliers[size] + addOnTotal;

  function handleQuantityChange(id, value) {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, parseInt(value) || 0) }));
  }

  function handleAddOnChange(id, checked) {
    setSelectedAddOns(prev => {
      const next = new Set(prev);
      checked ? next.add(id) : next.delete(id);
      return next;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const order = {
      items: menuItems
        .filter(item => quantities[item.id] > 0)
        .map(item => ({ name: item.name, quantity: quantities[item.id], price: item.price })),
      addOns: addOns.filter(a => selectedAddOns.has(a.id)).map(a => a.name),
      size,
      specialRequests,
      total: total.toFixed(2),
    };
    console.log('Order submitted:', order);
    alert(`Order placed! Total: $${order.total}`);
  }

  return (
    <section id="order-form" className={styles.section}>
      <h2 className={styles.heading}>Place Your Order</h2>
      <form className={styles.form} onSubmit={handleSubmit}>

        {menuItems.map(item => (
          <div key={item.id} className={styles.row}>
            <label htmlFor={`${item.id}-quantity`}>
              {item.name} — <span style={{ color: '#e74c3c' }}>${item.price.toFixed(2)}</span>
            </label>
            <input
              type="number"
              id={`${item.id}-quantity`}
              min="0"
              value={quantities[item.id]}
              onChange={e => handleQuantityChange(item.id, e.target.value)}
            />
          </div>
        ))}

        <fieldset className={styles.fieldset}>
          <legend>Add-ons</legend>
          {addOns.map(addon => (
            <label key={addon.id} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedAddOns.has(addon.id)}
                onChange={e => handleAddOnChange(addon.id, e.target.checked)}
              />
              {addon.name} (${addon.price.toFixed(2)})
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend>Size</legend>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="size"
              value="regular"
              checked={size === 'regular'}
              onChange={() => setSize('regular')}
            />
            Regular
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="size"
              value="large"
              checked={size === 'large'}
              onChange={() => setSize('large')}
            />
            Large (+50%)
          </label>
        </fieldset>

        <label htmlFor="special-requests" className={styles.textareaLabel}>
          Special Requests:
        </label>
        <textarea
          id="special-requests"
          rows="4"
          className={styles.textarea}
          value={specialRequests}
          onChange={e => setSpecialRequests(e.target.value)}
        />

        <p className={styles.total}>
          Total: <strong>${total.toFixed(2)}</strong>
        </p>

        <button type="submit" className={styles.submitBtn}>
          Go To Checkout
        </button>
      </form>
    </section>
  );
}

export default OrderForm;
