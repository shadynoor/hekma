/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hcare': {
          'primary': '#1B7F47',    // Main green from logo
          'secondary': '#2D8F57',   // Lighter green
          'accent': '#0F5D33',      // Darker green
          'light': '#E8F5E8',       // Very light green
          'gray': '#6B7280',        // Neutral gray
          'dark': '#1F2937',        // Dark text
        }
      },
      fontFamily: {
        'cairo': ['Cairo', 'Arial', 'sans-serif'],
        'arabic': ['Cairo', 'Arial', 'sans-serif'],
        'english': ['Cairo', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'inline-1': '0.25rem',
        'inline-2': '0.5rem',
        'inline-3': '0.75rem',
        'inline-4': '1rem',
        'inline-6': '1.5rem',
        'inline-8': '2rem',
      },
      margin: {
        'inline-auto': 'auto',
        'inline-start-auto': 'auto 0 auto auto',
        'inline-end-auto': 'auto auto auto 0',
      },
      padding: {
        'inline-1': '0 0.25rem',
        'inline-2': '0 0.5rem',
        'inline-3': '0 0.75rem',
        'inline-4': '0 1rem',
        'inline-6': '0 1.5rem',
        'inline-8': '0 2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.margin-inline-auto': {
          'margin-inline': 'auto',
        },
        '.margin-inline-start-auto': {
          'margin-inline-start': 'auto',
        },
        '.margin-inline-end-auto': {
          'margin-inline-end': 'auto',
        },
        '.padding-inline-1': {
          'padding-inline': '0.25rem',
        },
        '.padding-inline-2': {
          'padding-inline': '0.5rem',
        },
        '.padding-inline-3': {
          'padding-inline': '0.75rem',
        },
        '.padding-inline-4': {
          'padding-inline': '1rem',
        },
        '.padding-inline-6': {
          'padding-inline': '1.5rem',
        },
        '.padding-inline-8': {
          'padding-inline': '2rem',
        },
        '.gap-inline-1': {
          'column-gap': '0.25rem',
        },
        '.gap-inline-2': {
          'column-gap': '0.5rem',
        },
        '.gap-inline-3': {
          'column-gap': '0.75rem',
        },
        '.gap-inline-4': {
          'column-gap': '1rem',
        },
        '.gap-inline-6': {
          'column-gap': '1.5rem',
        },
        '.gap-inline-8': {
          'column-gap': '2rem',
        },
        '.text-align-start': {
          'text-align': 'start',
        },
        '.text-align-end': {
          'text-align': 'end',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};