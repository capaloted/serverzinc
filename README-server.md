# Zinc Server (Render deploy)

This is a minimal web service to accept Apple Pay tokens and simulate payment processing.

Deploy to Render:

1. Create a new GitHub repo and push this project (at minimum include the `server/` folder and `render.yaml`).
2. In Render, click New + → Blueprint → connect the repo.
3. Render will detect `render.yaml` and create the `zinc-server` web service.
4. Once deployed, note the public URL (e.g. `https://zinc-server.onrender.com`).
5. In the iOS app, set `AppConfig.serverBaseURL` to that URL.

Local dev (optional):

```
cd server
npm install
npm run dev
```

API:
- GET /health → `{ ok: true }`
- POST /pay → `{ ok: true, chargeId: "demo_..." }` (stubbed)

