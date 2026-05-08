import { ImageResponse } from 'next/og';

export const alt = 'Aatiqa Hussain - Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            padding: '12px 24px',
            background: 'rgba(168, 85, 247, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            borderRadius: '999px',
            color: '#c4b5fd',
            fontSize: '24px',
            fontWeight: 500,
            marginBottom: '32px',
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '96px',
            fontWeight: 800,
            background:
              'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #ec4899 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Aatiqa Hussain
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '40px',
            color: '#e5e7eb',
            fontWeight: 500,
            marginBottom: '40px',
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '24px',
            color: '#9ca3af',
            maxWidth: '900px',
          }}
        >
          MERN · Next.js · React · Node.js · MongoDB
        </div>
      </div>
    ),
    { ...size }
  );
}
