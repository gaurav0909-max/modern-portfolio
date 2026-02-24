import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        tablet: '900px',
      },
      colors: {
        // ── Raw palettes ─────────────────────────────────────────────────
        'light-blue': {
          50:  'rgb(237 247 247)',
          100: 'rgb(219 240 240)',
          200: 'rgb(184 224 224)',
          300: 'rgb(148 209 209)',
          400: 'rgb(112 194 194)',
          500: 'rgb(77 178 179)',
          600: 'rgb(61 143 143)',
          700: 'rgb(46 107 107)',
          800: 'rgb(31 71 71)',
          900: 'rgb(15 36 36)',
          950: 'rgb(11 25 25)',
        },
        'slate-grey': {
          50:  'rgb(241 243 244)',
          100: 'rgb(227 231 232)',
          200: 'rgb(199 206 209)',
          300: 'rgb(171 182 186)',
          400: 'rgb(143 157 163)',
          500: 'rgb(115 133 140)',
          600: 'rgb(92 106 112)',
          700: 'rgb(69 80 84)',
          800: 'rgb(46 53 56)',
          900: 'rgb(23 27 28)',
          950: 'rgb(16 19 20)',
        },
        'vintage-grape': {
          50:  'rgb(245 239 245)',
          100: 'rgb(235 224 235)',
          200: 'rgb(215 193 215)',
          300: 'rgb(195 162 195)',
          400: 'rgb(175 131 175)',
          500: 'rgb(156 99 156)',
          600: 'rgb(124 80 124)',
          700: 'rgb(93 60 93)',
          800: 'rgb(62 40 62)',
          900: 'rgb(31 20 31)',
          950: 'rgb(22 14 22)',
        },
        'cotton-rose': {
          50:  'rgb(249 236 235)',
          100: 'rgb(244 217 215)',
          200: 'rgb(233 178 175)',
          300: 'rgb(221 140 136)',
          400: 'rgb(210 102 96)',
          500: 'rgb(199 63 56)',
          600: 'rgb(159 51 45)',
          700: 'rgb(119 38 34)',
          800: 'rgb(80 25 22)',
          900: 'rgb(40 13 11)',
          950: 'rgb(28 9 8)',
        },
        'evergreen': {
          50:  'rgb(239 245 240)',
          100: 'rgb(224 235 226)',
          200: 'rgb(193 215 196)',
          300: 'rgb(162 195 167)',
          400: 'rgb(131 175 137)',
          500: 'rgb(99 156 108)',
          600: 'rgb(80 124 86)',
          700: 'rgb(60 93 65)',
          800: 'rgb(40 62 43)',
          900: 'rgb(20 31 22)',
          950: 'rgb(14 22 15)',
        },
        // ── Semantic tokens ───────────────────────────────────────────────
        background: {
          DEFAULT:          'rgb(241 243 244)',   // slate-grey-50
          card:             '#ffffff',
          elevated:         'rgb(237 247 247)',   // light-blue-50
          'elevated-hover': 'rgb(219 240 240)',   // light-blue-100
        },
        surface: {
          1: 'rgba(77, 178, 179, 0.04)',
          2: 'rgba(77, 178, 179, 0.07)',
          3: 'rgba(77, 178, 179, 0.10)',
        },
        border: {
          DEFAULT: 'rgb(199 206 209)',   // slate-grey-200
          accent:  'rgb(184 224 224)',   // light-blue-200
          hover:   'rgb(148 209 209)',   // light-blue-300
        },
        primary: {
          DEFAULT: 'rgb(77 178 179)',    // light-blue-500
          light:   'rgb(112 194 194)',   // light-blue-400
          dark:    'rgb(61 143 143)',    // light-blue-600
        },
        secondary: {
          DEFAULT: 'rgb(156 99 156)',    // vintage-grape-500
          light:   'rgb(175 131 175)',   // vintage-grape-400
          dark:    'rgb(124 80 124)',    // vintage-grape-600
        },
        accent: {
          DEFAULT: 'rgb(99 156 108)',    // evergreen-500
          dark:    'rgb(80 124 86)',     // evergreen-600
        },
        danger: {
          DEFAULT: 'rgb(199 63 56)',     // cotton-rose-500
          light:   'rgb(210 102 96)',    // cotton-rose-400
          dark:    'rgb(159 51 45)',     // cotton-rose-600
        },
        foreground: 'rgb(23 27 28)',     // slate-grey-900
        text: {
          primary:          'rgb(23 27 28)',     // slate-grey-900
          secondary:        'rgb(69 80 84)',     // slate-grey-700
          tertiary:         'rgb(115 133 140)',  // slate-grey-500
          muted:            'rgb(143 157 163)',  // slate-grey-400
          reverse:          '#ffffff',
          'dark-primary':   'rgb(23 27 28)',
          'dark-secondary': 'rgb(69 80 84)',
          'dark-tertiary':  'rgb(115 133 140)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem,5vw,4.5rem)',      { lineHeight: '1',   letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl':  ['clamp(2.5rem,4vw,3.75rem)',   { lineHeight: '1',   letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg':  ['clamp(2rem,3.5vw,3rem)',      { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md':  ['clamp(1.5rem,2.5vw,2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm':  ['clamp(1.25rem,2vw,1.875rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      animation: {
        'border-beam':    'border-beam 3s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float':          'float 6s ease-in-out infinite',
        'glow-pulse':     'glow-pulse 4s ease-in-out infinite',
        'fade-in':        'fade-in 0.5s ease-out',
        'slide-up':       'slide-up 0.5s ease-out',
        'scale-in':       'scale-in 0.3s ease-out',
      },
      keyframes: {
        'border-beam': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%':       { transform: 'translateX(100%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-18px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%':       { opacity: '0.55', transform: 'scale(1.04)' },
        },
        'fade-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero':   'linear-gradient(135deg, rgb(77 178 179) 0%, rgb(156 99 156) 100%)',
        'gradient-aurora': 'linear-gradient(135deg, rgba(77,178,179,0.10) 0%, rgba(156,99,156,0.07) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm':    '0 0 14px rgba(77, 178, 179, 0.16)',
        'glow-md':    '0 0 28px rgba(77, 178, 179, 0.20)',
        'glow-lg':    '0 0 44px rgba(77, 178, 179, 0.26)',
        'inner-glow': 'inset 0 0 14px rgba(77, 178, 179, 0.08)',
        'card':       '0 1px 3px rgba(23,27,28,0.06), 0 4px 12px rgba(23,27,28,0.04)',
        'card-hover': '0 4px 16px rgba(23,27,28,0.10), 0 1px 4px rgba(23,27,28,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
