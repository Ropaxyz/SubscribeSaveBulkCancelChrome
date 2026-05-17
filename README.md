# Amazon Bulk Cancel for Subscribe & Save

A Chrome and Microsoft Edge extension (Manifest V3) that adds a small draggable panel to Amazon Subscribe & Save pages so you can **cancel many subscriptions in one go**, with a live progress bar and parallel cancellation workers (hidden iframes that drive Amazon's normal cancel flow on your behalf).

Nothing leaves your browser. The extension only runs on your Subscribe & Save pages and only acts after you click **Cancel selected**.

## Features

- Draggable panel injected on supported Subscribe & Save pages
- Per-item overlay checkboxes (with **Select all** / **Clear**)
- Parallel cancellations (1–8, default 3)
- Live progress: `done / running / queued / failed` plus a bar
- **Stop** button to abort cleanly mid-run
- **Auto-retry** for occasional timeouts (0–3 attempts)
- **Per-item timeout** adjustable 10–60 s
- Cancelled items stay faded across the post-run refresh (24 h cache, scoped to the Amazon site you're on)
- Auto-refreshes at the end (with a click-to-skip countdown)
- Settings (parallel / timeout / retries) are remembered per browser
- Toolbar icon opens your Amazon Subscribe & Save page (region follows the active tab when possible)

## Supported pages

- Amazon UK — `amazon.co.uk/auto-deliveries` and Subscribe & Save manager pages
- Amazon US — `amazon.com/...`
- Amazon DE — `amazon.de/...`

See `manifest.json` for the exact match patterns.

## Install (unpacked, for testing)

### Google Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select this project folder (the one containing `manifest.json`)

### Microsoft Edge

1. Open `edge://extensions`
2. Enable **Developer mode** (left sidebar)
3. Click **Load unpacked**
4. Select this project folder

The unpacked extension stays installed until you remove it. Pin the toolbar icon for quick access.

## How to use

1. Open your Amazon Subscribe & Save page (`amazon.co.uk/auto-deliveries`, etc.), or click the extension icon to open it
2. Click **Load all items** to expand pagination (optional)
3. Tick the items you want to cancel — or click **Select all**
4. (Optional) Open **Settings** in the panel and adjust **Parallel** / **Timeout** / **Retries**
5. Click **Cancel selected**
6. Watch the live `done / running / queued / failed` counter. Click **Stop** at any time to abort.
7. When the run finishes the page auto-refreshes after 6 seconds (or you can click the green button to refresh immediately).

## Notes & limitations

- The extension is **user-triggered**. It does nothing until you click **Cancel selected**.
- Lower **Parallel** if Amazon throttles you. 1–3 is safe; 5+ is aggressive and can cause timeouts.
- Amazon occasionally changes its cancel-page layout. If items get cancelled on Amazon's side but the panel doesn't mark them done, please open an issue with the region you're on (UK/US/DE).

## Power-user tips

A small debug hook is exposed on the page for advanced users:

- `__bulkCancel.prefs.diagnostic = true` — turn on verbose console + status-box logging for the next run.
- `__bulkCancel.clearCompletedCache()` — clear the local "already cancelled" cache so previously-cancelled items aren't auto-faded.
- `__bulkCancel.state` — read-only inspection of in-flight workers, completed IDs, etc.

## Privacy

No analytics, no telemetry, no external network calls. See [PRIVACY.md](PRIVACY.md).

## License

MIT. See [LICENSE](LICENSE).
