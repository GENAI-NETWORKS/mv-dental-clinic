/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A7BC4',
          light: '#3FA0E0',
        },
        secondary: '#4CAF50',
        accent: '#FF6B35',
        gold: '#D4A017',
        dark: '#1A1A2E',
        surface: '#F4F9FF',
        muted: '#7A8CA0',
      },
      fontFamily: {
        display: ['Infra', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}

