import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e47a3',
          hover: '#2b63d1',
        },
        slate: {
          700: '#334155',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
}
export default config