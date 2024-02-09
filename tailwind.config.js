import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Geist Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
        'sans': ['Geist Sans', 'Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  darkMode: 'class'
}

