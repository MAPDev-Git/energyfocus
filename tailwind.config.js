/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgdark: '#050C16',
        surfacedark: '#0D1522',
        bglight: '#FEFCED',
        footerblack: '#000000',
        gold: {
          DEFAULT: '#C9A84C',
          bright: '#E0C060',
          deep: '#8D7556',
        },
        neutraltxt: {
          foreground: '#EDEBE6',
          light: '#050C16',
          gray: '#5A6578',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
