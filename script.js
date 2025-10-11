// تفعيل القائمة المتنقلة
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// تأثير التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// تأثير الظل للشريط العلوي عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.2)';
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(37, 99, 235, 0.1)';
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
    }
});

// تأثير عشوائي للعناصر العائمة
const floatingElements = document.querySelectorAll('.floating-element');

floatingElements.forEach((element, index) => {
    // تعيين تأخير عشوائي لكل عنصر
    element.style.animationDelay = `${index * 2}s`;
});