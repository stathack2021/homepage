module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fv': "url('/images/FV.png')",
        'about': "url('/images/about.png')",
        'value': "url('/images/value.png')",
        'member': "url('/images/member.png')",
        'contact': "url('/images/contact.png')",
      }),
      colors: {
        'sh-dark-blue': '#0148B1',
        'sh-dark-blue-hover': '#0162F4',
        'sh-blue': '#2086E5',
        'sh-blue-hover': '#5BA6EC',
        'sh-light-blue': '#29B1EB',
        'sh-light-blue-hover': '#6AC8F1',
        'sh-gray': '#E6EBF1',
        'sh-gray2': '#E8E8E8',
        'sh-gray3': '#AEAEAE',
        'sh-gray4': '#E5E5E5',
        'sh-black': '#111111',
        'sh-white': '#F0F0F0',
      }
    },
    fontFamily: {
      'header': ["Josefin Sans", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'en': ["Josefin Sans", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'jp': ["游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
