document.addEventListener("DOMContentLoaded", function () {
    // التأكد أننا في صفحة القوانين فقط
    if (!window.location.pathname.includes("rules.html")) return;

    // تفعيل مكتبة AOS إذا كانت موجودة
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true
        });
    }

    // التعامل مع عناصر القوانين القابلة للطي
    const rules = document.querySelectorAll(".rule");

    rules.forEach(rule => {
        const toggleBtn = rule.querySelector(".toggle-btn");
        const content = rule.querySelector(".rule-content");

        // تخزين ارتفاع المحتوى في خاصية dataset
        content.dataset.scrollHeight = content.scrollHeight;

        toggleBtn.addEventListener("click", () => {
            const isOpen = content.classList.contains("active");

            if (isOpen) {
                // إغلاق القاعدة
                content.classList.remove("active");
                content.style.maxHeight = null;
                toggleBtn.textContent = "+";
            } else {
                // فتح القاعدة
                content.classList.add("active");
                content.style.maxHeight = content.dataset.scrollHeight + "px"; // استخدام القيمة المخزنة
                toggleBtn.textContent = "−";
            }
        });
    });
});