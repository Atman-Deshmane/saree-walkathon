/**
 * ============================================
 * EVENT PARTNERS COMPONENT
 * ============================================
 * Official Event Partners: Media, Photography, Decoration
 * Replaces the old Highlights section with attractive partner cards
 */

import { siteContent } from '../data/content.js';

/**
 * Renders the Event Partners section
 * @returns {string} HTML string for event partners
 */
export function renderHighlights() {
    const { eventPartners } = siteContent;

    // Generate partner cards with attractive styling
    const partnerCards = eventPartners.partners.map((partner) => `
        <div class="group relative">
            <div class="glass-card p-6 md:p-8 rounded-2xl text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-between">
                <!-- Category Badge -->
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span class="bg-gradient-to-r ${partner.color} text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">
                        ${partner.category}
                    </span>
                </div>
                
                <!-- Logo Container -->
                <div class="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-lg mt-6 mb-4 p-4 group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <img 
                        src="${partner.logo}" 
                        alt="${partner.name}" 
                        class="w-full h-full object-contain"
                        loading="lazy"
                    >
                </div>
                
                <!-- Partner Name -->
                <h3 class="text-lg md:text-xl font-bold text-primary-800 mt-2">${partner.name}</h3>
                
                <!-- Decorative Line -->
                <div class="w-16 h-1 bg-gradient-to-r ${partner.color} rounded-full mt-3 group-hover:w-24 transition-all duration-300"></div>
            </div>
        </div>
    `).join('');

    return `
        <section id="event-partners" class="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
            <!-- Decorative Background Elements -->
            <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div class="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-primary-200 rounded-full blur-3xl opacity-40"></div>
                <div class="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 bg-primary-300 rounded-full blur-3xl opacity-30"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
            </div>
            
            <div class="container relative z-10">
                <!-- Section Header -->
                <div class="text-center mb-12 md:mb-16">
                    <div class="inline-block">
                        <span class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm md:text-base font-bold shadow-lg mb-4 inline-block">
                            🤝 Our Partners
                        </span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-3 md:mb-4 py-2">
                        ${eventPartners.sectionTitle}
                    </h2>
                    <p class="text-lg md:text-xl text-primary-600 font-medium">
                        ${eventPartners.sectionSubtitle}
                    </p>
                    <div class="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-4"></div>
                </div>
                
                <!-- Partners Grid -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
                    ${partnerCards}
                </div>
                
                <!-- Thank You Note removed -->
            </div>
        </section>
    `;
}
