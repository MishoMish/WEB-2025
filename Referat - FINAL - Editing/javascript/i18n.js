/**
 * Internationalization (i18n) System
 * Supports Bulgarian (bg) and English (en) languages
 */

const translations = {
    bg: {
        // Meta and navigation
        pageTitle: "Prompt Engineering и Web разработка с ChatGPT",
        themeLabel: "Тема",
        heroSubtitle: "Курс: Уеб технологии (25 издание)",
        heroMeta: "Зимен семестър 2025-2026",
        authorName: "Михаил Доброславски",
        studentIdLabel: "Факултетен номер:",
        universityName: "Софийски университет \"Св. Климент Охридски\"",
        facultyName: "Факултет по математика и информатика",
        scrollDown: "Scroll Down",
        
        // Navigation
        navAbstract: "Резюме",
        navIntroduction: "Въведение",
        navWhatIsPE: "Какво е PE",
        navTechniques: "Техники",
        navChatGPT: "Приложения",
        navExamples: "Примери",
        navRisks: "Рискове",
        navConclusion: "Заключение",
        navCitations: "Литература",
        
        // Abstract
        abstractTitle: "Резюме",
        abstractText: "В съвременната епоха на изкуствен интелект, prompt engineering се откроява като ключова компетентност за ефективното взаимодействие с AI системи. Настоящият реферат изследва приложението на prompt engineering в контекста на уеб разработката с ChatGPT. Разглеждат се основните техники (Few-shot learning, Chain-of-Thought, Role-based prompting), практически приложения за генериране на HTML/CSS/JavaScript код, както и рисковете и етичните предизвикателства. Анализират се въпросите на сигурността, надеждността и професионалната отговорност при използване на AI-генериран код. Изследването подчертава необходимостта от балансиран подход, съчетаващ възможностите на AI с критично мислене и фундаментални знания в уеб разработката.",
        
        // Section 1: Introduction
        sec1Title: "1. Въведение",
        sec1Para1: "В съвременната епоха на изкуствен интелект, която се характеризира с експоненциален растеж на възможностите на големите езикови модели (Large Language Models, LLM), prompt engineering се откроява като ключова компетентност за ефективното взаимодействие с AI системи <a href='#ref-1'>[1]</a>. От пускането на ChatGPT в края на 2022 година, технологичната индустрия е свидетел на радикална трансформация в начина, по който разработчиците подхождат към софтуерното инженерство и уеб разработката <a href='#ref-2'>[2]</a>.",
        sec1Para2: "Prompt engineering представлява изкуството и науката за формулиране на ефективни инструкции към AI модели, за да се получат желаните резултати <a href='#ref-3'>[3]</a>. В контекста на уеб разработката, тази дисциплина предлага безпрецедентни възможности за ускоряване на разработката, автоматизация на рутинни задачи и генериране на високо-качествен код <a href='#ref-4'>[4]</a>.",
        sec1Para3: "Настоящият реферат е разработен като част от курса по Уеб технологии (25 издание) и има за цел да изследва пресечната точка между prompt engineering и съвременната уеб разработка. Документът е структуриран съгласно изискванията за интерактивен, семантичен и стилизиран информационен проект, който може лесно да бъде трансформиран в HTML формат за уеб публикация.",
        
        sec1Sub1Title: "1.1. Актуалност на темата",
        sec1Sub1Para1: "Няколко фактора определят актуалността на prompt engineering в уеб разработката:",
        sec1Sub1Li1: "<strong>AI бум:</strong> Според проучване на McKinsey от 2023 г., над 50% от организациите вече използват AI инструменти в поне една бизнес функция <a href='#ref-5'>[5]</a>.",
        sec1Sub1Li2: "<strong>Нужда от скорост:</strong> Съвременните разработвателни цикли изискват все по-бързо доставяне на функционалности, където AI може да ускори разработката с до 40% <a href='#ref-6'>[6]</a>.",
        sec1Sub1Li3: "<strong>Промяна в работните процеси:</strong> Появата на \"AI-assisted development\" променя фундаментално начина, по който се пише, тества и поддържа код <a href='#ref-7'>[7]</a>.",
        
        sec1Sub2Title: "1.2. Цели на реферата",
        sec1Sub2Para1: "Този реферат си поставя следните цели:",
        sec1Sub2Li1: "Да дефинира prompt engineering и основните му техники",
        sec1Sub2Li2: "Да изследва приложението на ChatGPT в уеб разработката",
        sec1Sub2Li3: "Да анализира рисковете и предизвикателствата",
        sec1Sub2Li4: "Да представи практически примери и казуси",
        sec1Sub2Li5: "Да разгледа етичните и професионални аспекти",
        sec1Sub2Li6: "Да направи прогноза за бъдещето на професията",
        
        // Section 2: What is Prompt Engineering
        sec2Title: "2. Какво е Prompt Engineering",
        sec2Para1: "Prompt engineering е процесът на проектиране и оптимизация на инструкции (промптове) към AI модели, за да се постигнат точни, релевантни и полезни резултати <a href='#ref-8'>[8]</a>. Терминът произлиза от естествено-езиковото взаимодействие с LLM модели като GPT-4, Claude, LLaMA и други <a href='#ref-9'>[9]</a>.",
        
        sec2Sub1Title: "2.1. Дефиниция и основни концепции",
        sec2Sub1Para1: "Според OpenAI, prompt engineering включва \"систематичното създаване на ефективни промпт формулировки, които максимизират качеството и релевантността на отговорите на AI моделите\" <a href='#ref-10'>[10]</a>. Това включва:",
        sec2Sub1Li1: "<strong>Ясност:</strong> Прецизно формулиране на задачата",
        sec2Sub1Li2: "<strong>Контекст:</strong> Предоставяне на необходима информация",
        sec2Sub1Li3: "<strong>Формат:</strong> Спецификация на желания изход",
        sec2Sub1Li4: "<strong>Ограничения:</strong> Дефиниране на рамки и правила",
        
        sec2Sub2Title: "2.2. Роля при взаимодействие с LLM",
        sec2Sub2Para1: "LLM моделите функционират на принципа на статистическо предсказване на следващия токен в последователност <a href='#ref-11'>[11]</a>. Качеството на промпта директно влияе върху:",
        sec2Sub2Li1: "<strong>Точност:</strong> Колко добре моделът разбира задачата",
        sec2Sub2Li2: "<strong>Релевантност:</strong> Доколко отговорът отговаря на нуждите",
        sec2Sub2Li3: "<strong>Консистентност:</strong> Стабилност при повторни заявки",
        sec2Sub2Li4: "<strong>Ефективност:</strong> Време и ресурси за получаване на резултат",
        sec2Sub2Para2: "Фигура 1 илюстрира основния поток на взаимодействие между потребител, промпт и LLM модел.",
        
        figure1Caption: "<strong>Фигура 1.</strong> Поток на взаимодействие при prompt engineering",
        
        // Section 3: Techniques
        sec3Title: "3. Основни техники и подходи в Prompt Engineering",
        sec3Para1: "Съществуват множество техники за оптимизация на промптове, всяка с различни приложения и предимства <a href='#ref-12'>[12]</a>. В тази секция ще разгледаме най-важните от тях.",
        
        sec3Sub1Title: "3.1. Поставяне на роля и контекст",
        sec3Sub1Para1: "Една от най-основните техники е задаването на роля и контекст на AI модела <a href='#ref-13'>[13]</a>. Това се постига чрез инструкции като показаните в Код 1.",
        code1Caption: "Код 1: Базов prompt за генериране на HTML форма",
        sec3Sub1Para2: "Тази техника помага на модела да \"влезе в ролята\" и да генерира по-релевантен отговор <a href='#ref-14'>[14]</a>.",
        
        sec3Sub2Title: "3.2. Ограничения, формати и изходни структури",
        sec3Sub2Para1: "Спецификацията на точен формат и ограничения е критична за получаване на използваем резултат <a href='#ref-15'>[15]</a>. Виж Код 2 за пример:",
        code2Caption: "Код 2: Advanced prompt с контекст и ограничения",
        
        sec3Sub3Title: "3.3. Итеративни промптове и рефайнмент",
        sec3Sub3Para1: "Рядко първият промпт дава перфектен резултат. Итеративният подход включва постепенно уточняване <a href='#ref-16'>[16]</a>:",
        sec3Sub3Li1: "Първоначален промпт и резултат",
        sec3Sub3Li2: "Анализ на резултата",
        sec3Sub3Li3: "Идентифициране на проблеми",
        sec3Sub3Li4: "Уточняване на промпта",
        sec3Sub3Li5: "Повторение до желан резултат",
        
        sec3Sub4Title: "3.4. Few-shot промптове",
        sec3Sub4Para1: "Few-shot learning предоставя на модела примери за желания формат и стил <a href='#ref-17'>[17]</a>. Виж Код 3:",
        code3Caption: "Код 3: Few-shot prompt с примери",
        
        sec3Sub5Title: "3.5. Chain-of-thought (CoT)",
        sec3Sub5Para1: "Chain-of-thought промптването насърчава модела да \"мисли на глас\" и да показва стъпките в разсъжденията си <a href='#ref-18'>[18]</a>. Това е особено полезно за сложни задачи. Виж Код 4:",
        code4Caption: "Код 4: Chain-of-thought prompt за решаване на проблем",
        sec3Sub5Para2: "Важна етична бележка: При използване на CoT, трябва да сме наясно, че моделът симулира разсъждения, но не \"мисли\" по човешки начин <a href='#ref-19'>[19]</a>. Резултатите винаги трябва да се валидират.",
        
        sec3Sub6Title: "3.6. Self-consistency и Toolformer-стил",
        sec3Sub6Para1: "Self-consistency включва генериране на множество отговори и избор на най-консистентния <a href='#ref-20'>[20]</a>. Toolformer-стил взаимодействие позволява на AI да \"извиква\" външни инструменти <a href='#ref-21'>[21]</a>:",
        sec3Sub6Li1: "Code linters (ESLint, Prettier)",
        sec3Sub6Li2: "API validators (Postman, Swagger)",
        sec3Sub6Li3: "Browser DevTools",
        sec3Sub6Li4: "Git за version control",
        
        sec3Sub7Title: "3.7. Тестове, проверка и валидация",
        sec3Sub7Para1: "Критично важна е систематичната проверка на AI генерирания код <a href='#ref-22'>[22]</a>:",
        sec3Sub7Para2: "Таблица 1 показва основните категории валидационни инструменти, които трябва да се използват при работа с AI генериран код.",
        
        table1Caption: "Таблица 1: Методи за валидация на AI генериран код",
        table1Header1: "Метод",
        table1Header2: "Инструменти",
        table1Header3: "Приложение",
        table1Row1Col1: "Статичен анализ",
        table1Row1Col2: "ESLint, TSLint",
        table1Row1Col3: "JavaScript/TypeScript",
        table1Row2Col1: "Форматиране",
        table1Row2Col2: "Prettier, Black",
        table1Row2Col3: "Код стил",
        table1Row3Col1: "Тестване",
        table1Row3Col2: "Jest, Mocha, Pytest",
        table1Row3Col3: "Unit/Integration",
        table1Row4Col1: "Accessibility",
        table1Row4Col2: "axe, WAVE",
        table1Row4Col3: "A11y проверки",
        table1Row5Col1: "Performance",
        table1Row5Col2: "Lighthouse, WebPageTest",
        table1Row5Col3: "Оптимизация",
        table1Row6Col1: "Security",
        table1Row6Col2: "OWASP ZAP, Snyk",
        table1Row6Col3: "Уязвимости",
        
        // Section 4: ChatGPT and Web Development
        sec4Title: "4. ChatGPT и Prompt Engineering в Web разработката",
        sec4Para1: "ChatGPT и подобни LLM модели предлагат широк спектър от приложения в уеб разработката, от генериране на boilerplate код до помощ при архитектурни решения <a href='#ref-23'>[23]</a>.",
        
        sec4Sub1Title: "4.1. Генериране на HTML/CSS/JS шаблони",
        sec4Sub1Para1: "Едно от най-практичните приложения е автоматичното генериране на код шаблони <a href='#ref-24'>[24]</a>. Виж Код 5:",
        code5Caption: "Код 5: Базов HTML5 шаблон с семантична структура",
        
        sec4Sub2Title: "4.2. CSS генериране и layout системи",
        sec4Sub2Para1: "AI моделите могат ефективно да генерират модерни CSS layout-и <a href='#ref-25'>[25]</a>. Код 6 демонстрира CSS Grid система:",
        code6Caption: "Код 6: CSS Grid layout генериран от AI",
        
        sec4Sub3Title: "4.3. JavaScript и DOM манипулация",
        sec4Sub3Para1: "ChatGPT може да генерира функционален JavaScript код <a href='#ref-26'>[26]</a>. Виж Код 7:",
        code7Caption: "Код 7: JavaScript функция за DOM манипулация",
        
        sec4Sub4Title: "4.4. Архитектура, документация и тестове",
        sec4Sub4Para1: "AI може да помогне при проектиране на архитектура и генериране на документация <a href='#ref-27'>[27]</a>:",
        sec4Sub4Li1: "<strong>Architecture diagrams:</strong> Генериране на PlantUML, Mermaid диаграми",
        sec4Sub4Li2: "<strong>API документация:</strong> OpenAPI/Swagger спецификации",
        sec4Sub4Li3: "<strong>README файлове:</strong> Структурирана проектна документация",
        sec4Sub4Li4: "<strong>Unit tests:</strong> Jest, Mocha, Pytest тест казуси",
        
        sec4Sub5Title: "4.5. i18n и локализация",
        sec4Sub5Para1: "ChatGPT може да генерира структури за интернационализация <a href='#ref-28'>[28]</a>. Код 8 показва пример:",
        code8Caption: "Код 8: Пример за i18n структура",
        
        sec4Sub6Title: "4.6. Добри практики за интеграция в pipeline",
        sec4Sub6Para1: "Интегрирането на AI в разработвателския процес изисква дисциплина <a href='#ref-29'>[29]</a>:",
        sec4Sub6Li1: "<strong>Планиране:</strong> Дефинирайте какво AI ще генерира",
        sec4Sub6Li2: "<strong>Ревю:</strong> Винаги преглеждайте генерирания код",
        sec4Sub6Li3: "<strong>Тестване:</strong> Пишете тестове за AI код",
        sec4Sub6Li4: "<strong>CI/CD:</strong> Интегрирайте валидация в pipeline",
        sec4Sub6Li5: "<strong>Документация:</strong> Отбелязвайте AI-генериран код",
        
        sec4Sub7Title: "4.7. Рискове при \"blind AI-код\"",
        figure2Caption: "<strong>Фигура 2.</strong> Визуализация на рисковете при \"blind AI-coding\"",
        sec4Sub7Para1: "Фигура 2 илюстрира опасностите от некритично приемане на AI генериран код. Основните рискове включват <a href='#ref-30'>[30]</a>:",
        sec4Sub7Li1: "<strong>Грешки:</strong> AI може да генерира синтактично верен, но логически грешен код",
        sec4Sub7Li2: "<strong>Неоптималност:</strong> Моделите не винаги генерират най-ефективното решение",
        sec4Sub7Li3: "<strong>Липса на стандарти:</strong> AI може да не следва проектните конвенции",
        sec4Sub7Li4: "<strong>Security:</strong> Уязвимости като XSS, SQL injection, CSRF <a href='#ref-31'>[31]</a>",
        sec4Sub7Para2: "Особено опасен е феноменът \"vibe coding\" - когато разработчици слепо копират AI генериран код без да разбират как работи <a href='#ref-32'>[32]</a>.",
        
        sec4Sub8Title: "4.8. Етика и професионална отговорност",
        sec4Sub8Para1: "Използването на AI в разработката поражда етични въпроси <a href='#ref-33'>[33]</a>:",
        
        sec4Sub8Sub1Title: "Халюцинации",
        sec4Sub8Sub1Para1: "AI моделите могат да \"измислят\" факти, API-та или библиотеки, които не съществуват <a href='#ref-34'>[34]</a>. Примери:",
        sec4Sub8Sub1Li1: "Измислени функции в съществуващи библиотеки",
        sec4Sub8Sub1Li2: "Невалидни URL-и или документация",
        sec4Sub8Sub1Li3: "Остарял код от предишни версии",
        
        sec4Sub8Sub2Title: "Проверими източници",
        sec4Sub8Sub2Para1: "Всяка AI препоръка трябва да се валидира срещу официална документация <a href='#ref-35'>[35]</a>:",
        sec4Sub8Sub2Li1: "MDN Web Docs за JavaScript/CSS/HTML",
        sec4Sub8Sub2Li2: "W3C спецификации за стандарти",
        sec4Sub8Sub2Li3: "Официални GitHub repositories",
        sec4Sub8Sub2Li4: "Stack Overflow (проверени отговори)",
        
        sec4Sub8Sub3Title: "Авторство и лицензиране",
        sec4Sub8Sub3Para1: "Сложни въпроси за интелектуална собственост <a href='#ref-36'>[36]</a>:",
        sec4Sub8Sub3Li1: "Кой е авторът на AI генериран код?",
        sec4Sub8Sub3Li2: "Какъв лиценз се прилага?",
        sec4Sub8Sub3Li3: "Има ли рискове от copyright нарушения?",
        
        sec4Sub9Title: "4.9. Дигитален маркетинг и SEO",
        sec4Sub9Para1: "ChatGPT може да подпомогне дигиталния маркетинг <a href='#ref-37'>[37]</a>:",
        sec4Sub9Li1: "<strong>Meta tags:</strong> Генериране на оптимизирани meta description, keywords",
        sec4Sub9Li2: "<strong>Structured data:</strong> Schema.org JSON-LD markup",
        sec4Sub9Li3: "<strong>Content optimization:</strong> Heading hierarchy, keyword density",
        sec4Sub9Li4: "<strong>Alt текстове:</strong> Accessibility и SEO описания на изображения",
        code9Caption: "Код 9: Пример за meta tags оптимизация",
        
        sec4Sub10Title: "4.10. Бъдещето на професиите",
        sec4Sub10Para1: "AI променя фундаментално професията на уеб разработчика <a href='#ref-38'>[38]</a>:",
        
        sec4Sub10Sub1Title: "Автоматизация",
        sec4Sub10Sub1Para1: "Рутинни задачи, които вероятно ще се автоматизират:",
        sec4Sub10Sub1Li1: "Boilerplate код генериране",
        sec4Sub10Sub1Li2: "Основни CRUD операции",
        sec4Sub10Sub1Li3: "CSS стилизация по дизайн mockups",
        sec4Sub10Sub1Li4: "Unit test generation",
        
        sec4Sub10Sub2Title: "Ефект върху обучението",
        sec4Sub10Sub2Para1: "Промени в образованието <a href='#ref-39'>[39]</a>:",
        sec4Sub10Sub2Li1: "Фокус върху архитектура, а не синтаксис",
        sec4Sub10Sub2Li2: "Критично мислене и код ревю",
        sec4Sub10Sub2Li3: "Етика и отговорност",
        
        sec4Sub10Sub3Title: "Junior разработчици",
        sec4Sub10Sub3Para1: "Предизвикателства за начинаещи <a href='#ref-40'>[40]</a>:",
        sec4Sub10Sub3Li1: "Риск от \"не научаване на основите\"",
        sec4Sub10Sub3Li2: "Зависимост от AI инструменти",
        sec4Sub10Sub3Li3: "Необходимост от нови ментори стратегии",
        
        sec4Sub10Sub4Title: "Разработвателни pipeline-и",
        sec4Sub10Sub4Para1: "Трансформация на процесите <a href='#ref-41'>[41]</a>:",
        sec4Sub10Sub4Li1: "AI-assisted code review",
        sec4Sub10Sub4Li2: "Automated testing generation",
        sec4Sub10Sub4Li3: "Intelligent CI/CD optimization",
        sec4Sub10Sub4Li4: "Predictive bug detection",
        
        // Section 5: Examples
        sec5Title: "5. Приложения в уеб - примери и демонстрации",
        sec5Para1: "Тази секция представя конкретни примери и казуси за използване на prompt engineering в реални уеб проекти.",
        
        sec5Sub1Title: "5.1. Демонстрация на различни типове промптове",
        sec5Sub1Para1: "Разгледахме вече четири типа промптове в предишните секции:",
        sec5Sub1Li1: "Код 1: Basic prompt",
        sec5Sub1Li2: "Код 2: Advanced prompt",
        sec5Sub1Li3: "Код 4: Chain-of-thought",
        sec5Sub1Li4: "Код 3: Few-shot learning",
        
        sec5Sub2Title: "5.2. Генериран код с добра структура",
        sec5Sub2Para1: "Демонстрирахме примери на добре структуриран код:",
        sec5Sub2Li1: "Код 5: Семантичен HTML5",
        sec5Sub2Li2: "Код 6: Модерен CSS Grid",
        sec5Sub2Li3: "Код 7: JavaScript с security best practices",
        sec5Sub2Li4: "Код 8: i18n архитектура",
        
        sec5Sub3Title: "5.3. Мини-казуси: кога AI помага и кога пречи",
        
        sec5Sub3Case1Title: "Случай 1: Успешна помощ",
        sec5Sub3Case1Para: "Разработчик използва ChatGPT за генериране на responsive navigation menu. AI генерира чист код с accessibility features. След малки корекции, кодът е production-ready <a href='#ref-42'>[42]</a>.",
        
        sec5Sub3Case2Title: "Случай 2: Проблематично използване",
        sec5Sub3Case2Para: "Junior разработчик поиска от AI да генерира authentication система. AI създаде код без proper password hashing и с SQL injection уязвимости. Само след security audit проблемите са открити <a href='#ref-43'>[43]</a>.",
        
        sec5Sub3Case3Title: "Случай 3: Оптимален workflow",
        sec5Sub3Case3Para: "Senior team използва AI за boilerplate, но всички резултати преминават през:",
        sec5Sub3Case3Li1: "Code review",
        sec5Sub3Case3Li2: "Automated testing",
        sec5Sub3Case3Li3: "Security scanning",
        sec5Sub3Case3Li4: "Performance profiling",
        sec5Sub3Case3Result: "Резултат: 35% по-бърза разработка при запазване на качеството <a href='#ref-44'>[44]</a>.",
        
        sec5Sub4Title: "5.4. Как да валидираме резултата",
        sec5Sub4Para1: "Систематичен подход за валидация <a href='#ref-45'>[45]</a>:",
        
        table2Caption: "Таблица 2: Checklist за валидация на AI генериран код",
        table2Header1: "Категория",
        table2Header2: "Проверки",
        table2Row1Col1: "Функционалност",
        table2Row1Col2: "Работи ли кодът както се очаква? Unit tests pass?",
        table2Row2Col1: "Performance",
        table2Row2Col2: "Няма ли memory leaks? Оптимизиран ли е?",
        table2Row3Col1: "Security",
        table2Row3Col2: "OWASP Top 10 проверки, input validation",
        table2Row4Col1: "Accessibility",
        table2Row4Col2: "WCAG 2.1 compliance, keyboard navigation",
        table2Row5Col1: "Standards",
        table2Row5Col2: "Съответствие с проектни конвенции",
        table2Row6Col1: "Documentation",
        table2Row6Col2: "Коментари, JSDoc, README updates",
        table2Row7Col1: "Cross-browser",
        table2Row7Col2: "Тестване в Chrome, Firefox, Safari, Edge",
        table2Row8Col1: "Responsive",
        table2Row8Col2: "Mobile, tablet, desktop layouts",
        
        // Section 6: Risks
        sec6Title: "6. Рискове и ограничения",
        sec6Para1: "Въпреки предимствата, използването на AI в уеб разработката носи значителни рискове, които изискват внимание и митигация <a href='#ref-46'>[46]</a>.",
        
        sec6Sub1Title: "6.1. Етически предизвикателства",
        
        sec6Sub1Sub1Title: "Прозрачност",
        sec6Sub1Sub1Para1: "Трябва ли да се декларира, че код е AI-генериран? <a href='#ref-47'>[47]</a>",
        sec6Sub1Sub1Li1: "В open-source проекти",
        sec6Sub1Sub1Li2: "В комерсиални продукти",
        sec6Sub1Sub1Li3: "При code contributions",
        
        sec6Sub1Sub2Title: "Bias и дискриминация",
        sec6Sub1Sub2Para1: "AI моделите могат да възпроизведат предразсъдъци от тренировъчните данни <a href='#ref-48'>[48]</a>:",
        sec6Sub1Sub2Li1: "Стереотипни UI/UX решения",
        sec6Sub1Sub2Li2: "Ограничена accessibility",
        sec6Sub1Sub2Li3: "Cultural bias в съдържанието",
        
        sec6Sub2Title: "6.2. Надеждност и халюцинации",
        sec6Sub2Para1: "Статистика показва, че GPT-4 може да генерира невалиден код в 12-18% от случаите <a href='#ref-49'>[49]</a>. Типични проблеми:",
        sec6Sub2Li1: "Измислени API endpoints",
        sec6Sub2Li2: "Deprecated функции",
        sec6Sub2Li3: "Неправилни параметри",
        sec6Sub2Li4: "Логически грешки",
        
        sec6Sub3Title: "6.3. Сигурност",
        sec6Sub3Para1: "AI генерираният код може да съдържа уязвимости <a href='#ref-50'>[50]</a>:",
        sec6Sub3Li1: "<strong>XSS:</strong> Недостатъчна input санитизация",
        sec6Sub3Li2: "<strong>SQL Injection:</strong> Директно вмъкване на user input",
        sec6Sub3Li3: "<strong>CSRF:</strong> Липса на токени",
        sec6Sub3Li4: "<strong>Hardcoded secrets:</strong> API keys в кода",
        sec6Sub3Li5: "<strong>Insecure dependencies:</strong> Остарели библиотеки",
        
        sec6Sub4Title: "6.4. Неправилни цитати",
        sec6Sub4Para1: "AI може да генерира невалидни или измислени цитати <a href='#ref-51'>[51]</a>:",
        sec6Sub4Li1: "Несъществуващи статии",
        sec6Sub4Li2: "Грешни автори или дати",
        sec6Sub4Li3: "Невалидни URLs",
        sec6Sub4Li4: "Обърка ни източници",
        sec6Sub4Para2: "<strong>Решение:</strong> Винаги проверявайте цитатите в оригиналния източник!",
        
        sec6Sub5Title: "6.5. Критични контролни точки",
        sec6Sub5Para1: "Задължителни проверки при използване на AI код <a href='#ref-52'>[52]</a>:",
        sec6Sub5Li1: "<strong>Pre-commit:</strong> Static analysis, linting",
        sec6Sub5Li2: "<strong>Code review:</strong> Human inspection",
        sec6Sub5Li3: "<strong>Testing:</strong> Unit, integration, e2e tests",
        sec6Sub5Li4: "<strong>Security scan:</strong> SAST/DAST tools",
        sec6Sub5Li5: "<strong>Performance:</strong> Lighthouse, profiling",
        sec6Sub5Li6: "<strong>Accessibility:</strong> axe, WAVE audits",
        sec6Sub5Li7: "<strong>Production monitoring:</strong> Error tracking, analytics",
        
        // Section 7: Conclusion
        sec7Title: "7. Заключение",
        sec7Para1: "Prompt engineering представлява мощен инструмент за модерната уеб разработка, който може значително да ускори и подобри процеса на създаване на софтуер <a href='#ref-53'>[53]</a>. Въпреки това, технологията изисква отговорен и критичен подход.",
        
        sec7Sub1Title: "7.1. Авторско мнение",
        sec7Sub1Para1: "Въз основа на изследването в този реферат, считам, че ChatGPT и prompt engineering <strong>трябва да се използват</strong>, но при следните условия:",
        
        sec7Sub1Sub1Title: "Подходящи сценарии:",
        sec7Sub1Sub1Li1: "Генериране на boilerplate код",
        sec7Sub1Sub1Li2: "Прототипиране и експериментиране",
        sec7Sub1Sub1Li3: "Документация и коментари",
        sec7Sub1Sub1Li4: "Refactoring suggestions",
        sec7Sub1Sub1Li5: "Learning и образование (с ограничения)",
        
        sec7Sub1Sub2Title: "Неподходящи сценарии:",
        sec7Sub1Sub2Li1: "Critical security код без review",
        sec7Sub1Sub2Li2: "Production код без тестове",
        sec7Sub1Sub2Li3: "Единственият източник на обучение за начинаещи",
        sec7Sub1Sub2Li4: "Сложна бизнес логика без domain expertise",
        
        sec7Sub2Title: "7.2. Отговорни практики",
        sec7Sub2Para1: "Препоръки за отговорно използване <a href='#ref-54'>[54]</a>:",
        sec7Sub2Li1: "<strong>Transparency:</strong> Документирайте AI употреба",
        sec7Sub2Li2: "<strong>Validation:</strong> Винаги проверявайте резултатите",
        sec7Sub2Li3: "<strong>Education:</strong> Обучавайте се на основите преди да използвате AI",
        sec7Sub2Li4: "<strong>Testing:</strong> Comprehensive test coverage",
        sec7Sub2Li5: "<strong>Security:</strong> Regular security audits",
        sec7Sub2Li6: "<strong>Ethics:</strong> Съобразявайте се с етичните стандарти",
        sec7Sub2Li7: "<strong>Continuous learning:</strong> AI еволюира, адаптирайте се",
        
        sec7Sub3Title: "7.3. Бъдещи перспективи",
        sec7Sub3Para1: "В следващите 5-10 години очаквам <a href='#ref-55'>[55]</a>:",
        sec7Sub3Li1: "<strong>Специализирани модели:</strong> AI обучени конкретно за web frameworks",
        sec7Sub3Li2: "<strong>IDE интеграция:</strong> Seamless AI assistance в dev tools",
        sec7Sub3Li3: "<strong>Автоматизация:</strong> End-to-end код генериране от design",
        sec7Sub3Li4: "<strong>Нови роли:</strong> AI prompt engineers, AI code reviewers",
        sec7Sub3Li5: "<strong>Стандарти:</strong> Industry guidelines за AI използване",
        
        sec7Sub4Title: "7.4. Финални думи",
        sec7Sub4Para1: "Prompt engineering не е магическо решение, а инструмент, който изисква умение, критично мислене и професионална отговорност. Успешните разработчици ще бъдат тези, които комбинират фундаментални знания с ефективно използване на AI технологии <a href='#ref-56'>[56]</a>.",
        sec7Sub4Para2: "Бъдещето на уеб разработката е в симбиозата между човешка креативност и AI възможности - не в замяната на едното с другото.",
        
        // Citations
        citationsTitle: "Цитирана литература",
        ref1: "[1] OpenAI, \"GPT-4 Technical Report\", published March 2023, OpenAI Research, [<a href='https://arxiv.org/abs/2303.08774' target='_blank'>https://arxiv.org/abs/2303.08774</a>], last visited: 2025-12-01.",
        ref2: "[2] Patel, N., Raman, K., \"The Impact of ChatGPT on Software Development\", published April 2023, Communications of the ACM, vol. 66, no. 4.",
        ref3: "[3] White, J., et al., \"A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT\", published February 2023, arXiv preprint, [<a href='https://arxiv.org/abs/2302.11382' target='_blank'>https://arxiv.org/abs/2302.11382</a>].",
        ref4: "[4] Liu, P., et al., \"Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing\", published 2023, ACM Computing Surveys, vol. 55, no. 9.",
        ref5: "[5] McKinsey Digital, \"The State of AI in 2023: Generative AI's Breakout Year\", published August 2023, McKinsey & Company.",
        ref6: "[6] GitHub, \"The Impact of AI on Developer Productivity\", published September 2023, GitHub Blog.",
        ref7: "[7] Ziegler, A., et al., \"Productivity Assessment of Neural Code Completion\", published May 2022, Microsoft Research.",
        ref8: "[8] Reynolds, L., McDonell, K., \"Prompt Programming for Large Language Models\", published February 2021, arXiv preprint.",
        ref9: "[9] Brown, T., et al., \"Language Models are Few-Shot Learners\", published 2020, NeurIPS 2020.",
        ref10: "[10] OpenAI, \"Best Practices for Prompt Engineering\", OpenAI Documentation, [<a href='https://platform.openai.com/docs/guides/prompt-engineering' target='_blank'>https://platform.openai.com/docs/guides/prompt-engineering</a>].",
        ref11: "[11] Vaswani, A., et al., \"Attention Is All You Need\", published 2017, NeurIPS 2017.",
        ref12: "[12] Zhou, Y., et al., \"Large Language Models Are Human-Level Prompt Engineers\", published 2023, ICLR 2023.",
        ref13: "[13] Shanahan, M., et al., \"Role-Play with Large Language Models\", published October 2023, Nature Machine Intelligence.",
        ref14: "[14] Kojima, T., et al., \"Large Language Models are Zero-Shot Reasoners\", published 2022, NeurIPS 2022.",
        ref15: "[15] Dettmers, T., et al., \"GPT3.int8(): 8-bit Matrix Multiplication for Transformers at Scale\", published 2022, NeurIPS 2022.",
        ref16: "[16] Madaan, A., et al., \"Self-Refine: Iterative Refinement with Self-Feedback\", published March 2023, arXiv preprint.",
        ref17: "[17] Dong, Q., et al., \"A Survey on In-context Learning\", published December 2022, arXiv preprint.",
        ref18: "[18] Wei, J., et al., \"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models\", published 2022, NeurIPS 2022.",
        ref19: "[19] Mitchell, M., \"Why AI is Harder Than We Think\", published April 2021, arXiv preprint.",
        ref20: "[20] Wang, X., et al., \"Self-Consistency Improves Chain of Thought Reasoning in Language Models\", published 2023, ICLR 2023.",
        ref21: "[21] Schick, T., et al., \"Toolformer: Language Models Can Teach Themselves to Use Tools\", published February 2023, arXiv preprint.",
        ref22: "[22] Chen, M., et al., \"Evaluating Large Language Models Trained on Code\", published July 2021, arXiv preprint.",
        ref23: "[23] Jiang, E., et al., \"Promptmaker: Prompt-based Prototyping with Large Language Models\", published 2022, CHI 2022.",
        ref24: "[24] Dakhel, A., et al., \"GitHub Copilot AI pair programmer: Asset or Liability?\", published September 2023, Journal of Systems and Software, vol. 203.",
        ref25: "[25] MDN Web Docs, \"CSS Grid Layout\", Mozilla Developer Network, [<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' target='_blank'>MDN</a>].",
        ref26: "[26] MDN Web Docs, \"Manipulating Documents\", Mozilla Developer Network.",
        ref27: "[27] Pressman, R., Maxim, B., \"Software Engineering: A Practitioner's Approach\", published 2020, 9th Edition, McGraw-Hill Education.",
        ref28: "[28] W3C, \"Internationalization Best Practices\", W3C Working Draft.",
        ref29: "[29] Humble, J., Farley, D., \"Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation\", published 2010, Addison-Wesley.",
        ref30: "[30] Perry, N., et al., \"Do Users Write More Insecure Code with AI Assistants?\", published August 2023, arXiv preprint.",
        ref31: "[31] OWASP, \"OWASP Top Ten 2021\", OWASP Foundation.",
        ref32: "[32] Barke, S., et al., \"Grounded Copilot: How Programmers Interact with Code-Generating Models\", published 2023, OOPSLA 2023.",
        ref33: "[33] Bender, E., et al., \"On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?\", published 2021, FAccT 2021.",
        ref34: "[34] Ji, Z., et al., \"Survey of Hallucination in Natural Language Generation\", published March 2023, ACM Computing Surveys, vol. 55, no. 12.",
        ref35: "[35] MDN Web Docs, \"HTML: HyperText Markup Language\", Mozilla Developer Network.",
        ref36: "[36] Samuelson, P., \"Allocating Ownership Rights in Computer-Generated Works\", published 1986, University of Pittsburgh Law Review, vol. 47.",
        ref37: "[37] Search Engine Journal, \"AI for SEO: Complete Guide\", published October 2023.",
        ref38: "[38] World Economic Forum, \"The Future of Jobs Report 2023\", published April 2023, WEF.",
        ref39: "[39] ACM, \"Computing Curricula 2020\", published December 2020, ACM/IEEE Computer Society.",
        ref40: "[40] Prather, J., et al., \"The Robots Are Here: Navigating the Generative AI Revolution in Computing Education\", published June 2023, ACM Inroads, vol. 14, no. 2.",
        ref41: "[41] Forsgren, N., et al., \"Accelerate: The Science of Lean Software and DevOps\", published 2018, IT Revolution Press.",
        ref42: "[42] Stack Overflow, \"2023 Developer Survey\", published May 2023, Stack Overflow.",
        ref43: "[43] Nguyen, N., Nadi, S., \"An Empirical Evaluation of GitHub Copilot's Code Suggestions\", published 2022, MSR 2022.",
        ref44: "[44] Ross, S., et al., \"Programmer Experiences with GitHub Copilot\", published August 2023, arXiv preprint.",
        ref45: "[45] Google Developers, \"Web Fundamentals - Performance\", Google.",
        ref46: "[46] Thorp, H., \"ChatGPT is fun, but not an author\", published January 2023, Science, vol. 379, no. 6630.",
        ref47: "[47] Kalluri, P., \"Don't ask if artificial intelligence is good or fair, ask how it shifts power\", published July 2020, Nature, vol. 583.",
        ref48: "[48] Buolamwini, J., Gebru, T., \"Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification\", published 2018, FAT 2018.",
        ref49: "[49] Borji, A., \"A Categorical Archive of ChatGPT Failures\", published February 2023, arXiv preprint.",
        ref50: "[50] Pearce, H., et al., \"Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions\", published May 2022, IEEE Symposium on Security and Privacy.",
        ref51: "[51] Alkaissi, H., McFarlane, S., \"Artificial Hallucinations in ChatGPT: Implications in Scientific Writing\", published February 2023, Cureus.",
        ref52: "[52] Bass, L., et al., \"Software Architecture in Practice\", published 2021, 4th Edition, Addison-Wesley.",
        ref53: "[53] Radford, A., et al., \"Language Models are Unsupervised Multitask Learners\", published 2019, OpenAI Blog.",
        ref54: "[54] IEEE, \"IEEE Code of Ethics\", IEEE.",
        ref55: "[55] Brynjolfsson, E., et al., \"Generative AI at Work\", published April 2023, NBER Working Paper.",
        ref56: "[56] Hutson, M., \"Could AI help you to write better code?\", published April 2023, Nature, vol. 616.",
        
        // Footer
        footerText: "&copy; 2025 Факултет по математика и информатика, СУ \"Св. Климент Охридски\"",
        footerCourse: "Курс по Уеб технологии, 25 издание (зимен семестър 2025-2026)",
        footerAuthor: "Студент ФМИ • Фак. номер • <a href='https://github.com' target='_blank' rel='noopener noreferrer' class='github-link'><svg width='20' height='20' viewBox='0 0 16 16' fill='currentColor' style='vertical-align: middle; margin-right: 4px'><path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'/></svg>GitHub</a>",
    },
    
    en: {
        // Meta and navigation
        pageTitle: "Prompt Engineering and Web Development with ChatGPT",
        themeLabel: "Topic",
        heroSubtitle: "Course: Web Technologies (25th Edition)",
        heroMeta: "Winter Semester 2025-2026",
        authorName: "Mihail Dobroslavski",
        studentIdLabel: "Student ID:",
        universityName: "Sofia University \"St. Kliment Ohridski\"",
        facultyName: "Faculty of Mathematics and Informatics",
        scrollDown: "Scroll Down",
        
        // Navigation
        navAbstract: "Abstract",
        navIntroduction: "Introduction",
        navWhatIsPE: "What is PE",
        navTechniques: "Techniques",
        navChatGPT: "Applications",
        navExamples: "Examples",
        navRisks: "Risks",
        navConclusion: "Conclusion",
        navCitations: "References",
        
        // Abstract
        abstractTitle: "Abstract",
        abstractText: "In the modern era of artificial intelligence, prompt engineering emerges as a key competency for effective interaction with AI systems. This paper explores the application of prompt engineering in the context of web development with ChatGPT. It examines core techniques (Few-shot learning, Chain-of-Thought, Role-based prompting), practical applications for generating HTML/CSS/JavaScript code, as well as risks and ethical challenges. Issues of security, reliability, and professional responsibility when using AI-generated code are analyzed. The research emphasizes the need for a balanced approach that combines AI capabilities with critical thinking and fundamental knowledge in web development.",
        
        // Section 1: Introduction
        sec1Title: "1. Introduction",
        sec1Para1: "In the modern era of artificial intelligence, characterized by exponential growth in the capabilities of Large Language Models (LLM), prompt engineering stands out as a key competency for effective interaction with AI systems <a href='#ref-1'>[1]</a>. Since the launch of ChatGPT in late 2022, the tech industry has witnessed a radical transformation in how developers approach software engineering and web development <a href='#ref-2'>[2]</a>.",
        sec1Para2: "Prompt engineering represents the art and science of formulating effective instructions to AI models to obtain desired results <a href='#ref-3'>[3]</a>. In the context of web development, this discipline offers unprecedented opportunities for accelerating development, automating routine tasks, and generating high-quality code <a href='#ref-4'>[4]</a>.",
        sec1Para3: "This paper is developed as part of the Web Technologies course (25th edition) and aims to explore the intersection between prompt engineering and modern web development. The document is structured according to requirements for an interactive, semantic, and styled information project that can easily be transformed into HTML format for web publication.",
        
        sec1Sub1Title: "1.1. Relevance of the Topic",
        sec1Sub1Para1: "Several factors determine the relevance of prompt engineering in web development:",
        sec1Sub1Li1: "<strong>AI Boom:</strong> According to a 2023 McKinsey study, over 50% of organizations already use AI tools in at least one business function <a href='#ref-5'>[5]</a>.",
        sec1Sub1Li2: "<strong>Need for Speed:</strong> Modern development cycles require increasingly faster delivery of features, where AI can accelerate development by up to 40% <a href='#ref-6'>[6]</a>.",
        sec1Sub1Li3: "<strong>Workflow Changes:</strong> The emergence of \"AI-assisted development\" fundamentally changes how code is written, tested, and maintained <a href='#ref-7'>[7]</a>.",
        
        sec1Sub2Title: "1.2. Objectives of the Paper",
        sec1Sub2Para1: "This paper sets the following objectives:",
        sec1Sub2Li1: "To define prompt engineering and its main techniques",
        sec1Sub2Li2: "To explore the application of ChatGPT in web development",
        sec1Sub2Li3: "To analyze risks and challenges",
        sec1Sub2Li4: "To present practical examples and case studies",
        sec1Sub2Li5: "To examine ethical and professional aspects",
        sec1Sub2Li6: "To make predictions about the future of the profession",
        
        // Section 2: What is Prompt Engineering
        sec2Title: "2. What is Prompt Engineering",
        sec2Para1: "Prompt engineering is the process of designing and optimizing instructions (prompts) to AI models to achieve accurate, relevant, and useful results <a href='#ref-8'>[8]</a>. The term derives from natural language interaction with LLM models such as GPT-4, Claude, LLaMA, and others <a href='#ref-9'>[9]</a>.",
        
        sec2Sub1Title: "2.1. Definition and Core Concepts",
        sec2Sub1Para1: "According to OpenAI, prompt engineering includes \"the systematic creation of effective prompt formulations that maximize the quality and relevance of AI model responses\" <a href='#ref-10'>[10]</a>. This includes:",
        sec2Sub1Li1: "<strong>Clarity:</strong> Precise formulation of the task",
        sec2Sub1Li2: "<strong>Context:</strong> Providing necessary information",
        sec2Sub1Li3: "<strong>Format:</strong> Specification of desired output",
        sec2Sub1Li4: "<strong>Constraints:</strong> Defining boundaries and rules",
        
        sec2Sub2Title: "2.2. Role in LLM Interaction",
        sec2Sub2Para1: "LLM models function on the principle of statistical prediction of the next token in a sequence <a href='#ref-11'>[11]</a>. The quality of the prompt directly affects:",
        sec2Sub2Li1: "<strong>Accuracy:</strong> How well the model understands the task",
        sec2Sub2Li2: "<strong>Relevance:</strong> How much the response meets needs",
        sec2Sub2Li3: "<strong>Consistency:</strong> Stability across repeated queries",
        sec2Sub2Li4: "<strong>Efficiency:</strong> Time and resources to obtain results",
        sec2Sub2Para2: "Figure 1 illustrates the basic flow of interaction between user, prompt, and LLM model.",
        
        figure1Caption: "<strong>Figure 1.</strong> Interaction flow in prompt engineering",
        
        // Section 3: Techniques
        sec3Title: "3. Core Techniques and Approaches in Prompt Engineering",
        sec3Para1: "There are multiple techniques for optimizing prompts, each with different applications and advantages <a href='#ref-12'>[12]</a>. In this section, we will examine the most important ones.",
        
        sec3Sub1Title: "3.1. Role and Context Setting",
        sec3Sub1Para1: "One of the most fundamental techniques is assigning a role and context to the AI model <a href='#ref-13'>[13]</a>. This is achieved through instructions as shown in Code 1.",
        code1Caption: "Code 1: Basic prompt for generating HTML form",
        sec3Sub1Para2: "This technique helps the model \"step into the role\" and generate more relevant responses <a href='#ref-14'>[14]</a>.",
        
        sec3Sub2Title: "3.2. Constraints, Formats, and Output Structures",
        sec3Sub2Para1: "Specifying exact format and constraints is critical for obtaining usable results <a href='#ref-15'>[15]</a>. See Code 2 for an example:",
        code2Caption: "Code 2: Advanced prompt with context and constraints",
        
        sec3Sub3Title: "3.3. Iterative Prompts and Refinement",
        sec3Sub3Para1: "The first prompt rarely gives perfect results. The iterative approach involves gradual refinement <a href='#ref-16'>[16]</a>:",
        sec3Sub3Li1: "Initial prompt and result",
        sec3Sub3Li2: "Result analysis",
        sec3Sub3Li3: "Problem identification",
        sec3Sub3Li4: "Prompt refinement",
        sec3Sub3Li5: "Repeat until desired result",
        
        sec3Sub4Title: "3.4. Few-shot Prompts",
        sec3Sub4Para1: "Few-shot learning provides the model with examples of the desired format and style <a href='#ref-17'>[17]</a>. See Code 3:",
        code3Caption: "Code 3: Few-shot prompt with examples",
        
        sec3Sub5Title: "3.5. Chain-of-thought (CoT)",
        sec3Sub5Para1: "Chain-of-thought prompting encourages the model to \"think aloud\" and show the steps in its reasoning <a href='#ref-18'>[18]</a>. This is especially useful for complex tasks. See Code 4:",
        code4Caption: "Code 4: Chain-of-thought prompt for problem-solving",
        sec3Sub5Para2: "Important ethical note: When using CoT, we must be aware that the model simulates reasoning but does not \"think\" in a human way <a href='#ref-19'>[19]</a>. Results must always be validated.",
        
        sec3Sub6Title: "3.6. Self-consistency and Toolformer-style",
        sec3Sub6Para1: "Self-consistency involves generating multiple responses and choosing the most consistent one <a href='#ref-20'>[20]</a>. Toolformer-style interaction allows AI to \"call\" external tools <a href='#ref-21'>[21]</a>:",
        sec3Sub6Li1: "Code linters (ESLint, Prettier)",
        sec3Sub6Li2: "API validators (Postman, Swagger)",
        sec3Sub6Li3: "Browser DevTools",
        sec3Sub6Li4: "Git for version control",
        
        sec3Sub7Title: "3.7. Testing, Checking, and Validation",
        sec3Sub7Para1: "Systematic checking of AI-generated code is critically important <a href='#ref-22'>[22]</a>:",
        sec3Sub7Para2: "Table 1 shows the main categories of validation tools that should be used when working with AI-generated code.",
        
        table1Caption: "Table 1: Methods for validating AI-generated code",
        table1Header1: "Method",
        table1Header2: "Tools",
        table1Header3: "Application",
        table1Row1Col1: "Static analysis",
        table1Row1Col2: "ESLint, TSLint",
        table1Row1Col3: "JavaScript/TypeScript",
        table1Row2Col1: "Formatting",
        table1Row2Col2: "Prettier, Black",
        table1Row2Col3: "Code style",
        table1Row3Col1: "Testing",
        table1Row3Col2: "Jest, Mocha, Pytest",
        table1Row3Col3: "Unit/Integration",
        table1Row4Col1: "Accessibility",
        table1Row4Col2: "axe, WAVE",
        table1Row4Col3: "A11y checks",
        table1Row5Col1: "Performance",
        table1Row5Col2: "Lighthouse, WebPageTest",
        table1Row5Col3: "Optimization",
        table1Row6Col1: "Security",
        table1Row6Col2: "OWASP ZAP, Snyk",
        table1Row6Col3: "Vulnerabilities",
        
        // Section 4: ChatGPT and Web Development
        sec4Title: "4. ChatGPT and Prompt Engineering in Web Development",
        sec4Para1: "ChatGPT and similar LLM models offer a wide range of applications in web development, from generating boilerplate code to assisting with architectural decisions <a href='#ref-23'>[23]</a>.",
        
        sec4Sub1Title: "4.1. Generating HTML/CSS/JS Templates",
        sec4Sub1Para1: "One of the most practical applications is automatic generation of code templates <a href='#ref-24'>[24]</a>. See Code 5:",
        code5Caption: "Code 5: Basic HTML5 template with semantic structure",
        
        sec4Sub2Title: "4.2. CSS Generation and Layout Systems",
        sec4Sub2Para1: "AI models can effectively generate modern CSS layouts <a href='#ref-25'>[25]</a>. Code 6 demonstrates a CSS Grid system:",
        code6Caption: "Code 6: CSS Grid layout generated by AI",
        
        sec4Sub3Title: "4.3. JavaScript and DOM Manipulation",
        sec4Sub3Para1: "ChatGPT can generate functional JavaScript code <a href='#ref-26'>[26]</a>. See Code 7:",
        code7Caption: "Code 7: JavaScript function for DOM manipulation",
        
        sec4Sub4Title: "4.4. Architecture, Documentation, and Tests",
        sec4Sub4Para1: "AI can help with architecture design and documentation generation <a href='#ref-27'>[27]</a>:",
        sec4Sub4Li1: "<strong>Architecture diagrams:</strong> Generating PlantUML, Mermaid diagrams",
        sec4Sub4Li2: "<strong>API documentation:</strong> OpenAPI/Swagger specifications",
        sec4Sub4Li3: "<strong>README files:</strong> Structured project documentation",
        sec4Sub4Li4: "<strong>Unit tests:</strong> Jest, Mocha, Pytest test cases",
        
        sec4Sub5Title: "4.5. i18n and Localization",
        sec4Sub5Para1: "ChatGPT can generate structures for internationalization <a href='#ref-28'>[28]</a>. Code 8 shows an example:",
        code8Caption: "Code 8: Example of i18n structure",
        
        sec4Sub6Title: "4.6. Best Practices for Pipeline Integration",
        sec4Sub6Para1: "Integrating AI into the development process requires discipline <a href='#ref-29'>[29]</a>:",
        sec4Sub6Li1: "<strong>Planning:</strong> Define what AI will generate",
        sec4Sub6Li2: "<strong>Review:</strong> Always review generated code",
        sec4Sub6Li3: "<strong>Testing:</strong> Write tests for AI code",
        sec4Sub6Li4: "<strong>CI/CD:</strong> Integrate validation into pipeline",
        sec4Sub6Li5: "<strong>Documentation:</strong> Mark AI-generated code",
        
        sec4Sub7Title: "4.7. Risks of \"Blind AI-Coding\"",
        figure2Caption: "<strong>Figure 2.</strong> Visualization of risks with \"blind AI-coding\"",
        sec4Sub7Para1: "Figure 2 illustrates the dangers of uncritically accepting AI-generated code. Main risks include <a href='#ref-30'>[30]</a>:",
        sec4Sub7Li1: "<strong>Errors:</strong> AI can generate syntactically correct but logically incorrect code",
        sec4Sub7Li2: "<strong>Sub-optimality:</strong> Models don't always generate the most efficient solution",
        sec4Sub7Li3: "<strong>Lack of standards:</strong> AI may not follow project conventions",
        sec4Sub7Li4: "<strong>Security:</strong> Vulnerabilities such as XSS, SQL injection, CSRF <a href='#ref-31'>[31]</a>",
        sec4Sub7Para2: "Especially dangerous is the phenomenon of \"vibe coding\" - when developers blindly copy AI-generated code without understanding how it works <a href='#ref-32'>[32]</a>.",
        
        sec4Sub8Title: "4.8. Ethics and Professional Responsibility",
        sec4Sub8Para1: "Using AI in development raises ethical questions <a href='#ref-33'>[33]</a>:",
        
        sec4Sub8Sub1Title: "Hallucinations",
        sec4Sub8Sub1Para1: "AI models can \"invent\" facts, APIs, or libraries that don't exist <a href='#ref-34'>[34]</a>. Examples:",
        sec4Sub8Sub1Li1: "Fabricated functions in existing libraries",
        sec4Sub8Sub1Li2: "Invalid URLs or documentation",
        sec4Sub8Sub1Li3: "Outdated code from previous versions",
        
        sec4Sub8Sub2Title: "Verifiable Sources",
        sec4Sub8Sub2Para1: "Every AI recommendation must be validated against official documentation <a href='#ref-35'>[35]</a>:",
        sec4Sub8Sub2Li1: "MDN Web Docs for JavaScript/CSS/HTML",
        sec4Sub8Sub2Li2: "W3C specifications for standards",
        sec4Sub8Sub2Li3: "Official GitHub repositories",
        sec4Sub8Sub2Li4: "Stack Overflow (verified answers)",
        
        sec4Sub8Sub3Title: "Authorship and Licensing",
        sec4Sub8Sub3Para1: "Complex questions about intellectual property <a href='#ref-36'>[36]</a>:",
        sec4Sub8Sub3Li1: "Who is the author of AI-generated code?",
        sec4Sub8Sub3Li2: "What license applies?",
        sec4Sub8Sub3Li3: "Are there copyright violation risks?",
        
        sec4Sub9Title: "4.9. Digital Marketing and SEO",
        sec4Sub9Para1: "ChatGPT can assist with digital marketing <a href='#ref-37'>[37]</a>:",
        sec4Sub9Li1: "<strong>Meta tags:</strong> Generating optimized meta description, keywords",
        sec4Sub9Li2: "<strong>Structured data:</strong> Schema.org JSON-LD markup",
        sec4Sub9Li3: "<strong>Content optimization:</strong> Heading hierarchy, keyword density",
        sec4Sub9Li4: "<strong>Alt texts:</strong> Accessibility and SEO image descriptions",
        code9Caption: "Code 9: Example of meta tags optimization",
        
        sec4Sub10Title: "4.10. Future of the Profession",
        sec4Sub10Para1: "AI fundamentally changes the web developer profession <a href='#ref-38'>[38]</a>:",
        
        sec4Sub10Sub1Title: "Automation",
        sec4Sub10Sub1Para1: "Routine tasks likely to be automated:",
        sec4Sub10Sub1Li1: "Boilerplate code generation",
        sec4Sub10Sub1Li2: "Basic CRUD operations",
        sec4Sub10Sub1Li3: "CSS styling from design mockups",
        sec4Sub10Sub1Li4: "Unit test generation",
        
        sec4Sub10Sub2Title: "Impact on Education",
        sec4Sub10Sub2Para1: "Changes in education <a href='#ref-39'>[39]</a>:",
        sec4Sub10Sub2Li1: "Focus on architecture, not syntax",
        sec4Sub10Sub2Li2: "Critical thinking and code review",
        sec4Sub10Sub2Li3: "Ethics and responsibility",
        
        sec4Sub10Sub3Title: "Junior Developers",
        sec4Sub10Sub3Para1: "Challenges for beginners <a href='#ref-40'>[40]</a>:",
        sec4Sub10Sub3Li1: "Risk of \"not learning the basics\"",
        sec4Sub10Sub3Li2: "Dependence on AI tools",
        sec4Sub10Sub3Li3: "Need for new mentor strategies",
        
        sec4Sub10Sub4Title: "Development Pipelines",
        sec4Sub10Sub4Para1: "Process transformation <a href='#ref-41'>[41]</a>:",
        sec4Sub10Sub4Li1: "AI-assisted code review",
        sec4Sub10Sub4Li2: "Automated testing generation",
        sec4Sub10Sub4Li3: "Intelligent CI/CD optimization",
        sec4Sub10Sub4Li4: "Predictive bug detection",
        
        // Section 5: Examples
        sec5Title: "5. Web Applications - Examples and Demonstrations",
        sec5Para1: "This section presents concrete examples and case studies of using prompt engineering in real web projects.",
        
        sec5Sub1Title: "5.1. Demonstration of Different Prompt Types",
        sec5Sub1Para1: "We have already examined four types of prompts in previous sections:",
        sec5Sub1Li1: "Code 1: Basic prompt",
        sec5Sub1Li2: "Code 2: Advanced prompt",
        sec5Sub1Li3: "Code 4: Chain-of-thought",
        sec5Sub1Li4: "Code 3: Few-shot learning",
        
        sec5Sub2Title: "5.2. Generated Code with Good Structure",
        sec5Sub2Para1: "We demonstrated examples of well-structured code:",
        sec5Sub2Li1: "Code 5: Semantic HTML5",
        sec5Sub2Li2: "Code 6: Modern CSS Grid",
        sec5Sub2Li3: "Code 7: JavaScript with security best practices",
        sec5Sub2Li4: "Code 8: i18n architecture",
        
        sec5Sub3Title: "5.3. Mini Case Studies: When AI Helps and When It Hinders",
        
        sec5Sub3Case1Title: "Case 1: Successful Assistance",
        sec5Sub3Case1Para: "A developer uses ChatGPT to generate a responsive navigation menu. AI generates clean code with accessibility features. After minor corrections, the code is production-ready <a href='#ref-42'>[42]</a>.",
        
        sec5Sub3Case2Title: "Case 2: Problematic Use",
        sec5Sub3Case2Para: "A junior developer asks AI to generate an authentication system. AI creates code without proper password hashing and with SQL injection vulnerabilities. Only after a security audit are the problems discovered <a href='#ref-43'>[43]</a>.",
        
        sec5Sub3Case3Title: "Case 3: Optimal Workflow",
        sec5Sub3Case3Para: "A senior team uses AI for boilerplate, but all results go through:",
        sec5Sub3Case3Li1: "Code review",
        sec5Sub3Case3Li2: "Automated testing",
        sec5Sub3Case3Li3: "Security scanning",
        sec5Sub3Case3Li4: "Performance profiling",
        sec5Sub3Case3Result: "Result: 35% faster development while maintaining quality <a href='#ref-44'>[44]</a>.",
        
        sec5Sub4Title: "5.4. How to Validate Results",
        sec5Sub4Para1: "Systematic approach to validation <a href='#ref-45'>[45]</a>:",
        
        table2Caption: "Table 2: Checklist for validating AI-generated code",
        table2Header1: "Category",
        table2Header2: "Checks",
        table2Row1Col1: "Functionality",
        table2Row1Col2: "Does the code work as expected? Unit tests pass?",
        table2Row2Col1: "Performance",
        table2Row2Col2: "No memory leaks? Is it optimized?",
        table2Row3Col1: "Security",
        table2Row3Col2: "OWASP Top 10 checks, input validation",
        table2Row4Col1: "Accessibility",
        table2Row4Col2: "WCAG 2.1 compliance, keyboard navigation",
        table2Row5Col1: "Standards",
        table2Row5Col2: "Compliance with project conventions",
        table2Row6Col1: "Documentation",
        table2Row6Col2: "Comments, JSDoc, README updates",
        table2Row7Col1: "Cross-browser",
        table2Row7Col2: "Testing in Chrome, Firefox, Safari, Edge",
        table2Row8Col1: "Responsive",
        table2Row8Col2: "Mobile, tablet, desktop layouts",
        
        // Section 6: Risks
        sec6Title: "6. Risks and Limitations",
        sec6Para1: "Despite the advantages, using AI in web development carries significant risks that require attention and mitigation <a href='#ref-46'>[46]</a>.",
        
        sec6Sub1Title: "6.1. Ethical Challenges",
        
        sec6Sub1Sub1Title: "Transparency",
        sec6Sub1Sub1Para1: "Should it be declared that code is AI-generated? <a href='#ref-47'>[47]</a>",
        sec6Sub1Sub1Li1: "In open-source projects",
        sec6Sub1Sub1Li2: "In commercial products",
        sec6Sub1Sub1Li3: "In code contributions",
        
        sec6Sub1Sub2Title: "Bias and Discrimination",
        sec6Sub1Sub2Para1: "AI models can reproduce biases from training data <a href='#ref-48'>[48]</a>:",
        sec6Sub1Sub2Li1: "Stereotypical UI/UX decisions",
        sec6Sub1Sub2Li2: "Limited accessibility",
        sec6Sub1Sub2Li3: "Cultural bias in content",
        
        sec6Sub2Title: "6.2. Reliability and Hallucinations",
        sec6Sub2Para1: "Statistics show that GPT-4 can generate invalid code in 12-18% of cases <a href='#ref-49'>[49]</a>. Typical problems:",
        sec6Sub2Li1: "Fabricated API endpoints",
        sec6Sub2Li2: "Deprecated functions",
        sec6Sub2Li3: "Incorrect parameters",
        sec6Sub2Li4: "Logic errors",
        
        sec6Sub3Title: "6.3. Security",
        sec6Sub3Para1: "AI-generated code can contain vulnerabilities <a href='#ref-50'>[50]</a>:",
        sec6Sub3Li1: "<strong>XSS:</strong> Insufficient input sanitization",
        sec6Sub3Li2: "<strong>SQL Injection:</strong> Direct insertion of user input",
        sec6Sub3Li3: "<strong>CSRF:</strong> Missing tokens",
        sec6Sub3Li4: "<strong>Hardcoded secrets:</strong> API keys in code",
        sec6Sub3Li5: "<strong>Insecure dependencies:</strong> Outdated libraries",
        
        sec6Sub4Title: "6.4. Incorrect Citations",
        sec6Sub4Para1: "AI can generate invalid or fabricated citations <a href='#ref-51'>[51]</a>:",
        sec6Sub4Li1: "Non-existent articles",
        sec6Sub4Li2: "Wrong authors or dates",
        sec6Sub4Li3: "Invalid URLs",
        sec6Sub4Li4: "Confused sources",
        sec6Sub4Para2: "<strong>Solution:</strong> Always verify citations in the original source!",
        
        sec6Sub5Title: "6.5. Critical Checkpoints",
        sec6Sub5Para1: "Mandatory checks when using AI code <a href='#ref-52'>[52]</a>:",
        sec6Sub5Li1: "<strong>Pre-commit:</strong> Static analysis, linting",
        sec6Sub5Li2: "<strong>Code review:</strong> Human inspection",
        sec6Sub5Li3: "<strong>Testing:</strong> Unit, integration, e2e tests",
        sec6Sub5Li4: "<strong>Security scan:</strong> SAST/DAST tools",
        sec6Sub5Li5: "<strong>Performance:</strong> Lighthouse, profiling",
        sec6Sub5Li6: "<strong>Accessibility:</strong> axe, WAVE audits",
        sec6Sub5Li7: "<strong>Production monitoring:</strong> Error tracking, analytics",
        
        // Section 7: Conclusion
        sec7Title: "7. Conclusion",
        sec7Para1: "Prompt engineering represents a powerful tool for modern web development that can significantly accelerate and improve the software creation process <a href='#ref-53'>[53]</a>. However, the technology requires a responsible and critical approach.",
        
        sec7Sub1Title: "7.1. Author's Opinion",
        sec7Sub1Para1: "Based on the research in this paper, I believe that ChatGPT and prompt engineering <strong>should be used</strong>, but under the following conditions:",
        
        sec7Sub1Sub1Title: "Appropriate Scenarios:",
        sec7Sub1Sub1Li1: "Generating boilerplate code",
        sec7Sub1Sub1Li2: "Prototyping and experimentation",
        sec7Sub1Sub1Li3: "Documentation and comments",
        sec7Sub1Sub1Li4: "Refactoring suggestions",
        sec7Sub1Sub1Li5: "Learning and education (with limitations)",
        
        sec7Sub1Sub2Title: "Inappropriate Scenarios:",
        sec7Sub1Sub2Li1: "Critical security code without review",
        sec7Sub1Sub2Li2: "Production code without tests",
        sec7Sub1Sub2Li3: "Sole source of learning for beginners",
        sec7Sub1Sub2Li4: "Complex business logic without domain expertise",
        
        sec7Sub2Title: "7.2. Responsible Practices",
        sec7Sub2Para1: "Recommendations for responsible use <a href='#ref-54'>[54]</a>:",
        sec7Sub2Li1: "<strong>Transparency:</strong> Document AI usage",
        sec7Sub2Li2: "<strong>Validation:</strong> Always verify results",
        sec7Sub2Li3: "<strong>Education:</strong> Learn the basics before using AI",
        sec7Sub2Li4: "<strong>Testing:</strong> Comprehensive test coverage",
        sec7Sub2Li5: "<strong>Security:</strong> Regular security audits",
        sec7Sub2Li6: "<strong>Ethics:</strong> Comply with ethical standards",
        sec7Sub2Li7: "<strong>Continuous learning:</strong> AI evolves, adapt",
        
        sec7Sub3Title: "7.3. Future Perspectives",
        sec7Sub3Para1: "In the next 5-10 years, I expect <a href='#ref-55'>[55]</a>:",
        sec7Sub3Li1: "<strong>Specialized models:</strong> AI trained specifically for web frameworks",
        sec7Sub3Li2: "<strong>IDE integration:</strong> Seamless AI assistance in dev tools",
        sec7Sub3Li3: "<strong>Automation:</strong> End-to-end code generation from design",
        sec7Sub3Li4: "<strong>New roles:</strong> AI prompt engineers, AI code reviewers",
        sec7Sub3Li5: "<strong>Standards:</strong> Industry guidelines for AI usage",
        
        sec7Sub4Title: "7.4. Final Words",
        sec7Sub4Para1: "Prompt engineering is not a magic solution, but a tool that requires skill, critical thinking, and professional responsibility. Successful developers will be those who combine fundamental knowledge with effective use of AI technologies <a href='#ref-56'>[56]</a>.",
        sec7Sub4Para2: "The future of web development lies in the symbiosis between human creativity and AI capabilities - not in replacing one with the other.",
        
        // Citations
        citationsTitle: "References",
        ref1: "[1] OpenAI, \"GPT-4 Technical Report\", published March 2023, OpenAI Research, [<a href='https://arxiv.org/abs/2303.08774' target='_blank'>https://arxiv.org/abs/2303.08774</a>], last visited: 2025-12-01.",
        ref2: "[2] Patel, N., Raman, K., \"The Impact of ChatGPT on Software Development\", published April 2023, Communications of the ACM, vol. 66, no. 4.",
        ref3: "[3] White, J., et al., \"A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT\", published February 2023, arXiv preprint, [<a href='https://arxiv.org/abs/2302.11382' target='_blank'>https://arxiv.org/abs/2302.11382</a>].",
        ref4: "[4] Liu, P., et al., \"Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing\", published 2023, ACM Computing Surveys, vol. 55, no. 9.",
        ref5: "[5] McKinsey Digital, \"The State of AI in 2023: Generative AI's Breakout Year\", published August 2023, McKinsey & Company.",
        ref6: "[6] GitHub, \"The Impact of AI on Developer Productivity\", published September 2023, GitHub Blog.",
        ref7: "[7] Ziegler, A., et al., \"Productivity Assessment of Neural Code Completion\", published May 2022, Microsoft Research.",
        ref8: "[8] Reynolds, L., McDonell, K., \"Prompt Programming for Large Language Models\", published February 2021, arXiv preprint.",
        ref9: "[9] Brown, T., et al., \"Language Models are Few-Shot Learners\", published 2020, NeurIPS 2020.",
        ref10: "[10] OpenAI, \"Best Practices for Prompt Engineering\", OpenAI Documentation, [<a href='https://platform.openai.com/docs/guides/prompt-engineering' target='_blank'>https://platform.openai.com/docs/guides/prompt-engineering</a>].",
        ref11: "[11] Vaswani, A., et al., \"Attention Is All You Need\", published 2017, NeurIPS 2017.",
        ref12: "[12] Zhou, Y., et al., \"Large Language Models Are Human-Level Prompt Engineers\", published 2023, ICLR 2023.",
        ref13: "[13] Shanahan, M., et al., \"Role-Play with Large Language Models\", published October 2023, Nature Machine Intelligence.",
        ref14: "[14] Kojima, T., et al., \"Large Language Models are Zero-Shot Reasoners\", published 2022, NeurIPS 2022.",
        ref15: "[15] Dettmers, T., et al., \"GPT3.int8(): 8-bit Matrix Multiplication for Transformers at Scale\", published 2022, NeurIPS 2022.",
        ref16: "[16] Madaan, A., et al., \"Self-Refine: Iterative Refinement with Self-Feedback\", published March 2023, arXiv preprint.",
        ref17: "[17] Dong, Q., et al., \"A Survey on In-context Learning\", published December 2022, arXiv preprint.",
        ref18: "[18] Wei, J., et al., \"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models\", published 2022, NeurIPS 2022.",
        ref19: "[19] Mitchell, M., \"Why AI is Harder Than We Think\", published April 2021, arXiv preprint.",
        ref20: "[20] Wang, X., et al., \"Self-Consistency Improves Chain of Thought Reasoning in Language Models\", published 2023, ICLR 2023.",
        ref21: "[21] Schick, T., et al., \"Toolformer: Language Models Can Teach Themselves to Use Tools\", published February 2023, arXiv preprint.",
        ref22: "[22] Chen, M., et al., \"Evaluating Large Language Models Trained on Code\", published July 2021, arXiv preprint.",
        ref23: "[23] Jiang, E., et al., \"Promptmaker: Prompt-based Prototyping with Large Language Models\", published 2022, CHI 2022.",
        ref24: "[24] Dakhel, A., et al., \"GitHub Copilot AI pair programmer: Asset or Liability?\", published September 2023, Journal of Systems and Software, vol. 203.",
        ref25: "[25] MDN Web Docs, \"CSS Grid Layout\", Mozilla Developer Network, [<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' target='_blank'>MDN</a>].",
        ref26: "[26] MDN Web Docs, \"Manipulating Documents\", Mozilla Developer Network.",
        ref27: "[27] Pressman, R., Maxim, B., \"Software Engineering: A Practitioner's Approach\", published 2020, 9th Edition, McGraw-Hill Education.",
        ref28: "[28] W3C, \"Internationalization Best Practices\", W3C Working Draft.",
        ref29: "[29] Humble, J., Farley, D., \"Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation\", published 2010, Addison-Wesley.",
        ref30: "[30] Perry, N., et al., \"Do Users Write More Insecure Code with AI Assistants?\", published August 2023, arXiv preprint.",
        ref31: "[31] OWASP, \"OWASP Top Ten 2021\", OWASP Foundation.",
        ref32: "[32] Barke, S., et al., \"Grounded Copilot: How Programmers Interact with Code-Generating Models\", published 2023, OOPSLA 2023.",
        ref33: "[33] Bender, E., et al., \"On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?\", published 2021, FAccT 2021.",
        ref34: "[34] Ji, Z., et al., \"Survey of Hallucination in Natural Language Generation\", published March 2023, ACM Computing Surveys, vol. 55, no. 12.",
        ref35: "[35] MDN Web Docs, \"HTML: HyperText Markup Language\", Mozilla Developer Network.",
        ref36: "[36] Samuelson, P., \"Allocating Ownership Rights in Computer-Generated Works\", published 1986, University of Pittsburgh Law Review, vol. 47.",
        ref37: "[37] Search Engine Journal, \"AI for SEO: Complete Guide\", published October 2023.",
        ref38: "[38] World Economic Forum, \"The Future of Jobs Report 2023\", published April 2023, WEF.",
        ref39: "[39] ACM, \"Computing Curricula 2020\", published December 2020, ACM/IEEE Computer Society.",
        ref40: "[40] Prather, J., et al., \"The Robots Are Here: Navigating the Generative AI Revolution in Computing Education\", published June 2023, ACM Inroads, vol. 14, no. 2.",
        ref41: "[41] Forsgren, N., et al., \"Accelerate: The Science of Lean Software and DevOps\", published 2018, IT Revolution Press.",
        ref42: "[42] Stack Overflow, \"2023 Developer Survey\", published May 2023, Stack Overflow.",
        ref43: "[43] Nguyen, N., Nadi, S., \"An Empirical Evaluation of GitHub Copilot's Code Suggestions\", published 2022, MSR 2022.",
        ref44: "[44] Ross, S., et al., \"Programmer Experiences with GitHub Copilot\", published August 2023, arXiv preprint.",
        ref45: "[45] Google Developers, \"Web Fundamentals - Performance\", Google.",
        ref46: "[46] Thorp, H., \"ChatGPT is fun, but not an author\", published January 2023, Science, vol. 379, no. 6630.",
        ref47: "[47] Kalluri, P., \"Don't ask if artificial intelligence is good or fair, ask how it shifts power\", published July 2020, Nature, vol. 583.",
        ref48: "[48] Buolamwini, J., Gebru, T., \"Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification\", published 2018, FAT 2018.",
        ref49: "[49] Borji, A., \"A Categorical Archive of ChatGPT Failures\", published February 2023, arXiv preprint.",
        ref50: "[50] Pearce, H., et al., \"Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions\", published May 2022, IEEE Symposium on Security and Privacy.",
        ref51: "[51] Alkaissi, H., McFarlane, S., \"Artificial Hallucinations in ChatGPT: Implications in Scientific Writing\", published February 2023, Cureus.",
        ref52: "[52] Bass, L., et al., \"Software Architecture in Practice\", published 2021, 4th Edition, Addison-Wesley.",
        ref53: "[53] Radford, A., et al., \"Language Models are Unsupervised Multitask Learners\", published 2019, OpenAI Blog.",
        ref54: "[54] IEEE, \"IEEE Code of Ethics\", IEEE.",
        ref55: "[55] Brynjolfsson, E., et al., \"Generative AI at Work\", published April 2023, NBER Working Paper.",
        ref56: "[56] Hutson, M., \"Could AI help you to write better code?\", published April 2023, Nature, vol. 616.",
        
        // Footer
        footerText: "&copy; 2025 Faculty of Mathematics and Informatics, Sofia University \"St. Kliment Ohridski\"",
        footerCourse: "Web Technologies Course, 25th Edition (Winter Semester 2025-2026)",
        footerAuthor: "Student FMI • Faculty number • <a href='https://github.com' target='_blank' rel='noopener noreferrer' class='github-link'><svg width='20' height='20' viewBox='0 0 16 16' fill='currentColor' style='vertical-align: middle; margin-right: 4px'><path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'/></svg>GitHub</a>",
    }
};

// Current language (default: Bulgarian)
let currentLanguage = 'bg';
let translationsApplied = false; // Guard to avoid re-applying and wiping :target highlight

/**
 * Switch between languages
 * @param {string} lang - Language code ('bg' or 'en')
 */
function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not supported`);
        return;
    }
    
    currentLanguage = lang;
    translationsApplied = true;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active language button
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Save preference to localStorage
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
        console.warn('Could not save language preference to localStorage');
    }
}

/**
 * Initialize i18n system on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Apply translations exactly once at startup so citation anchors exist before any click
    if (!translationsApplied) {
        try {
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && translations[savedLang]) {
                switchLanguage(savedLang);
            } else {
                switchLanguage(currentLanguage);
            }
        } catch (e) {
            console.warn('Could not load language preference from localStorage');
            switchLanguage(currentLanguage);
        }
    }
});

/**
 * Get translation for a specific key
 * @param {string} key - Translation key
 * @param {string} lang - Language code (optional, defaults to current language)
 * @returns {string} Translated text
 */
function translate(key, lang = currentLanguage) {
    return translations[lang][key] || key;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { switchLanguage, translate, translations };
}
