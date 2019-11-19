import * as React from 'react'
import { Switch, Route } from 'react-router'

import { Landing, Me } from '../layout'
import { Register } from '../components/auth'

import AuthRoute from './auth-route'

export const RootRouter: React.FC = () => (
  <Switch>
    <Route path="/me" component={Me} />
    <Route path="/register" component={Register} />
    <Route path="/auth" component={AuthRoute} />
    <Route path="/" component={Landing} />
    <Route path="*" component={Landing} />
  </Switch>
)
