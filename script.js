/* =====================================================

   SHYAMA SHREE E-COMMERCE

   SHOPPING CART JAVASCRIPT

===================================================== */

let cart = [];

/* =====================================================

   ADD TO CART

===================================================== */

function addToCart(name, price) {

    const existingProduct = cart.find(

        item => item.name === name

    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }

    updateCart();

    openCart();

}

/* =====================================================

   UPDATE CART

===================================================== */

function updateCart() {

    const cartItems = document.getElementById("cartItems");

    const cartCount = document.getElementById("cartCount");

    const cartTotal = document.getElementById("cartTotal");

    let totalQuantity = 0;

    let totalPrice = 0;

    cart.forEach(item => {

        totalQuantity += item.quantity;

        totalPrice += item.price * item.quantity;

    });

    cartCount.textContent = totalQuantity;

    cartTotal.textContent =

        "₹" + totalPrice.toLocaleString("en-IN");

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>

                    Add something beautiful to your cart.

                </p>

            </div>

        `;

        return;

    }

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h4>

                    ${item.name}

                </h4>

                <strong>

                    ₹${item.price.toLocaleString("en-IN")}

                </strong>

                <div class="quantity-controls">

                    <button

                        onclick="changeQuantity(${index}, -1)"

                    >

                        −

                    </button>

                    <span>

                        ${item.quantity}

                    </span>

                    <button

                        onclick="changeQuantity(${index}, 1)"

                    >

                        +

                    </button>

                    <button

                        class="remove-item"

                        onclick="removeFromCart(${index})"

                    >

                        Remove

                    </button>

                </div>

            </div>

        `;

        cartItems.appendChild(cartItem);

    });

}

/* =====================================================

   CHANGE QUANTITY

===================================================== */

function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();

}

/* =====================================================

   REMOVE PRODUCT

===================================================== */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}

/* =====================================================

   OPEN CART

===================================================== */

function openCart() {

    document

        .getElementById("cartDrawer")

        .classList.add("active");

    document

        .getElementById("cartOverlay")

        .classList.add("active");

}

/* =====================================================

   CLOSE CART

===================================================== */

function closeCart() {

    document

        .getElementById("cartDrawer")

        .classList.remove("active");

    document

        .getElementById("cartOverlay")

        .classList.remove("active");

}

/* =====================================================

   BUY NOW

===================================================== */

function buyNow(name, price) {

    cart = [

        {

            name: name,

            price: price,

            quantity: 1

        }

    ];

    updateCart();

    openCart();

}

/* =====================================================

   CHECKOUT

===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(

            "Your cart is empty. Please add a product first."

        );

        return;

    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    const checkoutMessage = `

SHYAMA SHREE CHECKOUT

Total Amount: ₹${total.toLocaleString("en-IN")}

Your checkout page will collect:

• Full Name

• Mobile Number

• Delivery Address

• City

• State

• PIN Code

• Payment Method

Thank you for shopping with Shyama Shree ❤️

`;

    alert(checkoutMessage);

}

/* =====================================================

   SEARCH PRODUCTS

===================================================== */

function searchProducts() {

    const searchInput =

        document

            .getElementById("searchInput")

            .value

            .toLowerCase()

            .trim();

    const products =

        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const productName =

            product

                .getAttribute("data-name")

                .toLowerCase();

        if (

            productName.includes(searchInput)

            ||

            searchInput === ""

        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}

/* =====================================================

   SCROLL TO PRODUCTS

===================================================== */

function scrollToProducts() {

    document

        .getElementById("products")

        .scrollIntoView({

            behavior: "smooth"

        });

}

/* =====================================================

   INITIAL CART

===================================================== */

updateCart();