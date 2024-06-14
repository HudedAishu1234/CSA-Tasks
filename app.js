import { fetchData } from './fetchData.js'; // Named import
import greet from './module.js'; // Default import

greet(); // Greet function call

document.addEventListener('DOMContentLoaded', async () => {
    const productsContainer = document.getElementById('products-container');
    const products = await fetchData();

    if (products) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image_link}" alt="${product.name}">
                <p>Brand: ${product.brand}</p>
                <p>Price: ${product.price} ${product.price_sign}</p>
                <p>${product.description}</p>
            `;

            productsContainer.appendChild(productElement);
        });
    } else {
        productsContainer.innerHTML = '<p>Failed to load products.</p>';
    }
});
