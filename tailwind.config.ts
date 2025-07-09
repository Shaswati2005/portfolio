import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['"ZCOOL XiaoWei"', 'serif'],
        headline: ['"ZCOOL XiaoWei"', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'halo': {
          'from': { transform: 'scale(1)', opacity: '0.4' },
          'to': { transform: 'scale(2.5)', opacity: '0' },
        },
        'petal-toss': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translate(var(--petal-end-x), var(--petal-end-y)) rotate(var(--petal-end-rotation))', opacity: '0' },
        },
        'button-press': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
        },
        'cursor-petal': {
            '0%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)', opacity: '1' },
            '100%': { transform: 'translate(calc(var(--petal-final-x) - 50%), calc(var(--petal-final-y) - 50%)) rotate(var(--petal-final-rotation)) scale(0.5)', opacity: '0' },
        },
        'falling-petal': {
            '0%': { transform: 'translate(var(--petal-start-x), -10vh) rotate(0deg)', opacity: '1' },
            '100%': { transform: 'translate(calc(var(--petal-start-x) + var(--petal-sway-x)), 110vh) rotate(var(--petal-final-rotation))', opacity: '0.2' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'transition-fade': {
          '0%': { opacity: '0' },
          '20%, 80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'transition-blossom': {
            '0%': { transform: 'scale(0.5)', opacity: '0' },
            '20%, 80%': { transform: 'scale(1)', opacity: '1' },
            '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        'text-cycle': {
          '0%, 40%': { transform: 'translateY(0)' },
          '50%, 90%': { transform: 'translateY(-1.5rem)' },
          '100%': { transform: 'translateY(-3rem)' },
        },
        'water-ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'sway': 'sway 12s ease-in-out infinite alternate',
        'halo': 'halo 0.8s ease-out forwards',
        'petal-toss': 'petal-toss 1s ease-out forwards',
        'button-press': 'button-press 0.3s ease-in-out',
        'cursor-petal': 'cursor-petal var(--petal-duration, 1.5s) ease-out forwards',
        'falling-petal': 'falling-petal linear infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'transition-fade': 'transition-fade 1s ease-in-out forwards',
        'transition-blossom': 'transition-blossom 1s ease-in-out forwards',
        'text-cycle': 'text-cycle 10s ease-in-out infinite',
        'water-ripple': 'water-ripple 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
