# Permisso Testing Hub

A testing website for embedding and interacting with Permisso/BankFlip URLs using different integration methods.

## Features

- **Predefined URLs**: Select from 35+ predefined BankFlip/Permisso test URLs with integration mode information
- **Custom URLs**: Enter and save any custom URL for testing
- **Multiple Integration Methods**:
  - **Iframe**: Standard embedded iframe display
  - **Fullscreen Iframe**: Full viewport iframe without navigation elements
  - **Iframe Resizer**: Auto-resizing iframe using the iframe-resizer library
  - **Pop-up Window**: Opens URL in a new pop-up window

## File Structure

```
test-site/
├── index.html              # Main navigation and configuration page
├── iframe.html             # Standard iframe display page
├── fullscreen-iframe.html  # Fullscreen iframe page
├── iframe-resizer.html     # Auto-resizing iframe page
├── popup-window.html       # Pop-up window page
├── styles.css              # Shared styles with custom color theme
├── app.ts                  # TypeScript source file
├── app.js                  # Compiled JavaScript file
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## How to Use

1. Open `index.html` in your web browser
2. **Select a predefined URL** from the dropdown (shows label, URL, and integration mode)
   - OR -
3. **Enter a custom URL** in the input field and click "Save Link"
4. Navigate to any integration method to test the URL:
   - **Iframe**: Shows the URL embedded in a standard iframe with navigation
   - **Fullscreen Iframe**: Full viewport display without any UI elements
   - **Iframe Resizer**: Auto-resizing iframe that adapts to content height
   - **Pop up window**: Opens the URL in a new pop-up window

## Predefined URLs

The project includes 35+ predefined test URLs for various Permisso/BankFlip flows including:

- Identity verification flows
- ASNEF checks
- Tax authority integrations (Spain, Portugal, France)
- Social security data retrieval
- Custom multi-model flows

Each predefined URL displays:

- **Label**: Descriptive name of the flow
- **URL**: The full session URL
- **Integration Mode**: iframe, redirect, or "No integration mode defined"

## Development

### Prerequisites

- Node.js and npm installed

### Setup

```bash
npm install
```

### Compile TypeScript

```bash
npm run build
```

### Watch Mode (auto-compile on changes)

```bash
npm run watch
```

## Technologies Used

- HTML5
- CSS3 with custom color theme
- TypeScript
- LocalStorage API for persisting URLs
- [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) library for auto-sizing iframes

## Color Theme

The project uses a custom color palette optimized for professional testing environments:

- Primary: `#0F6FFF` (blue)
- Background gradient: Light blue to ultra light gray
- Error states: `#FF3B30` (red)
- Success states: `#00d1b5` (robin egg blue)

## Browser Compatibility

Works in all modern browsers.

**Notes:**

- Pop-up functionality may be blocked by browser settings
- Iframe-resizer works best when the embedded page includes the content window script
- Some external sites may block iframe embedding via X-Frame-Options headers

## Deployment

This project is deployed on GitHub Pages and works as a purely static website with no server-side dependencies.
