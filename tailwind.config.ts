import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, sans-serif'
      },
      colors: {
        'darkPage': '#000b0d',
        'lightPage': '#ffffff'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
