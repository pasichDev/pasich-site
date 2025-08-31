// My Notes App Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Mobile navigation collapse
    const navLinks2 = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks2.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Enhanced phone mockup animations
    const phoneNotes = document.querySelectorAll('.note-item');
    
    // Restart note animations every 10 seconds
    setInterval(() => {
        phoneNotes.forEach((note, index) => {
            note.style.animation = 'none';
            setTimeout(() => {
                note.style.animation = `slideInNote 0.6s ease forwards`;
                note.style.animationDelay = `${index * 0.2}s`;
            }, 100);
        });
    }, 10000);

    // Add interactive hover effects to feature cards
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add click tracking for download buttons (for analytics if needed)
    const downloadButtons = document.querySelectorAll('a[href*="play.google.com"]');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Download button clicked');
            // Add analytics tracking here if needed
        });
    });

    // Smooth reveal animation for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('animate-in');
        }, 300);
    }

    // Add parallax effect to hero section
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            const speed = scrolled * 0.1;
            heroSection.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }

    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestParallaxUpdate);

    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger phone animation after load
        setTimeout(() => {
            const phoneNotes = document.querySelectorAll('.note-item');
            phoneNotes.forEach((note, index) => {
                note.style.animationDelay = `${index * 0.2 + 1}s`;
            });
        }, 500);
    });

    // Feature icon rotation animation
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease';
    });

    // Add intersection observer for phone mockup
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        const phoneObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.5 });
        
        phoneObserver.observe(phoneMockup);
    }
});

// Add custom CSS for animations
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .hero-content {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .hero-content.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card.animate {
            animation-play-state: running;
        }
        
        .phone-mockup.visible {
            animation-duration: 6s;
        }
        
        .phone-mockup.visible .note-item {
            animation-play-state: running;
        }
        
        .navbar-nav .nav-link.active {
            color: var(--primary-color) !important;
            font-weight: 600;
        }
        
        .feature-icon {
            transition: transform 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .hero-content {
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
});
