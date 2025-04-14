document.addEventListener("DOMContentLoaded", () => {
  // تحقق من صلاحية المستخدم للوصول إلى صفحة المدير
  const loggedIn = sessionStorage.getItem('loggedIn');
  const userRole = sessionStorage.getItem('userRole');
  
  if (!loggedIn || userRole !== 'admin') {
      alert('ليس لديك صلاحية للوصول إلى هذه الصفحة.');
      window.location.href = 'index.html'; // توجيه المستخدم إلى الصفحة الرئيسية
      return; // إنهاء التنفيذ بعد التوجيه
  }

  const form = document.getElementById('add-product-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      // استخراج البيانات من النموذج
      const name = document.getElementById('product-name').value.trim();
      const price = parseFloat(document.getElementById('product-price').value);
      const description = document.getElementById('product-description').value.trim();
      const image = document.getElementById('product-image').value.trim();

      // تحقق من صحة البيانات
      if (!name || isNaN(price) || price <= 0 || !description) {
          alert('يرجى ملء جميع الحقول بشكل صحيح.');
          return; // إنهاء التنفيذ إذا كانت البيانات غير صحيحة
      }

      // إنشاء كائن منتج جديد
      const product = {
          name,
          price,
          description,
          image: image || "https://via.placeholder.com/300x200", // إذا لم يتم إدخال صورة
      };

      // إضافة المنتج إلى localStorage أو إرسالها إلى الخادم إذا كنت تستخدم قاعدة بيانات
      const products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));

      alert('✅ تم إضافة المنتج بنجاح!');
      form.reset(); // إعادة تعيين النموذج
  });
});