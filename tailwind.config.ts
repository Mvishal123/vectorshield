import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      fontSize: {
        xs: "1.4rem",
        sm: ["1.6rem", { lineHeight: "2.6rem" }],
        md: "1.8rem",
        lg: "2rem",
        xl: "2.4rem",
        "2xl": "3rem",
        "3xl": "3.2rem",
        "4xl": "4.2rem",
        "5xl": "5.2rem",
        "6xl": ["5.4rem", { lineHeight: "7rem" }],
      },
      spacing: {
        5: "1rem",
        6: "1.2rem",
        7: "1.4rem",
        8: "1.6rem",
        9: "1.8rem",
        10: "2rem",
        11: "2.2rem",
        12: "2.4rem",
        13: "2.6rem",
        14: "2.8rem",
        15: "3rem",
        16: "3.2rem",
        17: "3.4rem",
        18: "3.6rem",
        19: "3.8rem",
        20: "4rem",
        "section": "8rem",
      },
      colors: {
        background: "#101010",
        secondary: "#151515",
        "text-secondary": "#787878",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
