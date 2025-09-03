// Professional Agentic AI Website JavaScript - Enhanced Version
// Based on agentic-vision-gold functionality with dark theme and gold accents

class AgenticAI {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    this.setupMobileMenu();
    this.setupSmoothScrolling();
    this.setupScrollEffects();
    this.setupFormHandling();
    this.setupButtonInteractions();
    this.setupExternalLinks();
    this.setupKeyboardNavigation();
    this.setupResizeHandler();
    this.setupLucideIcons();
    this.setupLoadingStates();
    this.setupAnimations();
  }

  // Mobile Menu Functionality
  setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-button i');

    if (!mobileMenuBtn || !mobileNav) return;

    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = mobileNav.classList.contains('active');
      
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-menu a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => this.closeMobileMenu(), 200);
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        this.closeMobileMenu();
      }
    });
  }

  openMobileMenu() {
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-button i');
    
    if (mobileNav) {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    if (mobileMenuIcon && typeof lucide !== 'undefined') {
      mobileMenuIcon.setAttribute('data-lucide', 'x');
      lucide.createIcons();
    }
  }

  closeMobileMenu() {
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-button i');
    
    if (mobileNav) {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    if (mobileMenuIcon && typeof lucide !== 'undefined') {
      mobileMenuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    }
  }

  // Smooth Scrolling for Internal Links
  setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href === '#' || href === '#top') {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }

        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
          
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
          });

          this.closeMobileMenu();
          
          setTimeout(() => {
            if (targetElement.id) {
              targetElement.setAttribute('tabindex', '-1');
              targetElement.focus();
            }
          }, 500);
        }
      });
    });
  }

  // Scroll Effects for Navigation
  setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let ticking = false;

    const updateNavbar = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (navbar) {
        if (scrollTop > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    updateNavbar();
  }

  // Form Handling
  setupFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const formData = new FormData(contactForm);
        
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        
        this.clearFormErrors(contactForm);
        
        let hasErrors = false;
        
        if (!name) {
          this.showFieldError('name', 'Full name is required');
          hasErrors = true;
        }
        
        if (!email) {
          this.showFieldError('email', 'Email address is required');
          hasErrors = true;
        } else if (!this.isValidEmail(email)) {
          this.showFieldError('email', 'Please enter a valid email address');
          hasErrors = true;
        }
        
        if (!message) {
          this.showFieldError('message', 'Message is required');
          hasErrors = true;
        }
        
        if (hasErrors) {
          this.showNotification('Please fix the errors below and try again.', 'error');
          return;
        }
        
        if (submitButton) {
          const originalText = submitButton.textContent;
          submitButton.textContent = 'Sending...';
          submitButton.disabled = true;
          
          setTimeout(() => {
            this.showNotification('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            this.clearFormErrors(contactForm);
          }, 2000);
        }
      });
    }
  }

  showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field?.closest('.form-group');
    
    if (formGroup) {
      const existingError = formGroup.querySelector('.field-error');
      if (existingError) existingError.remove();
      
      field.style.borderColor = '#ff6b6b';
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error';
      errorDiv.style.cssText = `
        color: #ff6b6b;
        font-size: 12px;
        margin-top: 4px;
      `;
      errorDiv.textContent = message;
      formGroup.appendChild(errorDiv);
    }
  }

  clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const formGroup = field?.closest('.form-group');
    
    if (formGroup) {
      field.style.borderColor = '';
      const errorDiv = formGroup.querySelector('.field-error');
      if (errorDiv) errorDiv.remove();
    }
  }

  clearFormErrors(form) {
    const errorDivs = form.querySelectorAll('.field-error');
    errorDivs.forEach(div => div.remove());
    
    const fields = form.querySelectorAll('.form-control');
    fields.forEach(field => {
      field.style.borderColor = '';
    });
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">
          <i data-lucide="x" class="notification-close-icon"></i>
        </button>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 24px;
      max-width: 400px;
      padding: 16px 20px;
      background: var(--color-surface);
      border: 1px solid ${type === 'success' ? '#D4AF37' : '#ff6b6b'};
      border-radius: 12px;
      color: var(--color-text);
      box-shadow: var(--shadow-xl);
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
      backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
      setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

  setupButtonInteractions() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-accent');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    
    externalLinks.forEach(link => {
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
      if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
        
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
          notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
          setTimeout(() => notification.remove(), 300);
        });
      }
    });
  }

  setupResizeHandler() {
    let resizeTimeout;
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  handleResize() {
    if (window.innerWidth >= 1024) {
      this.closeMobileMenu();
    }
    
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  setupLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 100);
    }
  }

  setupLoadingStates() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupScrollAnimations();
      
      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 100);
    });

    const checkLucide = () => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      } else {
        setTimeout(checkLucide, 50);
      }
    };
    checkLucide();
  }

  setupScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.card, .vision-card, .scale-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }

  setupAnimations() {
    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.from('.hero-title', {
        duration: 0.9,
        y: 24,
        opacity: 0,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-subtitle', {
        duration: 0.9,
        y: 24,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
      });
      
      gsap.from('.hero-cta', {
        duration: 0.9,
        y: 24,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.35
      });
      
      gsap.utils.toArray('.card, .vision-card, .scale-card').forEach(card => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          y: 24,
          opacity: 0,
          ease: 'power3.out'
        });
      });
      
      gsap.utils.toArray('.stat-number, .metric-number').forEach(stat => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 1,
          textContent: 0,
          ease: 'power2.out',
          snap: { textContent: 1 },
          stagger: 0.2
        });
      });
    }
  }

  scrollToElement(element, offset = 0) {
    if (!element) return;
    
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementTop - navbarHeight - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }

  notify(message, type = 'info') {
    this.showNotification(message, type);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.agenticApp = new AgenticAI();
});

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  const mobileNav = document.querySelector('.mobile-menu');
  if (mobileNav && mobileNav.classList.contains('active')) {
    window.agenticApp?.closeMobileMenu();
  }
});

// Handle visibility change (tab switching)
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AgenticAI;
}
