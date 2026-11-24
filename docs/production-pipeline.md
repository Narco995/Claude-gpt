# Production pipeline architecture

## Default route
1. GitHub Actions creates the weekly editorial plan and three production packs.
2. Each pack contains a four-shot story, image prompts, video prompts, VN timeline, caption, checklist and generation-routing guide.
3. Use Magnific Free for daily still keyframes (20 free image uses were available at the latest check). Krea remains a fallback only after API units return; its current connected API balance is 0.
4. Use Pixel Engine for pixel sprites, props and small looping effects.
5. Use licensed or recorded ambience by default. Use ElevenLabs or Krea audio only when narration, music or designed sound is needed and the credit estimate is confirmed.
6. Assemble clips in VN Video Editor, add licensed ambience/music, inspect the loop and safe zones, and export a vertical master.
7. Use Canva for reusable covers and branded cards. Canva tools are connected; no Brand Kit was found, so keep the first template simple and define the palette manually.
8. Use Metricool for scheduling and analytics only after connecting Instagram Business/Creator at https://app.metricool.com/brands/connections?blogId=8330788. The current live lookup says no social network is connected. Do not schedule until the profile and brand are verified.
9. Review 24-hour and 72-hour analytics and use them to improve future hooks and scenes.

## Per-shot media routing
- Static background: Magnific Free image mode for daily keyframes; use assets/rainy-night/cafe-window-keyframe.jpg as a dark navy/amber rainy café style reference.
- Character/prop sprite: Pixel Engine with fixed palette and source-job references where supported.
- Atmospheric motion: no free eligible video API is confirmed right now. Use VN keyframe moves/parallax and overlays until Krea API units or another verified free model is available.
- Pixel sprite loop: Pixel Engine animate_sprite. The reusable 8-frame rain loop is stored at assets/rainy-night/rain-overlay-128.webp.
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

## Reusable rainy-night assets

The repository includes `assets/rainy-night/rain-overlay-128.webp` (128×128, 8 frames at 8 fps) and a cinematic café-window keyframe reference. Rain-themed production packs automatically reference these assets in the VN layer plan and checklist. The weekly downloadable artifact includes the entire rainy-night asset directory.
