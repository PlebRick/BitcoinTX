module.exports = {
  darkMode: 'class', // Enable dark mode manually via class
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // All files in src/ with relevant extensions
    './public/index.html', // Include the root HTML file if needed
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#1e293b',
          900: '#181a1f',
          800: '#1f2937',
          700: '#374151',
        },
        yellow: {
          400: '#fbbf24',
        },
      },
    },
  },
  plugins: [],
};
