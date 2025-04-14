document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const products = JSON.parse(localStorage.getItem('products')) || [];

  // التحقق من وجود منتجات
  if (products.length > 0) {
      products.forEach(product => {
          // التحقق من صحة بيانات المنتج
          if (product.image && product.name && product.description && product.price) {
              const productElement = document.createElement("div");
              productElement.classList.add("product-card");
              productElement.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                  <p>${product.price} ريال</p>
              `;
              productList.appendChild(productElement);
          }
      });
  } else {
      productList.innerHTML = "<p>لا توجد منتجات حالياً.</p>";
  }
});