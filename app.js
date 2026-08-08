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

// ---- HAMBURGER MENU (toggle handled by inline onclick in HTML) ----
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
    document.querySelectorAll('.mobile-menu a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
    document.addEventListener('click', (e) => {
        const hamburger = document.getElementById('hamburger');
        if (hamburger && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
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

// ---- INJECT FLOATING DONATE BUTTON ----
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('floating-donate')) {
        const donateBtn = document.createElement('a');
        donateBtn.href = 'https://ko-fi.com/rift1';
        donateBtn.target = '_blank';
        donateBtn.rel = 'noopener noreferrer';
        donateBtn.className = 'floating-donate';
        donateBtn.id = 'floating-donate';
        donateBtn.title = 'Support RIFT - Buy us a coffee!';
        donateBtn.innerHTML = '<span class="floating-donate-icon">?</span><span class="floating-donate-text">Support RIFT</span>';
        document.body.appendChild(donateBtn);
    }
});

// ---- UPDATE PROGRESS WIDGET ----
document.addEventListener('DOMContentLoaded', () => {
    function updateProgressWidget() {
        const widget = document.getElementById('hero-progress-widget');
        if (!widget) return;
        
        let currentChap = localStorage.getItem('rift_current_chapter');
        currentChap = currentChap ? parseInt(currentChap) : 0;
        const maxChap = 2868;
        
        const percent = Math.min(100, Math.max(0, Math.round((currentChap / maxChap) * 100)));
        document.getElementById('pw-percent').textContent = percent + '%';
        document.getElementById('pw-fill').style.width = percent + '%';
        document.getElementById('pw-chapter').textContent = 'Ch. ' + currentChap + ' / ' + maxChap;
        
        let msg = 'The Nightmare has just begun...';
        if (currentChap > 100) msg = 'You have survived the First Nightmare!';
        if (currentChap > 350) msg = 'The Dream Realm awaits...';
        if (currentChap > 750) msg = 'Mastering your aspects...';
        if (currentChap > 1500) msg = 'Approaching Saint rank...';
        if (currentChap >= maxChap - 10) msg = 'The Rift is fully open. You are caught up!';
        
        document.getElementById('pw-status-msg').textContent = msg;
    }
    
    // Initial update
    updateProgressWidget();
    
    // Listen for changes from engine.js
    document.addEventListener('rift-chapter-changed', updateProgressWidget);
});

// ---- ACTIVE NAV LINK HIGHLIGHTER ----
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ---- ACHIEVEMENT SYSTEM ----
document.addEventListener('DOMContentLoaded', () => {
    // Inject Achievements UI Modal
    const modalHTML = \
    <div id="achievements-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:9999; backdrop-filter:blur(5px); justify-content:center; align-items:center;">
        <div style="background:var(--card-bg); border:1px solid var(--card-border); border-radius:var(--radius); width:90%; max-width:600px; max-height:80vh; overflow-y:auto; padding:2rem; position:relative;">
            <button id="close-achievements" style="position:absolute; top:1rem; right:1rem; background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
            <h2 style="font-family:'Cinzel', serif; color:var(--primary-light); text-align:center; margin-bottom:1.5rem;">Memories & Trophies</h2>
            <div id="achievements-list" style="display:flex; flex-direction:column; gap:1rem;"></div>
        </div>
    </div>
    \;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Inject Button in Footer
    const footerLinks = document.querySelector('.footer-links');
    if (footerLinks) {
        const achBtn = document.createElement('a');
        achBtn.href = '#';
        achBtn.textContent = 'Achievements ??';
        achBtn.onclick = (e) => { e.preventDefault(); openAchievements(); };
        footerLinks.appendChild(achBtn);
    }

    const achievements = [
        { id: 'first_blood', name: 'Awakened', desc: 'Visited RIFT for the first time.', icon: '???' },
        { id: 'lore_master', name: 'Lore Master', desc: 'Viewed 5 different lore entries.', icon: '??' },
        { id: 'quiz_novice', name: 'Trial Survivor', desc: 'Played the Daily Challenge.', icon: '??' },
        { id: 'inventory_hoarder', name: 'Memory Hoarder', desc: 'Added an item to your inventory.', icon: '??' }
    ];

    function loadProgress() {
        let unlocked = JSON.parse(localStorage.getItem('rift_achievements') || '[]');
        return unlocked;
    }

    function saveProgress(unlocked) {
        localStorage.setItem('rift_achievements', JSON.stringify(unlocked));
    }

    function unlockAchievement(id) {
        let unlocked = loadProgress();
        if (!unlocked.includes(id)) {
            unlocked.push(id);
            saveProgress(unlocked);
            const ach = achievements.find(a => a.id === id);
            showToast('Achievement Unlocked: ' + ach.name + ' ' + ach.icon);
        }
    }

    function showToast(msg) {
        const toast = document.createElement('div');
        toast.textContent = msg;
        toast.style.cssText = 'position:fixed; bottom:80px; left:50%; transform:translateX(-50%); background:linear-gradient(135deg, #C41E3A, #8B1225); color:white; padding:0.8rem 1.5rem; border-radius:100px; z-index:10000; font-weight:bold; box-shadow:0 5px 15px rgba(0,0,0,0.5); animation:fadeUp 0.3s ease;';
        document.body.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 3000);
    }

    function openAchievements() {
        const modal = document.getElementById('achievements-modal');
        const list = document.getElementById('achievements-list');
        const unlocked = loadProgress();
        
        list.innerHTML = '';
        achievements.forEach(ach => {
            const isUnlocked = unlocked.includes(ach.id);
            const bg = isUnlocked ? 'rgba(196, 30, 58, 0.15)' : 'rgba(255,255,255,0.02)';
            const border = isUnlocked ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.05)';
            const opacity = isUnlocked ? '1' : '0.4';
            
            list.innerHTML += \
                <div style="background:\; border:\; opacity:\; padding:1rem; border-radius:8px; display:flex; align-items:center; gap:1rem;">
                    <div style="font-size:2rem;">\</div>
                    <div>
                        <div style="font-weight:bold; color:\;">\</div>
                        <div style="font-size:0.8rem; color:var(--text-muted);">\</div>
                    </div>
                </div>
            \;
        });
        
        modal.style.display = 'flex';
    }

    document.getElementById('close-achievements').onclick = () => {
        document.getElementById('achievements-modal').style.display = 'none';
    };

    // Trigger Initial Achievement
    unlockAchievement('first_blood');

    // Listeners for other achievements
    document.addEventListener('rift-daily-played', () => unlockAchievement('quiz_novice'));
    document.addEventListener('rift-item-added', () => unlockAchievement('inventory_hoarder'));
    document.addEventListener('rift-lore-viewed', () => {
        let count = parseInt(localStorage.getItem('rift_lore_count') || '0') + 1;
        localStorage.setItem('rift_lore_count', count);
        if (count >= 5) unlockAchievement('lore_master');
    });
});
