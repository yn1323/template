import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import { routes } from 'src/constant'

const NotFound = lazy(() => import('src/page/404'))

const Router = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {routes.map(({ component, path }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
        <Route component={NotFound} />
      </IonRouterOutlet>
    </IonReactRouter>
  )
}

export default Router
