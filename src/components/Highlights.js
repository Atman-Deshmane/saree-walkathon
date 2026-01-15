/**
 * ============================================
 * HIGHLIGHTS COMPONENT
 * ============================================
 * Event highlights: Dhol Tasha, Yoga, Award Ceremony
 * Special note about Mahila Mandal medal with image.
 */

import { siteContent } from '../data/content.js';

/**
 * Renders the Highlights section
 * @returns {string} HTML string for highlights
 */
export function renderHighlights() {
    const { highlights } = siteContent;

    // Generate highlight cards
    const highlightCards = highlights.items.map((item) => `
        <div class="flex flex-col items-center text-center p-6 md:p-8">
            <div class="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300">
                <span class="text-5xl md:text-6xl">${item.icon}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">${item.title}</h3>
            <p class="text-primary-100 text-sm md:text-base">${item.description}</p>
        </div>
    `).join('');

    return `
        <section id="highlights" class="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute top-0 left-0 w-full h-full opacity-10">
                <div class="absolute top-10 left-10 md:top-20 md:left-20 text-6xl md:text-9xl">🥁</div>
                <div class="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-6xl md:text-9xl">🧘</div>
            </div>
            
            <div class="container relative z-10">
                <!-- Section Title -->
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        ${highlights.sectionTitle}
                    </h2>
                    <div class="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                </div>
                
                <!-- Highlights Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    ${highlightCards}
                </div>
                
                <!-- Special Note with Image -->
                <div class="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                        <img src="${highlights.specialNoteImage || 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=80'}" 
                             alt="Special Medal" 
                             class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg">
                        <div class="text-center md:text-left">
                            <p class="text-xl md:text-2xl font-black text-white drop-shadow-lg">${highlights.specialNote}</p>
                            <p class="text-sm text-white/80 mt-2">विशेष सन्मान आणि पुरस्कार</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
