const tg = window.Telegram.WebApp;
tg.expand();

let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} добавлен в корзину`);
}

function submitOrder() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const data = {
    order: cart,
    total
  };
  tg.sendData(JSON.stringify(data));
  tg.close();
}
