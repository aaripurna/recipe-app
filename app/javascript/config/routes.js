import VueRouter from 'vue-router';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/recipes/index')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('../pages/errors/404')
    }
  ]
})
