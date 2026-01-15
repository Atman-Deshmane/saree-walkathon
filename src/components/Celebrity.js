/**
 * ============================================
 * CELEBRITY COMPONENT (MODERN)
 * ============================================
 * Portrait video in smartphone frame.
 * Blurred background ambiance.
 * Click to play functionality.
 * @version 3.0 - Cache bust for Hostinger deployment
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
                    <div class="flex-1 text-center lg:text-left max-w-xl px-4">
                        <div class="inline-block text-4xl mb-6 animate-bounce">🎬</div>
                        <p class="text-lg md:text-xl text-primary-500 font-bold mb-2 tracking-wide uppercase">${celebrity.sectionSubtitle || ''}</p>
                        <h2 class="text-4xl md:text-6xl font-black text-primary-600 mb-6 leading-tight drop-shadow-sm">
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
                        
                        <div class="phone-frame animate-float" id="celebrity-video-container">
                            <!-- Thumbnail with Play Button -->
                            <div class="celebrity-video-thumbnail" id="celebrity-video-thumbnail" style="cursor: pointer; position: relative; width: 100%; height: 100%;">
                                <img src="https://img.youtube.com/vi/${celebrity.videoId}/maxresdefault.jpg" 
                                     alt="${celebrity.videoTitle}" 
                                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 24px;"
                                     onerror="this.src='https://img.youtube.com/vi/${celebrity.videoId}/hqdefault.jpg'">
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                                            width: 80px; height: 80px; background: rgba(219, 39, 119, 0.9); 
                                            border-radius: 50%; display: flex; align-items: center; justify-content: center;
                                            box-shadow: 0 4px 30px rgba(219, 39, 119, 0.5); transition: all 0.3s ease;">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                                <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; 
                                            background: rgba(0,0,0,0.7); padding: 12px 16px; border-radius: 12px;
                                            color: white; font-size: 14px; text-align: center;">
                                    ▶️ व्हिडिओ पाहण्यासाठी क्लिक करा
                                </div>
                            </div>
                        </div>

                        <!-- Reflection Shine -->
                        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none rounded-[32px]"></div>
                    </div>
                    
                </div>
            </div>
        </section>
    `;
}

export function initCelebrityVideo() {
    const thumbnail = document.getElementById('celebrity-video-thumbnail');
    const container = document.getElementById('celebrity-video-container');
    if (thumbnail && container) {
        thumbnail.addEventListener('click', function () {
            const videoId = siteContent.celebrity.videoId;
            container.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
                    title="${siteContent.celebrity.videoTitle}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    style="width: 100%; height: 100%; border: none; border-radius: 24px;">
                </iframe>
            `;
        });
    }
}
