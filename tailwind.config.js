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
        'darkcontent': 'var(--darkcontent-color)',
        'primary': 'var(--primary-color)',
        'lightprimary': 'var(--lightprimary-color)',
        'darkprimary': 'var(--darkprimary-color)',
        'secondary': 'var(--secondary-color)',
        'footer': 'var(--footer-color)',
        'content': '#cecece',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'gradient-red-radial': 'radial-gradient(var(--gradient-redcolor-stops))',
        'gradient-small-radial1': 'linear-gradient(var(--gradient-small1))',
        'gradient-small-radial2': 'linear-gradient(var(--gradient-small2))',
        'light-gradient-radial': 'radial-gradient(var(--light-gradient-color-stops))',
        'gradient-linear': 'linear-gradient(var(--gradient-linear-stops))',
        'gradient-multi': 'linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(51.29% 51.29% at 50% 50%, rgba(41, 176, 128, 0.53) 0%, rgba(238, 32, 239, 0.053) 56.77%, rgba(41, 176, 128, 0.09) 76.56%, rgba(41, 176, 128, 0) 100%)'
      }
    },
  },
  plugins: [],
}
