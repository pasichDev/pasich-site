
// Add CSS transitions for better performance
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .loaded .skill-card,
        .loaded .project-card,
        .loaded .contact-card {
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .badge {
            transition: transform 0.2s ease;
        }
        
        .navbar-nav .nav-link.active {
            color: #007bff !important;
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);
});
