let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}
updateCartCount();

function addToCart() {
    const name = document.getElementById("product-name")?.innerText;
    const price = document.getElementById("product-price")?.innerText;
    const image = document.getElementById("product-image")?.src;

    if (name && price) {

        const existing = cart.find(item => item.name === name);

        if (existing) {
            alert("This painting is already in cart. Only one piece available.");
            return;
        }

        cart.push({ name, price: parseInt(price), image,});

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Painting added to cart!");
        updateCartCount();
    }
}

function buyNow() {
    window.location.href = "payment.html";
}

function loadCart() {
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="100">
                <div>
                    <h3>${item.name}</h3>
                    <p>Total: ₹${item.price * item.quantity}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    totalElement.innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function proceedToPayment() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    window.location.href = "payment.html";
}

function placeOrder(event) {
    event.preventDefault();
    localStorage.removeItem("cart");
    cart = [];
    alert("Payment Successful!");
    window.location.href = "confirmation.html";
}

// =====================
// LOAD PRODUCT DETAILS
// =====================

const params = new URLSearchParams(window.location.search);

if (params.get("name")) {

    const name = params.get("name");
    const price = params.get("price");
    const desc = params.get("desc");
    const img = params.get("img");
    const size = params.get("size");

    document.getElementById("product-name").innerText = name;
    document.getElementById("product-price").innerText = price;
    document.getElementById("product-desc").innerText = desc;
    document.getElementById("product-image").src = img;
    document.getElementById("product-size").innerText = size;
}

// =====================
// SEARCH FUNCTION
// =====================

function searchProducts() {

    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}