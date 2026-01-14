/**
 * ============================================
 * MAIN.JS - THE ORCHESTRATOR
 * ============================================
 * 
 * This file imports all components and renders them
 * in the correct order into the #app container.
 * 
 * Also initializes all interactive functionality.
 */

// ===========================================
// COMPONENT IMPORTS
// ===========================================
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderIncentives } from './components/Incentives.js';
import { renderHighlights } from './components/Highlights.js';
import { renderCelebrity, initCelebrityVideo } from './components/Celebrity.js';

import { renderRegistration } from './components/Registration.js';
import { renderTabs, initTabInteractions } from './components/TabsSection.js';
import { renderNotableWomen } from './components/NotableWomen.js';
import { renderFooter } from './components/Footer.js';

// ===========================================
// MAIN RENDER FUNCTION
// ===========================================
function renderApp() {
    const app = document.getElementById('app');

    if (!app) {
        console.error('❌ Could not find #app container');
        return;
    }

    // Build the page by assembling all components in order
    const pageHTML = `
        ${renderNavbar()}
        ${renderHero()}

        ${renderIncentives()}
        ${renderHighlights()}
        ${renderCelebrity()}
        ${renderRegistration()}
        ${renderTabs()}
        ${renderNotableWomen()}
        ${renderFooter()}
    `;

    // Inject into DOM
    app.innerHTML = pageHTML;

    console.log('✅ Page rendered successfully');
}

// ===========================================
// INITIALIZE INTERACTIONS
// ===========================================
function initInteractions() {
    // Initialize tab switching and modals
    initTabInteractions();

    // Initialize celebrity video click handler
    initCelebrityVideo();

    // Stop bounce animation on CTA after first interaction
    const heroCTA = document.getElementById('hero-cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', () => {
            heroCTA.classList.remove('animate-bounce');
        }, { once: true });
    }

    console.log('✅ Interactions initialized');
}

// ===========================================
// APP INITIALIZATION
// ===========================================
function init() {
    console.log('🚀 Initializing Saree Walkathon 2026 Website...');

    // Render the page
    renderApp();

    // Initialize interactions after render
    initInteractions();

    console.log('🎉 Website ready!');
}

// ===========================================
// DOM READY - START APP
// ===========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
