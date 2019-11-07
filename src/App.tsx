import * as React from 'react'

import {
  CustomThemeProvider as ThemeProvider,
  CustomRouterProvider as RouterProvider,
  CustomApolloProvider as ApolloProvider,
} from './service'
import { MyContainer, RootContainer } from './containers'
import { RootRouter } from './routes'

const App: React.FC = () => (
  <RootContainer>
    <ApolloProvider>
      <RouterProvider>
        <ThemeProvider>
          <MyContainer>
            <RootRouter />
          </MyContainer>
        </ThemeProvider>
      </RouterProvider>
    </ApolloProvider>
  </RootContainer>
)

export default App
