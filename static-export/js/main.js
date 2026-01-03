// Limitless Template - Static JavaScript
// Vanilla JS for all interactions

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Dropdown
    const pagesDropdown = document.getElementById('pagesDropdown');
    const pagesMenu = document.getElementById('pagesMenu');

    if (pagesDropdown && pagesMenu) {
        pagesDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            pagesMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            pagesMenu.classList.remove('active');
        });
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Scroll Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '-100px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-scroll class
    const animateElements = document.querySelectorAll('.animate-scroll');
    animateElements.forEach(el => observer.observe(el));

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // Navbar background on scroll
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.5)';
        }

        lastScroll = currentScroll;
    });
});
