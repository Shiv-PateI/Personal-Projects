# Personal Portfolio

A responsive personal portfolio site built with plain HTML, CSS and JavaScript. No build tools or installs needed.

**Live site:** https://shiv-patei.github.io/Personal-Projects/portfolio/

## Features

- Sections for About, Experience, Projects, Education and Contact
- Light and dark mode (follows your Mac's setting, with a toggle that remembers your choice)
- Works on phones, with a collapsible menu
- Project cards are generated from a simple list in `script.js`

## Run it on your Mac

From the repo folder, open the site in your default browser:

```bash
open portfolio/index.html
```

Or serve it locally (Python comes with macOS) and visit http://localhost:8000:

```bash
python3 -m http.server 8000 --directory portfolio
```

To edit it in VS Code:

```bash
code portfolio
```

Tip: the **Live Server** extension in VS Code reloads the page automatically every time you save.

## Make it yours

| What | Where |
| ---- | ----- |
| Intro line, About text and quick facts | `index.html` (look for `TODO` comments) |
| Projects | the `projects` list at the top of `script.js` |
| Contact links (LinkedIn, email) | the Contact section in `index.html` |
| Colours | the variables at the top of `styles.css` |

## Publishing

The site is hosted on GitHub Pages from the `main` branch. Every push to `main` updates the live site within a minute or two. You can follow each deploy in the repo's **Actions** tab.
