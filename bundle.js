/**
 * ============================================
 * SAREE WALKATHON 2026 - BUNDLED JS
 * ============================================
 * This file replaces the module system for local file execution.
 */

// ============================================
// 1. DATA (content.js)
// ============================================
const siteContent = {
    meta: {
        title: "साडी वॉकॅथॉन २०२६ | धाराशिव",
        description: "महिला सशक्तीकरण आणि आरोग्यासाठी साडी वॉकॅथॉन - धाराशिव, महाराष्ट्र",
        logoUrl: "src/img/logo.png",
        logoAlt: "साडी वॉकॅथॉन लोगो"
    },
    hero: {
        title: "साडी वॉकॅथॉन २०२६",
        subtitle: "परंपरेचा अभिमान, आरोग्याचा सन्मान",
        date: "८ फेब्रुवारी २०२६",
        time: "सकाळी ६:०० वाजता",
        place: "श्री तुळजाभवानी जिल्हा स्टेडियम, धाराशिव",
        ctaText: "आत्ताच नोंदणी करा ✨",
        backgroundImage: "src/img/walkathon_background.JPG",
        titleSponsorLogo: "src/img/title_sponsor_logo.jpeg"
    },
    incentives: {
        sectionTitle: "साडी वॉकॅथॉन मध्ये काय काय असणार ?",
        enerzalLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/EnerzalLogo.svg/200px-EnerzalLogo.svg.png",
        items: [
            { icon: "", image: "src/img/enerzal.png", title: "Enerzal", description: "Healthy Drink Partner" },
            { icon: "💃", title: "फ्री झुंबा", description: "तज्ञ प्रशिक्षकांसोबत झुंबा सत्र" },
            { icon: "🏆", title: "बक्षीस वितरण", description: "आकर्षक बक्षिसे जिंकण्याची संधी" },
            { icon: "🥇", title: "पदक", description: "प्रत्येक सहभागीला स्मृती पदक" },
            { icon: "🎮", title: "खेळ", description: "मजेदार खेळ आणि स्पर्धा" }
        ]
    },
    highlights: {
        sectionTitle: "कार्यक्रमाची वैशिष्ट्ये",
        specialNote: "सर्वाधिक सहभाग असलेल्या महिला मंडळाला विशेष पदक!",
        specialNoteImage: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
        items: [
            { icon: "🥁", title: "ढोल ताशा पथक", description: "पारंपरिक ढोल ताशा वादनाने उत्साहवर्धक वातावरण" },
            { icon: "🧘", title: "योगा सत्र", description: "तज्ञ योग प्रशिक्षकांसोबत योगाभ्यास" },
            { icon: "🏅", title: "पुरस्कार सोहळा", description: "विजेत्यांचा सत्कार आणि पुरस्कार वितरण" }
        ]
    },
    celebrity: {
        sectionTitle: "मृणाल कुलकर्णी",
        sectionSubtitle: "लोकप्रिय अभिनेत्री",
        videoId: "jiOEuuvadsI",
        videoTitle: "विशेष संदेश - साडी वॉकॅथॉन २०२६",
        description: "आमच्या कार्यक्रमाला विशेष शुभेच्छा संदेश"
    },
    onlineRegistration: {
        sectionTitle: "ऑनलाईन नोंदणी",
        sectionSubtitle: "घरबसल्या नोंदणी करा आणि सहभागी व्हा! 📝",
        form: {
            nameLabel: "पूर्ण नाव",
            namePlaceholder: "तुमचे पूर्ण नाव",
            ageLabel: "वय",
            agePlaceholder: "उदा. २५",
            phoneLabel: "मोबाईल नंबर",
            phonePlaceholder: "९८७६५४३२१०",
            tshirtLabel: "टी-शर्ट साईज",
            submitBtn: "नोंदणी करा ✅",
            successMessage: "अभिनंदन! तुमची नोंदणी यशस्वी झाली आहे. 🎉"
        }
    },
    registration: {
        sectionTitle: "नोंदणी केंद्रे",
        sectionSubtitle: "आपल्या जवळच्या केंद्रावर नोंदणी करा 👇",
        centers: [
            { area: "छत्रपती शिवाजी महाराज चौक", placeName: "सात्विक ट्रेडर्स", contactPerson: "सुमेर विठ्ठलदास", phone: "9371270376", bannerImage: "src/img/saatvik_banner.jpg" }
        ]
    },
    tabs: {
        sponsors: {
            tabTitle: "प्रायोजक",
            items: [
                { name: "प्रायोजक १", videoId: "dQw4w9WgXcQ", posterUrl: "https://placehold.co/600x800/be123c/FFFFFF?text=Sponsor+1" },
                { name: "प्रायोजक २", videoId: "dQw4w9WgXcQ", posterUrl: "https://placehold.co/600x800/be123c/FFFFFF?text=Sponsor+2" },
                { name: "प्रायोजक ३", videoId: "dQw4w9WgXcQ", posterUrl: "https://placehold.co/600x800/be123c/FFFFFF?text=Sponsor+3" },
                { name: "प्रायोजक ४", videoId: "dQw4w9WgXcQ", posterUrl: "https://placehold.co/600x800/be123c/FFFFFF?text=Sponsor+4" }
            ]
        },
        cause: {
            tabTitle: "उद्दिष्ट",
            title: "महिला आरोग्य जागृती मिशन",
            description: `साडी वॉकॅथॉन हा केवळ एक चालण्याचा कार्यक्रम नाही,\n\nहे एक **चळवळ** आहे.\n\n• महिलांचे शारीरिक व मानसिक आरोग्य\n• कर्करोग मुक्त समाज (Cancer Awareness)\n• स्त्री शक्तीचा जागर`,
            stats: [
                { number: "२५००+", label: "सहभागी" },
                { number: "५०+", label: "मंडळे" },
                { number: "३०+", label: "भागीदार" }
            ]
        },
        history: {
            tabTitle: "फ्लॅशबॅक २०२५",
            title: "मागील वर्षाचा जल्लोष",
            description: "काही खास क्षण...",
            images: [
                { url: "src/img/ऊर्जा.JPG", caption: "ऊर्जा" },
                { url: "src/img/आनंद.JPG", caption: "आनंद" },
                { url: "src/img/एकता.JPG", caption: "एकता" },
                { url: "src/img/सन्मान.JPG", caption: "सन्मान" }
            ]
        }
    },
    notableWomen: {
        sectionTitle: "सन्मानित महिला",
        sectionSubtitle: "शहराचा अभिमान",
        women: [
            { name: "डॉ. माया ज. पाटील (शहापूरकर)", designation: "इतिहास, संस्कृती व पुरातत्त्वशास्त्र", photo: "src/img/डॉ. माया ज. पाटील (शहापूरकर).jpeg", achievement: "नामवंत अभ्यासक, संशोधक व समाजप्रबोधक", certificateImage: "src/img/डॉ. माया ज. पाटील (शहापूरकर) - certificate.png" },
            { name: "सौ. पूर्वी अभय गजेंद्रगडकर", designation: "उद्योजक", photo: "src/img/सौ. पूर्वी अभय गजेंद्रगडकर.jpeg", achievement: "अभय आयुर्वेदिक फार्मसी", certificateImage: "src/img/सौ. पूर्वी अभय गजेंद्रगडकर- certificate.png" },
            { name: "सौ. प्रतिभा श्रीकांत देशमुख", designation: "उद्योजक", photo: "src/img/प्रतिभा श्रीकांत देशमुख.jpeg", achievement: "महालक्ष्मी हायवे सर्व्हिसेस, महालक्ष्मी व्हेज रेस्टॉरंट व महालक्ष्मी फंक्शन हॉल", certificateImage: "src/img/प्रतिभा श्रीकांत देशमुख - certificate.png" }
        ]
    },
    footer: {
        teamSection: {
            title: "आयोजन समिती",
            photoUrl: "src/img/group_saree_walkathon.jpeg",
            photoAlt: "Team Photo"
        },
        partners: {
            title: "सहयोगी संस्था",
            organizations: [
                { name: "ओस्ला, ओऑसिस लेडीज फाउंडेशन", logo: "src/img/osla.jpeg" },
                { name: "धारासुरमर्दिनी महिला फेडरेशन", logo: "src/img/mahila_fereation.png" },
                { name: "IMA Woman Doctors Wing", logo: "src/img/IMA.png" },
                { name: "अक्षरवेल महिला साहित्य मंडळ", logo: "src/img/aksharvel.png" },
                { name: "रोटरी क्लब, धाराशिव", logo: "src/img/rotary.jpeg" },
                { name: "Nima Women's Forum", logo: "src/img/nima.png" }
            ]
        },
        contact: {
            title: "संपर्क",
            whatsappNumber: "9421325422",
            whatsappMessage: "नमस्कार, मला साडी वॉकॅथॉन २०२६ बद्दल माहिती हवी आहे.",
            buttonText: "WhatsApp"
        },
        copyright: "© २०२६ साडी वॉकॅथॉन धाराशिव"
    }
};

// ============================================
// 2. COMPONENTS
// ============================================

// Navbar
function renderNavbar() {
    const { meta } = siteContent;
    return `
        <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
            <div class="glass-panel mx-auto max-w-7xl rounded-full px-6 py-3 flex items-center justify-between shadow-2xl bg-white/70">
                <a href="#" class="flex items-center gap-3">
                    <img src="${meta.logoUrl}" alt="${meta.logoAlt}" class="h-10 md:h-12 w-auto object-contain">
                </a>
                <div class="flex items-center gap-4">
                    <div class="hidden md:flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
                        <span class="text-lg">📅</span>
                        <span class="text-primary-800 font-bold text-sm">8 फेब्रुवारी</span>
                    </div>
                    <a href="#registration" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-0.5">
                        नोंदणी करा
                    </a>
                </div>
            </div>
        </header>
        <div class="h-24"></div>
    `;
}

// Hero
function renderHero() {
    const { hero } = siteContent;
    return `
        <section id="hero" class="relative h-[95vh] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0">
                <img src="${hero.backgroundImage}" alt="Hero Background" class="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110" style="animation: zoomEffect 20s infinite alternate;">
                <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-primary-900/30"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent"></div>
            </div>
            <div class="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div class="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div class="text-center md:text-left flex-1 space-y-8 fade-up">
                    <div class="flex flex-col items-center md:items-start mb-2">
                        <img src="${hero.titleSponsorLogo}" alt="The Real Estate Mall" class="h-16 md:h-20 object-contain mb-4 bg-white/90 p-2 rounded-lg shadow-lg">
                        <p class="text-2xl md:text-3xl text-primary-100 font-semibold tracking-wide uppercase mb-1 drop-shadow-md">The Real Estate Mall Presents</p>
                    </div>
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl">
                        ${hero.title}
                    </h1>
                    

                    <a href="#centers" class="btn-modern text-lg md:text-xl group mt-8 inline-flex px-8 py-4" id="hero-cta">
                        <span>${hero.ctaText}</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
                 <div class="flex-none w-full md:w-96 glass-panel p-8 rounded-[2rem] transform hover:-translate-y-2 transition-transform duration-500 fade-up" style="animation-delay: 0.2s">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4 border-b border-white/40 pb-4">
                            <span class="text-4xl">📅</span>
                            <div class="text-left"><p class="text-xs text-primary-800 uppercase font-bold tracking-widest">तारीख</p><p class="text-2xl font-bold text-primary-900">${hero.date}</p></div>
                        </div>
                        <div class="flex items-center gap-4 border-b border-white/40 pb-4">
                            <span class="text-4xl">⏰</span>
                            <div class="text-left"><p class="text-xs text-primary-800 uppercase font-bold tracking-widest">वेळ</p><p class="text-2xl font-bold text-primary-900">${hero.time}</p></div>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-4xl">📍</span>
                            <div class="text-left"><p class="text-xs text-primary-800 uppercase font-bold tracking-widest">ठिकाण</p><p class="text-lg font-bold text-primary-900 leading-tight">${hero.place}</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-auto">
                    <path fill="#fff1f2" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
        <style>
            @keyframes zoomEffect { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
            @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
            .animate-blob { animation: blob 10s infinite; }
            .animation-delay-2000 { animation-delay: 2s; }
        </style>
    `;
}

// Incentives
function renderIncentives() {
    const { incentives } = siteContent;
    const incentiveCards = incentives.items.map((item, index) => {
        const iconOrImage = item.image
            ? `<img src="${item.image}" alt="${item.title}" class="w-12 h-12 md:w-16 md:h-16 object-contain">`
            : `<span class="text-xl md:text-2xl">${item.icon}</span>`;
        return `
        <div class="glass-card p-3 md:p-4 rounded-xl text-center group hover:bg-white transition-all duration-500 flex-1 min-w-[100px]">
            <div class="w-12 h-12 md:w-16 md:h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary-100 overflow-hidden">${iconOrImage}</div>
            <h3 class="text-xs md:text-sm font-bold text-primary-900 mb-1 group-hover:text-primary-600 transition-colors">${item.title}</h3>
            <p class="text-primary-600/80 text-[10px] md:text-xs font-medium leading-relaxed hidden md:block">${item.description}</p>
        </div>
    `;
    }).join('');

    return `
        <section id="incentives" class="py-12 md:py-20 relative bg-white">
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div class="blob bg-primary-200 w-48 md:w-96 h-48 md:h-96 top-0 -left-10 md:-left-20 mix-blend-multiply opacity-40"></div>
                <div class="blob bg-pink-200 w-48 md:w-96 h-48 md:h-96 bottom-0 right-0 mix-blend-multiply opacity-40"></div>
            </div>
            <div class="container relative z-10">
                <div class="text-center mb-8 md:mb-12 pt-4 md:pt-8">
                    <h2 class="text-2xl md:text-4xl font-black gradient-text-modern mb-4 leading-tight py-2">${incentives.sectionTitle}</h2>
                    <div class="w-24 md:w-32 h-1 bg-gradient-to-r from-primary-300 to-primary-500 mx-auto rounded-full"></div>
                </div>
                <div class="flex flex-wrap justify-center gap-3 md:gap-4 pb-4">${incentiveCards}</div>
            </div>
        </section>
    `;
}



// Highlights
function renderHighlights() {
    const { highlights } = siteContent;
    const highlightCards = highlights.items.map((item) => `
        <div class="flex flex-col items-center text-center p-6 md:p-8">
            <div class="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300"><span class="text-5xl md:text-6xl">${item.icon}</span></div>
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">${item.title}</h3>
            <p class="text-primary-100 text-sm md:text-base">${item.description}</p>
        </div>
    `).join('');
    return `
        <section id="highlights" class="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-10">
                <div class="absolute top-10 left-10 md:top-20 md:left-20 text-6xl md:text-9xl">🥁</div>
                <div class="absolute bottom-10 right-10 md:bottom-20 md:right-20 text-6xl md:text-9xl">🧘</div>
            </div>
            <div class="container relative z-10">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">${highlights.sectionTitle}</h2>
                    <div class="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">${highlightCards}</div>
                <div class="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                        <img src="${highlights.specialNoteImage || 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=80'}" alt="Special Medal" class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg">
                        <div class="text-center md:text-left">
                            <p class="text-xl md:text-2xl font-black text-white drop-shadow-lg">${highlights.specialNote}</p>
                            <p class="text-sm text-white/80 mt-2">विशेष सन्मान आणि पुरस्कार</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Celebrity
function renderCelebrity() {
    const { celebrity } = siteContent;
    return `
        <section id="celebrity" class="relative py-24 overflow-hidden">
            <div class="absolute inset-0 bg-primary-100/50"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
            <div class="container relative z-10">
                <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div class="flex-1 text-center lg:text-left max-w-xl px-4">
                        <div class="inline-block text-4xl mb-6 animate-bounce">🎬</div>
                        <p class="text-lg md:text-xl text-primary-500 font-bold mb-2 tracking-wide uppercase">${celebrity.sectionSubtitle || ''}</p>
                        <h2 class="text-4xl md:text-6xl font-black text-primary-600 mb-6 leading-tight drop-shadow-sm">${celebrity.sectionTitle}</h2>
                        <p class="text-primary-800 text-xl font-light leading-relaxed mb-8">${celebrity.description}</p>
                        <div class="inline-flex items-center gap-2 text-primary-600 font-medium bg-white/50 px-6 py-3 rounded-full backdrop-blur-sm border border-white">
                            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>आत्ताच पहा
                        </div>
                    </div>
                    <div class="relative flex-none">
                        <div class="absolute inset-0 bg-primary-500 blur-3xl opacity-30 transform scale-110"></div>
                        <div class="phone-frame animate-float">
                            <iframe src="https://www.youtube.com/embed/${celebrity.videoId}?rel=0&controls=0&modestbranding=1&loop=1" title="${celebrity.videoTitle}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                        </div>
                        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none rounded-[32px]"></div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Online Registration
function renderOnlineRegistration() {
    const { onlineRegistration } = siteContent;
    const { form } = onlineRegistration;
    const tshirtSizes = ['S', 'M', 'L', 'XL', 'XXL'].map(size => `
        <label class="cursor-pointer">
            <input type="radio" name="size" value="${size}" class="peer sr-only" required>
            <div class="w-14 h-14 md:w-12 md:h-12 rounded-xl border-2 border-primary-100 bg-white/50 flex items-center justify-center font-bold text-primary-400 peer-checked:bg-primary-500 peer-checked:text-white peer-checked:border-primary-500 peer-checked:shadow-lg peer-checked:-translate-y-1 transition-all hover:bg-white text-sm">${size}</div>
        </label>
    `).join('');

    return `
        <section id="online-registration" class="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
             <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div class="absolute top-1/2 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div class="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
             </div>
            <div class="container relative z-10">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8 md:mb-12">
                        <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-3">${onlineRegistration.sectionTitle}</h2>
                        <p class="text-lg md:text-xl text-primary-600 font-light">${onlineRegistration.sectionSubtitle}</p>
                    </div>
                    <div class="glass-card p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl border border-white/50 relative">
                        <div class="hidden md:flex absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full text-white items-center justify-center font-bold text-center p-2 shadow-lg transform rotate-12 text-xs leading-tight">विनामूल्य<br>प्रवेश</div>
                        <div class="md:hidden mb-6 flex justify-center"><span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">✨ विनामूल्य प्रवेश</span></div>
                        <form id="registration-form" class="space-y-5">
                            <div class="space-y-2"><label class="block text-primary-900 font-bold text-sm md:text-base">${form.nameLabel}</label><input type="text" required placeholder="${form.namePlaceholder}" class="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/50 border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-primary-900 placeholder-primary-300 text-base"></div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div class="space-y-2"><label class="block text-primary-900 font-bold text-sm md:text-base">${form.ageLabel}</label><input type="number" required min="5" max="100" placeholder="${form.agePlaceholder}" class="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/50 border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-primary-900 placeholder-primary-300 text-base"></div>
                                <div class="space-y-2"><label class="block text-primary-900 font-bold text-sm md:text-base">${form.phoneLabel}</label><input type="tel" required pattern="[0-9]{10}" placeholder="${form.phonePlaceholder}" class="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/50 border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-primary-900 placeholder-primary-300 text-base"></div>
                            </div>
                            <div class="space-y-2"><label class="block text-primary-900 font-bold text-sm md:text-base">${form.tshirtLabel}</label><div class="flex flex-wrap gap-3">${tshirtSizes}</div></div>
                            <div class="pt-4"><button type="submit" class="w-full btn-modern text-lg md:text-xl group py-4">${form.submitBtn}<span class="group-hover:translate-x-1 transition-transform">→</span></button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function initOnlineRegistration() {
    const form = document.getElementById('registration-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = 'कृपया प्रतीक्षा करा... ⏳';
        setTimeout(() => {
            const { onlineRegistration } = siteContent;
            alert(onlineRegistration.form.successMessage);
            form.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// Registration Centers
function renderRegistration() {
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

function initRegistrationModal() {
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
                <style>@keyframes popup { to { transform: scale(1); opacity: 1; } }</style>
            `;
            document.getElementById('registration-modal').addEventListener('click', (ev) => {
                if (ev.target.id === 'registration-modal' || ev.target.id === 'close-reg-modal') {
                    modalContainer.innerHTML = '';
                }
            });
        }
    });
}



// Tabs
function generateSponsorsContent() {
    const { sponsors } = siteContent.tabs;
    const sponsorCards = sponsors.items.map(sponsor => `
        <div class="glass-card rounded-2xl overflow-hidden p-3 group flex-shrink-0 w-72 md:w-80 snap-start">
            <div class="video-container rounded-xl overflow-hidden bg-black/5">
                 <iframe src="https://www.youtube.com/embed/${sponsor.videoId}?rel=0" title="${sponsor.name}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="p-4 flex flex-col items-center gap-3">
                <h4 class="font-bold text-primary-900 text-center">${sponsor.name}</h4>
                <button class="sponsor-details-btn px-5 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm font-semibold" data-poster="${sponsor.posterUrl}" data-name="${sponsor.name}">Know More</button>
            </div>
        </div>
    `).join('');
    return `
        <div class="relative">
            <button id="sponsor-scroll-left" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-800 transition-all -ml-4 md:-ml-6">
                <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div id="sponsors-container" class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth" style="-webkit-overflow-scrolling: touch;">${sponsorCards}</div>
            <button id="sponsor-scroll-right" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-800 transition-all -mr-4 md:-mr-6">
                <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
        <style>.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }</style>
    `;
}

function generateCauseContent() {
    const { cause } = siteContent.tabs;
    const statsCards = cause.stats.map(stat => `<div class="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl text-center"><div class="text-2xl md:text-5xl font-black gradient-text-modern mb-1 md:mb-2">${stat.number}</div><div class="text-primary-800 font-bold uppercase tracking-wide text-[10px] md:text-sm">${stat.label}</div></div>`).join('');
    return `
        <div class="max-w-4xl mx-auto">
            <div class="glass-panel p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] relative overflow-hidden">
                <div class="absolute -right-20 -top-20 w-48 md:w-64 h-48 md:h-64 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
                <div class="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div class="flex-1 text-center md:text-left"><h3 class="text-2xl md:text-3xl font-black text-primary-900 mb-4 md:mb-6">${cause.title}</h3><div class="space-y-3 md:space-y-4 text-primary-800 leading-relaxed text-base md:text-lg">${cause.description.split('\n').map(line => `<p>${line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-primary-600">$1</span>')}</p>`).join('')}</div></div>
                    <div class="flex-1 w-full grid grid-cols-2 gap-3 md:gap-4">${statsCards}</div>
                </div>
            </div>
        </div>
    `;
}

function generateHistoryContent() {
    const { history } = siteContent.tabs;
    const imageCards = history.images.map((img) => `
        <div class="relative group rounded-2xl overflow-hidden h-64 glass-card p-0 border-none shadow-lg">
            <img src="${img.url}" alt="${img.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">${img.caption}</p>
            </div>
        </div>
    `).join('');
    return `<div class="max-w-6xl mx-auto text-center pt-8 md:pt-12"><h3 class="text-3xl font-bold text-primary-900 mb-4">${history.title}</h3><p class="text-primary-600 mb-8">${history.description}</p><div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">${imageCards}</div></div>`;
}

function renderTabs() {
    const { sponsors, cause, history } = siteContent.tabs;
    return `
        <section id="tabs-section" class="py-16 md:py-24 bg-white/50">
            <div class="container">
                <div class="flex justify-center mb-8 md:mb-12">
                    <div class="modern-tab-container p-1 md:p-1.5 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-full overflow-x-auto max-w-full">
                        <button class="modern-tab-btn active px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap" data-tab="sponsors" id="tab-sponsors">${sponsors.tabTitle}</button>
                        <button class="modern-tab-btn px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap" data-tab="cause" id="tab-cause">${cause.tabTitle}</button>
                        <button class="modern-tab-btn px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base whitespace-nowrap" data-tab="history" id="tab-history">${history.tabTitle}</button>
                    </div>
                </div>
                <div class="tab-content bg-transparent p-0 min-h-[400px]">
                    <div class="tab-panel active animate-fade-in" id="panel-sponsors" data-panel="sponsors">${generateSponsorsContent()}</div>
                    <div class="tab-panel animate-fade-in" id="panel-cause" data-panel="cause">${generateCauseContent()}</div>
                    <div class="tab-panel animate-fade-in" id="panel-history" data-panel="history">${generateHistoryContent()}</div>
                </div>
            </div>
        </section>
        <style>.animate-fade-in { animation: fadeIn 0.5s ease-out; }</style>
    `;
}

function initTabInteractions() {
    const tabButtons = document.querySelectorAll('.modern-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tabPanels.forEach(panel => {
                panel.style.display = 'none';
                if (panel.dataset.panel === targetTab) {
                    panel.style.display = 'block';
                    panel.classList.remove('animate-fade-in');
                    void panel.offsetWidth;
                    panel.classList.add('animate-fade-in');
                }
            });
        });
    });

    // Sponsor scroll buttons
    const sponsorsContainer = document.getElementById('sponsors-container');
    const scrollLeftBtn = document.getElementById('sponsor-scroll-left');
    const scrollRightBtn = document.getElementById('sponsor-scroll-right');
    if (sponsorsContainer && scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            sponsorsContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        scrollRightBtn.addEventListener('click', () => {
            sponsorsContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    const modalContainer = document.getElementById('modal-container');
    document.addEventListener('click', (e) => {
        if (e.target.closest('.sponsor-details-btn')) {
            const btn = e.target.closest('.sponsor-details-btn');
            const posterUrl = btn.dataset.poster;
            modalContainer.innerHTML = `
                <div class="modal-overlay backdrop-blur-md" id="sponsor-modal">
                    <div class="modal-content glass-panel p-0 overflow-hidden shadow-2xl scale-95 opacity-0 animate-[popup_0.3s_ease-out_forwards]">
                        <button class="modal-close bg-white text-primary-600 hover:bg-primary-50 top-4 right-4 shadow-lg" id="close-modal">&times;</button>
                        <img src="${posterUrl}" class="w-full max-h-[85vh] object-contain bg-white">
                    </div>
                </div>
                <style>@keyframes popup { to { transform: scale(1); opacity: 1; } }</style>
            `;
            document.getElementById('sponsor-modal').addEventListener('click', (ev) => {
                if (ev.target.id === 'sponsor-modal' || ev.target.id === 'close-modal') {
                    modalContainer.innerHTML = '';
                }
            });
        }
    });
}

// Notable Women
function renderNotableWomen() {
    const { notableWomen } = siteContent;
    const womenCards = notableWomen.women.map((woman) => `
        <div class="group relative cursor-pointer notable-woman-card" data-certificate="${woman.certificateImage || woman.photo}" data-name="${woman.name}">
            <div class="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2">
                <div class="relative h-48 md:h-72 overflow-hidden">
                    <img src="${woman.photo}" alt="${woman.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div class="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 backdrop-blur-md border border-white/50 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider">🏆 सन्मान</div>
                </div>
                <div class="p-4 md:p-6 relative">
                    <div class="absolute -top-6 md:-top-8 right-3 md:right-6 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-300">🏆</div>
                    <h3 class="text-sm md:text-lg font-bold text-primary-900 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors leading-tight pr-12">${woman.name}</h3>
                    <p class="text-primary-500 text-[10px] md:text-sm font-medium mb-2">${woman.designation}</p>
                    <div class="h-px w-full bg-primary-100 mb-2"></div>
                    <p class="text-primary-700 font-medium text-xs md:text-sm leading-snug">${woman.achievement}</p>
                    <p class="text-primary-400 text-[10px] mt-2">प्रमाणपत्र पाहण्यासाठी क्लिक करा</p>
                </div>
            </div>
        </div>
    `).join('');
    return `
        <section id="notable-women" class="py-16 md:py-24 bg-primary-50 relative overflow-hidden">
             <div class="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div class="container relative z-10">
                <div class="text-center mb-10 md:mb-16 pt-4 md:pt-8">
                    <h2 class="text-3xl md:text-5xl font-black gradient-text-modern mb-3 md:mb-4 py-2">${notableWomen.sectionTitle}</h2>
                    <p class="text-lg md:text-xl text-primary-600 font-light">${notableWomen.sectionSubtitle}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">${womenCards}</div>
            </div>
        </section>
    `;
}

function initNotableWomenModal() {
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
                <style>@keyframes popup { to { transform: scale(1); opacity: 1; } }</style>
            `;
            document.getElementById('woman-modal').addEventListener('click', (ev) => {
                if (ev.target.id === 'woman-modal' || ev.target.id === 'close-woman-modal') {
                    modalContainer.innerHTML = '';
                }
            });
        }
    });
}


// Footer
function renderFooter() {
    const { footer } = siteContent;
    const partnerLogos = footer.partners.organizations.map(org => `
        <div class="group flex flex-col items-center justify-center p-4 md:p-6 bg-white hover:bg-white rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md h-full">
            <img src="${org.logo}" alt="${org.name}" class="h-16 md:h-20 w-auto object-contain mb-3" loading="lazy">
            <p class="text-xs text-primary-800 font-bold text-center leading-tight">${org.name}</p>
        </div>
    `).join('');
    const whatsappUrl = `https://wa.me/${footer.contact.whatsappNumber}?text=${encodeURIComponent(footer.contact.whatsappMessage)}`;
    return `
        <section id="team" class="py-12 md:py-20 bg-white">
            <div class="container">
                <div class="text-center mb-8 md:mb-12"><h2 class="text-2xl md:text-3xl font-bold gradient-text-modern mb-2">${footer.teamSection.title}</div>
                <div class="max-w-5xl mx-auto p-3 md:p-4 glass-card rounded-2xl md:rounded-[2rem]">
                    <img src="${footer.teamSection.photoUrl}" alt="${footer.teamSection.photoAlt}" class="w-full h-auto rounded-2xl md:rounded-3xl" loading="lazy">
                </div>
            </div>
        </section>
        <section id="partners" class="py-12 md:py-20 bg-primary-50">
            <div class="container">
                <div class="text-center mb-8 md:mb-12"><p class="text-primary-400 uppercase tracking-widest font-bold text-xs md:text-sm mb-2">Supported By</p><h2 class="text-2xl md:text-3xl font-bold text-primary-900">${footer.partners.title}</h2></div>
                <div class="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">${partnerLogos}</div>
            </div>
        </section>
        <footer class="bg-primary-900 text-white py-12 relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
            <div class="container relative z-10 text-center">
                <div class="mb-8">
                    <h3 class="text-2xl font-bold mb-4">अजून प्रश्न आहेत?</h3>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/50">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>${footer.contact.buttonText}</span>
                </a>
            </div>
            <div class="border-t border-white/20 pt-8 mt-8">
                <p class="text-primary-200 text-sm opacity-60">${footer.copyright}</p>
            </div>
            </div>
        </footer>
        <div class="bg-black py-3 text-center"><p class="text-white text-sm">Created with ❤️ by- <strong>Atman</strong> and <strong>Shashanki</strong></p></div>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-float group">
            <span class="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </a>
    `;
}

// ============================================
// 3. MAIN RENDER FUNCTION
// ============================================

function renderApp() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${renderNavbar()}
        ${renderHero()}
        ${renderIncentives()}
        ${renderHighlights()}
        ${renderCelebrity()}
        ${renderRegistration()}
        ${renderTabs()}
        ${renderNotableWomen()}
        ${renderFooter()}
    `;
    console.log('✅ Page rendered successfully');
}

function initInteractions() {
    initTabInteractions();
    initRegistrationModal();
    initNotableWomenModal();

    // Additional interactions if any
    const heroCTA = document.getElementById('hero-cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', () => {
            heroCTA.classList.remove('animate-bounce');
        }, { once: true });
    }
}

function init() {
    console.log('🚀 Initializing Saree Walkathon 2026 Website...');
    renderApp();
    initInteractions();
    console.log('🎉 Website ready!');
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
