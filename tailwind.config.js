/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: '#3A4256',
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          secondary: '#1f2937',
          "base-100": '#1f2937',
          neutral: '#ffffff',
          "base-200": '#1f2937',
          accent: '#1f2937'
        }
      },
    ],
  },
  theme: {
    screens: {
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      xxl: { min: '1359px' } // Desktop widescreen.
    },
  },
  plugins: [require("daisyui")],
}