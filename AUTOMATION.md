# Automation guide

## 1. Generate a complete Reel production pack

In a terminal at the repository root:

```bash
npm run production-pack -- "Rainy night cafe"
```

The command creates `projects/<slug>/` with:
- Reel brief and four-shot story structure
- CSV shot list
- Individual image prompts and image-to-video motion prompts
- VN Video Editor timeline and layer order
- Caption draft and asset checklist

It uses local Node.js only. It does not call a paid model API or generate the actual media files.

## 2. Generate the weekly plan

```bash
npm run weekly-plan
```

The planner rotates ideas across rainy city scenes, late-night cafés, bedrooms and related night settings. It proposes Tuesday, Thursday and Saturday as a starting cadence. It also creates all three matching production packs under `projects/weekly/<year>-W<week>/`.

## 3. Run from GitHub on your iPhone

Open the repository, tap **Actions**, choose **Build Reel production pack**, tap **Run workflow**, enter a Reel topic and start it. When it finishes, open the run and download the `reel-production-pack` artifact.

The **Weekly Reel planner** also runs every Monday at 08:00 UAE time (04:00 UTC). It generates the weekly plan, creates three production packs, commits them under `weekly-plans/` and `projects/weekly/`, and uploads a downloadable bundle. You can also run it manually from Actions.

## 4. What is and is not automated

Automated: story structure, prompts, shot lists, caption starters, VN edit plans, asset checklists, weekly planning, three weekly production packs and packaging.

Still requires a person or a connected generation service: creating image/video media, choosing music with appropriate rights, final quality review and Instagram publishing. The workflows do not need an API key.

## 5. GitHub Actions permissions

The weekly planner workflow requests repository **Contents: Read and write** permission so it can commit the generated plan and production packs. The production-pack workflow only uploads an artifact and does not write to the repository.
