# Connected tool audit — 24 November 2026

This is an account-aware capability snapshot. A listed model does not guarantee entitlement, and a free web-app allowance does not automatically apply to API calls.

## Recommended studio stack

| Stage | Tool | Practical value | Current decision |
|---|---|---|---|
| Story, prompts and shot lists | GitHub scripts + Animation Maker skills | Repeatable pre-production | Use now |
| Cinematic stills | Krea | Broad image models, references and 9:16 output | Primary still route; check entitlement and cost |
| Pixel assets | Pixel Engine | Exact pixel-grid sprites, palettes and sprite animation | Primary sprite route; 100 monthly credits reported |
| Image-to-video | Krea | Hailuo, Veo, Kling, Seedance, LTX and other video models | Primary motion candidate; check entitlement and cost per job |
| Audio | ElevenLabs / Krea | Voice, music, ambience, SFX and dialogue | Optional; estimate cost first |
| Final edit | VN Video Editor | Mobile timeline, layers, sound mix and export | Keep as main editor |
| Cleanup and resize | Adobe | Supported image/video edits, resize, stitch and Quick Cut | Use for specific tasks |
| Covers and brand graphics | Canva / Adobe Express / Artboard | Editable covers, templates, resizing and brand assets | Canva connected; no Brand Kit found |
| Scheduling and analytics | Metricool | Scheduled posts, review flows, best-time recommendations and analytics | Plugin connected; account/brand selection still needs resolution |
| Research | Firecrawl / Browser Use | Search, scrape, public research and monitoring | Use selectively |
| Repository automation | GitHub Actions | Weekly plan, production packs, validation and artifacts | Working |

## Creative provider findings

### Krea
Connected workspace and live catalogue confirmed. The catalogue spans image, video, enhancement, 3D and audio. Schemas were checked for Krea 2 Medium, Nano Banana 2 Lite, Hailuo 2.3 Fast, Veo 3.1 Lite, Seedance 2 Mini and LTX 2.5 Fast. These are candidates, not guaranteed free models. A catalogue entry is not proof that this account can run it. Check the current model list, schema, entitlement and quote before each generation. Krea's public pricing advertises 100 free units daily, but that does not prove the connector API shares the same allowance. [Krea pricing](https://www.krea.ai/pricing).

### Pixel Engine
Connected. Balance check returned 100 monthly credits and zero reserved. Tool descriptions report 6 credits for an exact-grid sprite, 20 for a v1.1 animation and 26 for a v1.5 animation. Use for characters, props and small loops—not full cinematic backgrounds.

### Magnific
Connected on the Free plan. Balance check reported 20 daily free image uses for its automatic image-generation path and zero paid credits. It exposes image/video/3D/audio operations and professional finishing, but paid work must be priced first. Do not make it the default video renderer while paid credits are zero.

### ElevenLabs
Connected. Voice search returned English storytelling voices. Tools include speech, music, SFX, voice design, transcription, dubbing and creative video flows. A numeric generation balance was not confirmed. Use estimate-only before paid generation. Default to ambience-first; narration is optional.

### Adobe
Connected and initialized. Useful operations include supported image generation/editing, background removal, crop/expand, Express templates, fonts, social variations, video resize/render/stitch and Quick Cut. Quick Cut selects highlights from existing footage; it is not the main route for quiet ambience loops. Keep VN as the primary mobile editor.

### Canva
Connected successfully. Brand Kit search returned no existing Brand Kits. Canva supports editable designs, social graphics, image generation/editing, resize, reusable templates, asset upload and design feedback. Use for a reusable 9:16 cover system, profile graphics and title cards. Bulk Create may require an eligible paid tier; do not assume it is free.

### Metricool
Plugin connection is now available. The toolset supports brand settings, scheduled-post management, approval/review flows, best-time-to-post recommendations and analytics. The initial brand lookup failed because the current call could not resolve an eligible linked account, so no Instagram brand ID or account permissions have been confirmed. Recheck the account selector and connected brand before scheduling. An Instagram Reel needs an actual finished video URL; Metricool does not generate the video.

### Artboard Mockups
Connected. Project, template, canvas-layer and motion-card operations are useful for cover art, title cards and branded graphics, not as the primary cinematic generator.

### Aya Studio
Connected trial workspace showed 15 credits. It can create cartoon pictures, character sheets and short animated/talking-character clips. Reserve for a specific cartoon format or test, not the default dark cinematic pixel-art route.

### PINOC
Connected with 60 free credits. Generates rigged 3D characters and skeletal motion. Library motion clips are free, so search the library before generating. Use only when a recurring 3D character is genuinely required.

### HeyGen
Connected on a Free plan. Useful for avatars, animated shorts, image/video generation, dubbing, subtitles and presenter-led content. Better for narration or a character-led series than atmospheric city loops. Numeric credits were not returned.

### Runway
Connected workspace currently reports no available video, speech, music or sound-effect models and a 1-credit balance. Do not route current video production through Runway. It may remain optional for image tasks if a live check confirms an enabled model.

### Other creative tools
- Krikey AI Animation: optional 3D avatar animation.
- Anime Stories by ManyMotions: optional anime/cartoon story video.
- AI Video & Image Creator: current service check reports image/video and ad-video handoff links available; this is a guided external handoff, not a GitHub API.
- MegaScenes / 3D Animation: connected balance reported 0 credits; not a current route.

## Research, code and operations tools

- Firecrawl: connected; current balance showed 1,000 credits for the current billing period. Use for public tool/trend research and selective recurring monitors.
- GitHub: connected with write access to Narco995/Claude-gpt. The production-pack validation workflow passed after the command-line argument parser was fixed.
- ChatGPT Automations: available, but no saved tasks were found. GitHub Actions scheduling is separate.
- Notion: connected; useful later for a content calendar, style bible and idea bank. No database was created during this audit.
- ClickUp: connected, but workspace hierarchy currently has zero spaces. Not needed until a task board is deliberately created.
- Vercel: authenticated, but no teams or Git-linked projects were returned for this repo.
- Railway: authenticated, with a personal workspace and zero projects. Consider only if a future API relay/backend is required.
- Browser Use: cloud browser tools are available for public research or approved browser tasks. Local browser tab access requires the originating browser-extension context and was unavailable in this iOS session.
- BCD Bridge Control Delegate and Extra Desktop Operator: no computer is connected. Desktop automation of VN cannot run until a workstation is paired.
- OpenAI Platform: API-key tooling is available but unnecessary for the current no-key workflow.
- EmpirioLabs AI: multi-model catalogue; optional only after provider pricing/access checks.
- Plugin Creator: can create private plugins, but not needed while existing connectors cover the core route.

## Public Krea node-app caution
Krea's public node-app listing contains community workflows; the workspace-only listing returned no shared apps. Do not execute arbitrary public node apps. Inspect owner, purpose, input schema and output schema first, and avoid unrelated or suspicious listings.

## Cost and publishing guardrails
1. A free web-app allowance may not apply to API usage.
2. A model in a catalogue may still be plan-gated.
3. Read the live model list and schema before generation.
4. Estimate costs before paid or multi-shot batches.
5. Never retry an uncertain asynchronous job.
6. Review every export and obtain approval before publishing.
7. Do not schedule until Metricool resolves the intended Instagram brand and the finished video is available.
