const products = {
    1: {
        name: "Eclipse Painting",
        price: 1000,
        img: "images/Eclipse.jpeg",
        desc: "This handmade golden eclipse painting captures the peaceful beauty of nature. A lone tree silhouette stands against a glowing orange sky, with the sun gently shining through the branches. The warm tones create a calming and dreamy atmosphere. perfect for home decor or gifting.You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    2: {
        name: "Galaxy Painting",
        price: 1200,
        img: "images/Galaxy.jpeg",
        desc: "Dive into the infinite beauty of the universe with this hand-painted galaxy artwork. The glowing pink and purple core surrounded by deep blue space and scattered stars creates a mysterious and calming atmosphere. A shooting star adds a touch of magic, making this piece feel alive and full of wonder.This painting is perfect for: Bedroom decor,Study/workspace inspiration,Gift for space lovers,Aesthetic wall gallery etc.You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    3: {
        name: "Lord Ganesha Painting",
        price: 3000,
        img: "images/Ganpati.jpeg",
        desc: "This hand-painted artwork beautifully captures the serene and powerful presence of Lord Ganesha, the remover of obstacles and the symbol of wisdom and prosperity. The vibrant blue tones combined with warm earthy shades create a spiritual and calming aura.Intricate detailing in the crown, ornaments, and sacred inscriptions adds traditional charm and depth to the piece. This painting brings positivity, peace, and auspicious energy into any space.Perfect for:Home temple,Living room decor,Office space,Housewarming or festive gift.",
        size: "14 x 18 inches"
    },
    4: {
        name: "Venus Painting",
        price: 1000,
        img: "images/Venus.jpeg",
        desc: "A hand-painted cosmic artwork featuring a glowing pink planet surrounded by a star-filled night sky. The soft pink hues blend beautifully with the dark galaxy background, creating a mysterious yet calming vibe.This piece symbolizes imagination, dreams, and the beauty of the unknown universe. Perfect for anyone who loves space-themed aesthetic decor.Ideal for:Bedroom walls,Study desk decor,Space lovers,Unique handmade giftYou will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    5: {
        name: "Moon Painting",
        price: 1000,
        img: "images/Moon.jpeg",
        desc: "A hand-painted artwork capturing the serene beauty of the full moon shining in a star-filled night sky. The detailed texture of the moon creates a realistic and soothing effect, bringing calmness and quiet elegance to any space. This piece symbolizes peace, dreams, and silent strength — perfect for those who love minimal yet meaningful art. Perfect for: Bedroom decor, Study or workspace, Minimalist wall gallery.You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    6: {
        name: "Krishna Painting",
        price: 1500,
        img: "images/Krishna.jpeg",
        desc: "This hand-painted artwork captures the innocence and charm of Bal Krishna playing his flute beside a gentle calf. The vibrant yellow background filled with “Shri Krishna” creates a divine and uplifting aura. The painting symbolizes love, devotion, purity, and joy. Perfect for bringing positivity and spiritual warmth into your home. Perfect for: Home temple, Kids’ room decor, Living room wall, Janmashtami special gift, Spiritual gifting.",
        size: "12 x 12 inches"
    },
    7: {
        name: "Space Painting",
        price: 1000,
        img: "images/Space.jpeg",
        desc: "A hand-painted cosmic landscape capturing a serene moon rising above a galaxy-like horizon, where stars shimmer endlessly. The soft blend of deep blues and whites creates a calm, almost magical atmosphere — like floating between reality and dreams. This artwork symbolizes balance, reflection, and infinite possibilities. A perfect piece for those who love space, silence, and soulful decor. Perfect for: Bedroom aesthetic decor, Study/work desk inspiration, Space & galaxy lovers, Unique handmade gift.You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    8: {
        name: "Diwali Painting",
        price: 500,
        img: "images/Diwali.jpeg",
        desc: "Celebrate the joy and warmth of Diwali with this hand-painted festive artwork featuring beautifully detailed diyas glowing against a soft golden background. The elegant lettering and warm tones create a positive and cheerful aura. This artwork symbolizes light over darkness, hope, prosperity, and new beginnings — making it a perfect festive decor piece or meaningful gift. Perfect for: Diwali home decor, Festive gifting, Office decoration, Seasonal wall art, Customized festive orders. You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    9: {
        name: "Planets Painting",
        price: 1000,
        img: "images/Planets.jpeg",
        desc: "A hand-painted cosmic artwork featuring multiple planets floating in a star-filled universe. The deep blue and black tones create a mysterious atmosphere, while the glowing highlights add depth and realism. This piece represents exploration, curiosity, and the endless possibilities of the universe. A perfect artwork for dreamers and space lovers. Perfect for: Bedroom or study decor, Space-themed room aesthetic, Creative workspace, Unique handmade gift.You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    10: {
        name: "Butterfly Painting",
        price: 700,
        img: "images/Butterfly.jpeg",
        desc: "A hand-painted artwork symbolizing freedom and transformation. Two glowing butterflies soar freely in the night sky, while one rests gently inside a jar — representing dreams waiting to be released. The soft blue tones and glowing effect create a calm and magical atmosphere, making this piece both aesthetic and meaningful. This artwork speaks about hope, growth, and believing in your wings. Perfect for: Bedroom decor, Study/workspace inspiration, Gift for someone starting a new journey, Aesthetic wall galleryYou will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    11: {
        name: "Holi Painting",
        price: 500,
        img: "images/Holi.jpeg",
        desc: "Celebrate the joy of Holi with this hand-painted festive artwork featuring a detailed mandala design and soft watercolor splashes in warm pastel shades. The elegant typography and minimal composition give it a modern yet traditional touch. This piece symbolizes happiness, positivity, and spreading colors of love. Perfect for: Holi home decor, Festive greeting frame, Gift for friends & family, Office or studio decoration, Customized festive orders. You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    12: {
        name: "Starbucks Painting",
        price: 700,
        img: "images/Starbucks.jpeg",
        desc: "A hand-drawn artwork inspired by café culture and peaceful moments. The soft green shades and flowing hair create a calm and refreshing vibe, symbolizing comfort, warmth, and self-care. This piece is perfect for those who love coffee, creativity, and aesthetic spaces. Perfect for: Café decor, Kitchen or dining wall, Study/workspace, Gift for coffee lovers, Minimal aesthetic room. You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    },
    13: {
        name: "Stars Painting",
        price: 1000,
        img: "images/Stars.jpeg",
        desc: "A hand-painted artwork capturing the vast beauty of the night sky. Soft blue nebula clouds blend into a deep black galaxy, scattered with countless shining stars — creating a peaceful and mysterious atmosphere. This piece symbolizes infinity, dreams, and the quiet magic of the universe. Perfect for those who love minimal yet meaningful cosmic art. Perfect for: Bedroom or study decor, Space-themed aesthetic rooms, Meditation or calm corner, Gift for dreamers and stargazers. You will receive this painting in a beautiful frame.",
        size: "21 x 14.8 cm"
    }
};

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
    addToCart();
    window.location.href = "payment.html";
}

function loadCart() {
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    const paymentBtn = document.getElementById("paymentBtn");

    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<h3>Your cart is empty 🛒</h3>";
        totalElement.innerText = 0;
        if (paymentBtn) paymentBtn.style.display = "none";
        return;
    }

    if (paymentBtn) paymentBtn.style.display = "inline-block";

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="100">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: ₹${item.price}</p>
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
    if (cart.length === 0) {
    alert("Cart is empty!");
    return;
}
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const city = document.getElementById("customerCity").value;
    const address = document.getElementById("customerAddress").value;

    let orderDetails = "";
    let subtotal = 0;

    cart.forEach(item => {
        orderDetails += item.name + " - ₹" + item.price + "\n";
        subtotal += item.price;
    });

    // Delivery logic based on city
    let delivery = 0;
    let deliveryTime = "";

    if (city === "Ahmedabad") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Amreli") {
            delivery = 120;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Anand") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Aravali") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Banaskantha") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bharuch") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bhavnagar") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Botad") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Chhota Udepur") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dahod") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dang") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Devbhumi Dwarka") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gandhinagar") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gir Somnath") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Jamnagar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Junagadh") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kutch") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kheda") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mahisagar") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mehsana") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Morbi") {
            delivery = 170;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Narmada") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Navsari") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Panchmahal") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Patan") {
            delivery = 100;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Porbandar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Rajkot") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Sabarkantha") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surat") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surendranagar") {
            delivery = 140;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Tapi") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Vadodara") {
            delivery = 60;
             deliveryTime = "10-15 Days";
        }
        else if (city === "Valsad") {
            delivery = 40;
             deliveryTime = "10-15 Days";
        }

    let grandTotal = subtotal + delivery;

    const templateParams = {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        customer_city: city,
        customer_address: address,
        order_details: orderDetails,
        subtotal: subtotal,
        delivery_charge: delivery,
        delivery_time: deliveryTime,
        total_amount: grandTotal
    };

    emailjs.send("service_s2chw6h", "template_qhvm8i4", templateParams)
        .then(function(response) {
            alert("Order placed successfully! Email sent.");
            localStorage.removeItem("cart");
            cart = [];
            window.location.href = "confirmation.html";
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
}

function showOrderSummary() {

    const summary = document.getElementById("order-summary");
    const totalElement = document.getElementById("order-total");
    const citySelect = document.getElementById("customerCity");
    const whatsappBtn = document.getElementById("whatsappBtn");

    if (!summary) return;

    if (cart.length === 0) {
        summary.innerHTML = "<h3>Your cart is empty 🛒</h3>";
        totalElement.innerText = 0;
        return;
    }

    function updateSummary() {

        let subtotal = 0;
        cart.forEach(item => subtotal += item.price);

        const city = citySelect.value;

        let delivery = 0;
        let deliveryTime = "";

        if (city === "Ahmedabad") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Amreli") {
            delivery = 120;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Anand") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Aravali") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Banaskantha") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bharuch") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bhavnagar") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Botad") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Chhota Udepur") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dahod") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dang") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Devbhumi Dwarka") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gandhinagar") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gir Somnath") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Jamnagar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Junagadh") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kutch") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kheda") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mahisagar") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mehsana") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Morbi") {
            delivery = 170;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Narmada") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Navsari") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Panchmahal") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Patan") {
            delivery = 100;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Porbandar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Rajkot") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Sabarkantha") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surat") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surendranagar") {
            delivery = 140;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Tapi") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Vadodara") {
            delivery = 60;
             deliveryTime = "10-15 Days";
        }
        else if (city === "Valsad") {
            delivery = 40;
             deliveryTime = "10-15 Days";
        }


        let grandTotal = subtotal + delivery;

        summary.innerHTML = `
            ${cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join("")}
            <hr>
            <p>Subtotal: ₹${subtotal}</p>
            <p>Delivery: ₹${delivery}</p>
            <p>Delivery Time: ${deliveryTime}</p>
            <h3>Total: ₹${grandTotal}</h3>
        `;

        totalElement.innerText = grandTotal;

    }

    // Run once
    updateSummary();

    // Run when city changes
    citySelect.addEventListener("change", updateSummary);
}

function updateDelivery() {

    const summary = document.getElementById("order-summary");
    const totalElement = document.getElementById("order-total");
    const citySelect = document.getElementById("customerCity");
    const whatsappBtn = document.getElementById("whatsappBtn");

    if (!citySelect) return;

    let subtotal = 0;
    cart.forEach(item => subtotal += item.price);

    const city = citySelect.value;

    let delivery = 0;
    let deliveryTime = "";

    if (!city) {
        summary.innerHTML = `
            ${cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join("")}
            <hr>
            <p><b>Subtotal: ₹${subtotal}</b></p>
        `;
        totalElement.innerText = subtotal;
        return;
    }

    if (city === "Ahmedabad") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Amreli") {
            delivery = 120;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Anand") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Aravali") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Banaskantha") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bharuch") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bhavnagar") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Botad") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Chhota Udepur") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dahod") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dang") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Devbhumi Dwarka") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gandhinagar") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gir Somnath") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Jamnagar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Junagadh") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kutch") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kheda") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mahisagar") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mehsana") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Morbi") {
            delivery = 170;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Narmada") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Navsari") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Panchmahal") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Patan") {
            delivery = 100;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Porbandar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Rajkot") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Sabarkantha") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surat") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surendranagar") {
            delivery = 140;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Tapi") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Vadodara") {
            delivery = 60;
             deliveryTime = "10-15 Days";
        }
        else if (city === "Valsad") {
            delivery = 40;
             deliveryTime = "10-15 Days";
        }


    let grandTotal = subtotal + delivery;

    summary.innerHTML = `
        ${cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join("")}
        <hr>
        <p>Subtotal: ₹${subtotal}</p>
        <p><b>Delivery: ₹${delivery}</b></p>
        <p>Delivery Time: ${deliveryTime}</p>
        <h3>Total: ₹${grandTotal}</h3>
    `;

    totalElement.innerText = grandTotal;

    
}


function calculateDelivery() {

    let subtotal = 0;
    cart.forEach(item => subtotal += item.price);

    const city = citySelect.value;

    let delivery = 0;
    let deliveryTime = "";

    if (!city) {
        summary.innerHTML = `
            ${cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join("")}
            <hr>
            <p><b>Subtotal: ₹${subtotal}</b></p>
        `;
        totalElement.innerText = subtotal;
        return;
    }

        if (city === "Ahmedabad") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Amreli") {
            delivery = 120;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Anand") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        } 
        else if (city === "Aravali") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Banaskantha") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bharuch") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Bhavnagar") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Botad") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Chhota Udepur") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dahod") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Dang") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Devbhumi Dwarka") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gandhinagar") {
            delivery = 80;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Gir Somnath") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Jamnagar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Junagadh") {
            delivery = 150;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kutch") {
            delivery = 200;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Kheda") {
            delivery = 60;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mahisagar") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Mehsana") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Morbi") {
            delivery = 170;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Narmada") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Navsari") {
            delivery = 40;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Panchmahal") {
            delivery = 70;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Patan") {
            delivery = 100;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Porbandar") {
            delivery = 180;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Rajkot") {
            delivery = 160;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Sabarkantha") {
            delivery = 90;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surat") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Surendranagar") {
            delivery = 140;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Tapi") {
            delivery = 50;
            deliveryTime = "10-15 Days";
        }
        else if (city === "Vadodara") {
            delivery = 60;
             deliveryTime = "10-15 Days";
        }
        else if (city === "Valsad") {
            delivery = 40;
             deliveryTime = "10-15 Days";
        }

        let grandTotal = subtotal + delivery;

    summary.innerHTML = `
        ${cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join("")}
        <hr>
        <p>Subtotal: ₹${subtotal}</p>
        <p>Delivery: ₹${delivery}</p>
        <p>Delivery Time: ${deliveryTime}</p>
        <h3>Total: ₹${grandTotal}</h3>
    `;

    totalElement.innerText = grandTotal;

}
// =====================
// LOAD PRODUCT DETAILS
// =====================

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (productId && products[productId] && document.getElementById("product-name")) {

    const product = products[productId];

    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-desc").innerText = product.desc;
    document.getElementById("product-image").src = product.img;
    document.getElementById("product-size").innerText = product.size;
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