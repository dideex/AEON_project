import * as React from 'react'

import { CustomThemeProvider as ThemeProvider } from './service'
import { Main } from './layout'

const App: React.FC = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
)

export default App
