/**
 * Internationalization (i18n) Module
 * Supports Bulgarian (bg) and English (en)
 * Course: Web Technologies 25ed
 */

const translations = {
    bg: {
        // Page metadata
        pageTitle: "Prompt Engineering и Web Разработка с ChatGPT",
        
        // Hero section
        heroSubtitle: "Изследване на ролята на AI-асистираното програмиране в модерната уеб разработка",
        heroMeta: "Уеб Технологии, 25 издание • Зимен семестър 2025-2026",
        scrollDown: "Разгледай",
        
        // Navigation
        navIntro: "Въведение",
        navMain: "Основна част",
        navConclusion: "Заключение",
        navCitations: "Литература",
        
        // Abstract
        abstractTitle: "Резюме",
        abstractText: `Този реферат изследва интеграцията на Prompt Engineering и ChatGPT в процеса на уеб разработка.
        Разглеждат се основните техники за създаване на ефективни промпти, практическите приложения в генериране на HTML, CSS,
        JavaScript и backend код, както и етичните и професионални предизвикателства пред съвременните разработчици. Особено внимание
        се отделя на рисковете от некритичното използване на AI-генериран код и необходимостта от човешки преглед и валидация.`,
        
        // Introduction
        introTitle: "1. Въведение",
        
        // Main content
        mainTitle: "2. Основна част",
        
        // Conclusion
        conclusionTitle: "3. Заключение",
        
        // Citations
        citationsTitle: "Цитирана литература",
        
        // Lists
        listsTitle: "Приложения",
        codeListTitle: "Списък с примерен програмен код",
        figureListTitle: "Списък с фигури",
        tableListTitle: "Списък с таблици",
        
        // Figures
        figure1Caption: "Илюстрация на процеса на Prompt Engineering",
        figure2Caption: "Визуализация на Chain-of-Thought промптинг",
        figure3Caption: "Сравнителна таблица на техниките за промптинг",
        figure4Caption: "Архитектура на трансформерен модел",
        
        // Footer
        footerText: "&copy; 2025 Факултет по математика и информатика, СУ \"Св. Климент Охридски\"",
        footerCourse: "Курс по Уеб технологии, 25 издание (зимен семестър 2025-2026)",
        
        // Sections titles
        whatIsPromptEngineering: "2.1. Какво е Prompt Engineering?",
        promptTechniques: "2.2. Основни техники и подходи в Prompt Engineering",
        webDevelopment: "2.3. ChatGPT и Prompt Engineering в Web разработката",
        useCases: "2.4. Практически приложения и казуси",
        risks: "2.5. Рискове и ограничения",
        ethics: "2.6. Етична и професионална отговорност",
        future: "2.7. Бъдещето на професията",

        // Section bodies (modularized)
        abstractBody: `Prompt Engineering и ChatGPT трансформират уеб разработката, като ускоряват създаването на прототипи,
        автоматизират рутинни задачи и подпомагат архитектурните решения, но изискват отговорно използване и човешка валидация.`,
        marketingBody: `В контекста на уеб присъствие, AI подпомага маркетинга чрез генериране на SEO brief-ове, метаданни и структурирани данни (schema.org),
        A/B варианти за заглавия и CTA, и alt-текстове за достъпност. Prompt Engineering е ключово за избягване на нискокачествени текстове и спазване на E-E-A-T.`,
        conclusionBody: `AI инструментите са мощни помощници, не заместители. Те са най-ефективни в ръцете на разработчици с дълбоко разбиране,
        които правят code review и задълбочено тестване. Балансиран подход: използвайте AI за boilerplate, винаги валидирайте сигурността,
        учете чрез AI, поддържайте критично мислене и се фокусирайте върху архитектурата и стойността за потребителя.`,
        
        // Code examples
        codeExample1Title: "Пример 1. Базов промпт за генериране на HTML форма",
        codeExample2Title: "Пример 2. Усъвършенстван промпт с контекст",
        codeExample3Title: "Пример 3. Chain-of-Thought промптинг за сложна задача",
        codeExample4Title: "Пример 4. Few-Shot промптинг с примери",
        
        // Tables
        table1Caption: "Таблица 1. Сравнение на техники за промптинг",
        table2Caption: "Таблица 2. Предимства и недостатъци на AI-асистирано програмиране",
    },
    
    en: {
        // Page metadata
        pageTitle: "Prompt Engineering and Web Development with ChatGPT",
        
        // Hero section
        heroSubtitle: "Exploring the role of AI-assisted programming in modern web development",
        heroMeta: "Web Technologies, 25th Edition • Winter Semester 2025-2026",
        scrollDown: "Explore",
        
        // Navigation
        navIntro: "Introduction",
        navMain: "Main Content",
        navConclusion: "Conclusion",
        navCitations: "References",
        
        // Abstract
        abstractTitle: "Abstract",
        abstractText: `This paper explores the integration of Prompt Engineering and ChatGPT in the web development process.
        It examines the main techniques for creating effective prompts, practical applications in generating HTML, CSS,
        JavaScript and backend code, as well as ethical and professional challenges for modern developers. Special attention
        is paid to the risks of uncritical use of AI-generated code and the need for human review and validation.`,
        
        // Introduction
        introTitle: "1. Introduction",
        
        // Main content
        mainTitle: "2. Main Content",
        
        // Conclusion
        conclusionTitle: "3. Conclusion",
        
        // Citations
        citationsTitle: "References",
        
        // Lists
        listsTitle: "Appendices",
        codeListTitle: "List of Code Examples",
        figureListTitle: "List of Figures",
        tableListTitle: "List of Tables",
        
        // Figures
        figure1Caption: "Illustration of the Prompt Engineering process",
        figure2Caption: "Visualization of Chain-of-Thought prompting",
        figure3Caption: "Comparative table of prompting techniques",
        figure4Caption: "Transformer model architecture",
        
        // Footer
        footerText: "&copy; 2025 Faculty of Mathematics and Informatics, Sofia University \"St. Kliment Ohridski\"",
        footerCourse: "Web Technologies Course, 25th edition (Winter Semester 2025-2026)",
        
        // Sections titles
        whatIsPromptEngineering: "2.1. What is Prompt Engineering?",
        promptTechniques: "2.2. Main Techniques and Approaches in Prompt Engineering",
        webDevelopment: "2.3. ChatGPT and Prompt Engineering in Web Development",
        useCases: "2.4. Practical Applications and Case Studies",
        risks: "2.5. Risks and Limitations",
        ethics: "2.6. Ethical and Professional Responsibility",
        future: "2.7. The Future of the Profession",

        // Section bodies (modularized)
        abstractBody: `Prompt Engineering and ChatGPT transform web development by accelerating prototyping,
        automating routine tasks, and supporting architectural decisions, but require responsible use and human validation.`,
        marketingBody: `In web presence, AI assists marketing via SEO briefs, metadata and structured data (schema.org),
        A/B headline and CTA variants, and accessibility alt-text generation. Prompt Engineering is key to avoid low-quality copy and adhere to E-E-A-T.`,
        conclusionBody: `AI tools are powerful assistants, not replacements. They are most effective in the hands of developers with deep understanding,
        who perform code reviews and thorough testing. Balanced approach: use AI for boilerplate, always validate security,
        learn through AI, maintain critical thinking, and focus on architecture and user value.`,
        
        // Code examples
        codeExample1Title: "Example 1. Basic prompt for generating HTML form",
        codeExample2Title: "Example 2. Advanced prompt with context",
        codeExample3Title: "Example 3. Chain-of-Thought prompting for complex task",
        codeExample4Title: "Example 4. Few-Shot prompting with examples",
        
        // Tables
        table1Caption: "Table 1. Comparison of prompting techniques",
        table2Caption: "Table 2. Advantages and disadvantages of AI-assisted programming",
    }
};

let currentLanguage = 'bg';

/**
 * Switch language
 */
function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not supported`);
        return;
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    updateTranslations();
    
    // Update language buttons
    updateLanguageButtons(lang);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    console.log(`Language switched to: ${lang}`);
}

/**
 * Update all translatable elements
 */
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation) {
            // Check if element should use innerHTML or textContent
            if (key.includes('Text') || key.includes('Caption') || key.includes('footer')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

/**
 * Get translation for a key
 */
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value || translations['bg'][key] || key;
}

/**
 * Update language button states
 */
function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    
    buttons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        if (lang === activeLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

/**
 * Initialize i18n on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('language') || 'bg';
    switchLanguage(savedLang);
    
    console.log('✓ i18n initialized');
});

/**
 * Make switchLanguage available globally
 */
window.switchLanguage = switchLanguage;
window.getTranslation = getTranslation;
