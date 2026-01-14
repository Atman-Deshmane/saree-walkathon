/**
 * ============================================
 * REGISTRATION COMPONENT (MODERN)
 * ============================================
 * Sleek horizontal carousel using native scrollbar hiding.
 * Minimalist cards.
 */

import { siteContent } from '../data/content.js';

export function renderRegistration() {
    const { registration } = siteContent;

    const centerCards = registration.centers.map(center => `
        <div class="min-w-[280px] md:min-w-[340px] glass-card p-6 md:p-8 rounded-2xl md:rounded-[2rem] flex flex-col justify-between h-full snaps-start">
            <div>
                <div class="flex items-center gap-2 mb-4 md:mb-6">
                    <span class="bg-primary-100 text-primary-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        📍 ${center.area}
                    </span>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-primary-900 mb-2 leading-tight">
                    ${center.placeName}
                </h3>
                <p class="text-primary-500 font-medium flex items-center gap-2 text-sm md:text-base">
                    <span class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-50 flex items-center justify-center text-sm">👤</span>
                    ${center.contactPerson}
                </p>
            </div>
            
            <a href="tel:+91${center.phone}" class="mt-6 md:mt-8 flex items-center justify-between bg-primary-50 hover:bg-primary-600 hover:text-white group p-3 md:p-4 rounded-xl transition-all duration-300">
                <span class="font-bold text-base md:text-lg group-hover:text-white text-primary-700 transition-colors">${center.phone}</span>
                <span class="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-600 group-hover:text-primary-600">📞</span>
            </a>
        </div>
    `).join('');

    return `
        <section id="registration" class="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
            <div class="container">
                <div class="flex flex-col items-center md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <div class="text-center md:text-left">
                        <h2 class="text-3xl md:text-5xl font-black text-primary-900 mb-2 md:mb-4">
                            ${registration.sectionTitle}
                        </h2>
                        <p class="text-lg md:text-xl text-primary-600 font-light">
                            ${registration.sectionSubtitle}
                        </p>
                    </div>
                    
                    <!-- Scroll Controls -->
                    <div class="flex gap-2">
                        <button class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white hover:border-transparent transition-all" onclick="document.querySelector('.scroll-carousel').scrollBy({left: -300, behavior: 'smooth'})">←</button>
                        <button class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white hover:border-transparent transition-all" onclick="document.querySelector('.scroll-carousel').scrollBy({left: 300, behavior: 'smooth'})">→</button>
                    </div>
                </div>
                
                <div class="scroll-carousel py-4 -mx-4 px-4">
                    ${centerCards}
                </div>
            </div>
        </section>
    `;
}
