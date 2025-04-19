const content = {
    ar: {
        pageTitle: "Nexa - إنشاء حساب",
        headerTitle: "Nexa",
        themeToggle: "الوضع الداكن",
        registerTitle: "إنشاء حساب",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        confirmPasswordLabel: "تأكيد كلمة المرور",
        registerSubmitBtn: "إنشاء حساب",
        loginLink: 'لديك حساب؟ <a href="login.html">تسجيل الدخول</a>',
        footerContact: 'تواصل معنا: <a href="mailto:support@nexa.com">support@nexa.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'تابعنا: <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a> <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a> <a href="#" aria-label="إنستغرام"><i class="fab fa-instagram"></i></a>',
        footerCopyright: "© 2025 Nexa. جميع الحقوق محفوظة.",
        registerSuccessMessage: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.",
        registerErrorMessage: "يرجى ملء جميع الحقول المطلوبة!",
        invalidEmailMessage: "البريد الإلكتروني غير صالح!",
        passwordMismatchMessage: "كلمة المرور وتأكيدها غير متطابقتين!",
        invalidPasswordMessage: "كلمة المرور يجب أن تكون 8 أحرف على الأقل وتحتوي على رقم وحرف خاص!",
        emailExistsMessage: "البريد الإلكتروني مسجل مسبقاً!"
    },
    en: {
        pageTitle: "Nexa - Register",
        headerTitle: "Nexa",
        themeToggle: "Dark Mode",
        registerTitle: "Create Account",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        registerSubmitBtn: "Create Account",
        loginLink: 'Already have an account? <a href="login.html">Login</a>',
        footerContact: 'Contact Us: <a href="mailto:support@nexa.com">support@nexa.com</a> | <a href="tel:+201142540575">+201142540575</a>',
        footerSocial: 'Follow Us: <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a> <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a> <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>',
        footerCopyright: "© 2025 Nexa. All Rights Reserved.",
        registerSuccessMessage: "Account created successfully! Please login.",
        registerErrorMessage: "Please fill all required fields!",
        invalidEmailMessage: "Invalid email address!",
        passwordMismatchMessage: "Password and confirmation do not match!",
        invalidPasswordMessage: "Password must be at least 8 characters and include a number and special character!",
        emailExistsMessage: "Email is already registered!"
    }
};

let currentLanguage = localStorage.getItem('language') || 'ar';
const notificationBubble = document.getElementById('notification-bubble');
const notificationMessage = document.getElementById('notification-message');
const registerForm = document.getElementById('register-form');
const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

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
        'register-title': 'registerTitle',
        'register-submit-btn': 'registerSubmitBtn',
        'login-link': 'loginLink',
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
    document.querySelector('label[for="confirm-password"]').innerHTML = content[lang].confirmPasswordLabel + ' <span class="required" aria-hidden="true">*</span>';

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

function evaluatePasswordStrength(password) {
    let strength = 'weak';
    if (password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = 'strong';
    } else if (password.length >= 6) {
        strength = 'medium';
    }
    passwordStrength.className = `password-strength ${strength}`;
}

function handleRegisterSubmission(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (!email || !password || !confirmPassword) {
        showNotification(content[currentLanguage].registerErrorMessage, 'error');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification(content[currentLanguage].invalidEmailMessage, 'error');
        return;
    }

    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        showNotification(content[currentLanguage].invalidPasswordMessage, 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification(content[currentLanguage].passwordMismatchMessage, 'error');
        return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        showNotification(content[currentLanguage].emailExistsMessage, 'error');
        return;
    }

    // Save new user
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    showNotification(content[currentLanguage].registerSuccessMessage, 'success');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Apply saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-switch').checked = true;
            document.getElementById('theme-toggle').textContent = currentLanguage === 'ar' ? 'الوضع الفاتح' : 'Light Mode';
        }

        // Apply language
        toggleLanguage(currentLanguage);

        // Bind register form
        if (registerForm) {
            registerForm.addEventListener('submit', handleRegisterSubmission);
        }

        // Password strength indicator
        if (passwordInput) {
            passwordInput.addEventListener('input', () => {
                evaluatePasswordStrength(passwordInput.value);
            });
        }

        // Ensure language select reflects current language
        const langSelect = document.getElementById('language-toggle');
        if (langSelect) langSelect.value = currentLanguage;

    } catch (error) {
        console.error('Initialization error:', error);
        showNotification(currentLanguage === 'ar' ? 'حدث خطأ أثناء تحميل الصفحة.' : 'An error occurred while loading the page.', 'error');
    }
});