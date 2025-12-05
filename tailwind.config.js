/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Base
        'primary-black': '#0A0A0A',
        'secondary-black': '#1A1A1A',
        'charcoal': '#2A2A2A',

        // Neon Accents
        'electric-blue': '#0066FF',
        'cyan-bright': '#00D4FF',
        'magenta': '#FF00FF',
        'hot-pink': '#FF0066',
        'vivid-yellow': '#FFD700',
        'neon-cyan': '#00FFFF',

        // Retro Touches
        'vhs-purple': '#8B00FF',
        'sunset-orange': '#FF6B35',
        'arcade-green': '#00FF87',

        // Spotify Brand
        'spotify-green': '#1DB954',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'Archivo Black', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['120px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['80px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['60px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 5px #0066FF, 0 0 10px #0066FF, 0 0 15px #0066FF',
          },
          '100%': {
            'box-shadow': '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 10px #0066FF, 0 0 20px #0066FF, 0 0 30px #0066FF',
        'neon-pink': '0 0 10px #FF0066, 0 0 20px #FF0066, 0 0 30px #FF0066',
        'neon-cyan': '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
