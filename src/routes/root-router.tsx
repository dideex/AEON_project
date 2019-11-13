import * as React from 'react'
import { Switch, Route } from 'react-router'

import { Landing, AuthLayout, Me } from '../layout'
import { Register } from '../components/auth'

export const RootRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/me" component={Me} />
      <Route path="/register" component={Register} />
      <Route path="/auth" component={AuthLayout} />
      <Route path="/" component={Landing} />
      <Route path="*" component={Landing} />
    </Switch>
  )
}
