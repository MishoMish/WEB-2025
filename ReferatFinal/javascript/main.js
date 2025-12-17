/**
 * Main JavaScript for Referat
 * Handles: Dark mode, scroll effects, navigation, print, and interactivity
 */

(function() {
    'use strict';

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    html.setAttribute('data-theme', initialTheme);
    if (themeToggle) {
        themeToggle.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    // ===== SCROLL PROGRESS BAR =====
    const progressBar = document.querySelector('.progress-bar');
    
    function updateProgressBar() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }
    
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);

    // ===== NAVIGATION SCROLL EFFECT =====
    const nav = document.getElementById('main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (nav) {
            if (scrollTop > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.querySelector('.nav-menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('expanded');
            const isExpanded = nav.classList.contains('expanded');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile nav when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('expanded');
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // ===== ACTIVE SECTION HIGHLIGHTING =====
    const sections = document.querySelectorAll('main section[id]');
    const navLinksArray = Array.from(navLinks);
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 150; // Offset for fixed nav
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);

    // ===== SCROLL TO TOP BUTTON =====
    const scrollToTopBtn = document.getElementById('scroll-top');
    
    function toggleScrollToTopBtn() {
        if (scrollToTopBtn) {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }
    }
    
    window.addEventListener('scroll', toggleScrollToTopBtn);
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== HERO TITLE MORPHING ON SCROLL =====
    const heroSection = document.getElementById('hero');
    const heroTitle = document.querySelector('.hero-title');
    
    function morphHeroOnScroll() {
        if (!heroSection || !heroTitle) return;
        
        const heroHeight = heroSection.offsetHeight;
        const scrolled = window.scrollY;
        const morphPoint = heroHeight * 0.3;
        
        if (scrolled > morphPoint) {
            heroTitle.classList.add('morphing');
        } else {
            heroTitle.classList.remove('morphing');
        }
    }
    
    window.addEventListener('scroll', morphHeroOnScroll);

    // ===== INTERACTIVE FIGURES =====
    const figures = document.querySelectorAll('.interactive-figure');
    
    figures.forEach(figure => {
        figure.setAttribute('tabindex', '0');
        figure.setAttribute('role', 'button');
        figure.setAttribute('aria-label', 'Click to expand figure');
        
        const expand = () => {
            const overlay = document.createElement('div');
            overlay.className = 'figure-expand-overlay';
            
            const inner = document.createElement('div');
            inner.className = 'figure-expand-inner';
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'figure-expand-close';
            closeBtn.innerHTML = '&times;';
            closeBtn.setAttribute('aria-label', 'Close expanded view');
            
            const content = document.createElement('div');
            content.className = 'figure-expand-content';
            
            const figureClone = figure.cloneNode(true);
            const captionEl = figureClone.querySelector('figcaption');
            
            const caption = document.createElement('div');
            caption.className = 'figure-expand-caption';
            caption.innerHTML = captionEl ? captionEl.innerHTML : '';
            
            // Get the image or SVG
            const img = figureClone.querySelector('img, svg');
            if (img) {
                content.appendChild(img.cloneNode(true));
            }
            
            inner.appendChild(closeBtn);
            inner.appendChild(content);
            if (caption.innerHTML) {
                inner.appendChild(caption);
            }
            overlay.appendChild(inner);
            document.body.appendChild(overlay);
            document.body.classList.add('no-scroll');
            
            const close = (e) => {
                if (e) e.preventDefault();
                overlay.classList.add('closing');
                setTimeout(() => {
                    document.body.removeChild(overlay);
                    document.body.classList.remove('no-scroll');
                }, 250);
            };
            
            closeBtn.addEventListener('click', close);
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) close(e);
            });
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    close(e);
                    document.removeEventListener('keydown', escHandler);
                }
            });
            
            // Focus close button for accessibility
            setTimeout(() => closeBtn.focus(), 100);
        };
        
        figure.addEventListener('click', expand);
        figure.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                expand();
            }
        });
    });

    // ===== PRINT BUTTON =====
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            document.body.classList.add('printing');
            window.print();
            setTimeout(() => {
                document.body.classList.remove('printing');
            }, 100);
        });
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 100; // Account for fixed nav
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== TABLES HOVER EFFECT =====
    const tables = document.querySelectorAll('table tbody tr');
    tables.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.cursor = 'default';
        });
    });

    // ===== CODE BLOCKS INTERACTION =====
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach((block, index) => {
        // Add copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
        
        block.appendChild(copyBtn);
        
        copyBtn.addEventListener('click', async () => {
            const code = block.querySelector('code');
            if (code) {
                try {
                    await navigator.clipboard.writeText(code.textContent);
                    copyBtn.textContent = 'Copied!';
                    copyBtn.style.background = 'rgba(39, 174, 96, 0.3)';
                    copyBtn.style.borderColor = 'rgba(39, 174, 96, 0.4)';
                    
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                        copyBtn.style.background = '';
                        copyBtn.style.borderColor = '';
                    }, 2000);
                } catch (err) {
                    copyBtn.textContent = 'Failed';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 2000);
                }
            }
        });
    });

    // ===== LAZY LOADING FOR IMAGES =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== PERFORMANCE: Reduce animations for users who prefer reduced motion =====
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }

    // ===== INITIALIZATION =====
    function init() {
        updateProgressBar();
        toggleScrollToTopBtn();
        highlightActiveSection();
        morphHeroOnScroll();
        
        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
        
        console.log('✅ Referat JavaScript initialized successfully');
    }
    
    // Run init when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
