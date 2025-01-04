/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        bounceSmall: 'bounceSmall 1.2s ease-in-out infinite',
        spin: 'spin 1.5s linear infinite',
        'scale-up': 'scale-up 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
      fontFamily: {
        rammetto: ["Rammetto One", "sans-serif"],
        strike: ["Protest Strike", "sans-serif"],
      },
      colors:{
        cartGreen: '#385745',
        orange0: '#e67919',
      },
    },
  },
  plugins: [],
}

