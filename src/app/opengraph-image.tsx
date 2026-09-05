import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Next 13.5 exports ImageResponse from `next/server`; the `next/og` entrypoint
// this was first written against only exists from Next 14.
import { ImageResponse } from 'next/server';

import { PHOTO_HEIGHT, PHOTO_WIDTH, PHOTOS } from '@/lib/site';
import { sr } from '@/utils/translations/sr';

/**
 * The 1200x630 share card, rendered at build time instead of shipped as a file.
 *
 * The repo previously pointed OpenGraph at a 600x519 render, which is under the
 * 1200x630 minimum for a large summary card: X, LinkedIn and Slack all fell
 * back to the small square preview.
 *
 * The photograph is inlined as a data URI rather than fetched. This route runs
 * once at build time with no server to fetch from, and satori has no loader for
 * a bare `/images/...` path.
 */
export const alt = 'Ugradnja euro kuke sa atestom, Beograd';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const PHOTO_BOX = 456;

/*
 * satori has no object-fit, so the cover crop is worked out here: scale the
 * 3:4 frame until it fills the box on both axes, then pull it left by half the
 * overflow so it stays centred.
 */
const SCALE = Math.max(PHOTO_BOX / PHOTO_WIDTH, size.height / PHOTO_HEIGHT);
const PHOTO_RENDER_WIDTH = Math.ceil(PHOTO_WIDTH * SCALE);
const PHOTO_RENDER_HEIGHT = Math.ceil(PHOTO_HEIGHT * SCALE);

const photoDataUri = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), 'public', PHOTOS.mount)
).toString('base64')}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#1C1A17',
          color: '#F6F3EC',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: PHOTO_BOX,
            height: size.height,
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoDataUri}
            alt=''
            width={PHOTO_RENDER_WIDTH}
            height={PHOTO_RENDER_HEIGHT}
            style={{ marginLeft: -Math.round((PHOTO_RENDER_WIDTH - PHOTO_BOX) / 2) }}
          />
        </div>

        {/* Fades the photograph into the ink so the two halves read as one
            card rather than a picture pasted beside a headline. */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: PHOTO_BOX - 160,
            width: 160,
            height: size.height,
            background: 'linear-gradient(90deg, #1C1A17 0%, rgba(28,26,23,0) 100%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 800,
            height: '100%',
            padding: 64,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 26,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#C98A3E',
              }}
            >
              {sr.home.hero.eyebrow}
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: -2,
                maxWidth: 640,
              }}
            >
              {sr.home.hero.title}
            </div>
            <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: '#A69C89', maxWidth: 600 }}>
              Montaža 3-4 sata · termin do 24 sata · garancija 2 godine
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 76,
                padding: '0 30px',
                background: '#A85B12',
                color: '#FFFDF8',
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              {sr.actions.callAppointment}
            </div>
            <div style={{ fontSize: 22, color: '#A69C89' }}>ugradnjaeurokuka.com</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
