// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Stone Gallery Filter
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
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Stone Preview Tool
    const stoneSelector = document.querySelector('.stone-selector');
    const previewImage = document.querySelector('.preview-image');

    if (stoneSelector && previewImage) {
        const stones = [
            { name: 'Marble', image: 'marble-preview.jpg' },
            { name: 'Granite', image: 'granite-preview.jpg' },
            { name: 'Limestone', image: 'limestone-preview.jpg' },
            // Add more stones as needed
        ];

        stones.forEach(stone => {
            const button = document.createElement('button');
            button.textContent = stone.name;
            button.addEventListener('click', () => {
                previewImage.style.backgroundImage = `url(images/${stone.image})`;
            });
            stoneSelector.appendChild(button);
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy Loading Images
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));

    // Animate on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
});

// Dynamic Gallery Loading
const loadGalleryItems = () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const stoneTypes = [
        {
            name: 'Carrara Marble',
            type: 'marble',
            description: 'Classic white marble with gray veining',
            image: 'carrara-marble.jpg'
        },
        {
            name: 'Baltic Brown Granite',
            type: 'granite',
            description: 'Rich brown granite with black and gray specks',
            image: 'baltic-brown.jpg'
        },
        // Add more stone types
    ];

    stoneTypes.forEach(stone => {
        const item = document.createElement('div');
        item.className = `gallery-item ${stone.type}`;
        item.innerHTML = `
            <img src="images/${stone.image}" alt="${stone.name}">
            <div class="item-details">
                <h3>${stone.name}</h3>
                <p>${stone.description}</p>
            </div>
        `;
        galleryGrid.appendChild(item);
    });
};

// Load Portfolio Items
const loadPortfolioItems = () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const projects = [
        {
            title: 'Modern Villa Transformation',
            description: 'Complete exterior renovation with premium marble cladding',
            image: 'project1.jpg'
        },
        // Add more projects
    ];

    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.innerHTML = `
            <img src="images/${project.image}" alt="${project.title}">
            <div class="portfolio-details">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        portfolioGrid.appendChild(item);
    });
};

// Load Blog Posts
const loadBlogPosts = () => {
    const blogGrid = document.querySelector('.blog-grid');
    const posts = [
        {
            title: 'How to Choose the Perfect Stone for Your Home',
            excerpt: 'Learn about different stone types and their ideal applications',
            date: '2025-05-01',
            image: 'blog1.jpg'
        },
        // Add more blog posts
    ];

    posts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'blog-item';
        item.innerHTML = `
            <img src="images/${post.image}" alt="${post.title}">
            <div class="blog-details">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <span class="date">${post.date}</span>
            </div>
        `;
        blogGrid.appendChild(item);
    });
};