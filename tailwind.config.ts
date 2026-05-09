import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto', ...defaultTheme.fontFamily.sans],
        display: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          50: '#f7f7f7',
          100: '#e5e5e5',
          200: '#c9c9c9',
          300: '#a0a0a0',
          400: '#707070',
          500: '#4a4a4a',
          600: '#2c2c2c',
          700: '#1a1a1a',
          800: '#121212',
          900: '#0a0a0a',
          950: '#050505',
        },
        paper: {
          DEFAULT: '#fafaf7',
          50: '#ffffff',
          100: '#fafaf7',
          200: '#f2f2ee',
          300: '#e7e7e0',
        },
        accent: {
          DEFAULT: '#39FF14',
          50: '#f0ffe8',
          500: '#39FF14',
          600: '#2db30d',
        },
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 10vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 7vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.5rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        38: '9.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
