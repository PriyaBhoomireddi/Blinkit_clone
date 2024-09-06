// Array to store the cart items
let cart = [];

// Function to add item to the cart
function addToCart(itemName, price) {
    // Check if the item already exists in the cart
    const itemIndex = cart.findIndex(item => item.name === itemName);
    
    if (itemIndex > -1) {
        // If the item already exists, increase the quantity
        cart[itemIndex].quantity += 1;
    } else {
        // If the item does not exist, add it with a quantity of 1
        cart.push({ name: itemName, price: price, quantity: 1 });
    }

    // Display a message or update the cart count
    updateCartCount();
}

// Function to update the cart count on the cart button
function updateCartCount() {
    const cartButton = document.querySelector('.cart');
    cartButton.innerText = `My Cart (${cart.length} items)`;
}

// Function to display the cart contents
function displayCart() {
    let cartContent = 'Cart is empty.';
    let totalAmount = 0;

    if (cart.length > 0) {
        cartContent = '<h3>Your Cart</h3>';
        cartContent += '<ul>';
        cart.forEach(item => {
            cartContent += `<li>${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</li>`;
            totalAmount += item.price * item.quantity;
        });
        cartContent += '</ul>';
        cartContent += `<p>Total Amount: ₹${totalAmount}</p>`;
    }

    // Display the cart contents in an alert or a custom modal
    alert(cartContent);
}

// Add event listeners to the add buttons
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach(button => {
    button.addEventListener('click', function () {
        const itemName = this.parentElement.parentElement.querySelector('h4').innerText;
        const itemPrice = parseFloat(this.parentElement.querySelector('.price').innerText.replace('₹', ''));
        addToCart(itemName, itemPrice);
    });
});

// Add event listener to the cart button
document.querySelector('.cart').addEventListener('click', function () {
    displayCart();
});
