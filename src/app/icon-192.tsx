import { ImageResponse } from 'next/og';

export const size = {
  width: 192,
  height: 192,
};

export const contentType = 'image/png';

export default function Icon192() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0066FF',
          borderRadius: '20%',
        }}
      >
        ♪
      </div>
    ),
    {
      ...size,
    }
  );
}
