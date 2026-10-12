let currentCategory = "all";


// Display products on the page
function renderProducts(productList) {

    const productGrid =
        document.getElementById("product-grid");

    productGrid.innerHTML = "";

    if (productList.length === 0) {

        productGrid.innerHTML =
            "<p>No products are available.</p>";

        return;
    }

    productList.forEach(product => {

        const productCard =
            document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

            <h3>${product.title}</h3>

            <p>${product.description}</p>

            <p>
                <strong>
                    Price: $${product.price.toFixed(2)}
                </strong>
            </p>

            <p>
                Category: ${product.category}
            </p>

            <p>
                Stock: ${product.stock}
            </p>

            <button class="add-button">
                Add to Cart
            </button>
        `;

        const addButton =
            productCard.querySelector(".add-button");

        addButton.addEventListener("click", function () {

            addToCart(product.title);

        });

        productGrid.appendChild(productCard);
    });
}


// Filter products by category
function filterByCategory(category) {

    currentCategory = category;

    if (category === "all") {

        renderProducts(products);

        return;
    }

    const filteredProducts =
        products.filter(
            product => product.category === category
        );

    renderProducts(filteredProducts);
}


// Add category button events
function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(".filter-button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const category =
                button.dataset.category;

            filterByCategory(category);
        });
    });
}


// Start application
async function startShop() {

    const loadingMessage =
        document.getElementById("loading-message");

    await loadProducts();

    loadingMessage.style.display = "none";

    renderProducts(products);

    renderCart();

    updateCartCount();

    setupCategoryButtons();
}


// Start the application
startShop();