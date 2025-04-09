document.addEventListener('DOMContentLoaded', function() {
  // إضافة المنتج إلى السلة
  const addToCartButtons = document.querySelectorAll('.btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      alert('تم إضافة المنتج إلى السلة!');
    });
  });

  // إدارة محتوى الشروط والأحكام (Accordion)
  const accordionTitles = document.querySelectorAll('.accordion-title');
  accordionTitles.forEach(title => {
    title.addEventListener('click', function() {
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
