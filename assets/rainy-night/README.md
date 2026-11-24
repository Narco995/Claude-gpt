# Reusable rainy-night assets

## Rain overlay

- File: `rain-overlay-128.webp`
- Size: 128 × 128 px
- Animation: 8 frames at 8 fps, seamless loop
- Palette: limited navy, steel-blue and muted-cyan tones
- Role: repeating texture layer for rainy city, café-window and bedroom-window scenes
- Source: Pixel Engine; 26 free monthly credits used (6 for source sprite + 20 for animation)

### VN usage
1. Import the WebP as an overlay above the background clip.
2. Scale it to fill the 9:16 canvas and extend it across the shot.
3. Lower opacity until the rain supports the scene without hiding the subject.
4. Keep the overlay moving consistently across adjacent clips; avoid abrupt direction changes.
5. Check whether the current VN version imports animated WebP. If it does not, keep this source asset in the repository and convert/export a compatible loop before editing.

The source job IDs and palette are in `rain-overlay-128.json`.
