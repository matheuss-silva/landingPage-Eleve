/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050505',
          card: '#0A0A0A',
          cardHover: '#0F0F0F',
          dark: '#0B3954',
          secondary: '#0F5C73',
          primary: '#1C7C7D',
          light: '#2FAE7A',
          accent: '#9EDC6F',
          text: '#A1A1AA',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #0B3954, #1C7C7D, #2FAE7A, #9EDC6F)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
