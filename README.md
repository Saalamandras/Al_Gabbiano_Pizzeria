# Al Gabbiano Pizza

A responsive single-page web application for an Italian pizzeria. Users can browse the full menu, select quantities, choose add-ons and size, and place an order with a live-updating total.

## Features

- Menu section with images and descriptions for all six pizzas
- Order form with quantity inputs, add-ons, and size selection
- Live total calculation — size multiplier applies to pizzas only, not add-ons
- Special requests field
- Fully responsive layout

## Tech Stack

- [React 18](https://react.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules) — scoped per component, no class name conflicts
- [React Router DOM](https://reactrouter.com/)
- [GitHub Pages](https://pages.github.com/) via `gh-pages`

## Project Structure

```
src/
├── index.js
├── App.jsx
├── App.module.css
├── assets/
│   └── images/
├── data/
│   └── menuData.js       # Single source of truth for menu items, add-ons, and prices
└── components/
    ├── MenuSection.jsx
    ├── MenuSection.module.css
    ├── MenuItem.jsx
    ├── MenuItem.module.css
    ├── OrderForm.jsx
    └── OrderForm.module.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm

### Installation

```bash
git clone https://github.com/Saalamandras/Al_Gabbiano_Pizzeria.git
cd Al_Gabbiano_Pizzeria
npm install
```

### Running Locally

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

## License

This project is open source and available under the [MIT License](LICENSE).
