// Micro-animations and interaction logic for India Tours and Travels

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all cards and sections for reveal effect
    document.querySelectorAll('.group, section h2, section p, .glass-card').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        revealObserver.observe(el);
    });

    // Navigation scroll effect
    const navDiv = document.querySelector('nav > div');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navDiv.classList.add('py-2');
            navDiv.classList.remove('py-4');
        } else {
            navDiv.classList.add('py-4');
            navDiv.classList.remove('py-2');
        }
    });

    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100', 'active');
            slides[currentSlide].classList.add('opacity-0');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100', 'active');
        }, 5000); // 5 seconds per slide
    }

    // Hotel Search Logic
    const searchBtn = document.getElementById('search-hotel-btn');
    const cityInput = document.getElementById('hotel-city-input');
    const resultArea = document.getElementById('hotel-result');
    const displayCity = document.getElementById('display-city');

    if (searchBtn && cityInput && resultArea) {
        searchBtn.addEventListener('click', () => {
            const city = cityInput.value.trim();
            if (city) {
                displayCity.textContent = city;
                resultArea.classList.remove('hidden');
                resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                cityInput.classList.add('border-red-500');
                setTimeout(() => cityInput.classList.remove('border-red-500'), 2000);
            }
        });

        // Allow pressing Enter to search
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchBtn.click();
        });
    }

    // Contact Modal Logic
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('close-modal');
    const packageCards = document.querySelectorAll('.package-card');

    if (modal && closeBtn) {
        packageCards.forEach(card => {
            card.addEventListener('click', () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scroll
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeBtn.click();
            }
        });

        // Close on clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
    }

    console.log('India Tours and Travels site initialized.');
});

