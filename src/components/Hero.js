/**
 * ============================================
 * HERO COMPONENT (MODERN)
 * ============================================
 * Impactful full-screen layout.
 * Magazine-style typography.
 * Floating, glowing CTA button.
 */

import { siteContent } from '../data/content.js';

export function renderHero() {
    const { hero } = siteContent;

    return `
        <section 
            id="hero"
            class="relative h-[95vh] flex items-center justify-center overflow-hidden"
        >
            <!-- Background Image with Modern Overlay -->
            <div class="absolute inset-0">
                <img 
                    src="${hero.backgroundImage}" 
                    alt="Hero Background"
                    class="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                    style="animation: zoomEffect 20s infinite alternate;"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-primary-900/30"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent"></div>
            </div>
            
            <!-- Animated Background Blobs -->
            <div class="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <!-- Content -->
            <div class="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                
                <!-- Text Content (Left aligned on Desktop) -->
                <div class="text-center md:text-left flex-1 space-y-8 fade-up">
                    <div class="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm font-medium tracking-wider uppercase mb-4">
                        ✨ सर्वात मोठा सोहळा
                    </div>
                    
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl">
                        ${hero.title.split(' ').map((word, i) =>
        i === 1 ? `<span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white block">${word}</span>` : word
    ).join(' ')}
                    </h1>
                    
                    <p class="text-xl md:text-3xl text-primary-100 font-light max-w-2xl leading-relaxed">
                        ${hero.subtitle}
                    </p>
                    
                    <a 
                        href="#registration"
                        class="btn-modern text-lg md:text-xl group mt-8 inline-flex"
                        id="hero-cta"
                    >
                        <span>${hero.ctaText}</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                <!-- Floating Info Card (Right side) -->
                <div class="flex-none w-full md:w-96 glass-panel p-8 rounded-[2rem] transform hover:-translate-y-2 transition-transform duration-500 fade-up" style="animation-delay: 0.2s">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4 border-b border-white/40 pb-4">
                            <span class="text-4xl">📅</span>
                            <div class="text-left">
                                <p class="text-xs text-primary-800 uppercase font-bold tracking-widest">तारीख</p>
                                <p class="text-2xl font-bold text-primary-900">${hero.date}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 border-b border-white/40 pb-4">
                            <span class="text-4xl">⏰</span>
                            <div class="text-left">
                                <p class="text-xs text-primary-800 uppercase font-bold tracking-widest">वेळ</p>
                                <p class="text-2xl font-bold text-primary-900">${hero.time}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <span class="text-4xl">📍</span>
                            <div class="text-left">
                                <p class="text-xs text-primary-800 uppercase font-bold tracking-widest">ठिकाण</p>
                                <p class="text-lg font-bold text-primary-900 leading-tight">${hero.place}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modern Wave Divider -->
            <div class="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-auto">
                    <path fill="#fff1f2" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
        
        <style>
            @keyframes zoomEffect {
                0% { transform: scale(1); }
                100% { transform: scale(1.1); }
            }
            @keyframes blob {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob {
                animation: blob 10s infinite;
            }
            .animation-delay-2000 {
                animation-delay: 2s;
            }
        </style>
    `;
}
