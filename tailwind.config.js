module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-midnight": "#2c3e50",
        "black-pearl": "#1e272e",
        "blue-primary": "#207DFF",
        "green-primary": "#00BD56",
        "green-secondary": "#85EF47",
        "yellow-primary": "#F9FD50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
