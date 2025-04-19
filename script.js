// Mock Backend Data for Dynamic Pricing and Content
const mockBackend = {
    plans: [
        { id: 'netflix-month', service: 'netflix', price: 13.99, popular: false },
        { id: 'netflix-3months', service: 'netflix', price: 39.99, popular: true },
        { id: 'netflix-year', service: 'netflix', price: 149.99, popular: false },
        { id: 'spotify-month', service: 'spotify', price: 19.99, popular: false },
        { id: 'spotify-6months', service: 'spotify', price: 99.99, popular: false },
        { id: 'spotify-year', service: 'spotify', price: 199.99, popular: true },
        { id: 'disney-month', service: 'disney', price: 29.99, popular: false },
        { id: 'disney-6months', service: 'disney', price: 149.99, popular: false },
        { id: 'disney-year', service: 'disney', price: 249.99, popular: false },
        { id: 'youtube-month', service: 'youtube', price: 23.99, popular: false },
        { id: 'youtube-3months', service: 'youtube', price: 59.99, popular: true },
        { id: 'youtube-year', service: 'youtube', price: 199.99, popular: false },
        { id: 'bundle-family', service: 'bundle', price: 79.99, popular: true },
        { id: 'bundle-premium', service: 'bundle', price: 499.99, popular: false },
        { id: 'bundle-economy', service: 'bundle', price: 49.99, popular: false }
    ],
    translations: {
        ar: {
            addToCartMessage: "تمت إضافة {plan} إلى السلة بقيمة {price} {currency}!",
            emptyCartMessage: "السلة فارغة! أضف بعض الاشتراكات أولاً.",
            loginMessage: "يرجى تسجيل الدخول للمتابعة.",
            removeItemMessage: "تمت إزالة العنصر من السلة!",
            clearCartMessage: "تم إفراغ السلة بنجاح!",
            logoutMessage: "تم تسجيل الخروج بنجاح!",
            searchPlaceholder: "ابحث عن الخطط (مثل: نتفليكس)",
            newsletterSuccess: "تم الاشتراك في النشرة بنجاح!",
            duplicateCartMessage: "هذه الخطة موجودة بالفعل في السلة!",
            networkError: "خطأ في الشبكة، حاول مرة أخرى لاحقاً."
        },
        en: {
            addToCartMessage: "{plan} added to cart for {price} {currency}!",
            emptyCartMessage: "Your cart is empty! Add some subscriptions first.",
            loginMessage: "Please login to proceed.",
            removeItemMessage: "Item removed from cart!",
            clearCartMessage: "Cart cleared successfully!",
            logoutMessage: "Logged out successfully!",
            searchPlaceholder: "Search plans (e.g., Netflix)",
            newsletterSuccess: "Subscribed to newsletter successfully!",
            duplicateCartMessage: "This plan is already in your cart!",
            networkError: "Network error, please try again later."
        }
    }
};

// Original Content Object
const content = {
    ar: {
        pageTitle: "Nexa - اشتراكات مميزة لخدمات البث",
        headerTitle: "Nexa",
        themeToggle: "الوضع الداكن",
        loginBtn: "تسجيل الدخول",
        logoutBtn: "تسجيل الخروج",
        heroTitle: "استمتع بأفضل خدمات البث مع Nexa",
        heroSubtitle: "اشتراكات نتفليكس، سبوتيفاي، ديزني+، وأكثر بأسعار تنافسية",
        heroBtn: "تصفح الخطط الآن",
        filterLabel: "فرز حسب: ",
        filterAll: "الكل",
        filterNetflix: "نتفليكس",
        filterSpotify: "سبوتيفاي",
        filterDisney: "ديزني+",
        filterYoutube: "يوتيوب بريميوم",
        filterBundle: "الباقات المجمعة",
        netflixTitle: "اشتراكات نتفليكس",
        netflixMonthLabel: "مميز",
        netflixMonthTitle: "عرض شهر",
        netflixMonthDesc: "نتفليكس 4K",
        netflix3MonthsLabel: "مميز",
        netflix3MonthsTitle: "عرض 3 أشهر",
        netflix3MonthsDesc: "نتفليكس 4K",
        netflixYearLabel: "مميز",
        netflixYearTitle: "عرض سنة",
        netflixYearDesc: "نتفليكس 4K",
        netflixMonthBtn: "أضف إلى السلة",
        netflix3MonthsBtn: "أضف إلى السلة",
        netflixYearBtn: "أضف إلى السلة",
        spotifyTitle: "اشتراكات سبوتيفاي",
        spotifyMonthLabel: "مميز",
        spotifyMonthTitle: "عرض شهر",
        spotifyMonthDesc: "سبوتيفاي بريميوم",
        spotify6MonthsLabel: "مميز",
        spotify6MonthsTitle: "عرض 6 أشهر",
        spotify6MonthsDesc: "سبوتيفاي بريميوم",
        spotifyYearLabel: "مميز",
        spotifyYearTitle: "عرض سنة",
        spotifyYearDesc: "سبوتيفاي بريميوم",
        spotifyMonthBtn: "أضف إلى السلة",
        spotify6MonthsBtn: "أضف إلى السلة",
        spotifyYearBtn: "أضف إلى السلة",
        disneyTitle: "اشتراكات ديزني+",
        disneyMonthLabel: "مميز",
        disneyMonthTitle: "عرض شهر",
        disneyMonthDesc: "ديزني+ 4K",
        disney6MonthsLabel: "مميز",
        disney6MonthsTitle: "عرض 6 أشهر",
        disney6MonthsDesc: "ديزني+ 4K",
        disneyYearLabel: "مميز",
        disneyYearTitle: "عرض سنة",
        disneyYearDesc: "ديزني+ 4K",
        disneyMonthBtn: "أضف إلى السلة",
        disney6MonthsBtn: "أضف إلى السلة",
        disneyYearBtn: "أضف إلى السلة",
        youtubeTitle: "اشتراكات يوتيوب بريميوم",
        youtubeMonthLabel: "مميز",
        youtubeMonthTitle: "عرض شهر",
        youtubeMonthDesc: "يوتيوب بريميوم",
        youtube3MonthsLabel: "مميز",
        youtube3MonthsTitle: "عرض 3 أشهر",
        youtube3MonthsDesc: "يوتيوب بريميوم",
        youtubeYearLabel: "مميز",
        youtubeYearTitle: "عرض سنة",
        youtubeYearDesc: "يوتيوب بريميوم",
        youtubeMonthBtn: "أضف إلى السلة",
        youtube3MonthsBtn: "أضف إلى السلة",
        youtubeYearBtn: "أضف إلى السلة",
        bundleTitle: "الباقات المجمعة",
        bundleFamilyLabel: "مميز",
        bundleFamilyTitle: "باقة عائلية",
        bundleFamilyDesc: "نتفليكس + سبوتيفاي + ديزني+",
        bundlePremiumLabel: "مميز",
        bundlePremiumTitle: "باقة فاخرة",
        bundlePremiumDesc: "جميع الخدمات لمدة سنة",
        bundleEconomyLabel: "مميز",
        bundleEconomyTitle: "باقة اقتصادية",
        bundleEconomyDesc: "نتفليكس + سبوتيفاي لمدة 3 أشهر",
        bundleFamilyBtn: "أضف إلى السلة",
        bundlePremiumBtn: "أضف إلى السلة",
        bundleEconomyBtn: "أضف إلى السلة",
        testimonialsTitle: "آراء عملائنا",
        testimonial1Text: '"خدمة رائعة! اشتراكات بأسعار تنافسية وتفعيل فوري."',
        testimonial1Name: "أحمد محمد - الرياض",
        testimonial2Text: '"الباقة المجمعة وفرت لي الكثير من المال. شكراً Nexa!"',
        testimonial2Name: "سارة عبدالله - جدة",
        testimonial3Text: '"دعم العملاء ممتاز، ساعدوني بسرعة في تفعيل اشتراكي."',
        testimonial3Name: "خالد العتيبي - الدمام",
        testimonial4Text: '"تجربة مستخدم رائعة، الاشتراكات تعمل بسلاسة."',
        testimonial4Name: "ليلى حسن - القاهرة",
        testimonial5Text: '"أسعار لا تُضاهى وخدمة سريعة، أنصح بها!"',
        testimonial5Name: "محمد علي - دبي",
        footerContact: 'تواصل معنا: <a href="mailto:support@nexa.com">support@nexa.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'تابعنا: <a href="#">فيسبوك</a> | <a href="#">تويتر</a> | <a href="#">إنستغرام</a>',
        footerCopyright: "© 2025 Nexa. جميع الحقوق محفوظة.",
        cartTitle: "سلة التسوق",
        checkoutBtn: "الدفع الآن",
        clearCartBtn: "إفراغ السلة"
    },
    en: {
        pageTitle: "Nexa - Premium Streaming Subscriptions",
        headerTitle: "Nexa",
        themeToggle: "Dark Mode",
        loginBtn: "Login",
        logoutBtn: "Logout",
        heroTitle: "Enjoy the Best Streaming Services with Nexa",
        heroSubtitle: "Subscriptions for Netflix, Spotify, Disney+, and More at Competitive Prices",
        heroBtn: "Browse Plans Now",
        filterLabel: "Sort by: ",
        filterAll: "All",
        filterNetflix: "Netflix",
        filterSpotify: "Spotify",
        filterDisney: "Disney+",
        filterYoutube: "YouTube Premium",
        filterBundle: "Bundles",
        netflixTitle: "Netflix Subscriptions",
        netflixMonthLabel: "Premium",
        netflixMonthTitle: "1 Month Plan",
        netflixMonthDesc: "Netflix 4K",
        netflix3MonthsLabel: "Premium",
        netflix3MonthsTitle: "3 Months Plan",
        netflix3MonthsDesc: "Netflix 4K",
        netflixYearLabel: "Premium",
        netflixYearTitle: "1 Year Plan",
        netflixYearDesc: "Netflix 4K",
        netflixMonthBtn: "Add to Cart",
        netflix3MonthsBtn: "Add to Cart",
        netflixYearBtn: "Add to Cart",
        spotifyTitle: "Spotify Subscriptions",
        spotifyMonthLabel: "Premium",
        spotifyMonthTitle: "1 Month Plan",
        spotifyMonthDesc: "Spotify Premium",
        spotify6MonthsLabel: "Premium",
        spotify6MonthsTitle: "6 Months Plan",
        spotify6MonthsDesc: "Spotify Premium",
        spotifyYearLabel: "Premium",
        spotifyYearTitle: "1 Year Plan",
        spotifyYearDesc: "Spotify Premium",
        spotifyMonthBtn: "Add to Cart",
        spotify6MonthsBtn: "Add to Cart",
        spotifyYearBtn: "Add to Cart",
        disneyTitle: "Disney+ Subscriptions",
        disneyMonthLabel: "Premium",
        disneyMonthTitle: "1 Month Plan",
        disneyMonthDesc: "Disney+ 4K",
        disney6MonthsLabel: "Premium",
        disney6MonthsTitle: "6 Months Plan",
        disney6MonthsDesc: "Disney+ 4K",
        disneyYearLabel: "Premium",
        disneyYearTitle: "1 Year Plan",
        disneyYearDesc: "Disney+ 4K",
        disneyMonthBtn: "Add to Cart",
        disney6MonthsBtn: "Add to Cart",
        disneyYearBtn: "Add to Cart",
        youtubeTitle: "YouTube Premium Subscriptions",
        youtubeMonthLabel: "Premium",
        youtubeMonthTitle: "1 Month Plan",
        youtubeMonthDesc: "YouTube Premium",
        youtube3MonthsLabel: "Premium",
        youtube3MonthsTitle: "3 Months Plan",
        youtube3MonthsDesc: "YouTube Premium",
        youtubeYearLabel: "Premium",
        youtubeYearTitle: "1 Year Plan",
        youtubeYearDesc: "YouTube Premium",
        youtubeMonthBtn: "Add to Cart",
        youtube3MonthsBtn: "Add to Cart",
        youtubeYearBtn: "Add to Cart",
        bundleTitle: "Bundles",
        bundleFamilyLabel: "Premium",
        bundleFamilyTitle: "Family Bundle",
        bundleFamilyDesc: "Netflix + Spotify + Disney+",
        bundlePremiumLabel: "Premium",
        bundlePremiumTitle: "Premium Bundle",
        bundlePremiumDesc: "All Services for 1 Year",
        bundleEconomyLabel: "Premium",
        bundleEconomyTitle: "Economy Bundle",
        bundleEconomyDesc: "Netflix + Spotify for 3 Months",
        bundleFamilyBtn: "Add to Cart",
        bundlePremiumBtn: "Add to Cart",
        bundleEconomyBtn: "Add to Cart",
        testimonialsTitle: "Customer Reviews",
        testimonial1Text: '"Great service! Competitive prices and instant activation."',
        testimonial1Name: "Ahmed Mohammed - Riyadh",
        testimonial2Text: '"The bundle saved me a lot of money. Thanks, Nexa!"',
        testimonial2Name: "Sarah Abdullah - Jeddah",
        testimonial3Text: '"Excellent customer support, they helped me activate my subscription quickly."',
        testimonial3Name: "Khaled Al-Otaibi - Dammam",
        testimonial4Text: '"Amazing user experience, subscriptions work seamlessly."',
        testimonial4Name: "Leila Hassan - Cairo",
        testimonial5Text: '"Unbeatable prices and fast service, highly recommend!"',
        testimonial5Name: "Mohammed Ali - Dubai",
        footerContact: 'Contact Us: <a href="mailto:support@nexa.com">support@nexa.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'Follow Us: <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>',
        footerCopyright: "© 2025 Nexa. All Rights Reserved.",
        cartTitle: "Shopping Cart",
        checkoutBtn: "Proceed to Checkout",
        clearCartBtn: "Clear Cart"
    }
};

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;
let currentLanguage = localStorage.getItem('language') || 'ar';
let currentCurrency = localStorage.getItem('currency') || 'SAR';
let currentSettings = `${currentLanguage}-${currentCurrency}`;
const exchangeRates = { SAR: 1, EGP: 12.5, AED: 0.98 };

// DOM Elements
const elements = {
    cartCounter: document.getElementById('cart-count'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    cartModal: document.getElementById('cart-modal'),
    notificationPopup: document.getElementById('notification-popup'),
    notificationMessage: document.getElementById('notification-message'),
    loginBtn: document.getElementById('login-btn'),
    logoutBtn: document.getElementById('logout-btn'),
    userGreeting: document.getElementById('user-greeting'),
    searchBar: document.getElementById('search-bar'),
    filterSelect: document.getElementById('filter-select'),
    newsletterEmail: document.getElementById('newsletter-email')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    try {
        toggleLanguage(currentLanguage);
        toggleCurrency(currentCurrency);
        toggleSettings(currentSettings);
        updateCart();
        updateUserStatus();
        elements.cartCounter.textContent = cartCount;
        elements.searchBar.addEventListener('input', searchPlans);
        elements.filterSelect.addEventListener('change', filterPlans);
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Initialization error:', error);
    }
});

// Navigation
function scrollToPlans() {
    document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const headerActions = document.getElementById('header-actions');
    headerActions.classList.toggle('active');
}

// Cart Management
function addToCart(planId, priceSar) {
    try {
        if (cart.some(item => item.planId === planId)) {
            showNotification(mockBackend.translations[currentLanguage].duplicateCartMessage, 'error');
            return;
        }
        cart.push({ planId, priceSar });
        cartCount++;
        elements.cartCounter.textContent = cartCount;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        syncCartToBackend();
        const planTitle = content[currentLanguage][`${planId}Title`];
        const price = currentCurrency === 'SAR' ? priceSar : priceSar * exchangeRates[currentCurrency];
        showNotification(
            mockBackend.translations[currentLanguage].addToCartMessage
                .replace('{plan}', planTitle)
                .replace('{price}', price.toFixed(2))
                .replace('{currency}', currentCurrency),
            'success'
        );
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Add to cart error:', error);
    }
}

function updateCart() {
    try {
        elements.cartItems.innerHTML = '';
        let total = 0;
        if (!cart.length) {
            elements.cartItems.innerHTML = `<p>${mockBackend.translations[currentLanguage].emptyCartMessage}</p>`;
        } else {
            cart.forEach((item, index) => {
                const planTitle = content[currentLanguage][`${item.planId}Title`];
                const price = currentCurrency === 'SAR' ? item.priceSar : item.priceSar * exchangeRates[currentCurrency];
                total += price;
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <span>${planTitle}</span>
                    <span>${price.toFixed(2)} ${currentCurrency}</span>
                    <button onclick="removeFromCart(${index})" aria-label="إزالة ${planTitle} من السلة">Remove</button>
                `;
                elements.cartItems.appendChild(itemElement);
            });
        }
        elements.cartTotal.textContent = `Total: ${total.toFixed(2)} ${currentCurrency}`;
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Update cart error:', error);
    }
}

function removeFromCart(index) {
    try {
        cart.splice(index, 1);
        cartCount--;
        elements.cartCounter.textContent = cartCount;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        syncCartToBackend();
        showNotification(mockBackend.translations[currentLanguage].removeItemMessage, 'info');
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Remove from cart error:', error);
    }
}

function clearCart() {
    try {
        cart = [];
        cartCount = 0;
        elements.cartCounter.textContent = cartCount;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        syncCartToBackend();
        showNotification(mockBackend.translations[currentLanguage].clearCartMessage, 'info');
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Clear cart error:', error);
    }
}

function syncCartToBackend() {
    // Placeholder for backend API call
    console.log('Syncing cart to backend:', cart);
}

function showCart() {
    updateCart();
    elements.cartModal.style.display = 'block';
}

function closeCart() {
    elements.cartModal.style.display = 'none';
}

function proceedToCheckout() {
    try {
        if (!cart.length) {
            showNotification(mockBackend.translations[currentLanguage].emptyCartMessage, 'error');
            return;
        }
        if (!localStorage.getItem('currentUser')) {
            showNotification(mockBackend.translations[currentLanguage].loginMessage, 'error');
            setTimeout(() => window.location.href = 'login.html', 1000);
            return;
        }
        window.location.href = 'checkout.html';
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Checkout error:', error);
    }
}

// Authentication
function showLogin() {
    window.location.href = 'login.html?forgot=false';
}

function logout() {
    try {
        localStorage.removeItem('currentUser');
        updateUserStatus();
        showNotification(mockBackend.translations[currentLanguage].logoutMessage, 'success');
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Logout error:', error);
    }
}

function updateUserStatus() {
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            elements.loginBtn.style.display = 'none';
            elements.logoutBtn.style.display = 'inline-block';
            elements.userGreeting.textContent = `Hello, ${currentUser.email}`;
        } else {
            elements.loginBtn.style.display = 'inline-block';
            elements.logoutBtn.style.display = 'none';
            elements.userGreeting.textContent = '';
        }
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Update user status error:', error);
    }
}

// Search and Filter
function searchPlans() {
    try {
        const query = elements.searchBar.value.toLowerCase();
        document.querySelectorAll('.plan').forEach(plan => {
            const title = plan.querySelector('h4').textContent.toLowerCase();
            plan.style.display = title.includes(query) ? 'block' : 'none';
        });
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Search plans error:', error);
    }
}

function filterPlans() {
    try {
        const selected = Array.from(elements.filterSelect.selectedOptions).map(opt => opt.value);
        document.querySelectorAll('.category').forEach(cat => {
            cat.style.display = selected.includes('all') || selected.includes(cat.dataset.category) ? 'block' : 'none';
        });
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Filter plans error:', error);
    }
}

// Settings
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? '' : 'dark');
    document.getElementById('theme-toggle').textContent = content[currentLanguage].themeToggle;
}

function toggleLanguage(lang) {
    try {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.getElementById('html-root').setAttribute('lang', lang);
        document.getElementById('html-root').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        updateContent();
        updateCart();
        showNotification(`Language changed to ${lang === 'ar' ? 'العربية' : 'English'}`, 'info');
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Toggle language error:', error);
    }
}

function toggleCurrency(currency) {
    try {
        currentCurrency = currency;
        localStorage.setItem('currency', currency);
        updatePrices();
        updateCart();
        showNotification(`Currency changed to ${currency}`, 'info');
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Toggle currency error:', error);
    }
}

function toggleSettings(value) {
    try {
        [currentLanguage, currentCurrency] = value.split('-');
        localStorage.setItem('language', currentLanguage);
        localStorage.setItem('currency', currentCurrency);
        localStorage.setItem('settings', value);
        document.getElementById('language-toggle').value = currentLanguage;
        document.getElementById('currency-toggle').value = currentCurrency;
        document.getElementById('html-root').setAttribute('lang', currentLanguage);
        document.getElementById('html-root').setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
        updateContent();
        updatePrices();
        updateCart();
        showNotification(`Settings updated to ${value}`, 'info');
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Toggle settings error:', error);
    }
}

function updateContent() {
    try {
        const els = {
            'page-title': 'pageTitle',
            'header-title': 'headerTitle',
            'theme-toggle': 'themeToggle',
            'login-btn': 'loginBtn',
            'logout-btn': 'logoutBtn',
            'hero-title': 'heroTitle',
            'hero-subtitle': 'heroSubtitle',
            'hero-btn': 'heroBtn',
            'filter-label': 'filterLabel',
            'netflix-title': 'netflixTitle',
            'netflix-month-label': 'netflixMonthLabel',
            'netflix-month-title': 'netflixMonthTitle',
            'netflix-month-desc': 'netflixMonthDesc',
            'netflix-month-btn': 'netflixMonthBtn',
            'netflix-3months-label': 'netflix3MonthsLabel',
            'netflix-3months-title': 'netflix3MonthsTitle',
            'netflix-3months-desc': 'netflix3MonthsDesc',
            'netflix-3months-btn': 'netflix3MonthsBtn',
            'netflix-year-label': 'netflixYearLabel',
            'netflix-year-title': 'netflixYearTitle',
            'netflix-year-desc': 'netflixYearDesc',
            'netflix-year-btn': 'netflixYearBtn',
            'spotify-title': 'spotifyTitle',
            'spotify-month-label': 'spotifyMonthLabel',
            'spotify-month-title': 'spotifyMonthTitle',
            'spotify-month-desc': 'spotifyMonthDesc',
            'spotify-month-btn': 'spotifyMonthBtn',
            'spotify-6months-label': 'spotify6MonthsLabel',
            'spotify-6months-title': 'spotify6MonthsTitle',
            'spotify-6months-desc': 'spotify6MonthsDesc',
            'spotify-6months-btn': 'spotify6MonthsBtn',
            'spotify-year-label': 'spotifyYearLabel',
            'spotify-year-title': 'spotifyYearTitle',
            'spotify-year-desc': 'spotifyYearDesc',
            'spotify-year-btn': 'spotifyYearBtn',
            'disney-title': 'disneyTitle',
            'disney-month-label': 'disneyMonthLabel',
            'disney-month-title': 'disneyMonthTitle',
            'disney-month-desc': 'disneyMonthDesc',
            'disney-month-btn': 'disneyMonthBtn',
            'disney-6months-label': 'disney6MonthsLabel',
            'disney-6months-title': 'disney6MonthsTitle',
            'disney-6months-desc': 'disney6MonthsDesc',
            'disney-6months-btn': 'disney6MonthsBtn',
            'disney-year-label': 'disneyYearLabel',
            'disney-year-title': 'disneyYearTitle',
            'disney-year-desc': 'disneyYearDesc',
            'disney-year-btn': 'disneyYearBtn',
            'youtube-title': 'youtubeTitle',
            'youtube-month-label': 'youtubeMonthLabel',
            'youtube-month-title': 'youtubeMonthTitle',
            'youtube-month-desc': 'youtubeMonthDesc',
            'youtube-month-btn': 'youtubeMonthBtn',
            'youtube-3months-label': 'youtube3MonthsLabel',
            'youtube-3months-title': 'youtube3MonthsTitle',
            'youtube-3months-desc': 'youtube3MonthsDesc',
            'youtube-3months-btn': 'youtube3MonthsBtn',
            'youtube-year-label': 'youtubeYearLabel',
            'youtube-year-title': 'youtubeYearTitle',
            'youtube-year-desc': 'youtubeYearDesc',
            'youtube-year-btn': 'youtubeYearBtn',
            'bundle-title': 'bundleTitle',
            'bundle-family-label': 'bundleFamilyLabel',
            'bundle-family-title': 'bundleFamilyTitle',
            'bundle-family-desc': 'bundleFamilyDesc',
            'bundle-family-btn': 'bundleFamilyBtn',
            'bundle-premium-label': 'bundlePremiumLabel',
            'bundle-premium-title': 'bundlePremiumTitle',
            'bundle-premium-desc': 'bundlePremiumDesc',
            'bundle-premium-btn': 'bundlePremiumBtn',
            'bundle-economy-label': 'bundleEconomyLabel',
            'bundle-economy-title': 'bundleEconomyTitle',
            'bundle-economy-desc': 'bundleEconomyDesc',
            'bundle-economy-btn': 'bundleEconomyBtn',
            'testimonials-title': 'testimonialsTitle',
            'testimonial-1-text': 'testimonial1Text',
            'testimonial-1-name': 'testimonial1Name',
            'testimonial-2-text': 'testimonial2Text',
            'testimonial-2-name': 'testimonial2Name',
            'testimonial-3-text': 'testimonial3Text',
            'testimonial-3-name': 'testimonial3Name',
            'testimonial-4-text': 'testimonial4Text',
            'testimonial-4-name': 'testimonial4Name',
            'testimonial-5-text': 'testimonial5Text',
            'testimonial-5-name': 'testimonial5Name',
            'footer-contact': 'footerContact',
            'footer-social': 'footerSocial',
            'footer-copyright': 'footerCopyright',
            'cart-title': 'cartTitle',
            'checkout-btn': 'checkoutBtn',
            'clear-cart-btn': 'clearCartBtn'
        };
        Object.keys(els).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = content[currentLanguage][els[id]] || '';
        });
        document.getElementById('search-bar').placeholder = mockBackend.translations[currentLanguage].searchPlaceholder;
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Update content error:', error);
    }
}

function updatePrices() {
    try {
        document.querySelectorAll('.price').forEach(el => {
            el.classList.add('loading');
            setTimeout(() => {
                const priceSar = parseFloat(el.getAttribute('data-price-sar'));
                el.textContent = `${(currentCurrency === 'SAR' ? priceSar : priceSar * exchangeRates[currentCurrency]).toFixed(2)} ${currentCurrency}`;
                el.classList.remove('loading');
            }, 500);
        });
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Update prices error:', error);
    }
}

// Testimonials
function scrollTestimonials(direction) {
    try {
        const list = document.querySelector('.testimonial-list');
        const step = 320;
        list.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Scroll testimonials error:', error);
    }
}

// Newsletter
function subscribeNewsletter(event) {
    try {
        event.preventDefault();
        const email = elements.newsletterEmail.value;
        if (!email) {
            showNotification('Please enter a valid email.', 'error');
            return;
        }
        // Placeholder for backend API call
        console.log('Subscribing newsletter:', email);
        showNotification(mockBackend.translations[currentLanguage].newsletterSuccess, 'success');
        elements.newsletterEmail.value = '';
    } catch (error) {
        showNotification(mockBackend.translations[currentLanguage].networkError, 'error');
        console.error('Newsletter subscription error:', error);
    }
}

// Notifications
function showNotification(message, type) {
    try {
        elements.notificationMessage.textContent = message;
        elements.notificationPopup.className = `notification-popup ${type}`;
        elements.notificationPopup.classList.add('show');
        setTimeout(closeNotification, 3000);
    } catch (error) {
        console.error('Show notification error:', error);
    }
}

function closeNotification() {
    elements.notificationPopup.classList.remove('show');
}