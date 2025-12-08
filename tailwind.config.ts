/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        newton: {
          light: "var(--color-newton-light)",
          accent: "var(--color-newton-accent)",
          blue: "var(--color-newton-blue)",
          dark: "var(--color-newton-dark)",
          deep: "var(--color-newton-deep)",
        },
      },
      backgroundColor: {
        "newton-dark": "var(--color-newton-dark)",
        "newton-deep": "var(--color-newton-deep)",
      },
      textColor: {
        "newton-light": "var(--color-newton-light)",
        "newton-accent": "var(--color-newton-accent)",
        "newton-blue": "var(--color-newton-blue)",
      },
      borderColor: {
        "newton-accent": "var(--color-newton-accent)",
        "newton-blue": "var(--color-newton-blue)",
      },
    },
  },
  plugins: [],
};