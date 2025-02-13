let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

function checkout() {
    alert(`Thank you for shopping! Your total is ₹${total}`);
    cart = [];
    total = 0;
    updateCart();
}


