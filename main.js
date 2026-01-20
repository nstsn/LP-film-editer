document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Trigger
    document.body.classList.add('page-fade-in');

    // 2. Scroll Reveal Animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-delay, .work-card').forEach(el => {
        observer.observe(el);
    });
});
