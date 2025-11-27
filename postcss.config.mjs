const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        'in26-dark': '#011926', // Main background color
        'in26-orange': '#F26725', // Button color
        'in26-light-orange': '#FF8040', // Hover color
      },
    },
  },
};

export default config;
