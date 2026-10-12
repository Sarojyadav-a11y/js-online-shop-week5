const API_URL = "https://dummyjson.com/products";

let products = [];

// Fetch products from the DummyJSON API
async function loadProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to load products from the server.");
        }

        const data = await response.json();

        products = data.products;

        return products;

    } catch (error) {
        console.error("Product loading error:", error);

        document.getElementById("error-message").textContent =
            "Sorry, the products could not be loaded. Please try again later.";

        return [];
    }
}