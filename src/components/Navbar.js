/**
 * ============================================
 * NAVBAR COMPONENT (MODERN)
 * ============================================
 * Glassmorphism header.
 * Floating effect.
 */

import { siteContent } from '../data/content.js';

export function renderNavbar() {
    const { meta } = siteContent;

    return `
        <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
            <div class="glass-panel mx-auto max-w-7xl rounded-full px-6 py-3 flex items-center justify-between shadow-2xl bg-white/70">
                <!-- Logo -->
                <a href="#" class="flex items-center gap-3">
                    <img 
                        src="${meta.logoUrl}" 
                        alt="${meta.logoAlt}"
                        class="h-10 md:h-12 w-auto object-contain"
                    >
                </a>
                
                <!-- Right Side Actions -->
                <div class="flex items-center gap-4">
                    <!-- Date Badge (Hidden on mobile) -->
                    <div class="hidden md:flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
                        <span class="text-lg">📅</span>
                        <span class="text-primary-800 font-bold text-sm">२६ जानेवारी</span>
                    </div>

                    <a href="#registration" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-0.5">
                        नोंदणी करा
                    </a>
                </div>
            </div>
        </header>
        <!-- Spacer to prevent content overlap -->
        <div class="h-24"></div>
    `;
}
