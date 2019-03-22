export default [
  {
    path: '/user',
    component: '../layouts/LoginLayout',
    routes: [
      {
        path: '/user/login',
        component: './Login'
      }
    ]
  },
  {
    path: '/system',
    component: '../layouts/BasicLayout',
    Routes: ['./src/pages/Authorized'],
    routes: [
      {path: '/', redirect: '/system/user'},
      {
        path: '/system/user',
        component: './User'
      },
      {
        path: '/system/product',
        component: './Product'
      }
    ]
  }
]
