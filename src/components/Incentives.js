/**
 * ============================================
 * INCENTIVES COMPONENT (MODERN)
 * ============================================
 * Staggered Grid Layout.
 * Glass Cards with glow effects.
 */

import { siteContent } from '../data/content.js';

export function renderIncentives() {
    const { incentives } = siteContent;

    const incentiveCards = incentives.items.map((item, index) => `
        <div 
            class="glass-card p-5 md:p-8 rounded-2xl md:rounded-[2rem] text-center group hover:bg-white transition-all duration-500"
            style="transform: translateY(${index % 2 === 0 ? '0' : '1rem'})"
        >
            <div class="w-14 h-14 md:w-20 md:h-20 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-2xl md:text-4xl mb-4 md:mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary-100">
                ${item.icon}
            </div>
            <h3 class="text-base md:text-xl font-bold text-primary-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors">${item.title}</h3>
            <p class="text-primary-600/80 text-xs md:text-sm font-medium leading-relaxed">${item.description}</p>
        </div>
    `).join('');

    return `
        <section id="incentives" class="py-16 md:py-32 relative bg-white">
            <!-- Blobs -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div class="blob bg-primary-200 w-48 md:w-96 h-48 md:h-96 top-0 -left-10 md:-left-20 mix-blend-multiply opacity-40"></div>
                <div class="blob bg-pink-200 w-48 md:w-96 h-48 md:h-96 bottom-0 right-0 mix-blend-multiply opacity-40"></div>
            </div>
            
            <div class="container relative z-10">
                <div class="text-center mb-10 md:mb-20">
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-4 md:mb-6">
                        ${incentives.sectionTitle}
                    </h2>
                    <div class="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-primary-300 to-primary-500 mx-auto rounded-full"></div>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-12">
                    ${incentiveCards}
                </div>
            </div>
        </section>
    `;
}
