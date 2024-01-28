/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifygreen: "#1DB954",
        spotifyblack: "#111212",
        divblack: "#181818",

        spotifydarkgrey: "#535353",
        spotifylightgrey: "#b3b3b3",
        spotifylightblack: "#212121",
      },
    },
  },
  plugins: [],
};
