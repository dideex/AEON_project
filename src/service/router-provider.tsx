import React, { FC, ReactNode, useContext } from 'react'
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom'

export const RouterContext = React.createContext({})
const { Provider: RouterProvider } = RouterContext

interface ICustomRouterProvider {
  children: ReactNode
}
export const CustomRouterProvider: FC<ICustomRouterProvider> = ({ children }) => (
  <BrowserRouter>
    <Route>{props => <RouterProvider value={props}>{children}</RouterProvider>}</Route>
  </BrowserRouter>
)

export const useRouter = () => {
  return useContext(RouterContext) as RouteComponentProps
}
