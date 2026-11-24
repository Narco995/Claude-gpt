# Production pipeline architecture

## Default route
1. GitHub Actions creates the weekly editorial plan and three production packs.
2. Each pack contains a four-shot story, image prompts, video prompts, VN timeline, caption, checklist and generation-routing guide.
3. Use Krea for environment stills and image-to-video only after live model entitlement and cost checks.
4. Use Pixel Engine for pixel sprites, props and small looping effects.
5. Use ElevenLabs or Krea audio only when narration, music or generated sound is needed.
6. Assemble clips in VN Video Editor, add licensed ambience/music, inspect the loop and safe zones, and export a vertical master.
7. Use Canva for reusable covers and branded cards. Canva is connected; no Brand Kit was found, so create or define the channel palette before bulk design.
8. Use Metricool for scheduling and analytics after the intended Instagram brand is resolved. The plugin is connected, but the initial brand lookup could not resolve an eligible linked account. Do not schedule until the brand ID, account and permissions are confirmed.
9. Review 24-hour and 72-hour analytics and use them to improve future hooks and scenes.

## Per-shot media routing
- Static background: Krea image model; keep style, palette and camera geography consistent.
- Character/prop sprite: Pixel Engine with fixed palette and source-job references where supported.
- Short motion: Krea image-to-video from an approved still; start with a cost-effective model for rain, steam and reflections.
- Pixel sprite loop: Pixel Engine animate_sprite.
- Optional rigged 3D character: PINOC only when the story genuinely needs 3D.
- Final cleanup: Adobe or Krea enhancement after checking account entitlements and cost.
- Optional narration/music/SFX: ElevenLabs or Krea audio after cost estimation.

## Human approval gates
- Approve character and style before generating a sequence.
- Inspect each still before animating.
- Inspect motion for geometry drift and identity changes.
- Verify music/audio rights and platform requirements.
- Approve the final export before scheduling or publishing.

## Automation boundaries
GitHub Actions generates plans and production documents; it does not call ChatGPT-connected Krea, ElevenLabs, Adobe or Canva tools. It does not render media, operate VN on an iPhone or publish Reels. True unattended media generation needs a separately authorized provider API, secure secrets, cost limits, status polling and a human review gate.
