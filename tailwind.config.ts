import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: {
          default: "#28204A",
          hover: "#544393"
        },
        txt: {
          default: "#fffff",
          secondary: "#6c757d",
          err: "#ef4444"
        },
        border: {
          default:"#69546F",
        },
        bg: {
          solid: "#1A161BCC",
          home: "#000000",
          chip: "#5F5F5F"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage: {
      'earth': "url('/earth-bg.png')",
    },
  },
  plugins: [],
};
export default config;
