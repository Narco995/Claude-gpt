# Production pipeline architecture

## Default route
1. GitHub Actions creates the weekly editorial plan and three production packs.
2. Each pack contains a four-shot story, image prompts, video prompts, VN timeline, caption, checklist and generation-routing guide.
3. Use Krea for environment stills and image-to-video only after live model entitlement and cost checks.
4. Use Pixel Engine for pixel sprites, props and small looping effects.
5. Use ElevenLabs/Krea audio only when narration, music or generated sound is needed.
6. Assemble clips in VN Video Editor, add licensed ambience/music, inspect loop and safe zones, and export a vertical master.
7. After Metricool has an Instagram connection, schedule the reviewed MP4. Three weekly posts fit its public Free plan's 20-post/month cap if only Instagram is used.
8. Review 24-hour and 72-hour analytics and use them to improve future hooks and scenes.

## Per-shot media routing
- Static background: Krea image model; keep style, palette and camera geography consistent.
- Character/prop sprite: Pixel Engine with fixed palette and source-job references where supported.
- Short motion: Krea image-to-video from an approved still; start with a cost-effective model for rain, steam and reflections.
- Pixel sprite loop: Pixel Engine animate_sprite.
- Optional rigged 3D character: PINOC only when the story genuinely needs 3D.
- Final cleanup: Adobe or Krea enhancement after checking account entitlements and cost.

## Human approval gates
- Approve character and style before generating a sequence.
- Inspect each still before animating.
- Inspect motion for geometry drift and identity changes.
- Verify music/audio rights and platform requirements.
- Approve final export before scheduling or publishing.

## Connection blockers
- Metricool: no Instagram/social profile connected yet.
- Canva: connection pending.
- Local desktop/browser automation: no computer paired.