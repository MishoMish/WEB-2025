// i18n/translations.js
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            title: 'Prompt Engineering',
            subtitle: 'AI-Powered Web Development'
        },
        footer: {
            copyright: '(c) 2025 All rights reserved'
        }
    },
    bg: {
        nav: {
            home: 'Начало',
            about: 'За нас',
            contact: 'Контакт'
        },
        hero: {
            title: 'Промпт Инженеринг',
            subtitle: 'Уеб разработка с AI'
        },
        footer: {
            copyright: '(c) 2025 Всички права запазени'
        }
    }
};

// Simple i18n function
function t(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

// Usage: t('bg', 'nav.home') => 'Начало'
