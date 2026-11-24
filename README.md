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

Creates a weekly three-Reel plan in `weekly-plans/`, rotating among rainy city scenes, cafés, bedrooms and related night settings.

## Run from GitHub on iPhone

1. Open this repository and tap **Actions**.
2. Choose **Build Reel production pack** and tap **Run workflow**.
3. Enter a topic, then start the workflow.
4. Open the finished run and download the `reel-production-pack` artifact.

The **Weekly Reel planner** runs every Monday at 08:00 UAE time and commits the week's plan automatically.

## Existing brief command

```bash
npm run brief -- "Rainy night cafe"
```

Creates a simple starting brief in `projects/<slug>/reel-brief.md`.

## Automation boundaries

Automated: briefs, prompts, shot lists, captions, VN edit plans, asset checklists, weekly planning and downloadable packaging.

Still requires a person or a connected generation service: creating image/video media, choosing music with appropriate rights, reviewing exports and publishing to Instagram. No paid model API key is required by the included workflows.

See [AUTOMATION.md](AUTOMATION.md) for details.
