/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        introScroll: 'introScroll 1.75s infinite',
      },
      keyframes: {
        introScroll: {
          '0%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(300%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
