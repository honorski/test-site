# Test Site - Navigation Hub

A simple website demonstrating three different navigation methods: Iframe, Redirection, and Pop-up Window.

## Features

- **Main Navigation Page**: Configure a default URL that will be used across all three navigation methods
- **Iframe Page**: Displays the configured URL in an embedded iframe
- **Redirection Page**: Automatically redirects to the configured URL after a 3-second countdown
- **Pop-up Window Page**: Opens the configured URL in a new pop-up window

## File Structure

```
test-site/
├── index.html          # Main navigation page
├── iframe.html         # Iframe display page
├── redirection.html    # Auto-redirect page
├── popup-window.html   # Pop-up window page
├── styles.css          # Shared styles for all pages
├── app.ts              # TypeScript source file
├── app.js              # Compiled JavaScript file
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## How to Use

1. Open `index.html` in your web browser
2. Enter a default URL (e.g., `https://example.com`) in the input field
3. Click "Save Link" to store the URL
4. Navigate to any of the three pages to see different navigation methods:
   - **Iframe**: Shows the URL embedded in the page
   - **Redirection**: Redirects to the URL after 3 seconds
   - **Pop up window**: Opens the URL in a new pop-up window

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
- CSS3
- TypeScript
- LocalStorage API for persisting the default URL

## Browser Compatibility

Works in all modern browsers. Note: Pop-up functionality may be blocked by browser settings - you may need to allow pop-ups for this site.
