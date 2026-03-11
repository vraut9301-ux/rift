/* community.js — Community Hub Logic */

let posts = JSON.parse(localStorage.getItem('rift-posts') || 'null') || [...RIFT_DATA.discussions];
let currentSort = 'hot';
let currentTagFilter = 'all';
let selectedPostType = 'Theory';

// ---- RENDER THREADS ----
function renderThreads() {
    const list = document.getElementById('thread-list');
    let filtered = [...posts];

    // Tag filter
    if (currentTagFilter !== 'all') {
        filtered = filtered.filter(p => p.tags && p.tags.includes(currentTagFilter));
    }

    // Sort
    if (currentSort === 'hot') filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    else if (currentSort === 'new') filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
    else if (currentSort === 'top') filtered.sort((a, b) => ((b.likes || 0) + (b.comments || 0)) - ((a.likes || 0) + (a.comments || 0)));

    list.innerHTML = '';
    if (filtered.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text-muted);font-size:0.85rem">No discussions found for this filter.</div>';
        return;
    }

    filtered.forEach((post, i) => {
        const card = document.createElement('div');
        card.className = `thread-full-card scroll-reveal ${post.isNew ? 'new-post' : ''}`;
        card.style.animationDelay = `${i * 50}ms`;

        const badgeClass = post.badge === 'hot' ? 'badge-hot' : post.badge === 'new' ? 'badge-new' : 'badge-trending';
        const badgeLabel = post.badge === 'hot' ? '🔥 Hot' : post.badge === 'new' ? '✨ New' : '📈 Trending';

        card.innerHTML = `
      <div class="tfc-header">
        <span class="tfc-chapter">${post.chapter || 'Discussion'}</span>
        <span class="thread-hot-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <div class="tfc-title">${post.title}</div>
      <div class="tfc-preview">${post.content || ''}</div>
      <div class="tfc-tags">${(post.tags || []).map(t => `<span class="tfc-tag">${t}</span>`).join('')}</div>
      <div class="tfc-footer">
        <span class="tfc-user">${post.user || '@rift_user'}</span>
        <div class="tfc-meta">
          <span>💬 ${formatNum(post.comments || 0)}</span>
          <span id="likes-${post.id}">❤ ${formatNum(post.likes || 0)}</span>
          <button onclick="likePost(${post.id}, event)" style="background:none;border:none;color:var(--text-dim);cursor:pointer;font-size:0.72rem;padding:0;transition:color 0.2s" title="Like">♥</button>
        </div>
      </div>
    `;
        list.appendChild(card);
        // Make visible immediately — app.js observer ran before these cards existed
        setTimeout(() => card.classList.add('visible'), 50 + i * 50);
    });
}

function formatNum(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return n;
}

// ---- LIKE ----
window.likePost = function (id, e) {
    e.stopPropagation();
    const post = posts.find(p => p.id === id);
    if (!post) return;
    post.likes = (post.likes || 0) + 1;
    saveAndRender();
    const el = document.getElementById(`likes-${id}`);
    if (el) {
        el.style.color = 'var(--primary-light)';
        setTimeout(() => el.style.color = '', 1000);
    }
};

// ---- POST FORM ----
const postInput = document.getElementById('post-input');
const postFormFooter = document.getElementById('post-form-footer');

postInput.addEventListener('focus', () => { postFormFooter.style.display = 'flex'; });
postInput.addEventListener('blur', () => {
    setTimeout(() => { if (!postInput.value) postFormFooter.style.display = 'none'; }, 200);
});

document.querySelectorAll('.post-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.post-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedPostType = btn.dataset.type;
    });
});

document.getElementById('post-submit').addEventListener('click', () => {
    const text = postInput.value.trim();
    if (!text) return;
    const chapter = document.getElementById('post-chapter').value.trim();
    const newPost = {
        id: Date.now(),
        chapter: chapter ? `Ch. ${chapter}` : 'Discussion',
        badge: 'new',
        title: text,
        content: '',
        user: '@you',
        likes: 0,
        comments: 0,
        tags: [selectedPostType],
        isNew: true
    };
    posts.unshift(newPost);
    saveAndRender();
    postInput.value = '';
    document.getElementById('post-chapter').value = '';
    postFormFooter.style.display = 'none';
});

function saveAndRender() {
    localStorage.setItem('rift-posts', JSON.stringify(posts));
    renderThreads();
}

// ---- SORT ----
document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSort = btn.dataset.sort;
        renderThreads();
    });
});

// ---- TAG FILTER ----
document.getElementById('tag-filter').addEventListener('change', (e) => {
    currentTagFilter = e.target.value;
    renderThreads();
});

// ---- TAG CLOUD ----
const allTags = ['Theory', 'Lore', 'Prediction', 'Hype', 'Character', 'Foreshadowing', 'Math', 'Deep Dive', 'Confirmed'];
const tagCloud = document.getElementById('tag-cloud');
allTags.forEach(tag => {
    const t = document.createElement('div');
    t.className = 'tag-cloud-tag';
    t.textContent = tag;
    t.setAttribute('data-tag', tag); // Add data-tag attribute for easier selection
    t.addEventListener('click', () => {
        currentTagFilter = tag;
        // Sync the dropdown select
        const selectEl = document.getElementById('tag-filter');
        const optionExists = Array.from(selectEl.options).some(o => o.value === tag);
        selectEl.value = optionExists ? tag : 'all';
        // Highlight active tag in cloud
        document.querySelectorAll('.tag-cloud-tag').forEach(el => el.classList.remove('active'));
        t.classList.add('active');
        renderThreads();
    });
    tagCloud.appendChild(t);
});

// ---- INIT ----
renderThreads();
