// Next 13.5 exports ImageResponse from `next/server`; the `next/og` entrypoint
// this was first written against only exists from Next 14.
import { ImageResponse } from 'next/server';

import { sr } from '@/utils/translations/sr';

/**
 * The 1200x630 share card, rendered at build time instead of shipped as a file.
 *
 * The repo previously pointed OpenGraph at the 600x519 hero photo, which is
 * under the 1200x630 minimum for a large summary card: X, LinkedIn and Slack
 * all fell back to the small square preview.
 *
 * Typography only, no photograph. The one real photo is on a white background
 * and does not sit on this dark card, and the design's rule is that a missing
 * image leaves type rather than a placeholder.
 */
export const alt = 'Ugradnja euro kuke sa atestom, Beograd';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#1C1A17',
          color: '#F6F3EC',
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
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {sr.home.hero.title}
          </div>
          <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.4, color: '#A69C89', maxWidth: 800 }}>
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
          <div style={{ fontSize: 22, color: '#8A8272' }}>ugradnjaeurokuka.com</div>
        </div>
      </div>
    ),
    size
  );
}
