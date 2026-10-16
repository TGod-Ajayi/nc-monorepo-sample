# Naijacloud monorepo sample

One npm-workspaces repo, two apps, one shared package:

```
apps/
  api/          # Node HTTP API  -> deploy as a web service (root directory: apps/api)
  web/          # Vite site      -> deploy as a static site (root directory: apps/web)
packages/
  shared/       # @acme/shared: the menu and the naira formatter both apps use
```

On Naijacloud, create one service per app from this same repository and set each
one's **root directory**. Workspace apps build from the repo root, so
`packages/shared` is available to both.

Docs: https://naijacloud.com/docs/deploy/builds#monorepos

Run locally:

```bash
npm ci
npm start -w apps/api          # http://localhost:3000/menu
npm run dev -w apps/web
```
