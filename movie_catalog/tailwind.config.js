

import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc[900],       // Fundo principal escuro
        secondary: colors.gray[700],     // Para fundos de seções ou cartões
        accent: colors.cyan[800],        // Detalhes, botões
        background: colors.gray[800],    // Fundo geral
        textPrimary: colors.gray[300],   // Texto primário claro
        textSecondary: colors.gray[400], // Texto secundário ou descritivo
        header_bg: colors.gray[900],     // Cor de fundo do cabeçalho
        hover: colors.cyan[800],         // Cor de hover para interações
      },
      
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Defina a fonte como padrão (sans-serif)
      },
    },
  },
  plugins: [],
}
