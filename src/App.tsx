import * as React from 'react'

import {
  CustomThemeProvider as ThemeProvider,
  CustomRouterProvider as RouterProvider,
  CustomApolloProvider as ApolloProvider,
} from './service'
import { MyContainer } from './containers'
import { RootRouter } from './routes'

const App: React.FC = () => (
  <ApolloProvider>
    <RouterProvider>
      <ThemeProvider>
        <MyContainer>
          <RootRouter />
        </MyContainer>
      </ThemeProvider>
    </RouterProvider>
  </ApolloProvider>
)

export default App
