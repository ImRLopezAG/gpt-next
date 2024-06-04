import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#171717',
          secondary: '#212121',
        },
        fg: {
          primary: '#2f2f2f',
          secondary: '#676767',
          tertiary: '#ececec',
        },
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
