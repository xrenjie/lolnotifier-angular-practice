module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss/nesting"],
};
