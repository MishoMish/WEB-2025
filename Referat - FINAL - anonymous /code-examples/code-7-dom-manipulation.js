/**
 * Dynamically creates and inserts cards into the DOM
 * @param {Array} data - Array of card objects
 * @param {string} containerId - Target container ID
 */
function renderCards(data, containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  // Clear existing content
  container.innerHTML = "";

  // Create and append cards
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("role", "article");

    card.innerHTML = `
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <a href="${escapeHtml(item.link)}" 
               aria-label="Read more about ${escapeHtml(item.title)}">
                Read more
            </a>
        `;

    container.appendChild(card);
  });
}

// Security: HTML escape function
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
