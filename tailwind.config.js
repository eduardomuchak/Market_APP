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
        poppinsLight: 'Poppins_300Light',
        poppinsRegular: 'Poppins_400Regular',
        poppinsMedium: 'Poppins_500Medium',
        poppinsSemibold: 'Poppins_600SemiBold',
        poppinsBold: 'Poppins_700Bold',
        poppinsExtrabold: 'Poppins_800ExtraBold',
        poppinsBlack: 'Poppins_900Black',
      },
    },
  },
  plugins: [],
};
