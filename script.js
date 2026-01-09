// COUNTER ANIMATION
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(target - start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Start counter when social proof is visible
            if (entry.target.classList.contains('social-proof')) {
                const counter = document.querySelector('.counter');
                animateCounter(counter, 200);
            }
        }
    });
}, observerOptions);

// Observe all path nodes
document.querySelectorAll('.path-node').forEach(node => {
    node.classList.add('hidden');
    observer.observe(node);
});

observer.observe(document.querySelector('.social-proof'));

// MODAL FUNCTIONS
function showBookingModal() {
    document.getElementById('bookingModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showPathModal() {
    alert("Great choice! Let's start with a free swing analysis to see where you are on your journey.");
    showBookingModal();
}

function showMembershipModal() {
    alert("Excellent! Lifetime members get access to everything. First, let's schedule your welcome call.");
    showBookingModal();
}

function showStoryModal() {
    alert("Video story modal would open here with your personal story video.");
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// FORM SUBMISSION
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('modal-form')) {
        e.preventDefault();
        alert("Thank you! I'll contact you within 24 hours to schedule your free swing analysis.");
        closeModal('bookingModal');
    }
    
    if (e.target.classList.contains('email-form')) {
        e.preventDefault();
        alert("Welcome to the community! Check your email for your first free lesson.");
        e.target.reset();
    }
});

// MOBILE MENU
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    alert("Mobile menu would open here with navigation links.");
});

// LEARNING PATH INTERACTION
document.querySelectorAll('.path-node').forEach(node => {
    node.addEventListener('click', function() {
        const step = this.dataset.step;
        alert(`Step ${step} details would expand here with video previews and drill instructions.`);
    });
});

// SCROLL EFFECTS
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 1)';
    }
});

console.log("Golf From Tee To Green website loaded successfully!");