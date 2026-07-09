// Menu items and their prices
const menuItems = {
    'burger': { name: 'Deluxe Burger', price: 12.99 },
    'pizza': { name: 'Margherita Pizza', price: 14.99 },
    'salad': { name: 'Caesar Salad', price: 8.99 }
};

// Add-ons and their prices
const addOns = {
    'fries': { name: 'French Fries', price: 2.99 },
    'drink': { name: 'Soft Drink', price: 1.99 }
};

// Size multipliers
const sizeMultipliers = {
    'regular': 1,
    'large': 1.5
};

// Function to calculate the total cost
function calculateTotal() {
    let total = 0;

    // Calculate cost for menu items
    for (const [key, item] of Object.entries(menuItems)) {
        const quantity = parseInt(document.getElementById(`${key}-quantity`).value) || 0;
        total += item.price * quantity;
    }

    // Add cost for add-ons
    for (const [key, addon] of Object.entries(addOns)) {
        if (document.querySelector(`input[name="addon"][value="${key}"]`).checked) {
            total += addon.price;
        }
    }

    // Apply size multiplier
    const size = document.querySelector('input[name="size"]:checked').value;
    total *= sizeMultipliers[size];

    // Update the total display
    document.getElementById('total-cost').textContent = total.toFixed(2);
}

// Function to initialize the form
function initForm() {
    // Create event listeners for all inputs
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', calculateTotal);
    });

    // Create a total cost display
    const totalDisplay = document.createElement('p');
    totalDisplay.id = 'total-cost-display';
    totalDisplay.innerHTML = 'Total Cost: $<span id="total-cost">0.00</span>';
    document.querySelector('form').appendChild(totalDisplay);

    // Initial calculation
    calculateTotal();
}

// Initialize the form when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initForm);