import { fetchData } from './fetchData.js'; // Named import
import greet from './module.js'; // Default import

greet(); // Greet function call

document.addEventListener('DOMContentLoaded', async () => {
    const productsContainer = document.getElementById('products-container');
    const products = await fetchData();

    if (products) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'col-md-4 mb-4';

            productElement.innerHTML = `
                <div class="product card h-100">
                    <img src="${product.image_link}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text">Brand: ${product.brand}</p>
                        <p class="card-text price">Price: ${product.price} ${product.price_sign}</p>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            `;

            productsContainer.appendChild(productElement);
        });
    } else {
        productsContainer.innerHTML = '<p class="text-danger">Failed to load products.</p>';
    }
});
