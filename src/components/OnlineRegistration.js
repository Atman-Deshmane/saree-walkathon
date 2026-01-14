/**
 * ============================================
 * ONLINE REGISTRATION COMPONENT
 * ============================================
 * Glassmorphism form for direct registration.
 */

import { siteContent } from '../data/content.js';

export function renderOnlineRegistration() {
    const { onlineRegistration } = siteContent;
    const { form } = onlineRegistration;

    const tshirtSizes = ['S', 'M', 'L', 'XL', 'XXL'].map(size => `
        <label class="cursor-pointer">
            <input type="radio" name="size" value="${size}" class="peer sr-only" required>
            <div class="w-14 h-14 md:w-12 md:h-12 rounded-xl border-2 border-primary-100 bg-white/50 flex items-center justify-center font-bold text-primary-400 peer-checked:bg-primary-500 peer-checked:text-white peer-checked:border-primary-500 peer-checked:shadow-lg peer-checked:-translate-y-1 transition-all hover:bg-white text-sm">
                ${size}
            </div>
        </label>
    `).join('');

    return `
        <section id="online-registration" class="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
             <!-- Background Decoration -->
             <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div class="absolute top-1/2 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div class="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
             </div>

            <div class="container relative z-10">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8 md:mb-12">
                        <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-3">
                            ${onlineRegistration.sectionTitle}
                        </h2>
                        <p class="text-lg md:text-xl text-primary-600 font-light">
                            ${onlineRegistration.sectionSubtitle}
                        </p>
                    </div>

                    <div class="glass-card p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl border border-white/50 relative">
                        <!-- Floating Badge - Hidden on mobile, shown on larger screens -->
                        <div class="hidden md:flex absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full text-white items-center justify-center font-bold text-center p-2 shadow-lg transform rotate-12 text-xs leading-tight">
                            विनामूल्य<br>प्रवेश
                        </div>
                        
                        <!-- Mobile Badge - Inline, shown only on mobile -->
                        <div class="md:hidden mb-6 flex justify-center">
                            <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                ✨ विनामूल्य प्रवेश
                            </span>
                        </div>

                        <form id="registration-form" class="space-y-5">
                            <!-- Name -->
                            <div class="space-y-2">
                                <label class="block text-primary-900 font-bold text-sm md:text-base">${form.nameLabel}</label>
                                <input type="text" required placeholder="${form.namePlaceholder}" 
                                    class="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/50 border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-primary-900 placeholder-primary-300 text-base">
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <!-- Age -->
                                <div class="space-y-2">
                                    <label class="block text-primary-900 font-bold text-sm md:text-base">${form.ageLabel}</label>
                                    <input type="number" required min="5" max="100" placeholder="${form.agePlaceholder}"
                                        class="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/50 border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-primary-900 placeholder-primary-300 text-base">
                                </div>
                                
                                <!-- Phone -->
                                <div class="space-y-2">
                                    <label class="block text-primary-900 font-bold text-sm md:text-base">${form.phoneLabel}</label>
                                    <input type="tel" required pattern="[0-9]{10}" placeholder="${form.phonePlaceholder}"
                                        class="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/50 border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-primary-900 placeholder-primary-300 text-base">
                                </div>
                            </div>

                            <!-- T-Shirt Size -->
                            <div class="space-y-2">
                                <label class="block text-primary-900 font-bold text-sm md:text-base">${form.tshirtLabel}</label>
                                <div class="flex flex-wrap gap-3">
                                    ${tshirtSizes}
                                </div>
                            </div>

                            <div class="pt-4">
                                <button type="submit" class="w-full btn-modern text-lg md:text-xl group py-4">
                                    ${form.submitBtn}
                                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initOnlineRegistration() {
    const form = document.getElementById('registration-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate Success
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.disabled = true;
        btn.innerHTML = 'कृपया प्रतीक्षा करा... ⏳';

        setTimeout(() => {
            const { onlineRegistration } = siteContent;

            // Show alert
            alert(onlineRegistration.form.successMessage);

            // Reset
            form.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    });
}
