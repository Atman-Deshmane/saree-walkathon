/**
 * ============================================
 * CELEBRITY COMPONENT (MODERN)
 * ============================================
 * Portrait video in smartphone frame.
 * Blurred background ambiance.
 */

import { siteContent } from '../data/content.js';

export function renderCelebrity() {
    const { celebrity } = siteContent;

    return `
        <section id="celebrity" class="relative py-24 overflow-hidden">
            <!-- Ambient Background -->
            <div class="absolute inset-0 bg-primary-100/50"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>

            <div class="container relative z-10">
                <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    
                    <!-- Text Side -->
                    <div class="flex-1 text-center lg:text-left max-w-xl">
                        <div class="inline-block text-4xl mb-6 animate-bounce">🎬</div>
                        <h2 class="text-4xl md:text-5xl font-black gradient-text-modern mb-6 leading-tight">
                            ${celebrity.sectionTitle}
                        </h2>
                        <p class="text-primary-800 text-xl font-light leading-relaxed mb-8">
                            ${celebrity.description}
                        </p>
                        <div class="inline-flex items-center gap-2 text-primary-600 font-medium bg-white/50 px-6 py-3 rounded-full backdrop-blur-sm border border-white">
                            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            आत्ताच पहा
                        </div>
                    </div>
                    
                    <!-- Video Side: Phone Frame -->
                    <div class="relative flex-none">
                        <!-- Glow behind phone -->
                        <div class="absolute inset-0 bg-primary-500 blur-3xl opacity-30 transform scale-110"></div>
                        
                        <div class="phone-frame animate-float">
                            <!-- YouTube Embed -->
                            <iframe 
                                src="https://www.youtube.com/embed/${celebrity.videoId}?rel=0&controls=0&modestbranding=1&loop=1"
                                title="${celebrity.videoTitle}"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                loading="lazy"
                            ></iframe>
                        </div>

                        <!-- Reflection Shine -->
                        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none rounded-[32px]"></div>
                    </div>
                    
                </div>
            </div>
        </section>
    `;
}
