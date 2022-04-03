module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'font-main': '#707070',
        'brown-dark': '#624D40',
        'brown-light': '#907B6E',
        'brown-lighter': '#E8DFD8'
      }
    }
  },
  plugins: []
}
