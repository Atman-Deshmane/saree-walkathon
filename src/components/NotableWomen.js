/**
 * ============================================
 * NOTABLE WOMEN COMPONENT (MODERN)
 * ============================================
 * Elegant cards with hover lift.
 * Clickable cards open certificate modal.
 */

import { siteContent } from '../data/content.js';

export function renderNotableWomen() {
    const { notableWomen } = siteContent;

    // Generate women cards with data attributes for modal
    const womenCards = notableWomen.women.map((woman) => `
        <div class="group relative cursor-pointer notable-woman-card" data-certificate="${woman.certificateImage || woman.photo}" data-name="${woman.name}">
            <div class="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2">
                <!-- Photo Container -->
                <div class="relative h-48 md:h-72 overflow-hidden">
                    <img 
                        src="${woman.photo}" 
                        alt="${woman.name}"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    
                    <!-- Floating Badge -->
                    <div class="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 backdrop-blur-md border border-white/50 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider">
                        🏆 सन्मान
                    </div>
                </div>
                
                <!-- Content -->
                <div class="p-4 md:p-6 relative">
                    <div class="absolute -top-6 md:-top-8 right-3 md:right-6 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-300">
                        🏆
                    </div>
                    
                    <h3 class="text-sm md:text-lg font-bold text-primary-900 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors leading-tight pr-12">
                        ${woman.name}
                    </h3>
                    <p class="text-primary-500 text-[10px] md:text-sm font-medium mb-2">
                        ${woman.designation}
                    </p>
                    <div class="h-px w-full bg-primary-100 mb-2"></div>
                    <p class="text-primary-700 font-medium text-xs md:text-sm leading-snug">
                        ${woman.achievement}
                    </p>
                    <p class="text-primary-400 text-[10px] mt-2">प्रमाणपत्र पाहण्यासाठी क्लिक करा</p>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <section id="notable-women" class="py-16 md:py-24 bg-primary-50 relative overflow-hidden">
             <!-- Abstract Shapes -->
             <div class="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

            <div class="container relative z-10">
                <div class="text-center mb-10 md:mb-16 pt-4 md:pt-8">
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-3 md:mb-4 py-2">
                        ${notableWomen.sectionTitle}
                    </h2>
                    <p class="text-lg md:text-xl text-primary-600 font-light">
                        ${notableWomen.sectionSubtitle}
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    ${womenCards}
                </div>
            </div>
        </section>
    `;
}

export function initNotableWomenModal() {
    const modalContainer = document.getElementById('modal-container');
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.notable-woman-card');
        if (card) {
            const certificateImage = card.dataset.certificate;
            const name = card.dataset.name;
            modalContainer.innerHTML = `
                <div class="modal-overlay backdrop-blur-md" id="woman-modal" style="padding: 20px; overflow-y: auto;">
                    <div class="modal-content glass-panel p-0 overflow-hidden shadow-2xl scale-95 opacity-0 animate-[popup_0.3s_ease-out_forwards] max-w-4xl w-full mx-auto my-auto">
                        <button class="modal-close bg-white text-primary-600 hover:bg-primary-50 top-4 right-4 shadow-lg z-10" id="close-woman-modal">&times;</button>
                        <div class="bg-gradient-to-br from-primary-600 to-primary-800 p-4 text-white text-center">
                            <h3 class="text-lg md:text-xl font-bold">${name}</h3>
                            <p class="text-sm text-primary-100">प्रमाणपत्र</p>
                        </div>
                        <div class="bg-white p-2">
                            <img src="${certificateImage}" alt="${name} - प्रमाणपत्र" class="w-full h-auto max-h-[80vh] object-contain">
                        </div>
                    </div>
                </div>
                <style>@keyframes popup {to {transform: scale(1); opacity: 1; } }</style>
            `;
            document.getElementById('woman-modal').addEventListener('click', (ev) => {
                if (ev.target.id === 'woman-modal' || ev.target.id === 'close-woman-modal') {
                    modalContainer.innerHTML = '';
                }
            });
        }
    });
}
