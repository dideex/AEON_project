import * as React from 'react'
import { Switch, Route } from 'react-router'

import { Landing } from '../layout'
import { Auth } from '../components/auth'

export const RootRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" component={Landing} />
      <Route path="*" component={Landing} />
    </Switch>
  )
}
