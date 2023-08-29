/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        'gradient-border':
          'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0))',
        'gradient-blue':
          'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))'
      },
      colors: {
        primary: 'text-gray-600',
        main: '#F0F2F5',
        'gray-hover': '#fff3',
        'gray-text': '#DADADA',
        'gray-text-100': '#344767'
      }
    }
  },
  plugins: []
}
