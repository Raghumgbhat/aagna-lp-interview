# LP Interview · AAGNA
### Behavioural Assessment Platform — Local Setup Guide

---

## What's in this folder

```
lp-interview/
├── index.html          ← Main app (open this in browser)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── data.js         ← Default LP question bank
│   ├── db.js           ← IndexedDB database layer
│   └── app.js          ← All application logic
└── README.md           ← This file
```

---

## Option 1 — Simplest: Open directly in browser (no install)

1. Unzip / copy the `lp-interview` folder anywhere on your computer
2. Double-click `index.html`
3. It opens in your default browser

> ⚠️ **Important:** Speech-to-text (voice recording) requires Chrome or Edge.
> Firefox does not support the Web Speech API.

> ⚠️ **Note on file:// protocol:** Some browsers restrict IndexedDB when opening
> HTML files directly from disk (file:// URLs). If the app shows a DB error,
> use Option 2 below instead.

---

## Option 2 — Recommended: Run a local web server

This is the most reliable way — takes 2 minutes.

### Using Python (already on most Macs/Linux)

```bash
# Navigate to the folder
cd path/to/lp-interview

# Python 3 (most systems)
python3 -m http.server 3000

# Python 2 (older systems)
python -m SimpleHTTPServer 3000
```

Then open: **http://localhost:3000**

---

### Using Node.js (if you have it)

```bash
# Install a simple server once
npm install -g serve

# Run from the folder
cd path/to/lp-interview
serve .
```

Then open the URL it shows (usually http://localhost:3000)

---

### Using VS Code Live Server (easiest GUI option)

1. Open VS Code
2. Install extension: **Live Server** (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens automatically

---

## Option 3 — Share on your local network (LAN)

Run the Python server with `0.0.0.0` to allow other devices on the same Wi-Fi:

```bash
cd path/to/lp-interview
python3 -m http.server 3000 --bind 0.0.0.0
```

Find your computer's IP address:
- **Mac:** System Settings → Wi-Fi → Details → IP Address
- **Windows:** Run `ipconfig` in Command Prompt → IPv4 Address
- **Linux:** Run `ip a` → look for inet under your network interface

Other devices on the same network can then open:
**http://YOUR_IP:3000**

Example: `http://192.168.1.42:3000`

---

## Option 4 — Deploy to the internet (free, permanent URL)

### Netlify Drop (no account needed)
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `lp-interview` folder
3. You get a live URL instantly (e.g. https://random-name.netlify.app)
4. Share that URL with your team

### GitHub Pages (free, permanent)
1. Create a free account at https://github.com
2. Create a new repository (e.g. `lp-interview`)
3. Upload all files maintaining the folder structure
4. Go to Settings → Pages → Source: main branch → Save
5. Your app is live at `https://yourusername.github.io/lp-interview`

---

## Data & Storage

- **All data is stored in your browser's IndexedDB** — it never leaves your computer
- Data persists across browser sessions (closing and reopening the tab is fine)
- Question bank edits and panel members are saved in `localStorage`
- **Clearing browser data / site data will erase records** — use "Download PDF" to archive important sessions first
- Each browser/device has its own separate database

---

## Browser Compatibility

| Feature              | Chrome | Edge | Firefox | Safari |
|---------------------|--------|------|---------|--------|
| Core app            | ✅     | ✅   | ✅      | ✅     |
| Voice recording     | ✅     | ✅   | ❌      | ⚠️ iOS only |
| IndexedDB           | ✅     | ✅   | ✅      | ✅     |
| PDF export (print)  | ✅     | ✅   | ✅      | ✅     |

**Recommended: Google Chrome or Microsoft Edge**

---

## Customising Questions

All questions can be managed in-app via the **Question Bank** tab — no code editing needed.

To edit the default questions that load on first run, open `js/data.js` in any text editor and modify the `BASE_DATA` object.

> Note: Changes to `data.js` only affect **new installations** (first time the app loads on a new browser). Existing installations use the saved version in localStorage.
> To reset to defaults: open browser DevTools → Application → Local Storage → delete `lpData_aagna`

---

## Troubleshooting

**App is blank / not loading**
→ Use a local server (Option 2) instead of opening the file directly

**Voice recording not working**
→ Switch to Chrome or Edge
→ Allow microphone permission when prompted
→ Check browser microphone settings (Settings → Privacy → Microphone)

**Data disappeared**
→ Check if browser data was cleared
→ Always download PDF before clearing browser data

**PDF looks unstyled**
→ In the print dialog, enable "Background graphics" option

---

## Tech Stack

- Pure HTML / CSS / JavaScript — zero dependencies, no build step
- **IndexedDB** — browser-native database, stores all session records
- **localStorage** — stores question bank and panel members
- **Web Speech API** — browser-native voice-to-text (Chrome/Edge)
- **window.print()** — browser-native PDF generation
- Fonts loaded from Google Fonts (requires internet connection)

To make it work **fully offline** (no internet), download and self-host the fonts:
1. Download Inter & JetBrains Mono from https://fonts.google.com
2. Place in a `fonts/` folder
3. Update the `@import` in `css/style.css` to use local paths

---

*LP Interview · AAGNA — Built for internal use*
