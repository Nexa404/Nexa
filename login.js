const content = {
    ar: {
        pageTitle: "Accessflex - تسجيل الدخول",
        headerTitle: "Accessflex",
        themeToggle: "الوضع الداكن",
        loginTitle: "تسجيل الدخول",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        loginSubmitBtn: "تسجيل الدخول",
        registerLink: 'ليس لديك حساب؟ <a href="register.html">إنشاء حساب</a>',
        footerContact: 'تواصل معنا: <a href="mailto:support@accessflex.com">support@accessflex.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'تابعنا: <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a> <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a> <a href="#" aria-label="إنستغرام"><i class="fab fa-instagram"></i></a>',
        footerCopyright: "© 2025 Accessflex. جميع الحقوق محفوظة.",
        loginSuccessMessage: "تم تسجيل الدخول بنجاح!",
        loginErrorMessage: "يرجى ملء جميع الحقول المطلوبة!",
        invalidEmailMessage: "البريد الإلكتروني غير صالح!",
        invalidPasswordMessage: "كلمة المرور غير صحيحة أو الحساب غير موجود!",
        alreadyLoggedInMessage: "أنت بالفعل مسجل الدخول!"
    },
    en: {
        pageTitle: "Accessflex - Login",
        headerTitle: "Accessflex",
        themeToggle: "Dark Mode",
        loginTitle: "Login",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        loginSubmitBtn: "Login",
        registerLink: 'Don’t have an account? <a href="register.html">Create one</a>',
        footerContact: 'Contact Us: <a href="mailto:support@accessflex.com">support@accessflex.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'Follow Us: <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a> <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a> <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>',
        footerCopyright: "© 2025 Accessflex. All Rights Reserved.",
        loginSuccessMessage: "Login successful!",
        loginErrorMessage: "Please fill all required fields!",
        invalidEmailMessage: "Invalid email address!",
        invalidPasswordMessage: "Incorrect password or account does not exist!",
        alreadyLoggedInMessage: "You are already logged in!"
    }
};

let currentLanguage = localStorage.getItem('language') || 'ar';
const notificationBubble = document.getElementById('notification-bubble');
const notificationMessage = document.getElementById('notification-message');
const loginForm = document.getElementById('login-form');

function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeSwitch = document.getElementById('theme-switch');
    
    if (!themeToggle || !themeSwitch) {
        console.error('Theme toggle elements not found');
        return;
    }

    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? '' : 'dark');
    themeToggle.textContent = isDark ? content[currentLanguage].themeToggle : (currentLanguage === 'ar' ? 'الوضع الفاتح' : 'Light Mode');
    themeSwitch.checked = !isDark;
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
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
        'login-title': 'loginTitle',
        'login-submit-btn': 'loginSubmitBtn',
        'register-link': 'registerLink',
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

    document.querySelector('label[for="email"]').innerHTML = content[lang].emailLabel + ' <span class="required" aria-hidden="true">*</span>';
    document.querySelector('label[for="password"]').innerHTML = content[lang].passwordLabel + ' <span class="required" aria-hidden="true">*</span>';

    const langSelect = document.getElementById('language-toggle');
    if (langSelect) langSelect.value = lang;

    // Update theme toggle text for dark mode
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.getElementById('theme-toggle').textContent = lang === 'ar' ? 'الوضع الفاتح' : 'Light Mode';
    }
}

function showNotification(message, type = 'info') {
    if (!notificationBubble || !notificationMessage) {
        console.error('Notification elements not found');
        return;
    }

    notificationMessage.textContent = message;
    notificationBubble.className = `notification-bubble ${type}`;
    notificationBubble.style.display = 'flex';
    
    // Ensure notification is accessible
    notificationBubble.setAttribute('aria-live', 'assertive');
    
    setTimeout(() => {
        closeNotification();
    }, 4000);
}

function closeNotification() {
    if (notificationBubble) {
        notificationBubble.style.display = 'none';
        notificationBubble.setAttribute('aria-live', 'off');
    }
}

function handleLoginSubmission(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        showNotification(content[currentLanguage].loginErrorMessage, 'error');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification(content[currentLanguage].invalidEmailMessage, 'error');
        return;
    }

    // Check if user is already logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showNotification(content[currentLanguage].alreadyLoggedInMessage, 'info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!user) {
        showNotification(content[currentLanguage].invalidPasswordMessage, 'error');
        return;
    }

    // Successful login
    localStorage.setItem('currentUser', JSON.stringify({ email }));
    showNotification(content[currentLanguage].loginSuccessMessage, 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Simulate user registration for testing (remove in production with real backend)
function initializeTestUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (!users.length) {
        users.push({
            email: 'test@accessflex.com',
            password: 'password123'
        });
        localStorage.setItem('users', JSON.stringify(users));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize test users (for demo purposes)
        initializeTestUsers();

        // Apply saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-switch').checked = true;
            document.getElementById('theme-toggle').textContent = currentLanguage === 'ar' ? 'الوضع الفاتح' : 'Light Mode';
        }

        // Apply language
        toggleLanguage(currentLanguage);

        // Bind login form
        if (loginForm) {
            loginForm.addEventListener('submit', handleLoginSubmission);
        }

        // Ensure language select reflects current language
        const langSelect = document.getElementById('language-toggle');
        if (langSelect) langSelect.value = currentLanguage;

    } catch (error) {
        console.error('Initialization error:', error);
        showNotification(currentLanguage === 'ar' ? 'حدث خطأ أثناء تحميل الصفحة.' : 'An error occurred while loading the page.', 'error');
    }
});