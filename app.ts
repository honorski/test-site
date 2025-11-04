// TypeScript file for managing the default link across all pages

interface LinkConfig {
  defaultLink: string;
}

interface PredefinedUrl {
  label: string;
  url: string;
  integrationMode?: string;
}

// Storage key constant
const STORAGE_KEY = "defaultLink";
const DEFAULT_LINK = "https://core.bankflip.io/demo?flow=all";

// Predefined URLs list
const PREDEFINED_URLS: PredefinedUrl[] = [
  {
    label: "Debtors",
    url: "https://s.bkfp.io/m/4f6a1998-11e2-47d9-b5a3-7acff04fa91e",
  },
  {
    label: "Autonomos",
    url: "https://s.bkfp.io/m/7fBtmbbH",
  },
  {
    label: "Particulares",
    url: "https://s.bkfp.io/m/JlTLXAjM",
  },
  {
    label: "Identity Verification Simple + AEAT",
    url: "https://s.bkfp.io/m/QCzlm2SC",
  },
  {
    label: "Particulares - Iframe",
    url: "https://s.bkfp.io/m/12953671",
    integrationMode: "iframe",
  },
  {
    label: "Particulares - Pop up",
    url: "https://s.bkfp.io/m/YZU6dYP5",
    integrationMode: "pop_up_window",
  },
];

// Initialize default link if not set
function initializeDefaultLink(): void {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, DEFAULT_LINK);
  }
}

// Get the default link from localStorage
function getDefaultLink(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

// Save the default link to localStorage
function saveDefaultLink(url: string): boolean {
  try {
    // Validate URL
    new URL(url);
    localStorage.setItem(STORAGE_KEY, url);
    return true;
  } catch (error) {
    console.error("Invalid URL:", error);
    return false;
  }
}

// Update the display of the current link
function updateLinkDisplay(): void {
  const displayElement = document.getElementById("currentLinkDisplay");
  if (displayElement) {
    const currentLink = getDefaultLink();
    displayElement.textContent = currentLink || "Not set";
    displayElement.style.color = currentLink ? "#28a745" : "#dc3545";
  }
}

// Initialize the main page functionality
function initMainPage(): void {
  // Initialize default link first
  initializeDefaultLink();

  const saveLinkBtn = document.getElementById("saveLinkBtn");
  const defaultLinkInput = document.getElementById(
    "defaultLinkInput"
  ) as HTMLInputElement;
  const predefinedSelect = document.getElementById(
    "predefinedUrls"
  ) as HTMLSelectElement;
  const urlInfoDiv = document.getElementById("urlInfo");

  // Populate predefined URLs dropdown
  if (predefinedSelect) {
    PREDEFINED_URLS.forEach((item, index) => {
      const option = document.createElement("option");
      option.value = index.toString();
      option.textContent = item.label;
      predefinedSelect.appendChild(option);
    });

    // Handle predefined URL selection
    predefinedSelect.addEventListener("change", (e) => {
      const selectedIndex = (e.target as HTMLSelectElement).value;

      if (selectedIndex === "") {
        if (urlInfoDiv) {
          urlInfoDiv.classList.remove("active");
        }
        return;
      }

      const selectedUrl = PREDEFINED_URLS[parseInt(selectedIndex)];

      // Show URL info
      if (urlInfoDiv) {
        urlInfoDiv.innerHTML = `
          <div class="info-row">
            <strong>Label:</strong> ${selectedUrl.label}
          </div>
          <div class="info-row">
            <strong>URL:</strong> ${selectedUrl.url}
          </div>
          <div class="info-row">
            <strong>Integration Mode:</strong> 
            ${
              selectedUrl.integrationMode
                ? `<span class="integration-mode">${selectedUrl.integrationMode}</span>`
                : '<span class="no-mode">No integration mode defined</span>'
            }
          </div>
        `;
        urlInfoDiv.classList.add("active");
      }

      // Save the selected URL
      if (saveDefaultLink(selectedUrl.url)) {
        updateLinkDisplay();
        // Clear custom input
        if (defaultLinkInput) {
          defaultLinkInput.value = "";
        }
      }
    });
  }

  // Display current link on page load
  updateLinkDisplay();

  // Pre-fill input with current link if it exists
  const currentLink = getDefaultLink();
  if (currentLink && defaultLinkInput) {
    defaultLinkInput.value = currentLink;
  }

  // Save link button click handler
  if (saveLinkBtn && defaultLinkInput) {
    saveLinkBtn.addEventListener("click", () => {
      const url = defaultLinkInput.value.trim();

      if (!url) {
        alert("Please enter a URL");
        return;
      }

      if (saveDefaultLink(url)) {
        updateLinkDisplay();
        alert("Link saved successfully!");
        // Clear predefined selection
        if (predefinedSelect) {
          predefinedSelect.value = "";
        }
        if (urlInfoDiv) {
          urlInfoDiv.classList.remove("active");
        }
      } else {
        alert(
          "Invalid URL. Please enter a valid URL (e.g., https://example.com)"
        );
      }
    });

    // Allow saving with Enter key
    defaultLinkInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        saveLinkBtn.click();
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMainPage);
} else {
  initMainPage();
}
