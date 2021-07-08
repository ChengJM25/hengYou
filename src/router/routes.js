const routes = [
  {path: '',redirect: '/home'},
  {name: 'Home',path: '/home',component: () => import('views/home/Home')},
  {name: 'Emphasis',path: '/emphasis',component: () => import('views/emphasis/Emphasis')},
  {name: 'Foreign',path: '/foreign',component: () => import('views/foreign/Foreign')},
  {name: 'Domestic',path: '/domestic',component: () => import('views/domestic/Domestic')},
  {name: 'Retrospectives',path: '/retrospectives',component: () => import('views/retrospectives/Retrospectives')},
  {name: 'Information',path: '/information',component: () => import('views/information/Information')},
  {name: 'Company',path: '/company',component: () => import('views/company/Company')},
  {name: 'Supply',path: '/supply',component: () => import('views/supply/Supply')},
  {name: 'About',path: '/about',component: () => import('views/about/About')},
]


export default routes
