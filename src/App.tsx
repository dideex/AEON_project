import * as React from 'react'

import {
  CustomThemeProvider as ThemeProvider,
  CustomRouterProvider as RouterProvider,
  CustomApolloProvider as ApolloProvider,
} from './service'
import { Main } from './layout'
import { MyContainer } from './containers'

const App: React.FC = () => (
  <ApolloProvider>
    <RouterProvider>
      <ThemeProvider>
        <MyContainer>
          <Main />
        </MyContainer>
      </ThemeProvider>
    </RouterProvider>
  </ApolloProvider>
)

export default App
