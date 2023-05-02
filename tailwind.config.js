/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cherryswash': ['Cherry Swash'], 
        'metamorphous': ['Metamorphous'], 
        'darkergrotesque': ['Darker Grotesque'], 
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#F28482',
        25: '#F5F8FF',
        50: '#FFFFFF',
        75: '#EAABAD',
        100: '#FBF7F0',
      },
      neutral: {
        DEFAULT: '#FCFCFD',
        50: '#787785',
      }
    }
  },
  plugins: [],
}

