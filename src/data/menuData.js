import capricciosa from '../assets/images/Capricciosa.png';
import margherita from '../assets/images/Margherita pizza.png';
import pepperoni from '../assets/images/Pepperoni.png';
import prosciutto from '../assets/images/Prosciutto.png';
import quattroFormaggi from '../assets/images/Quatrro-Formaggi.png';
import vegetariana from '../assets/images/Vegetariana.png';

export const menuItems = [
  {
    id: 'capricciosa',
    name: 'Capricciosa Pizza',
    price: 15.99,
    image: capricciosa,
    description:
      'A classic Italian pizza with tomato sauce, mozzarella, ham, artichoke hearts, mushrooms, black olives, and extra virgin olive oil.',
  },
  {
    id: 'margherita',
    name: 'Margherita Pizza',
    price: 13.99,
    image: margherita,
    description:
      'Simple yet flavorful — tomato sauce, fresh mozzarella, fresh basil leaves, extra virgin olive oil, and a pinch of salt.',
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni Pizza',
    price: 14.99,
    image: pepperoni,
    description:
      'A crowd favorite loaded with spicy pepperoni slices over tomato sauce and mozzarella.',
  },
  {
    id: 'prosciutto',
    name: 'Prosciutto Pizza',
    price: 16.99,
    image: prosciutto,
    description:
      'Thinly sliced prosciutto with tomato sauce, mozzarella, arugula, shaved parmesan, and extra virgin olive oil.',
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi Pizza',
    price: 15.99,
    image: quattroFormaggi,
    description:
      "A cheese lover's dream — tomato sauce with mozzarella, gorgonzola, fontina, and parmesan.",
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Pizza',
    price: 14.99,
    image: vegetariana,
    description:
      'Colorful and fresh — tomato sauce, mozzarella, bell peppers, mushrooms, red onions, black olives, spinach, and cherry tomatoes.',
  },
];

export const addOns = [
  { id: 'garlic-bread', name: 'Garlic Bread', price: 2.99 },
  { id: 'drink',        name: 'Soft Drink',   price: 1.99 },
];

export const sizeMultipliers = {
  regular: 1,
  large:   1.5,
};
