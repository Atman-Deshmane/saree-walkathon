/**
 * ============================================
 * NOTABLE WOMEN COMPONENT (MODERN)
 * ============================================
 * Elegant cards with hover lift.
 * Minimalist design.
 */

import { siteContent } from '../data/content.js';

export function renderNotableWomen() {
    const { notableWomen } = siteContent;

    // Generate women cards
    const womenCards = notableWomen.women.map((woman, index) => `
        <div class="group relative">
            <div class="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2">
                <!-- Photo Container -->
                <div class="relative h-48 md:h-80 overflow-hidden">
                    <img 
                        src="${woman.photo}" 
                        alt="${woman.name}"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    
                    <!-- Floating Badge -->
                    <div class="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 backdrop-blur-md border border-white/50 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider">
                        ★ सन्मान
                    </div>
                </div>
                
                <!-- Content -->
                <div class="p-4 md:p-6 relative">
                    <div class="absolute -top-6 md:-top-10 right-3 md:right-6 w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-300">
                        👩‍💼
                    </div>
                    
                    <h3 class="text-sm md:text-xl font-bold text-primary-900 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors pr-10 md:pr-0">
                        ${woman.name}
                    </h3>
                    <p class="text-primary-500 text-[10px] md:text-sm font-medium uppercase tracking-wide mb-2 md:mb-3">
                        ${woman.designation}
                    </p>
                    <div class="h-px w-full bg-primary-100 mb-2 md:mb-3"></div>
                    <p class="text-primary-700 font-medium italic text-xs md:text-base">
                        "${woman.achievement}"
                    </p>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <section id="notable-women" class="py-16 md:py-24 bg-primary-50 relative overflow-hidden">
             <!-- Abstract Shapes -->
             <div class="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

            <div class="container relative z-10">
                <div class="text-center mb-10 md:mb-16">
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-3 md:mb-4">
                        ${notableWomen.sectionTitle}
                    </h2>
                    <p class="text-lg md:text-xl text-primary-600 font-light">
                        ${notableWomen.sectionSubtitle}
                    </p>
                </div>
                
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    ${womenCards}
                </div>
            </div>
        </section>
    `;
}
