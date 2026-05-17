// Opens the Subscribe & Save page when the toolbar icon is clicked (no popup).
const SUBSCRIBE_URLS = {
  'www.amazon.co.uk': 'https://www.amazon.co.uk/auto-deliveries',
  'www.amazon.com': 'https://www.amazon.com/auto-deliveries',
  'www.amazon.de': 'https://www.amazon.de/auto-deliveries',
};

const DEFAULT_URL = SUBSCRIBE_URLS['www.amazon.com'];

chrome.action.onClicked.addListener(async (tab) => {
  let url = DEFAULT_URL;
  if (tab?.url) {
    try {
      const host = new URL(tab.url).hostname;
      if (SUBSCRIBE_URLS[host]) url = SUBSCRIBE_URLS[host];
    } catch (_e) {
      /* ignore */
    }
  }
  await chrome.tabs.create({ url });
});
