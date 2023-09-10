/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addBase, addUtilities }) => {
      addBase({
        h1: { fontWeight: '700', fontSize: '72px', lineHeight: 1, letterSpacing: 0 },
        h2: { fontWeight: '700', fontSize: '60px', lineHeight: '64px', letterSpacing: 0 },
        h3: { fontWeight: '700', fontSize: '40px', lineHeight: '54px', letterSpacing: 0 },
        h4: { fontWeight: '700', fontSize: '30px', lineHeight: '40px', letterSpacing: 0 },
        h5: { fontWeight: '700', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        h6: { fontWeight: '700', fontSize: '18px', lineHeight: '30px', letterSpacing: 0 },
      });
      addUtilities({
        '.h1-base': { fontWeight: '400', fontSize: '72px', lineHeight: '72px', letterSpacing: 0 },
        '.h1-md': { fontWeight: '500', fontSize: '72px', lineHeight: '72px', letterSpacing: 0 },
        '.h1-bold': { fontWeight: '700', fontSize: '72px', lineHeight: '72px', letterSpacing: 0 },

        '.h2-base': { fontWeight: '400', fontSize: '60px', lineHeight: '60px', letterSpacing: 0 },
        '.h2-md': { fontWeight: '500', fontSize: '60px', lineHeight: '60px', letterSpacing: 0 },
        '.h2-bold': { fontWeight: '700', fontSize: '60px', lineHeight: '60px', letterSpacing: 0 },

        '.h3-base': { fontWeight: '400', fontSize: '48px', lineHeight: '48px', letterSpacing: 0 },
        '.h3-md': { fontWeight: '500', fontSize: '48px', lineHeight: '48px', letterSpacing: 0 },
        '.h3-bold': { fontWeight: '700', fontSize: '48px', lineHeight: '48px', letterSpacing: 0 },

        '.h4-base': { fontWeight: '400', fontSize: '36px', lineHeight: '40px', letterSpacing: 0 },
        '.h4-md': { fontWeight: '500', fontSize: '36px', lineHeight: '40px', letterSpacing: 0 },
        '.h4-bold': { fontWeight: '700', fontSize: '36px', lineHeight: '40px', letterSpacing: 0 },

        '.h5-base': { fontWeight: '400', fontSize: '30px', lineHeight: '36px', letterSpacing: 0 },
        '.h5-md': { fontWeight: '500', fontSize: '30px', lineHeight: '36px', letterSpacing: 0 },
        '.h5-bold': { fontWeight: '700', fontSize: '30px', lineHeight: '36px', letterSpacing: 0 },

        '.h6-base': { fontWeight: '400', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        '.h6-md': { fontWeight: '500', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },
        '.h6-bold': { fontWeight: '700', fontSize: '24px', lineHeight: '32px', letterSpacing: 0 },

        '.subheading-xl-regular': { fontWeight: '400', fontSize: '20px', lineHeight: '28px', letterSpacing: 0 },
        '.subheading-xl-md': { fontWeight: '500', fontSize: '20px', lineHeight: '28px', letterSpacing: 0 },

        '.subheading-lg-regular': { fontWeight: '400', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },
        '.subheading-lg-md': { fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },

        '.subheading-sm-regular': { fontWeight: '400', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.subheading-sm-md': { fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },

        '.label-xl-md': { fontWeight: '500', fontSize: '20px', lineHeight: '28px', letterSpacing: 0 },
        '.label-xl-bold': { fontWeight: '700', fontSize: '20px', lineHeight: '28px', letterSpacing: 0 },

        '.label-lg-md': { fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },
        '.label-lg-bold': { fontWeight: '700', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },

        '.label-md-md': { fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.label-md-bold': { fontWeight: '700', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },

        '.body-md': { fontWeight: '400', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.body-sm': { fontWeight: '400', fontSize: '14px', lineHeight: '20px', letterSpacing: 0 },
        '.body-xs': { fontWeight: '400', fontSize: '12px', lineHeight: '16px', letterSpacing: 0 },

        '.caption-md': { fontWeight: '800', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },

        '.btn-text-lg': { fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: 0 },
        '.btn-text-md': { fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 },
        '.btn-text-sm': { fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: 0 },

        '.text-sm-semibold': { fontWeight: '600', fontSize: '20px', lineHeight: '30px', letterSpacing: 0 },
        '.text-sm-regular': { fontWeight: '400', fontSize: '14px', lineHeight: '20px', letterSpacing: 0 },
        '.text-md-regular': { fontWeight: '400', fontSize: '16px', lineHeight: '24px', letterSpacing: 0 }
      });
    })
  ],
}

