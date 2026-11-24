import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
const get = type => parts.find(p => p.type === type).value;
const year = Number(get('year'));
const month = Number(get('month'));
const day = Number(get('day'));
const localDate = new Date(Date.UTC(year, month - 1, day));
localDate.setUTCDate(localDate.getUTCDate() + 4 - (localDate.getUTCDay() || 7));
const isoYear = localDate.getUTCFullYear();
const yearStart = new Date(Date.UTC(isoYear, 0, 1));
const week = Math.ceil((((localDate - yearStart) / 86400000) + 1) / 7);
const weekLabel = String(week).padStart(2, '0');
const weekKey = isoYear + '-W' + weekLabel;
const ideas = [
  { title: 'Rain on the last train window', setting: 'Late-night train platform or carriage', hook: 'A nearly empty train. One warm light in a rainy city.', sound: 'Soft rail hum, rain on glass and distant station tone' },
  { title: 'The café that never closes', setting: 'Small amber-lit café after midnight', hook: 'One table is still waiting for someone.', sound: 'Cup set-down, low café room tone and rain' },
  { title: 'One lamp, one quiet room', setting: 'Small bedroom with a rainy window', hook: 'The whole city is awake, but this room is still.', sound: 'Rain on glass, soft room tone and lamp switch' },
  { title: 'Neon reflected in the street', setting: 'Wet city street with muted neon', hook: 'The city tells its story in puddles.', sound: 'Footsteps, distant traffic and rain' },
  { title: 'A window seat at 2 AM', setting: 'Café window seat looking onto the city', hook: 'A quiet view can say more than a crowded room.', sound: 'Rain, low room tone and a gentle cup sound' },
  { title: 'The city from the bedroom window', setting: 'Bedroom window overlooking distant towers', hook: 'A thousand lights, one quiet observer.', sound: 'Rain and distant city ambience' },
  { title: 'Last coffee before sunrise', setting: 'Small café just before dawn', hook: 'The sky is changing, but the coffee is still warm.', sound: 'Coffee machine, soft room tone and early birds' }
];
const start = (isoYear * 53 + week) % ideas.length;
const selected = [0, 1, 2].map(i => ideas[(start + i * 2) % ideas.length]);
const days = ['Tuesday', 'Thursday', 'Saturday'];
const body = '# Weekly Reel plan — ' + weekKey + '\n\nGenerated for Dubai time on ' + get('year') + '-' + get('month') + '-' + get('day') + '. Target: three Reels this week.\n\n| Publish day | Reel concept | Setting | Opening hook | Sound direction |\n|---|---|---|---|---|\n' + selected.map((idea, i) => '| ' + days[i] + ' | ' + idea.title + ' | ' + idea.setting + ' | ' + idea.hook + ' | ' + idea.sound + ' |').join('\n') + '\n\n## Automatically created production packs\n\nEach topic also has a complete pack under `projects/weekly/' + weekKey + '/`: brief, four-shot CSV, image/video prompts, VN edit plan, caption draft and asset checklist.\n\n## Production sequence\n\n- Monday: review the three packs and create source images.\n- Tuesday: finish, review and publish Reel 1.\n- Wednesday: animate and edit Reel 2.\n- Thursday: review and publish Reel 2.\n- Friday: finish and review Reel 3.\n- Saturday: publish Reel 3 and note results.\n\n## Review metrics\n\nRecord views, average watch time, completion rate, saves, shares and follows after 24 and 72 hours. Repeat formats that earn meaningful retention and saves; do not judge performance from views alone.\n\n> This automation generates planning and production documents only. It does not generate media, guarantee reach, or publish to Instagram.\n';
const planPath = path.join(root, 'weekly-plans', weekKey + '.md');
fs.mkdirSync(path.dirname(planPath), { recursive: true });
fs.writeFileSync(planPath, body, 'utf8');
console.log('Created weekly plan: ' + path.relative(root, planPath));
for (const idea of selected) {
  execFileSync(process.execPath, [path.join(root, 'scripts', 'create-production-pack.mjs'), idea.title, '--week', weekKey], { cwd: root, stdio: 'inherit' });
}
console.log('Created all 3 weekly production packs for ' + weekKey + '.');