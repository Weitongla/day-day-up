/**
 * English Visual Vocabulary App - Application Logic
 * DK-style visual vocabulary web app with TTS, search, favorites
 */

(function() {
  'use strict';

  // =============================================
  // State
  // =============================================
  const state = {
    currentPage: 'home',
    currentCategoryId: null,
    searchQuery: '',
    favorites: loadFavorites(),
    theme: loadTheme(),
    expandedWordId: null,
  };

  // DOM References (cached after DOM ready)
  let els = {};

  // =============================================
  // Audio (TTS) Module
  // =============================================
  const AudioModule = {
    _synth: window.speechSynthesis,
    _utterance: null,
    _langMap: { en: 'en-US', zh: 'zh-CN' },

    /**
     * Speak text using Web Speech API
     * @param {string} text - Text to speak
     * @param {string} lang - Language code ('en' or 'zh')
     * @param {Function} onEnd - Callback when speaking ends
     * @returns {boolean} whether speech started
     */
    speak(text, lang = 'en', onEnd = null) {
      if (!this._synth || !text) return false;

      // Cancel any ongoing speech
      this._synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = this._langMap[lang] || 'en-US';
      utterance.rate = 0.85;    // Slightly slower for learning
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Try to find a good voice
      const voices = this._synth.getVoices();
      const preferredVoice = voices.find(v =>
        v.lang.startsWith(lang) && v.localService
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
      }

      this._synth.speak(utterance);
      this._utterance = utterance;
      return true;
    },

    /** Cancel current speech */
    stop() {
      if (this._synth) {
        this._synth.cancel();
      }
    },

    /**
     * Play word pronunciation
     * @param {object} wordData - word object from vocabulary
     * @param {HTMLElement} btnEl - button element to show playing state
     */
    playWord(wordData, btnEl) {
      this._setPlayingState(btnEl, true);
      this.speak(wordData.word, 'en', () => {
        this._setPlayingState(btnEl, false);
      });
    },

    /**
     * Play example sentence
     * @param {string} sentence - English sentence
     * @param {HTMLElement} btnEl - button element to show playing state
     */
    playExample(sentence, btnEl) {
      this._setPlayingState(btnEl, true);
      this.speak(sentence, 'en', () => {
        this._setPlayingState(btnEl, false);
      });
    },

    _setPlayingState(btnEl, isPlaying) {
      if (!btnEl) return;
      if (isPlaying) {
        btnEl.classList.add('playing');
      } else {
        btnEl.classList.remove('playing');
      }
    }
  };

  // =============================================
  // Favorites Module
  // =============================================
  function loadFavorites() {
    try {
      const saved = localStorage.getItem('evocab_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  function saveFavorites(favorites) {
    try {
      localStorage.setItem('evocab_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Failed to save favorites:', e);
    }
  }

  function isFavorite(wordId) {
    return state.favorites.includes(wordId);
  }

  function toggleFavorite(wordId) {
    const idx = state.favorites.indexOf(wordId);
    if (idx === -1) {
      state.favorites.push(wordId);
    } else {
      state.favorites.splice(idx, 1);
    }
    saveFavorites(state.favorites);
    return state.favorites;
  }

  function getFavoriteCount() {
    return state.favorites.length;
  }

  // =============================================
  // Theme Module
  // =============================================
  function loadTheme() {
    try {
      return localStorage.getItem('evocab_theme') || 'light';
    } catch {
      return 'light';
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem('evocab_theme', theme);
    } catch {
      // ignore
    }
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
    updateThemeIcon();
  }

  function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  function updateThemeIcon() {
    const btn = els.themeToggle;
    if (!btn) return;
    btn.textContent = state.theme === 'light' ? '🌙' : '☀️';
    btn.setAttribute('aria-label',
      state.theme === 'light' ? '切换到暗色模式' : '切换到亮色模式'
    );
  }

  // =============================================
  // Search Module
  // =============================================
  function performSearch(query) {
    if (!query || query.trim() === '') {
      return [];
    }

    const q = query.toLowerCase().trim();
    const results = [];

    VOCAB_DATA.categories.forEach(cat => {
      cat.words.forEach(word => {
        const matchWord = word.word.toLowerCase().includes(q);
        const matchTrans = word.translation.toLowerCase().includes(q);
        const matchCat = cat.nameEn.toLowerCase().includes(q) ||
                         cat.name.toLowerCase().includes(q);

        if (matchWord || matchTrans || matchCat) {
          results.push({
            ...word,
            categoryName: cat.name,
            categoryNameEn: cat.nameEn,
            categoryEmoji: cat.emoji,
            categoryColor: cat.color,
            categoryId: cat.id,
          });
        }
      });
    });

    return results;
  }

  // =============================================
  // Render Functions
  // =============================================

  /** Render home page - category grid */
  function renderHome() {
    const container = els.pageHome;
    container.innerHTML = '';

    const title = document.createElement('h1');
    title.className = 'page-title';
    title.textContent = '📖 英语视觉词汇';
    container.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.className = 'page-subtitle';
    subtitle.textContent = '按场景分类学习，点击卡片进入';
    container.appendChild(subtitle);

    const grid = document.createElement('div');
    grid.className = 'category-grid';

    VOCAB_DATA.categories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'category-card';
      card.style.setProperty('--cat-color', cat.color);
      card.dataset.categoryId = cat.id;

      card.innerHTML = `
        <span class="cat-emoji">${cat.emoji}</span>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-name-en">${cat.nameEn}</div>
        <div class="cat-count">📚 ${cat.words.length} 个词汇</div>
      `;

      card.addEventListener('click', () => navigateToCategory(cat.id));
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  /** Render category detail page */
  function renderCategory(categoryId) {
    const cat = VOCAB_DATA.categories.find(c => c.id === categoryId);
    if (!cat) {
      navigateToHome();
      return;
    }

    const container = els.pageCategory;
    container.innerHTML = '';

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '← 返回首页';
    backBtn.addEventListener('click', navigateToHome);
    container.appendChild(backBtn);

    // Category header
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <div class="cat-icon">${cat.emoji}</div>
      <div class="cat-info">
        <h1>${cat.name}</h1>
        <p>${cat.nameEn}</p>
        <div class="word-count">📚 ${cat.words.length} 个词汇 · 点击卡片展开详情</div>
      </div>
    `;
    container.appendChild(header);

    // Word grid
    const grid = document.createElement('div');
    grid.className = 'word-grid';
    grid.style.setProperty('--cat-color', cat.color);

    cat.words.forEach(word => {
      const card = createWordCard(word, cat);
      grid.appendChild(card);
    });

    container.appendChild(grid);

    // Favorite badge update
    updateFavoriteBadge();
  }

  /** Create a single word card element */
  function createWordCard(word, category) {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.wordId = word.id;
    const isFav = isFavorite(word.id);

    card.innerHTML = `
      <div class="word-card-inner">
        <div class="word-emoji">${word.emoji}</div>
        <div class="word-content">
          <div class="word-text">${word.word}</div>
          <div class="word-phonetic">${word.phonetic}</div>
          <div class="word-translation">${word.translation}</div>
        </div>
        <button class="favorite-btn ${isFav ? 'active' : ''}" data-word-id="${word.id}" aria-label="收藏">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="word-details">
        <div class="word-examples">
          ${word.examples.map(ex => `
            <div class="example-item">
              <div class="example-en">📌 ${ex.en}</div>
              <div class="example-zh">${ex.zh}</div>
            </div>
          `).join('')}
        </div>
        <div class="word-audio-actions">
          <button class="audio-btn word-audio" data-word-id="${word.id}" data-type="word">
            <span class="audio-icon">🔊</span> 听单词
          </button>
          <button class="audio-btn example-audio" data-word-id="${word.id}" data-type="example">
            <span class="audio-icon">🔊</span> 听例句
          </button>
        </div>
      </div>
    `;

    // Event: Click on card to expand/collapse
    const cardInner = card.querySelector('.word-card-inner');
    cardInner.addEventListener('click', (e) => {
      // Don't toggle if clicking the favorite button
      if (e.target.closest('.favorite-btn')) return;
      toggleExpandWord(card, word.id);
    });

    // Event: Favorite button
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleFavoriteClick(favBtn, word.id);
    });

    // Event: Word audio
    const wordAudioBtn = card.querySelector('.word-audio');
    wordAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AudioModule.playWord(word, wordAudioBtn);
    });

    // Event: Example audio (play first example)
    const exampleAudioBtn = card.querySelector('.example-audio');
    exampleAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (word.examples && word.examples.length > 0) {
        AudioModule.playExample(word.examples[0].en, exampleAudioBtn);
      }
    });

    return card;
  }

  /** Toggle expand/collapse word details */
  function toggleExpandWord(card, wordId) {
    if (state.expandedWordId === wordId) {
      // Collapse
      card.classList.remove('expanded');
      state.expandedWordId = null;
    } else {
      // Collapse previously expanded
      if (state.expandedWordId) {
        const prevCard = document.querySelector(
          `.word-card[data-word-id="${state.expandedWordId}"]`
        );
        if (prevCard) prevCard.classList.remove('expanded');
      }

      // Expand this one
      card.classList.add('expanded');
      state.expandedWordId = wordId;
    }
  }

  /** Handle favorite button click */
  function handleFavoriteClick(btn, wordId) {
    toggleFavorite(wordId);
    const isFav = isFavorite(wordId);
    btn.classList.toggle('active', isFav);
    btn.textContent = isFav ? '❤️' : '🤍';
    updateFavoriteBadge();
  }

  /** Render search results page */
  function renderSearchResults(query) {
    const results = performSearch(query);
    const container = els.pageSearch;
    container.innerHTML = '';

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '← 返回首页';
    backBtn.addEventListener('click', navigateToHome);
    container.appendChild(backBtn);

    // Header
    const header = document.createElement('div');
    header.className = 'search-results-header';
    header.innerHTML = `
      <h2>🔍 "${query}" 的搜索结果</h2>
      <div class="result-count">找到 ${results.length} 个匹配词汇</div>
    `;
    container.appendChild(header);

    if (results.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.innerHTML = `
        <span class="empty-icon">🔍</span>
        <h3>没有找到匹配结果</h3>
        <p>试试其他关键词吧</p>
      `;
      container.appendChild(empty);
    } else {
      const grid = document.createElement('div');
      grid.className = 'word-grid';

      results.forEach(word => {
        const fakeCat = {
          id: word.categoryId,
          color: word.categoryColor || '#6c5ce7',
          emoji: word.categoryEmoji || '📚',
        };
        const card = createWordCard(word, fakeCat);
        grid.appendChild(card);
      });

      container.appendChild(grid);
    }
  }

  /** Render favorites page */
  function renderFavorites() {
    const container = els.pageFavorites;
    container.innerHTML = '';

    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '← 返回首页';
    backBtn.addEventListener('click', navigateToHome);
    container.appendChild(backBtn);

    if (state.favorites.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'favorites-empty';
      empty.innerHTML = `
        <span class="empty-icon">💝</span>
        <h3>还没有收藏的单词</h3>
        <p>点击单词卡片的 🤍 按钮收藏，方便复习</p>
      `;
      container.appendChild(empty);
    } else {
      const title = document.createElement('h1');
      title.className = 'page-title';
      title.textContent = `💝 收藏词汇 (${state.favorites.length})`;
      container.appendChild(title);

      const grid = document.createElement('div');
      grid.className = 'word-grid';

      // Collect all favorited words
      VOCAB_DATA.categories.forEach(cat => {
        cat.words.forEach(word => {
          if (isFavorite(word.id)) {
            const card = createWordCard(word, cat);
            grid.appendChild(card);
          }
        });
      });

      container.appendChild(grid);
    }
  }

  // =============================================
  // Navigation
  // =============================================
  function navigateToHome() {
    state.currentPage = 'home';
    state.currentCategoryId = null;
    state.searchQuery = '';
    showPage('home');
    els.searchInput.value = '';
    renderHome();
    updateFavoriteBadge();
  }

  function navigateToCategory(categoryId) {
    state.currentPage = 'category';
    state.currentCategoryId = categoryId;
    showPage('category');
    renderCategory(categoryId);
  }

  function navigateToSearch(query) {
    state.currentPage = 'search';
    state.searchQuery = query;
    showPage('search');
    renderSearchResults(query);
  }

  function navigateToFavorites() {
    state.currentPage = 'favorites';
    showPage('favorites');
    renderFavorites();
  }

  function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });

    const pageMap = {
      home: els.pageHome,
      category: els.pageCategory,
      search: els.pageSearch,
      favorites: els.pageFavorites,
    };

    const target = pageMap[pageName];
    if (target) {
      target.classList.add('active');
    }
  }

  // =============================================
  // Badge Update
  // =============================================
  function updateFavoriteBadge() {
    const count = getFavoriteCount();
    const badge = els.favBadge;
    if (!badge) return;

    if (count > 0) {
      badge.classList.add('show');
      badge.textContent = count > 99 ? '99+' : count;
    } else {
      badge.classList.remove('show');
    }
  }

  // =============================================
  // PWA Install Banner
  // =============================================
  let _installBanner = null;

  function showInstallBanner() {
    // Don't show if already dismissed or already installed
    if (_installBanner || localStorage.getItem('evocab_install_dismissed')) return;
    // Don't show on narrow screens (it's more obvious on mobile)
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    _installBanner = document.createElement('div');
    _installBanner.className = 'install-banner';
    _installBanner.innerHTML = `
      <span class="install-banner-icon">📖</span>
      <div class="install-banner-text">
        <strong>安装 Visual Vocab</strong>
        <span>添加到主屏幕，随时随地学英语</span>
      </div>
      <button class="install-banner-btn" aria-label="安装">安装</button>
      <button class="install-banner-close" aria-label="关闭">✕</button>
    `;

    document.body.appendChild(_installBanner);

    _installBanner.querySelector('.install-banner-btn').addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') {
          console.log('📖 PWA: User installed the app');
        }
        deferredPrompt = null;
      }
      hideInstallBanner();
    });

    _installBanner.querySelector('.install-banner-close').addEventListener('click', () => {
      localStorage.setItem('evocab_install_dismissed', 'true');
      hideInstallBanner();
    });
  }

  function hideInstallBanner() {
    if (_installBanner) {
      _installBanner.remove();
      _installBanner = null;
    }
  }

  // =============================================
  // Event Handlers
  // =============================================
  function setupEventListeners() {
    // Logo click - go home
    els.logo.addEventListener('click', navigateToHome);

    // Search input - debounced real-time search
    let searchTimeout;
    els.searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      const query = els.searchInput.value.trim();
      searchTimeout = setTimeout(() => {
        if (query.length >= 1) {
          navigateToSearch(query);
        } else if (state.currentPage === 'search') {
          navigateToHome();
        }
      }, 300);
    });

    // Search enter key
    els.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = els.searchInput.value.trim();
        if (query) {
          navigateToSearch(query);
        }
      }
    });

    // Favorites button
    els.favBtn.addEventListener('click', navigateToFavorites);

    // Theme toggle
    els.themeToggle.addEventListener('click', toggleTheme);

    // PWA Install prompt
    let deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      showInstallBanner();
    });

    // Keyboard shortcut: Escape to close expanded word
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.expandedWordId) {
        const card = document.querySelector(
          `.word-card[data-word-id="${state.expandedWordId}"]`
        );
        if (card) card.classList.remove('expanded');
        state.expandedWordId = null;
      }
    });
  }

  // =============================================
  // Initialization
  // =============================================
  function init() {
    console.log('📖 English Visual Vocabulary App initializing...');

    // Cache DOM elements
    els = {
      logo: document.querySelector('.app-logo'),
      searchInput: document.querySelector('.search-input'),
      themeToggle: document.querySelector('.theme-toggle'),
      favBtn: document.querySelector('.fav-btn'),
      favBadge: document.querySelector('.fav-btn .badge'),

      pageHome: document.getElementById('page-home'),
      pageCategory: document.getElementById('page-category'),
      pageSearch: document.getElementById('page-search'),
      pageFavorites: document.getElementById('page-favorites'),
    };

    // Verify all essential elements exist
    const missing = Object.entries(els).filter(([k, v]) => !v).map(([k]) => k);
    if (missing.length > 0) {
      console.warn('Missing DOM elements:', missing.join(', '));
    }

    // Set initial theme
    setTheme(state.theme);

    // Setup all event listeners
    setupEventListeners();

    // Load voices (some browsers need this)
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // Render home
    navigateToHome();

    console.log('✅ App ready!');
  }

  // =============================================
  // Wait for DOM ready
  // =============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
