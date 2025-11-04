// TypeScript file for managing the default link across all pages

interface LinkConfig {
  defaultLink: string;
}

// Storage key constant
const STORAGE_KEY = "defaultLink";
const DEFAULT_LINK = "https://core.bankflip.io/demo?flow=all";

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
