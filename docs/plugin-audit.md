# Connected tool audit — 24 November 2026

This is a live capability/access snapshot from the connected tool catalog and account checks. A listed model does not guarantee entitlement; free web-app credits do not automatically equal API credits.

## Recommended studio stack
| Stage | Tool | Practical value | Current status |
|---|---|---|---|
| Story, prompts, shot lists | Node scripts + ChatGPT | Repeatable production packs | Working in GitHub |
| Image generation | Krea | Broad image model catalogue, references and 9:16 output | Krea 2 Medium and Nano Banana Lite schemas readable; API balance/entitlement not confirmed |
| Pixel assets | Pixel Engine | Exact pixel-grid sprites, palettes, background removal and sprite animation | 100 monthly credits reported |
| Image-to-video | Krea | Hailuo, Veo, Kling, Seedance, LTX and other video models | Models catalogued; entitlement and price must be checked per run |
| 3D motion | PINOC | Rigged 3D characters and skeleton animation | 60 free credits; library motions are free; generated motion costs 1 credit/second |
| Audio | ElevenLabs / Krea | Voiceover, music, SFX and dialogue | Voice catalogue visible; generation balance must be estimated |
| Cleanup / resize | Adobe | Image edits, crop/resize, video resize/render/stitch, assets | Connector initialized; feature entitlements vary |
| Final edit | VN Video Editor | Mobile timeline, sound mix and final export | Keep as main editor |
| Scheduling / analytics | Metricool | Planner, best-time data and analytics | Plugin connected; no social account connected yet |
| Cover design | Canva | Templates, resize, brand kit and bulk layouts | Connection pending |
| Scheduled code work | GitHub Actions | Weekly plan, packs, validation and artifacts | Working |
| Trend research | Firecrawl | Search, scrape, crawl and recurring monitors | 1,000 credits reported |
| SOP / editorial database | Notion | Durable content tracker and style guide | Workspace connected; no database created |
| Hosting | Railway / Vercel | Future dashboard or backend | Railway workspace empty; Vercel Git context has no linked projects/teams |
| Browser / desktop control | Browser Use, BCD, Extra Desktop Operator | Cloud browser or local GUI workflows | Browser extension context unavailable; no desktop device paired |

## Provider findings

### Krea — preferred image/video router
- Connected workspace and live model catalogue are available.
- Catalogue spans image, video, enhancement, 3D and audio.
- Image models include Krea 2 Medium, Nano Banana Lite/Pro, Ideogram, Seedream and others.
- Video models include Hailuo, Veo, Kling, Seedance, LTX and Wan.
- Schemas were read for Krea 2 Medium, Nano Banana Lite, Hailuo 2.3 Fast, Veo 3.1 Lite, Seedance 2 Mini and LTX 2.5 Fast.
- The API model list is not proof that every model is enabled for this account. Check balance/entitlement and cost before generation.
- Krea's public Free page advertises 100 daily units and some free video models; this is not proof that the API connector draws from the same allowance.

### Pixel Engine — specialist pixel tool
- 100 monthly credits reported.
- Sprite generation supports exact pixel sizes, palettes and transparent/background workflows.
- Sprite animation supports short loops and spritesheet outputs; listed animation prices are 20 or 26 credits.
- Use for character sprites, props and small loops—not complete cinematic backgrounds.

### Runway — demote from primary renderer
- Authenticated personal workspace; 1 credit available.
- No available video, speech, music or sound-effect models in this workspace.
- Keep as optional image tooling only if useful; do not route the main video pipeline through it.

### Magnific — still-image backup
- Free account reports 20 daily image uses in automatic image mode.
- Zero paid credits and no video credits.
- Use for occasional still concepts, not video rendering.

### PINOC / Aya / 3D
- PINOC: 60 free credits; 3D character generation costs 6 credits and generated motion costs 1 credit/second. Library motion clips are free.
- Aya Studio: trial workspace with 15 credits; useful for cartoon stills and short cartoon clips, but not the default dark cinematic pixel-art style.
- 3D Animation: zero credits; exclude from the free-first route.

### HeyGen
- Connected free subscription; no premium/add-on credit wallet balance was reported.
- Strong for avatars, talking-heads, presenter-led video and speech.
- Not a first choice for atmospheric faceless pixel-art scenes.

### ElevenLabs
- First page returned 15 English storytelling/narration voices.
- Useful for narration, dialogue, music and sound design.
- Estimate generation cost before use; voice discovery alone is not a generation entitlement.

### Adobe
- Connector initialization succeeded.
- Useful for image generation/editing, background removal, crop/resize, video resize/render/stitch, Quick Cut and Creative Cloud asset handling.
- Some operations require signed-in entitlements. Do not assume all features are included.

### Metricool
- Plugin is connected, but its brand currently has no social network connected. Metricool asks the user to connect at least one network.
- Official help states Free has 1 brand, 20 published posts/month and 30 days of analytics. Three Reels/week is roughly 12 posts/month if publishing only to one network.
- Metricool MCP is available on any plan; API access for external integrations requires Advanced or Custom.
- Do not schedule until Instagram is connected and a finished video URL exists.

### Canva
- Suggested because it can create/edit social designs, resize assets and use brand kits.
- Connection is still pending. Useful for Reel covers and branded cards after connection; bulk create requires an eligible plan.

### Research, browser, project management and deployment
- Firecrawl: 1,000 credits reported; use for tool/pricing research and trend monitoring.
- Notion: authenticated workspace; can host a style guide/SOP/content calendar if requested.
- ClickUp: connected account but no spaces or lists in the workspace hierarchy.
- Browser Use: cloud browser tools exist; local browser extension context is unavailable in this chat.
- BCD and Extra Desktop Operator: no computer paired. Do not claim desktop control.
- GitHub: authenticated as repository owner; keep Actions as the zero-cost scheduler and artifact store.
- Railway: registered account, but no projects in its personal workspace.
- Vercel: authenticated Hobby account; Git deployment context returned no linked projects/teams.

## Secondary / non-core tools
- Artboard Mockups: editable product/device mockups and animated mockup timelines; useful for promos, not core atmospheric scenes.
- Krikey and Anime Stories: character-led 3D/anime alternatives, not the locked pixel-art look.
- Aya: cartoon-only creative alternative.
- Firecrawl's research-paper, legal, protein and job-search endpoints are unrelated to this content pipeline.
- Vercel/Railway infrastructure tools become useful only if a web dashboard/backend is needed.
- ClickUp is unnecessary until a populated workspace exists.

## Cost and publishing guardrails
1. A free web-app allowance may not apply to API usage.
2. A model in a catalogue may still be plan-gated.
3. Read live model list and schema before generation.
4. Estimate costs before paid or multi-shot batches.
5. Never retry an uncertain asynchronous generation.
6. Review every export and obtain approval before publishing.