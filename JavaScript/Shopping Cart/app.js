let cart = {};

const products = [
    { id: 1, name: "Product1", price: 20 },
    { id: 2, name: "Product2", price: 30 },
    { id: 3, name: "Product3", price: 40 },
];

// Show all products
const showProducts = () => {
    let str = "";
    products.map((value) => {
        str += `${value.name} - ₹${value.price} - ID: ${value.id}\n`;
    });
    console.log("*** Product List ***");
    console.log(str);
};

// Add item to cart (increases quantity if already present)
const addToCart = (id) => {
    cart = { ...cart, [id]: (cart[id] || 0) + 1 };
    console.log(`${products.find(p => p.id === id).name} added to cart.`);
};

// Show cart contents
const showCart = () => {
    console.log("*** My Cart ***");
    let str = "";
    products.map((value) => {
        if (cart[value.id]) {
            str += `${value.name} - ₹${value.price} - Quantity: ${cart[value.id]}\n`;
        }
    });
    console.log(str || "Cart is Empty");
};

// Increase item quantity
const increment = (id) => {
    cart = { ...cart, [id]: (cart[id] || 0) + 1 };
    console.log(`${products.find(p => p.id === id).name} quantity increased.`);
};

// Decrease item quantity, remove if zero
const decrement = (id) => {
    if (cart[id]) {
        const newQty = cart[id] - 1;
        if (newQty <= 0) {
            const { [id]: _, ...rest } = cart;
            cart = rest;
            console.log(`${products.find(p => p.id === id).name} removed from cart.`);
        } else {
            cart = { ...cart, [id]: newQty };
            console.log(`${products.find(p => p.id === id).name} quantity decreased.`);
        }
    }
};

// Calculate total order value
const orderValue = () => {
    return products.reduce((sum, value) => {
        return sum + (value.price * (cart[value.id] || 0));
    }, 0);
};

// Example Usage:
showProducts();
addToCart(1);
addToCart(2);
increment(1);
showCart();
console.log(`Order Value: ₹${orderValue()}`);
decrement(1);
showCart();
console.log(`Order Value: ₹${orderValue()}`);
