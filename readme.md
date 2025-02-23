Realtime HTML Viewer
=======================

Description
-----------
A simple web-based HTML viewer that updates in real-time as you type. Your input is saved locally in your browser using `localStorage`, so you can pick up where you left off even after refreshing the page.

Files
-----
1. `index.html` - The main HTML file containing the structure of the app.
2. `index.js`   - JavaScript logic to handle real-time updates and local storage.
3. `index.css`  - (Optional) CSS file for styling the app.

Usage
-----
1. Open `index.html` in any modern web browser.
2. In the textarea provided, enter your HTML code.
3. The rendered output will appear instantly in the "Output" section.
4. Your input is saved automatically in `localStorage`, so it will persist even after a page reload.

Features
--------
- Real-time HTML rendering.
- Local storage support to save your input.
- Responsive design with viewport meta tag.

Notes
-----
- This tool renders raw HTML. Use with caution if inputting untrusted code.
- To clear the saved input, clear the browser's local storage for this site.

