module.exports = {
  theme: {
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Montserrat', 'serif'],
      serif: ['Montserrat', 'sans-serif'],
      mono: ['Montserrat', 'monospace'],
      display: ['Pacifico', 'display'],
      body: ['Montserrat', 'sans-serif'],
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    variants: {
      aspectRatio: ['responsive'],
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/7': '14.285714%',
        '2/7': '28.571428%',
        '3/7': '42.857142%',
        '4/7': '57.142857%',
        '5/7': '71.428571%',
        '6/7': '85.714285%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      animation: {
        chroma: 'chroma 10000ms 0ms infinite linear',
      },
      keyframes: {
        chroma: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      gradientColorStops: ['group-hover'],
    },
  },
  plugins: [require('tailwindcss-aspect-ratio')],
};
