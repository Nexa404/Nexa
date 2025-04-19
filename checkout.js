const content = {
    ar: {
        pageTitle: "Accessflex - الدفع",
        headerTitle: "Accessflex",
        themeToggle: "الوضع الداكن",
        checkoutTitle: "إتمام عملية الدفع",
        cartSummaryTitle: "ملخص السلة",
        paymentFormTitle: "تفاصيل الدفع",
        paymentMethodLabel: "طريقة الدفع",
        confirmPaymentBtn: "تأكيد الدفع",
        nameLabel: "الاسم الكامل",
        emailLabel: "البريد الإلكتروني",
        cardNumberLabel: "رقم البطاقة",
        expiryLabel: "تاريخ الانتهاء",
        cvvLabel: "CVV",
        footerContact: 'تواصل معنا: <a href="mailto:support@accessflex.com">support@accessflex.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'تابعنا: <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a> | <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a> | <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>',
        footerCopyright: "© 2025 Accessflex. جميع الحقوق محفوظة.",
        emptyCartMessage: "السلة فارغة الآن!",
        paymentSuccessMessage: "تمت عملية الدفع بنجاح! شكراً لشرائك.",
        paymentErrorMessage: "يرجى ملء جميع الحقول المطلوبة!",
        // Plan titles
        netflixMonthTitle: "عرض شهر",
        netflix3MonthsTitle: "عرض 3 أشهر",
        netflixYearTitle: "عرض سنة",
        spotifyMonthTitle: "عرض شهر",
        spotify6MonthsTitle: "عرض 6 أشهر",
        spotifyYearTitle: "عرض سنة",
        disneyMonthTitle: "عرض شهر",
        disney6MonthsTitle: "عرض 6 أشهر",
        disneyYearTitle: "عرض سنة",
        youtubeMonthTitle: "عرض شهر",
        youtube3MonthsTitle: "عرض 3 أشهر",
        youtubeYearTitle: "عرض سنة",
        bundleFamilyTitle: "باقة عائلية",
        bundlePremiumTitle: "باقة فاخرة",
        bundleEconomyTitle: "باقة اقتصادية"
    },
    en: {
        pageTitle: "Accessflex - Checkout",
        headerTitle: "Accessflex",
        themeToggle: "Dark Mode",
        checkoutTitle: "Complete Your Purchase",
        cartSummaryTitle: "Cart Summary",
        paymentFormTitle: "Payment Details",
        paymentMethodLabel: "Payment Method",
        confirmPaymentBtn: "Confirm Payment",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        cardNumberLabel: "Card Number",
        expiryLabel: "Expiry Date",
        cvvLabel: "CVV",
        footerContact: 'Contact Us: <a href="mailto:support@accessflex.com">support@accessflex.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'Follow Us: <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a> | <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a> | <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>',
        footerCopyright: "© 2025 Accessflex. All Rights Reserved.",
        emptyCartMessage: "Cart is now empty!",
        paymentSuccessMessage: "Payment successful! Thank you for your purchase.",
        paymentErrorMessage: "Please fill all required fields!",
        // Plan titles
        netflixMonthTitle: "1 Month Plan",
        netflix3MonthsTitle: "3 Months Plan",
        netflixYearTitle: "1 Year Plan",
        spotifyMonthTitle: "1 Month Plan",
        spotify6MonthsTitle: "6 Months Plan",
        spotifyYearTitle: "1 Year Plan",
        disneyMonthTitle: "1 Month Plan",
        disney6MonthsTitle: "6 Months Plan",
        disneyYearTitle: "1 Year Plan",
        youtubeMonthTitle: "1 Month Plan",
        youtube3MonthsTitle: "3 Months Plan",
        youtubeYearTitle: "1 Year Plan",
        bundleFamilyTitle: "Family Bundle",
        bundlePremiumTitle: "Premium Bundle",
        bundleEconomyTitle: "Economy Bundle"
    }
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCurrency = localStorage.getItem('currency') || 'SAR';
let currentLanguage = localStorage.getItem('language') || 'ar';
const exchangeRates = {
    SAR: 1,
    EGP: 12.5,
    AED: 0.98
};

const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const paymentForm = document.getElementById('payment-form');
const notificationPopup = document.getElementById('notification-popup');
const notificationMessage = document.getElementById('notification-message');

function updateCart() {
    if (!cartItems || !cartTotal) {
        console.error('Cart elements not found');
        return;
    }
    cartItems.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItems.innerHTML = `<p>${content[currentLanguage].emptyCartMessage}</p>`;
        cartTotal.textContent = `${currentLanguage === 'ar' ? 'المجموع' : 'Total'}: 0.00 ${currentCurrency}`;
        return;
    }
    cart.forEach((item, index) => {
        const price = currentCurrency === 'SAR' ? item.priceSar : item.priceSar * exchangeRates[currentCurrency];
        total += price;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        const planTitle = content[currentLanguage][`${item.planId}Title`] || item.planId;
        itemElement.innerHTML = `
            <span>${planTitle}</span>
            <span>${price.toFixed(2)} ${currentCurrency}</span>
            <button onclick="removeFromCart(${index})">${currentLanguage === 'ar' ? 'إزالة' : 'Remove'}</button>
        `;
        cartItems.appendChild(itemElement);
    });
    cartTotal.textContent = `${currentLanguage === 'ar' ? 'المجموع' : 'Total'}: ${total.toFixed(2)} ${currentCurrency}`;
}

function removeFromCart(index) {
    if (index < 0 || index >= cart.length) {
        console.error('Invalid cart index');
        return;
    }
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    if (cart.length === 0) {
        showNotification(content[currentLanguage].emptyCartMessage, 'info');
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeSwitch = document.getElementById('theme-switch');
    if (!themeToggle || !themeSwitch) {
        console.error('Theme toggle elements not found');
        return;
    }
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        themeToggle.textContent = content[currentLanguage].themeToggle;
        themeSwitch.checked = false;
    } else {
        html.setAttribute('data-theme', 'dark');
        themeToggle.textContent = currentLanguage === 'ar' ? 'الوضع الفاتح' : 'Light Mode';
        themeSwitch.checked = true;
    }
}

function toggleLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    const html = document.getElementById('html-root');
    if (!html) {
        console.error('HTML root element not found');
        return;
    }
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const elements = {
        'page-title': 'pageTitle',
        'header-title': 'headerTitle',
        'theme-toggle': 'themeToggle',
        'checkout-title': 'checkoutTitle',
        'cart-summary-title': 'cartSummaryTitle',
        'payment-form-title': 'paymentFormTitle',
        'payment-method-label': 'paymentMethodLabel',
        'confirm-payment-btn': 'confirmPaymentBtn',
        'footer-contact': 'footerContact',
        'footer-social': 'footerSocial',
        'footer-copyright': 'footerCopyright'
    };

    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = content[lang][elements[id]];
        }
    });

    document.querySelector('label[for="name"]').innerHTML = content[lang].nameLabel + ' <span class="required">*</span>';
    document.querySelector('label[for="email"]').innerHTML = content[lang].emailLabel + ' <span class="required">*</span>';
    document.querySelector('label[for="card-number"]').innerHTML = content[lang].cardNumberLabel + ' <span class="required">*</span>';
    document.querySelector('label[for="expiry"]').innerHTML = content[lang].expiryLabel + ' <span class="required">*</span>';
    document.querySelector('label[for="cvv"]').innerHTML = content[lang].cvvLabel + ' <span class="required">*</span>';

    updateCart();

    const langSelect = document.getElementById('language-toggle');
    if (langSelect) langSelect.value = lang;
}

function toggleCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('currency', currency);
    updateCart();
}

function showNotification(message, type = 'info') {
    if (!notificationPopup || !notificationMessage) {
        console.error('Notification elements not found');
        return;
    }
    notificationMessage.textContent = message;
    notificationPopup.className = `notification-popup ${type}`;
    notificationPopup.style.display = 'flex';
    setTimeout(() => {
        closeNotification();
    }, 3000);
}

function closeNotification() {
    if (notificationPopup) {
        notificationPopup.style.display = 'none';
    }
}

function handlePaymentSubmission(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    if (!name || !email || !cardNumber || !expiry || !cvv || !paymentMethod) {
        showNotification(content[currentLanguage].paymentErrorMessage, 'error');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        showNotification(currentLanguage === 'ar' ? 'البريد الإلكتروني غير صالح!' : 'Invalid email address!', 'error');
        return;
    }

    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
        showNotification(currentLanguage === 'ar' ? 'رقم البطاقة غير صالح!' : 'Invalid card number!', 'error');
        return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        showNotification(currentLanguage === 'ar' ? 'تاريخ الانتهاء غير صالح!' : 'Invalid expiry date!', 'error');
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        showNotification(currentLanguage === 'ar' ? 'رمز CVV غير صالح!' : 'Invalid CVV!', 'error');
        return;
    }

    setTimeout(() => {
        showNotification(content[currentLanguage].paymentSuccessMessage, 'success');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        toggleLanguage(currentLanguage);
        toggleCurrency(currentCurrency);
        updateCart();

        paymentForm.addEventListener('submit', handlePaymentSubmission);

        const langSelect = document.getElementById('language-toggle');
        const currencySelect = document.getElementById('currency-toggle');
        const themeSwitch = document.getElementById('theme-switch');
        if (langSelect) langSelect.value = currentLanguage;
        if (currencySelect) currencySelect.value = currentCurrency;
        if (themeSwitch && document.documentElement.getAttribute('data-theme') === 'dark') {
            themeSwitch.checked = true;
        }
    } catch (error) {
        console.error('Initialization error:', error);
        showNotification('An error occurred while loading the page.', 'error');
    }
});