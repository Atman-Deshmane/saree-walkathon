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
    const center = registration.centers[0]; // Only one center

    return `
        <section id="centers" class="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
            <div class="container">
                <div class="text-center mb-8 md:mb-12 pt-4 md:pt-8">
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-2 md:mb-4 py-2">${registration.sectionTitle}</h2>
                    <p class="text-lg md:text-xl text-primary-600 font-light">${registration.sectionSubtitle}</p>
                </div>
                <div class="flex justify-center">
                    <div class="glass-card p-8 md:p-10 rounded-2xl md:rounded-[2rem] max-w-md text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 registration-center-card" data-center='${JSON.stringify(center)}'>
                        <div class="mb-6">
                            <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">📍 ${center.area}</span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-black text-primary-900 mb-4">${center.placeName}</h3>
                        <p class="text-primary-600 font-medium flex items-center justify-center gap-2 text-lg mb-4">
                            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-xl">👤</span>
                            ${center.contactPerson}
                        </p>
                        <a href="tel:+91${center.phone}" class="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/30">
                            <span>📞</span>
                            <span>${center.phone}</span>
                        </a>
                        <p class="mt-6 text-primary-400 text-sm">अधिक माहितीसाठी क्लिक करा ☝️</p>
                    </div>
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
            modalContainer.innerHTML = `
                <div class="modal-overlay backdrop-blur-md" id="registration-modal" style="padding: 20px; overflow-y: auto;">
                    <div class="modal-content glass-panel p-0 overflow-hidden shadow-2xl scale-95 opacity-0 animate-[popup_0.3s_ease-out_forwards] max-w-4xl w-full mx-auto my-auto">
                        <button class="modal-close bg-white text-primary-600 hover:bg-primary-50 top-4 right-4 shadow-lg z-10" id="close-reg-modal">&times;</button>
                        <div class="bg-white p-2">
                            <img src="src/img/सात्विक ट्रेडर्स.png" alt="सात्विक ट्रेडर्स" class="w-full h-auto max-h-[90vh] object-contain">
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
