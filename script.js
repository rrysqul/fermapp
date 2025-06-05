const tg = window.Telegram.WebApp;
tg.expand();

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    countEl.innerText = cart.length;
  }
}

function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product} добавлен в корзину`);
}

function goToCart() {
  window.location.href = "cart.html";
}

// при открытии страницы обновляем счётчик
updateCartCount();
