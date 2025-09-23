import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default async function Image() {
  const title = 'Transform Your Service Business';
  const subline =
    'AI-powered solutions for appointment-based and service-oriented businesses.';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontFamily: '"Inter", sans-serif',
          backgroundImage:
            'linear-gradient(to bottom right, #fef7ed 0%, #f0fdfa 100%)',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: 'center',
            padding: '0 80px',
            color: '#1e1e1e',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            textAlign: 'center',
            padding: '0 100px',
            color: '#4f4f4f',
          }}
        >
          {subline}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            fontWeight: 600,
            color: '#14b8a6',
          }}
        >
          jaithraya.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
