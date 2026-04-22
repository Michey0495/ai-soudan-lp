/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0FAFA",
          100: "#E6F7F6",
          200: "#C4EEEB",
          300: "#8FDEDA",
          400: "#4FCBC5",
          500: "#0ABAB5",
          600: "#089B96",
          700: "#067A76",
          800: "#055A57",
          900: "#033A38",
        },
        coral: {
          50: "#FFF4F1",
          100: "#FFE8E1",
          200: "#FFCDBE",
          300: "#FFAA92",
          400: "#FF8B6B",
          500: "#F06A48",
          600: "#E8704F",
          700: "#C2553A",
          800: "#8F3D29",
          900: "#5A2719",
        },
        ink: {
          900: "#262626",
          700: "#595959",
          500: "#8C8C8C",
          300: "#BFBFBF",
          200: "#D9D9D9",
          100: "#E8E8E8",
          50: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans JP",
          "Yu Gothic",
          "游ゴシック",
          "YuGothic",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 2px 24px rgba(10, 186, 181, 0.08)",
        card: "0 4px 32px rgba(10, 186, 181, 0.06)",
      },
    },
  },
  plugins: [],
};
