/**
 * ============================================
 * MAIN.JS - THE ORCHESTRATOR
 * ============================================
 * 
 * This file imports all components and renders them
 * in the correct order into the #app container.
 * 
 * Also initializes all interactive functionality.
 * @version 3.0
 */

// ===========================================
// COMPONENT IMPORTS (with cache-bust)
// ===========================================
import { renderNavbar } from './components/Navbar.js?v=3.0';
import { renderHero } from './components/Hero.js?v=3.0';
import { renderIncentives } from './components/Incentives.js?v=3.0';
import { renderHighlights } from './components/Highlights.js?v=3.0';
import { renderCelebrity, initCelebrityVideo } from './components/Celebrity.js?v=3.0';
import { renderRegistration, initRegistrationModal } from './components/Registration.js?v=3.0';
import { renderTabs, initTabInteractions } from './components/TabsSection.js?v=3.0';
import { renderNotableWomen, initNotableWomenModal } from './components/NotableWomen.js?v=3.0';
import { renderFooter } from './components/Footer.js?v=3.0';

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
        ${renderCelebrity()}
        ${renderTabs()}
        ${renderHighlights()}
        ${renderRegistration()}
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

    // Initialize notable women certificate modal
    initNotableWomenModal();

    // Initialize registration center modal
    initRegistrationModal();

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
