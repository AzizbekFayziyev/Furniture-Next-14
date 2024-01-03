import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        syne: ["var(--font-syne)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        green: "#2D322B",
        mediumGreen: "#556652",
        lightGreen: "#D2FFAF",
        dark: "#242424",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#D2FFAF",
            },
            secondary: {
              DEFAULT: "#556652",
            },
            default: {
              DEFAULT: "#D2FFAF",
              foreground: "#222222",
            },
          },
        },
      },
    }),
  ],
};
export default config;
