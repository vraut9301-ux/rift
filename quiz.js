// ═══════════════════════════════════════════════════
//  RIFT — Shadow Slave Character Personality Quiz
// ═══════════════════════════════════════════════════

const QUIZ_QUESTIONS = [
    {
        q: "You're trapped in a nightmare with no weapons. What's your first move?",
        options: [
            { text: "Observe everything silently — find an advantage before anyone notices you", chars: { sunny: 3, kai: 2, cassie: 1 } },
            { text: "Take charge immediately — rally anyone nearby and push forward", chars: { nephis: 3, effie: 1, jet: 1 } },
            { text: "Try to sense the danger before it arrives — trust your instincts", chars: { cassie: 3, sunny: 1 } },
            { text: "Fight your way out with raw aggression — hesitation means death", chars: { effie: 3, morgans: 1 } }
        ]
    },
    {
        q: "A powerful enemy offers you a deal: betray one ally to save everyone else. What do you do?",
        options: [
            { text: "Pretend to accept, then find a way to outsmart them and save everyone", chars: { sunny: 3, kai: 1 } },
            { text: "Refuse absolutely — some lines are never crossed, even at great cost", chars: { nephis: 3, jet: 1 } },
            { text: "Agonize over it — you'd try to find a third option through foresight", chars: { cassie: 3, sunny: 1 } },
            { text: "Accept. Survival isn't clean. You'll carry the guilt but everyone else lives", chars: { morgans: 3, kai: 1 } }
        ]
    },
    {
        q: "What kind of power would you want most?",
        options: [
            { text: "Shadows and stealth — controlling what others can't see", chars: { sunny: 3, kai: 1 } },
            { text: "Flame and pure destruction — overwhelming, undeniable force", chars: { nephis: 3, effie: 1 } },
            { text: "Prophecy and vision — seeing the future before it happens", chars: { cassie: 3 } },
            { text: "Raw physical might — being the strongest person in any room", chars: { effie: 3, jet: 1 } },
        ]
    },
    {
        q: "Your closest friend is making a terrible mistake. How do you handle it?",
        options: [
            { text: "Say nothing, but quietly position yourself to catch them when they fall", chars: { sunny: 3, cassie: 1 } },
            { text: "Confront them directly — brutal honesty is the only kind that matters", chars: { nephis: 3, effie: 1 } },
            { text: "Warn them in metaphors and hints, hoping they'll understand", chars: { cassie: 3 } },
            { text: "Shrug it off — people learn from their own mistakes, not your advice", chars: { effie: 3, kai: 1 } }
        ]
    },
    {
        q: "How do you feel about authority and rules?",
        options: [
            { text: "Rules exist to be exploited by people who understand them", chars: { sunny: 3, morgans: 1 } },
            { text: "I respect duty but challenge unjust systems without hesitation", chars: { nephis: 3, jet: 2 } },
            { text: "Hierarchy is natural — I work within structure to influence from above", chars: { jet: 3, kai: 1 } },
            { text: "Rules? I barely notice them. I follow my gut, not a rulebook", chars: { effie: 3 } }
        ]
    },
    {
        q: "You discover a secret that could change everything — but revealing it would put you at risk. What do you do?",
        options: [
            { text: "Keep it hidden until the perfect moment to use it as leverage", chars: { sunny: 3, kai: 2 } },
            { text: "Share it openly — the truth is more important than my safety", chars: { nephis: 3, cassie: 1 } },
            { text: "Reveal it only to the one person who needs to hear it most", chars: { cassie: 3, jet: 1 } },
            { text: "Use it to build power quietly — knowledge is the ultimate weapon", chars: { morgans: 3, sunny: 1 } }
        ]
    },
    {
        q: "What drives you at your core?",
        options: [
            { text: "Survival and freedom — I refuse to be controlled or forgotten", chars: { sunny: 3 } },
            { text: "A burning desire to change the world, no matter the personal cost", chars: { nephis: 3 } },
            { text: "Understanding — I want to see the truth hiding beneath everything", chars: { cassie: 3, kai: 1 } },
            { text: "The thrill of the fight — I feel most alive when tested to my limits", chars: { effie: 3, jet: 1 } }
        ]
    },
    {
        q: "How would your enemies describe you?",
        options: [
            { text: "Impossible to predict — just when they think they have me, I'm already gone", chars: { sunny: 3, kai: 1 } },
            { text: "Terrifyingly powerful — like fighting a natural disaster", chars: { nephis: 3, effie: 1, jet: 1 } },
            { text: "Unsettling — they never know if I've already seen what they'll do next", chars: { cassie: 3 } },
            { text: "A monster — but one that fights without apology or excuse", chars: { morgans: 3, effie: 1 } }
        ]
    },
    {
        q: "You're given command of a team going into a dangerous mission. Your style?",
        options: [
            { text: "Lead from the shadows — let others take the spotlight while I control the outcome", chars: { sunny: 3, kai: 2 } },
            { text: "Lead from the front — my people follow because I face every danger first", chars: { nephis: 3, jet: 1 } },
            { text: "Guide with insight — warn of dangers before they arrive and plan around them", chars: { cassie: 3 } },
            { text: "Lead by example — hit the hardest, run the fastest, never ask anyone to do what I won't", chars: { effie: 3, jet: 1 } }
        ]
    },
    {
        q: "At the end of everything, what matters most to you?",
        options: [
            { text: "That I was free — truly free, without anyone's chains on my soul", chars: { sunny: 3 } },
            { text: "That I left a mark — that the world is different because I existed", chars: { nephis: 3, jet: 1 } },
            { text: "That I understood — that I saw the truth, even if no one else did", chars: { cassie: 3, kai: 1 } },
            { text: "That I protected the ones I love — nothing else matters", chars: { effie: 3, jet: 2 } }
        ]
    }
];

const QUIZ_RESULTS = {
    sunny: {
        name: "Sunny",
        epithet: "The Dreamless · Lord of Shadows",
        rank: "Transcendent",
        symbol: "☾",
        color: "#C41E3A",
        traits: ["Strategic", "Independent", "Cunning", "Survivor", "Hidden Depths"],
        desc: "You are Sunny — the Dreamless. Beneath a casual exterior lies one of the most dangerous minds in existence. You play the long game, letting others underestimate you while quietly assembling an empire of shadows. You protect fiercely but love in silence, carrying burdens no one knows about. Freedom isn't a preference — it's your reason for breathing.",
        shareText: "I got Sunny — The Dreamless! ☾ Lord of Shadows, Master of cunning. Take the Shadow Slave quiz!"
    },
    nephis: {
        name: "Nephis",
        epithet: "Star of Undying Flame · Changing Star",
        rank: "Transcendent",
        symbol: "✦",
        color: "#F59E0B",
        traits: ["Leader", "Fierce", "Unyielding", "Passionate", "Noble"],
        desc: "You are Nephis — the Changing Star. You burn with a fire that cannot be extinguished. People follow you not because you demand it, but because your conviction is magnetic. You challenge unjust systems without hesitation, face impossible odds head-on, and carry a burden of sacrifice that would break lesser souls. Your flame changes everything it touches.",
        shareText: "I got Nephis — Star of Undying Flame! ✦ My soul burns with conviction. Take the Shadow Slave quiz!"
    },
    cassie: {
        name: "Cassie",
        epithet: "The Blind Seer · Prophet of Doom",
        rank: "Transcendent",
        symbol: "◈",
        color: "#8B5CF6",
        traits: ["Intuitive", "Perceptive", "Mysterious", "Wise", "Empathetic"],
        desc: "You are Cassie — the Blind Seer. Where others see only the present, you perceive threads of fate winding into the future. Your insight is devastating and your warnings are ignored at great peril. You carry the weight of knowing what others cannot — that some futures are beautiful, and some are inevitable. Your quiet strength is the compass others follow without realizing it.",
        shareText: "I got Cassie — The Blind Seer! ◈ I see the threads of fate. Take the Shadow Slave quiz!"
    },
    effie: {
        name: "Effie",
        epithet: "Raised by Wolves · Iron-Armed Hunter",
        rank: "Transcendent",
        symbol: "⚔",
        color: "#2DD4BF",
        traits: ["Fearless", "Loyal", "Physical", "Straightforward", "Unstoppable"],
        desc: "You are Effie — the Iron-Armed Hunter. You don't overcomplicate things. When something needs to be done, you do it — with more force than anyone thought possible. Your loyalty to those you love is absolute, your courage is inhuman, and your sense of humor keeps the darkness at bay. You are the rock that others lean on, even when the world is breaking.",
        shareText: "I got Effie — Raised by Wolves! ⚔ Fearless, unstoppable, built different. Take the Shadow Slave quiz!"
    },
    kai: {
        name: "Kai",
        epithet: "The Sly Arrow · Whispering Shadow",
        rank: "Transcendent",
        symbol: "⬡",
        color: "#60A5FA",
        traits: ["Calculated", "Patient", "Precise", "Reserved", "Strategic"],
        desc: "You are Kai — the Sly Arrow. While others rush in, you wait. Your patience is a weapon. Every action is precise, every word calculated. You understand systems — political, tactical, social — and navigate them with quiet mastery. People underestimate you because you prefer the background. They only realize their mistake when your arrow has already struck.",
        shareText: "I got Kai — The Sly Arrow! ⬡ Patience is my weapon. Take the Shadow Slave quiz!"
    },
    morgans: {
        name: "Morgan",
        epithet: "Princess of Valor",
        rank: "Transcendent",
        symbol: "⛧",
        color: "#DC2626",
        traits: ["Ruthless", "Ambitious", "Pragmatic", "Powerful", "Unapologetic"],
        desc: "You are Morgan — the Princess of Valor. You see the world as it truly is: a contest of power, and you refuse to lose. Your ambition knows no bounds, your methods are extreme, and you make no apologies. Some call you a villain — you call yourself a survivor. In a world of polite lies, you are the brutal truth that everyone fears but secretly respects.",
        shareText: "I got Morgan — Princess of Valor! ⛧ Ruthless, unapologetic, powerful. Take the Shadow Slave quiz!"
    },
    jet: {
        name: "Jet",
        epithet: "The Soul Reaper · Colonel",
        rank: "Transcendent",
        symbol: "⚔",
        color: "#6366F1",
        traits: ["Disciplined", "Duty-bound", "Terrifying", "Protective", "Resilient"],
        desc: "You are Jet — the Soul Reaper. Duty is your compass and discipline is your armor. You are terrifyingly effective in combat, but what truly defines you is your commitment to protecting those under your command. You carry impossible burdens with stoic grace. Others may fear you, but those who know you understand: beneath the reaper's mist lies an unbreakable will to serve.",
        shareText: "I got Jet — The Soul Reaper! ⚔ Duty, discipline, devastation. Take the Shadow Slave quiz!"
    }
};

// ═══════════════════════════════════════════════════
//  QUIZ ENGINE
// ═══════════════════════════════════════════════════

let currentQuestion = 0;
let answers = {};
const totalQuestions = QUIZ_QUESTIONS.length;

// Check for result in URL hash
function checkHashResult() {
    const hash = window.location.hash.replace('#', '');
    if (hash && QUIZ_RESULTS[hash]) {
        showResult(hash);
        document.getElementById('quiz-hero').style.display = 'none';
        return true;
    }
    return false;
}

function startQuiz() {
    document.getElementById('quiz-hero').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    currentQuestion = 0;
    answers = {};
    renderQuestion();
}

function renderQuestion() {
    const q = QUIZ_QUESTIONS[currentQuestion];
    const container = document.getElementById('quiz-question-container');
    const letters = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
        <div class="quiz-question-card">
            <div class="quiz-q-number">Question ${currentQuestion + 1} of ${totalQuestions}</div>
            <div class="quiz-q-text">${q.q}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="quiz-option ${answers[currentQuestion] === i ? 'selected' : ''}" data-index="${i}">
                        <div class="quiz-option-letter">${letters[i]}</div>
                        <span>${opt.text}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add click handlers
    container.querySelectorAll('.quiz-option').forEach(el => {
        el.addEventListener('click', () => selectOption(parseInt(el.dataset.index)));
    });

    // Update progress
    const pct = Math.round((currentQuestion / totalQuestions) * 100);
    document.getElementById('quiz-progress-fill').style.width = pct + '%';
    document.getElementById('quiz-progress-label').textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
    document.getElementById('quiz-progress-pct').textContent = pct + '%';

    // Update nav buttons
    document.getElementById('quiz-prev').disabled = currentQuestion === 0;
    updateNextButton();
}

function selectOption(index) {
    answers[currentQuestion] = index;
    document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    document.querySelector(`.quiz-option[data-index="${index}"]`).classList.add('selected');
    updateNextButton();

    // Auto-advance after a short delay
    setTimeout(() => {
        if (currentQuestion < totalQuestions - 1) {
            nextQuestion();
        }
    }, 400);
}

function updateNextButton() {
    const nextBtn = document.getElementById('quiz-next');
    nextBtn.disabled = answers[currentQuestion] === undefined;
    nextBtn.textContent = currentQuestion === totalQuestions - 1 ? 'See Result ⟁' : 'Next →';
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        calculateResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function calculateResult() {
    const scores = {};
    Object.keys(QUIZ_RESULTS).forEach(char => scores[char] = 0);

    Object.entries(answers).forEach(([qIndex, optIndex]) => {
        const option = QUIZ_QUESTIONS[parseInt(qIndex)].options[optIndex];
        if (option.chars) {
            Object.entries(option.chars).forEach(([char, pts]) => {
                scores[char] = (scores[char] || 0) + pts;
            });
        }
    });

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    window.location.hash = winner;
    showResult(winner);
}

function showResult(charId) {
    const result = QUIZ_RESULTS[charId];
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('quiz-hero').style.display = 'none';

    const resultEl = document.getElementById('quiz-result');
    resultEl.style.setProperty('--result-color', result.color);

    const shareUrl = encodeURIComponent(`https://rift-shadowslave.github.io/quiz.html#${charId}`);
    const shareText = encodeURIComponent(result.shareText);

    resultEl.innerHTML = `
        <div class="result-card" style="--result-color: ${result.color}">
            <div class="result-label">Your Shadow Slave Character Is...</div>
            <div class="result-symbol">${result.symbol}</div>
            <div class="result-name">${result.name}</div>
            <div class="result-epithet">${result.epithet}</div>
            <div class="result-rank-badge" style="color:${result.color};border-color:${result.color}40;background:${result.color}15">${result.rank}</div>
            <p class="result-desc">${result.desc}</p>
            <div class="result-traits">
                ${result.traits.map(t => `<span class="result-trait">${t}</span>`).join('')}
            </div>

            <div class="result-share">
                <div class="result-share-title">Share Your Result</div>
                <div class="result-share-btns">
                    <a href="https://www.reddit.com/submit?url=${shareUrl}&title=${shareText}" target="_blank" rel="noopener" class="share-btn reddit">🔴 Share on Reddit</a>
                    <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener" class="share-btn twitter">🐦 Share on X</a>
                    <button class="share-btn copy-link" onclick="copyQuizLink()">🔗 Copy Link</button>
                </div>
            </div>

            <div class="result-cta">
                <a href="characters.html?char=${charId}" class="cta-primary">View ${result.name}'s Full Profile →</a>
                <a href="compare.html" class="cta-ghost">⚔ Compare Characters</a>
            </div>

            <button class="quiz-retake" onclick="retakeQuiz()">↺ Retake Quiz</button>
        </div>
    `;
    resultEl.classList.add('show');

    // Update OG title dynamically (for bots that read after JS)
    document.title = `I got ${result.name} — ${result.epithet} | Shadow Slave Quiz | RIFT`;
}

function copyQuizLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector('.share-btn.copy-link');
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = '🔗 Copy Link', 2000);
    });
}

function retakeQuiz() {
    window.location.hash = '';
    currentQuestion = 0;
    answers = {};
    document.getElementById('quiz-result').classList.remove('show');
    document.getElementById('quiz-result').innerHTML = '';
    document.getElementById('quiz-hero').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    if (!checkHashResult()) {
        // Normal quiz flow
    }

    document.getElementById('quiz-start-btn')?.addEventListener('click', startQuiz);
    document.getElementById('quiz-next')?.addEventListener('click', nextQuestion);
    document.getElementById('quiz-prev')?.addEventListener('click', prevQuestion);
});
