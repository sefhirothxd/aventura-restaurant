/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        rosa: "#ff22b0",
        bgPrimary: "#E9FFE1",
      },
      fontFamily: {
        sans: ["Atkinson", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
        ordina: ["Ordina", "sans-serif"],
      },
      screens: {
        probando: "500px",
        xs: "480px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
