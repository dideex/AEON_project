import * as React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, grey, red } from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    color: {
      subAccent: string
      accent: string
      background: string
      font: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    color?: {
      subAccent?: string
      accent?: string
      background?: string
      font?: string
    }
  }
}

const accentColor = deepPurple.A200
const theme = createMuiTheme({
  color: {
    subAccent: accentColor,
    accent: accentColor,
    background: grey[50],
    font: grey[800],
  },
  palette: {
    primary: {
      light: deepPurple[300],
      main: accentColor,
      dark: deepPurple[700],
      contrastText: 'white'
    },
    secondary: {
      light: deepPurple.A200,
      main: deepPurple.A400,
      dark: deepPurple.A700,
      contrastText: 'white'
    },
    error: {
      light: red[300],
      main: red[400],
      dark: red[700],
      contrastText: 'white'
    },
  },
})

export const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
