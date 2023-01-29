/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FEFEFE',
        marketColor: '#F50057',
        marketBlackText: '#2D2926',
        labelText: '#949494',
        inputBackground: '#F5F5F5',
        inputBorder: '#C8C8C8',
        checked: '#22C55E',
        unchecked: '#E5E5EA',
      },
      fontFamily: {
        regular: 'Poppins_400Regular',
        semibold: 'Poppins_600SemiBold',
        bold: 'Poppins_700Bold',
        extrabold: 'Poppins_800ExtraBold',
      },
    },
  },
  plugins: [],
};
