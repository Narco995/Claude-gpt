import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run production-pack -- "Rainy night cafe"');
  process.exit(1);
}

const slug = title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'untitled-reel';
const output = path.join(root, 'projects', slug);
if (fs.existsSync(output)) {
  console.error('Project already exists: ' + path.relative(root, output));
  process.exit(1);
}
const lower = title.toLowerCase();
let setting = 'a rain-soaked city street at midnight, wet pavement reflecting distant amber and teal lights';
if (/cafe|café|coffee|espresso/.test(lower)) setting = 'a tiny late-night café with rain-streaked windows, warm amber lamps, a quiet counter and reflections on the glass';
if (/bedroom|sleep|room|window/.test(lower)) setting = 'a quiet small bedroom at night, one warm bedside lamp, rain on the window and a deep blue city beyond the glass';
if (/train|metro|station/.test(lower)) setting = 'a nearly empty late-night train platform, rain reflections, distant city lights and a quiet cinematic atmosphere';
const visual = 'dark cinematic pixel art, crisp deliberate pixel clusters, deep navy shadows, muted teal reflections, restrained warm amber practical lights, atmospheric depth, vertical 9:16, no text, no logo, no watermark';
const shots = [
  { id: '01', duration: 4, name: 'Establishing mood', visual: 'Wide establishing view of ' + setting + '. No close-up character details; let the environment tell the story.', action: 'Rain falls steadily; distant light reflections shimmer subtly.', camera: 'Very slow push-in' },
  { id: '02', duration: 5, name: 'Character moment', visual: 'A solitary young adult seen from a respectful medium or rear three-quarter view inside ' + setting + '. Keep the person small enough to preserve the environment as the main subject.', action: 'One subtle natural action: slowly turning toward the window or looking down at a warm drink.', camera: 'Locked camera with subtle character motion' },
  { id: '03', duration: 5, name: 'Detail insert', visual: 'A cinematic close detail from the same scene: rain tracing the glass, a cup releasing steam, a hand near a lamp, or reflections on the floor, matching the setting.', action: 'One small loopable detail moves gently; all other geometry stays fixed.', camera: 'Locked close-up' },
  { id: '04', duration: 6, name: 'Quiet resolution / loop', visual: 'Return to a composition visually related to the opening view of ' + setting + '. Maintain identical palette, lighting direction and layout.', action: 'Hold the mood with subtle rain and light movement; end on a frame that can cut back to shot 01.', camera: 'Very slow pull-back or locked camera' }
];
const csv = value => '"' + String(value).replaceAll('"', '""') + '"';
const shotRows = ['shot,duration_seconds,scene,visual_direction,motion,camera', ...shots.map(s => [s.id, s.duration, s.name, s.visual, s.action, s.camera].map(csv).join(','))].join('\n') + '\n';
const imagePrompts = '# Image prompts — ' + title + '\n\nGlobal style: ' + visual + '. Keep the same visual language, camera geography and lighting logic across all four images.\n\n' + shots.map(s => '## Shot ' + s.id + ' — ' + s.name + '\n\n' + s.visual + ' ' + visual + '. Maintain continuity with the other shots. Compose with foreground, midground and background separation for subtle parallax.').join('\n\n') + '\n';
const videoPrompts = '# Image-to-video prompts — ' + title + '\n\nFor each shot, animate the supplied still without redesigning or replacing any object. Preserve exact pixel-art rendering, composition, subject identity, perspective and lighting. Stable geometry, restrained motion, no cuts, no added text or logos.\n\n' + shots.map(s => '## Shot ' + s.id + ' — ' + s.name + ' (' + s.duration + 's)\n\n' + s.action + ' Camera: ' + s.camera + '. Keep the first and last moments calm and easy to trim.').join('\n\n') + '\n';
const brief = '# Reel brief: ' + title + '\n\n- Created: ' + new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'Asia/Dubai' }).format(new Date()) + ' (Dubai time)\n- Format: vertical 9:16\n- Target duration: 20 seconds\n- Visual direction: ' + visual + '\n- Setting: ' + setting + '\n- Hook: Open immediately on the strongest atmospheric image; no logo intro.\n- Emotional beat: Quiet reflection and a small human moment.\n- Ending: Return to a composition that can loop into the opening.\n\n## Story beats\n\n1. Establish the atmosphere.\n2. Introduce one subtle character moment.\n3. Cut to one meaningful environmental detail.\n4. Resolve into a loop-friendly final composition.\n';
const editPlan = '# VN edit plan — ' + title + '\n\nProject: 1080 × 1920 (9:16), 30 fps, approximately 20 seconds.\n\n| Timeline | Clip | Edit | Audio / layers |\n|---|---|---|---|\n| 00:00–00:04 | Shot 01 | Start on the strongest frame; gentle push-in if source is static | Rain ambience, distant city tone\n| 00:04–00:09 | Shot 02 | Straight cut; preserve screen direction | Soft room or café tone, subtle cloth / cup sound\n| 00:09–00:14 | Shot 03 | Detail insert; keep transition simple | Steam, glass, cup or rain detail sound\n| 00:14–00:20 | Shot 04 | Hold the final mood; align ending with opening for a loop | Let ambience continue across the cut\n\n## Layer order\n\n1. Background plate\n2. Midground environment and reflections\n3. Character layer, if generated separately\n4. Foreground rain / glass / steam overlay\n5. Light bloom or subtle glow (low intensity)\n6. Captions and final sound mix\n\n## Export checklist\n\n- Canvas: 9:16, 1080 × 1920\n- Frame rate: 30 fps\n- Keep captions away from the bottom and right-side interface areas\n- Check the first and last frames as a loop\n- Listen once with headphones; check speech/music rights\n- Review the export before posting\n';
const caption = '# Caption draft — ' + title + '\n\nSome nights move slower, and that is sometimes exactly what we need. 🌧️\n\nWhat would you call this moment?\n\n#PixelArt #CinematicAnimation #RainyNights #AestheticReels #VNEditor\n\nEdit the caption and hashtags to fit the finished video and current audience. Hashtags here are starter suggestions, not a virality guarantee.\n';
const checklist = '# Asset checklist — ' + title + '\n\n- [ ] Shot 01 environment still\n- [ ] Shot 02 character / medium still\n- [ ] Shot 03 detail still\n- [ ] Shot 04 closing still\n- [ ] Separate background plate, if parallax is needed\n- [ ] Character cut-out, if required\n- [ ] Rain / steam / reflection overlay\n- [ ] Four motion clips\n- [ ] Ambient sound and licensed music\n- [ ] Final VN project and reviewed export\n\nGenerated prompts are ready; actual images and video clips still need to be created in an image/video tool.\n';
function write(relative, content) {
  const target = path.join(output, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, 'utf8');
}
write('reel-brief.md', brief);
write('shot-list.csv', shotRows);
write('prompts/image-prompts.md', imagePrompts);
write('prompts/video-prompts.md', videoPrompts);
write('edit-plan-vn.md', editPlan);
write('caption-draft.md', caption);
write('asset-checklist.md', checklist);
console.log('Created production pack: ' + path.relative(root, output));
console.log('Included: brief, 4-shot CSV, image/video prompts, VN edit plan, caption and asset checklist.');