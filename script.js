const cartList = document.getElementById("cart-list");
const productList = document.getElementById("product-list");
const clearCartButton = document.getElementById("clear-cart-btn");

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];


function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });

  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

function renderCart() {
  cartList.innerHTML = "";
  const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
  currentCart.forEach((product) => {
    cartList.innerHTML += `<li>${product.name} - $${product.price}</li>`;
  });
}

function addToCart(productId) {
  const prod = products.find((product) => product.id === productId);
  const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
  currentCart.push(prod);
  sessionStorage.setItem("cart", JSON.stringify(currentCart));
  cartList.innerHTML += `<li>${prod.name} - $${prod.price}</li>`;
}

function removeFromCart(productId) {}

function clearCart() {
  sessionStorage.removeItem("cart");
  cartList.innerHTML = "";
}

clearCartButton.addEventListener("click", clearCart);

renderProducts();
renderCart();
