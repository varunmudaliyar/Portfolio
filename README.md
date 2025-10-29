# Portfolio — Varun Mudaliyar

A personal portfolio site built with React and Tailwind CSS that showcases projects, achievements, and contact information.

This repository contains the source for a responsive, accessible portfolio with light/dark theme support. The light theme uses a Beige palette and the dark theme uses a Deep Blue palette (custom Tailwind colors are defined in `tailwind.config.js`).

## Features

- React + react-router for client-side routing
- Tailwind CSS for utility-first styling (dark mode class-based)
- Dark / Light theme toggle (adds/removes the `dark` class on the root element)
- Responsive layouts for Home, Projects, About pages
- Project modal, contact form (demo/local only), and simple animations

## Quick start (Windows / cmd.exe)

1. Install dependencies

```cmd
npm install
```

2. Run the dev server

```cmd
npm start
```

3. Build for production

```cmd
npm run build
```

## Project structure

- `src/` — React source code
	- `Pages/` — page components: `Home.js`, `Projects.js`, `About.js`
	- `Components/` — shared components: `Navbar.js`, `Footer.js`
	- `assets/` — images and static assets
	- `index.css`, `App.css` — global styles (Tailwind entry)
- `tailwind.config.js` — Tailwind configuration (custom colors added for Beige and Deep Blue)
- `package.json` — scripts and dependencies

## Theming details

- Light theme palette: Beige (custom color `beige` in `tailwind.config.js`). Backgrounds, cards and text use `beige-*` classes for consistent contrast.
- Dark theme palette: Deep Blue (custom color `deepBlue` in `tailwind.config.js`). When the `dark` class is present on the root element the app switches to deep blue backgrounds and light text.
- Toggle: there's a dark mode toggle implemented in the navbar which toggles `document.documentElement.classList` to add/remove `dark`.

If you want to tweak the colors, open `tailwind.config.js` and modify the `beige` or `deepBlue` scales. After editing the config, restart the dev server so Tailwind rebuilds the CSS.

## Accessibility & contrast

When changing color tokens, keep contrast in mind — prefer at least 4.5:1 for body text and 3:1 for larger headings. The current theme aims for readable contrast in both modes.

## Common tasks

- Lint / formatting: this repo doesn't include a specific linter/formatter by default — add ESLint/Prettier if you want enforced styles.
- Deploy: `npm run build` then publish the `build/` folder to your hosting provider. There's a `deploy` script configured to publish to GitHub Pages using `gh-pages`.

## Troubleshooting

- Tailwind classes not updating? Restart the dev server after changing `tailwind.config.js` or `index.css`.
- Theme not switching? Ensure JavaScript is running and that the `dark` class appears on the `<html>` element (open devtools -> Elements).

## Contributing

Small fixes and improvements welcome. Open an issue or submit a PR for suggested changes.

## License & contact

This repository is provided as-is for demonstration purposes. For questions or help, contact: mudaliyarvarun21@gmail.com

---
Made with ❤️ — Varun
