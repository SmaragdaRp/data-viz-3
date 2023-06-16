/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px"
    },
    extend: {
      colors:{
        hspetrol: {
          DEFAULT: "#6cbfcd",
          light: "#aadbe3",
          footergray: "#bfdee3",
        },
        // hsblue: {
        //   // DEFAULT: "#1a2737",
        //   hoverlight: "#223e61"
        // }
      },
    },
  },
  plugins: [],
}

