import * as React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, grey, red, pink } from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    color: {
      accent: string
      subAccent: string
      background: string
      font: string
      blue: string
      green: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    color?: {
      accent?: string
      subAccent?: string
      background?: string
      font?: string
      blue?: string
      green?: string
    }
  }
}

const accentColor = deepPurple.A200
const theme = createMuiTheme({
  color: {
    accent: accentColor,
    subAccent: pink[300],
    background: grey[50],
    font: grey[800],
    blue: '#00A6E6',
    green: '#1AC686',
  },
  palette: {
    primary: {
      light: deepPurple[300],
      main: accentColor,
      dark: deepPurple[700],
      contrastText: grey[800],
    },
    secondary: {
      light: pink[200],
      main: pink[300],
      dark: pink[500],
      contrastText: grey[800],
    },
    error: {
      light: red[300],
      main: red[400],
      dark: red[700],
      contrastText: 'white',
    },
  },
})

export const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
