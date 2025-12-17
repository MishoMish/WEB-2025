/**
 * Internationalization (i18n) System
 * Supports Bulgarian (bg) and English (en) languages
 */

const translations = {
    bg: {
        // Page title
        pageTitle: 'Prompt Engineering и Web разработка с ChatGPT',
        heroSubtitle: 'Изследване на бъдещето на разработката с изкуствен интелект',
        heroMeta: 'Уеб Технологии, 25 издание • Зимен семестър 2025-2026',
        scrollDown: 'Надолу',
        
        // Navigation
        navIntro: 'Въведение',
        navPrompt: 'Prompt Engineering',
        navWebDev: 'Web разработка',
        navExamples: 'Примери',
        navBestPractices: 'Добри практики',
        navCitations: 'Литература',
        
        // Abstract
        abstractTitle: 'Резюме',
        abstractText: 'Настоящият реферат представя задълбочен анализ на взаимодействието между техниките за Prompt Engineering и съвременната уеб разработка с използване на ChatGPT. Разглеждат се основните принципи на създаване на ефективни промпти, интеграцията на ChatGPT API в уеб приложения, както и практически примери за автоматизация на разработката. Специално внимание се отделя на архитектурните решения, сигурността и оптимизацията при работа с езикови модели <a href="#ref-1"><a href="#ref-1">[1]</a></a><a href="#ref-2"><a href="#ref-2">[2]</a></a><a href="#ref-3"><a href="#ref-3">[3]</a></a>.',
        
        // Introduction
        introTitle: '1. Въведение',
        introWhatIsTitle: '1.1. Какво е ChatGPT',
        introWhatIsText: 'ChatGPT е голям езиков модел (Large Language Model - LLM), разработен от OpenAI, базиран на архитектурата GPT (Generative Pre-trained Transformer) <a href="#ref-4"><a href="#ref-4">[4]</a></a>. Моделът е обучен на огромни количества текстови данни и може да генерира човешки текст, отговаря на въпроси, пише код и асистира в различни задачи <a href="#ref-5"><a href="#ref-5">[5]</a></a>.',
        introHistoryText: 'Първата версия на GPT е пусната през 2018 година, като всяка следваща итерация значително подобрява възможностите на модела. GPT-3, пуснат през 2020 г., съдържа 175 милиарда параметъра и представлява революция в обработката на естествен език <a href="#ref-6"><a href="#ref-6">[6]</a></a>. ChatGPT, базиран на GPT-3.5 и GPT-4, добавя възможност за диалогово взаимодействие и е оптимизиран чрез Reinforcement Learning from Human Feedback (RLHF) <a href="#ref-7"><a href="#ref-7">[7]</a></a>.',
        introWebDevTitle: '1.2. Значение за уеб разработката',
        introWebDevText: 'Интеграцията на ChatGPT в уеб разработката отваря нови възможности за <a href="#ref-9"><a href="#ref-9">[9]</a></a><a href="#ref-10"><a href="#ref-10">[10]</a></a>:',
        
        // Web dev benefits
        webDevBenefit1: 'Автоматизация на генерирането на код',
        webDevBenefit2: 'Интелигентни чат ботове и виртуални асистенти',
        webDevBenefit3: 'Обработка и анализ на текст',
        webDevBenefit4: 'Персонализация на съдържание',
        webDevBenefit5: 'Автоматизирано тестване и debugging',
        
        // Figure captions
        figure1Caption: '<strong>Фигура 1.</strong> Еволюция на GPT моделите от GPT-1 до GPT-4 <a href="#ref-8"><a href="#ref-8">[8]</a></a>',
        figure2Caption: '<strong>Фигура 2.</strong> Визуализация на Chain-of-Thought промптинг <a href="#ref-18"><a href="#ref-18">[18]</a></a>',
        figure3Caption: '<strong>Фигура 3.</strong> Препоръчителна архитектура с backend proxy <a href="#ref-27"><a href="#ref-27">[27]</a></a>',
        figure4Caption: '<strong>Фигура 4.</strong> Зависимост между точност и сложност на задачата <a href="#ref-40"><a href="#ref-40">[40]</a></a>',
        
        // Prompt Engineering section
        promptTitle: '2. Prompt Engineering - Основни концепции',
        promptDefTitle: '2.1. Дефиниция и значение',
        promptDefText: 'Prompt Engineering е процесът на проектиране и оптимизация на входните данни (промптове), които се подават на езикови модели, за да се получат желаните резултати <a href="#ref-11"><a href="#ref-11">[11]</a></a>. Ефективният промпт може драматично да подобри качеството на генерираните отговори, точността и релевантността на изхода <a href="#ref-12"><a href="#ref-12">[12]</a></a>.',
        
        // Table captions
        table1Caption: '<strong>Таблица 1.</strong> Сравнение на типове промпти',
        table2Caption: '<strong>Таблица 2.</strong> Сравнение на архитектурни подходи',
        table3Caption: '<strong>Таблица 3.</strong> Сравнение на OpenAI модели (приблизителни данни)',
        
        // Table headers
        tableType: 'Тип промпт',
        tableDesc: 'Описание',
        tableUseCase: 'Приложение',
        tableEffective: 'Ефективност',
        
        // Table content
        zeroShotDesc: 'Директен въпрос без примери',
        zeroShotUse: 'Прости задачи',
        fewShotDesc: 'Включва примери за контекст',
        fewShotUse: 'Специфични формати',
        cotDesc: 'Стъпка по стъпка разсъждение',
        cotUse: 'Сложни проблеми',
        
        // Techniques
        promptTechniquesTitle: '2.2. Техники за Prompt Engineering',
        technique1Title: '2.2.1. Zero-shot Prompting',
        technique1Text: 'Zero-shot prompting е базова техника, при която моделът получава задачата директно, без предварителни примери <a href="#ref-13"><a href="#ref-13">[13]</a></a>. Това е най-простият подход, но изисква ясно и прецизно формулиране.',
        technique2Title: '2.2.2. Few-shot Prompting',
        technique2Text: 'Few-shot prompting включва предоставянето на няколко примера, които демонстрират желания формат или стил на отговор <a href="#ref-15"><a href="#ref-15">[15]</a></a>. Това значително подобрява качеството на генерираните резултати, особено при специфични формати.',
        technique3Title: '2.2.3. Chain-of-Thought (CoT) Prompting',
        technique3Text: 'Chain-of-Thought е техника, при която се насърчава моделът да "мисли на глас" и да обяснява своята логика стъпка по стъпка <a href="#ref-17"><a href="#ref-17">[17]</a></a>. Това е особено ефективно при сложни задачи по програмиране и дебъгване.',
        
        // Principles
        promptPrinciplesTitle: '2.3. Принципи за ефективни промпти',
        promptPrinciplesText: 'За създаването на ефективни промпти е необходимо да се спазват следните принципи <a href="#ref-19"><a href="#ref-19">[19]</a></a><a href="#ref-20"><a href="#ref-20">[20]</a></a>:',
        principle1: '<strong>Яснота и специфичност:</strong> Бъдете прецизни в изискванията',
        principle2: '<strong>Контекст:</strong> Предоставете достатъчно информация за задачата',
        principle3: '<strong>Формат:</strong> Опишете ясно желания формат на изхода',
        principle4: '<strong>Ограничения:</strong> Посочете всички ограничения и изисквания',
        principle5: '<strong>Итерация:</strong> Усъвършенствайте промпта чрез тестване',
        
        // Web Development
        webDevTitle: '3. Интеграция на ChatGPT в уеб приложения',
        apiIntegrationTitle: '3.1. OpenAI API - Основи',
        apiIntegrationText: 'OpenAI предоставя RESTful API, което позволява интеграция на ChatGPT във всяко уеб приложение <a href="#ref-21">[21]</a>. API-то използва HTTP заявки и JSON формат за комуникация.',
        frontendIntegrationTitle: '3.2. Frontend интеграция',
        frontendIntegrationText: 'При frontend интеграцията е критично важно да се следват best practices за сигурност и производителност <a href="#ref-23">[23]</a>. Никога не трябва да се излага API ключа директно в клиентския код.',
        backendIntegrationTitle: '3.3. Backend интеграция (Node.js/Express)',
        backendIntegrationText: 'Backend сървърът действа като посредник между клиента и OpenAI API, осигурявайки сигурност и контрол <a href="#ref-25">[25]</a>.',
        architectureTitle: '3.4. Архитектурни подходи',
        
        // Architecture table
        archApproach: 'Подход',
        archAdvantages: 'Предимства',
        archDisadvantages: 'Недостатъци',
        archBestFor: 'Най-добре за',
        directApiAdv: 'Проста имплементация',
        directApiDisadv: 'Сигурност, разходи',
        directApiBest: 'Прототипи',
        proxyAdv: 'Сигурност, контрол',
        proxyDisadv: 'Допълнителна сложност',
        proxyBest: 'Production',
        serverlessAdv: 'Мащабируемост',
        serverlessDisadv: 'Cold start, vendor lock',
        serverlessBest: 'Променлив трафик',
        
        // Code captions
        code1Caption: '<strong>Код 1.</strong> Zero-shot промпт за генериране на HTML форма <a href="#ref-14">[14]</a>',
        code2Caption: '<strong>Код 2.</strong> Few-shot промпт за CSS генериране <a href="#ref-16">[16]</a>',
        code3Caption: '<strong>Код 3.</strong> Базова настройка на OpenAI API клиент <a href="#ref-22">[22]</a>',
        code4Caption: '<strong>Код 4.</strong> Frontend чат интерфейс със защита срещу XSS <a href="#ref-24">[24]</a>',
        code5Caption: '<strong>Код 5.</strong> Express backend с rate limiting и валидация <a href="#ref-26">[26]</a>',
        code6Caption: '<strong>Код 6.</strong> Промпт за генериране на React компонент <a href="#ref-29">[29]</a>',
        code7Caption: '<strong>Код 7.</strong> Debugging промпт с примерно решение <a href="#ref-31">[31]</a>',
        code8Caption: '<strong>Код 8.</strong> Автоматично генерирана JSDoc документация <a href="#ref-33">[33]</a>',
        code9Caption: '<strong>Код 9.</strong> Защита от prompt injection атаки <a href="#ref-36">[36]</a>',
        
        // Examples
        examplesTitle: '4. Практически примери',
        exampleCodeGenTitle: '4.1. Генериране на код',
        exampleCodeGenText: 'ChatGPT може ефективно да генерира уеб код базиран на естествени описания <a href="#ref-28">[28]</a>. Важно е промптът да съдържа специфични изисквания за технологии, стил и функционалност.',
        exampleDebugTitle: '4.2. Debugging и оптимизация',
        exampleDebugText: 'ChatGPT може да помогне при откриване и поправяне на грешки в кода <a href="#ref-30">[30]</a>. Ефективният debugging промпт трябва да включва: проблемното поведение, очакваното поведение и релевантния код.',
        exampleDocTitle: '4.3. Генериране на документация',
        exampleDocText: 'Автоматичното генериране на документация е една от най-полезните приложения на ChatGPT <a href="#ref-32">[32]</a>. Моделът може да анализира код и да създаде професионална документация.',
        
        // Best Practices
        bestPracticesTitle: '5. Добри практики и предизвикателства',
        securityTitle: '5.1. Сигурност',
        securityText: 'При интеграция на ChatGPT в production среда, сигурността е критичен фактор <a href="#ref-34">[34]</a><a href="#ref-35">[35]</a>:',
        security1: '<strong>API ключове:</strong> Никога не ги излагайте в client-side код',
        security2: '<strong>Rate Limiting:</strong> Ограничете броя заявки от един потребител',
        security3: '<strong>Input Validation:</strong> Валидирайте и санитизирайте всички входни данни',
        security4: '<strong>Prompt Injection:</strong> Защитавайте се от злонамерени промпти',
        security5: '<strong>Data Privacy:</strong> Не изпращайте чувствителни данни към API',
        
        // Performance
        performanceTitle: '5.2. Производителност и разходи',
        performanceText: 'Оптимизацията на производителността и контролът на разходите са ключови за устойчиви приложения <a href="#ref-37">[37]</a>:',
        modelName: 'Модел',
        modelSpeed: 'Скорост',
        modelCost: 'Цена/1K tokens',
        modelQuality: 'Качество',
        modelUse: 'Препоръчително за',
        gpt35Speed: 'Много бърз',
        gpt35Quality: 'Добро',
        gpt35Use: 'Общи задачи',
        gpt4Speed: 'По-бавен',
        gpt4Quality: 'Отлично',
        gpt4Use: 'Сложни задачи',
        gpt4tSpeed: 'Бърз',
        gpt4tQuality: 'Много добро',
        gpt4tUse: 'Balance',
        
        // Optimization
        optimizationTitle: 'Техники за оптимизация:',
        opt1: '<strong>Caching:</strong> Кеширайте често използвани отговори',
        opt2: '<strong>Token Management:</strong> Оптимизирайте дължината на промптите',
        opt3: '<strong>Model Selection:</strong> Използвайте подходящия модел за задачата',
        opt4: '<strong>Streaming:</strong> Използвайте streaming за по-добър UX',
        opt5: '<strong>Batching:</strong> Групирайте заявки когато е възможно',
        
        // Limitations
        limitationsTitle: '5.3. Ограничения и предизвикателства',
        limitationsText: 'Важно е да се разбират ограниченията на технологията <a href="#ref-38">[38]</a><a href="#ref-39">[39]</a>:',
        limit1: '<strong>Hallucinations:</strong> Моделът може да генерира невярна информация с увереност',
        limit2: '<strong>Context Window:</strong> Ограничен размер на контекста (4K-128K tokens)',
        limit3: '<strong>Knowledge Cutoff:</strong> Данните са актуални до определена дата',
        limit4: '<strong>Consistency:</strong> Отговорите могат да варират при идентични промпти',
        limit5: '<strong>Специализирани задачи:</strong> Може да не е оптимален за всички use cases',
        
        // Future
        futureTitle: '5.4. Бъдещо развитие',
        futureText: 'Технологията на LLM моделите продължава да се развива бързо <a href="#ref-41">[41]</a><a href="#ref-42">[42]</a>:',
        future1: '<strong>Multimodal Models:</strong> Интеграция на текст, изображения, звук и видео',
        future2: '<strong>Fine-tuning:</strong> По-лесно персонализиране за специфични задачи',
        future3: '<strong>Agents:</strong> Автономни AI агенти за комплексни workflow-ове',
        future4: '<strong>Real-time Learning:</strong> Модели, които се обучават в реално време',
        future5: '<strong>Reduced Costs:</strong> Намаляване на разходите и повишаване на скоростта',
        
        // Conclusion
        conclusionTitle: '6. Заключение',
        conclusionText1: 'Prompt Engineering и интеграцията на ChatGPT в уеб приложения представляват значителна промяна в начина, по който разработваме софтуер <a href="#ref-43">[43]</a>. Технологията предлага безпрецедентни възможности за автоматизация, подобряване на производителността и създаване на интелигентни приложения.',
        conclusionText2: 'Успешната имплементация изисква задълбочено разбиране на принципите на Prompt Engineering, правилна архитектура на приложението и постоянно внимание към сигурността и оптимизацията <a href="#ref-44">[44]</a>. Разработчиците трябва да балансират между иновацията и отговорността, като използват тази мощна технология етично и ефективно.',
        conclusionText3: 'С развитието на технологията, очакваме да видим още по-силна интеграция между AI асистенти и уеб разработката, което ще доведе до нови парадигми в създаването на дигитални продукти <a href="#ref-45">[45]</a>. Ключът към успеха е непрекъснатото обучение и адаптиране към новите възможности, които тази технология предлага.',
        
        // Lists
        citationsTitle: 'Цитирана литература',
        listsTitle: 'Приложения',
        codeListTitle: 'Списък с примерен програмен код',
        figureListTitle: 'Списък с фигури',
        tableListTitle: 'Списък с таблици',
        
        // Footer
        footerText: '© 2025 Факултет по математика и информатика, СУ "Св. Климент Охридски"',
        footerCourse: 'Курс по Уеб технологии, 25 издание (зимен семестър 2025-2026)'
    },
    
    en: {
        // Page title
        pageTitle: 'Prompt Engineering and Web Development with ChatGPT',
        heroSubtitle: 'Exploring the Future of AI-Powered Development',
        heroMeta: 'Web Technologies, 25th Edition • Winter Semester 2025-2026',
        scrollDown: 'Scroll Down',
        
        // Navigation
        navIntro: 'Introduction',
        navPrompt: 'Prompt Engineering',
        navWebDev: 'Web Development',
        navExamples: 'Examples',
        navBestPractices: 'Best Practices',
        navCitations: 'References',
        
        // Abstract
        abstractTitle: 'Abstract',
        abstractText: 'This paper presents an in-depth analysis of the interaction between Prompt Engineering techniques and modern web development using ChatGPT. It examines the core principles of creating effective prompts, integrating the ChatGPT API into web applications, and practical examples for development automation. Special attention is given to architectural decisions, security, and optimization when working with language models <a href="#ref-1">[1]</a><a href="#ref-2">[2]</a><a href="#ref-3">[3]</a>.',
        
        // Introduction
        introTitle: '1. Introduction',
        introWhatIsTitle: '1.1. What is ChatGPT',
        introWhatIsText: 'ChatGPT is a Large Language Model (LLM) developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture <a href="#ref-4">[4]</a>. The model is trained on vast amounts of text data and can generate human-like text, answer questions, write code, and assist with various tasks <a href="#ref-5">[5]</a>.',
        introHistoryText: 'The first version of GPT was released in 2018, with each subsequent iteration significantly improving the model\'s capabilities. GPT-3, released in 2020, contains 175 billion parameters and represents a revolution in natural language processing <a href="#ref-6">[6]</a>. ChatGPT, based on GPT-3.5 and GPT-4, adds conversational interaction capabilities and is optimized through Reinforcement Learning from Human Feedback (RLHF) <a href="#ref-7">[7]</a>.',
        introWebDevTitle: '1.2. Significance for Web Development',
        introWebDevText: 'Integrating ChatGPT into web development opens new possibilities for <a href="#ref-9">[9]</a><a href="#ref-10">[10]</a>:',
        
        // Web dev benefits
        webDevBenefit1: 'Code generation automation',
        webDevBenefit2: 'Intelligent chatbots and virtual assistants',
        webDevBenefit3: 'Text processing and analysis',
        webDevBenefit4: 'Content personalization',
        webDevBenefit5: 'Automated testing and debugging',
        
        // Figure captions
        figure1Caption: '<strong>Figure 1.</strong> Evolution of GPT models from GPT-1 to GPT-4 <a href="#ref-8">[8]</a>',
        figure2Caption: '<strong>Figure 2.</strong> Chain-of-Thought prompting visualization <a href="#ref-18">[18]</a>',
        figure3Caption: '<strong>Figure 3.</strong> Recommended architecture with backend proxy <a href="#ref-27">[27]</a>',
        figure4Caption: '<strong>Figure 4.</strong> Relationship between accuracy and task complexity <a href="#ref-40">[40]</a>',
        
        // Prompt Engineering section
        promptTitle: '2. Prompt Engineering - Core Concepts',
        promptDefTitle: '2.1. Definition and Significance',
        promptDefText: 'Prompt Engineering is the process of designing and optimizing input data (prompts) that are fed to language models to obtain desired results <a href="#ref-11">[11]</a>. An effective prompt can dramatically improve the quality of generated responses, accuracy, and relevance of output <a href="#ref-12">[12]</a>.',
        
        // Table captions
        table1Caption: '<strong>Table 1.</strong> Comparison of prompt types',
        table2Caption: '<strong>Table 2.</strong> Comparison of architectural approaches',
        table3Caption: '<strong>Table 3.</strong> Comparison of OpenAI models (approximate data)',
        
        // Table headers
        tableType: 'Prompt Type',
        tableDesc: 'Description',
        tableUseCase: 'Use Case',
        tableEffective: 'Effectiveness',
        
        // Table content
        zeroShotDesc: 'Direct question without examples',
        zeroShotUse: 'Simple tasks',
        fewShotDesc: 'Includes examples for context',
        fewShotUse: 'Specific formats',
        cotDesc: 'Step-by-step reasoning',
        cotUse: 'Complex problems',
        
        // Techniques
        promptTechniquesTitle: '2.2. Prompt Engineering Techniques',
        technique1Title: '2.2.1. Zero-shot Prompting',
        technique1Text: 'Zero-shot prompting is a basic technique where the model receives the task directly, without prior examples <a href="#ref-13">[13]</a>. This is the simplest approach but requires clear and precise formulation.',
        technique2Title: '2.2.2. Few-shot Prompting',
        technique2Text: 'Few-shot prompting involves providing several examples that demonstrate the desired format or response style <a href="#ref-15">[15]</a>. This significantly improves the quality of generated results, especially for specific formats.',
        technique3Title: '2.2.3. Chain-of-Thought (CoT) Prompting',
        technique3Text: 'Chain-of-Thought is a technique that encourages the model to "think aloud" and explain its logic step by step <a href="#ref-17">[17]</a>. This is particularly effective for complex programming and debugging tasks.',
        
        // Principles
        promptPrinciplesTitle: '2.3. Principles for Effective Prompts',
        promptPrinciplesText: 'Creating effective prompts requires following these principles <a href="#ref-19">[19]</a><a href="#ref-20">[20]</a>:',
        principle1: '<strong>Clarity and Specificity:</strong> Be precise in your requirements',
        principle2: '<strong>Context:</strong> Provide sufficient information about the task',
        principle3: '<strong>Format:</strong> Clearly describe the desired output format',
        principle4: '<strong>Constraints:</strong> Specify all limitations and requirements',
        principle5: '<strong>Iteration:</strong> Refine the prompt through testing',
        
        // Web Development
        webDevTitle: '3. ChatGPT Integration in Web Applications',
        apiIntegrationTitle: '3.1. OpenAI API - Basics',
        apiIntegrationText: 'OpenAI provides a RESTful API that enables ChatGPT integration into any web application <a href="#ref-21">[21]</a>. The API uses HTTP requests and JSON format for communication.',
        frontendIntegrationTitle: '3.2. Frontend Integration',
        frontendIntegrationText: 'For frontend integration, it is critical to follow best practices for security and performance <a href="#ref-23">[23]</a>. API keys should never be exposed in client-side code.',
        backendIntegrationTitle: '3.3. Backend Integration (Node.js/Express)',
        backendIntegrationText: 'The backend server acts as a mediator between the client and OpenAI API, ensuring security and control <a href="#ref-25">[25]</a>.',
        architectureTitle: '3.4. Architectural Approaches',
        
        // Architecture table
        archApproach: 'Approach',
        archAdvantages: 'Advantages',
        archDisadvantages: 'Disadvantages',
        archBestFor: 'Best For',
        directApiAdv: 'Simple implementation',
        directApiDisadv: 'Security, costs',
        directApiBest: 'Prototypes',
        proxyAdv: 'Security, control',
        proxyDisadv: 'Additional complexity',
        proxyBest: 'Production',
        serverlessAdv: 'Scalability',
        serverlessDisadv: 'Cold start, vendor lock',
        serverlessBest: 'Variable traffic',
        
        // Code captions
        code1Caption: '<strong>Code 1.</strong> Zero-shot prompt for HTML form generation <a href="#ref-14">[14]</a>',
        code2Caption: '<strong>Code 2.</strong> Few-shot prompt for CSS generation <a href="#ref-16">[16]</a>',
        code3Caption: '<strong>Code 3.</strong> Basic OpenAI API client setup <a href="#ref-22">[22]</a>',
        code4Caption: '<strong>Code 4.</strong> Frontend chat interface with XSS protection <a href="#ref-24">[24]</a>',
        code5Caption: '<strong>Code 5.</strong> Express backend with rate limiting and validation <a href="#ref-26">[26]</a>',
        code6Caption: '<strong>Code 6.</strong> Prompt for React component generation <a href="#ref-29">[29]</a>',
        code7Caption: '<strong>Code 7.</strong> Debugging prompt with sample solution <a href="#ref-31">[31]</a>',
        code8Caption: '<strong>Code 8.</strong> Auto-generated JSDoc documentation <a href="#ref-33">[33]</a>',
        code9Caption: '<strong>Code 9.</strong> Protection against prompt injection attacks <a href="#ref-36">[36]</a>',
        
        // Examples
        examplesTitle: '4. Practical Examples',
        exampleCodeGenTitle: '4.1. Code Generation',
        exampleCodeGenText: 'ChatGPT can effectively generate web code based on natural descriptions <a href="#ref-28">[28]</a>. It is important that the prompt contains specific requirements for technologies, style, and functionality.',
        exampleDebugTitle: '4.2. Debugging and Optimization',
        exampleDebugText: 'ChatGPT can help identify and fix errors in code <a href="#ref-30">[30]</a>. An effective debugging prompt should include: problematic behavior, expected behavior, and relevant code.',
        exampleDocTitle: '4.3. Documentation Generation',
        exampleDocText: 'Automatic documentation generation is one of the most useful applications of ChatGPT <a href="#ref-32">[32]</a>. The model can analyze code and create professional documentation.',
        
        // Best Practices
        bestPracticesTitle: '5. Best Practices and Challenges',
        securityTitle: '5.1. Security',
        securityText: 'When integrating ChatGPT in a production environment, security is a critical factor <a href="#ref-34">[34]</a><a href="#ref-35">[35]</a>:',
        security1: '<strong>API Keys:</strong> Never expose them in client-side code',
        security2: '<strong>Rate Limiting:</strong> Limit the number of requests per user',
        security3: '<strong>Input Validation:</strong> Validate and sanitize all input data',
        security4: '<strong>Prompt Injection:</strong> Protect against malicious prompts',
        security5: '<strong>Data Privacy:</strong> Don\'t send sensitive data to the API',
        
        // Performance
        performanceTitle: '5.2. Performance and Costs',
        performanceText: 'Performance optimization and cost control are key to sustainable applications <a href="#ref-37">[37]</a>:',
        modelName: 'Model',
        modelSpeed: 'Speed',
        modelCost: 'Price/1K tokens',
        modelQuality: 'Quality',
        modelUse: 'Recommended For',
        gpt35Speed: 'Very fast',
        gpt35Quality: 'Good',
        gpt35Use: 'General tasks',
        gpt4Speed: 'Slower',
        gpt4Quality: 'Excellent',
        gpt4Use: 'Complex tasks',
        gpt4tSpeed: 'Fast',
        gpt4tQuality: 'Very good',
        gpt4tUse: 'Balance',
        
        // Optimization
        optimizationTitle: 'Optimization Techniques:',
        opt1: '<strong>Caching:</strong> Cache frequently used responses',
        opt2: '<strong>Token Management:</strong> Optimize prompt length',
        opt3: '<strong>Model Selection:</strong> Use the appropriate model for the task',
        opt4: '<strong>Streaming:</strong> Use streaming for better UX',
        opt5: '<strong>Batching:</strong> Group requests when possible',
        
        // Limitations
        limitationsTitle: '5.3. Limitations and Challenges',
        limitationsText: 'It is important to understand the technology\'s limitations <a href="#ref-38">[38]</a><a href="#ref-39">[39]</a>:',
        limit1: '<strong>Hallucinations:</strong> The model may generate false information confidently',
        limit2: '<strong>Context Window:</strong> Limited context size (4K-128K tokens)',
        limit3: '<strong>Knowledge Cutoff:</strong> Data is current up to a certain date',
        limit4: '<strong>Consistency:</strong> Responses may vary for identical prompts',
        limit5: '<strong>Specialized Tasks:</strong> May not be optimal for all use cases',
        
        // Future
        futureTitle: '5.4. Future Development',
        futureText: 'LLM model technology continues to develop rapidly <a href="#ref-41">[41]</a><a href="#ref-42">[42]</a>:',
        future1: '<strong>Multimodal Models:</strong> Integration of text, images, audio, and video',
        future2: '<strong>Fine-tuning:</strong> Easier customization for specific tasks',
        future3: '<strong>Agents:</strong> Autonomous AI agents for complex workflows',
        future4: '<strong>Real-time Learning:</strong> Models that learn in real-time',
        future5: '<strong>Reduced Costs:</strong> Decreasing costs and increasing speed',
        
        // Conclusion
        conclusionTitle: '6. Conclusion',
        conclusionText1: 'Prompt Engineering and ChatGPT integration in web applications represent a significant shift in how we develop software <a href="#ref-43">[43]</a>. The technology offers unprecedented opportunities for automation, productivity improvement, and creating intelligent applications.',
        conclusionText2: 'Successful implementation requires deep understanding of Prompt Engineering principles, proper application architecture, and constant attention to security and optimization <a href="#ref-44">[44]</a>. Developers must balance innovation and responsibility, using this powerful technology ethically and effectively.',
        conclusionText3: 'With the development of technology, we expect to see even stronger integration between AI assistants and web development, leading to new paradigms in creating digital products <a href="#ref-45">[45]</a>. The key to success is continuous learning and adapting to the new possibilities this technology offers.',
        
        // Lists
        citationsTitle: 'References',
        listsTitle: 'Appendices',
        codeListTitle: 'List of Code Examples',
        figureListTitle: 'List of Figures',
        tableListTitle: 'List of Tables',
        
        // Footer
        footerText: '© 2025 Faculty of Mathematics and Informatics, Sofia University "St. Kliment Ohridski"',
        footerCourse: 'Web Technologies Course, 25th Edition (Winter Semester 2025-2026)'
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
