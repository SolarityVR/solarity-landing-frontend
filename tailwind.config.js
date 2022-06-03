module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'black': '#000',
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'content': '#cecece',
      },
    },
  },
  plugins: [],
}
