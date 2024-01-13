import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        azeret: ['Azeret Mono', 'monospace'],
        oswald: ['Oswald', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        hobby: '3px 3px #852CD6',
      },
      colors: {
        'fuchsia': '#DB00FF',
        'purple-dark': '#300754',
        'purple-darkest': '#2E1F47',
        'purple-darker': '#39265C',
        'purple-light': '#8B56BB',
        'violet': '#852CD6',
        'deep-purple': '#4B276B',
        'purple-blue': '#683299'
      },
    },
  },
  plugins: [],
}
export default config
