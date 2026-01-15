/**
 * ============================================
 * INCENTIVES COMPONENT (MODERN)
 * ============================================
 * Staggered Grid Layout.
 * Glass Cards with glow effects.
 * Supports both icons (emoji) and images.
 */

import { siteContent } from '../data/content.js';

export function renderIncentives() {
    const { incentives } = siteContent;

    const incentiveCards = incentives.items.map((item, index) => {
        // Handle image vs icon
        const iconOrImage = item.image
            ? `<img src="${item.image}" alt="${item.title}" class="w-12 h-12 md:w-16 md:h-16 object-contain">`
            : `<span class="text-xl md:text-2xl">${item.icon}</span>`;

        return `
            <div class="glass-card p-3 md:p-4 rounded-xl text-center group hover:bg-white transition-all duration-500 flex-1 min-w-[100px]">
                <div class="w-12 h-12 md:w-16 md:h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary-100 overflow-hidden">
                    ${iconOrImage}
                </div>
                <h3 class="text-xs md:text-sm font-bold text-primary-900 mb-1 group-hover:text-primary-600 transition-colors">${item.title}</h3>
                <p class="text-primary-600/80 text-[10px] md:text-xs font-medium leading-relaxed hidden md:block">${item.description}</p>
            </div>
        `;
    }).join('');

    return `
        <section id="incentives" class="py-12 md:py-20 relative bg-white">
            <!-- Blobs -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div class="blob bg-primary-200 w-48 md:w-96 h-48 md:h-96 top-0 -left-10 md:-left-20 mix-blend-multiply opacity-40"></div>
                <div class="blob bg-pink-200 w-48 md:w-96 h-48 md:h-96 bottom-0 right-0 mix-blend-multiply opacity-40"></div>
            </div>
            
            <div class="container relative z-10">
                <div class="text-center mb-8 md:mb-12 pt-4 md:pt-8">
                    <h2 class="text-2xl md:text-4xl font-black gradient-text-modern mb-4 leading-tight py-2">
                        ${incentives.sectionTitle}
                    </h2>
                    <div class="w-24 md:w-32 h-1 bg-gradient-to-r from-primary-300 to-primary-500 mx-auto rounded-full"></div>
                </div>
                
                <div class="flex flex-wrap justify-center gap-3 md:gap-4 pb-4">
                    ${incentiveCards}
                </div>
            </div>
        </section>
    `;
}
