import * as React from 'react'

import {
  CustomThemeProvider as ThemeProvider,
  CustomRouterProvider as RouterProvider,
  CustomApolloProvider as ApolloProvider,
} from './service'
import { RootContainer } from './containers'
import { RootRouter } from './routes'

const App: React.FC = () => (
  <RootContainer>
    <ApolloProvider>
      <RouterProvider>
        <ThemeProvider>
          <RootRouter />
        </ThemeProvider>
      </RouterProvider>
    </ApolloProvider>
  </RootContainer>
)

export default App
