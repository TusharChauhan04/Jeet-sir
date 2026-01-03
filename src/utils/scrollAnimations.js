// Scroll Animation Utility using Intersection Observer

export const initScrollAnimations = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '-100px',
        }
    );

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return observer;
};

// Parallax Scroll Effect
export const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');

    const handleScroll = () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((el) => {
            const speed = el.dataset.speed || 0.3;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
};

// Smooth Scroll to Section
export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Add stagger delays to elements
export const addStaggerDelay = (elements, baseDelay = 150) => {
    elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * baseDelay}ms`;
    });
};
