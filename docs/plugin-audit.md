# Connected tool audit — 24 November 2026

This is an account-aware capability snapshot. A listed model does not guarantee entitlement, and a free web-app allowance does not automatically apply to API calls.

## Recommended studio stack

| Stage | Tool | Practical value | Current decision |
|---|---|---|---|
| Story, prompts and shot lists | GitHub scripts + Animation Maker skills | Repeatable pre-production | Use now |
| Cinematic stills | Magnific Free, then Krea when API units return | Free daily still images; Krea has a broad image catalogue | Magnific: 19 free image uses remain today; Krea API compute balance is 0 |
| Pixel assets | Pixel Engine | Exact pixel-grid sprites, palettes and sprite animation | 74 monthly credits remain after a rain sprite and loop were generated |
| Image-to-video | No confirmed free API route | Magnific video is paid-only; Krea API balance is 0; Runway has no enabled video model | Keep motion generation optional until a free eligible route is verified |
| Audio | ElevenLabs / Krea | Voice, music, ambience, SFX and dialogue | Optional; estimate cost first |
| Final edit | VN Video Editor | Mobile timeline, layers, sound mix and export | Keep as main editor |
| Cleanup and resize | Adobe | Supported image/video edits, resize, stitch and Quick Cut | Use for specific tasks |
| Covers and brand graphics | Canva / Adobe Express / Artboard | Editable covers, templates, resizing and brand assets | Canva tools connected; no existing Brand Kit found |
| Scheduling and analytics | Metricool | Scheduled posts, review flows, best-time recommendations and analytics | Plugin connected, but no social network is connected to the current brand |
| Research | Firecrawl / Browser Use | Search, scrape, public research and monitoring | Use selectively |
| Repository automation | GitHub Actions | Weekly plan, production packs, validation and artifacts | Working |

## Creative provider findings

### Krea
Connected workspace and live catalogue confirmed. The catalogue spans image, video, enhancement, 3D and audio. Schemas were checked for Krea 2 Medium, Nano Banana 2 Lite, Hailuo 2.3 Fast, Veo 3.1 Lite, Seedance 2 Mini and LTX 2.5 Fast. However, the connected Krea API workspace currently reports **0 compute units on its Free plan**. This blocks generation through this connector until API units are available. Krea's public website advertises 100 free units daily, but that does not prove those website units can be spent through the API connector. Keep Krea as a future fallback; do not route current production to it while the API balance is zero. [Krea pricing](https://www.krea.ai/pricing).

### Pixel Engine
Connected. Latest balance: 48 monthly credits, zero reserved. This session produced a reusable 8-frame rain loop (26 credits total) and an 8-frame café steam/cup detail loop (26 credits total). Use for environmental overlays and small loops—not full cinematic backgrounds.

### Magnific
Connected on the Free plan. Latest start check reported 19 free image uses remaining today; video generation is explicitly paid-only. It exposes image/video/3D/audio operations and professional finishing, but only the still-image auto mode currently fits the confirmed Free allowance. Keep video generation out of the zero-budget route.

### ElevenLabs
Connected. Voice search returned English storytelling voices. Tools include speech, music, SFX, voice design, transcription, dubbing and creative video flows. A numeric generation balance was not confirmed. Use estimate-only before paid generation. Default to ambience-first; narration is optional.

### Adobe
Connected and initialized. Useful operations include supported image generation/editing, background removal, crop/expand, Express templates, fonts, social variations, video resize/render/stitch and Quick Cut. Quick Cut selects highlights from existing footage; it is not the main route for quiet ambience loops. Keep VN as the primary mobile editor.

### Canva
Connected successfully. Brand Kit search returned no existing Brand Kits; design search is available and the Canva editing/design tools are exposed. Use for editable 9:16 covers, profile graphics and title cards. Check any AI-credit prompt before generating; keep the first cover template simple.

### Metricool
The plugin and its action tools are connected. The live `getBrandSettings` call returned: **this brand has no social network connected yet**. Connect the intended Instagram Business or Creator account at [Metricool Connections](https://app.metricool.com/brands/connections?blogId=8330788), then call `getBrandSettings` again to verify the brand ID and permissions. A Reel still needs a finished video URL; Metricool does not render video.

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
7. Do not schedule until Metricool has the intended Instagram profile connected, its brand is resolved and the finished MP4 is available.


## Other relevant plugins found in the directory

These are useful in narrower situations, but are not part of the default pipeline today:

- **vidIQ — optional for growth research and cross-platform expansion.** It can research outperforming YouTube/Instagram/TikTok videos, competitor channels, keywords and trends; analyse hooks/transcripts; help titles/thumbnails; repurpose long videos into vertical clips; and publish/schedule across YouTube, Instagram, TikTok, X and Facebook. Best value if the channel expands to YouTube Shorts or TikTok. It overlaps with Metricool for publishing and analytics.
- **Descript — optional for narration and subtitles.** Transcript-based media editing, Underlord assistance, share links and transcript/Premiere/Resolve timeline exports. Useful for dialogue, voiceover, subtitles and repurposing speech-heavy footage. Less useful for silent rainy-night loops already assembled in VN.
- **Higgsfield — optional image/video alternative.** Text/reference image generation, image animation, reference motion transfer, presets/effects and voiceovers. It overlaps with Krea and current creative tools. No connected account/free allowance was verified in this audit.
- **TinyFish — optional cloud-browser automation.** Can automate account portals and extract public/authorized site data using saved browser profiles. Browser Use and Firecrawl already cover current research needs; do not provide social-account credentials unless a specific task requires them.
- **Supermetrics and Windsor.ai — later-stage analytics.** Useful for cross-channel marketing and paid-ad reporting; too complex for one early-stage organic Instagram page.
- **monday.com — optional task/approval board.** Supports boards, owners, timelines, status, updates and multi-step workflows. Not needed while GitHub Actions handles document scheduling.
- **Webflow / WordPress — website publishing.** Useful only if a standalone studio website or portfolio is needed.
- **tldraw — diagramming.** Useful for process maps, not necessary for the media pipeline.

### Metricool and Canva details

- Metricool's Free plan includes one brand, up to 20 posts/month, 30 days of analytics and its ChatGPT/MCP integration. This fits roughly 12 Instagram Reels/month. Duplicated posts to other social networks count per network. Metricool's external API is limited to Advanced and Custom plans, so do not assume a Free account offers a direct GitHub Actions API route. [Official pricing](https://metricool.com/pricing/) and [API plan details](https://help.metricool.com/plans-add-ons-and-api-access-explained-xux1u).
- Canva Free in the UAE is listed at AED 0/year, with one Brand Kit limited to three colours, 5 GB storage and limited AI access. This is enough for reusable static covers and title cards; richer AI features and social scheduling are plan-specific. [Canva UAE pricing](https://www.canva.com/pricing/?countryCode=ae).
