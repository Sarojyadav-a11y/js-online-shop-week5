# JavaScript Online Shop - Week 5 Final Project

## Project Overview

This project is a simple online shop created using HTML, CSS, and JavaScript.

The project was developed over several weeks. For Week 5, the application was improved by adding live product data using the Fetch API and implementing the full CRUD cycle for the shopping cart.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- DummyJSON API
- GitHub
- GitHub Pages

## API

The application gets product information from the DummyJSON Products API:

https://dummyjson.com/products

The Fetch API is used to request the product information.

The application uses async/await and try...catch to handle the asynchronous request and possible errors.

## Fetch API

The application uses the following function:

```javascript
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

        return [];
    }
}