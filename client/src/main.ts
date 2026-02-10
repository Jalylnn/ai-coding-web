/**
 * AI Coding 知识框架 — 应用入口
 */

import './style.css';
import { getMindmapList, getMindmapById } from './data.js';
import { renderMindmap } from './mindmap-engine.js';

const app = document.getElementById('app')!;

// ============ Card accent colors ============
const cardAccents = [
  'linear-gradient(90deg, #6366f1, #8b5cf6)',
  'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  'linear-gradient(90deg, #10b981, #34d399)',
  'linear-gradient(90deg, #ef4444, #f87171)',
  'linear-gradient(90deg, #f59e0b, #fbbf24)',
  'linear-gradient(90deg, #06b6d4, #22d3ee)',
];

// ============ Router ============
type View = 'home' | 'mindmap';
let currentView: View = 'home';
let currentMindmapId: string | null = null;

function navigateTo(view: View, mindmapId?: string) {
  currentView = view;
  currentMindmapId = mindmapId || null;

  if (view === 'home') {
    window.history.pushState({}, '', '/');
    renderHome();
  } else if (view === 'mindmap' && mindmapId) {
    window.history.pushState({}, '', `/#${mindmapId}`);
    renderMindmapView(mindmapId);
  }
}

// ============ Render Home ============
function renderHome() {
  const list = getMindmapList();

  app.innerHTML = `
    <div class="bg-glow"></div>
    <div class="bg-grid"></div>
    ${renderNavbar(false)}
    <section class="hero">
      <div class="hero-badge">✨ 面向独立开发者</div>
      <h1 class="hero-title">AI Coding 知识框架</h1>
      <p class="hero-subtitle">
        从零到一的完整开发指南，通过交互式思维导图掌握 AI 编程全流程
      </p>
    </section>
    <section class="cards-section">
      <div class="cards-grid" id="cards-grid">
        ${list
      .map(
        (item, i) => `
          <div class="mindmap-card" data-id="${item.id}" style="--card-accent: ${cardAccents[i] || cardAccents[0]}">
            <span class="card-icon">${item.icon}</span>
            <h2 class="card-title">${item.title}</h2>
            <p class="card-subtitle">${item.subtitle}</p>
            <div class="card-arrow">→</div>
          </div>
        `
      )
      .join('')}
      </div>
    </section>
    <footer class="footer">
      <p>AI Coding 知识框架 · 让每个人都能用 AI 编程 · 2026</p>
    </footer>
  `;

  // Bind click events
  const grid = document.getElementById('cards-grid')!;
  grid.querySelectorAll<HTMLDivElement>('.mindmap-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.id!;
      navigateTo('mindmap', id);
    });
  });
}

// ============ Render Mindmap View ============
function renderMindmapView(id: string) {
  const data = getMindmapById(id);

  if (!data) {
    app.innerHTML = `
      <div class="bg-glow"></div>
      <div class="bg-grid"></div>
      ${renderNavbar(true)}
      <div class="mindmap-view">
        <p style="color: var(--text-muted); text-align: center; padding: 80px 0;">未找到该思维导图</p>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="bg-glow"></div>
    <div class="bg-grid"></div>
    ${renderNavbar(true)}
    <div class="mindmap-view">
      <div class="mindmap-header">
        <span class="mindmap-header-icon">${data.icon}</span>
        <h1 class="mindmap-header-title">${data.title}</h1>
        <p class="mindmap-header-subtitle">${data.subtitle}</p>
      </div>
      <div class="mindmap-container" id="mindmap-canvas"></div>
    </div>
  `;

  const canvas = document.getElementById('mindmap-canvas')!;
  renderMindmap(canvas, data.root);
}

// ============ Navbar ============
function renderNavbar(showBack: boolean): string {
  return `
    <nav class="navbar">
      <div class="navbar-brand" id="nav-home">
        <span class="navbar-logo">🧠</span>
        <span class="navbar-title">AI Coding 知识框架</span>
      </div>
      <button class="navbar-back ${showBack ? '' : 'hidden'}" id="nav-back">
        ← 返回首页
      </button>
    </nav>
  `;
}

function bindNavEvents() {
  app.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('#nav-home') || target.closest('#nav-back')) {
      navigateTo('home');
    }
  });
}

// ============ Init ============
function init() {
  bindNavEvents();

  // Handle hash-based routing
  const hash = window.location.hash.slice(1);
  if (hash) {
    navigateTo('mindmap', hash);
  } else {
    navigateTo('home');
  }

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const h = window.location.hash.slice(1);
    if (h) {
      renderMindmapView(h);
    } else {
      renderHome();
    }
  });
}

init();
