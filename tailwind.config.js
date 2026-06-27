/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surya: {
          50: '#F9FAF8',  // Suryapura Sand
          100: '#EAEFE7', 
          400: '#8FB38D', 
          600: '#2C5F2D', // Banyan Green
          900: '#1A361A', 
        },
        terra: {
          500: '#D96C4A', // Terra Clay
        },
        surface: {
          DEFAULT: '#FFFFFF', // Pearl White
          muted: '#E2E8F0',   // Muted Sage
        },
        ink: {
          high: '#1A1A1A',    // Charcoal Ink
          low: '#64748B',     // Slate Gray
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        hindi: ['"Hind"', 'sans-serif'],
        display: ['"Yatra One"', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}