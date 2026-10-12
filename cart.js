let cart = [];

// CREATE / UPDATE
function addToCart(productName) {

    const product = products.find(
        item => item.title === productName
    );

    if (!product) {
        console.error("Product not found.");
        return;
    }

    if (product.stock <= 0) {
        console.error("This product is out of stock.");
        return;
    }

    const existingItem = cart.find(
        item => item.title === productName
    );

    if (existingItem) {

        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
        } else {
            alert("You cannot add more than the available stock.");
            return;
        }

    } else {

        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        });
    }

    renderCart();
    updateCartCount();
}


// DELETE
function removeFromCart(productName) {

    cart = cart.filter(
        item => item.title !== productName
    );

    renderCart();
    updateCartCount();
}


// READ / DISPLAY
function renderCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0.00";

        return;
    }

    let total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div class="cart-item-info">
                <strong>${item.title}</strong>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Item Total: $${itemTotal.toFixed(2)}</p>
            </div>

            <button class="remove-button">
                Remove
            </button>
        `;

        const removeButton =
            cartItem.querySelector(".remove-button");

        removeButton.addEventListener("click", function () {
            removeFromCart(item.title);
        });

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
}


// Update cart badge
function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;
}