const products = [
    { id: 1, name: "Product 1", price: 10.0, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 20.0, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 30.0, image: "https://via.placeholder.com/150" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', displayProducts);
