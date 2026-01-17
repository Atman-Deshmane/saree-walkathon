/**
 * ============================================
 * TABS SECTION COMPONENT (MODERN)
 * ============================================
 * Floating Pills style UI.
 * Glass cards for content.
 * Modern gradients and interactions.
 */

import { siteContent } from '../data/content.js';

// ... (Helper generators remain structurally similar but with glass classes) ...

function generateSponsorsContent() {
    const { sponsors } = siteContent.tabs;

    // Partner type mapping based on sponsor names
    const partnerTypes = {
        "The Real Estate Mall": { type: "🏆 Title Partner", color: "from-amber-500 to-yellow-400" },
        "अभय फार्मसी": { type: "💊 Event Partner", color: "from-green-500 to-emerald-400" },
        "महालक्ष्मी लॅज व फंक्शन हॉल आणि महालक्ष्मी हायवे सर्व्हिसेस": { type: "🏨 Event Partner", color: "from-blue-500 to-cyan-400" },
        "ENERZAL": { type: "⚡ Energy Partner", color: "from-orange-500 to-red-400" },
        "RAJGURU IVF & Fertility Center": { type: "🏥 Event Partner", color: "from-pink-500 to-rose-400" },
        "Brooke Hygiene": { type: "🌸 Event Partner", color: "from-purple-500 to-violet-400" },
        "समता ब्युटी शॉपी": { type: "💄 Event Partner", color: "from-fuchsia-500 to-pink-400" }
    };

    // Grid layout for sponsors - 4 in a row on desktop with equal heights
    const sponsorCards = sponsors.items.map(sponsor => {
        // Encode description for safe HTML attribute storage
        const encodedDescription = sponsor.description ? encodeURIComponent(sponsor.description) : '';

        // Get partner type info
        const partnerInfo = partnerTypes[sponsor.name] || { type: "✨ Partner", color: "from-primary-500 to-primary-400" };

        const knowMoreBtn = (sponsor.posterUrl || sponsor.description) ? `
            <button 
                class="sponsor-details-btn w-full px-4 py-2.5 rounded-xl bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 text-xs md:text-sm font-bold shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                data-poster="${sponsor.posterUrl || ''}"
                data-name="${sponsor.name}"
                data-description="${encodedDescription}"
            >
                📖 Know More
            </button>
        ` : '<div class="h-10"></div>'; // Placeholder to maintain equal heights

        return `
            <div class="group relative pt-4">
                <div class="glass-card rounded-2xl p-2 md:p-3 flex flex-col h-full border border-white/50 hover:border-primary-200 transition-all duration-300 hover:shadow-xl relative">
                    <!-- Partner Type Badge -->
                    <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                        <span class="px-3 py-1 bg-gradient-to-r ${partnerInfo.color} text-white text-[10px] md:text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                            ${partnerInfo.type}
                        </span>
                    </div>
                    
                    <!-- YouTube Shorts Aspect Ratio Container (9:16) -->
                    <div class="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50 mt-3" style="padding-bottom: 177.78%;">
                        <iframe 
                            class="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/${sponsor.videoId}?rel=0"
                            title="${sponsor.name}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            loading="lazy"
                            style="border: none;"
                        ></iframe>
                    </div>
                    
                    <!-- Card Footer with Enhanced Title -->
                    <div class="p-2 md:p-3 flex flex-col items-center gap-2 flex-grow">
                        <!-- Sponsor Name with Decorative Background -->
                        <div class="w-full text-center py-2 px-2 bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-lg border border-primary-100">
                            <h4 class="font-black text-primary-800 text-xs md:text-sm leading-tight">${sponsor.name}</h4>
                        </div>
                        
                        <!-- Know More Button -->
                        <div class="w-full mt-auto">
                            ${knowMoreBtn}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto pt-6 md:pt-8">
            ${sponsorCards}
        </div>
    `;
}



function generateCauseContent() {
    const { cause } = siteContent.tabs;

    const statsCards = cause.stats.map(stat => `
        <div class="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl text-center">
            <div class="text-2xl md:text-5xl font-black gradient-text-modern mb-1 md:mb-2">${stat.number}</div>
            <div class="text-primary-800 font-bold uppercase tracking-wide text-[10px] md:text-sm">${stat.label}</div>
        </div>
    `).join('');

    return `
        <div class="max-w-4xl mx-auto">
            <div class="glass-panel p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] relative overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute -right-20 -top-20 w-48 md:w-64 h-48 md:h-64 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
                
                <div class="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div class="flex-1 text-center md:text-left">
                        <h3 class="text-2xl md:text-3xl font-black text-primary-900 mb-4 md:mb-6">
                            ${cause.title}
                        </h3>
                        <div class="space-y-3 md:space-y-4 text-primary-800 leading-relaxed text-base md:text-lg">
                            ${cause.description.split('\n').map(line => `<p>${line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-primary-600">$1</span>')}</p>`).join('')}
                        </div>
                    </div>
                    
                    <div class="flex-1 w-full grid grid-cols-2 gap-3 md:gap-4">
                        ${statsCards}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateHistoryContent() {
    const { history } = siteContent.tabs;

    const imageCards = history.images.map((img, i) => `
        <div class="relative group rounded-2xl overflow-hidden h-64 glass-card p-0 border-none shadow-lg">
            <img 
                src="${img.url}" 
                alt="${img.caption}"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    ${img.caption}
                </p>
            </div>
        </div>
    `).join('');

    return `
        <div class="max-w-6xl mx-auto text-center pt-8 md:pt-12">
            <h3 class="text-3xl font-bold text-primary-900 mb-2">${history.title}</h3>
            <p class="text-primary-600 mb-8">${history.description}</p>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                ${imageCards}
            </div>
        </div>
    `;
}

export function renderTabs() {
    const { sponsors, cause, history } = siteContent.tabs;

    return `
        <section id="tabs-section" class="py-16 md:py-24 bg-white/50 pt-20 md:pt-28">
            <div class="container">
                <!-- Floating Pills Container -->
                <div class="flex justify-center mb-8 md:mb-12">
                    <div class="modern-tab-container p-1 md:p-1.5 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-full overflow-x-auto max-w-full">
                        <button class="modern-tab-btn active px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap" data-tab="sponsors" id="tab-sponsors">
                            ${sponsors.tabTitle}
                        </button>
                        <button class="modern-tab-btn px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap" data-tab="cause" id="tab-cause">
                            ${cause.tabTitle}
                        </button>
                        <button class="modern-tab-btn px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap" data-tab="history" id="tab-history">
                            ${history.tabTitle}
                        </button>
                    </div>
                </div>
                
                <!-- Content Area with slide-up animation -->
                <div class="tab-content bg-transparent p-0 min-h-[400px]">
                    <div class="tab-panel active animate-fade-in" id="panel-sponsors" data-panel="sponsors">
                        ${generateSponsorsContent()}
                    </div>
                    <div class="tab-panel animate-fade-in" id="panel-cause" data-panel="cause">
                        ${generateCauseContent()}
                    </div>
                    <div class="tab-panel animate-fade-in" id="panel-history" data-panel="history">
                        ${generateHistoryContent()}
                    </div>
                </div>
            </div>
        </section>
        
        <style>
            .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        </style>
    `;
}

// Ensure exports match what main.js expects


export function initTabInteractions() {
    const tabButtons = document.querySelectorAll('.modern-tab-btn'); // Updated selector
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Panels
            tabPanels.forEach(panel => {
                panel.style.display = 'none'; // Instant hide
                if (panel.dataset.panel === targetTab) {
                    panel.style.display = 'block'; // Show
                    // Re-trigger animation
                    panel.classList.remove('animate-fade-in');
                    void panel.offsetWidth; // trigger reflow
                    panel.classList.add('animate-fade-in');
                }
            });
        });
    });

    // Modal Logic (Re-implemented for modern classes)
    const modalContainer = document.getElementById('modal-container');
    document.addEventListener('click', (e) => {
        if (e.target.closest('.sponsor-details-btn')) {
            const btn = e.target.closest('.sponsor-details-btn');
            const posterUrl = btn.dataset.poster;
            const sponsorName = btn.dataset.name;
            const description = btn.dataset.description ? decodeURIComponent(btn.dataset.description) : '';

            // Format description with line breaks
            const formattedDescription = description.split('\n').map(line =>
                line.trim() ? `<p class="mb-2">${line}</p>` : '<br>'
            ).join('');

            // Build modal content
            const imageSection = posterUrl ? `
                <div class="w-full max-h-[40vh] overflow-hidden bg-gradient-to-br from-primary-50 to-white">
                    <img src="${posterUrl}" alt="${sponsorName}" class="w-full h-full object-contain">
                </div>
            ` : '';

            const descriptionSection = description ? `
                <div class="p-6 md:p-8 overflow-y-auto max-h-[50vh] bg-white">
                    <h3 class="text-xl md:text-2xl font-bold text-primary-700 mb-4 text-center">${sponsorName}</h3>
                    <div class="text-primary-800 text-sm md:text-base leading-relaxed whitespace-pre-line">
                        ${formattedDescription}
                    </div>
                </div>
            ` : '';

            modalContainer.innerHTML = `
                <div class="modal-overlay backdrop-blur-md" id="sponsor-modal" style="padding: 20px; overflow-y: auto;">
                    <div class="modal-content glass-panel p-0 overflow-hidden shadow-2xl scale-95 opacity-0 animate-[popup_0.3s_ease-out_forwards] max-w-2xl w-full mx-auto my-auto rounded-2xl">
                        <button class="modal-close bg-white text-primary-600 hover:bg-primary-50 top-4 right-4 shadow-lg z-20" id="close-modal">&times;</button>
                        ${imageSection}
                        ${descriptionSection}
                    </div>
                </div>
                <style>
                    @keyframes popup { to { transform: scale(1); opacity: 1; } }
                </style>
            `;

            document.getElementById('sponsor-modal').addEventListener('click', (ev) => {
                if (ev.target.id === 'sponsor-modal' || ev.target.id === 'close-modal') {
                    modalContainer.innerHTML = '';
                }
            });
        }
    });
}
