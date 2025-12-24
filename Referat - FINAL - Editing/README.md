# Prompt Engineering и Web разработка с ChatGPT

**Тема №187** | Курс по Уеб технологии (25 издание) | Зимен семестър 2025-2026

---

## 📖 За проекта

Интерактивен академичен реферат, изследващ приложението на инженерството на промптове в контекста на уеб разработката с ChatGPT. Проектът представлява пълнофункционален информационен уеб сайт с модерен дизайн, семантична структура и богата интерактивност.

**Автор:** Михаил Доброславски  
**Факултетен номер:** 8MI0800216  
**Университет:** Софийски университет "Св. Климент Охридски"  
**Факултет:** Математика и информатика

---

## 🚀 Как да видите проекта

### Метод 1: Директно отваряне в браузър (Препоръчително)

1. Отворете файла `referat.html` директно в любимия си браузър:
   ```bash
   # Linux/Mac
   open referat.html
   # или просто double-click на файла
   ```

2. Или използвайте File → Open в браузъра и изберете `referat.html`

### Метод 2: Локален HTTP сървър (За пълна функционалност)

За най-добро преживяване, особено ако браузърът блокира локални файлове:

```bash
# С Python 3
python3 -m http.server 8000

# С Node.js (ако имате npx)
npx http-server

# С PHP
php -S localhost:8000
```

След това отворете: `http://localhost:8000`

### Метод 3: VS Code Live Server

Ако използвате VS Code:
1. Инсталирайте разширението "Live Server"
2. Right-click на `referat.html` → "Open with Live Server"

---

## ✨ Функционалности

### 🎨 Визуален дизайн
- **Glassmorphism UI** - Модерен frosted glass ефект
- **Анимирани SVG икони** - Floating animations в hero секцията
- **Градиентни ефекти** - Dynamic gradient orbs с animations
- **Responsive дизайн** - Адаптивен layout за mobile, tablet, desktop
- **Smooth animations** - CSS transitions и keyframe animations
- **Progress bar** - Визуален индикатор за четене на страницата

### 🌓 Тъмна тема
- **Dark/Light mode toggle** - Превключване с плавна анимация
- **Persistent preference** - Запазване на избора в localStorage
- **Адаптивна цветова схема** - Оптимизирани палитри за двата режима
- **SVG theme sync** - Автоматично адаптиране на SVG икони

### 🌍 Многоезичност (i18n)
- **Двуезична поддръжка** - Български и английски език
- **Instant switching** - Моментално превключване без презареждане
- **3000+ translation strings** - Пълен превод на всички текстове
- **Persistent language** - Запазване на избрания език

### 🎯 Навигация и UX
- **Sticky navigation** - Фиксирана навигация при скрол
- **Smooth scroll** - Плавно скролиране до секции
- **Active section highlight** - Подсветка на текущата секция
- **Mobile menu** - Hamburger menu за мобилни устройства
- **Scroll-to-top button** - Бързо връщане нагоре

### 📝 Съдържание
- **51 академични цитата** - Правилно форматирани източници (APA style)
- **9 код примера** - Интерактивно зареждане от external файлове
- **Семантичен HTML5** - Proper използване на semantic tags
- **Internal linking** - Hyperlinks към термини и секции
- **Фигури и таблици** - Structured data visualization

### ♿ Достъпност (Accessibility)
- **ARIA labels** - Proper accessibility attributes
- **Keyboard navigation** - Tab navigation support
- **Semantic structure** - Правилна HTML йерархия
- **Alt texts** - Описателни текстове за изображения
- **Focus indicators** - Ясни focus states

### 🖨️ Печат
- **Print optimization** - Специални стилове за принтиране
- **Page breaks** - Правилно разделяне на секции
- **Simplified layout** - Премахване на decorative elements

---

## 🛠️ Технологичен стек

### Frontend

#### HTML5
- Semantic markup (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Custom data attributes (`data-i18n`, `data-theme`)
- Meta tags за SEO и social sharing
- Open Graph protocol support

#### CSS3
- **CSS Grid** - Advanced layout system
- **Flexbox** - Flexible box layouts
- **CSS Variables** - Dynamic theming с custom properties
- **Animations** - Keyframes и transitions
- **Media queries** - Responsive breakpoints
- **Glassmorphism** - backdrop-filter effects
- **CSS gradients** - Linear и radial gradients

#### JavaScript (Vanilla ES6+)
- **Модулен код** - Разделени файлове по функционалност:
  - `main.js` (1104 lines) - Core functionality
  - `i18n.js` (3000+ lines) - Internationalization system
  - `code-loader.js` - Dynamic code loading
- **Event-driven architecture** - Event listeners и callbacks
- **LocalStorage API** - Persistent preferences
- **DOM manipulation** - Dynamic content updates
- **Throttling/Debouncing** - Performance optimization
- **Intersection Observer** - Scroll animations (optional)

### Библиотеки и инструменти

**Липса на external dependencies!** 
- ✅ Zero frameworks (No React, Vue, Angular)
- ✅ Zero libraries (No jQuery, Bootstrap)
- ✅ Pure vanilla JavaScript
- ✅ Self-contained CSS

### Assets

#### SVG Icons (9 броя)
- `chatgpt-logo.svg`
- `neural-network.svg`
- `brain-ai.svg`
- `code-brackets.svg`
- `openai-spark.svg`
- `robot-head.svg`
- `data-nodes.svg`
- `prompt-message.svg`
- `concentric-circles.svg`

#### Code Examples (9 файла)
- `code-1-basic-prompt.txt`
- `code-2-advanced-prompt.txt`
- `code-3-few-shot.txt`
- `code-4-chain-of-thought.txt`
- `code-5-html-template.html`
- `code-6-css-grid.css`
- `code-7-dom-manipulation.js`
- `code-8-i18n.js`
- `code-9-meta-tags.html`

---

## 📁 Структура на проекта

```
Referat - FINAL - Editing/
│
├── referat.html                 # Главен HTML файл
│
├── css/
│   └── site.css              # Главен stylesheet (1851 lines)
│
├── javascript/
│   ├── main.js               # Core functionality (1104 lines)
│   ├── i18n.js               # i18n система (3000+ lines)
│   ├── i18n.js.backup        # Backup на i18n
│   └── code-loader.js        # Dynamic code loading
│
├── img/
│   └── icons/                # SVG икони (9 файла)
│       ├── chatgpt-logo.svg
│       ├── neural-network.svg
│       ├── brain-ai.svg
│       ├── code-brackets.svg
│       ├── openai-spark.svg
│       ├── robot-head.svg
│       ├── data-nodes.svg
│       ├── prompt-message.svg
│       └── concentric-circles.svg
│
├── code-examples/            # Примерен код (9 файла)
│   ├── code-1-basic-prompt.txt
│   ├── code-2-advanced-prompt.txt
│   ├── code-3-few-shot.txt
│   ├── code-4-chain-of-thought.txt
│   ├── code-5-html-template.html
│   ├── code-6-css-grid.css
│   ├── code-7-dom-manipulation.js
│   ├── code-8-i18n.js
│   └── code-9-meta-tags.html
│
├── docs/
│   ├── referat.tex           # LaTeX source
│   ├── referat.aux           # LaTeX auxiliary files
│   ├── referat.toc           # Table of contents
│   ├── referat.lof           # List of figures
│   ├── referat.lot           # List of tables
│   └── referat.lol           # List of listings
│
└── README.md                 # Този файл
```

---

## 🎓 Академични изисквания

### Изпълнени изисквания ✅

- ✅ **Семантичен HTML5** - Правилна структура
- ✅ **Стилизиран CSS** - Професионален дизайн
- ✅ **Интерактивност** - Rich JavaScript functionality
- ✅ **51 цитата на английски** - Академични източници
- ✅ **Правилно форматиране** - APA citation style
- ✅ **Фигури и код** - Properly referenced
- ✅ **Директорна структура** - css/, javascript/, img/
- ✅ **Accessibility** - ARIA и semantic markup
- ✅ **Responsive design** - Mobile-first approach

### Съдържание

**Обем:** ~15 страници еквивалент (при печат)

**Секции:**
1. Резюме (Abstract)
2. Терминология
3. Въведение
4. Какво е Prompt Engineering
5. Техники и подходи
6. Приложения в Web разработката
7. Примери и демонстрации
8. Рискове и ограничения
9. Заключение
10. Благодарности
11. Цитирана литература (51 източника)

---

## 🌟 Highlights

### Иновативни решения

1. **Custom i18n система** - Zero dependencies, 3000+ strings
2. **Theme persistence** - localStorage без external libraries
3. **Dynamic code loading** - Async fetch за код примери
4. **Glassmorphism UI** - Modern design trends
5. **SVG animations** - Pure CSS keyframe animations
6. **Zero frameworks** - Pure vanilla JavaScript

### Performance оптимизации

- **Throttled scroll events** - Намалено CPU usage
- **Debounced resize handlers** - Smooth resizing
- **CSS containment** - Layout optimization
- **Lazy evaluation** - Code loading on demand
- **Minimal reflows** - Efficient DOM updates

---

## 📊 Статистика

- **HTML:** 767 lines
- **CSS:** 1,851 lines
- **JavaScript:** ~5,200+ lines total
  - main.js: 1,104 lines
  - i18n.js: 3,000+ lines
  - code-loader.js: ~100 lines
- **Total codebase:** ~7,800+ lines
- **Citations:** 51 academic sources
- **Code examples:** 9 files
- **SVG icons:** 9 files
- **Supported languages:** 2 (BG, EN)
- **Sections:** 10 major sections

---

## 🔍 Browser compatibility

Тестван и работещ в:
- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Изисквания:**
- Modern browser с ES6+ support
- JavaScript enabled
- localStorage support (за preferences)

---

## 📝 Бележки

### За преподавателя

- Всички цитати са **ръчно верифицирани** за валидност
- Съдържанието е **оригинално** и авторско
- AI инструменти са използвани като **помощно средство** (виж Секция 7.5)
- Проектът демонстрира **балансиран подход** към AI-assisted development

### Прозрачност

Проектът включва раздел (Секция 7.5) за честна дискусия на ролята на AI в разработката, в съответствие с етичните принципи, представени в самия реферат.

---

## 🔗 Връзки

- **GitHub Repository:** [github.com/MishoMish/WEB-2025/tree/main/Referat%20-%20FINAL%20-%20Editing](https://github.com/MishoMish/WEB-2025/tree/main/Referat%20-%20FINAL%20-%20Editing)
- **Course:** Уеб технологии (25 издание)
- **University:** Sofia University "St. Kliment Ohridski"
- **Faculty:** Faculty of Mathematics and Informatics

---

## 📄 Лиценз

© 2025 Михаил Доброславски. Академичен проект за курс по Уеб технологии.

Този проект е разработен за образователни цели като част от курсовите изисквания. Всички цитирани източници принадлежат на съответните им автори.

---

**Дата на завършване:** Декември 2025  
**Версия:** 2.0 (Final)
