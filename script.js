// ==================== 2026 WITH AYMEN - JAVASCRIPT ====================
// Modern Interactive Proposal System
// Version: 1.0.0

// ==================== USER DATA MANAGEMENT ====================
/**
 * Manages user data persistence using Local Storage
 */
class UserData {
    constructor() {
        this.storageKey = 'aymen2026_user';
    }
    
    /**
     * Save user information to local storage
     * @param {string} firstName - User's first name
     * @param {string} lastName - User's last name
     */
    save(firstName, lastName) {
        const data = { firstName, lastName };
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
    
    /**
     * Load user data from local storage
     * @returns {Object|null} User data object or null if not found
     */
    load() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }
    
    /**
     * Clear user data from local storage
     */
    clear() {
        localStorage.removeItem(this.storageKey);
    }
    
    /**
     * Get user's full name
     * @returns {string} Full name or empty string
     */
    getFullName() {
        const data = this.load();
        return data ? `${data.firstName} ${data.lastName}` : '';
    }
}

// Initialize user data manager
const userData = new UserData();

// ==================== PAGE NAVIGATION ====================
/**
 * Manages page transitions and visibility
 */
class PageManager {
    constructor() {
        this.pages = {
            login: document.getElementById('loginPage'),
            proposal: document.getElementById('proposalPage'),
            certificate: document.getElementById('certificatePage')
        };
        this.currentPage = 'login';
    }
    
    /**
     * Show a specific page with smooth transition
     * @param {string} pageName - Name of the page to show
     */
    show(pageName) {
        // Hide all pages
        Object.values(this.pages).forEach(page => {
            page.classList.remove('active');
            page.classList.add('hidden');
        });
        
        // Show target page with animation
        const targetPage = this.pages[pageName];
        if (targetPage) {
            targetPage.classList.remove('hidden');
            setTimeout(() => {
                targetPage.classList.add('active');
            }, 50);
            this.currentPage = pageName;
        }
    }
}

// Initialize page manager
const pageManager = new PageManager();

// ==================== PARTICLE SYSTEM ====================
/**
 * Creates and animates floating particles in the background
 */
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles');
        this.particleCount = 30;
        this.colors = ['#FF6B9D', '#FFC371', '#C96DD8'];
        this.init();
    }
    
    /**
     * Initialize all particles
     */
    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }
    
    /**
     * Create a single animated particle
     */
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties for unique particle behavior
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 4 + 6;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.background = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        this.container.appendChild(particle);
        
        // Remove and recreate after animation completes (continuous effect)
        setTimeout(() => {
            particle.remove();
            this.createParticle();
        }, (duration + delay) * 1000);
    }
}

// Initialize particle system
const particleSystem = new ParticleSystem();

// ==================== FORM VALIDATION ====================
/**
 * Handles form validation and error display
 */
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.inputs = {
            firstName: document.getElementById('firstName'),
            lastName: document.getElementById('lastName')
        };
        this.errors = {
            firstName: document.getElementById('firstNameError'),
            lastName: document.getElementById('lastNameError')
        };
    }
    
    /**
     * Validate all form fields
     * @returns {boolean} True if all fields are valid
     */
    validate() {
        let isValid = true;
        
        // Validate first name
        if (this.inputs.firstName.value.trim() === '') {
            this.showError('firstName');
            isValid = false;
        } else {
            this.hideError('firstName');
        }
        
        // Validate last name
        if (this.inputs.lastName.value.trim() === '') {
            this.showError('lastName');
            isValid = false;
        } else {
            this.hideError('lastName');
        }
        
        return isValid;
    }
    
    /**
     * Show error for a specific field
     * @param {string} field - Field name
     */
    showError(field) {
        this.inputs[field].classList.add('error');
        this.errors[field].classList.add('show');
    }
    
    /**
     * Hide error for a specific field
     * @param {string} field - Field name
     */
    hideError(field) {
        this.inputs[field].classList.remove('error');
        this.errors[field].classList.remove('show');
    }
    
    /**
     * Get trimmed values from all fields
     * @returns {Object} Form values
     */
    getValues() {
        return {
            firstName: this.inputs.firstName.value.trim(),
            lastName: this.inputs.lastName.value.trim()
        };
    }
    
    /**
     * Reset form to initial state
     */
    reset() {
        this.form.reset();
        Object.keys(this.inputs).forEach(field => {
            this.hideError(field);
        });
    }
}

// Initialize form validator
const formValidator = new FormValidator('loginForm');

// ==================== CONFETTI ANIMATION ====================
/**
 * Creates celebratory confetti animation
 */
class ConfettiSystem {
    constructor() {
        this.colors = ['#FF6B9D', '#FFC371', '#C96DD8', '#4CAF50', '#FFD700'];
    }
    
    /**
     * Create a burst of confetti
     */
    burst() {
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                this.createConfetti();
            }, i * 30);
        }
    }
    
    /**
     * Create a single confetti piece
     */
    createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random properties for natural fall effect
        const left = Math.random() * 100;
        const size = Math.random() * 8 + 4;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const duration = Math.random() * 2 + 2;
        
        // Apply styles
        confetti.style.left = `${left}%`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.background = color;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.top = '-50px';
        
        document.body.appendChild(confetti);
        
        // Remove after animation completes
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Initialize confetti system
const confettiSystem = new ConfettiSystem();

// ==================== CERTIFICATE GENERATION ====================
/**
 * Handles certificate image generation and download
 */
class CertificateGenerator {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    
    /**
     * Generate certificate as canvas element
     * @returns {Promise<HTMLCanvasElement>} Canvas with certificate
     */
    async generate() {
        const certificate = document.getElementById('certificateContent');
        
        // Load html2canvas library if not already loaded
        await this.loadHtml2Canvas();
        
        // Generate canvas from certificate HTML
        return html2canvas(certificate, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false
        });
    }
    
    /**
     * Load html2canvas library dynamically
     * @returns {Promise} Resolves when library is loaded
     */
    loadHtml2Canvas() {
        return new Promise((resolve, reject) => {
            // Check if already loaded
            if (window.html2canvas) {
                resolve();
                return;
            }
            
            // Load from CDN
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    /**
     * Download certificate as PNG image
     * @param {HTMLCanvasElement} canvas - Canvas to download
     */
    download(canvas) {
        const link = document.createElement('a');
        const fullName = userData.getFullName().replace(/\s+/g, '_');
        link.download = `2026_Certificate_${fullName}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
}

// Initialize certificate generator
const certificateGenerator = new CertificateGenerator();

// ==================== EVENT HANDLERS ====================

/**
 * Handle login form submission
 */
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (formValidator.validate()) {
        const { firstName, lastName } = formValidator.getValues();
        userData.save(firstName, lastName);
        
        // Update proposal page with user name
        document.getElementById('userName').textContent = firstName;
        
        // Navigate to proposal page
        pageManager.show('proposal');
    }
});

/**
 * Handle accept button click
 */
document.getElementById('acceptBtn').addEventListener('click', () => {
    const fullName = userData.getFullName();
    document.getElementById('certificateName').textContent = fullName;
    
    // Navigate to certificate page
    pageManager.show('certificate');
    
    // Trigger confetti animation after brief delay
    setTimeout(() => {
        confettiSystem.burst();
    }, 300);
});

/**
 * Handle decline button click
 */
document.getElementById('declineBtn').addEventListener('click', () => {
    if (confirm('Are you sure? You\'ll miss an amazing journey in 2026! 🥺')) {
        alert('Maybe next time! 👋');
        pageManager.show('login');
        formValidator.reset();
        userData.clear();
    }
});

/**
 * Handle download certificate button click
 */
document.getElementById('downloadBtn').addEventListener('click', async () => {
    try {
        const downloadBtn = document.getElementById('downloadBtn');
        const originalText = downloadBtn.innerHTML;
        
        // Show loading state
        downloadBtn.innerHTML = '<span>⏳ Generating...</span>';
        downloadBtn.disabled = true;
        
        // Generate and download certificate
        const canvas = await certificateGenerator.generate();
        certificateGenerator.download(canvas);
        
        // Show success state
        downloadBtn.innerHTML = '<span>✅ Downloaded!</span>';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        }, 2000);
    } catch (error) {
        alert('Failed to generate certificate. Please try again.');
        console.error('Certificate generation error:', error);
        
        // Reset button state
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.innerHTML = '<span>📥 Download Certificate</span>';
        downloadBtn.disabled = false;
    }
});

/**
 * Handle share certificate button click
 */
document.getElementById('shareBtn').addEventListener('click', async () => {
    const fullName = userData.getFullName();
    const shareText = `🎊 I'm starting 2026 with AYMEN! Join me on this amazing journey! 🌟`;
    
    // Try native Web Share API first
    if (navigator.share) {
        try {
            await navigator.share({
                title: '2026 with AYMEN',
                text: shareText,
                url: window.location.href
            });
        } catch (error) {
            // User cancelled or error occurred
            if (error.name !== 'AbortError') {
                fallbackShare(shareText);
            }
        }
    } else {
        // Fallback for browsers without Web Share API
        fallbackShare(shareText);
    }
});

/**
 * Fallback share function using clipboard
 * @param {string} text - Text to copy to clipboard
 */
function fallbackShare(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Share text copied to clipboard! 📋');
}

/**
 * Handle restart button click
 */
document.getElementById('restartBtn').addEventListener('click', () => {
    if (confirm('Start over? Your current certificate will be cleared.')) {
        pageManager.show('login');
        formValidator.reset();
        userData.clear();
    }
});

// ==================== REAL-TIME VALIDATION ====================

/**
 * Add real-time validation listeners to form inputs
 */
['firstName', 'lastName'].forEach(field => {
    const input = document.getElementById(field);
    
    // Validate on blur (when user leaves field)
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            formValidator.showError(field);
        } else {
            formValidator.hideError(field);
        }
    });
    
    // Clear error on input (as user types)
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            formValidator.hideError(field);
        }
    });
});

// ==================== KEYBOARD NAVIGATION ====================

/**
 * Handle keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // Enter key to submit on login page
    if (pageManager.currentPage === 'login' && e.key === 'Enter') {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
    
    // Escape key to go back
    if (e.key === 'Escape' && pageManager.currentPage !== 'login') {
        if (confirm('Go back to the previous page?')) {
            if (pageManager.currentPage === 'proposal') {
                pageManager.show('login');
            } else if (pageManager.currentPage === 'certificate') {
                pageManager.show('proposal');
            }
        }
    }
});

// ==================== INITIALIZATION ====================

/**
 * Initialize application on window load
 */
window.addEventListener('load', () => {
    // Check if user data exists in storage
    const savedData = userData.load();
    if (savedData) {
        // Optionally auto-navigate or pre-fill form
        // For now, we start fresh each time
    }
    
    // Focus first input for better UX
    document.getElementById('firstName').focus();
    
    console.log('🎊 2026 with AYMEN - Website loaded successfully!');
});

// ==================== SERVICE WORKER (OPTIONAL) ====================

/**
 * Register service worker for offline functionality (if implemented)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('./sw.js')
        //     .then(registration => {
        //         console.log('Service Worker registered:', registration);
        //     })
        //     .catch(error => {
        //         console.log('Service Worker registration failed:', error);
        //     });
    });
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Get browser name
 * @returns {string} Browser name
 */
function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") > -1) return "Firefox";
    if (userAgent.indexOf("Chrome") > -1) return "Chrome";
    if (userAgent.indexOf("Safari") > -1) return "Safari";
    if (userAgent.indexOf("Edge") > -1) return "Edge";
    return "Unknown";
}

// Log device information (for debugging)
console.log(`Device: ${isMobile() ? 'Mobile' : 'Desktop'}`);
console.log(`Browser: ${getBrowserName()}`);

// ==================== ERROR HANDLING ====================

/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
    console.error('Global error caught:', e.error);
    // Optionally show user-friendly error message
});

/**
 * Unhandled promise rejection handler
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Optionally show user-friendly error message
});

// ==================== ANALYTICS (OPTIONAL) ====================

/**
 * Track page views (placeholder for analytics integration)
 */
function trackPageView(pageName) {
    console.log(`Page viewed: ${pageName}`);
    // Integrate with analytics service here (Google Analytics, etc.)
}

/**
 * Track user actions (placeholder for analytics integration)
 */
function trackAction(action, data = {}) {
    console.log(`Action tracked: ${action}`, data);
    // Integrate with analytics service here
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        UserData,
        PageManager,
        ParticleSystem,
        FormValidator,
        ConfettiSystem,
        CertificateGenerator
    };
}
