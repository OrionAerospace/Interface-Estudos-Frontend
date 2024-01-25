import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#35b2f8',
        'primary-dark': '#05053d',
        'primary-light': '#aedff7',
        secondary: '#fdd05d',
        green: '#00a76d',
        info: '#2c8ced',
        success: '#60c466',
        warning: '#ffa13d',
        error: '#ff6b6b',
        light: '#f9f9f9',
        dark: '#2c3e63',
        white: '#ffffff',
        gray: '#a5a5a5',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        caveat: 'var(--font-caveat)',
      },
      boxShadow: {
        default: '0 2px 10px',
        hover: '0 4px 15px',
      },
      keyframes: {
        progress: {
          '0%': { opacity: '0', width: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        progress: 'progress 0.4s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
