/* =====================
   RIFT — app.js
   ===================== */

// ---- CANVAS PARTICLE BACKGROUND ----
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', () => { resize(); initParticles(); });

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 1.2 + 0.3;
            this.vx = (Math.random() - 0.5) * 0.18;
            this.vy = (Math.random() - 0.5) * 0.18;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.color = Math.random() > 0.85
                ? `rgba(196,30,58,${this.alpha})`
                : Math.random() > 0.7
                    ? `rgba(139,92,246,${this.alpha})`
                    : `rgba(255,255,255,${this.alpha * 0.4})`;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        const count = Math.floor((W * H) / 10000);
        particles = Array.from({ length: Math.min(count, 120) }, () => new Particle());
    }

    function drawGrid() {
        ctx.strokeStyle = 'rgba(255,255,255,0.015)';
        ctx.lineWidth = 0.5;
        const spacing = 80;
        for (let x = 0; x < W; x += spacing) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
        }
        for (let y = 0; y < H; y += spacing) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
        }
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, W, H);
        drawGrid();
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    }
    initParticles();
    animateCanvas();
}

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
}

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-menu a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
}

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll(
    '.feat-card, .char-card, .thread-card, .rank-item, .recap-left, .recap-right, .lore-card, .thread-full-card, .rank-full-card'
);
revealEls.forEach(el => el.classList.add('scroll-reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// Global function: call this after dynamically adding scroll-reveal elements
window.observeNewCards = function (selector) {
    const newEls = document.querySelectorAll(selector || '.scroll-reveal:not(.visible)');
    newEls.forEach(el => {
        // If already in viewport, make visible immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            revealObserver.observe(el);
        }
    });
};


// ---- POWER BARS ANIMATE ON SCROLL (index.html hero section) ----
const charSection = document.getElementById('characters');
if (charSection) {
    const charObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('#characters .pb-fill').forEach(bar => {
                const target = bar.getAttribute('data-width');
                if (target) { bar.style.width = '0%'; setTimeout(() => { bar.style.width = target + '%'; }, 200); }
            });
            charObserver.disconnect();
        }
    }, { threshold: 0.1 });
    charObserver.observe(charSection);
}

// ---- RECAP DEMO (index landing page only) ----
const recapBtn = document.getElementById('recap-btn');
const recapResult = document.getElementById('recap-result');
const recapBtnText = document.getElementById('recap-btn-text');
if (recapBtn && recapResult && recapBtnText) {
    let recapLoading = false;
    recapBtn.addEventListener('click', () => {
        if (recapLoading) return;
        recapLoading = true;
        recapResult.classList.remove('show');
        recapBtnText.textContent = 'Generating...';
        recapBtn.style.opacity = '0.7';
        const msgs = ['Analyzing...', 'Extracting events...', 'Compressing...', 'Ready!'];
        let mIdx = 0;
        const interval = setInterval(() => { mIdx = (mIdx + 1) % msgs.length; recapBtnText.textContent = msgs[mIdx]; }, 420);
        setTimeout(() => {
            clearInterval(interval);
            recapBtnText.textContent = 'Generate Recap';
            recapBtn.style.opacity = '1';
            recapResult.classList.add('show');
            recapLoading = false;
        }, 1800);
    });
}

// ---- RECAP OPTION TOGGLES ----
document.querySelectorAll('.recap-opt').forEach(opt => {
    opt.addEventListener('click', () => opt.classList.toggle('active'));
});

// ---- NOVEL PILLS ----
document.querySelectorAll('.novel-pill:not(.soon)').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.novel-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
    });
});

// ---- ACTIVE NAV HIGHLIGHT (landing page) ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
if (sections.length > 2 && navLinks.length) {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 130) current = s.id;
        });
        navLinks.forEach(a => {
            const href = a.getAttribute('href');
            if (href && href.startsWith('#')) a.style.color = href === `#${current}` ? 'var(--text)' : '';
        });
    }, { passive: true });
}

// ---- CHAR CARD HOVER GLOW ----
document.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(196,30,58,0.07), rgba(255,255,255,0.02))`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = ''; });
});

// ---- RANK ITEM CLICK ----
document.querySelectorAll('.rank-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        document.querySelectorAll('.rank-item').forEach(i => i.classList.remove('highlight-rank'));
        item.classList.add('highlight-rank');
    });
});

// ---- COMMUNITY THREADS (index) ----
document.querySelectorAll('.thread-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => { window.location.href = 'community.html'; });
});

// ---- DEMO BAR CYCLING TEXT ----
const demoBar = document.querySelector('.demo-bar-inner');
let demoIndex = 0;
const demoTexts = [
    'AI summarizing Chapter 1200–1250...',
    'Extracting key power events...',
    'Identifying character arcs...',
    'Compressing 50 chapters → 120 words...',
    'Recap ready! Chapter 1200–1250 ✓'
];
if (demoBar) {
    setInterval(() => {
        demoBar.style.opacity = '0';
        demoBar.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
            demoIndex = (demoIndex + 1) % demoTexts.length;
            demoBar.textContent = demoTexts[demoIndex];
            demoBar.style.opacity = '1';
        }, 400);
    }, 2800);
}

// ---- PAGE FADE IN ----
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    }));
});
