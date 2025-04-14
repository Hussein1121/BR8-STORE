// بيانات المنتجات (يجب أن تتوافق مع المنتجات الموجودة في صفحة products)
const productsData = [
  { id: 1, name: "باقة فلوس 1M", price: 15 },
  { id: 2, name: "VIP شهر", price: 20 },
  { id: 3, name: "سيارة مخصصة", price: 35 }
];

// تحميل سلة المشتريات من localStorage وعرضها
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.getElementById("cart-body");
  tbody.innerHTML = "";
  let total = 0;

  cart.forEach((productId) => {
      const product = productsData.find(p => p.id === productId);
      if (product) {
          const row = document.createElement("tr");

          row.innerHTML = `
              <td>${product.name}</td>
              <td>${product.price} ريال</td>
              <td>1</td>
              <td>${product.price} ريال</td>
              <td><button onclick="removeFromCart(${productId})">إزالة</button></td>
          `;
          tbody.appendChild(row);
          total += product.price;
      }
  });

  document.getElementById("total-price").textContent = `الإجمالي: ${total} ريال`;
}

// إزالة منتج من السلة
function removeFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter(id => id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  loadCart();
}

// تنفيذ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", loadCart);

// مسح السلة
function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}