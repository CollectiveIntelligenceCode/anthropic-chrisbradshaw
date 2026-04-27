import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#edc900',
        },
        bg: {
          dark: '#0a0a0a',
          elevated: '#1a1a1a',
          surface: '#252525',
        },
        text: {
          primary: '#ffffff',
          muted: '#a0a0a0',
          secondary: '#707070',
        },
        border: {
          DEFAULT: '#2a2a2a',
          subtle: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
