document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const productContainer = document.getElementById('productContainer');
    const searchBar = document.getElementById('searchBar');

    async function fetchProducts() {
        try {
            const response = await fetch(apiURL);
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image_link}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.brand}</p>
                <p>$${product.price}</p>
            `;
            productContainer.appendChild(productElement);
        });
    }

    searchBar.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredProducts = Array.from(document.getElementsByClassName('product')).filter(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            return productName.includes(searchQuery);
        });

        Array.from(document.getElementsByClassName('product')).forEach(product => {
            product.style.display = 'none';
        });

        filteredProducts.forEach(product => {
            product.style.display = 'block';
        });
    });

    fetchProducts();
});

