import * as React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, grey } from '@material-ui/core/colors'
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

const theme = createMuiTheme({
  color: {
    subAccent: deepPurple['A200'],
    accent: deepPurple['A200'],
    background: grey[50],
    font: grey[800],
  },
})

export const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
