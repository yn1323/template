import { lazy } from 'react'

const Home = lazy(() => import('src/page/Home'))

export const routes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
]
