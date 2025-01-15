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
        sm: "1.6rem",
        md: "18rem",
        lg: "2rem",
        xl: "2.4rem",
        "2xl": "3rem",
        "3xl": "3.2rem",
        "4xl": "4.2rem",
        "5xl": "5.2rem",
      },
      colors: {
        background: "#101010",
      },
    },
  },
  plugins: [],
} satisfies Config;
