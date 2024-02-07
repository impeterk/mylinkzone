
import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Fira Code', ...defaultTheme.fontFamily.mono],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  darkMode: 'class'
}

