# Zero-Budget Animation Studio

A practical starter workspace for producing short-form cinematic animation Reels with free tools.

## Creative direction

- **Visual identity:** dark, cinematic pixel-art atmosphere
- **Worlds:** rainy nights, cafés, bedrooms, and city streets
- **Publishing target:** 3 Reels per week
- **Editing:** VN Video Editor
- **Production principle:** reusable prompts, layered scenes, repeatable shot lists, and human review before publishing

## Repository map

```
.
├── README.md
├── .gitignore
├── package.json
├── config/
│   └── studio.json
├── prompts/
│   ├── style-guide.md
│   ├── image-prompts.md
│   └── video-prompts.md
├── templates/
│   ├── reel-brief.md
│   └── shot-list.csv
└── scripts/
    └── create-reel-brief.mjs
```

## First production workflow

1. Create a Reel brief from the template.
2. Generate a consistent background and character using the prompt guides.
3. Create short motion clips with a free-tier video tool where available.
4. Assemble layers, ambience, captions, and sound in VN.
5. Export a 9:16 master, review it, then publish manually.

## Automation boundary

This repository can automate briefs, shot lists, prompt packaging, file organization, and production checklists. Image/video generation and Instagram publishing depend on external services, account permissions, and their current free-tier limits. No paid API or unattended publishing is assumed.

## Run the brief generator

Requires Node.js 18 or newer.

```bash
npm run brief -- "Rainy night cafe"
```

The generated brief is written to `projects/<slug>/reel-brief.md`.
