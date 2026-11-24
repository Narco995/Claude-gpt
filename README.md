# Zero-Budget Animation Studio

A practical workspace for producing short-form cinematic pixel-art Reels with reusable prompts and free-tool workflows.

## Creative direction

- **Visual identity:** dark cinematic pixel art
- **Worlds:** rainy nights, cafés, bedrooms and cities
- **Publishing target:** 3 Reels per week
- **Editing:** VN Video Editor
- **Format:** vertical 9:16, approximately 20 seconds

## Generate a complete Reel pack

Requires Node.js 18 or newer.

```bash
npm run production-pack -- "Rainy night cafe"
```

Creates a folder under `projects/<slug>/` containing:
- Reel brief and four-shot story structure
- CSV shot list
- Per-shot image prompts and image-to-video prompts
- VN timeline, sound and layer plan
- Caption draft and asset checklist

The generator prepares the production materials; it does not generate actual images or videos.

## Weekly planning

```bash
npm run weekly-plan
```

Creates a weekly three-Reel plan in `weekly-plans/` and automatically builds three matching production packs under `projects/weekly/<year>-W<week>/`. The ideas rotate among rainy city scenes, cafés, bedrooms and related night settings.

## Run from GitHub on iPhone

1. Open this repository and tap **Actions**.
2. Choose **Build Reel production pack** and tap **Run workflow**.
3. Enter a topic, then start the workflow.
4. Open the finished run and download the `reel-production-pack` artifact.

The **Weekly Reel planner** runs every Monday at 08:00 UAE time, generates the weekly plan plus all three production packs, commits them to the repository, and uploads a downloadable bundle.

## Existing brief command

```bash
npm run brief -- "Rainy night cafe"
```

Creates a simple starting brief in `projects/<slug>/reel-brief.md`.

## Automation boundaries

Automated: briefs, prompts, shot lists, captions, VN edit plans, asset checklists, three weekly production packs, planning and downloadable packaging.

Still requires a person or a connected generation service: creating image/video media, choosing music with appropriate rights, reviewing exports and publishing to Instagram. No paid model API key is required by the included workflows.

See [AUTOMATION.md](AUTOMATION.md) for details, [docs/plugin-audit.md](docs/plugin-audit.md) for the connected-tool review, and [docs/production-pipeline.md](docs/production-pipeline.md) for provider routing. Each production pack now includes generation-routing.md.

## Connected production tools

See docs/plugin-audit.md for the account-aware tool audit and docs/production-pipeline.md for the recommended production workflow. Provider routing is also included in each generated Reel pack.

## Reusable rainy-night assets

The repository includes an 8-frame looping pixel-art rain overlay and a cinematic café-window style reference under `assets/rainy-night/`. These files are included in the weekly downloadable bundle and referenced automatically by rain-themed VN edit plans.
