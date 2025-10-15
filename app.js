// app.js - Modern animated interactivity for Organisation-website

// Section animation on scroll
const animatedSections = document.querySelectorAll('.animated-section');
const animatedCards = document.querySelectorAll('.animated-card');

const triggerAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(triggerAnimation, {
    threshold: 0.18
});
animatedSections.forEach(section => observer.observe(section));
animatedCards.forEach(card => observer.observe(card));

// Smooth scroll for nav links
const menuLinks = document.querySelectorAll('.menu_item .global');
menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if(href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button pulse on hover
const buttons = document.querySelectorAll('.main_button, .products_button, .contacts_form_button');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.12)' },
            { transform: 'scale(1)' }
        ], {
            duration: 420,
            easing: 'cubic-bezier(.75,0,.25,1)'
        });
    });
});

// Details button scrolls to about
const detailsBtn = document.getElementById('detailsBtn');
if(detailsBtn) {
    detailsBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({behavior:'smooth', block:'start'});
    });
}

// Animated highlight on product card hover
const productCards = document.querySelectorAll('.products_card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.animate([
            { boxShadow: '0 2px 24px 0 rgba(0,0,0,0.12)' },
            { boxShadow: '0 8px 40px 4px rgba(0,255,216,0.16)' },
            { boxShadow: '0 2px 24px 0 rgba(0,0,0,0.12)' }
        ], {
            duration: 420,
            easing: 'cubic-bezier(.75,0,.25,1)'
        });
    });
});
// Optional: add further custom animations to match your vision!