/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        appGolden: "#DDB6A0",
        appBlue: "#3E58B6",
        appPurple: "#7546FC",
        appGreen: "#066970",
      },
      backgroundImage: {
        "gradient-to-60": "linear-gradient(135deg, var(--tw-gradient-stops))"
      },
      fontFamily: {
        "comfortaa": ["Comfortaa", "sans-serif"],
        "ubuntu": ["Ubuntu Mono", "sans-serif"],
      },
      borderRadius: {
        20: '20px'
      }
    },
  },
  plugins: [],
}

