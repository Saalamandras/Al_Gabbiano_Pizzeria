import React, { useState } from 'react';
import { menuItems, addOns, sizeMultipliers } from '../data/menuData';

function OrderForm() {
  // Quantities keyed by pizza id, default 0
  const [quantities, setQuantities] = useState(
    Object.fromEntries(menuItems.map(item => [item.id, 0]))
  );

  // Selected add-ons as a Set of ids
  const [selectedAddOns, setSelectedAddOns] = useState(new Set());

  const [size, setSize] = useState('regular');
  const [specialRequests, setSpecialRequests] = useState('');

  // --- Derived total ---
  const pizzaTotal = menuItems.reduce((sum, item) => {
    return sum + item.price * (quantities[item.id] || 0);
  }, 0);

  const addOnTotal = addOns.reduce((sum, addon) => {
    return sum + (selectedAddOns.has(addon.id) ? addon.price : 0);
  }, 0);

  // Size multiplier only applies to pizzas, not add-ons
  const total = pizzaTotal * sizeMultipliers[size] + addOnTotal;

  // --- Handlers ---
  function handleQuantityChange(id, value) {
    const qty = Math.max(0, parseInt(value) || 0);
    setQuantities(prev => ({ ...prev, [id]: qty }));
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
    <section id="order-form">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>

        {menuItems.map(item => (
          <div key={item.id}>
            <label htmlFor={`${item.id}-quantity`}>
              {item.name} (${item.price.toFixed(2)}):
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

        <fieldset>
          <legend>Add-ons:</legend>
          {addOns.map(addon => (
            <label key={addon.id}>
              <input
                type="checkbox"
                value={addon.id}
                checked={selectedAddOns.has(addon.id)}
                onChange={e => handleAddOnChange(addon.id, e.target.checked)}
              />
              {addon.name} (${addon.price.toFixed(2)})
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Size:</legend>
          <label>
            <input
              type="radio"
              name="size"
              value="regular"
              checked={size === 'regular'}
              onChange={() => setSize('regular')}
            />
            Regular
          </label>
          <label>
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

        <label htmlFor="special-requests">Special Requests:</label>
        <textarea
          id="special-requests"
          rows="4"
          value={specialRequests}
          onChange={e => setSpecialRequests(e.target.value)}
        />

        <p>Total: <strong>${total.toFixed(2)}</strong></p>

        <button type="submit">Go To Checkout</button>
      </form>
    </section>
  );
}

export default OrderForm;
