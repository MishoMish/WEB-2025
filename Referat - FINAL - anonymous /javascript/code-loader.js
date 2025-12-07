/**
 * Code Loader Utility
 * Dynamically loads code examples from external files into code blocks
 */

const codeExamples = {
  "code-1": {
    file: "code-examples/code-1-basic-prompt.txt",
    language: "text",
  },
  "code-2": {
    file: "code-examples/code-2-advanced-prompt.txt",
    language: "text",
  },
  "code-3": {
    file: "code-examples/code-3-few-shot.txt",
    language: "text",
  },
  "code-4": {
    file: "code-examples/code-4-chain-of-thought.txt",
    language: "text",
  },
  "code-5": {
    file: "code-examples/code-5-html-template.html",
    language: "html",
  },
  "code-6": {
    file: "code-examples/code-6-css-grid.css",
    language: "css",
  },
  "code-7": {
    file: "code-examples/code-7-dom-manipulation.js",
    language: "javascript",
  },
  "code-8": {
    file: "code-examples/code-8-i18n.js",
    language: "javascript",
  },
  "code-9": {
    file: "code-examples/code-9-meta-tags.html",
    language: "html",
  },
};

/**
 * Load a code example from external file
 * @param {string} codeId - ID of the code block
 * @returns {Promise<string>} Code content
 */
async function loadCodeExample(codeId) {
  const example = codeExamples[codeId];
  if (!example) {
    console.error(`Code example ${codeId} not found`);
    return "";
  }

  try {
    const response = await fetch(example.file);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const code = await response.text();
    return code;
  } catch (error) {
    console.error(`Error loading code example ${codeId}:`, error);
    return `// Error loading code example from ${example.file}`;
  }
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Initialize all code blocks on the page
 */
async function initializeCodeBlocks() {
  const codeBlocks = document.querySelectorAll(".code-block[id]");

  for (const block of codeBlocks) {
    const codeId = block.id;
    const codeElement = block.querySelector("code");

    if (!codeElement) continue;

    // Load code from external file
    const code = await loadCodeExample(codeId);

    if (code) {
      // Set the code content (escaped for HTML)
      codeElement.textContent = code;

      // Copy button is handled by main.js
    }
  }
}

/**
 * Add copy-to-clipboard button to code block
 * @param {HTMLElement} codeBlock - Code block element
 * @param {string} code - Code content
 */
function addCopyButton(codeBlock, code) {
  // Check if button already exists
  if (codeBlock.querySelector(".copy-btn")) return;

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.innerHTML = "📋 Copy";
  copyBtn.setAttribute("aria-label", "Copy code to clipboard");

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code);
      copyBtn.innerHTML = "✓ Copied!";
      copyBtn.classList.add("copied");

      setTimeout(() => {
        copyBtn.innerHTML = "📋 Copy";
        copyBtn.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
      copyBtn.innerHTML = "✗ Failed";
      setTimeout(() => {
        copyBtn.innerHTML = "📋 Copy";
      }, 2000);
    }
  });

  codeBlock.style.position = "relative";
  codeBlock.appendChild(copyBtn);
}

/**
 * Initialize code loader on DOM ready
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCodeBlocks);
} else {
  initializeCodeBlocks();
}

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = { loadCodeExample, initializeCodeBlocks };
}
