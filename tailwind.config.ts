import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sideBarMenuSlideIn: {
          from: {
            marginLeft: "-1000px",
          },
          to: {
            marginLeft: "0px",
          },
        },
        sideBarMenuSlideOut: {
          from: {
            marginLeft: "0px",
          },
          to: {
            marginLeft: "-1000px",
          },
        },
        rotateNhide: {
          from: {
            rotate: "z 0deg",
            opacity: "1",
            // display: "block",
          },
          to: {
            rotate: "z -90deg",
            opacity: "0",
            // display: "none",
          },
        },
        rotateNshow: {
          from: {
            rotate: "z -90deg",
            opacity: "0",
            // display: "none",
          },
          to: {
            rotate: "z 0deg",
            opacity: "1",
            // display: "block",
          },
        },
      },
    },
    animation: {
      sideBarMenuSlideIn: "sideBarMenuSlideIn 0.5s ease-in",
      sideBarMenuSlideOut: "sideBarMenuSlideOut 1s ease-in",
      rotateNhide: "rotateNhide 0.3s ease-in",
      rotateNshow: "rotateNshow 0.3s ease-in",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
