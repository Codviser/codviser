/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          10: '#06665f',
          50: '#02ff95',
          90: '#003128',
        },
        gray: {
          
          20: '#f7f7f7',
          30: '#D1FFEB'
         
        },
        orange: {
          50: '#f59220',
        },
       bgColor: {
        50: '#00FF94'
       }
      },
      fontFamily: {
        sans: ['inter', 'sans-serif'],
      },
      backgroundImage: {
        'bg-img-1': "linear-gradient(90deg, rgba(10,22,32,1) 0%, rgba(5,11,14,1) 40%);",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};