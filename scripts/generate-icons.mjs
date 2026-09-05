/*
 * Generates every icon in public/ from one drawing.
 *
 * The mark is a full ochre field with a white EK, per section 06 of the design
 * document: the only place accent is allowed to be decoration rather than a
 * contact action, because ochre is the one colour in the palette that holds up
 * against both a light and a dark browser tab strip. An ink field disappears
 * into dark mode.
 *
 * The letters are strokes, never <text>. A tab strip has no access to the
 * site's webfont, so a glyph reference would render in whatever the platform
 * felt like or not at all. Straight strokes also survive 16px, which a real
 * grotesque does not: its thin joins turn to mud.
 *
 * The rule under the letters only appears from 96px up. Below that there is no
 * room for a 4px bar to read as anything but dirt, and the clean EK is better.
 *
 * Run with: node scripts/generate-icons.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const FIELD = '#A85B12';
const MARK = '#FFFDF8';

/**
 * Drawn on a 64 grid: cap height 20, the pair 33 wide, which holds roughly the
 * letter-to-field ratio the design draws at every size. `shift` lifts the
 * letters when the rule is present so the whole block stays optically centred
 * rather than the letters alone.
 */
function markSvg({ rule }) {
  const shift = rule ? -4 : 0;
  const top = 22 + shift;
  const bottom = 42 + shift;
  const mid = (top + bottom) / 2;

  const strokes = [
    // E: stem, then three arms. The arms start at the stem's outer edge so the
    // butt caps close the corner instead of leaving a notch.
    `M18,${top} V${bottom}`,
    `M15.5,${top + 2.5} H28.5`,
    `M15.5,${mid} H27`,
    `M15.5,${bottom - 2.5} H28.5`,
    // K: stem, then two arms meeting on the stem's centre line.
    `M34.5,${top} V${bottom}`,
    `M34.5,${mid} L47,${top}`,
    `M34.5,${mid} L47,${bottom}`,
  ];

  if (rule) strokes.push(`M15.5,${bottom + 6.5} H48.5`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="${FIELD}"/>
  <g stroke="${MARK}" stroke-width="5" stroke-linecap="butt" fill="none">
    ${strokes.map((d) => `<path d="${d}"/>`).join('\n    ')}
  </g>
</svg>
`;
}

const small = markSvg({ rule: false });
const large = markSvg({ rule: true });

const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: 512 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/** ICO with PNG payloads, which every browser back to IE11 reads. */
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);

  const directory = Buffer.alloc(16 * entries.length);
  let offset = header.length + directory.length;

  entries.forEach(({ size, data }, index) => {
    const at = index * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, at);
    directory.writeUInt8(size >= 256 ? 0 : size, at + 1);
    directory.writeUInt8(0, at + 2); // palette
    directory.writeUInt8(0, at + 3); // reserved
    directory.writeUInt16LE(1, at + 4); // colour planes
    directory.writeUInt16LE(32, at + 6); // bits per pixel
    directory.writeUInt32LE(data.length, at + 8);
    directory.writeUInt32LE(offset, at + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...entries.map((entry) => entry.data)]);
}

mkdirSync(PUBLIC, { recursive: true });

writeFileSync(join(PUBLIC, 'favicon.svg'), small);

const files = [
  ['favicon-96x96.png', large, 96],
  ['apple-touch-icon.png', large, 180],
  ['web-app-manifest-192x192.png', large, 192],
  ['web-app-manifest-512x512.png', large, 512],
];

for (const [name, svg, size] of files) {
  writeFileSync(join(PUBLIC, name), await png(svg, size));
}

const icoSizes = [16, 32, 48];
writeFileSync(
  join(PUBLIC, 'favicon.ico'),
  ico(await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(small, size) }))))
);

console.log('icons written:', ['favicon.svg', 'favicon.ico', ...files.map(([name]) => name)].join(', '));
