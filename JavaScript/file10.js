let cart = {};

const products = [
    { id: 1, name: "Product1", price: 20 },
    { id: 2, name: "Product2", price: 30 },
    { id: 3, name: "Product3", price: 40 },
];

const showProducts = () => {
    let str = "";
    products.map((value) => {
        str += `${value.name} - ₹${value.price} - ID: ${value.id}\n`;
    });
    console.log("*** Product List ***");
    console.log(str);
};

showProducts();

const addToCart = (id) => {
    cart = { ...cart, [id]: 1 };
};

addToCart(1);
addToCart(3);

const showCart = () => {
    console.log("*** My Cart ***");
    let str = "";
    products.map((value) => {
        cart[value.id] &&
        (str += `${value.name} - ${value.price} - Quantity: ${cart[value.id]}\n`);
    });
    console.log(str || "Cart is Empty");
};

showCart();

const increment = (id) => {
    cart = { ...cart, [id]: (cart[id] || 0) + 1 };
};
const decrement = (id) => {
    cart = { ...cart, [id]: (cart[id] || 0) - 1 };
};


// const orderValue = products.reduce(sum, (value) => {
//     return sum+(value.price * cart[value.id] ?? 0);
// },0);
// console.log(`Order Value: ${orderValue}`);

const orderValue = () => {
    return products.reduce((sum, value) => {
        return sum + (value.price * cart[value.id] ?? 0);
    }, 0);
};

console.log(`Order Value: ${orderValue()}`);

increment(1);
decrement(3);

showCart();
console.log(`Order Value: ${orderValue()}`);
