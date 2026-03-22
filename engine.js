// engine.js - The Spoiler-Free Lore Engine state manager

window.RiftEngine = (function() {
    const MAX_CHAPTER = 2868;
    const STORAGE_KEY = 'rift_current_chapter';
    
    // Load state
    let currentChapter = parseInt(localStorage.getItem(STORAGE_KEY)) || MAX_CHAPTER;

    function getChapter() {
        return currentChapter;
    }

    function setChapter(ch) {
        let parsed = parseInt(ch);
        if (isNaN(parsed) || parsed < 1) parsed = MAX_CHAPTER; // Default to max if empty/invalid
        if (parsed > MAX_CHAPTER) parsed = MAX_CHAPTER;
        
        currentChapter = parsed;
        localStorage.setItem(STORAGE_KEY, currentChapter);
        
        // Dispatch custom event so pages can re-render seamlessly
        window.dispatchEvent(new CustomEvent('rift-chapter-changed', { detail: currentChapter }));
        
        // Visual feedback
        const input = document.getElementById('global-chapter-sync');
        if(input) {
            input.style.borderColor = "var(--primary-color, #C41E3A)";
            setTimeout(() => input.style.borderColor = "rgba(255,255,255,0.1)", 500);
        }
    }

    // Helper: Should this entity be visible based on its introduction chapter?
    function isVisible(introducedChapter) {
        if (!introducedChapter) return true; 
        return introducedChapter <= currentChapter;
    }

    // Inject global UI binding automatically
    function bindUI() {
        const input = document.getElementById('global-chapter-sync');
        if (input) {
            // Setup placeholder vs value to look clean
            if(currentChapter !== MAX_CHAPTER) {
                input.value = currentChapter;
            }
            
            input.addEventListener('change', (e) => {
                setChapter(e.target.value);
            });
            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    setChapter(e.target.value);
                    input.blur();
                }
            });
        }
    }

    // Initialize on load
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindUI);
    } else {
        bindUI();
    }

    return {
        getChapter,
        setChapter,
        isVisible,
        MAX_CHAPTER
    };
})();
