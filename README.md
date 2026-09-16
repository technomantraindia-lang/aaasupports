# AAA React App

React application powered by Vite.

## Run locally

```bash
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

Existing project images remain available in the root `assets/` folder and can
be imported from components when needed.

## Component structure

- `src/components/` — reusable page sections and shared UI components
- `src/data/homeData.js` — navigation, cards, projects and partner data
- `src/App.jsx` — page composition only; section implementation stays in components
