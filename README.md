# 🐞 Millie's Bug Bash

A web game for a cat named Millie. Bright bugs crawl across a black screen
and she bashes them. That's the whole game.

- Dark mode, pure black background, bright glowing bugs (oval body + wiggling legs)
- Launch screen: **speed** slider, **bug count** slider, **duration** presets (30s / 1m / 3m / 5m)
- Bugs enter from all edges — vertically, horizontally, and at angles — and respawn when they leave the screen
- **Tap a bug → +1**, with a pop ring + haptic blip on phones (generous hitbox for paws)
- Large-but-dim score counter during play; countdown timer top-right
- End screen: score, high score (persisted in localStorage), "NEW HIGH SCORE!" flag, bright PLAY AGAIN button
- Screen wake-lock while playing so the phone doesn't sleep mid-bash

## Run locally

```bash
docker compose up --build -d
```

Then open **http://devtools01.dmz:8400** (or wherever you run it).

No build step, no npm deps — Node 22 Alpine serving static files from `public/`.

## Layout

```
public/index.html   the whole game (single file, canvas-based)
server.js           tiny static file server
Dockerfile          node:22-alpine
docker-compose.yml  port 8398
```
