import Typography from 'typography'
import wordpress2013 from 'typography-theme-wordpress-2013'

// wordpress2013.headerLineHeight = 1.1
// wordpress2013.overrideThemeStyles = () => {
//   return {
//     a: {
//       color: `rgb(60,99,243)`,
//     },
//     h1: {
//       lineHeight: 1,
//     },
//   }
// }

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Nunito',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Nunito', 'sans-serif'],
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400', '400i', '700', '700i', '900'],
    },
  ],
})

export const { rhythm, scale } = typography
export default typography
