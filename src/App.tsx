import * as React from 'react'

import { CustomThemeProvider as ThemeProvider, CustomRouterProvider } from './service'
import { Main } from './layout'
import { MyContainer } from './containers'

const App: React.FC = () => (
  <CustomRouterProvider>
    <ThemeProvider>
      <MyContainer>
        <Main />
      </MyContainer>
    </ThemeProvider>
  </CustomRouterProvider>
)

export default App
