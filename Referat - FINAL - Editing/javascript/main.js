/**
 * Enhanced Main JavaScript functionality for the Referat
 * Features: Dark mode, progress bar, animations, accessibility, interactive elements
 */

(function () {
  "use strict";

  /**
   * Initialize all functionality when DOM is ready
   */
  document.addEventListener("DOMContentLoaded", function () {
    initHeroSection();
    initProgressBar();
    initDarkMode();
    initFontSizeControls();
    initSmoothScroll();
    initScrollSpy();
    initTableEnhancements();
    initCodeBlockEnhancements();
    initFigureEnhancements();
    initAccessibility();
    initPrintOptimizations();
    initScrollToTop();
    // initScrollAnimations();
    initNavbarShrink();
    initNavMenuToggle();
    initAutoScrollSnap();

    console.log("✓ All features initialized successfully");
    console.log(
      "🎨 Theme: Prompt Engineering and Web Development with ChatGPT"
    );
    console.log("📚 Course: Web Technologies 25ed (Winter 2025-2026)");
  });

  /**
   * Hero section - no scroll effect needed, just two separate titles
   */
  function initHeroSection() {
    // Simple hero section, navbar is always visible with sticky positioning
    // No complex animations needed
  }

  /**
   * Reading progress bar
   */
  function initProgressBar() {
    const progressBar =
      document.getElementById("progress-bar") || createProgressBar();

    function updateProgressBar() {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset;
      const progress = (scrolled / documentHeight) * 100;

      progressBar.style.width = progress + "%";
    }

    window.addEventListener("scroll", throttle(updateProgressBar, 10));
    updateProgressBar();
  }

  function createProgressBar() {
    const bar = document.createElement("div");
    bar.id = "progress-bar";
    bar.className = "progress-bar";
    document.body.insertBefore(bar, document.body.firstChild);
    return bar;
  }

  /**
   * Dark mode toggle
   */
  function initDarkMode() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (!darkModeToggle) return;

    // Check for saved preference
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateDarkModeButton(darkModeToggle, savedTheme);
    applySVGTheme(savedTheme);

    darkModeToggle.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateDarkModeButton(darkModeToggle, newTheme);
      applySVGTheme(newTheme);

      // Add visual feedback
      darkModeToggle.style.transform = "rotate(360deg)";
      setTimeout(() => {
        darkModeToggle.style.transform = "rotate(0deg)";
      }, 300);
    });
  }

  function updateDarkModeButton(button, theme) {
    const lightIcon = button.querySelector(".icon-light");
    const darkIcon = button.querySelector(".icon-dark");

    if (theme === "dark") {
      lightIcon.style.display = "none";
      darkIcon.style.display = "inline";
    } else {
      lightIcon.style.display = "inline";
      darkIcon.style.display = "none";
    }
  }

  function applySVGTheme(theme) {
    const isDark = theme === "dark";
    const colors = isDark
      ? {
          bg: "#1a1a2e",
          text: "#e0e0e0",
          line: "#555",
          border: "#444",
          panelBg: "#16213e",
          grid: "#333",
        }
      : {
          bg: "#f8f9fa",
          text: "#2c3e50",
          line: "#95a5a6",
          border: "#bdc3c7",
          panelBg: "#ecf0f1",
          grid: "#e0e0e0",
        };

    // Load and embed SVGs inline to enable dynamic theming
    const svgImages = document.querySelectorAll(".diagram-img");
    svgImages.forEach((img) => {
      if (!img.dataset.svgLoaded) {
        fetch(img.src)
          .then((response) => response.text())
          .then((svgText) => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
            const svg = svgDoc.querySelector("svg");

            if (svg) {
              svg.classList.add("dynamic-svg");
              // Remove fixed dimensions for responsive scaling
              svg.removeAttribute("width");
              svg.removeAttribute("height");
              svg.style.width = "100%";
              svg.style.height = "auto";
              svg.style.display = "block";
              svg.style.margin = "0 auto";

              // Replace img with inline SVG
              img.parentNode.replaceChild(svg, img);
              img.dataset.svgLoaded = "true";

              // Apply theme immediately
              applySVGColors(svg, colors);
            }
          })
          .catch((err) => console.warn("Failed to load SVG:", err));
      }
    });

    // Update already loaded inline SVGs
    const inlineSVGs = document.querySelectorAll(".dynamic-svg");
    inlineSVGs.forEach((svg) => {
      // Ensure responsiveness for already inline SVGs
      svg.removeAttribute("width");
      svg.removeAttribute("height");
      svg.style.width = "100%";
      svg.style.height = "auto";
      svg.style.display = "block";
      svg.style.margin = "0 auto";
      applySVGColors(svg, colors);
    });
  }

  function applySVGColors(svg, colors) {
    // Update all backgrounds - be more comprehensive
    const backgrounds = svg.querySelectorAll("rect");
    backgrounds.forEach((el) => {
      const fill = el.getAttribute("fill");
      if (
        fill &&
        (fill.includes("var(--svg-bg)") ||
          fill === "#f8f9fa" ||
          fill === "#1a1a2e" ||
          el.getAttribute("width") ===
            svg.getAttribute("viewBox")?.split(" ")[2])
      ) {
        el.setAttribute("fill", colors.bg);
      } else if (
        fill &&
        (fill.includes("var(--svg-panel-bg)") ||
          fill === "#ecf0f1" ||
          fill === "#16213e" ||
          fill === "white")
      ) {
        // Panel backgrounds and white boxes
        el.setAttribute("fill", colors.panelBg);
      }
    });

    // Update all text elements
    const texts = svg.querySelectorAll("text");
    texts.forEach((el) => {
      const fill = el.getAttribute("fill");
      // Don't change colored text (gradients, special colors)
      if (
        fill &&
        !fill.startsWith("#3") &&
        !fill.startsWith("#e") &&
        !fill.startsWith("#9") &&
        !fill.startsWith("#2") &&
        !fill.startsWith("url")
      ) {
        return;
      }
      if (
        fill === "#2c3e50" ||
        fill === "#e0e0e0" ||
        fill === "#7f8c8d" ||
        fill === "#95a5a6" ||
        fill.includes("var(--svg-text)")
      ) {
        el.setAttribute("fill", colors.text);
      }
    });

    // Update all lines
    const lines = svg.querySelectorAll("line");
    lines.forEach((el) => {
      const stroke = el.getAttribute("stroke");
      if (
        stroke &&
        (stroke === "#bdc3c7" ||
          stroke === "#95a5a6" ||
          stroke === "#555" ||
          stroke.includes("var(--svg-line)"))
      ) {
        el.setAttribute("stroke", colors.line);
      } else if (
        stroke &&
        (stroke === "#2c3e50" ||
          stroke === "#e0e0e0" ||
          stroke.includes("var(--svg-text)"))
      ) {
        el.setAttribute("stroke", colors.text);
      } else if (
        stroke &&
        (stroke === "#e0e0e0" ||
          stroke === "#ecf0f1" ||
          stroke === "#333" ||
          stroke.includes("var(--svg-grid)"))
      ) {
        el.setAttribute("stroke", colors.grid);
      }
    });

    // Update borders on rects
    const rectsWithStroke = svg.querySelectorAll("rect[stroke]");
    rectsWithStroke.forEach((el) => {
      const stroke = el.getAttribute("stroke");
      if (
        stroke &&
        (stroke === "#bdc3c7" ||
          stroke === "#444" ||
          stroke.includes("var(--svg-border)"))
      ) {
        el.setAttribute("stroke", colors.border);
      } else if (
        stroke &&
        (stroke === "#e0e0e0" ||
          stroke === "#333" ||
          stroke.includes("var(--svg-grid)"))
      ) {
        el.setAttribute("stroke", colors.grid);
      }
    });
  }

  /**
   * Font size controls
   */
  function initFontSizeControls() {
    const increaseBtn = document.getElementById("font-size-increase");
    const decreaseBtn = document.getElementById("font-size-decrease");

    if (!increaseBtn || !decreaseBtn) return;

    let currentSize = parseFloat(localStorage.getItem("fontSize")) || 16;
    applyFontSize(currentSize);

    increaseBtn.addEventListener("click", function () {
      if (currentSize < 24) {
        currentSize += 2;
        applyFontSize(currentSize);
        localStorage.setItem("fontSize", currentSize);
      }
    });

    decreaseBtn.addEventListener("click", function () {
      if (currentSize > 12) {
        currentSize -= 2;
        applyFontSize(currentSize);
        localStorage.setItem("fontSize", currentSize);
      }
    });
  }

  function applyFontSize(size) {
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.style.fontSize = size + "px";
    }
  }

  /**
   * Smooth scroll to anchor links
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href === "#") return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
          const navHeight = document.querySelector("#main-nav").offsetHeight;
          const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight -
            20;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          history.pushState(null, null, href);

          // Add visual feedback to target
          target.style.animation = "none";
          setTimeout(() => {
            target.style.animation = "highlightSection 1s ease-out";
          }, 10);
        }
      });
    });

    // Add CSS for highlight animation
    // const style = document.createElement('style');
    // style.textContent = `
    //     @keyframes highlightSection {
    //         0% { background: transparent; }
    //         50% { background: rgba(52, 152, 219, 0.1); }
    //         100% { background: transparent; }
    //     }
    // `;
    // document.head.appendChild(style);
  }

  /**
   * Highlight active navigation link based on scroll position
   */
  function initScrollSpy() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    function updateActiveLink() {
      let currentSection = "";
      const scrollPosition = window.pageYOffset;
      const navHeight = document.querySelector("#main-nav").offsetHeight;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", throttle(updateActiveLink, 100));
    updateActiveLink();
  }

  /**
   * Enhance tables with interactive features
   */
  function initTableEnhancements() {
    const tables = document.querySelectorAll("table");

    tables.forEach((table) => {
      // Add wrapper for horizontal scroll on mobile
      if (!table.parentElement.classList.contains("table-wrapper")) {
        const wrapper = document.createElement("div");
        wrapper.className = "table-wrapper";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }

      // Add row numbers
      const tbody = table.querySelector("tbody");
      if (tbody) {
        const rows = tbody.querySelectorAll("tr");
        rows.forEach((row, index) => {
          row.setAttribute("data-row", index + 1);
        });
      }

      // Add hover effect to headers
      const headers = table.querySelectorAll("thead th");
      headers.forEach((header, index) => {
        if (!header.getAttribute("title")) {
          header.setAttribute("title", header.textContent.trim());
        }

        // Add sort indicator (visual only)
        header.style.cursor = "pointer";
        header.addEventListener("click", function () {
          this.style.transform = "scale(1.05)";
          setTimeout(() => {
            this.style.transform = "scale(1)";
          }, 200);
        });
      });
    });
  }

  /**
   * Enhance code blocks with copy functionality and syntax highlighting
   */
  function initCodeBlockEnhancements() {
    const codeBlocks = document.querySelectorAll(".code-block");

    codeBlocks.forEach((block) => {
      // Add copy button
      const copyButton = document.createElement("button");
      copyButton.className = "copy-code-btn";
      copyButton.textContent = "Copy";
      copyButton.setAttribute("aria-label", "Copy code to clipboard");

      copyButton.addEventListener("click", function () {
        const code = block.querySelector("code");
        const text = code.textContent;

        navigator.clipboard
          .writeText(text)
          .then(() => {
            copyButton.textContent = "Copied!";
            copyButton.style.background = "#27ae60";

            setTimeout(() => {
              copyButton.textContent = "Copy";
              copyButton.style.background = "rgba(255, 255, 255, 0.1)";
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy code:", err);
            copyButton.textContent = "Failed";
            setTimeout(() => {
              copyButton.textContent = "Copy";
            }, 2000);
          });
      });

      block.appendChild(copyButton);

      // Add line numbers
      const code = block.querySelector("code");
      if (code) {
        const lines = code.textContent.split("\n");
        // Filter out trailing empty lines for proper count
        const nonEmptyLines = lines.filter((line, idx) => {
          // Keep all lines except trailing empty ones
          return idx < lines.length - 1 || line.trim() !== "";
        });

        if (nonEmptyLines.length > 3) {
          const lineNumbers = document.createElement("div");
          lineNumbers.className = "line-numbers";
          lineNumbers.style.cssText = `
                        position: absolute;
                        left: 0;
                        top: 0;
                        padding: var(--spacing-md);
                        padding-bottom: 3rem;
                        color: rgba(255,255,255,0.3);
                        user-select: none;
                        pointer-events: none;
                        max-height: 100%;
                        overflow: hidden;
                    `;

          lineNumbers.innerHTML = nonEmptyLines
            .map((_, i) => `<div>${i + 1}</div>`)
            .join("");
          block.style.position = "relative";
          code.style.paddingLeft = "50px";
          block.appendChild(lineNumbers);
        }
      }
    });
  }

  /**
   * Enhance figures with full-screen expansion (entire figure clickable)
   */
  function initFigureEnhancements() {
    const figures = document.querySelectorAll("figure.interactive-figure");
    if (!figures.length) return;

    figures.forEach((figure) => {
      // Make whole figure act as a button
      figure.setAttribute("role", "button");
      figure.setAttribute("tabindex", "0");
      figure.setAttribute("aria-label", "Expand figure to full screen");
      figure.classList.add("figure-expandable");

      const activate = (e) => {
        // Allow click or keyboard (Enter/Space)
        if (e.type === "keydown" && !["Enter", " "].includes(e.key)) return;
        e.preventDefault();
        openFigureOverlay(figure);
      };

      figure.addEventListener("click", activate);
      figure.addEventListener("keydown", activate);
    });
  }

  function openFigureOverlay(figure) {
    const overlay = document.createElement("div");
    overlay.className = "figure-expand-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Expanded figure view");

    const inner = document.createElement("div");
    inner.className = "figure-expand-inner";

    const closeBtn = document.createElement("button");
    closeBtn.className = "figure-expand-close";
    closeBtn.setAttribute("aria-label", "Close expanded figure");
    closeBtn.innerHTML = "×";

    const contentWrap = document.createElement("div");
    contentWrap.className = "figure-expand-content";

    // Clone original content (including dynamically inlined SVG)
    const originalContent = figure.querySelector(".figure-content");
    let clonedContent;
    if (originalContent) {
      clonedContent = originalContent.cloneNode(true);
      // Ensure any inline SVG scales to full viewport width
      const svgs = clonedContent.querySelectorAll("svg");
      svgs.forEach((svg) => {
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.style.width = "100%";
        svg.style.height = "auto";
        svg.style.display = "block";
      });
    } else {
      clonedContent = document.createElement("div");
      clonedContent.textContent = "Figure content unavailable.";
    }

    contentWrap.appendChild(clonedContent);

    const captionSource = figure.querySelector("figcaption");
    const caption = document.createElement("div");
    caption.className = "figure-expand-caption";
    caption.innerHTML = captionSource ? captionSource.innerHTML : "";

    inner.appendChild(closeBtn);
    inner.appendChild(contentWrap);
    inner.appendChild(caption);
    overlay.appendChild(inner);

    // Track focus origin for restoration
    const previousActive = document.activeElement;

    function closeOverlay() {
      document.body.classList.remove("no-scroll");
      overlay.classList.add("closing");
      setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        if (previousActive && previousActive.focus) previousActive.focus();
        document.removeEventListener("keydown", escHandler);
      }, 250);
    }

    const escHandler = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeOverlay();
      }
    };

    closeBtn.addEventListener("click", closeOverlay);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay();
    });
    document.addEventListener("keydown", escHandler);

    document.body.appendChild(overlay);
    document.body.classList.add("no-scroll");
    closeBtn.focus();
  }

  /**
   * Enhance accessibility features
   */
  function initAccessibility() {
    // Add skip to content link
    if (!document.querySelector(".skip-link")) {
      const skipLink = document.createElement("a");
      skipLink.href = "#abstract";
      skipLink.className = "skip-link";
      skipLink.textContent = "Skip to main content";
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll(
      "a, button, [tabindex]"
    );
    interactiveElements.forEach((element) => {
      if (
        !element.getAttribute("tabindex") &&
        element.tagName !== "A" &&
        element.tagName !== "BUTTON"
      ) {
        element.setAttribute("tabindex", "0");
      }
    });

    // Add ARIA labels to navigation
    const nav = document.querySelector("#main-nav");
    if (nav && !nav.getAttribute("aria-label")) {
      nav.setAttribute("aria-label", "Main navigation");
    }
  }

  /**
   * Optimize for printing
   */
  function initPrintOptimizations() {
    const printButton = document.querySelector(".print-btn");
    if (!printButton) {
      const btn = document.createElement("button");
      btn.className = "print-btn";
      btn.innerHTML = "📄 PDF";
      btn.setAttribute("aria-label", "View PDF version");
      btn.title = "Open PDF version of this document";

      btn.addEventListener("click", function () {
        // Open the compiled PDF in a new tab
        window.open("docs/referat.pdf", "_blank");
      });

      document.body.appendChild(btn);
    }
  }

  function preparePrintView() {
    // Hide interactive elements
    const elementsToHide = document.querySelectorAll(
      "#hero, .nav-menu-toggle, .floating-icon, .gradient-orb, " +
        ".scroll-to-top, .print-btn, .progress-bar, .copy-code-btn, " +
        ".nav-controls, .scroll-hint, #main-nav, footer, .nav-links, " +
        ".lang-switcher, .control-btn, .lang-btn"
    );
    elementsToHide.forEach((el) => {
      el.setAttribute("data-print-hidden", "true");
      el.style.display = "none";
    });

    // Simplify main container
    const main = document.querySelector("main");
    if (main) {
      main.setAttribute(
        "data-original-style",
        main.getAttribute("style") || ""
      );
      main.style.boxShadow = "none";
      main.style.margin = "0";
      main.style.padding = "2rem";
      main.style.background = "white";
      main.style.borderRadius = "0";
    }

    // Remove animations
    document.body.classList.add("printing");

    // Add print title at the top
    const printHeader = document.createElement("div");
    printHeader.id = "print-header";
    printHeader.innerHTML = `
            <h1 style="text-align: center; margin-bottom: 1rem; color: #2c3e50;">
                Prompt Engineering и Web разработка с ChatGPT
            </h1>
            <p style="text-align: center; color: #7f8c8d; margin-bottom: 2rem;">
                Уеб Технологии, 25 издание • Зимен семестър 2025-2026
            </p>
            <hr style="border: none; border-top: 2px solid #3498db; margin-bottom: 2rem;">
        `;
    main.insertBefore(printHeader, main.firstChild);
  }

  function restoreNormalView() {
    // Restore hidden elements
    const hiddenElements = document.querySelectorAll("[data-print-hidden]");
    hiddenElements.forEach((el) => {
      el.removeAttribute("data-print-hidden");
      el.style.display = "";
    });

    // Restore main
    const main = document.querySelector("main");
    if (main && main.hasAttribute("data-original-style")) {
      main.setAttribute("style", main.getAttribute("data-original-style"));
      main.removeAttribute("data-original-style");
    }

    // Remove print header
    const printHeader = document.getElementById("print-header");
    if (printHeader) {
      printHeader.remove();
    }

    document.body.classList.remove("printing");
  }

  /**
   * Scroll-to-top button
   */
  function initScrollToTop() {
    let scrollButton = document.querySelector(".scroll-to-top");

    if (!scrollButton) {
      scrollButton = document.createElement("button");
      scrollButton.className = "scroll-to-top";
      scrollButton.innerHTML = "↑";
      scrollButton.setAttribute("aria-label", "Scroll to top");
      document.body.appendChild(scrollButton);
    }

    scrollButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    function toggleScrollButton() {
      if (window.pageYOffset > 300) {
        scrollButton.style.opacity = "1";
        scrollButton.style.visibility = "visible";
      } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.visibility = "hidden";
      }
    }

    window.addEventListener("scroll", throttle(toggleScrollButton, 100));
    toggleScrollButton();
  }

  /**
   * Scroll-triggered animations for sections
   */
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all sections, articles, and figures
    const elements = document.querySelectorAll("section, article, figure");
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });
  }

  /**
   * Shrink navbar on scroll
   */
  function initNavbarShrink() {
    const navbar = document.querySelector("#main-nav");
    if (!navbar) return;

    function handleScroll() {
      if (window.pageYOffset > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", throttle(handleScroll, 100));
  }

  /**
   * Mobile three-dot menu toggle
   */
  function initNavMenuToggle() {
    const nav = document.getElementById("main-nav");
    const toggle = document.getElementById("nav-menu-toggle");
    if (!nav || !toggle) return;

    const focusableSelector = "a, button, [tabindex]";

    function setExpanded(expanded) {
      if (expanded) {
        nav.classList.add("expanded");
        toggle.setAttribute("aria-expanded", "true");
        // Move focus to first link for accessibility
        const firstLink = nav.querySelector(".nav-links a");
        if (firstLink) firstLink.focus();
      } else {
        nav.classList.remove("expanded");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    }

    toggle.addEventListener("click", () => {
      const isExpanded = nav.classList.contains("expanded");
      setExpanded(!isExpanded);
    });

    // Close on Escape key if open
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("expanded")) {
        setExpanded(false);
      }
    });

    // Trap focus inside expanded menu on mobile
    document.addEventListener("keydown", (e) => {
      if (!nav.classList.contains("expanded")) return;
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        nav.querySelectorAll(focusableSelector)
      ).filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Close when resizing to desktop
    window.addEventListener(
      "resize",
      debounce(() => {
        if (window.innerWidth > 768 && nav.classList.contains("expanded")) {
          setExpanded(false);
        }
      }, 150)
    );
  }

  /**
   * Auto-scroll snap functionality
   * Prevents users from staying in the "in-between" zone between hero and content
   */
  function initAutoScrollSnap() {
    const heroSection = document.querySelector('.hero-section');
    const navbar = document.getElementById('main-nav');
    
    if (!heroSection || !navbar) return;

    let isSnapping = false;
    let scrollTimeout = null;
    let lastScrollTop = window.pageYOffset;

    function performSnap() {
      if (isSnapping) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      const viewportMidpoint = viewportHeight / 2;

      // Check if the hero bottom is in the "in-between" zone
      // If hero bottom is between 0 and 50% of viewport, snap down to content
      if (heroBottom > 0 && heroBottom < viewportMidpoint) {
        isSnapping = true;
        window.scrollTo({
          top: heroSection.offsetHeight,
          behavior: 'smooth'
        });
        setTimeout(() => { isSnapping = false; }, 800);
        return true;
      } 
      // If hero bottom is between 50% and 100% of viewport, snap up to hero
      else if (heroBottom >= viewportMidpoint && heroBottom < viewportHeight) {
        isSnapping = true;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setTimeout(() => { isSnapping = false; }, 800);
        return true;
      }
      return false;
    }

    function checkScrollPosition() {
      if (isSnapping) return;

      const currentScrollTop = window.pageYOffset;
      
      // Only set timeout if user is actually scrolling (position changed)
      if (currentScrollTop !== lastScrollTop) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(performSnap, 150);
        lastScrollTop = currentScrollTop;
      }
    }

    // Check on scroll
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    
    // Check on page load (after a brief delay to let layout settle)
    setTimeout(performSnap, 100);
    
    // Check on window resize (user might end up in middle zone after resize)
    window.addEventListener('resize', debounce(() => {
      if (!isSnapping) {
        setTimeout(performSnap, 100);
      }
    }, 250));
    
    // Periodically check if stuck in middle zone (safety net)
    setInterval(() => {
      // Only check if user hasn't scrolled recently
      const timeSinceLastScroll = Date.now() - (window.lastScrollTime || 0);
      if (timeSinceLastScroll > 500 && !isSnapping) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        // If still in danger zone, snap
        if (heroBottom > 0 && heroBottom < viewportHeight) {
          performSnap();
        }
      }
    }, 1000);
    
    // Track last scroll time for the interval check
    window.addEventListener('scroll', () => {
      window.lastScrollTime = Date.now();
    }, { passive: true });
  }

  /**
   * Utility: Throttle function
   */
  function throttle(func, wait) {
    let timeout;
    let lastRan;

    return function executedFunction(...args) {
      if (!lastRan) {
        func(...args);
        lastRan = Date.now();
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (Date.now() - lastRan >= wait) {
            func(...args);
            lastRan = Date.now();
          }
        }, wait - (Date.now() - lastRan));
      }
    };
  }

  /**
   * Utility: Debounce function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Easter egg: Konami code
   */
  (function () {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    document.addEventListener("keydown", function (e) {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
          activateEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });

    function activateEasterEgg() {
      document.body.style.animation = "rainbow 2s linear infinite";

      const style = document.createElement("style");
      style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
      document.head.appendChild(style);

      setTimeout(() => {
        document.body.style.animation = "";
      }, 5000);

      console.log("🎉 Congratulations! You found the easter egg!");
    }
  })();
})();
