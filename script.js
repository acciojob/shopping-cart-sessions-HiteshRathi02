// Products array
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render the product list
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the list before rendering

  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.onclick = () => addToCart(product);

    li.appendChild(addButton);
    productList.appendChild(li);
  });
}

// Function to render the cart
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Clear the cart before rendering
  
  // Get cart items from sessionStorage
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to add a product to the cart
function addToCart(product) {
  // Get current cart from sessionStorage
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Add product to cart
  cart.push(product);

  // Update sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Re-render the cart
  renderCart();
}

// Function to clear the cart
function clearCart() {
  // Clear the sessionStorage
  sessionStorage.removeItem("cart");

  // Re-render the cart to show it as empty
  renderCart();
}

// Set up the "Clear Cart" button functionality
document.getElementById("clear-cart-btn").onclick = clearCart;

// Initial rendering of the products and cart
renderProducts();
renderCart();