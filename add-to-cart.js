// دالة الإضافة إلى السلة
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ تمت إضافة المنتج إلى السلة!");
  updateCartMessage();
}

// تفعيل أزرار الإضافة
function activateAddToCartButtons() {
  document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", (e) => {
          const btn = e.target;
          const product = {
              id: btn.dataset.id,
              name: btn.dataset.name,
              price: parseFloat(btn.dataset.price)
          };
          addToCart(product);
      });
  });
}

// عرض السلة
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-container");
  container.innerHTML = "";
  cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - ${item.price} ريال`;
      container.appendChild(div);
  });
  updateCartMessage();
}

// عرض ملخص السلة
function updateCartMessage() {
  const cartMessage = document.getElementById('cart-message');
  if (cartMessage) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartMessage.innerHTML = `عدد المنتجات في السلة: ${cart.length} - إجمالي السعر: ${total} ريال`;
  }
}

// تفعيل الإضافة إلى السلة بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  if (productList) {
      const products = [
          { id: 1, name: "باقة فلوس 1M", description: "1,000,000$ داخل اللعبة", price: 15, image: "" },
          { id: 2, name: "VIP شهر", description: "عضوية VIP لمدة شهر", price: 20, image: "" },
          { id: 3, name: "سيارة مخصصة", description: "احصل على سيارة فاخرة", price: 35, image: "" }
      ];

      products.forEach(product => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td><img src="${product.image || "https://via.placeholder.com/50"}" width="50"></td>
              <td>${product.name}</td>
              <td>${product.description}</td>
              <td>${product.price} ريال</td>
              <td><button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">إضافة</button></td>
          `;
          productList.appendChild(row);
      });

      // تفعيل أزرار الإضافة
      activateAddToCartButtons();
  }

  if (document.getElementById("cart-container")) {
      displayCart();
  }
});
