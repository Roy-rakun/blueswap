module.exports = {
  darkMode: 'class', // Aktifin dark mode pake class
  content: [
           './src/**/*.{js,jsx,ts,tsx}',
         ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue-purple': 'linear-gradient(135deg, #1E3A8A, #6D28D9)',
        'gradient-light': 'linear-gradient(135deg,rgb(244, 153, 238),rgb(178, 201, 248))',
      },
      colors: {
        'light-text': '#374151', // Warna teks untuk light theme
        'dark-text': '#F3F4F6', // Warna teks untuk dark theme
      },
    },
  },
};