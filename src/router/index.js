import asyncComponent from '../components/AsyncComponent';


const config = [
  {
    path: '/Login',
    component: asyncComponent(() => import('../views/login')),
    exact: true,
  },
  {
    path: '/state',
    component: asyncComponent(() => import('../views/state')),
    exact: true,
  }
]

export default config;
