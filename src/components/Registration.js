/**
 * ============================================
 * REGISTRATION COMPONENT (MODERN)
 * ============================================
 * Single centered card for registration center.
 * Clickable for modal with banner image.
 */

import { siteContent } from '../data/content.js';

export function renderRegistration() {
    const { registration } = siteContent;

    const centerCards = registration.centers.map((center, index) => `
        <div class="glass-card p-6 md:p-8 rounded-2xl md:rounded-[2rem] text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 registration-center-card" data-center='${JSON.stringify(center)}' data-index="${index}">
            <div class="mb-4">
                <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">📍 ${center.area}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-black text-primary-900 mb-3">${center.placeName}</h3>
            <p class="text-primary-600 font-medium flex items-center justify-center gap-2 text-base mb-3">
                <span class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-lg">👤</span>
                ${center.contactPerson}
            </p>
            <a href="tel:+91${center.phone}" class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-primary-500/30" onclick="event.stopPropagation();">
                <span>📞</span>
                <span>${center.phone}</span>
            </a>
            <p class="mt-4 text-blue-600 text-sm font-semibold cursor-pointer hover:text-blue-800 underline">अधिक माहितीसाठी क्लिक करा ☝️</p>
        </div>
    `).join('');

    return `
        <section id="centers" class="py-8 md:py-12 bg-gradient-to-b from-white to-primary-50">
            <div class="container">
                <div class="text-center mb-8 md:mb-12">
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-2 md:mb-4 py-2">${registration.sectionTitle}</h2>
                    <p class="text-lg md:text-xl text-primary-600 font-light">${registration.sectionSubtitle}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    ${centerCards}
                </div>
            </div>
        </section>
    `;
}

export function initRegistrationModal() {
    const modalContainer = document.getElementById('modal-container');
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.registration-center-card');
        if (card) {
            const centerData = JSON.parse(card.dataset.center);
            const bannerImage = centerData.bannerImage;
            const placeName = centerData.placeName;

            modalContainer.innerHTML = `
                <div class="modal-overlay backdrop-blur-md" id="registration-modal" style="padding: 20px; overflow-y: auto;">
                    <div class="modal-content glass-panel p-0 overflow-hidden shadow-2xl scale-95 opacity-0 animate-[popup_0.3s_ease-out_forwards] max-w-4xl w-full mx-auto my-auto">
                        <button class="modal-close bg-white text-primary-600 hover:bg-primary-50 top-4 right-4 shadow-lg z-10" id="close-reg-modal">&times;</button>
                        <div class="bg-white p-2">
                            <img src="${bannerImage}" alt="${placeName}" class="w-full h-auto max-h-[90vh] object-contain">
                        </div>
                    </div>
                </div>
                <style>@keyframes popup {to {transform: scale(1); opacity: 1; } }</style>
            `;
            document.getElementById('registration-modal').addEventListener('click', (ev) => {
                if (ev.target.id === 'registration-modal' || ev.target.id === 'close-reg-modal') {
                    modalContainer.innerHTML = '';
                }
            });
        }
    });
}
