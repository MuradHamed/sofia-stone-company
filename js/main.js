/**
 * Sofia Stone Company - Main JavaScript
 * Author: MuradHamed
 * Last Updated: 2025-05-15 18:25:03 UTC
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    loadGalleryItems();
    loadPortfolioItems();
    loadBlogPosts();
    initScrollEffects();
    initContactForm();
    initFilters();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');

                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gallery Items Loading
function loadGalleryItems() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    const stones = [
        {
            name: 'Premium Marble',
            type: 'marble',
            description: 'Elegant white marble with distinctive veining',
            image: 'stone_1.jpg'
        },
        {
            name: 'Classic Granite',
            type: 'granite',
            description: 'Durable granite with unique patterns',
            image: 'stone_2.jpg'
        },
        {
            name: 'Natural Limestone',
            type: 'limestone',
            description: 'Traditional limestone with natural texture',
            image: 'stone_3.jpg'
        },
        {
            name: 'Modern Slate',
            type: 'slate',
            description: 'Contemporary slate with sleek finish',
            image: 'stone_4.jpg'
        },
        {
            name: 'Premium Travertine',
            type: 'travertine',
            description: 'Beautiful travertine with organic patterns',
            image: 'stone_5.jpg'
        },
        {
            name: 'Luxury Marble',
            type: 'marble',
            description: 'Exclusive marble with premium finish',
            image: 'stone_6.jpg'
        }
    ];

    stones.forEach(stone => {
        const item = document.createElement('div');
        item.className = `gallery-item ${stone.type} fade-in-hidden`;
        item.innerHTML = `
            <img src="images/${stone.image}" alt="${stone.name}" loading="lazy">
            <div class="item-details">
                <h3>${stone.name}</h3>
                <p>${stone.description}</p>
            </div>
        `;
        galleryGrid.appendChild(item);
    });
}

// Portfolio Items Loading
function loadPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;

    const projects = [
        {
            title: 'Modern Villa Transformation',
            description: 'Complete exterior renovation with premium marble cladding',
            image: 'stone_1.jpg',
            category: 'Residential'
        },
        {
            title: 'Luxury Home Facade',
            description: 'Premium granite installation for modern home',
            image: 'stone_2.jpg',
            category: 'Residential'
        },
        {
            title: 'Commercial Building',
            description: 'Large-scale limestone cladding project',
            image: 'stone_3.jpg',
            category: 'Commercial'
        }
    ];

    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'portfolio-item fade-in-hidden';
        item.innerHTML = `
            <img src="images/${project.image}" alt="${project.title}" loading="lazy">
            <div class="portfolio-details">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="category">${project.category}</span>
            </div>
        `;
        portfolioGrid.appendChild(item);
    });
}

// Blog Posts Loading
function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    const posts = [
        {
            title: 'Choosing the Perfect Stone',
            excerpt: 'Guide to selecting the ideal stone for your project',
            date: '2025-05-15',
            image: 'stone_4.jpg'
        },
        {
            title: 'Maintenance Tips',
            excerpt: 'How to keep your stone facade looking pristine',
            date: '2025-05-14',
            image: 'stone_5.jpg'
        },
        {
            title: 'Latest Stone Trends',
            excerpt: 'Current trends in stone cladding and design',
            date: '2025-05-13',
            image: 'stone_6.jpg'
        }
    ];

    posts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'blog-item fade-in-hidden';
        item.innerHTML = `
            <img src="images/${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-details">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <span class="date">${post.date}</span>
            </div>
        `;
        blogGrid.appendChild(item);
    });
}

// Scroll Effects
function initScrollEffects() {
    // Scroll to top button
    const scrollButton = document.createElement('div');
    scrollButton.classList.add('scroll-to-top');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-hidden').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic form validation
        if (!validateForm(data)) return;

        // Simulate form submission
        const submitButton = contactForm.querySelector('.submit-btn');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you for your message. We will contact you soon!', 'success');
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }, 1500);
    });
}

// Form Validation
function validateForm(data) {
    const errors = [];

    if (!data.name || data.name.length < 2) {
        errors.push('Please enter a valid name');
    }

    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!data.message || data.message.length < 10) {
        errors.push('Message must be at least 10 characters long');
    }

    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }

    return true;
}

// Email Validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Gallery Filters
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 0);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(note => note.remove());

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification styles if not already in CSS
if (!document.querySelector('#notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            background-color: #1a73e8;
            color: white;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        }
        .notification.error {
            background-color: #dc3545;
        }
        .notification.fade-out {
            animation: slideOut 0.3s ease-in forwards;
        }
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(styles);
}