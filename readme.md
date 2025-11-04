## Web Voice Demo

A React + Vite + TypeScript demo for web-based voice features (includes an audio worklet and WebSocket audio utilities).

### Requirements

- **Node.js**: 18.18+ (20.x recommended)
- **Package manager**: npm 9+ or pnpm 8+
  - Use only one package manager consistently. This repo includes both `package-lock.json` and `pnpm-lock.yaml`; choose either npm or pnpm and stick with it.
- **Browser**: Latest Chrome/Edge/Firefox (microphone permissions required for voice features)

### Getting Started

1) Install dependencies

Using npm:
```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

2) Start the development server

Using npm:
```bash
npm run start
```

Using pnpm:
```bash
pnpm start
```

Vite will start on `http://localhost:5173` by default.

### Common Scripts

- **Start (dev)**: launches Vite dev server
  ```bash
  npm run start
  # or
  pnpm start
  ```

- **Build**: type-checks and builds for production
  ```bash
  npm run build
  # or
  pnpm build
  ```

- **Preview**: serves the production build locally
  ```bash
  npm run preview
  # or
  pnpm preview
  ```

- **Lint**: runs ESLint over the project
  ```bash
  npm run lint
  # or
  pnpm lint
  ```

### Project Notes

- The app is built with Vite (`vite@^7`) and React 19.
- Source code lives in `src/`. Audio worklet files are under `public/worklet/`.

### Troubleshooting

- **Node version errors**: Ensure Node is >= 18.18 (`node -v`). Consider using `nvm` to manage versions.
- **Port already in use (5173)**: Either stop the other process or run with a different port, e.g. `npm run start -- --port 5174`.
- **Fresh install**: Delete `node_modules` and your chosen lockfile (`package-lock.json` or `pnpm-lock.yaml`), then reinstall.
- **Microphone access**: Allow mic permissions in your browser. If blocked, reset site permissions.

### License

Proprietary/Private (update as appropriate).


