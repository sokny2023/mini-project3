import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
        'ss1':"rgba(0, 0, 0, 0.1) 0px 20px 20px -20px"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
  ],
};
export default config;
