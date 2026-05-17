# Privacy Policy

This extension does **not** collect, store, sell, or transmit personal data to any server.

## Data access

- The extension runs only on the Amazon pages listed in `manifest.json`.
- It reads page content and DOM elements **only** to locate your Subscribe & Save subscription cards and to drive the normal cancellation controls in hidden iframes.

## Data storage

- Preferences (parallel count, timeout, retries) and a short-lived list of recently cancelled subscription IDs are stored in the page's **localStorage** on Amazon's origin, so they stay on your device and are never sent elsewhere.
- In-flight batch state lives in memory and is cleared when the page is refreshed or closed.

## Network activity

- The extension makes **no** network requests to third-party servers.
- It does not use analytics, telemetry, ads, tracking pixels, or remote code.

## Contact

For support, use the [GitHub issue tracker](https://github.com/Ropaxyz/Bulk-Cancel-for-Amazon-Subscribe-Save/issues).
