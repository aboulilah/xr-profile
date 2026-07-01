// Navigation
const pageLinks = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute('data-page'));
    });
});

function navigateTo(pageName) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageName).classList.add('active');
    window.scrollTo(0, 0);
}

// Filters
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('[data-category]');
        
        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showStatus('Please fill in all fields', false);
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Please enter a valid email', false);
            return;
        }
        
        showStatus('✓ Message sent! I\'ll get back to you within 24-48 hours.', true);
        form.reset();
        
        setTimeout(() => {
            status.style.display = 'none';
        }, 4000);
    });
}

function showStatus(msg, success) {
    status.textContent = msg;
    status.className = `form-status ${success ? 'success' : ''}`;
    status.style.display = 'block';
}

// Load home page
window.addEventListener('load', () => {
    navigateTo('home');
});
